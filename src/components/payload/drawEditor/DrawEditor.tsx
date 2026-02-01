'use client'
import React, { useEffect, useRef, useState } from 'react'
import { useField } from '@payloadcms/ui'
import { BasePayload, CollectionSlug, PayloadRequest, User } from 'payload'
import './draweditor.scss'
import { Media } from '@/payload-types'

// Import components and types
import {
  DrawingControls,
  CanvasContainer,
  LayersList,
  //SaveButton,
  InfoPopup,
  Point,
  Polygon,
  LayeredPolygons,
  UnifiedLayers,
  LayerCollections,
  LayerCategory,
  FinallyVersionStored,
  MediaStored,
  ViewBox,
} from './components'

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
const migrateToUnifiedLayers = (legacyLayers: LayeredPolygons): UnifiedLayers => {
  const unifiedLayers: UnifiedLayers = {}

  Object.keys(legacyLayers).forEach((layerKey) => {
    unifiedLayers[layerKey] = {
      name: layerKey, // Use key as name fallback
      codeFriendlyId: layerKey,
      category: 'building' as LayerCategory, // Default category
      polygons: legacyLayers[layerKey] || [],
    }
  })

  return unifiedLayers
}

// Migration utility to convert old data structure to new structure
const migrateStoredData = (storedData: any): FinallyVersionStored => {
  // If it's already the new structure, return as is
  if (storedData.layers && typeof storedData.layers === 'object') {
    const firstLayer = Object.values(storedData.layers)[0]
    if (
      firstLayer &&
      typeof firstLayer === 'object' &&
      firstLayer !== null &&
      typeof (firstLayer as any).name !== 'undefined' &&
      typeof (firstLayer as any).category !== 'undefined'
    ) {
      // It's already unified structure
      return storedData as FinallyVersionStored
    }
  }

  // Migrate old structure
  const migratedLayers = storedData.layers ? migrateToUnifiedLayers(storedData.layers) : {}

  // Convert image to simplified format if needed
  let simplifiedImage: MediaStored | null = null
  if (storedData.image) {
    simplifiedImage = {
      id: storedData.image.id,
      alt: storedData.image.alt || '',
      updatedAt: storedData.image.updatedAt || '',
      createdAt: storedData.image.createdAt || '',
      filename: storedData.image.filename || '',
      url: storedData.image.url || '',
      width: storedData.image.width || null,
      height: storedData.image.height || null,
      // Convert project to ID if it's an object
      project: storedData.image.project
        ? typeof storedData.image.project === 'object' &&
          storedData.image.project !== null &&
          'id' in storedData.image.project
          ? (storedData.image.project as any).id
          : storedData.image.project
        : null,
    }
  }

  return {
    // Don't restore viewBox from stored data to prevent viewport reset
    viewBox: { x: 0, y: 0, width: null, height: null },
    image: simplifiedImage,
    links: storedData.links || [],
    layers: migratedLayers,
  }
}

interface DrawEditorProps {
  payload?: BasePayload
  user?: User
  req: PayloadRequest
  path?: string
  projectID?: string
}

