import { Flat } from '@/payload-types'

export function sanitizeRealpadFlatData(
  input: Record<string, any> | undefined | null,
): Flat['realpadFlat'] {
  if (!input || typeof input !== 'object') return undefined

  const numberKeys = new Set([
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
  ])

  const textKeys = new Set([
    'picture',
    'flat_internal_id',
    'associated-unit-ids',
    'plan',
    'pdf',
    'flat_disposition',
    'flat_status',
    'flat_orientation',
    'flat_type',
    'associatedunits_internal_ids',
    'flat_category',
  ])

  const out: Record<string, any> = {}
  for (const [key, value] of Object.entries(input)) {
    if (numberKeys.has(key)) {
      const num = typeof value === 'number' ? value : Number(value)
      out[key] = Number.isFinite(num) ? num : null
    } else if (textKeys.has(key)) {
      if (value === null || value === undefined) out[key] = null
      else if (typeof value === 'string' || typeof value === 'number' || typeof value === 'bigint')
        out[key] = String(value)
      else if (typeof value === 'boolean') out[key] = value ? '1' : '0'
      else out[key] = null
    }
    // Unknown keys are discarded to avoid binding unsupported values
  }

  return Object.keys(out).length > 0 ? (out as Flat['realpadFlat']) : undefined
}
