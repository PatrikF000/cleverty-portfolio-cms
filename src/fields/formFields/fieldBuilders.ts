// src/fields/formFields/fieldBuilders.ts
import type { Field } from 'payload'
import { fileErrorMessages } from './fileErrors'
import { acceptedFilesSelect } from './acceptedFilesSelect'

export interface FieldValidation {
  minLength?: number
  minLengthMessage?: string
  requiredMessage: string
  invalidMessage?: string
}

export interface SelectValidation {
  requiredMessage: string
}

export interface MultiSelectValidation {
  minSelectionMessage: string
}

export interface FileValidation {
  requiredMessage: string
}

export const createTextField = (
  name: string,
  label: string,
  placeholder: string,
  validation: FieldValidation,
): Field => ({
  name,
  type: 'group' as const,
  label: `${label} Field`,
  admin: {
    style: {
      width: '45%',
    },
  },
  fields: [
    {
      name: 'label',
      type: 'text' as const,
      label: 'Label',
      defaultValue: label,
      required: true,
    },
    {
      name: 'placeholder',
      type: 'text' as const,
      label: 'Placeholder',
      defaultValue: placeholder,
      required: true,
    },
    {
      name: 'validation',
      type: 'group' as const,
      label: 'Validation',
      fields: [
        ...(validation.minLength
          ? [
              {
                name: 'minLength',
                type: 'number' as const,
                label: 'Minimum Length',
                defaultValue: validation.minLength,
                required: true,
              },
            ]
          : []),
        ...(validation.minLengthMessage
          ? [
              {
                name: 'minLengthMessage',
                type: 'text' as const,
                label: 'Minimum Length Message',
                defaultValue: validation.minLengthMessage,
                required: true,
              },
            ]
          : []),
        ...(validation.invalidMessage
          ? [
              {
                name: 'invalidMessage',
                type: 'text' as const,
                label: 'Invalid Message',
                defaultValue: validation.invalidMessage,
                required: true,
              },
            ]
          : []),
        {
          name: 'requiredMessage',
          type: 'text' as const,
          label: 'Required Message',
          defaultValue: validation.requiredMessage,
          required: true,
        },
      ],
    },
  ],
})

export const createSelectField = (
  name: string,
  label: string,
  placeholder: string,
  defaultOptions: Array<{ value: string; label: string }>,
  validation: SelectValidation,
  width?: string,
): Field => ({
  name,
  type: 'group' as const,
  label: `${label} Field`,
  admin: {
    style: {
      width: width || '100%',
    },
  },
  fields: [
    {
      name: 'label',
      type: 'text' as const,
      label: 'Label',
      defaultValue: label,
      required: true,
    },
    {
      name: 'placeholder',
      type: 'text' as const,
      label: 'Placeholder',
      defaultValue: placeholder,
      required: true,
    },
    {
      name: 'options',
      type: 'array' as const,
      label: 'Options',
      minRows: 1,
      defaultValue: defaultOptions,
      fields: [
        {
          name: 'value',
          type: 'text' as const,
          label: 'Value',
          required: true,
        },
        {
          name: 'label',
          type: 'text' as const,
          label: 'Label',
          required: true,
        },
      ],
    },
    {
      name: 'validation',
      type: 'group' as const,
      label: 'Validation',
      fields: [
        {
          name: 'requiredMessage',
          type: 'text' as const,
          label: 'Required Message',
          defaultValue: validation.requiredMessage,
          required: true,
        },
      ],
    },
  ],
})

export const createMultiSelectField = (
  name: string,
  label: string,
  defaultOptions: Array<{ value: string; label: string }>,
  validation: MultiSelectValidation,
): Field => ({
  name,
  type: 'group' as const,
  label: `${label} Field`,
  fields: [
    {
      name: 'label',
      type: 'text' as const,
      label: 'Label',
      defaultValue: label,
      required: true,
    },
    {
      name: 'options',
      type: 'array' as const,
      label: 'Options',
      minRows: 1,
      defaultValue: defaultOptions,
      fields: [
        {
          name: 'value',
          type: 'text' as const,
          label: 'Value',
          required: true,
        },
        {
          name: 'label',
          type: 'text' as const,
          label: 'Label',
          required: true,
        },
      ],
    },
    {
      name: 'validation',
      type: 'group' as const,
      label: 'Validation',
      fields: [
        {
          name: 'minSelectionMessage',
          type: 'text' as const,
          label: 'Minimum Selection Message',
          defaultValue: validation.minSelectionMessage,
          required: true,
        },
      ],
    },
  ],
})

