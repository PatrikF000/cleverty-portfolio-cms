import React, { useState } from 'react'
import { UnifiedLayers, LayerCategory, layerCategories } from './types'

// Utility funkce pro generování code-friendly ID
/*const generateCodeFriendlyId = (name: string): string => {
  return name
    .toLowerCase()
    .normalize('NFD') // Normalizuje Unicode znaky
    .replace(/[\u0300-\u036f]/g, '') // Odstraní diakritiku
    .replace(/[^a-z0-9]/g, '-') // Nahradí nealfanumerické znaky pomlčkami
    .replace(/-+/g, '-') // Sloučí více pomlček do jedné
    .replace(/^-|-$/g, '') // Odstraní pomlčky na začátku a konci
}*/

interface DrawingControlsProps {
  image: any
  currentLayer: string
  newNameOfLayer: string
  activePolygonId: string | null
  isDrawing: boolean
  currentPoints: any[]
  layers: UnifiedLayers
  visibleLayers: Record<string, boolean>
  onLayerChange: (value: string) => void
  onNewLayerNameChange: (name: string) => void
  onAddLayer: (category: LayerCategory) => void
  onCategoryToggle: (category: LayerCategory | 'all') => void
  onLayerVisibilityToggle: (layerName: string) => void
  onCancelPolygonSelection: () => void
  onUndoLastPoint: () => void
  onStartDrawing: () => void
  onFinishDrawing: () => void
}

