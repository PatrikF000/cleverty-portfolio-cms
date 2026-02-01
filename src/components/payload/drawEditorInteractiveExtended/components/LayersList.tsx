import React, { useRef, useEffect, useState } from 'react'
import { UnifiedLayers, LayerCollections, collectionForFetch } from './types'
import ReferenceSelector from '../../referenceSelect/ReferenceSelect'
import DocumentOpener from './DocumentOpener'
import { CheckboxField, CheckboxInput, Select, TextInput } from '@payloadcms/ui'

interface LayersListProps {
  layers: UnifiedLayers
  layersLink: LayerCollections
  currentLayer: string
  isDrawing: boolean
  projectID?: string
  phases?: boolean
  addLayerOptions?: boolean
  onlyLayerChoice?: string
  addPagesToChoices?: boolean
  addCustomLabel?: boolean
  labelPositionX?: number
  labelPositionY?: number
  onLayerCustomLabelChange?: (layerName: string, customLabel: string) => void
  onLayerLabelPositionXChange?: (layerName: string, labelPositionX: number) => void
  onLayerLabelPositionYChange?: (layerName: string, labelPositionY: number) => void
  onLayerLinkToPricePageChange?: (layerName: string, linkToPricePage: boolean) => void
  onLayerDisableLinkChange?: (layerName: string, disableLink: boolean) => void
  onLayersLinkChange: (layerName: string, data: any) => void
  onLayerLinkDelete: (layerName: string) => void
  onLayerRename: (oldName: string, newName: string) => void
  onLayerDelete: (layerName: string) => void
  onLayerChange: (layerName: string) => void
  onPolygonEdit: (layerName: string, polygonId: string, points: any[]) => void
  onPolygonDelete: (layerName: string, polygonId: string) => void
  onLayerPhaseChange: (layerName: string, phase: string) => void
  onLayerLabelPositionChange: (layerName: string, labelPosition: string) => void
}

