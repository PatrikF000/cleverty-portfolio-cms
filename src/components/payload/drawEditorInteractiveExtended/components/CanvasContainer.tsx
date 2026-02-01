import React, { useRef, useEffect, useState } from 'react'
import SVGCanvas from './SVGCanvas'

interface CanvasContainerProps {
  svgCanvasProps: any
  activePolygonId: string | null
  scale: number
  isDrawing: boolean
  currentPoints: any[]
  setScale: (scale: number | ((prev: number) => number)) => void
  onMouseDown?: (e: React.MouseEvent) => void
  onMouseMove?: (e: React.MouseEvent) => void
  onMouseUp?: () => void
  onOpenInfo: () => void
  onCancelPolygonSelection: () => void
  onUndoLastPoint: () => void
  onStartDrawing: () => void
  onFinishDrawing: () => void
}

const CanvasContainer: React.FC<CanvasContainerProps> = ({
  svgCanvasProps,
  activePolygonId,
  scale,
  isDrawing,
  currentPoints,
  setScale,
  onMouseDown,
  onMouseMove,
  onMouseUp,
  onOpenInfo,
  onCancelPolygonSelection,
  onUndoLastPoint,
  onStartDrawing,
  onFinishDrawing,
}) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isMouseOverContainer, setIsMouseOverContainer] = useState(false)

  // Globální wheel event listener pro zoom
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (isMouseOverContainer && e.altKey) {
        e.preventDefault()
        e.stopPropagation()
        e.stopImmediatePropagation()

        const delta = e.deltaY < 0 ? 0.1 : -0.1
        setScale((prev) => Math.min(5, Math.max(0.2, prev + delta)))
      }
    }

    // Přidat listener s capture = true pro zachycení před ostatními
    document.addEventListener('wheel', handleWheel, { passive: false, capture: true })

    return () => {
      document.removeEventListener('wheel', handleWheel, { capture: true })
    }
  }, [isMouseOverContainer, setScale])

  return (
    <div className="drawEditor__visual">
      {/* Info button */}
      <div className="drawEditor__tools">
        {activePolygonId && (
          <button
            type="button"
            className="drawEditor__modernUI__buttons__secondary red"
            onClick={onCancelPolygonSelection}
          >
            ❌ Zrušit výběr
          </button>
        )}
        {isDrawing && (
          <button
            type="button"
            className="drawEditor__modernUI__buttons__secondary grey"
            onClick={onUndoLastPoint}
            disabled={currentPoints.length === 0}
          >
            ↩️ Zpět
          </button>
        )}

        {/* Start drawing */}
        {!isDrawing && !activePolygonId && (
          <button
            type="button"
            className="drawEditor__modernUI__buttons__primary green"
            onClick={onStartDrawing}
          >
            ✏️ Začít kreslení
          </button>
        )}

        {/* Finish drawing */}
        {isDrawing && (
          <button
            type="button"
            className="drawEditor__modernUI__buttons__success green"
            onClick={onFinishDrawing}
          >
            ✅ Ukončit kreslení
          </button>
        )}
        <button
          type="button"
          onClick={onOpenInfo}
          className="drawEditor__infoButton blue"
          title="Návod k použití"
        >
          ?
        </button>
      </div>
      <div className="drawEditor__visual__main">
        <div
          ref={containerRef}
          className="drawEditor__visual__main__block"
          onMouseEnter={() => setIsMouseOverContainer(true)}
          onMouseLeave={() => setIsMouseOverContainer(false)}
          onMouseDown={!activePolygonId ? onMouseDown : undefined}
          onMouseMove={!activePolygonId ? onMouseMove : undefined}
          onMouseUp={!activePolygonId ? onMouseUp : undefined}
        >
          <SVGCanvas {...svgCanvasProps} scale={scale} />
        </div>
      </div>
    </div>
  )
}

export default CanvasContainer
