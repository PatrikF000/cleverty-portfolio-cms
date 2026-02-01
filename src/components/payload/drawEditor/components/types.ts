import { CollectionSlug } from 'payload'

export type Collections = {
  id?: string
  relationTo: CollectionSlug
  realpadid: string
  value: number | null
  layerID: string
  title: string
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

export type FinallyVersionStored = {
  viewBox: ViewBox
  image: MediaStored | null // Zjednodušený Media objekt místo jen ID
  links: LayerCollections
  layers: UnifiedLayers // Používáme novou unified strukturu
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
    id: 'building',
    label: 'Budova',
    value: 'building' as LayerCategory,
  },
  {
    id: 'floor',
    label: 'Patro',
    value: 'floor' as LayerCategory,
  },
  {
    id: 'flat',
    label: 'Byt',
    value: 'flat' as LayerCategory,
  },
]
