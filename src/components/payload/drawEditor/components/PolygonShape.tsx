import React from 'react'
import { Polygon, Point } from './types'

interface PolygonShapeProps {
  polygon: Polygon
  isActive: boolean
  isDrawing: boolean
  layerName?: string
  currentLayer?: string
  onPolygonClick: (polygonId: string, points: Point[]) => void
}

const PolygonShape: React.FC<PolygonShapeProps> = ({
  polygon,
  isActive,
  isDrawing,
  layerName,
  currentLayer,
  onPolygonClick,
}) => {
  const formatPoints = (points: Point[]) => points.map((p) => `${p.x},${p.y}`).join(' ')

  // Check if this polygon is from current layer
  const isCurrentLayer = layerName === currentLayer

  // Different colors for current layer vs other layers
  const getFillColor = () => {
    if (isActive) return '#F65009' // Active polygon (bright orange)
    if (isCurrentLayer) return '#fc8653' // Current layer (orange)
    return '#5c6f8a' // Other layers (gray)
  }

  const getOpacity = () => {
    if (isActive) return 0.7
    if (isCurrentLayer) return 0.6
    // Během kreslení jsou polygony z jiných vrstev ještě více průhledné
    return isDrawing ? 0.2 : 0.4 // Lower opacity for non-current layers
  }

  return (
    <polygon
      points={formatPoints(polygon.points)}
      fill={getFillColor()}
      fillOpacity={getOpacity()}
      stroke={isCurrentLayer ? 'transparent' : '#64748b'}
      strokeWidth={isCurrentLayer ? 2 : 1}
      className={
        isDrawing && !isCurrentLayer ? 'cursor-not-allowed' : isDrawing ? '' : 'cursor-pointer'
      }
      onClick={(e) => {
        e.stopPropagation()
        // Pokud je aktivní kreslení a polygon není z aktuální vrstvy, zabráníme kliknutí
        if (isDrawing && !isCurrentLayer) {
          console.log('Cannot click on polygon from different layer while drawing')
          return
        }
        onPolygonClick(polygon.id, polygon.points)
      }}
    />
  )
}

export default PolygonShape