const DrawEditor = (props: DrawEditorProps) => {
  const { path, projectID } = props
  const [image, setImage] = useState<Media | null>(null)
  // Payload field hooks
  const { value: storedLayers, setValue: setStoredLayers } = useField<FinallyVersionStored>({
    path: `${path?.replace(/\.picker$/, '')}.pickerValue`,
  })
  const { value: mediaID } = useField<string>({
    path: `${path?.replace(/\.picker$/, '')}.imagePicker`,
  })

  // State variables
  const [layers, setLayers] = useState<UnifiedLayers>(() => {
    if (storedLayers?.layers) {
      // Check if it's already unified structure
      const firstLayer = Object.values(storedLayers.layers)[0]
      if (
        firstLayer &&
        typeof firstLayer === 'object' &&
        firstLayer !== null &&
        typeof (firstLayer as any).name !== 'undefined' &&
        typeof (firstLayer as any).category !== 'undefined'
      ) {
        return storedLayers.layers as UnifiedLayers
      }
      return migrateToUnifiedLayers(storedLayers.layers as unknown as LayeredPolygons)
    }
    return {}
  })
  const [currentLayer, setCurrentLayer] = useState<string>(
    (storedLayers?.layers && Object.keys(storedLayers?.layers)[0]) || 'Výběr',
  )
  const [currentPoints, setCurrentPoints] = useState<Point[]>([])
  const [isDrawing, setIsDrawing] = useState<boolean>(false)
  const [scale, setScale] = useState(1)
  const [newNameOfLayer, setNewNameOfLayer] = useState<string>('')
  const [layersLink, setLayersLink] = useState<LayerCollections>(storedLayers?.links || [])
  const [activePolygonId, setActivePolygonId] = useState<string | null>(null)
  const [selectedPoints, setSelectedPoints] = useState<Point[]>([])
  const [draggingIndex, setDraggingIndex] = useState<number | null>(null)
  const [isInfoOpen, setIsInfoOpen] = useState<boolean>(false)
  const [visibleLayers, setVisibleLayers] = useState<Record<string, boolean>>({})
  const imageWidth = 2560
  const imageHeight = 1440
  const [viewBox, setViewBox] = useState<ViewBox>({
    x: 0,
    y: 0,
    width: imageWidth,
    height: imageHeight,
    //width: image?.width || 1200,
    //height: image?.height || 800,
  })

  // Refs for panning
  const svgRef = useRef<SVGSVGElement>(null)
  const isPanning = useRef(false)
  const lastPanPoint = useRef<Point | null>(null)

  // Media loading effect
  useEffect(() => {
    if (mediaID) {
      const getMediaObject = async () => {
        const mediaFind = await fetch(`/api/media/${parseInt(mediaID)}`)
        const data: Media = await mediaFind.json()
        if (data?.url) {
          setImage(data)
          // Only reset viewBox if image dimensions actually changed
          setViewBox((prevViewBox) => {
            const newWidth = data.width || 1200
            const newHeight = data.height || 800

            if (prevViewBox.width !== newWidth || prevViewBox.height !== newHeight) {
              // Image dimensions changed, reset viewBox
              return {
                x: 0,
                y: 0,
                width: newWidth,
                height: newHeight,
              }
            }
            // Same dimensions, keep current viewBox (preserve zoom/pan)
            return prevViewBox
          })
        }
      }
      getMediaObject()
    } else {
      setImage(null)
      setIsDrawing(false)
      setScale(1)

      // Při smazání obrázku načti vrstvy z uložených dat místo resetování
      if (storedLayers?.layers && Object.keys(storedLayers.layers).length > 0) {
        // Check if it's already unified structure
        const firstLayer = Object.values(storedLayers.layers)[0]
        let migratedLayers: UnifiedLayers
        if (
          firstLayer &&
          typeof firstLayer === 'object' &&
          firstLayer !== null &&
          typeof (firstLayer as any).name !== 'undefined' &&
          typeof (firstLayer as any).category !== 'undefined'
        ) {
          migratedLayers = storedLayers.layers as UnifiedLayers
        } else {
          migratedLayers = migrateToUnifiedLayers(storedLayers.layers as unknown as LayeredPolygons)
        }

        setLayers(migratedLayers)
        setCurrentLayer(Object.keys(storedLayers.layers)[0] || 'Výběr')
        if (storedLayers.links) {
          setLayersLink(storedLayers.links)
        }

        // Initialize visibility for all layers (all visible by default)
        const initialVisibility: Record<string, boolean> = {}
        Object.keys(migratedLayers).forEach((layerName) => {
          initialVisibility[layerName] = true
        })
        setVisibleLayers(initialVisibility)

        // Don't restore viewBox from stored data to prevent viewport reset
        // Keep current viewBox settings
      } else {
        setCurrentLayer('Výběr')
        setLayers({})
        setLayersLink([])
        setVisibleLayers({})
      }
    }
  }, [mediaID, storedLayers])

  // Auto-save when layersLink changes
  useEffect(() => {
    if (layersLink.length > 0 || Object.keys(layers).length > 0) {
      handleStoreJSONDatatoField()
    }
  }, [layersLink, viewBox])

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

  // Event handlers
  const handleSvgClick = (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
    const svgCoords = getSvgCoords(e)

    if (isDrawing) {
      setCurrentPoints([...currentPoints, svgCoords])
    }
  }

  const finishPolygon = () => {
    if (currentPoints.length < 3) {
      setIsDrawing(false)
      return
    }

    const newPoly: Polygon = {
      id: `${currentLayer}-poly-${(layers[currentLayer]?.polygons?.length || 0) + 1}`,
      points: currentPoints,
    }
    setLayers((prev) => {
      const updatedLayers = {
        ...prev,
        [currentLayer]: {
          ...prev[currentLayer],
          polygons: [...(prev[currentLayer]?.polygons || []), newPoly],
        },
      }

      // Automaticky uložit data po přidání nového polygonu
      setTimeout(() => {
        handleStoreJSONDatatoField(updatedLayers)
      }, 0)

      return updatedLayers
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
      (e.clientX - lastPanPoint.current.x) * ((viewBox.width || 1200) / svgRef.current!.clientWidth)
    const dy =
      (e.clientY - lastPanPoint.current.y) *
      ((viewBox.height || 800) / svgRef.current!.clientHeight)
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
    if (activePolygonId && draggingIndex !== null) {
      setLayers((prev) => {
        const updated = { ...prev }
        updated[currentLayer] = {
          ...updated[currentLayer],
          polygons: updated[currentLayer].polygons.map((poly) =>
            poly.id === activePolygonId ? { ...poly, points: selectedPoints } : poly,
          ),
        }

        // Automaticky uložit data po úpravě bodů polygonu
        setTimeout(() => {
          handleStoreJSONDatatoField(updated)
        }, 0)

        return updated
      })
    }

    setDraggingIndex(null)
  }

  // Save data to field
  const handleStoreJSONDatatoField = (customLayers?: UnifiedLayers) => {
    const layersToStore = customLayers || layers

    // Convert image to simplified format
    let simplifiedImage: MediaStored | null = null
    if (image) {
      simplifiedImage = {
        id: image.id,
        alt: image.alt || '',
        updatedAt: image.updatedAt || '',
        createdAt: image.createdAt || '',
        filename: image.filename || '',
        url: image.url || '',
        width: image.width || null,
        height: image.height || null,
        // Convert project to ID if it's an object
        project: image.project
          ? typeof image.project === 'object' && image.project !== null && 'id' in image.project
            ? (image.project as any).id
            : image.project
          : null,
      }
    }

    const finallyVersionStored: FinallyVersionStored = {
      // Don't store viewBox to prevent viewport reset on data restore
      viewBox: {
        x: 0,
        y: 0,
        width: image?.width || null,
        height: image?.height || null,
      },
      links: layersLink,
      image: simplifiedImage,
      layers: layersToStore, // Store unified structure directly
    }
    setStoredLayers(finallyVersionStored)
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
    if (newName) {
      const codeFriendlyId = generateCodeFriendlyId(newName)
      setLayers((prev) => {
        const updated = {
          ...prev,
          [codeFriendlyId]: {
            name: newName,
            codeFriendlyId: codeFriendlyId,
            category,
            polygons: [],
          },
        }

        // Automaticky uložit data po přidání nové vrstvy
        setTimeout(() => {
          handleStoreJSONDatatoField(updated)
        }, 0)

        return updated
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
    const currentLayers = layers || {}
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

  const handleLayersLinkChange = (layerName: string, e: any) => {
    console.log('handleLayersLinkChange', layerName, e)
    setLayersLink((prev) => {
      const idx = prev.findIndex((item) => item.layerID === layerName)
      let updatedLinks: LayerCollections

      // If e is null, it means user wants to delete the link
      if (e === null) {
        updatedLinks = prev.filter((item) => item.layerID !== layerName)
      } else if (idx !== -1) {
        // ✅ aktualizuj existující záznam
        const updated = [...prev]
        updated[idx] = {
          ...updated[idx],
          relationTo: e.relationTo as CollectionSlug,
          value: e.value ? parseInt(e.value) : null,
          title: e.title || '',
          realpadid: e.realpadid || '',
        }
        updatedLinks = updated
      } else {
        // ➕ přidej nový záznam
        updatedLinks = [
          ...prev,
          {
            id: crypto.randomUUID(),
            layerID: layerName,
            relationTo: e.relationTo as CollectionSlug,
            value: e.value ? parseInt(e.value) : null,
            title: e.title || '',
            realpadid: e.realpadid || '',
          },
        ]
      }

      return updatedLinks
    })
  }

  const handleLayerLinkDelete = (layerName: string) => {
    setLayersLink((prev) => {
      const updatedLinks = prev.filter((item) => item.layerID !== layerName)

      return updatedLinks
    })
  }

  const handleLayerRename = (oldName: string, newName: string) => {
    const codeFriendlyNewName = generateCodeFriendlyId(newName)
    setLayers((prev) => {
      const updated = { ...prev }
      if (updated[oldName]) {
        updated[codeFriendlyNewName] = {
          ...updated[oldName],
          name: newName,
          codeFriendlyId: codeFriendlyNewName,
        }
        delete updated[oldName]
      }

      // Automaticky uložit data po přejmenování vrstvy
      setTimeout(() => {
        handleStoreJSONDatatoField(updated)
      }, 0)

      return updated
    })
    setCurrentLayer(codeFriendlyNewName)
  }

  const handleLayerDelete = (layerName: string) => {
    console.log('handleLayerDelete', layerName)
    setLayers((prev) => {
      const updated = { ...prev }
      delete updated[layerName]

      // Automaticky uložit data po smazání vrstvy
      setTimeout(() => {
        handleStoreJSONDatatoField(updated)
      }, 0)

      return updated
    })
    if (currentLayer === layerName) {
      const remaining = Object.keys(layers).filter((l) => l !== layerName)
      setCurrentLayer(remaining[0] || '')
    }
  }

  const handlePolygonEdit = (layerName: string, polygonId: string, points: Point[]) => {
    if (layerName !== currentLayer) {
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
      setCurrentLayer(layerName)
      setSelectedPoints(points)
      setActivePolygonId(polygonId)
    }
    setActivePolygonId(polygonId)
  }

  const handlePolygonDelete = (layerName: string, polygonId: string) => {
    setActivePolygonId(null)
    setLayers((prev) => {
      const updatedLayers = {
        ...prev,
        [layerName]: {
          ...prev[layerName],
          polygons: prev[layerName].polygons.filter((p) => p.id !== polygonId),
        },
      }

      // Automaticky uložit data po smazání polygonu
      setTimeout(() => {
        handleStoreJSONDatatoField(updatedLayers)
      }, 0)

      return updatedLayers
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
    image,
    viewBox,
    currentLayer,
    layers,
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
        <DrawingControls
          image={image}
          currentLayer={currentLayer}
          newNameOfLayer={newNameOfLayer}
          activePolygonId={activePolygonId}
          isDrawing={isDrawing}
          currentPoints={currentPoints}
          layers={layers}
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

        {image && (
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
            onStartDrawing={handleStartDrawing}
            onCancelPolygonSelection={handleCancelPolygonSelection}
            onUndoLastPoint={handleUndoLastPoint}
            onFinishDrawing={finishPolygon}
          />
        )}

        {image && (
          <LayersList
            layers={layers}
            layersLink={layersLink}
            currentLayer={currentLayer}
            isDrawing={isDrawing}
            projectID={projectID}
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

      {/*image && Object.entries(layers)?.length > 0 && (
        <SaveButton onSave={handleStoreJSONDatatoField} />
      )*/}

      {/* Info popup */}
      <InfoPopup isOpen={isInfoOpen} onClose={handleCloseInfo} />
    </div>
  )
}

export default DrawEditor
