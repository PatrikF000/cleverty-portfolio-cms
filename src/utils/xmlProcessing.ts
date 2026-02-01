import { z } from 'zod'
import {
  XMLBuilding,
  XMLFloor,
  XMLFlat,
  FlatAttribute,
  NormalizedBuilding,
  NormalizedFloor,
  NormalizedFlat,
  MigrateRequest,
  XMLPicture,
} from '@/types/migrate'

// Validation schemas
export const MigrateRequestSchema = z.object({
  projectID: z.union([z.string(), z.number()]).transform((val) => String(val)),
  projectRealID: z.union([z.string(), z.number()]).transform((val) => String(val)),
  projectName: z.string().min(1, 'Project name is required').optional(),
})

// Helper function to convert empty values to null and handle XML attributes
export function normalizeXMLData(obj: Record<string, any>): Record<string, any> {
  if (Array.isArray(obj)) {
    return obj.map(normalizeXMLData)
  }

  if (obj && typeof obj === 'object') {
    // Handle XML attributes by merging them into the main object
    if (obj._attr && typeof obj._attr === 'object') {
      Object.assign(obj, obj._attr)
      delete obj._attr
    }

    const result: Record<string, any> = {}
    for (const [key, value] of Object.entries(obj)) {
      if (typeof value === 'string') {
        result[key] = value.trim() === '' ? null : value.trim()
      } else if (value === undefined) {
        result[key] = null
      } else {
        result[key] = normalizeXMLData(value)
      }
    }
    return result
  }

  return obj
}

// Ensure array format for XML elements that can be single or multiple
export function ensureArray<T>(item: T | T[] | undefined): T[] {
  if (!item) return []
  return Array.isArray(item) ? item : [item]
}

// Transform flat attributes from XML format to object
export function transformFlatAttributes(
  attributes: FlatAttribute | FlatAttribute[] | undefined | XMLPicture | XMLPicture[],
): Record<string, any> {
  const attrs = ensureArray(attributes)
  const result: Record<string, any> = {}

  for (const item of attrs) {
    if (typeof item === 'object' && item !== null && 'key' in item && 'value' in item) {
      // Ensure only primitive values are stored to prevent SQLite binding errors
      const value = item.value
      if (value === null || value === undefined) {
        result[item.key] = null
      } else if (
        typeof value === 'string' ||
        typeof value === 'number' ||
        typeof value === 'boolean'
      ) {
        result[item.key] = value
      } else {
        // Convert complex types to string to avoid SQLite binding errors
        result[item.key] = String(value)
      }
    } else if (typeof item === 'string') {
      result[item] = ''
    }
  }

  return result
}

// Get flat title from attributes
export function getFlatTitle(attributes: FlatAttribute | FlatAttribute[] | undefined): string {
  const flatObj = transformFlatAttributes(attributes)
  return flatObj.flat_internal_id || ''
}

// Get flat slug from attributes
export function getFlatSlug(attributes: FlatAttribute | FlatAttribute[] | undefined): string {
  const flatObj = transformFlatAttributes(attributes)
  return flatObj.flat_internal_id ? flatObj.flat_internal_id.toString() : ''
}

// Data transformation functions
export function buildingToNormalized(building: XMLBuilding, projectID: number): NormalizedBuilding {
  return {
    realpadid: building.$attrs.id,
    title: building.$attrs.name,
    project: projectID,
  }
}

