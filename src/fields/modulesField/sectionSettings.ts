import { Field } from 'payload'
import { link } from './link'
import { richTextFull } from './richText'

type SectionSettingsOptions = {
  includeHeading?: boolean
  includeButton?: boolean
  backgroundThemeVariants?: string[]
  defaultBackgroundTheme?: string
  fieldName?: string
}

const sectionSettings = ({
  includeHeading = false,
  includeButton = false,
  backgroundThemeVariants = ['dark'],
  defaultBackgroundTheme = 'dark',
  fieldName = 'sectionSettings',
}: SectionSettingsOptions = {}): Field => {
  const fields: Field[] = [
    {
      name: 'anchorId',
      type: 'text',
      required: false,
      admin: {
        description:
          'Write the ID for the anchor link without the # and the space exmaple: my-anchor-id',
      },
    },
    {
      name: 'paddingTop',
      type: 'select',
      defaultValue: 'medium',
      options: ['none', 'extraSmall', 'small', 'medium', 'large', 'extraLarge'],
    },
    {
      name: 'paddingBottom',
      type: 'select',
      defaultValue: 'medium',
      options: ['none', 'extraSmall', 'small', 'medium', 'large', 'extraLarge'],
    },
    {
      name: 'hasBackgroundImage',
      type: 'checkbox',
      defaultValue: false,
      admin: {
        description: 'Pokud je vybráno, bude použit obrázek jako pozadí',
      },
    },
    {
      name: 'background',
      type: 'select',
      defaultValue: defaultBackgroundTheme,
      options: backgroundThemeVariants,
      admin: {
        condition: (_: any, siblingData: any) => {
          try {
            if (!siblingData || typeof siblingData !== 'object' || siblingData === null) return true
            if (!('hasBackgroundImage' in siblingData)) return true
            return siblingData.hasBackgroundImage === false
          } catch (error) {
            return true
          }
        },
      },
    },

    {
      name: 'backgroundImage',
      type: 'upload',
      relationTo: 'media',
      admin: {
        condition: (_: any, siblingData: any) => {
          try {
            if (!siblingData || typeof siblingData !== 'object' || siblingData === null)
              return false
            if (!('hasBackgroundImage' in siblingData)) return false
            return siblingData.hasBackgroundImage === true
          } catch (error) {
            return false
          }
        },
      },
    },
  ]

  if (includeHeading) {
    fields.push(
      richTextFull({
        name: 'heading',
        localized: true,
      }),
    )
  }

  if (includeButton) {
    fields.push(
      link({
        name: 'link',
        // appearances: false,
        localized: true,
      }),
    )
  }
  if (includeButton) {
    fields.push({
      name: 'centeredSectionHeader',
      label: 'Has centered section header ',
      type: 'checkbox',
      defaultValue: false,
    })
  }
  return {
    name: fieldName,
    label: 'Section Settings',
    type: 'group',
    admin: {
      position: 'sidebar',
    },
    fields,
  }
}

export default sectionSettings
