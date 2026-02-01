import React from 'react'
import { Media } from '@/payload-types'
import { Point, ViewBox, UnifiedLayers } from './types'
import PolygonPoint from './PolygonPoint'
import PolygonShape from './PolygonShape'
import DrawingPolyline from './DrawingPolyline'

interface SVGCanvasProps {
  image: Media | null
  viewBox: ViewBox
  scale: number
  currentLayer: string
  layers: UnifiedLayers
  visibleLayers: Record<string, boolean>
  currentPoints: Point[]
  selectedPoints: Point[]
  activePolygonId: string | null
  draggingIndex: number | null
  isDrawing: boolean
  svgRef: React.RefObject<SVGSVGElement>
  onSvgClick: (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => void
  onMouseMoveCirclePoints: (e: React.MouseEvent<SVGSVGElement>) => void
  onMouseUpCirclePoints: () => void
  onPolygonClick: (polygonId: string, points: Point[], layerName?: string) => void
  onPointMouseDown: (index: number) => void
}

const SVGCanvas: React.FC<SVGCanvasProps> = ({
  image,
  viewBox,
  scale,
  currentLayer,
  layers,
  visibleLayers,
  currentPoints,
  selectedPoints,
  activePolygonId,
  isDrawing,
  svgRef,
  onSvgClick,
  onMouseMoveCirclePoints,
  onMouseUpCirclePoints,
  onPolygonClick,
  onPointMouseDown,
}) => {
  // Get polygons from current layer
  // const currentLayerPolygons = layers?.[currentLayer]?.polygons || []

  // Get all visible polygons from all layers
  const allVisiblePolygons = Object.entries(layers)
    .filter(([layerName]) => visibleLayers[layerName] !== false)
    .flatMap(([layerName, layerData]) =>
      layerData.polygons.map((polygon) => ({
        ...polygon,
        layerName,
      })),
    )

  return (
    <svg
      ref={svgRef}
      style={{
        transform: `scale(${scale})`,
        transformOrigin: '0 0',
        width: `100%`,
        height: `100%`,
        margin: '0 auto',
      }}
      viewBox={`${viewBox.x} ${viewBox.y} ${viewBox.width || 1200} ${viewBox.height || 800}`}
      onClick={onSvgClick}
      onMouseMove={onMouseMoveCirclePoints}
      onMouseUp={onMouseUpCirclePoints}
      className="w-full h-full cursor-crosshair drawEditor__visual__main__block__svg"
    >
      {/* Background image */}
      {image?.url && (
        <image
          href={image?.url}
          x={0}
          y={0}
          width={viewBox.width || 1200}
          height={viewBox.height || 800}
          preserveAspectRatio="none"
        />
      )}

      {/* All visible polygons */}
      {allVisiblePolygons &&
        allVisiblePolygons?.map((poly) => (
          <PolygonShape
            key={poly.id}
            polygon={poly}
            isActive={poly.id === activePolygonId}
            isDrawing={isDrawing}
            layerName={poly.layerName}
            currentLayer={currentLayer}
            onPolygonClick={(polygonId, points) =>
              onPolygonClick(polygonId, points, poly.layerName)
            }
          />
        ))}

      {/* Currently drawing polyline */}
      <DrawingPolyline currentPoints={currentPoints} />

      {/* Editable points for active polygon - ABOVE polygons for full interactivity */}
      {activePolygonId &&
        selectedPoints?.map((point, index) => (
          <PolygonPoint
            key={`point-${index}`}
            point={point}
            index={index}
            onMouseDown={onPointMouseDown}
          />
        ))}
    </svg>
  )
}

export default SVGCanvas
