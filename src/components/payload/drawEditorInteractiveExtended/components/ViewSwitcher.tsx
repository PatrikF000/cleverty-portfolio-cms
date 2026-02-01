import React from 'react'
import { ViewData } from './types'

interface ViewSwitcherProps {
  views: Record<string, ViewData>
  currentView: string
  onViewChange: (viewName: string) => void
  isDrawing?: boolean
}

const ViewSwitcher: React.FC<ViewSwitcherProps> = ({
  views,
  currentView,
  onViewChange,
  isDrawing = false,
}) => {
  const viewNames = Object.keys(views)

  if (viewNames.length <= 1) {
    return null // Don't show switcher if there's only one view or no views
  }

  return (
    <div className="drawEditor__viewSwitcher">
      <div className="drawEditor__viewSwitcher__header">
        <div className="drawEditor__viewSwitcher__header__icon">👁️</div>
        <span>Pohledy</span>
      </div>

      <div className="drawEditor__viewSwitcher__tabs">
        {viewNames.map((viewName) => (
          <button
            key={viewName}
            type="button"
            className={`drawEditor__viewSwitcher__tab ${
              currentView === viewName ? 'drawEditor__viewSwitcher__tab--active' : ''
            } ${isDrawing ? 'drawEditor__viewSwitcher__tab--disabled' : ''}`}
            onClick={() => onViewChange(viewName)}
            disabled={isDrawing}
            style={{
              opacity: isDrawing ? 0.3 : 1,
              cursor: isDrawing ? 'not-allowed' : 'pointer',
            }}
            title={isDrawing ? 'Nelze přepnout pohled během kreslení' : ''}
          >
            <span className="drawEditor__viewSwitcher__tab__icon">🖼️</span>
            <span className="drawEditor__viewSwitcher__tab__name">
              {views[viewName].viewName || viewName}
            </span>
          </button>
        ))}
      </div>
    </div>
  )
}

export default ViewSwitcher
