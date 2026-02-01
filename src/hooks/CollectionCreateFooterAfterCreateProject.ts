// hooks/createHeaderForProject.ts

import { Project } from '@/payload-types'
import { CollectionAfterOperationHook } from 'payload'

export const CollectionCreateFooterAfterCreateProject: CollectionAfterOperationHook = async ({
  // args,
  operation,
  req: { payload },
  result,
}) => {
  if (operation !== 'create') return result

  const project = result as Project
  setTimeout(async () => {
    // Ověř, jestli už header existuje
    const existing = await payload.find({
      collection: 'globalfooter',
      where: {
        project: {
          equals: project?.id,
        },
      },
    })

    if (existing.totalDocs > 0) {
      return result // už existuje, nedělej nic
    }

    // Vytvoř nový header
    const created = await payload.create({
      collection: 'globalfooter',
      locale: 'cs',
      data: {
        title: `Patička pro projekt ${project?.name}`,
        project: project?.id,
      },
    })

    // 2. Poté aktualizujeme jiný jazyk (např. en) pomocí stejného ID
    await payload.update({
      collection: 'globalfooter',
      id: created.id,
      locale: 'en',
      data: {
        title: `Footer for project ${project?.name}`,

        // project není potřeba znovu posílat – už je uložen ve výchozím jazyce
      },
    })
  }, 150)
  return result
}
