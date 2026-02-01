// Types for XML migration data structures and API interfaces

export interface MigrateRequest {
  projectID: string
  projectRealID: string
  projectName?: string
  page?: number
  limit?: number
  continueFrom?: string
}

export interface MigrateResponse {
  success: boolean
  imported: number
  errors: MigrateError[]
  countBuildings: number
  countFloors: number
  countFlats: number
  processingTime?: number
}

export interface PaginationResponse extends MigrateResponse {
  pagination: {
    currentPage: number
    totalPages: number
    hasMore: boolean
    totalItems: number
    itemsPerPage: number
  }
  progress: {
    totalProcessed: number
    totalCreated: number
    totalErrors: number
  }
}

export interface MigrateError {
  type: 'building' | 'floor' | 'flat'
  itemId?: string
  error: string
  data?: Record<string, any>
}

// XML structure types
export interface XMLBuilding {
  $attrs: {
    id: string
    name: string
  }
  floor?: XMLFloor | XMLFloor[]
}

export interface XMLFloor {
  $attrs: {
    id: string
    floorno: string
  }
  flat?: XMLFlat | XMLFlat[]
}

export interface XMLFlat {
  $attrs: {
    id: string
    pdf?: string
    'associated-unit-ids'?: string
    plan?: string
  }
  'flat-attribute'?: FlatAttribute | FlatAttribute[]
  picture?: XMLPicture | XMLPicture[]
}

export type XMLPicture = {
  $attrs: {
    id: string
    resource?: string
    'creation-time'?: string
  }
}

export interface FlatAttribute {
  key: string
  value: string
}

// Normalized data structures
export interface NormalizedBuilding {
  realpadid: string
  title: string
  project: number
}

export interface NormalizedFloor {
  building: string
  realpadid: string
  title: string
  project: number
  floorNo: number
  realpadFloor?: Record<string, any>
}

export interface NormalizedFlat {
  realpadFlat: Record<string, any>
  title: string
  slug: string
  project: number
  building: string
  floor: string
  realpadid: string
}

// Batch operation types
export interface BatchResult<T> {
  created: T[]
  existing: T[]
  errors: MigrateError[]
}

export interface ExistenceCheckResult {
  buildings: Set<string>
  floors: Set<string>
  flats: Set<string>
}

// RealPad API configuration
export interface RealPadConfig {
  login: string
  password: string
  screenid: string
  developerid: string
  projectid: string
}