const LayersList: React.FC<LayersListProps> = ({
  addCustomLabel,
  layers,
  layersLink,
  currentLayer,
  isDrawing,
  projectID,
  phases,
  addLayerOptions,
  onlyLayerChoice,
  addPagesToChoices,
  onLayerCustomLabelChange,
  onLayersLinkChange,
  onLayerLinkDelete,
  onLayerRename,
  onLayerDelete,
  //onLayerChange,
  onLayerPhaseChange,
  onLayerLabelPositionXChange,
  onLayerLabelPositionYChange,
  onLayerLabelPositionChange,
  onLayerLinkToPricePageChange,
  onLayerDisableLinkChange,
  onPolygonEdit,
  onPolygonDelete,
}) => {
  // Lokální state pro hodnoty X a Y (pro každý layer)
  const [localValuesX, setLocalValuesX] = useState<Record<string, string>>({})
  const [localValuesY, setLocalValuesY] = useState<Record<string, string>>({})

  // Refs pro debounce timeouty
  const debounceTimeoutsX = useRef<Map<string, NodeJS.Timeout>>(new Map())
  const debounceTimeoutsY = useRef<Map<string, NodeJS.Timeout>>(new Map())

  const debounceTimeoutsCustomLabel = useRef<Map<string, NodeJS.Timeout>>(new Map())

  // Funkce pro získání zobrazené hodnoty (lokální nebo z props)
  const getDisplayValueX = (layerName: string) => {
    if (localValuesX[layerName] !== undefined) {
      return localValuesX[layerName]
    }
    const storedValue = layersLink?.find((find) => find?.layerID === layerName)?.labelPositionX
    return storedValue !== undefined ? String(storedValue) : ''
  }

  const getDisplayValueY = (layerName: string) => {
    if (localValuesY[layerName] !== undefined) {
      return localValuesY[layerName]
    }
    const storedValue = layersLink?.find((find) => find?.layerID === layerName)?.labelPositionY
    return storedValue !== undefined ? String(storedValue) : ''
  }

  // Funkce pro uložení hodnoty s debounce
  const saveValueX = (layerName: string, value: string) => {
    const numValue = value === '' ? 0 : parseInt(value, 10)
    if (!isNaN(numValue)) {
      onLayerLabelPositionXChange?.(layerName, numValue)
    }
    // Vyčisti lokální hodnotu po uložení
    setLocalValuesX((prev) => {
      const updated = { ...prev }
      delete updated[layerName]
      return updated
    })
  }

  const saveValueY = (layerName: string, value: string) => {
    const numValue = value === '' ? 0 : parseInt(value, 10)
    if (!isNaN(numValue)) {
      onLayerLabelPositionYChange?.(layerName, numValue)
    }
    // Vyčisti lokální hodnotu po uložení
    setLocalValuesY((prev) => {
      const updated = { ...prev }
      delete updated[layerName]
      return updated
    })
  }

  // Cleanup timeoutů při unmountu
  useEffect(() => {
    return () => {
      debounceTimeoutsX.current.forEach((timeout) => clearTimeout(timeout))
      debounceTimeoutsY.current.forEach((timeout) => clearTimeout(timeout))
      debounceTimeoutsX.current.clear()
      debounceTimeoutsY.current.clear()
    }
  }, [])

  const filteredByLayerName = (layerName: string) => {
    if (!layerName) return
    return layersLink?.find((find) => find?.layerID === layerName)
  }

  if (Object.entries(layers)?.length === 0) {
    return (
      <div className="drawEditor__modernUI__layersSection__empty">
        <div className="drawEditor__modernUI__layersSection__empty__icon">📋</div>
        <p>Aktuálně nemáte žádný záznam</p>
      </div>
    )
  }

  const phasesOptions = [
    {
      label: 'Fáze 1',
      value: 'phase1',
    },
    {
      label: 'Fáze 2',
      value: 'phase2',
    },
    {
      label: 'Fáze 3',
      value: 'phase3',
    },
    {
      label: 'Fáze 4',
      value: 'phase4',
    },
    {
      label: 'Fáze 5',
      value: 'phase5',
    },
  ]

  const layerOptions = [
    {
      label: 'UP',
      value: 'up',
    },
    {
      label: 'DOWN',
      value: 'down',
    },
    {
      label: 'LEFT',
      value: 'left',
    },
    {
      label: 'RIGHT',
      value: 'right',
    },
  ]

  let collectionsForFetchFiltered = collectionForFetch
  if (onlyLayerChoice) {
    collectionsForFetchFiltered = collectionsForFetchFiltered.filter(
      (item) => item.id === onlyLayerChoice,
    )
  }
  if (addPagesToChoices) {
    collectionsForFetchFiltered = [
      ...collectionsForFetchFiltered,
      {
        id: 'pages',
        label: 'Stránky',
        value: 'pages',
      },
    ]
  }
  return (
    <div className="drawEditor__modernUI">
      <div className="drawEditor__modernUI__header">
        <div>
          <h2 className="drawEditor__modernUI__header__title">Seznam výběrů</h2>
          <p className="drawEditor__modernUI__header__subtitle">Spravujte své vrstvy a polygony</p>
        </div>
      </div>

      <div className="drawEditor__modernUI__layersSection">
        <div className="drawEditor__modernUI__layersSection__title">
          <div className="drawEditor__modernUI__layersSection__title__icon">🏗️</div>
          <span>Vrstvy a polygony</span>
        </div>

        <div className="drawEditor__modernUI__layersSection__list">
          {Object.entries(layers).map(([layerName, layerData]) => {
            const polys = layerData.polygons
            return (
              <div
                key={layerName}
                className={`drawEditor__modernUI__layersSection__list__item ${
                  currentLayer === layerName
                    ? 'drawEditor__modernUI__layersSection__list__item--active'
                    : ''
                }`}
              >
                <div className="drawEditor__modernUI__layersSection__list__item__header">
                  <div className="drawEditor__modernUI__layersSection__list__item__header__name">
                    <span className="drawEditor__modernUI__layersSection__list__item__header__name__badge">
                      Vrstva
                    </span>
                    <span>{layerName}</span>
                  </div>
                  <div className="drawEditor__modernUI__layersSection__list__item__header__actions">
                    <button
                      type="button"
                      className="drawEditor__modernUI__buttons__secondary drawEditor__modernUI__buttons__secondary--small"
                      onClick={() => {
                        const newName = prompt('Nový název vrstvy:', layerName)
                        if (newName && newName.trim() && newName !== layerName) {
                          onLayerRename(layerName, newName.trim())
                        }
                      }}
                    >
                      ✏️ Upravit název
                    </button>
                    <button
                      type="button"
                      className="drawEditor__modernUI__buttons__danger drawEditor__modernUI__buttons__danger--small"
                      onClick={() => {
                        if (confirm(`Opravdu smazat vrstvu "${layerName}"?`)) {
                          onLayerDelete(layerName)
                        }
                      }}
                    >
                      🗑️ Smazat vrstvu
                    </button>
                  </div>
                </div>
                {addLayerOptions && (
                  <>
                    <div className="mb-4">
                      <div>Pozice popisku:</div>
                      <Select
                        options={layerOptions}
                        value={layerOptions?.find(
                          (find) =>
                            find?.value ===
                            layersLink?.find((find) => find?.layerID === layerName)?.labelPosition,
                        )}
                        onChange={(e) => {
                          if (!e || Array.isArray(e)) {
                            onLayerLabelPositionChange(layerName, '')
                            return
                          }
                          const value = e?.value?.toString() || ''
                          onLayerLabelPositionChange(layerName, value)
                        }}
                      />
                    </div>
                    <div className="">
                      <div>Pozice popisku X a Y: (PX)</div>
                      <div className="grid grid-cols-2 gap-4 field-type text">
                        <input
                          type="text"
                          className=""
                          placeholder="X"
                          value={getDisplayValueX(layerName)}
                          onChange={(e) => {
                            const value = e.target.value
                            // Aktualizuj lokální state okamžitě pro zobrazení
                            setLocalValuesX((prev) => ({
                              ...prev,
                              [layerName]: value,
                            }))

                            // Zruš předchozí timeout pro tento layer
                            const existingTimeout = debounceTimeoutsX.current.get(layerName)
                            if (existingTimeout) {
                              clearTimeout(existingTimeout)
                            }

                            // Nastav nový timeout - uloží se až po 300ms bez dalšího stisku
                            const timeout = setTimeout(() => {
                              saveValueX(layerName, value)
                              debounceTimeoutsX.current.delete(layerName)
                            }, 300) // 300ms delay - rychlejší odezva

                            debounceTimeoutsX.current.set(layerName, timeout)
                          }}
                          onBlur={(e) => {
                            // Uložit hodnotu okamžitě při opuštění inputu
                            const value = e.target.value
                            const existingTimeout = debounceTimeoutsX.current.get(layerName)
                            if (existingTimeout) {
                              clearTimeout(existingTimeout)
                              debounceTimeoutsX.current.delete(layerName)
                            }

                            saveValueX(layerName, value)
                          }}
                        />
                        <input
                          type="text"
                          placeholder="Y"
                          value={getDisplayValueY(layerName)}
                          onChange={(e) => {
                            const value = e.target.value
                            // Aktualizuj lokální state okamžitě pro zobrazení
                            setLocalValuesY((prev) => ({
                              ...prev,
                              [layerName]: value,
                            }))

                            // Zruš předchozí timeout pro tento layer
                            const existingTimeout = debounceTimeoutsY.current.get(layerName)
                            if (existingTimeout) {
                              clearTimeout(existingTimeout)
                            }

                            // Nastav nový timeout - uloží se až po 300ms bez dalšího stisku
                            const timeout = setTimeout(() => {
                              saveValueY(layerName, value)
                              debounceTimeoutsY.current.delete(layerName)
                            }, 300) // 300ms delay - rychlejší odezva

                            debounceTimeoutsY.current.set(layerName, timeout)
                          }}
                          onBlur={(e) => {
                            // Uložit hodnotu okamžitě při opuštění inputu
                            const value = e.target.value
                            const existingTimeout = debounceTimeoutsY.current.get(layerName)
                            if (existingTimeout) {
                              clearTimeout(existingTimeout)
                              debounceTimeoutsY.current.delete(layerName)
                            }

                            saveValueY(layerName, value)
                          }}
                        />
                      </div>
                    </div>
                  </>
                )}
                {addCustomLabel && (
                  <div className="mb-4 field-type text">
                    <div>Vlastní popisek</div>
                    <input
                      type="text"
                      className=""
                      placeholder="Vlastní popisek"
                      value={layersLink?.find((find) => find?.layerID === layerName)?.customLabel}
                      onChange={(e) => {
                        const value = e.target.value
                        // Zruš předchozí timeout pro tento layer
                        const existingTimeout = debounceTimeoutsCustomLabel.current.get(layerName)
                        if (existingTimeout) {
                          clearTimeout(existingTimeout)
                        }

                        // Nastav nový timeout - uloží se až po 300ms bez dalšího stisku
                        const timeout = setTimeout(() => {
                          onLayerCustomLabelChange?.(layerName, value)
                          debounceTimeoutsCustomLabel.current.delete(layerName)
                        }, 300) // 300ms delay - rychlejší odezva

                        debounceTimeoutsCustomLabel.current.set(layerName, timeout)
                      }}
                      onBlur={(e) => {
                        // Uložit hodnotu okamžitě při opuštění inputu
                        const value = e.target.value
                        const existingTimeout = debounceTimeoutsCustomLabel.current.get(layerName)
                        if (existingTimeout) {
                          clearTimeout(existingTimeout)
                          debounceTimeoutsCustomLabel.current.delete(layerName)
                        }

                        onLayerCustomLabelChange?.(layerName, value)
                      }}
                    />
                  </div>
                )}
                {/* Pokud přidám odkazy na stránky, to znamená, že dokážu nalinkovat  */}
                {phases && (
                  <div className="mb-4">
                    <div>Fáze výstavby:</div>
                    <Select
                      options={phasesOptions}
                      value={phasesOptions?.find(
                        (find) =>
                          find?.value ===
                          layersLink?.find((find) => find?.layerID === layerName)?.phase,
                      )}
                      onChange={(e) => {
                        if (!e || Array.isArray(e)) {
                          onLayerPhaseChange(layerName, '')
                          return
                        }
                        const value = e?.value?.toString() || ''
                        onLayerPhaseChange(layerName, value)
                      }}
                    />
                  </div>
                )}

                <div className="drawEditor__modernUI__layersSection__list__item__content">
                  <div className="drawEditor__modernUI__layersSection__list__item__content__link">
                    <span className="drawEditor__modernUI__layersSection__list__item__content__link__label">
                      Odkaz:
                    </span>
                    {filteredByLayerName(layerName)?.title &&
                    filteredByLayerName(layerName)?.value ? (
                      <div className="drawEditor__modernUI__layersSection__list__item__content__link__value">
                        {/*<Link
                          target="_blank"
                          href={`/admin/collections/${filteredByLayerName(layerName)?.relationTo}/${filteredByLayerName(layerName)?.value}`}
                          className="drawEditor__modernUI__layersSection__list__item__content__link__value__text"
                        >
                          {filteredByLayerName(layerName)?.title}
                        </Link>*/}
                        <DocumentOpener
                          layerName={layerName}
                          layersLink={layersLink}
                          label={filteredByLayerName(layerName)?.title}
                        />
                        <span> | </span>
                        <button
                          type="button"
                          className="drawEditor__modernUI__layersSection__list__item__content__link__value__delete"
                          onClick={() => {
                            if (
                              confirm(
                                `Opravdu smazat odkaz "${filteredByLayerName(layerName)?.title}" z vrstvy "${layerName}"?`,
                              )
                            ) {
                              onLayerLinkDelete(layerName)
                            }
                          }}
                          title="Smazat odkaz"
                        >
                          ❌
                        </button>
                      </div>
                    ) : (
                      <span className="drawEditor__modernUI__layersSection__list__item__content__link__placeholder"></span>
                    )}
                  </div>

                  <div className="drawEditor__modernUI__layersSection__list__item__content__controls">
                    <ReferenceSelector
                      layerID={layerName}
                      projectID={projectID}
                      onChange={(e) => onLayersLinkChange(layerName, e)}
                      availableCollections={collectionsForFetchFiltered}
                    />
                  </div>
                  {addPagesToChoices &&
                    filteredByLayerName(layerName)?.title &&
                    filteredByLayerName(layerName)?.value && (
                      <div>
                        <div className="mb-4">
                          <div>Nalinkovat na stránku ceníku:</div>
                          <CheckboxInput
                            checked={
                              layersLink?.find((find) => find?.layerID === layerName)
                                ?.linkToPricePage
                            }
                            onToggle={() => {
                              onLayerLinkToPricePageChange?.(
                                layerName,
                                !layersLink?.find((find) => find?.layerID === layerName)
                                  ?.linkToPricePage,
                              )
                            }}
                          />
                        </div>
                        <div className="mb-4">
                          <div>Link nebude na webu aktivní</div>
                          <CheckboxInput
                            checked={
                              layersLink?.find((find) => find?.layerID === layerName)?.disableLink
                            }
                            onToggle={() => {
                              onLayerDisableLinkChange?.(
                                layerName,
                                !layersLink?.find((find) => find?.layerID === layerName)
                                  ?.disableLink,
                              )
                            }}
                          />
                        </div>
                      </div>
                    )}
                </div>

                <div className="drawEditor__modernUI__layersSection__list__item__polygons">
                  <div className="drawEditor__modernUI__layersSection__list__item__polygons__title">
                    <div className="drawEditor__modernUI__layersSection__list__item__polygons__title__icon">
                      🔷
                    </div>
                    <span>Polygony</span>
                  </div>

                  {polys && polys.length > 0 ? (
                    <div className="drawEditor__modernUI__layersSection__list__item__polygons__list">
                      {polys.map((item, index) => (
                        <div
                          key={`${layerName}-${index}`}
                          className="drawEditor__modernUI__layersSection__list__item__polygons__list__item"
                        >
                          <div className="drawEditor__modernUI__layersSection__list__item__polygons__list__item__content">
                            <div className="drawEditor__modernUI__layersSection__list__item__polygons__list__item__content__name">
                              {layerName} - Vrstva č.{index + 1}
                            </div>
                            <div className="drawEditor__modernUI__layersSection__list__item__polygons__list__item__content__actions">
                              <button
                                type="button"
                                className="drawEditor__modernUI__buttons__primary drawEditor__modernUI__buttons__primary--small"
                                onClick={() => onPolygonEdit(layerName, item.id, item.points)}
                              >
                                ✏️ Upravit
                              </button>
                              <button
                                type="button"
                                className="drawEditor__modernUI__buttons__danger drawEditor__modernUI__buttons__danger--small"
                                onClick={() => {
                                  if (!isDrawing && confirm(`Smazat polygon "${item.id}"?`)) {
                                    onPolygonDelete(layerName, item.id)
                                  }
                                }}
                              >
                                🗑️ Smazat
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="drawEditor__modernUI__layersSection__list__item__polygons__list__item">
                      <div className="drawEditor__modernUI__layersSection__list__item__polygons__list__item__content">
                        <div className="drawEditor__modernUI__layersSection__list__item__polygons__list__item__content__name">
                          Žádné polygony ve vrstvě
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default LayersList
