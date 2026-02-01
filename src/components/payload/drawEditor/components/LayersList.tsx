import React from 'react'
import { UnifiedLayers, LayerCollections, collectionForFetch } from './types'
import ReferenceSelector from '../../referenceSelect/ReferenceSelect'
import DocumentOpener from './DocumentOpener'

interface LayersListProps {
  layers: UnifiedLayers
  layersLink: LayerCollections
  currentLayer: string
  isDrawing: boolean
  projectID?: string
  onLayersLinkChange: (layerName: string, data: any) => void
  onLayerLinkDelete: (layerName: string) => void
  onLayerRename: (oldName: string, newName: string) => void
  onLayerDelete: (layerName: string) => void
  onLayerChange: (layerName: string) => void
  onPolygonEdit: (layerName: string, polygonId: string, points: any[]) => void
  onPolygonDelete: (layerName: string, polygonId: string) => void
}

const LayersList: React.FC<LayersListProps> = ({
  layers,
  layersLink,
  currentLayer,
  isDrawing,
  projectID,
  onLayersLinkChange,
  onLayerLinkDelete,
  onLayerRename,
  onLayerDelete,
  //onLayerChange,
  onPolygonEdit,
  onPolygonDelete,
}) => {
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

                <div className="drawEditor__modernUI__layersSection__list__item__content">
                  <div className="drawEditor__modernUI__layersSection__list__item__content__link">
                    <span className="drawEditor__modernUI__layersSection__list__item__content__link__label">
                      Odkaz:
                    </span>
                    {filteredByLayerName(layerName)?.title &&
                    filteredByLayerName(layerName)?.value ? (
                      <div className="drawEditor__modernUI__layersSection__list__item__content__link__value">
                        {/*<button
                          type="button"
                          style={{ cursor: 'pointer' }}
                          onClick={() => {
                            openDrawer()
                          }}
                          //href={`/admin/collections/${filteredByLayerName(layerName)?.relationTo}/${filteredByLayerName(layerName)?.value}`}
                          className="drawEditor__modernUI__layersSection__list__item__content__link__value__text"
                        >
                          {filteredByLayerName(layerName)?.title}
                        </button>*/}
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
                      availableCollections={collectionForFetch}
                    />
                  </div>
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
