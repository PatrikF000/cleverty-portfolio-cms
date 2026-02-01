import React from 'react'
import { Point } from './types'

interface PolygonPointProps {
  point: Point
  index: number
  onMouseDown: (index: number) => void
}

const PolygonPoint: React.FC<PolygonPointProps> = ({ point, index, onMouseDown }) => {
  return (
    <g>
      {/* Větší neviditelný kruh pro lepší klikání */}
      <circle
        cx={point.x}
        cy={point.y}
        r={12}
        fill="transparent"
        stroke="transparent"
        className="cursor-move hover:fill-blue-200 hover:fill-opacity-20 transition-all duration-200"
        onMouseDown={(e) => {
          e.stopPropagation()
          onMouseDown(index)
        }}
      />
      {/* Vizuální kruh */}
      <circle
        cx={point.x}
        cy={point.y}
        r={6}
        fill="#fff"
        fillOpacity={0.4}
        stroke="#000"
        strokeWidth={1}
        strokeOpacity={0.7}
        className="drawEditor__circlePoint"
        pointerEvents="none"
      />
      {/* Malá černá tečka uprostřed */}
      <circle cx={point.x} cy={point.y} r={1} fill="#000" fillOpacity={0.8} pointerEvents="none" />
    </g>
  )
}

export default PolygonPoint
