import { Block } from 'payload'
import sectionSettings from '@/fields/modulesField/sectionSettings'
import { richTextFull } from '@/fields/modulesField/richText'
import { link } from '@/fields/modulesField/link'

export const GallerySlider: Block = {
  slug: 'gallery',
  fields: [
    sectionSettings({
      fieldName: 'gallerySettings',
      backgroundThemeVariants: ['dark', 'light'],
    }),
    {
      name: 'controlsType',
      label: 'Controls variant',
      type: 'select',
      options: ['arrows', 'dots', 'dotsAndArrows', 'none'],
      defaultValue: 'arrows',
    },
    {
      name: 'autoplay',
      label: 'Autoplay',
      type: 'checkbox',
      defaultValue: false,
    },
    richTextFull({
      name: 'content',
      localized: true,
    }),

    {
      name: 'galleryVariant',
      type: 'select',
      options: ['simpleSlider', 'multipleSliders', 'fullWidth'],
      defaultValue: 'simpleSlider',
    },
    {
      name: 'simpleSlider',
      label: 'Slider',
      type: 'array',
      minRows: 3,
      fields: [
        { name: 'image', type: 'upload', relationTo: 'media', label: 'Image' },
        { name: 'slideWidth', type: 'select', options: ['square', 'wide', 'tall'] },
      ],
      admin: {
        condition: (_: any, siblingData: any) => {
          if (!siblingData || typeof siblingData !== 'object') return false
          return siblingData?.galleryVariant === 'simpleSlider'
        },
      },
    },
    {
      name: 'multiSlider',
      type: 'array',
      minRows: 2,
      fields: [
        { name: 'tabTitle', type: 'text' },
        {
          name: 'images',
          label: 'Images',
          type: 'array',
          minRows: 3,
          fields: [
            { name: 'image', type: 'upload', relationTo: 'media' },
            { name: 'slideWidth', type: 'select', options: ['square', 'wide', 'tall'] },
          ],
        },
      ],
      admin: {
        condition: (_: any, siblingData: any) => {
          if (!siblingData || typeof siblingData !== 'object') return false
          return siblingData?.galleryVariant === 'multipleSliders'
        },
      },
    },
    {
      name: 'fullWidth',
      label: 'Full Width Images',
      type: 'array',
      minRows: 1,
      fields: [{ name: 'image', type: 'upload', relationTo: 'media' }],
      admin: {
        condition: (_: any, siblingData: any) => {
          if (!siblingData || typeof siblingData !== 'object') return false
          return siblingData?.galleryVariant === 'fullWidth'
        },
      },
    },
    link({
      // appearances: false,
      localized: true,
      overrides: {
        admin: {
          required: false,
          condition: (_: any, siblingData: any) => {
            if (!siblingData || typeof siblingData !== 'object') return false
            return siblingData?.galleryVariant === 'simpleSlider'
          },
        },
      },
    }),
  ],
}