const DrawingControls: React.FC<DrawingControlsProps> = ({
  image,
  currentLayer,
  newNameOfLayer,
  //activePolygonId,
  isDrawing,
  currentPoints,
  layers,
  visibleLayers,
  onLayerChange,
  onNewLayerNameChange,
  onAddLayer,
  onCategoryToggle,
  onLayerVisibilityToggle,
  //onCancelPolygonSelection,
  //onUndoLastPoint,
  //onStartDrawing,
  //onFinishDrawing,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<LayerCategory>('building')
  const layerNames = Object.keys(layers)

  // Helper function to check if all layers in a category are visible
  const getCategoryVisibilityStatus = (category: LayerCategory | 'all') => {
    const layersInCategory =
      category === 'all'
        ? layerNames
        : layerNames.filter((layerName) => {
            const layerData = layers[layerName]
            return layerData?.category === category
          })

    if (layersInCategory.length === 0) return { allVisible: false, someVisible: false }

    const visibleCount = layersInCategory.filter((layerName) => visibleLayers[layerName]).length
    return {
      allVisible: visibleCount === layersInCategory.length,
      someVisible: visibleCount > 0,
      visibleCount,
      totalCount: layersInCategory.length,
    }
  }

  // Get category icon
  const getCategoryIcon = (category: LayerCategory) => {
    switch (category) {
      case 'building':
        return '🏢'
      case 'floor':
        return '🏠'
      case 'flat':
        return '🚪'
      default:
        return '🏗️'
    }
  }

  if (!image) {
    return (
      <div className="drawEditor__modernUI__layersSection__empty">
        <div className="drawEditor__modernUI__layersSection__empty__icon">🖼️</div>
        <p>Není vybrán žádný obrázek</p>
      </div>
    )
  }

  return (
    <div className="drawEditor__modernUI">
      <div className="drawEditor__modernUI__header">
        <div>
          <h2 className="drawEditor__modernUI__header__title">Kreslící nástroje</h2>
          <p className="drawEditor__modernUI__header__subtitle">
            Spravujte vrstvy a kreslete polygony
          </p>
        </div>
      </div>

      <div className="drawEditor__modernUI__layersSection">
        <div className="drawEditor__modernUI__layersSection__title">
          <div className="drawEditor__modernUI__layersSection__title__icon">🎨</div>
          <span>Vrstvy a kreslení</span>
        </div>

        {/* Category Visibility Toggle */}
        <div className="drawEditor__modernUI__categoryFilter">
          <div className="drawEditor__modernUI__categoryFilter__title">
            <span>Viditelnost podle kategorií:</span>
          </div>
          <div className="drawEditor__modernUI__categoryFilter__buttons">
            {(() => {
              const allStatus = getCategoryVisibilityStatus('all')
              return (
                <button
                  type="button"
                  className={`drawEditor__modernUI__categoryFilter__button ${
                    allStatus.allVisible
                      ? 'drawEditor__modernUI__categoryFilter__button--active'
                      : allStatus.someVisible
                        ? 'drawEditor__modernUI__categoryFilter__button--partial'
                        : ''
                  }`}
                  onClick={() => onCategoryToggle('all')}
                  title={`${allStatus.visibleCount}/${allStatus.totalCount} vrstev viditelných`}
                >
                  <span className="drawEditor__modernUI__categoryFilter__button__icon">🌍</span>
                  <span>
                    Všechny ({allStatus.visibleCount}/{allStatus.totalCount})
                  </span>
                </button>
              )
            })()}
            {layerCategories.map((category) => {
              const status = getCategoryVisibilityStatus(category.value)
              return (
                <button
                  key={category.id}
                  type="button"
                  className={`drawEditor__modernUI__categoryFilter__button ${
                    status.allVisible
                      ? 'drawEditor__modernUI__categoryFilter__button--active'
                      : status.someVisible
                        ? 'drawEditor__modernUI__categoryFilter__button--partial'
                        : ''
                  }`}
                  onClick={() => onCategoryToggle(category.value)}
                  title={`${status.visibleCount}/${status.totalCount} vrstev viditelných`}
                >
                  <span className="drawEditor__modernUI__categoryFilter__button__icon">
                    {getCategoryIcon(category.value)}
                  </span>
                  <span>
                    {category.label} ({status.visibleCount}/{status.totalCount})
                  </span>
                </button>
              )
            })}
          </div>
        </div>

        {/* Tabs for layers */}
        <div className="drawEditor__modernUI__tabs">
          <div className="drawEditor__modernUI__tabs__container">
            {layerNames.map((layerName) => {
              const layerData = layers[layerName]
              const categoryIcon = layerData?.category ? getCategoryIcon(layerData.category) : '🏗️'
              const isVisible = visibleLayers[layerName]

              return (
                <button
                  key={layerName}
                  type="button"
                  className={`drawEditor__modernUI__tabs__tab ${
                    currentLayer === layerName ? 'drawEditor__modernUI__tabs__tab--active' : ''
                  } ${!isVisible ? 'drawEditor__modernUI__tabs__tab--hidden' : ''} ${
                    isDrawing && currentLayer !== layerName
                      ? 'drawEditor__modernUI__tabs__tab--disabled'
                      : ''
                  }`}
                  onClick={() => onLayerChange(layerName)}
                  style={{
                    opacity: isVisible ? (isDrawing && currentLayer !== layerName ? 0.3 : 1) : 0.5,
                    cursor: isDrawing && currentLayer !== layerName ? 'not-allowed' : 'pointer',
                  }}
                  disabled={isDrawing && currentLayer !== layerName}
                  title={
                    isDrawing && currentLayer !== layerName
                      ? 'Nelze přepnout vrstvu během kreslení'
                      : ''
                  }
                >
                  <div
                    className="drawEditor__modernUI__tabs__tab__visibility"
                    onClick={(e) => {
                      e.stopPropagation()
                      onLayerVisibilityToggle(layerName)
                    }}
                    title={isVisible ? 'Skrýt vrstvu' : 'Zobrazit vrstvu'}
                  >
                    {isVisible ? '👁️' : '🙈'}
                  </div>
                  <span className="drawEditor__modernUI__tabs__tab__icon">{categoryIcon}</span>
                  <span className="drawEditor__modernUI__tabs__tab__name">
                    {layerData?.name || layerName}
                  </span>
                  <span className="drawEditor__modernUI__tabs__tab__count">
                    {layerData?.polygons?.length || 0}
                  </span>
                  {layerData?.category && (
                    <span className="drawEditor__modernUI__tabs__tab__category">
                      {layerCategories.find((cat) => cat.value === layerData.category)?.label}
                    </span>
                  )}
                </button>
              )
            })}

            {/* Add new layer button */}
            <button
              type="button"
              className={`drawEditor__modernUI__tabs__tab drawEditor__modernUI__tabs__tab--add ${
                isDrawing ? 'drawEditor__modernUI__tabs__tab--disabled' : ''
              }`}
              onClick={() => onLayerChange('new')}
              disabled={isDrawing}
              style={{
                opacity: isDrawing ? 0.3 : 1,
                cursor: isDrawing ? 'not-allowed' : 'pointer',
              }}
              title={isDrawing ? 'Nelze přidat novou vrstvu během kreslení' : ''}
            >
              <span className="drawEditor__modernUI__tabs__tab__icon">➕</span>
              <span className="drawEditor__modernUI__tabs__tab__name">Nová vrstva</span>
            </button>
          </div>
        </div>

        {/* Content for selected tab */}
        <div className="drawEditor__modernUI__tabContent">
          {currentLayer === 'new' ? (
            // New layer form
            <div className="drawEditor__modernUI__tabContent__newLayer">
              <div className="drawEditor__modernUI__tabContent__newLayer__header">
                <div className="drawEditor__modernUI__tabContent__newLayer__header__icon">➕</div>
                <h3>Vytvořit novou vrstvu</h3>
              </div>

              <div className="drawEditor__modernUI__tabContent__newLayer__form">
                <div className="drawEditor__modernUI__tabContent__newLayer__form__field">
                  <label>Kategorie vrstvy:</label>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value as LayerCategory)}
                    className="drawEditor__modernUI__tabContent__newLayer__form__select"
                  >
                    {layerCategories.map((category) => (
                      <option key={category.id} value={category.value}>
                        {category.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="drawEditor__modernUI__tabContent__newLayer__form__field">
                  <label>Název vrstvy (s diakritikou):</label>
                  <input
                    placeholder="Např: Budova č.1, Patro 2, Byt A-1"
                    value={newNameOfLayer}
                    onChange={(e) => onNewLayerNameChange(e.target.value)}
                    className="drawEditor__modernUI__tabContent__newLayer__form__input"
                    autoFocus
                  />
                </div>

                <div className="drawEditor__modernUI__tabContent__newLayer__form__actions">
                  <button
                    type="button"
                    className="drawEditor__modernUI__buttons__success"
                    onClick={() => onAddLayer(selectedCategory)}
                    disabled={!newNameOfLayer.trim()}
                  >
                    ➕ Vytvořit vrstvu
                  </button>
                </div>
              </div>
            </div>
          ) : currentLayer ? (
            // Drawing controls for selected layer
            <div className="drawEditor__modernUI__tabContent__drawing">
              <div className="drawEditor__modernUI__tabContent__drawing__header">
                <div className="drawEditor__modernUI__tabContent__drawing__header__icon">✏️</div>
                <h3>Kreslení - {currentLayer}</h3>
              </div>

              <div className="drawEditor__modernUI__tabContent__drawing__status">
                <div className="drawEditor__modernUI__tabContent__drawing__status__info">
                  <span className="drawEditor__modernUI__tabContent__drawing__status__label">
                    Stav:
                  </span>
                  <span
                    className={`drawEditor__modernUI__tabContent__drawing__status__value ${
                      isDrawing
                        ? 'drawEditor__modernUI__tabContent__drawing__status__value--active'
                        : ''
                    }`}
                  >
                    {isDrawing ? '🟢 Kreslení aktivní' : '⚪ Kreslení neaktivní'}
                  </span>
                  {currentPoints.length > 0 && (
                    <span className="drawEditor__modernUI__tabContent__drawing__status__points">
                      ({currentPoints.length} bodů)
                    </span>
                  )}
                </div>
              </div>

              <div className="drawEditor__modernUI__tabContent__drawing__controls">
                {/* Cancel polygon selection */}
                {/*activePolygonId && (
                  <button
                    type="button"
                    className="drawEditor__modernUI__buttons__secondary"
                    onClick={onCancelPolygonSelection}
                  >
                    ❌ Zrušit výběr
                  </button>
                )*/}

                {/* Undo last point while drawing */}
                {/*isDrawing && (
                  <button
                    type="button"
                    className="drawEditor__modernUI__buttons__secondary"
                    onClick={onUndoLastPoint}
                    disabled={currentPoints.length === 0}
                  >
                    ↩️ Zpět
                  </button>
                )*/}

                {/* Start drawing */}
                {/*!isDrawing && !activePolygonId && (
                  <button
                    type="button"
                    className="drawEditor__modernUI__buttons__primary"
                    onClick={onStartDrawing}
                  >
                    ✏️ Začít kreslení
                  </button>
                )*/}

                {/* Finish drawing */}
                {/*isDrawing && (
                  <button
                    type="button"
                    className="drawEditor__modernUI__buttons__success"
                    onClick={onFinishDrawing}
                  >
                    ✅ Ukončit kreslení
                  </button>
                )*/}
              </div>
            </div>
          ) : (
            // No layer selected
            <div className="drawEditor__modernUI__tabContent__empty">
              <div className="drawEditor__modernUI__tabContent__empty__icon">📋</div>
              <p>Vyberte vrstvu nebo vytvořte novou</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default DrawingControls
