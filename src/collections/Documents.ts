import { authenticated } from '@/access/authenticated'
import { accessByDomain } from '@/access/domains/domainsAccess'
import type { CollectionConfig } from 'payload'

/** Allowed MIME types for document uploads */
const DOCUMENT_MIME_TYPES = [
  'application/pdf',
  'application/msword', // .doc
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document', // .docx
  'application/vnd.ms-excel', // .xls
  'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', // .xlsx
  'text/plain',
  'text/csv',
  'application/rtf',
  'application/vnd.oasis.opendocument.text', // .odt
  'application/vnd.oasis.opendocument.spreadsheet', // .ods
]

export const Documents: CollectionConfig = {
  slug: 'documents',
  labels: {
    singular: { cs: 'Dokument', en: 'Document' },
    plural: { cs: 'Dokumenty', en: 'Documents' },
  },
  access: {
    read: accessByDomain,
    create: authenticated,
    delete: authenticated,
    update: authenticated,
  },
  admin: {
    useAsTitle: 'filename',
    defaultColumns: ['filename', 'description', 'createdAt'],
    description: {
      cs: 'Nahrávání dokumentů (PDF, DOCX, XLSX, …)',
      en: 'Upload document files (PDF, DOCX, XLSX, etc.)',
    },
    pagination: {
      defaultLimit: 50,
      limits: [10, 25, 50, 100],
    },
  },
  upload: {
    staticDir: 'documents',
    mimeTypes: DOCUMENT_MIME_TYPES,
    adminThumbnail: ({ doc }) => (doc as { url?: string })?.url ?? '',
  },
  fields: [
    {
      name: 'description',
      type: 'text',
      label: { cs: 'Popis', en: 'Description' },
      admin: {
        description: {
          cs: 'Volitelný popis dokumentu',
          en: 'Optional description of the document',
        },
      },
    },
  ],
}
