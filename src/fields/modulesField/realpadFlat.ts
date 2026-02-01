import { hideFieldByProject } from '@/access/field/flat/hideFieldByProject'
import { GroupField } from 'payload'

export const RealpadFlat: GroupField = {
  name: 'realpadFlat',
  label: 'Realpad data of flat',
  type: 'group',
  admin: {
    readOnly: true,
  },
  fields: [
    {
      name: 'flat_internal_id',
      label: 'Flat Internal ID',
      type: 'text',
      required: false,
    },
    {
      name: 'associated-unit-ids',
      type: 'text',
      required: false,
    },
    {
      name: 'plan',
      type: 'text',
      required: false,
      admin: {
        readOnly: true,
      },
    },
    {
      name: 'pdf',
      type: 'text',
      required: false,
    },
    {
      name: 'picture',
      type: 'text',
      required: false,
    },
    {
      name: 'flat_disposition',
      label: 'Flat Disposition',
      type: 'text',
      required: false,
    },
    {
      name: 'flat_area',
      label: 'Flat Area',
      type: 'number',
      required: false,
      admin: {
        description: 'Unit area in square meters (sqm).',
      },
    },
    {
      name: 'flat_area_living',
      label: 'Flat Area Living',
      type: 'number',
      required: false,
      admin: {
        description: 'Living area in square meters (sqm).',
      },
    },
    {
      name: 'flat_area_balcony',
      label: 'Flat Area Balcony',
      type: 'number',
      required: false,
      admin: {
        description: 'Balcony area in square meters (sqm).',
      },
    },
    {
      name: 'flat_area_terrace',
      label: 'Flat Area Terrace',
      type: 'number',
      required: false,
      admin: {
        description: 'Terrace area in square meters (sqm).',
      },
    },
    {
      name: 'flat_area_loggia',
      label: 'Flat Area Loggia',
      type: 'number',
      required: false,
      admin: {
        description: 'Loggia area in square meters (sqm).',
      },
    },
    {
      name: 'flat_area_garden',
      label: 'Flat Area Garden',
      type: 'number',
      required: false,
      admin: {
        description: 'Garden area in square meters (sqm).',
      },
    },
    {
      name: 'flat_price',
      label: 'Flat Price',
      type: 'number',
      required: false,
      access: {
        read: hideFieldByProject,
      },
      admin: {
        description: 'Unit price with VAT',
      },
    },
    {
      name: 'flat_price_without_vat',
      label: 'Flat Price Without VAT',
      type: 'number',
      required: false,
      access: {
        read: hideFieldByProject,
      },
      admin: {
        description: 'Unit price without VAT',
      },
    },
    {
      name: 'flat_discount_vat',
      label: 'Flat Discount VAT',
      type: 'number',
      required: false,
      access: {
        read: hideFieldByProject,
      },
      admin: {
        description: 'Unit discount with VAT',
      },
    },
    {
      name: 'flat_discount_without_vat',
      label: 'Flat Discount Without VAT',
      type: 'number',
      required: false,
      access: {
        read: hideFieldByProject,
      },
      admin: {
        description: 'Unit discount without VAT',
      },
    },
    {
      name: 'flat_price_before_discount_vat',
      label: 'Flat Price Before Discount VAT',
      type: 'number',
      required: false,
      access: {
        read: hideFieldByProject,
      },
      admin: {
        description: 'Unit price before discount with VAT',
      },
    },
    {
      name: 'flat_price_before_discount_without_vat',
      label: 'Flat Price Before Discount Without VAT',
      type: 'number',
      required: false,
      access: {
        read: hideFieldByProject,
      },
      admin: {
        description: 'Unit price before discount without VAT',
      },
    },
    {
      name: 'flat_status',
      label: 'Flat Status',
      type: 'text',
      required: false,
      admin: {
        description:
          'Unit status: 0 - free, 1 - pre-reserved, 2 - reserved, 3 - sold, 4 - not for sale, 5 - delayed',
      },
    },
    {
      name: 'flat_orientation',
      label: 'Flat Orientation',
      type: 'text',
      required: false,
      admin: {
        description: 'Unit orientation (SV, J, W, S-E etc).',
      },
    },
    {
      name: 'flat_type',
      label: 'Flat Type',
      type: 'text',
      required: false,
      admin: {
        description:
          '1 - flat, 2 - parking, 3 - cellar, 4 - outdoor parking, 5 - garage, 6 - commercial space, 7 - family house, 8 - land, 9 - atelier, 10 - office, 11 - art workshop, 12 - non-residential unit, 13 - motorbike parking, 14 - creative workshop, 15 - townhouse, 16 - utility room, 17 - condominium, 18 - storage, 19 - apartment, 20 - accommodation unit, 21 - bike stand, 22 - communal area, 23 - non-residential unit - other, 24 - berth, 25 - construction right, 26 - villa, 27 - technical space, 28 - outdoor parking position for motorbike, 29 - property management unit, 30 - attic, 31 - backyard, 32 - terrace, 33 - cubicle, 34 - tenement house, 35 - paved area, 36 - garage position, 99 - other',
      },
    },
    {
      name: 'associatedunits_internal_ids',
      label: 'Associated Units Internal IDs',
      type: 'text',
      required: false,
      admin: {
        description: 'Associated units internal IDs',
      },
    },
    {
      name: 'associatedunits_totalprice_novat',
      label: 'Associated Units Total Price No VAT',
      type: 'number',
      required: false,
      access: {
        read: hideFieldByProject,
      },
      admin: {
        description: 'Associated units total price without VAT',
      },
    },
    {
      name: 'associatedunits_totalprice_vat',
      label: 'Associated Units Total Price VAT',
      type: 'number',
      required: false,
      access: {
        read: hideFieldByProject,
      },
      admin: {
        description: 'Associated units total price with VAT',
      },
    },
    {
      name: 'flat_category',
      label: 'Flat Category',
      type: 'text',
      required: false,
    },
  ],
}
