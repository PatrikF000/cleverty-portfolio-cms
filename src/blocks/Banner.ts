import { Block } from 'payload'
import { richTextFull } from '@/fields/modulesField/richText'
import sectionSettings from '@/fields/modulesField/sectionSettings'
import link from '@/fields/modulesField/link'

export const Banner: Block = {
  slug: 'banner',
  fields: [
    sectionSettings({
      fieldName: 'bannerSettings',
      backgroundThemeVariants: ['light'],
      defaultBackgroundTheme: 'light',
    }),
    {
      type: 'checkbox',
      name: 'hasFlatForm',
      label: 'Has button to open flat form',
      defaultValue: false,
    },
    {
      type: 'select',
      name: 'flatForm',
      label: 'Flat Form',
      options: [
        { label: 'Flat Form 1', value: 'flatForm1' },
      ],
    },
    {
      type: 'select',
      name: 'bannerVariant',
      label: 'Variant',
      defaultValue: 'small',
      options: [
        {
          label: 'Large',
          value: 'large',
        },
        {
          label: 'Small',
          value: 'small',
        },
      ],
    },
    {
      type: 'select',
      name: 'bannerContentPosition',
      label: 'Content Position',
      required: true,
      defaultValue: 'center',
      options: [
        {
          label: 'Center',
          value: 'center',
        },
        {
          label: 'Left',
          value: 'left',
        },
        {
          label: 'Right',
          value: 'right',
        },
      ],
    },
    //caption
    {
      type: 'text',
      name: 'caption',
      label: 'Caption',
      localized: true,
    },
    //content
    richTextFull({
      name: 'content',
      required: true,
      localized: true,
    }),
    //button
    link({
      name: 'bannerButton',
      appearances: false,
      localized: true,
    }),
    /*{
      type: 'tabs',
      tabs: [
        {
          label: 'Section Settings',
          fields: [
            sectionSettings({
              fieldName: 'bannerSettings',
              backgroundThemeVariants: ['light'],
              defaultBackgroundTheme: 'light',
            }),
          ],
        },
        {
          label: 'Content',
          fields: [
            {
              type: 'select',
              name: 'bannerVariant',
              label: 'Variant',
              defaultValue: 'small',
              options: [
                {
                  label: 'Large',
                  value: 'large',
                },
                {
                  label: 'Small',
                  value: 'small',
                },
              ],
            },
            {
              type: 'select',
              name: 'bannerContentPosition',
              label: 'Content Position',
              required: true,
              defaultValue: 'center',
              options: [
                {
                  label: 'Center',
                  value: 'center',
                },
                {
                  label: 'Left',
                  value: 'left',
                },
                {
                  label: 'Right',
                  value: 'right',
                },
              ],
            },
            //caption
            {
              type: 'text',
              name: 'caption',
              label: 'Caption',
              localized: true,
            },
            //content
            richTextFull({
              name: 'content',
              required: true,
              localized: true,
            }),
            //button
            link({
              name: 'bannerButton',
              appearances: false,
              localized: true,
            }),
          ],
        },
      ],
    },*/
  ],
}
