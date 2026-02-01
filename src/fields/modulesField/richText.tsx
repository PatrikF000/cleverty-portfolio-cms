import type { RichTextField } from 'payload'
import {
  BlocksFeature,
  FixedToolbarFeature,
  HeadingFeature,
  HorizontalRuleFeature,
  InlineToolbarFeature,
  lexicalEditor,
  UnderlineFeature,
  StrikethroughFeature,
  LinkFeature,
  BoldFeature,
  ItalicFeature,
  UploadFeature,
} from '@payloadcms/richtext-lexical'
import { Buttons } from './buttons'
import { AnimatedHeading } from './animatedHeading'
import { LeadParagraph } from './leadParagraph'

export type RichTextFeatures = {
  blocks?: boolean
  fixedToolbar?: boolean
  inlineToolbar?: boolean
  horizontalRule?: boolean
  headings?: boolean
  underline?: boolean
  strikethrough?: boolean
  links?: boolean
  bold?: boolean
  italic?: boolean
  upload?: boolean
  customBlocks?: any[]
}

export type RichTextOptions = {
  name?: string
  label?: string
  required?: boolean
  localized?: boolean
  features?: RichTextFeatures
  overrides?: Partial<RichTextField>
}

export const richText = ({
  name = 'content',
  label,
  required = false,
  localized = false,
  features = {},
  overrides = {},
}: RichTextOptions = {}): RichTextField => {
  const {
    blocks = true,
    fixedToolbar = true,
    inlineToolbar = false,
    horizontalRule = false,
    headings = true,
    underline = true,
    strikethrough = true,
    links = true,
    bold = true,
    italic = true,
    upload = true,
    customBlocks = [],
  } = features

  const editorFeatures = [] as any[]

  // Add features based on configuration
  if (blocks) {
    editorFeatures.push(
      BlocksFeature({
        blocks: [...customBlocks, Buttons, AnimatedHeading, LeadParagraph],
      }),
    )
  }

  if (fixedToolbar) {
    editorFeatures.push(FixedToolbarFeature())
  }

  if (inlineToolbar) {
    editorFeatures.push(InlineToolbarFeature())
  }

  if (horizontalRule) {
    editorFeatures.push(HorizontalRuleFeature())
  }

  if (headings) {
    editorFeatures.push(HeadingFeature())
  }

  if (underline) {
    editorFeatures.push(UnderlineFeature())
  }

  if (strikethrough) {
    editorFeatures.push(StrikethroughFeature())
  }

  if (links) {
    editorFeatures.push(LinkFeature())
  }

  if (bold) {
    editorFeatures.push(BoldFeature())
  }

  if (italic) {
    editorFeatures.push(ItalicFeature())
  }

  if (upload) {
    editorFeatures.push(
      UploadFeature({
        collections: {
          media: {
            fields: [],
          },
        },
      }),
    )
  }

  const field: RichTextField = {
    name,
    type: 'richText',
    required,
    localized,
    ...(label && { label }),
    editor: lexicalEditor({
      features: editorFeatures, // Use only our custom features, not defaultFeatures
    }),
    ...overrides,
  }

  return field
}

// Predefined configurations for common use cases
export const richTextBasic = (options: Omit<RichTextOptions, 'features'> = {}) =>
  richText({
    ...options,
    features: {
      blocks: false,
      fixedToolbar: true,
      headings: true,
      bold: true,
      italic: true,
      links: true,
      upload: true,
    },
  })

export const richTextFull = (options: Omit<RichTextOptions, 'features'> = {}) =>
  richText({
    ...options,
    features: {
      blocks: true,
      fixedToolbar: true,
      inlineToolbar: false,
      horizontalRule: false,
      headings: true,
      underline: true,
      strikethrough: true,
      links: true,
      bold: true,
      italic: true,
      upload: true,
    },
  })

export const richTextMinimal = (options: Omit<RichTextOptions, 'features'> = {}) =>
  richText({
    ...options,
    features: {
      underline: false,
      strikethrough: false,
      horizontalRule: false,
      blocks: false,
      fixedToolbar: false,
      headings: false,
      bold: true,
      italic: true,
      links: false,
      upload: false,
    },
  })

export const richTextBodyOnly = (options: Omit<RichTextOptions, 'features'> = {}) =>
  richText({
    ...options,
    features: {
      blocks: false,
      fixedToolbar: false,
      headings: false,
      underline: false,
      strikethrough: false,
      links: false,
      horizontalRule: false,
      bold: true,
      italic: true,
      upload: false,
    },
  })
