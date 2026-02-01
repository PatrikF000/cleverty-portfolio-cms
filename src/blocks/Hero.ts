import { Block } from 'payload'
import { link } from '@/fields/modulesField/link'
import { richTextFull } from '@/fields/modulesField/richText'

export const Hero: Block = {
  slug: 'hero',
  fields: [
    {
      type: 'select',
      name: 'type',
      label: 'Type',
      required: true,
      defaultValue: 'imageOnly',
      options: [
        {
          label: 'Image Only',
          value: 'imageOnly',
        },
        {
          label: 'Slideshow',
          value: 'slideshow',
        },
        {
          label: 'Video',
          value: 'video',
        },
      ],
    },

    {
      name: 'heroImage',
      type: 'upload',
      relationTo: 'media',
      admin: {
        condition: (_, siblingData) => {
          if (!siblingData || typeof siblingData !== 'object') return false
          return siblingData?.type === 'imageOnly'
        },
      },
    },
    {
      name: 'heroVideo',
      type: 'upload',
      relationTo: 'media',
      admin: {
        condition: (_, siblingData) => {
          if (!siblingData || typeof siblingData !== 'object') return false
          return siblingData?.type === 'video'
        },
      },
    },
    {
      name: 'heroSlideshow',
      type: 'array',
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'title',
          type: 'text',
          required: true,
        },
      ],
      admin: {
        condition: (_, siblingData) => {
          if (!siblingData || typeof siblingData !== 'object') return false
          return siblingData?.type === 'slideshow'
        },
      },
    },
    richTextFull({
      name: 'content',
      localized: true,
    }),
    {
      name: 'mainButtons',
      type: 'array',
      localized: true,
      fields: [
        link({
          // appearances: false,
        }),
      ],
      admin: {
        condition: (_, siblingData) => {
          if (!siblingData || typeof siblingData !== 'object') return false
          return siblingData?.type !== 'imageOnly'
        },
      },
    },
    {
      name: 'secondaryButtons',
      type: 'array',
      localized: true,
      fields: [
        link({
          appearances: false,
        }),
      ],
      admin: {
        condition: (_, siblingData) => {
          if (!siblingData || typeof siblingData !== 'object') return false
          return siblingData?.type !== 'imageOnly'
        },
      },
    },
    {
      name: 'leftUpperText',
      type: 'text',
      localized: true,
      admin: {
        condition: (_, siblingData) => {
          if (!siblingData || typeof siblingData !== 'object') return true
          return siblingData?.type !== 'imageOnly'
        },
      },
    },
    {
      name: 'rightUpperText',
      type: 'text',
      localized: true,
      admin: {
        condition: (_, siblingData) => {
          if (!siblingData || typeof siblingData !== 'object') return true
          return siblingData?.type !== 'imageOnly'
        },
      },
    },
  ],
}
