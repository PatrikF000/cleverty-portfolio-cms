import { Field } from 'payload'
const iconPicker = (
  options: {
    name?: string
    required?: boolean
    overrides?: Record<string, unknown>
  } = {},
): Field => {
  const { name = 'icon', required = false, overrides = {} } = options

  return {
    name,
    label: 'Icon Picker',
    type: 'select',
    required,
    options: [...ICONS],
    ...overrides,
  }
}
export default iconPicker

const ICONS = [
  { value: 'bike', label: 'Bike' },
  { value: 'cart', label: 'Cart' },
  { value: 'hospital', label: 'Hospital' },
  { value: 'cheers', label: 'Cheers' },
  { value: 'maskHappy', label: 'Mask Happy' },
  { value: 'park', label: 'Park' },
  { value: 'road', label: 'Road' },
  { value: 'train', label: 'Train' },
  { value: 'trainRegional', label: 'Train Regional' },
  { value: 'tram', label: 'Tram' },
  { value: 'metro', label: 'Metro' },

  { value: 'download', label: 'Download' },
  { value: 'file', label: 'File' },
  { value: 'hand', label: 'Hand' },
  { value: 'wallet', label: 'Wallet' },
  { value: 'zero', label: 'Zero' },
  { value: 'percentage', label: 'Percentage' },
  { value: 'magnifyingGlass', label: 'Magnifying Glass' },

  { value: 'leaf', label: 'Leaf' },
  { value: 'lightBulb', label: 'Light Bulb' },
  { value: 'drop', label: 'Drop' },
  { value: 'flash', label: 'Flash' },

  { value: 'phone', label: 'Phone' },
  { value: 'mail', label: 'Mail' },

  { value: 'facebook', label: 'Facebook' },
  { value: 'instagram', label: 'Instagram' },
  { value: 'twitter', label: 'Twitter' },
  { value: 'linkedin', label: 'LinkedIn' },
  { value: 'youtube', label: 'YouTube' },
  { value: 'tiktok', label: 'TikTok' },
  { value: 'pinterest', label: 'Pinterest' },
  { value: 'snapchat', label: 'Snapchat' },
]