// Extract project data from XML attributes
export function extractProjectData(xmlData: Record<string, any>): Record<string, any> {
  const projectData: Record<string, any> = {}

  // Get attributes from $attrs if available, otherwise use the data directly
  const attributes = xmlData.$attrs || xmlData

  // Extract all possible attributes from XML
  const possibleAttributes = [
    'id',
    'name',
    'gps',
    'plan',
    'icon',
    'logo',
    'standards',
    'offline-map',
    'pinpoint',
    'hypo-assistant',
    'public',
    'hidden',
    'demo',
    'currency',
    'available-second-market-unit-count',
    'description',
    'address',
    'city',
    'zip',
    'country',
    'developer',
    'status',
    'type',
    'completion-date',
    'handover-date',
    'total-units',
    'available-units',
    'sold-units',
    'reserved-units',
    'price-from',
    'price-to',
    'area-from',
    'area-to',
    'website',
    'phone',
    'email',
    'brochure',
    'video',
    'virtual-tour',
    'floor-plan',
    'gallery',
    'amenities',
    'features',
  ]

  // Extract attributes from XML data
  for (const attr of possibleAttributes) {
    if (attributes[attr] !== undefined && attributes[attr] !== null && attributes[attr] !== '') {
      // Convert only truly numeric values
      if (['gps', 'available-second-market-unit-count'].includes(attr)) {
        const numValue = Number(attributes[attr])
        if (!isNaN(numValue)) {
          projectData[attr] = numValue
        }
      } else {
        projectData[attr] = attributes[attr]
      }
    }
  }

  // Store any additional data as JSON
  const additionalData: Record<string, any> = {}
  for (const [key, value] of Object.entries(attributes)) {
    if (
      !possibleAttributes.includes(key) &&
      value !== undefined &&
      value !== null &&
      value !== ''
    ) {
      additionalData[key] = value
    }
  }

  if (Object.keys(additionalData).length > 0) {
    projectData['additional-data'] = additionalData
  }

  return projectData
}

// Extract building data from XML attributes
export function extractBuildingData(xmlData: Record<string, any>): Record<string, any> {
  const buildingData: Record<string, any> = {}

  // Get attributes from $attrs if available, otherwise use the data directly
  const attributes = xmlData.$attrs || xmlData

  // Extract all possible building attributes from XML
  const possibleAttributes = [
    'id',
    'name',
    'arrow-direction',
    'description',
    'address',
    'city',
    'zip',
    'country',
    'status',
    'type',
    'completion-date',
    'handover-date',
    'total-units',
    'available-units',
    'sold-units',
    'reserved-units',
    'price-from',
    'price-to',
    'area-from',
    'area-to',
    'website',
    'phone',
    'email',
    'brochure',
    'video',
    'virtual-tour',
    'floor-plan',
    'gallery',
    'amenities',
    'features',
    'gps',
    'icon',
    'plan',
    'logo',
    'standards',
    'offline-map',
    'pinpoint',
    'currency',
    'developer',
    'architect',
    'contractor',
    'construction-company',
    'building-permit',
    'occupancy-permit',
    'energy-certificate',
    'parking-spaces',
    'underground-parking',
    'surface-parking',
    'bicycle-parking',
    'elevator',
    'security-system',
    'intercom',
    'cctv',
    'access-control',
    'fire-alarm',
    'sprinkler-system',
    'heating-system',
    'cooling-system',
    'ventilation',
    'air-conditioning',
    'heating-type',
    'cooling-type',
    'energy-class',
    'energy-consumption',
    'co2-emissions',
    'renewable-energy',
    'solar-panels',
    'heat-pump',
    'geothermal',
    'rainwater-harvesting',
    'green-roof',
    'balcony',
    'terrace',
    'garden',
    'playground',
    'bbq-area',
    'outdoor-kitchen',
    'swimming-pool',
    'sauna',
    'gym',
    'fitness-center',
    'spa',
    'wellness',
    'concierge',
    'reception',
    'lobby',
    'common-areas',
    'meeting-room',
    'business-center',
    'co-working',
    'storage',
    'bike-storage',
    'pet-friendly',
    'wheelchair-accessible',
    'senior-friendly',
    'family-friendly',
  ]

  // Extract attributes from XML data
  for (const attr of possibleAttributes) {
    if (attributes[attr] !== undefined && attributes[attr] !== null && attributes[attr] !== '') {
      // Convert numeric values
      if (
        [
          'total-units',
          'available-units',
          'sold-units',
          'reserved-units',
          'price-from',
          'price-to',
          'area-from',
          'area-to',
          'parking-spaces',
          'underground-parking',
          'surface-parking',
          'bicycle-parking',
        ].includes(attr)
      ) {
        const numValue = Number(attributes[attr])
        if (!isNaN(numValue)) {
          buildingData[attr] = numValue
        }
      } else {
        buildingData[attr] = attributes[attr]
      }
    }
  }

  // Store any additional data as JSON
  const additionalData: Record<string, any> = {}
  for (const [key, value] of Object.entries(attributes)) {
    if (
      !possibleAttributes.includes(key) &&
      value !== undefined &&
      value !== null &&
      value !== ''
    ) {
      additionalData[key] = value
    }
  }

  if (Object.keys(additionalData).length > 0) {
    buildingData['additional-data'] = additionalData
  }

  return buildingData
}