export const createFileUploadField = (
  name: string,
  label: string,
  uploadText: string,
  dragText: string,
  fileSizeText: string,
  maxFileSize: number,
  maxFiles: number,
  validation: FileValidation,
  emptyText?: string,
  errorMessages?: {
    fileInvalidType?: string
    fileTooLarge?: string
    fileTooSmall?: string
    tooManyFiles?: string
    alreadyUploaded?: string
  },
): Field => ({
  name,
  type: 'group' as const,
  label: `${label} Field`,
  fields: [
    {
      name: 'label',
      type: 'text' as const,
      label: 'Label',
      defaultValue: label,
      required: true,
    },
    {
      name: 'uploadText',
      type: 'text' as const,
      label: 'Upload Text',
      defaultValue: uploadText,
      required: true,
    },
    {
      name: 'dragText',
      type: 'text' as const,
      label: 'Drag Text',
      defaultValue: dragText,
      required: true,
    },
    {
      name: 'fileSizeText',
      type: 'text' as const,
      label: 'File Size Text',
      defaultValue: fileSizeText,
      required: true,
    },
    {
      name: 'emptyText',
      type: 'text' as const,
      label: 'Empty Text',
      defaultValue: emptyText,
    },
    {
      name: 'maxFileSize',
      type: 'number' as const,
      label: 'Max File Size (MB)',
      defaultValue: maxFileSize,
      required: true,
    },
    {
      name: 'maxFiles',
      type: 'number' as const,
      label: 'Max Files',
      defaultValue: maxFiles,
      required: true,
    },
    {
      ...acceptedFilesSelect(['.pdf', '.doc', '.docx', '.jpg', '.png']),
    },
    {
      name: 'showFileList',
      type: 'checkbox' as const,
      label: 'Show File List',
      defaultValue: true,
    },
    {
      name: 'validation',
      type: 'group' as const,
      label: 'Validation',
      fields: [
        {
          name: 'requiredMessage',
          type: 'text' as const,
          label: 'Required Message',
          defaultValue: validation.requiredMessage,
          required: true,
        },
      ],
    },
    ...(errorMessages ? [fileErrorMessages] : []),
  ],
})

export const createSingleFileUploadField = (
  name: string,
  label: string,
  uploadText: string,
  emptyText: string,
  maxFileSize: number,
  validation: FileValidation,
  errorMessages: {
    fileInvalidType?: string
    fileTooLarge?: string
    fileTooSmall?: string
    tooManyFiles?: string
    alreadyUploaded?: string
  },
): Field => ({
  name,
  type: 'group' as const,
  label: `${label} Field`,
  fields: [
    {
      name: 'label',
      type: 'text' as const,
      label: 'Label',
      defaultValue: label,
      required: true,
    },
    {
      name: 'uploadText',
      type: 'text' as const,
      label: 'Upload Text',
      defaultValue: uploadText,
      required: true,
    },
    {
      name: 'emptyText',
      type: 'text' as const,
      label: 'Empty Text',
      defaultValue: emptyText,
      required: true,
    },
    {
      name: 'maxFileSize',
      type: 'number' as const,
      label: 'Max File Size (MB)',
      defaultValue: maxFileSize,
      required: true,
    },
    acceptedFilesSelect(['.pdf', '.doc', '.docx', '.jpg', '.png']),
    {
      name: 'showFileList',
      type: 'checkbox' as const,
      label: 'Show File List',
      defaultValue: true,
    },
    ...(errorMessages ? [fileErrorMessages] : []),
    {
      name: 'validation',
      type: 'group' as const,
      label: 'Validation',
      fields: [
        {
          name: 'requiredMessage',
          type: 'text' as const,
          label: 'Required Message',
          defaultValue: validation.requiredMessage,
          required: true,
        },
      ],
    },
  ],
})

export const createCheckboxField = (
  name: string,
  label: string,
  contentField: Field,
  requiredMessage: string,
  required: boolean = false,
): Field => ({
  name,
  type: 'group' as const,
  label: 'Checkbox with Text',
  fields: [
    {
      name: 'label',
      type: 'text' as const,
      label: 'Label',
      defaultValue: label,
      required: required,
    },
    contentField,
    {
      name: 'validation',
      type: 'group' as const,
      label: 'Validation',
      fields: [
        {
          name: 'requiredMessage',
          type: 'text' as const,
          label: 'Required Message',
          defaultValue: requiredMessage,
          required: required,
        },
      ],
    },
  ],
})
