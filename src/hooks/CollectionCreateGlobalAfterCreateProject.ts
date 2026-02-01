// hooks/createHeaderForProject.ts

import { Project } from '@/payload-types'
import { CollectionAfterOperationHook } from 'payload'

export const CollectionCreateGlobalAfterCreateProject: CollectionAfterOperationHook = async ({
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
      collection: 'projectGlobalSettings',
      where: {
        project: {
          equals: project?.id,
        },
      },
    })

    if (existing.totalDocs > 0) {
      return result
    }

    // Vytvoř nový header
    // 1. Nejprve vytvoříme záznam v defaultním jazyce (např. cs)
    const created = await payload.create({
      collection: 'projectGlobalSettings',
      locale: 'cs',
      data: {
        title: `Globální nastavení pro projekt ${project?.name}`,
        project: project?.id,
      },
    })

    // 2. Poté aktualizujeme jiný jazyk (např. en) pomocí stejného ID
    await payload.update({
      collection: 'projectGlobalSettings',
      id: created.id,
      locale: 'en',
      data: {
        title: `Global settings for project ${project?.name}`,
        project: project?.id,
        // project není potřeba znovu posílat – už je uložen ve výchozím jazyce
      },
    })
  }, 150)

  return result
}
