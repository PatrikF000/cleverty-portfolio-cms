import { Block } from 'payload'
import { link } from '@/fields/modulesField/link'
import { richTextFull } from '@/fields/modulesField/richText'
import sectionSettings from '@/fields/modulesField/sectionSettings'

export const BlockTemplate: Block = {
  slug: 'blockTemplate',
  fields: [
    // NOTE: You can uncomment the following lines to include heading and button in the section settings
    // With both heading and button
    // sectionSettings({ includeHeading: true, includeButton: true })
    // // With only heading
    // sectionSettings({ includeHeading: true })
    // // With only button
    // sectionSettings({ includeButton: true })
    // With neither (default behavior)
    sectionSettings({ fieldName: 'blockTemplateSettings' }),
    // NOTE: Just showcase how to use the different rich text fields
    // richTextMinimal({
    //   name: 'content2',
    //   required: true,
    //   localized: true,
    // }),
    // richTextBasic({
    //   name: 'content3',
    //   required: true,
    //   localized: true,
    // }),
    richTextFull({
      name: 'content',
      required: true,
      localized: true,
      // NOTE: Just showcase how to use custom blocks
      // overrides: {
      //   editor: lexicalEditor({
      //     features: ({ defaultFeatures }) => [
      //       ...defaultFeatures,
      //       BlocksFeature({ blocks: [Buttons] }),
      //     ],
      //   }),
      // },
    }),

    link({
      appearances: false,
      localized: true,
    }),
    //   {
    //   type: 'tabs',
    //   tabs: [
    //     {
    //       label: 'Section Settings',
    //       fields: [

    //       ],
    //     },
    //     {
    //       label: 'Content',
    //       fields: [

    //       ],
    //     },
    //   ],
    // },
  ],
}