// Extract floor data from XML attributes
export function extractFloorData(xmlData: Record<string, any>): Record<string, any> {
  const floorData: Record<string, any> = {}

  // Get attributes from $attrs if available, otherwise use the data directly
  const attributes = xmlData.$attrs || xmlData

  // Extract all possible floor attributes from XML
  const possibleAttributes = [
    'id',
    'floorNo',
    'name',
    'arrow-direction',
    'description',
    'address',
    'city',
    'zip',
    'country',
    'status',
    'type',
    'completion-date',
    'handover-date',
    'total-units',
    'available-units',
    'sold-units',
    'reserved-units',
    'price-from',
    'price-to',
    'area-from',
    'area-to',
    'website',
    'phone',
    'email',
    'brochure',
    'video',
    'virtual-tour',
    'floor-plan',
    'gallery',
    'amenities',
    'features',
    'gps',
    'icon',
    'plan',
    'logo',
    'standards',
    'offline-map',
    'pinpoint',
    'currency',
    'developer',
    'architect',
    'contractor',
    'construction-company',
    'building-permit',
    'occupancy-permit',
    'energy-certificate',
    'parking-spaces',
    'underground-parking',
    'surface-parking',
    'bicycle-parking',
    'elevator',
    'security-system',
    'intercom',
    'cctv',
    'access-control',
    'fire-alarm',
    'sprinkler-system',
    'heating-system',
    'cooling-system',
    'ventilation',
    'air-conditioning',
    'heating-type',
    'cooling-type',
    'energy-class',
    'energy-consumption',
    'co2-emissions',
    'renewable-energy',
    'solar-panels',
    'heat-pump',
    'geothermal',
    'rainwater-harvesting',
    'green-roof',
    'balcony',
    'terrace',
    'garden',
    'playground',
    'bbq-area',
    'outdoor-kitchen',
    'swimming-pool',
    'sauna',
    'gym',
    'fitness-center',
    'spa',
    'wellness',
    'concierge',
    'reception',
    'lobby',
    'common-areas',
    'meeting-room',
    'business-center',
    'co-working',
    'storage',
    'bike-storage',
    'pet-friendly',
    'wheelchair-accessible',
    'senior-friendly',
    'family-friendly',
  ]

  // Extract attributes from XML data
  for (const attr of possibleAttributes) {
    if (attributes[attr] !== undefined && attributes[attr] !== null && attributes[attr] !== '') {
      // Convert numeric values
      if (
        [
          'floorNo',
          'total-units',
          'available-units',
          'sold-units',
          'reserved-units',
          'price-from',
          'price-to',
          'area-from',
          'area-to',
          'parking-spaces',
          'underground-parking',
          'surface-parking',
          'bicycle-parking',
        ].includes(attr)
      ) {
        const numValue = Number(attributes[attr])
        if (!isNaN(numValue)) {
          floorData[attr] = numValue
        }
      } else {
        floorData[attr] = attributes[attr]
      }
    }
  }

  // Store any additional data as JSON
  const additionalData: Record<string, any> = {}
  for (const [key, value] of Object.entries(attributes)) {
    if (
      !possibleAttributes.includes(key) &&
      value !== undefined &&
      value !== null &&
      value !== ''
    ) {
      additionalData[key] = value
    }
  }

  if (Object.keys(additionalData).length > 0) {
    floorData['additional-data'] = additionalData
  }

  return floorData
}

