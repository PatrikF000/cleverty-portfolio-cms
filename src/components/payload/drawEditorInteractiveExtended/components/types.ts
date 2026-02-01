import { CollectionSlug } from 'payload'
import { Media } from '@/payload-types'

export type Collections = {
  id?: string
  relationTo: CollectionSlug
  realpadid: string
  value: number
  layerID: string
  title: string
  phase?: string
  status?: string
  labelPosition?: string
  linkToPricePage?: boolean
  disableLink?: boolean
  labelPositionX?: number
  labelPositionY?: number
  customLabel?: string
}
export type LayerCollections = Collections[]

export type Point = { x: number; y: number }
export type Polygon = { id: string; points: Point[] }

// Layer category types
export type LayerCategory = 'building' | 'floor' | 'flat'

// Unified layer structure
export type LayerData = {
  name: string
  codeFriendlyId: string
  category: LayerCategory
  phase?: string
  polygons: Polygon[]
}

// Unified layers - replaces both LayeredPolygons and CategorizedLayers
export type UnifiedLayers = Record<string, LayerData>

// Keep old types for backward compatibility during migration
export type LayeredPolygons = Record<string, Polygon[]>
export type CategorizedLayers = Record<string, LayerInfo>
export type LayerInfo = {
  name: string
  category: LayerCategory
  polygons: Polygon[]
}

export type ViewBox = {
  x: number
  y: number
  width: number | null | undefined
  height: number | null | undefined
}

// Extended types for multiple views
export type ViewData = {
  viewName: string
  direct?: string
  image: Media | MediaStored | null
  layers: UnifiedLayers // New unified structure
  // Keep old fields for backward compatibility during migration
  legacyLayers?: LayeredPolygons
  categorizedLayers?: CategorizedLayers
  links: LayerCollections
  viewBox: ViewBox
  phase?: string
}

// Simplified Media type for storage - only essential data
export type MediaStored = {
  id: number
  alt: string
  updatedAt: string
  createdAt: string
  url: string
  filename?: string
  width?: number | null
  height?: number | null
  project?: number | null // Jen ID projektu místo celého objektu
}

// Simplified types for storage - only essential data
export type ViewDataStored = {
  viewName: string
  direct?: string
  image: MediaStored | null // Zjednodušený Media objekt místo jen ID
  layers: UnifiedLayers // New unified structure
  // Keep old fields for backward compatibility during migration
  legacyLayers?: LayeredPolygons
  categorizedLayers?: CategorizedLayers
  links: LayerCollections
  viewBox: ViewBox
}

export type FinallyVersionStoredExtended = {
  currentView: string
  disPicker?: boolean
  views: Record<string, ViewDataStored>
}

export const collectionForFetch = [
  {
    id: 'buildings',
    label: 'Budovy',
    value: 'buildings',
  },
  {
    id: 'floors',
    label: 'Patra',
    value: 'floors',
  },
  {
    id: 'flats',
    label: 'Byty',
    value: 'flats',
  },
]

export const layerCategories = [
  {
    id: 'buildings',
    label: 'Budova',
    value: 'building' as LayerCategory,
  },
  {
    id: 'floors',
    label: 'Patro',
    value: 'floor' as LayerCategory,
  },
  {
    id: 'flats',
    label: 'Byt',
    value: 'flat' as LayerCategory,
  },
]
