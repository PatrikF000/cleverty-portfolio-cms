'use client'
import React, { useEffect, useRef, useState } from 'react'
import { useField } from '@payloadcms/ui'
import { BasePayload, CollectionSlug, PayloadRequest, User } from 'payload'
import './draweditor.scss'
import { Media } from '@/payload-types'

// Import components and types
import {
  DrawingControlsExtended,
  ViewSwitcher,
  CanvasContainer,
  LayersList,
  InfoPopup,
  Point,
  Polygon,
  LayerCollections,
  FinallyVersionStoredExtended,
  ViewData,
  ViewDataStored,
  MediaStored,
  ViewBox,
  LayerCategory,
  UnifiedLayers,
  // Keep old types for backward compatibility
  CategorizedLayers,
  LayeredPolygons,
} from './components'
import { useDynamicViews } from './components/useDynamicViews'

// Utility funkce pro generování code-friendly ID
const generateCodeFriendlyId = (name: string): string => {
  return name
    .toLowerCase()
    .normalize('NFD') // Normalizuje Unicode znaky
    .replace(/[\u0300-\u036f]/g, '') // Odstraní diakritiku
    .replace(/[^a-z0-9]/g, '-') // Nahradí nealfanumerické znaky pomlčkami
    .replace(/-+/g, '-') // Sloučí více pomlček do jedné
    .replace(/^-|-$/g, '') // Odstraní pomlčky na začátku a konci
}

// Migration utility to convert old layer structure to new unified structure
const migrateToUnifiedLayers = (
  legacyLayers?: LayeredPolygons,
  categorizedLayers?: CategorizedLayers,
): UnifiedLayers => {
  const unifiedLayers: UnifiedLayers = {}

  // If we have categorizedLayers, use that as the primary source
  if (categorizedLayers) {
    Object.keys(categorizedLayers).forEach((layerKey) => {
      const layerInfo = categorizedLayers[layerKey]
      unifiedLayers[layerKey] = {
        name: layerInfo.name,
        codeFriendlyId: layerKey,
        category: layerInfo.category,
        polygons: legacyLayers?.[layerKey] || layerInfo.polygons || [],
      }
    })
  }

  // If we only have legacyLayers, create unified structure with default values
  if (legacyLayers && !categorizedLayers) {
    Object.keys(legacyLayers).forEach((layerKey) => {
      unifiedLayers[layerKey] = {
        name: layerKey, // Use key as name fallback
        codeFriendlyId: layerKey,
        category: 'building' as LayerCategory, // Default category
        polygons: legacyLayers[layerKey] || [],
      }
    })
  }

  return unifiedLayers
}

type Props = {
  field: {
    admin: {
      custom: {
        phases?: boolean
        addLayerOptions?: boolean
        onlyLayerChoice?: string
        addPagesToChoices?: boolean
        addCustomLabel?: boolean
      }
    }
  }
}

interface DrawEditorInteractiveExtendedProps extends Props {
  payload?: BasePayload
  user?: User
  req: PayloadRequest
  path?: string
  projectID?: string
}

// Interface for views array from the block
/*interface ViewsArray {
  viewName: string
  image: string | number | Media // ID of media or populated Media object
}*/

