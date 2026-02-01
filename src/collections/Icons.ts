import type { CollectionConfig } from 'payload'

const ICONS = [
  { name: 'phone', value: 'phone', label: 'Phone' },
  { name: 'mail', value: 'mail', label: 'Mail' },

  //   { name: 'facebook', value: 'facebook', label: 'Facebook' },
  //   { name: 'instagram', value: 'instagram', label: 'Instagram' },
  //   { name: 'twitter', value: 'twitter', label: 'Twitter' },
  //   { name: 'linkedin', value: 'linkedin', label: 'LinkedIn' },
  //   { name: 'youtube', value: 'youtube', label: 'YouTube' },
  //   { name: 'tiktok', value: 'tiktok', label: 'TikTok' },
  //   { name: 'pinterest', value: 'pinterest', label: 'Pinterest' },
  //   { name: 'snapchat', value: 'snapchat', label: 'Snapchat' },

  //   //   testicon
  //   { name: 'testicon', value: 'testicon', label: 'Test Icon' },
  //   { name: 'testicon2', value: 'testicon2', label: 'Test Icon 2' },
]

export const Icons: CollectionConfig = {
  slug: 'icons',
  admin: {
    // hidden: true, // Hide from admin UI
    useAsTitle: 'label',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      unique: true,
    },
    {
      name: 'value',
      type: 'text',
      required: true,
      unique: true,
    },
    {
      name: 'label',
      type: 'text',
      required: true,
      unique: true,
    },
  ],
}

export { ICONS }
