import { useField } from '@payloadcms/ui'
import { useMemo } from 'react'
import { Media } from '@/payload-types'

interface ViewsArray {
  viewName: string
  image: string | number | Media
  direct?: string
}

// Custom hook pro dynamické načítání pohledů
export const useDynamicViews = (basePath: string, maxViews: number = 10) => {
  // Vytvoříme hooks pro všechny možné indexy
  const viewHooks = Array.from({ length: maxViews }, (_, index) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { value: name } = useField<string>({ path: `${basePath}.${index}.viewName` })
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { value: image } = useField<string | number | Media>({
      path: `${basePath}.${index}.image`,
    })
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { value: direct } = useField<string>({ path: `${basePath}.${index}.direct` })

    return { name, image, index, direct }
  })

  // Zpracujeme data pomocí useMemo
  const viewsData = useMemo(() => {
    const views: ViewsArray[] = []

    viewHooks.forEach((hook) => {
      if (hook.name) {
        views.push({
          viewName: hook.name,
          image: hook.image || '',
          direct: hook.direct || '',
        })
      }
    })

    return views
  }, [
    viewHooks.map((h) => h.name).join(','),
    viewHooks
      .map((h) =>
        typeof h.image === 'object' && h.image ? ((h.image as any).id ?? '') : (h.image ?? ''),
      )
      .join(','),
    viewHooks.map((h) => h.direct).join(','),
  ])

  return viewsData
}
