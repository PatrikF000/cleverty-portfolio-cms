import { AdminViewServerProps, User } from 'payload'
import { DefaultTemplate } from '@payloadcms/next/templates'
import '../../payload/dashboard/dashboard.scss'
import MigrateDashboard from './components/MigrateDashboard'
import { cookies } from 'next/headers'
import { Project, Role } from '@/payload-types'
import { redirect } from 'next/navigation'

async function MigratePage(props: AdminViewServerProps) {
  const { initPageResult, params, searchParams } = props
  const user = initPageResult.req.user as User
  const role = user?.role as Role
  if (!user || role?.id !== 1) {
    // 3. Pokud není admin, redirect nebo error
    redirect('/admin') // nebo jinam, případně vraťte vlastní error komponentu
    // nebo:
    // return <div>Nemáte oprávnění pro přístup na tuto stránku.</div>
  }

  const cookie = await cookies()
  const activeProject = cookie?.get('activeProject')

  if (activeProject?.value === '' || activeProject === undefined) {
    redirect('/admin')
  }

  let activeProjectData: Project | undefined = undefined
  if (activeProject && (activeProject?.value !== '' || activeProject !== undefined)) {
    activeProjectData = await initPageResult.req.payload?.findByID({
      collection: 'projects',
      id: parseInt(activeProject?.value || ''),
    })
  } else {
    redirect('/admin')
  }

  return (
    <DefaultTemplate
      i18n={initPageResult.req.i18n}
      locale={initPageResult.locale}
      params={params}
      payload={initPageResult.req.payload}
      permissions={initPageResult.permissions}
      searchParams={searchParams}
      user={initPageResult.req.user || undefined}
      visibleEntities={initPageResult.visibleEntities}
    >
      <style>{`
        .app-header__step-nav > span {
          visibility: hidden;
          position: relative;
        }
      `}</style>
      <MigrateDashboard project={activeProjectData} />
    </DefaultTemplate>
  )
}

export default MigratePage
