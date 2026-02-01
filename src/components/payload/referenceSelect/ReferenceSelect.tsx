import React, { useEffect, useState } from 'react'
import { Select, ReactSelectOption, TextInput } from '@payloadcms/ui'
import './referenceSelect.scss'
interface Reference {
  layerID: string
  relationTo: string
  value: string
  title?: string
  realpadid?: string
}

interface Props {
  value?: Reference
  onChange: (newRef: Reference | null) => void
  availableCollections: ReactSelectOption[]
  layerID?: string
  projectID?: string
}

const ReferenceSelector: React.FC<Props> = ({
  value,
  onChange,
  availableCollections,
  layerID,
  projectID,
}) => {
  const [collection, setCollection] = useState(value?.relationTo || '')
  const [query, setQuery] = useState('')
  const [options, setOptions] = useState<{ id: string; label: string; realpadid: string }[]>([])

  useEffect(() => {
    const fetchOptions = async () => {
      if (!collection || query.length < 2) return

      let url = `/api/${collection}?where[title][like]=${query}&limit=1000`

      // Přidat projectID do query pokud je k dispozici
      if (projectID) {
        url += `&where[project][equals]=${projectID}`
      }

      try {
        const res = await fetch(url)
        if (!res.ok) {
          console.error('Failed to fetch options:', res.status, res.statusText)
          return
        }
        const json = await res.json()
        const docs = json.docs || []

        setOptions(
          docs
            .filter((d: any) => d && d.id) // Filter out null/undefined items
            .map(
              (d: {
                id: string
                title: string
                name: string
                slug: string
                realpadid?: string
              }) => {
                return {
                  id: d.id,
                  label: d.title || d.name || d.slug || d.id,
                  realpadid: d.realpadid || '',
                }
              },
            ),
        )
      } catch (error) {
        console.error('Error fetching options:', error)
        setOptions([])
      }
    }

    const timeout = setTimeout(fetchOptions, 300)
    return () => clearTimeout(timeout)
  }, [query, collection, projectID])
  return (
    <div className="referenceSelect">
      <Select
        value={{
          value: collection,
          label: availableCollections?.find((find) => find?.value === collection)?.label,
        }}
        options={availableCollections}
        onChange={(e) => {
          if (!e || Array.isArray(e)) {
            setCollection('')
            // Signal deletion by passing null
            onChange(null as any)
            return
          }
          const value = e?.value?.toString() || ''
          setCollection(value)
          // Don't create empty record when just selecting collection
          // onChange will be called when user selects specific item
        }}
        className="referenceSelect__select"
      />

      {collection && (
        <div className="referenceSelect__selectBox field-input text">
          <div className="field-type__wrap field-type text">
            <input
              //type="text"
              placeholder="Vyhledat záznam"
              className="customInput referenceSelect__input"
              onChange={(e: any) => setQuery(e.target.value)}
            />
          </div>
          {options && options?.length > 0 && query !== '' && query?.length > 2 && (
            <ul className="referenceSelect__menuSelect">
              {options.map((opt) => (
                <li
                  key={opt.id}
                  className="referenceSelect__menuSelect--item"
                  onClick={() => {
                    onChange({
                      relationTo: collection,
                      value: opt.id,
                      layerID: layerID || '',
                      title: opt.label,
                      realpadid: opt.realpadid || '',
                    })
                    setQuery('')
                  }}
                >
                  {opt.label}
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  )
}

export default ReferenceSelector
