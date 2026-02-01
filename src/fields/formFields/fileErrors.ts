export const fileErrorMessages = {
  name: 'errorMessages',
  type: 'group' as const,
  label: 'Error Messages',
  fields: [
    {
      name: 'fileInvalidType',
      type: 'text' as const,
      label: 'File Invalid Type',
      required: true,
    },
    {
      name: 'fileTooLarge',
      type: 'text' as const,
      label: 'File Too Large',
      required: true,
    },
    {
      name: 'fileTooSmall',
      type: 'text' as const,
      label: 'File Too Small',
      required: true,
    },
    {
      name: 'tooManyFiles',
      type: 'text' as const,
      label: 'Too Many Files',
      required: true,
    },
    {
      name: 'alreadyUploaded',
      type: 'text' as const,
      label: 'Already Uploaded',
      required: true,
    },
  ],
}