const DrawEditorInteractiveExtended = (props: DrawEditorInteractiveExtendedProps) => {
  const { path, projectID, field } = props

  const phases = field?.admin?.custom?.phases
  const addLayerOptions = field?.admin?.custom?.addLayerOptions
  const onlyLayerChoice = field?.admin?.custom?.onlyLayerChoice
  const addPagesToChoices = field?.admin?.custom?.addPagesToChoices
  const addCustomLabel = field?.admin?.custom?.addCustomLabel

  // Paylod field hook - disablePicker
  const { value: disablePicker } = useField<boolean>({
    path: `${path?.replace(/\.picker$/, '')}.disPicker`,
  })

  // Payload field hooks
  const { value: storedData, setValue: setStoredData } = useField<FinallyVersionStoredExtended>({
    path: `${path?.replace(/\.picker$/, '')}.pickerValue`,
  })

  // Pro pole zkusíme přístup přes form context
  const viewsFieldPath = `${path?.replace(/\.picker$/, '')}.views`

  // Použijeme vlastní hook pro dynamické načítání pohledů
  const viewsData = useDynamicViews(viewsFieldPath, 10) // Podporuje až 10 pohledů
  // State variables
  const [views, setViews] = useState<Record<string, ViewData>>({})
  const [currentView, setCurrentView] = useState<string>('')
  const [currentLayer, setCurrentLayer] = useState<string>('Výběr')
  const [currentPoints, setCurrentPoints] = useState<Point[]>([])
  const [isDrawing, setIsDrawing] = useState<boolean>(false)
  const [scale, setScale] = useState(1)
  const [newNameOfLayer, setNewNameOfLayer] = useState<string>('')
  const [activePolygonId, setActivePolygonId] = useState<string | null>(null)
  const [selectedPoints, setSelectedPoints] = useState<Point[]>([])
  const [draggingIndex, setDraggingIndex] = useState<number | null>(null)
  const [isInfoOpen, setIsInfoOpen] = useState<boolean>(false)
  const [visibleLayers, setVisibleLayers] = useState<Record<string, boolean>>({})

  const currentViewData = views[currentView] || null
  //const image = currentViewData?.image || null

  const imageWidth = 2560
  const imageHeight = 1440

  const [viewBox, setViewBox] = useState<ViewBox>({
    x: 0,
    y: 0,
    width: imageWidth,
    height: imageHeight,
  })

  // Refs for panning
  const svgRef = useRef<SVGSVGElement>(null)
  const isPanning = useRef(false)
  const lastPanPoint = useRef<Point | null>(null)

  // Initialize views from viewsData
  useEffect(() => {
    if (viewsData && viewsData.length > 0) {
      const initializeViews = async () => {
        const newViews: Record<string, ViewData> = {}
        const currentViewKeys = viewsData.map((view) => generateCodeFriendlyId(view.viewName))
        const disabledPickerValue = disablePicker || false
        for (const view of viewsData) {
          const viewKey = generateCodeFriendlyId(view.viewName)
          let imageData: Media | null = null

          // Fetch image data if image ID is provided
          if (view.image) {
            try {
              // Pokud je image už Media objekt, použij ho přímo
              if (typeof view.image === 'object' && view.image.url) {
                imageData = view.image as Media
              } else {
                // Jinak načti z API
                const imageId = typeof view.image === 'string' ? parseInt(view.image) : view.image
                const mediaFind = await fetch(`/api/media/${imageId}`)
                imageData = await mediaFind.json()
              }
            } catch (error) {
              console.error('Error fetching media:', error)
            }
          }

          // Initialize view data from stored data - vždy zachovej vrstvy i když se obrázek změní
          const storedViewData = storedData?.views?.[viewKey]

          // Pokud se obrázek změnil, vypíšeme do konzole pro debug
          if (storedViewData?.image && imageData?.id && storedViewData.image.id !== imageData.id) {
            console.log(
              `Image changed for view ${viewKey}: ${storedViewData.image.id} -> ${imageData.id}, but keeping layers`,
            )
          }

          // Migrate old data structure to new unified structure
          // Vždy načti vrstvy z uložených dat, i když se obrázek změnil nebo neexistuje
          let unifiedLayers: UnifiedLayers = {}
          if (storedViewData?.layers && typeof storedViewData.layers === 'object') {
            // Check if it's already the new unified structure
            const firstLayer = Object.values(storedViewData.layers)[0]
            if (
              firstLayer &&
              typeof firstLayer === 'object' &&
              'name' in firstLayer &&
              'category' in firstLayer
            ) {
              // It's already unified structure
              unifiedLayers = storedViewData.layers as UnifiedLayers
            } else {
              // It's old structure, migrate it
              unifiedLayers = migrateToUnifiedLayers(
                storedViewData.legacyLayers || (storedViewData.layers as any as LayeredPolygons),
                storedViewData.categorizedLayers,
              )
            }
          }

          newViews[viewKey] = {
            viewName: view.viewName,
            direct: view.direct,
            image: imageData, // Vždy použij aktuální obrázek z viewsData (může být null)
            layers: unifiedLayers, // Zachovej vrstvy i když se obrázek změní nebo neexistuje
            links: storedViewData?.links || [], // Zachovej odkazy i když se obrázek změní
            viewBox: {
              // Don't restore viewBox from stored data to preserve current zoom/pan
              x: 0,
              y: 0,
              width: imageData?.width || imageWidth,
              height: imageData?.height || imageHeight,
            },
          }
        }

        setViews(newViews)

        // Initialize visibility for all layers (all visible by default)
        const allLayerNames = Object.keys(newViews).flatMap((viewKey) =>
          Object.keys(newViews[viewKey].layers),
        )
        const initialVisibility: Record<string, boolean> = {}
        allLayerNames.forEach((layerName) => {
          initialVisibility[layerName] = true
        })
        setVisibleLayers(initialVisibility)

        // Vyčisti uložená data pouze pro pohledy, které už neexistují
        // NEMAŽ data pro pohledy se změněným obrázkem - zachovej vrstvy
        if (storedData?.views) {
          const storedViewKeys = Object.keys(storedData.views)
          const removedViews = storedViewKeys.filter((key) => !currentViewKeys.includes(key))

          if (removedViews.length > 0) {
            console.log('Removing stored data for deleted views:', removedViews)

            const cleanedStoredViews = { ...storedData.views }

            // Smaž data pouze pro smazané pohledy
            removedViews.forEach((viewKey) => {
              delete cleanedStoredViews[viewKey]
            })

            // Aktualizuj uložená data - ale zachovej data pro pohledy se změněným obrázkem
            // Aktualizuj pouze reference na obrázky, ale zachovej vrstvy
            currentViewKeys.forEach((viewKey) => {
              const storedViewData = storedData.views?.[viewKey]
              const currentViewData = newViews[viewKey]

              if (!currentViewData) return

              const simplifiedImage = currentViewData.image
                ? {
                    id: currentViewData.image.id,
                    alt: currentViewData.image.alt || '',
                    updatedAt: currentViewData.image.updatedAt || '',
                    createdAt: currentViewData.image.createdAt || '',
                    filename: currentViewData.image.filename || '',
                    url: currentViewData.image.url || '',
                    width: currentViewData.image.width || null,
                    height: currentViewData.image.height || null,
                    project: currentViewData.image.project
                      ? typeof currentViewData.image.project === 'object' &&
                        'id' in currentViewData.image.project
                        ? (currentViewData.image.project as any).id
                        : currentViewData.image.project
                      : null,
                  }
                : null

              // Aktualizuj reference na obrázek + direct; zachovej vrstvy a odkazy pokud existují
              cleanedStoredViews[viewKey] = storedViewData
                ? {
                    ...storedViewData,
                    viewName: currentViewData.viewName,
                    direct: currentViewData.direct,
                    image: simplifiedImage,
                    // Vrstvy a odkazy zůstávají zachované
                  }
                : {
                    viewName: currentViewData.viewName,
                    direct: currentViewData.direct,
                    image: simplifiedImage,
                    layers: currentViewData.layers,
                    links: currentViewData.links,
                    viewBox: {
                      x: 0,
                      y: 0,
                      width: currentViewData.image?.width || imageWidth,
                      height: currentViewData.image?.height || imageHeight,
                    },
                  }
            })

            // Znovu poskládej views podle pořadí currentViewKeys (Payload pořadí)
            const orderedStoredViews: typeof cleanedStoredViews = {}
            currentViewKeys.forEach((viewKey) => {
              if (cleanedStoredViews[viewKey]) {
                orderedStoredViews[viewKey] = cleanedStoredViews[viewKey]
              }
            })

            const cleanedStoredData: FinallyVersionStoredExtended = {
              currentView: currentViewKeys.includes(storedData.currentView)
                ? storedData.currentView
                : '',
              disPicker: disabledPickerValue,
              views: orderedStoredViews,
            }

            setTimeout(() => {
              setStoredData(cleanedStoredData)
            }, 0)
          } else {
            // I když nejsou smazané pohledy, aktualizuj reference na obrázky
            // ale zachovej vrstvy a odkazy
            const updatedStoredViews = { ...storedData.views }
            let hasChanges = false

            // Zjisti, jestli se změnilo jen pořadí pohledů (bez smazání/přidání)
            const orderChanged =
              storedViewKeys.length === currentViewKeys.length &&
              storedViewKeys.some((key, index) => key !== currentViewKeys[index])
            if (orderChanged) {
              hasChanges = true
            }

            currentViewKeys.forEach((viewKey) => {
              const storedViewData = storedData.views?.[viewKey]
              const currentViewData = newViews[viewKey]

              if (!currentViewData) return

              const simplifiedImage = currentViewData.image
                ? {
                    id: currentViewData.image.id,
                    alt: currentViewData.image.alt || '',
                    updatedAt: currentViewData.image.updatedAt || '',
                    createdAt: currentViewData.image.createdAt || '',
                    filename: currentViewData.image.filename || '',
                    url: currentViewData.image.url || '',
                    width: currentViewData.image.width || null,
                    height: currentViewData.image.height || null,
                    project: currentViewData.image.project
                      ? typeof currentViewData.image.project === 'object' &&
                        'id' in currentViewData.image.project
                        ? (currentViewData.image.project as any).id
                        : currentViewData.image.project
                      : null,
                  }
                : null

              // Pokud view ve storedData neexistuje (nově přidaný view), přidej ho
              if (!storedViewData) {
                updatedStoredViews[viewKey] = {
                  viewName: currentViewData.viewName,
                  direct: currentViewData.direct,
                  image: simplifiedImage,
                  layers: currentViewData.layers,
                  links: currentViewData.links,
                  viewBox: {
                    x: 0,
                    y: 0,
                    width: currentViewData.image?.width || imageWidth,
                    height: currentViewData.image?.height || imageHeight,
                  },
                }
                hasChanges = true
                return
              }

              const storedImageId = storedViewData.image?.id
              const currentImageId = currentViewData.image?.id
              const storedDirect = (storedViewData as any).direct
              const currentDirect = currentViewData.direct

              // Pokud se obrázek změnil/odstranil NEBO se změnil direct, aktualizuj reference
              if (storedImageId !== currentImageId || storedDirect !== currentDirect) {
                updatedStoredViews[viewKey] = {
                  ...storedViewData,
                  viewName: currentViewData.viewName,
                  direct: currentViewData.direct,
                  image: simplifiedImage,
                  // Vrstvy a odkazy zůstávají zachované
                }
                hasChanges = true
              }
            })

            if (hasChanges) {
              // Znovu poskládej views podle pořadí currentViewKeys (Payload pořadí)
              const orderedStoredViews: typeof updatedStoredViews = {}
              currentViewKeys.forEach((viewKey) => {
                if (updatedStoredViews[viewKey]) {
                  orderedStoredViews[viewKey] = updatedStoredViews[viewKey]
                }
              })

              const updatedStoredData: FinallyVersionStoredExtended = {
                currentView: currentViewKeys.includes(storedData.currentView)
                  ? storedData.currentView
                  : '',
                disPicker: disabledPickerValue,
                views: orderedStoredViews,
              }

              setTimeout(() => {
                setStoredData(updatedStoredData)
              }, 0)
            }
          }
        }

        // Set current view to stored current view or first available view
        const viewKeys = Object.keys(newViews)
        if (viewKeys.length > 0) {
          const initialView =
            storedData?.currentView &&
            newViews[storedData.currentView] &&
            currentViewKeys.includes(storedData.currentView)
              ? storedData.currentView
              : viewKeys[0]
          setCurrentView(initialView)

          // Set current layer for the initial view
          const initialViewData = newViews[initialView]
          if (initialViewData?.layers && Object.keys(initialViewData.layers).length > 0) {
            //console.log('TEST')
            //setCurrentLayer(Object.keys(initialViewData.layers)[0])
          } else {
            setCurrentLayer('Výběr')
          }
        }
      }

      initializeViews()
    } else {
      // No views available, reset state and clear stored data
      setViews({})
      setCurrentView('')
      setCurrentLayer('Výběr')

      // Vyčisti všechna uložená data když nejsou žádné pohledy
      if (storedData && (storedData.views || storedData.currentView)) {
        const emptyStoredData: FinallyVersionStoredExtended = {
          currentView: '',
          disPicker: disablePicker,
          views: {},
        }
        setTimeout(() => {
          setStoredData(emptyStoredData)
        }, 0)
      }
    }
  }, [viewsData, storedData, disablePicker])

  // Update viewBox when image changes (but preserve current zoom/pan if image dimensions are the same)
  useEffect(() => {
    if (currentViewData?.image) {
      const newWidth = currentViewData.image.width || imageWidth
      const newHeight = currentViewData.image.height || imageHeight

      // Only reset viewBox if image dimensions actually changed
      setViewBox((prevViewBox) => {
        if (prevViewBox.width !== newWidth || prevViewBox.height !== newHeight) {
          // Image dimensions changed, reset viewBox
          console.log(
            `ViewBox reset due to dimension change: ${prevViewBox.width}x${prevViewBox.height} -> ${newWidth}x${newHeight}`,
          )
          return {
            x: 0,
            y: 0,
            width: newWidth,
            height: newHeight,
          }
        }
        // Same dimensions, keep current viewBox (preserve zoom/pan)
        console.log('ViewBox preserved - same dimensions')
        return prevViewBox
      })
    }
  }, [currentViewData?.image, imageWidth, imageHeight])

  // Keyboard event handlers
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.key === 'Backspace' || e.key === 'Delete') && currentPoints.length > 0) {
        e.preventDefault()
        setCurrentPoints((prev) => prev.slice(0, -1))
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [currentPoints])

  useEffect(() => {
    const handlePolygonActive = (e: KeyboardEvent) => {
      if ((e.key === 'Backspace' || e.key === 'Delete') && activePolygonId) {
        setActivePolygonId(null)
      }
    }
    window.addEventListener('keydown', handlePolygonActive)
    return () => window.removeEventListener('keydown', handlePolygonActive)
  }, [activePolygonId])

  // Helper functions
  const getSvgCoords = (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
    const svg = svgRef.current
    if (!svg) return { x: 0, y: 0 }
    const pt = svg.createSVGPoint()
    pt.x = e.clientX
    pt.y = e.clientY
    const ctm = svg.getScreenCTM()
    if (!ctm) return { x: 0, y: 0 }
    const cursorPoint = pt.matrixTransform(ctm.inverse())
    return { x: cursorPoint.x, y: cursorPoint.y }
  }

  // Save data to field
  const handleStoreJSONDatatoField = (customViews?: Record<string, ViewData>) => {
    const viewsToStore = customViews || views

    // Konvertujeme ViewData na ViewDataStored - ukládáme jen potřebné hodnoty
    const storedViews: Record<string, ViewDataStored> = {}

    Object.keys(viewsToStore).forEach((viewKey) => {
      const viewData = viewsToStore[viewKey]

      // Vytvoříme zjednodušený Media objekt
      let simplifiedImage: MediaStored | null = null
      if (viewData.image) {
        simplifiedImage = {
          id: viewData.image.id,
          alt: viewData.image.alt || '',
          updatedAt: viewData.image.updatedAt || '',
          createdAt: viewData.image.createdAt || '',
          filename: viewData.image.filename || '',
          url: viewData.image.url || '',
          width: viewData.image.width || null,
          height: viewData.image.height || null,
          // Pokud je project objekt, uložíme jen jeho ID
          project: viewData.image.project
            ? typeof viewData.image.project === 'object' && 'id' in viewData.image.project
              ? (viewData.image.project as any).id
              : viewData.image.project
            : null,
        }
      }

      storedViews[viewKey] = {
        viewName: viewData.viewName,
        direct: viewData.direct,
        image: simplifiedImage, // Zjednodušený Media objekt
        layers: viewData.layers, // Now using unified structure
        links: viewData.links.map((link) => ({
          ...link,
          // Pokud máme project objekt, uložíme jen jeho ID
          value:
            typeof link.value === 'object' && link.value && 'id' in link.value
              ? (link.value as any).id
              : link.value,
        })),
        // Don't store viewBox to prevent viewport reset on data restore
        viewBox: {
          x: 0,
          y: 0,
          width: viewData.image?.width || 2560,
          height: viewData.image?.height || 1440,
        },
      }
    })

    const finallyVersionStored: FinallyVersionStoredExtended = {
      currentView,
      disPicker: disablePicker,
      views: storedViews,
    }

    console.log('Storing simplified data:', finallyVersionStored)
    setStoredData(finallyVersionStored)
  }

  // View switching handler
  const handleViewChange = (viewName: string) => {
    // Pokud je aktivní kreslení, zabráníme přepnutí pohledu
    if (isDrawing) {
      console.log('Cannot switch views while drawing is active')
      return
    }

    setCurrentView(viewName)
    setActivePolygonId(null)
    setIsDrawing(false)
    setCurrentPoints([])

    // Set current layer for the new view
    const viewData = views[viewName]
    if (viewData?.layers && Object.keys(viewData.layers).length > 0) {
      setCurrentLayer(Object.keys(viewData.layers)[0])
    } else {
      setCurrentLayer('Výběr')
    }
  }

  // Event handlers
  const handleSvgClick = (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
    const svgCoords = getSvgCoords(e)

    if (isDrawing) {
      setCurrentPoints([...currentPoints, svgCoords])
    }
  }

  const finishPolygon = () => {
    if (currentPoints.length < 3 || !currentViewData) {
      setIsDrawing(false)
      return
    }

    const currentLayerData = currentViewData.layers[currentLayer]
    const newPoly: Polygon = {
      id: `${currentLayer}-poly-${(currentLayerData?.polygons?.length || 0) + 1}`,
      points: currentPoints,
    }

    setViews((prev) => {
      const updatedViews = {
        ...prev,
        [currentView]: {
          ...prev[currentView],
          layers: {
            ...prev[currentView].layers,
            [currentLayer]: {
              ...prev[currentView].layers[currentLayer],
              polygons: [...(prev[currentView].layers[currentLayer]?.polygons || []), newPoly],
            },
          },
        },
      }

      // Automaticky uložit data po přidání nového polygonu
      setTimeout(() => {
        handleStoreJSONDatatoField(updatedViews)
      }, 0)

      return updatedViews
    })

    setCurrentPoints([])
    setIsDrawing(false)
  }

  // Panning handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    isPanning.current = true
    lastPanPoint.current = { x: e.clientX, y: e.clientY }
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isPanning.current || !lastPanPoint.current) return
    const dx =
      (e.clientX - lastPanPoint.current.x) *
      ((viewBox.width || imageWidth) / svgRef.current!.clientWidth)
    const dy =
      (e.clientY - lastPanPoint.current.y) *
      ((viewBox.height || imageHeight) / svgRef.current!.clientHeight)
    setViewBox((vb) => ({
      ...vb,
      x: vb.x - dx,
      y: vb.y - dy,
    }))
    lastPanPoint.current = { x: e.clientX, y: e.clientY }
  }

  const handleMouseUp = () => {
    isPanning.current = false
    lastPanPoint.current = null
  }

  // Point editing handlers
  const handleMouseMoveCirclePoints = (e: React.MouseEvent<SVGSVGElement>) => {
    if (draggingIndex === null) return

    const svg = svgRef.current
    if (!svg) return

    const pt = svg.createSVGPoint()
    pt.x = e.clientX
    pt.y = e.clientY

    const ctm = svg.getScreenCTM()
    if (!ctm) return

    const coords = pt.matrixTransform(ctm.inverse())
    if (!coords || isNaN(coords.x) || isNaN(coords.y)) return

    setSelectedPoints((prev) => {
      if (!Array.isArray(prev)) return prev
      const updated = [...prev]
      if (draggingIndex < 0 || draggingIndex >= updated.length) return prev

      updated[draggingIndex] = { x: coords.x, y: coords.y }
      return updated
    })
  }

  const handleMouseUpCirclePoints = () => {
    if (activePolygonId && draggingIndex !== null && currentViewData) {
      setViews((prev) => {
        const updatedViews = {
          ...prev,
          [currentView]: {
            ...prev[currentView],
            layers: {
              ...prev[currentView].layers,
              [currentLayer]: {
                ...prev[currentView].layers[currentLayer],
                polygons:
                  prev[currentView].layers[currentLayer]?.polygons?.map((poly) =>
                    poly.id === activePolygonId ? { ...poly, points: selectedPoints } : poly,
                  ) || [],
              },
            },
          },
        }

        // Automaticky uložit data po úpravě bodů polygonu
        setTimeout(() => {
          handleStoreJSONDatatoField(updatedViews)
        }, 0)

        return updatedViews
      })
    }

    setDraggingIndex(null)
  }

  // Component event handlers
  const handleLayerChange = (value: string) => {
    // Pokud je aktivní kreslení, zabráníme přepnutí vrstvy
    if (isDrawing) {
      console.log('Cannot switch layers while drawing is active')
      return
    }
    setCurrentLayer(value)
  }

  const handleNewLayerNameChange = (name: string) => {
    setNewNameOfLayer(name)
  }

  const handleAddLayer = (category: LayerCategory) => {
    const newName = newNameOfLayer
    if (newName && currentViewData) {
      const codeFriendlyId = generateCodeFriendlyId(newName)
      setViews((prev) => {
        const updatedViews = {
          ...prev,
          [currentView]: {
            ...prev[currentView],
            layers: {
              ...prev[currentView].layers,
              [codeFriendlyId]: {
                name: newName,
                codeFriendlyId: codeFriendlyId,
                category,
                polygons: [],
              },
            },
          },
        }

        // Automaticky uložit data po přidání nové vrstvy
        setTimeout(() => {
          handleStoreJSONDatatoField(updatedViews)
        }, 0)

        return updatedViews
      })
      setCurrentLayer(codeFriendlyId)

      // Make new layer visible
      setVisibleLayers((prev) => ({
        ...prev,
        [codeFriendlyId]: true,
      }))

      // Vyčistit input po přidání vrstvy
      setNewNameOfLayer('')
    }
  }

  const handleCategoryToggle = (category: LayerCategory | 'all') => {
    if (!currentViewData) return

    const currentLayers = currentViewData.layers || {}
    const layerNamesInCategory =
      category === 'all'
        ? Object.keys(currentLayers)
        : Object.keys(currentLayers).filter(
            (layerName) => currentLayers[layerName]?.category === category,
          )

    // Check if all layers in this category are currently visible
    const allVisible = layerNamesInCategory.every((layerName) => visibleLayers[layerName])

    // Toggle visibility: if all are visible, hide them; otherwise show all
    const newVisibility = { ...visibleLayers }
    layerNamesInCategory.forEach((layerName) => {
      newVisibility[layerName] = !allVisible
    })

    setVisibleLayers(newVisibility)
  }

  const handleLayerVisibilityToggle = (layerName: string) => {
    setVisibleLayers((prev) => ({
      ...prev,
      [layerName]: !prev[layerName],
    }))
  }

  const handleCancelPolygonSelection = () => {
    setActivePolygonId(null)
  }

  const handleUndoLastPoint = () => {
    setCurrentPoints((prev) => prev.slice(0, -1))
  }

  const handleStartDrawing = () => {
    setIsDrawing(true)
    setCurrentPoints([])
  }

  const handlePolygonClick = (polygonId: string, points: Point[], layerName?: string) => {
    setActivePolygonId(polygonId)
    setSelectedPoints(points)

    // If layerName is provided and different from current, switch to that layer
    if (layerName && layerName !== currentLayer) {
      setCurrentLayer(layerName)
    }
  }

  const handlePointMouseDown = (index: number) => {
    setDraggingIndex(index)
  }

  const handleLayerLinkToPricePageChange = (layerName: string, linkToPricePage: boolean) => {
    setViews((prev) => {
      const updatedViews = {
        ...prev,
        [currentView]: {
          ...prev[currentView],
          layers: {
            ...prev[currentView].layers,
            [layerName]: {
              ...prev[currentView].layers[layerName],
              linkToPricePage: linkToPricePage,
            },
          },
        },
      }

      // Update links that match the layerID with the new phase
      const updatedLinks = prev[currentView].links.map((item) => {
        if (item.layerID === layerName) {
          return { ...item, linkToPricePage: linkToPricePage }
        }
        return item
      })
      updatedViews[currentView].links = updatedLinks
      setTimeout(() => {
        handleStoreJSONDatatoField(updatedViews)
      }, 0)
      return updatedViews
    })
  }

  const handleLayerDisableLinkChange = (layerName: string, disableLink: boolean) => {
    setViews((prev) => {
      const updatedViews = {
        ...prev,
        [currentView]: {
          ...prev[currentView],
          layers: {
            ...prev[currentView].layers,
            [layerName]: {
              ...prev[currentView].layers[layerName],
              disableLink: disableLink,
            },
          },
        },
      }

      // Update links that match the layerID with the new phase
      const updatedLinks = prev[currentView].links.map((item) => {
        if (item.layerID === layerName) {
          return { ...item, disableLink: disableLink }
        }
        return item
      })
      updatedViews[currentView].links = updatedLinks
      setTimeout(() => {
        handleStoreJSONDatatoField(updatedViews)
      }, 0)
      return updatedViews
    })
  }

  const handleLayerLabelPositionChange = (layerName: string, labelPosition: string) => {
    setViews((prev) => {
      const updatedViews = {
        ...prev,
        [currentView]: {
          ...prev[currentView],
          layers: {
            ...prev[currentView].layers,
            [layerName]: {
              ...prev[currentView].layers[layerName],
              labelPosition: labelPosition,
            },
          },
        },
      }

      // Update links that match the layerID with the new phase
      const updatedLinks = prev[currentView].links.map((item) => {
        if (item.layerID === layerName) {
          return { ...item, labelPosition: labelPosition }
        }
        return item
      })
      updatedViews[currentView].links = updatedLinks
      setTimeout(() => {
        handleStoreJSONDatatoField(updatedViews)
      }, 0)
      return updatedViews
    })
  }

  const handleLayerLabelPositionXChange = (layerName: string, labelPositionX: number) => {
    setViews((prev) => {
      const updatedViews = {
        ...prev,
        [currentView]: {
          ...prev[currentView],
        },
      }

      // Update links that match the layerID with the new labelPositionX
      const updatedLinks = prev[currentView].links.map((item) => {
        if (item.layerID === layerName) {
          return { ...item, labelPositionX: labelPositionX }
        }
        return item
      })
      updatedViews[currentView].links = updatedLinks
      setTimeout(() => {
        handleStoreJSONDatatoField(updatedViews)
      }, 0)
      return updatedViews
    })
  }

  const handleLayerLabelPositionYChange = (layerName: string, labelPositionY: number) => {
    setViews((prev) => {
      const updatedViews = {
        ...prev,
        [currentView]: {
          ...prev[currentView],
        },
      }

      // Update links that match the layerID with the new labelPositionY
      const updatedLinks = prev[currentView].links.map((item) => {
        if (item.layerID === layerName) {
          return { ...item, labelPositionY: labelPositionY }
        }
        return item
      })
      updatedViews[currentView].links = updatedLinks
      setTimeout(() => {
        handleStoreJSONDatatoField(updatedViews)
      }, 0)
      return updatedViews
    })
  }

  const handleLayerPhaseChange = (layerName: string, phase: string) => {
    setViews((prev) => {
      const updatedViews = {
        ...prev,
        [currentView]: {
          ...prev[currentView],
          layers: {
            ...prev[currentView].layers,
            [layerName]: {
              ...prev[currentView].layers[layerName],
              phase: phase,
            },
          },
        },
      }

      // Update links that match the layerID with the new phase
      const updatedLinks = prev[currentView].links.map((item) => {
        if (item.layerID === layerName) {
          return { ...item, phase: phase }
        }
        return item
      })
      updatedViews[currentView].links = updatedLinks
      setTimeout(() => {
        handleStoreJSONDatatoField(updatedViews)
      }, 0)
      return updatedViews
    })
  }

  const handleLayerCustomLabelChange = (layerName: string, customLabel: string) => {
    setViews((prev) => {
      const updatedViews = {
        ...prev,
        [currentView]: {
          ...prev[currentView],
          layers: {
            ...prev[currentView].layers,
            [layerName]: {
              ...prev[currentView].layers[layerName],
              customLabel: customLabel,
            },
          },
        },
      }

      // Update links that match the layerID with the new phase
      const updatedLinks = prev[currentView].links.map((item) => {
        if (item.layerID === layerName) {
          return { ...item, customLabel: customLabel }
        }
        return item
      })
      updatedViews[currentView].links = updatedLinks
      setTimeout(() => {
        handleStoreJSONDatatoField(updatedViews)
      }, 0)
      return updatedViews
    })
  }

  const handleLayersLinkChange = (layerName: string, e: any) => {
    if (!currentViewData) return
    if (e.relationTo == null) return
    setViews((prev) => {
      const currentLinks = prev[currentView].links
      const idx = currentLinks.findIndex((item) => item.layerID === layerName)
      let updatedLinks: LayerCollections

      if (idx !== -1) {
        // ✅ aktualizuj existující záznam
        const updated = [...currentLinks]
        updated[idx] = {
          ...updated[idx],
          relationTo: e.relationTo as CollectionSlug,
          value: parseInt(e.value),
          title: e.title || '',
          realpadid: e.realpadid || '',
          //phase: e.phase || '',
          status: e.status || '',
          //labelPosition: e.labelPosition || '',
        }
        updatedLinks = updated
      } else {
        // ➕ přidej nový záznam
        updatedLinks = [
          ...currentLinks,
          {
            id: crypto.randomUUID(),
            layerID: layerName,
            relationTo: e.relationTo as CollectionSlug,
            value: parseInt(e.value),
            title: e.title || '',
            realpadid: e.realpadid || '',
            //phase: e.phase || '',
            status: e.status || '',
            //labelPosition: e.labelPosition || '',
          },
        ]
      }

      const updatedViews = {
        ...prev,
        [currentView]: {
          ...prev[currentView],
          links: updatedLinks,
        },
      }

      // Automaticky uložit data po změně odkazu
      setTimeout(() => {
        handleStoreJSONDatatoField(updatedViews)
      }, 0)

      return updatedViews
    })
  }

  const handleLayerLinkDelete = (layerName: string) => {
    if (!currentViewData) return

    setViews((prev) => {
      const updatedLinks = prev[currentView].links.filter((item) => item.layerID !== layerName)
      const updatedViews = {
        ...prev,
        [currentView]: {
          ...prev[currentView],
          links: updatedLinks,
        },
      }

      // Automaticky uložit data po smazání odkazu
      setTimeout(() => {
        handleStoreJSONDatatoField(updatedViews)
      }, 0)

      return updatedViews
    })
  }

  const handleLayerRename = (oldName: string, newName: string) => {
    if (!currentViewData) return

    const codeFriendlyNewName = generateCodeFriendlyId(newName)
    setViews((prev) => {
      const updatedLayers = { ...prev[currentView].layers }
      if (updatedLayers[oldName]) {
        updatedLayers[codeFriendlyNewName] = {
          ...updatedLayers[oldName],
          name: newName,
          codeFriendlyId: codeFriendlyNewName,
        }
        delete updatedLayers[oldName]
      }

      const updatedViews = {
        ...prev,
        [currentView]: {
          ...prev[currentView],
          layers: updatedLayers,
        },
      }

      // Automaticky uložit data po přejmenování vrstvy
      setTimeout(() => {
        handleStoreJSONDatatoField(updatedViews)
      }, 0)

      return updatedViews
    })
    setCurrentLayer(codeFriendlyNewName)
  }

  const handleLayerDelete = (layerName: string) => {
    if (!currentViewData) return

    setViews((prev) => {
      const updatedLayers = { ...prev[currentView].layers }
      delete updatedLayers[layerName]

      const updatedViews = {
        ...prev,
        [currentView]: {
          ...prev[currentView],
          layers: updatedLayers,
        },
      }

      // Automaticky uložit data po smazání vrstvy
      setTimeout(() => {
        handleStoreJSONDatatoField(updatedViews)
      }, 0)

      return updatedViews
    })

    if (currentLayer === layerName) {
      const remaining = Object.keys(currentViewData.layers).filter((l) => l !== layerName)
      setCurrentLayer(remaining[0] || '')
    }
  }

  const handlePolygonEdit = (layerName: string, polygonId: string, points: Point[]) => {
    // Always switch to the layer of the polygon being edited
    if (layerName !== currentLayer) {
      console.log(`Switching from layer "${currentLayer}" to layer "${layerName}" for polygon edit`)
      setCurrentLayer(layerName)

      // Když uživatel klikne na "Upravit" polygon, automaticky scrolluj na SVG obrázek (canvas)
      // aby bylo jasné, že je aktivní režim úprav.
      setTimeout(() => {
        const svgElement = svgRef.current
        if (svgElement) {
          // Najdi nejbližší rodičovský kontejner, který má overflow (např. scrollovací wrapper)
          // nebo scrolluj přímo na SVG, pokud je to vhodné.
          svgElement.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' })
        }
      }, 100)
    }

    setSelectedPoints(points)
    setActivePolygonId(polygonId)
  }

  const handlePolygonDelete = (layerName: string, polygonId: string) => {
    if (!currentViewData) return

    setActivePolygonId(null)
    setViews((prev) => {
      const updatedViews = {
        ...prev,
        [currentView]: {
          ...prev[currentView],
          layers: {
            ...prev[currentView].layers,
            [layerName]: {
              ...prev[currentView].layers[layerName],
              polygons:
                prev[currentView].layers[layerName]?.polygons?.filter((p) => p.id !== polygonId) ||
                [],
            },
          },
        },
      }

      // Automaticky uložit data po smazání polygonu
      setTimeout(() => {
        handleStoreJSONDatatoField(updatedViews)
      }, 0)

      return updatedViews
    })
  }

  // Info popup handlers
  const handleOpenInfo = () => {
    setIsInfoOpen(true)
  }

  const handleCloseInfo = () => {
    setIsInfoOpen(false)
  }

  // SVG Canvas props
  const svgCanvasProps = {
    image: currentViewData?.image || null,
    viewBox,
    currentLayer,
    layers: currentViewData?.layers || {},
    visibleLayers,
    currentPoints,
    selectedPoints,
    activePolygonId,
    draggingIndex,
    isDrawing,
    svgRef,
    onSvgClick: handleSvgClick,
    onMouseMoveCirclePoints: handleMouseMoveCirclePoints,
    onMouseUpCirclePoints: handleMouseUpCirclePoints,
    onPolygonClick: handlePolygonClick,
    onPointMouseDown: handlePointMouseDown,
  }

  return (
    <div className="overlayDrawEditor">
      <div className="drawEditor relative">
        {/* View Switcher */}
        <ViewSwitcher
          views={views}
          currentView={currentView}
          onViewChange={handleViewChange}
          isDrawing={isDrawing}
        />

        <DrawingControlsExtended
          onlyLayerChoice={onlyLayerChoice}
          currentViewData={currentViewData}
          currentLayer={currentLayer}
          newNameOfLayer={newNameOfLayer}
          activePolygonId={activePolygonId}
          isDrawing={isDrawing}
          currentPoints={currentPoints}
          visibleLayers={visibleLayers}
          onLayerChange={handleLayerChange}
          onNewLayerNameChange={handleNewLayerNameChange}
          onAddLayer={handleAddLayer}
          onCategoryToggle={handleCategoryToggle}
          onLayerVisibilityToggle={handleLayerVisibilityToggle}
          onCancelPolygonSelection={handleCancelPolygonSelection}
          onUndoLastPoint={handleUndoLastPoint}
          onStartDrawing={handleStartDrawing}
          onFinishDrawing={finishPolygon}
        />

        {currentViewData?.image && (
          <CanvasContainer
            svgCanvasProps={svgCanvasProps}
            activePolygonId={activePolygonId}
            scale={scale}
            isDrawing={isDrawing}
            currentPoints={currentPoints}
            setScale={setScale}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onOpenInfo={handleOpenInfo}
            onCancelPolygonSelection={handleCancelPolygonSelection}
            onUndoLastPoint={handleUndoLastPoint}
            onStartDrawing={handleStartDrawing}
            onFinishDrawing={finishPolygon}
          />
        )}

        {currentViewData?.image && (
          <LayersList
            addCustomLabel={addCustomLabel}
            addPagesToChoices={addPagesToChoices}
            onlyLayerChoice={onlyLayerChoice}
            phases={phases}
            layers={currentViewData.layers}
            layersLink={currentViewData.links}
            currentLayer={currentLayer}
            isDrawing={isDrawing}
            projectID={projectID}
            addLayerOptions={addLayerOptions}
            onLayerCustomLabelChange={handleLayerCustomLabelChange}
            onLayerLinkToPricePageChange={handleLayerLinkToPricePageChange}
            onLayerDisableLinkChange={handleLayerDisableLinkChange}
            onLayerLabelPositionChange={handleLayerLabelPositionChange}
            onLayerLabelPositionXChange={handleLayerLabelPositionXChange}
            onLayerLabelPositionYChange={handleLayerLabelPositionYChange}
            onLayerPhaseChange={handleLayerPhaseChange}
            onLayersLinkChange={handleLayersLinkChange}
            onLayerLinkDelete={handleLayerLinkDelete}
            onLayerRename={handleLayerRename}
            onLayerDelete={handleLayerDelete}
            onLayerChange={handleLayerChange}
            onPolygonEdit={handlePolygonEdit}
            onPolygonDelete={handlePolygonDelete}
          />
        )}
      </div>

      {/* Info popup */}
      <InfoPopup isOpen={isInfoOpen} onClose={handleCloseInfo} />
    </div>
  )
}

export default DrawEditorInteractiveExtended