// Extract flat data from XML attributes
export function extractFlatData(xmlData: Record<string, any>): Record<string, any> {
  const flatData: Record<string, any> = {}

  // Get attributes from $attrs if available, otherwise use the data directly
  const attributes = xmlData

  const picture = xmlData['picture'] as XMLPicture[] | XMLPicture
  console.log('PICTURE', picture)

  // Extract flat attributes from XML - based on RealpadFlat field structure
  const possibleAttributes = [
    'id',
    'plan',
    'pdf',
    'picture',
    'associated-unit-ids',
    'flat_internal_id',
    'flat_disposition',
    'flat_area',
    'flat_area_living',
    'flat_area_balcony',
    'flat_area_terrace',
    'flat_area_loggia',
    'flat_area_garden',
    'flat_price',
    'flat_price_without_vat',
    'flat_discount_vat',
    'flat_discount_without_vat',
    'flat_price_before_discount_vat',
    'flat_price_before_discount_without_vat',
    'flat_status',
    'flat_orientation',
    'flat_type',
    'associatedunits_internal_ids',
    'associatedunits_totalprice_novat',
    'associatedunits_totalprice_vat',
    'flat_category',
  ]

  // Extract attributes from XML data
  for (const attr of possibleAttributes) {
    if (attributes[attr] !== undefined && attributes[attr] !== null && attributes[attr] !== '') {
      // Convert numeric values
      if (
        [
          'flat_area',
          'flat_area_living',
          'flat_area_balcony',
          'flat_area_terrace',
          'flat_area_loggia',
          'flat_area_garden',
          'flat_price',
          'flat_price_without_vat',
          'flat_discount_vat',
          'flat_discount_without_vat',
          'flat_price_before_discount_vat',
          'flat_price_before_discount_without_vat',
          'associatedunits_totalprice_novat',
          'associatedunits_totalprice_vat',
        ].includes(attr)
      ) {
        const numValue = Number(attributes[attr])
        if (!isNaN(numValue)) {
          flatData[attr] = numValue
        }
      } else {
        flatData[attr] = attributes[attr]
      }
    }
  }

  // Process flat-attribute elements if they exist
  if (xmlData['flat-attribute'] && Array.isArray(xmlData['flat-attribute'])) {
    for (const attr of xmlData['flat-attribute']) {
      const key = attr.$attrs?.key
      const value = attr.$attrs?.value

      if (key && value !== undefined && value !== null && value !== '') {
        // Convert numeric values for specific keys
        if (
          [
            'flat_area',
            'flat_area_living',
            'flat_area_balcony',
            'flat_area_terrace',
            'flat_area_loggia',
            'flat_area_garden',
            'flat_price',
            'flat_price_without_vat',
            'flat_discount_vat',
            'flat_discount_without_vat',
            'flat_price_before_discount_vat',
            'flat_price_before_discount_without_vat',
            'associatedunits_totalprice_novat',
            'associatedunits_totalprice_vat',
          ].includes(key)
        ) {
          const numValue = Number(value)
          if (!isNaN(numValue)) {
            flatData[key] = numValue
          }
        } else {
          flatData[key] = value
        }
      }
    }
  }

  // Process picture elements if they exist
  if (xmlData.picture && Array.isArray(xmlData.picture)) {
    const pictures = xmlData.picture.map((pic: any) => ({
      id: pic.$attrs?.id,
      creationTime: pic.$attrs?.['creation-time'],
      name: pic.name?.[0]?.$attrs?.text || pic.name?.[0]?.text,
    }))
    flatData.pictures = pictures
  } else if (xmlData.picture && xmlData.picture.$attrs) {
    // Single picture
    flatData.pictures = [
      {
        id: xmlData.picture.$attrs.id,
        creationTime: xmlData.picture.$attrs['creation-time'],
        name: xmlData.picture.name?.[0]?.$attrs?.text || xmlData.picture.name?.[0]?.text,
      },
    ]
  }

  // Store any additional data as JSON
  const additionalData: Record<string, any> = {}
  for (const [key, value] of Object.entries(attributes)) {
    if (
      !possibleAttributes.includes(key) &&
      value !== undefined &&
      value !== null &&
      value !== ''
    ) {
      additionalData[key] = value
    }
  }

  if (Object.keys(additionalData).length > 0) {
    flatData['additional-data'] = additionalData
  }

  return flatData
}

