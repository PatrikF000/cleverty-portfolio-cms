import { deepMerge, Field, GroupField } from 'payload'
import iconPicker from './iconPicker'

export const appearanceOptions = {
  primary: {
    label: 'Primary Button',
    value: 'primary',
  },
  secondary: {
    label: 'Secondary Button',
    value: 'secondary',
  },
}

export type LinkAppearances = 'primary' | 'secondary'

type LinkType = (options?: {
  appearances?: LinkAppearances[] | false
  disableLabel?: boolean
  overrides?: Record<string, unknown>
  label?: string
  name?: string
  localized?: boolean
  icon?: boolean
  iconPosition?: 'left' | 'right'
}) => GroupField

const link: LinkType = ({
  name,
  label,
  appearances,
  disableLabel = false,
  overrides = {},
  localized = false,
  icon = false,
} = {}) => {
  const linkResult: GroupField = {
    name: name ?? 'link',
    label: label ?? 'Link',
    type: 'group',
    localized,
    admin: {
      hideGutter: true,
    },
    fields: [
      {
        type: 'row',
        fields: [
          {
            name: 'type',
            type: 'radio',
            options: [
              {
                label: 'Internal link',
                value: 'internal',
              },
              {
                label: 'Custom URL',
                value: 'external',
              },
            ],
            defaultValue: 'internal',
            admin: {
              layout: 'horizontal',
              width: '50%',
            },
          },
          {
            name: 'newTab',
            label: 'Open in new tab',
            type: 'checkbox',
            admin: {
              style: {
                alignSelf: 'flex-end',
              },
            },
          },
          {
            name: 'hasAnchor',
            label: 'Has anchor link',
            type: 'checkbox',
            admin: {
              style: {
                alignSelf: 'flex-end',
              },
              condition: (_, siblingData) => {
                if (!siblingData || typeof siblingData !== 'object') return false
                return siblingData?.type === 'internal' && siblingData?.relation !== 'anchor'
              },
            },
          },
          {
            name: 'darkButton',
            label: 'Dark Button',
            type: 'checkbox',
            admin: {
              style: {
                alignSelf: 'flex-end',
              },
            },
          },
          ...(icon
            ? [
                {
                  name: 'withIcon',
                  type: 'checkbox' as const,
                  defaultValue: false,
                  admin: {
                    style: {
                      alignSelf: 'flex-end',
                    },
                  },
                },
              ]
            : []),
          //iconOnly
          {
            name: 'iconOnly',
            type: 'checkbox',
            defaultValue: false,
            admin: {
              style: {
                alignSelf: 'flex-end',
              },
              condition: (_: any, siblingData: any) => {
                if (!siblingData || typeof siblingData !== 'object') return false
                return siblingData?.withIcon === true
              },
            },
          },
          {
            name: 'iconPosition',
            dbName: 'icnPos',
            type: 'select',
            options: [
              { label: 'Left', value: 'left' },
              { label: 'Right', value: 'right' },
              { label: 'Center', value: 'center' },
            ],
            defaultValue: 'left',
            admin: {
              condition: (_: any, siblingData: any) => {
                if (!siblingData || typeof siblingData !== 'object') return false
                return siblingData?.withIcon === true
              },
            },
          },
          iconPicker({
            name: 'icon',
            overrides: {
              admin: {
                condition: (_: any, siblingData: any) => {
                  if (!siblingData || typeof siblingData !== 'object') return false
                  return siblingData?.withIcon === true
                },
              },
            },
          }),
          // {
          //   name: 'icon',
          //   type: 'select',
          //   options: [
          //     { label: 'Heart', value: 'heart' },
          //     { label: 'User', value: 'user' },
          //     { label: 'Phone', value: 'phone' },
          //     { label: 'Mail', value: 'mail' },
          //   ],
          //   admin: {
          //     condition: (_: any, siblingData: any) => {
          //       if (!siblingData || typeof siblingData !== 'object') return false
          //       return siblingData?.withIcon === true
          //     },
          //   },
          // },
        ],
      },
    ],
  }

  const linkTypes: Field[] = [
    {
      name: 'relation',
      type: 'select',
      options: [
        { label: 'Pages', value: 'pages' },
        { label: 'Flats', value: 'flats' },
        { label: 'News', value: 'news' },
        { label: 'Documents', value: 'documents' },
        { label: 'Anchor Only', value: 'anchor' },
      ],
      defaultValue: 'pages',
      admin: {
        condition: (_, siblingData) => {
          if (!siblingData || typeof siblingData !== 'object') return false
          return siblingData?.type === 'internal'
        },
      },
    },
    {
      name: 'url',
      label: 'Custom URL',
      type: 'text',
      admin: {
        condition: (_, siblingData) => {
          if (!siblingData || typeof siblingData !== 'object') return false
          return siblingData?.type === 'external'
        },
      },
    },
    {
      name: 'anchorTo',
      label: 'Anchor to link to',
      type: 'text',
      admin: {
        condition: (_, siblingData) => {
          if (!siblingData || typeof siblingData !== 'object') return false
          return (
            (siblingData?.type === 'internal' && siblingData?.hasAnchor === true) ||
            (siblingData?.type === 'internal' && siblingData?.relation === 'anchor')
          )
        },
      },
    },
  ]

  if (!disableLabel) {
    const linkTypesWithWidth = linkTypes.map((linkType) => ({
      ...linkType,
      admin: {
        ...linkType.admin,
      },
    })) as Field[]

    linkResult.fields.push({
      type: 'row',
      fields: [
        {
          name: 'label',
          label: 'Label',
          type: 'text',
          admin: {},
        },
        ...linkTypesWithWidth,
      ],
    })
  } else {
    linkResult.fields = [...linkResult.fields, ...linkTypes]
  }

  if (appearances !== false) {
    let appearanceOptionsToUse = [appearanceOptions.primary, appearanceOptions.secondary]

    if (appearances) {
      appearanceOptionsToUse = appearances.map((appearance) => appearanceOptions[appearance])
    }

    linkResult.fields.push({
      name: 'appearance',
      type: 'select',
      defaultValue: 'primary',
      options: appearanceOptionsToUse,
      admin: {
        description: 'Choose how the link should be rendered.',
      },
    })
  }

  return deepMerge(linkResult, overrides) as GroupField
}

export { link }
export type { LinkType }
export default link
