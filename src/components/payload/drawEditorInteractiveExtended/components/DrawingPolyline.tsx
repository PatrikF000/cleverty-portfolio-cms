import React from 'react'
import { Point } from './types'

interface DrawingPolylineProps {
  currentPoints: Point[]
}

const DrawingPolyline: React.FC<DrawingPolylineProps> = ({ currentPoints }) => {
  const formatPoints = (points: Point[]) => points.map((p) => `${p.x},${p.y}`).join(' ')

  if (currentPoints.length === 0) return null

  return (
    <polyline
      points={formatPoints(currentPoints)}
      fill="#F65009"
      fillOpacity={0.5}
      stroke="#fff"
      strokeDasharray="4"
      strokeWidth={3}
    />
  )
}

export default DrawingPolyline
