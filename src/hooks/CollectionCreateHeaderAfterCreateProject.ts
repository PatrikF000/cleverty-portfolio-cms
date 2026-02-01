// hooks/createHeaderForProject.ts

import { Project } from '@/payload-types'
import { CollectionAfterOperationHook } from 'payload'

export const CollectionCreateHeaderAfterCreateProject: CollectionAfterOperationHook = async ({
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
      collection: 'globalheader',
      limit: 1,
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
    // 1. Nejprve vytvoříme záznam v defaultním jazyce (např. cs)
    const created = await payload.create({
      collection: 'globalheader',
      locale: 'cs',
      data: {
        title: `Hlavička pro projekt ${project?.name}`,
        project: project?.id,
        navItems: [],
      },
    })

    // 2. Poté aktualizujeme jiný jazyk (např. en) pomocí stejného ID
    await payload.update({
      collection: 'globalheader',
      id: created.id,
      locale: 'en',
      data: {
        title: `Header for project ${project?.name}`,
        // project není potřeba znovu posílat – už je uložen ve výchozím jazyce
      },
    })
  }, 150)

  return result
}
