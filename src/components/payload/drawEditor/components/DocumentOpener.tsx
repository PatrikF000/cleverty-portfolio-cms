'use client'
import { Button, useDocumentDrawer } from '@payloadcms/ui'
import { LayerCollections } from './types'
import { FC, useMemo } from 'react'

export interface OpenDocProps {
  layerName: string
  layersLink?: LayerCollections
  label?: string
}

const filteredByLayerName = (layerName: string, layersLink?: LayerCollections) => {
  if (!layerName) return
  return layersLink?.find((find) => find?.layerID === layerName)
}

const DocumentOpener: FC<OpenDocProps> = (props: OpenDocProps) => {
  const { layerName, layersLink, label } = props

  const layerData = useMemo(
    () => filteredByLayerName(layerName, layersLink),
    [layerName, layersLink],
  )

  // Použití useDocumentDrawer hooku
  const [DocumentDrawer, DocumentDrawerToggler, { openDrawer }] = useDocumentDrawer({
    collectionSlug: layerData?.relationTo || 'documents',
    id: layerData?.value || undefined,
  })

  const handleOpenDocument = () => {
    if (layerData?.relationTo && layerData?.value) {
      openDrawer()
    }
  }

  const isDisabled = !layerData?.relationTo || !layerData?.value

  return (
    <>
      <Button
        buttonStyle="icon-label"
        icon="edit"
        onClick={handleOpenDocument}
        disabled={isDisabled}
      >
        {label || 'Otevřít dokument'}
      </Button>

      {/* DocumentDrawer komponenta pro zobrazení detailu dokumentu */}
      <DocumentDrawer />
    </>
  )
}

export default DocumentOpener