export function floorToNormalized(
  floor: XMLFloor,
  buildingId: string,
  buildingTitle: string,
  projectID: number,
): NormalizedFloor {
  // Extract floor data from XML attributes
  const floorData = extractFloorData(floor)

  return {
    building: buildingId,
    realpadid: floor.$attrs.id,
    title: `${buildingTitle} | ${floor.$attrs.floorno}`,
    project: projectID,
    floorNo: Number(floor.$attrs.floorno),
    realpadFloor: floorData,
  }
}

export function flatToNormalized(
  flat: XMLFlat,
  projectID: number,
  buildingId: string,
  floorId: string,
): NormalizedFlat {
  const flatAttributes = transformFlatAttributes(flat['flat-attribute'])
  const picture = flat['picture'] as XMLPicture[] | XMLPicture
  // Add PDF ID to flat attributes if it exists
  if (flat.$attrs.pdf) {
    flatAttributes.pdf = flat.$attrs.pdf
  }

  if (flat?.$attrs?.plan) {
    flatAttributes.plan = flat.$attrs.plan
  }

  // Note: picture field is not supported in SQLite schema, so we skip it
  if (picture !== undefined) {
    let pictureString: string | null = null
    if (Array.isArray(picture)) {
      const validPictures: string[] = []
      picture.forEach((picture: any) => {
        if (picture.$attrs?.resource) {
          validPictures.push(picture.$attrs.resource)
        }
      })
      pictureString = validPictures.length > 0 ? validPictures.join(',') : null
    } else {
      pictureString = picture.$attrs?.resource || null
    }
    flatAttributes['picture'] =
      pictureString !== null && pictureString !== undefined ? String(pictureString) : null
  }

  // Add associated-unit-ids to flat attributes if it exists
  if (flat.$attrs['associated-unit-ids']) {
    flatAttributes['associated-unit-ids'] = flat.$attrs['associated-unit-ids']
  }

  return {
    realpadFlat: flatAttributes,
    title: getFlatTitle(flat['flat-attribute']),
    slug: getFlatSlug(flat['flat-attribute']),
    project: projectID,
    building: buildingId,
    floor: floorId,
    realpadid: flat.$attrs.id,
  }
}

// Validation functions
export function validateMigrateRequest(data: unknown): MigrateRequest {
  return MigrateRequestSchema.parse(data)
}

export function validateXMLBuilding(building: Record<string, any>): XMLBuilding {
  if (!building?.$attrs?.id || !building?.$attrs?.name) {
    throw new Error('Invalid building structure: missing required attributes')
  }
  return building as XMLBuilding
}

export function validateXMLFloor(floor: Record<string, any>): XMLFloor {
  if (!floor?.$attrs?.id || !floor?.$attrs?.floorno) {
    throw new Error('Invalid floor structure: missing required attributes')
  }
  return floor as XMLFloor
}

export function validateXMLFlat(flat: Record<string, any>): XMLFlat {
  if (!flat?.$attrs?.id) {
    throw new Error('Invalid flat structure: missing required attributes')
  }
  return flat as XMLFlat
}

// Validate XML structure before processing
export function validateXMLStructure(xmlText: string): boolean {
  try {
    // Basic XML structure validation
    if (!xmlText || xmlText.trim().length === 0) {
      throw new Error('XML content is empty')
    }

    // Check for basic XML structure
    if (!xmlText.includes('<') || !xmlText.includes('>')) {
      throw new Error('Invalid XML structure - missing XML tags')
    }

    // Check for common XML root elements
    const hasValidRoot =
      xmlText.includes('<project') ||
      xmlText.includes('<buildings') ||
      xmlText.includes('<building') ||
      xmlText.includes('<flats') ||
      xmlText.includes('<flat')

    if (!hasValidRoot) {
      throw new Error('Invalid XML structure - missing valid root element')
    }

    return true
  } catch (error) {
    console.error('❌ XML structure validation failed:', error)
    return false
  }
}

// Performance helpers
export function createBatchProcessor<T>(
  batchSize: number,
  processor: (batch: T[]) => Promise<void>,
) {
  let batch: T[] = []

  return {
    async add(item: T): Promise<void> {
      batch.push(item)
      if (batch.length >= batchSize) {
        await processor([...batch])
        batch = []
      }
    },

    async flush(): Promise<void> {
      if (batch.length > 0) {
        await processor([...batch])
        batch = []
      }
    },
  }
}
