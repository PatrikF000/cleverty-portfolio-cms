import type { Field } from 'payload'

export interface FileTypeOption {
  value: string
  label: string
}

export const COMMON_FILE_TYPES: FileTypeOption[] = [
  { value: '.pdf', label: 'PDF Document (.pdf)' },
  { value: '.doc', label: 'Word Document (.doc)' },
  { value: '.docx', label: 'Word Document (.docx)' },
  { value: '.xls', label: 'Excel Spreadsheet (.xls)' },
  { value: '.xlsx', label: 'Excel Spreadsheet (.xlsx)' },
  { value: '.ppt', label: 'PowerPoint Presentation (.ppt)' },
  { value: '.pptx', label: 'PowerPoint Presentation (.pptx)' },
  { value: '.txt', label: 'Text File (.txt)' },
  { value: '.jpg', label: 'JPEG Image (.jpg)' },
  { value: '.jpeg', label: 'JPEG Image (.jpeg)' },
  { value: '.png', label: 'PNG Image (.png)' },
  { value: '.gif', label: 'GIF Image (.gif)' },
  { value: '.webp', label: 'WebP Image (.webp)' },
  { value: '.svg', label: 'SVG Vector Image (.svg)' },
  { value: '.mp4', label: 'MP4 Video (.mp4)' },
  { value: '.avi', label: 'AVI Video (.avi)' },
  { value: '.mov', label: 'QuickTime Video (.mov)' },
  { value: '.mp3', label: 'MP3 Audio (.mp3)' },
  { value: '.wav', label: 'WAV Audio (.wav)' },
  { value: '.zip', label: 'ZIP Archive (.zip)' },
  { value: '.rar', label: 'RAR Archive (.rar)' },
  { value: '.json', label: 'JSON File (.json)' },
  { value: '.xml', label: 'XML File (.xml)' },
  { value: '.html', label: 'HTML File (.html)' },
  { value: '.css', label: 'CSS File (.css)' },
  { value: '.js', label: 'JavaScript File (.js)' },
  { value: '.md', label: 'Markdown File (.md)' },
]

export const acceptedFilesSelect = (types: string[]): Field => ({
  name: 'acceptedFiles',
  type: 'select' as const,
  label: 'Accepted File Types',
  hasMany: true,
  options: COMMON_FILE_TYPES,
  defaultValue: types,
})
