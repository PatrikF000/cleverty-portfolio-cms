/*import { BasePayload, PayloadRequest, User } from 'payload'
import { cookies } from 'next/headers'
import './header.scss'

interface IHeaderProps {
  payload?: BasePayload
  user?: User
  req: PayloadRequest
}

const Header = async ({ payload }: IHeaderProps) => {
  const cookieStore = await cookies()
  const activeProject = cookieStore?.get('activeProject')

  const projectData = await payload?.findByID({
    collection: 'projects',
    id: activeProject?.value || 1,
  })

  return (
    <header className="header">
      <div className="container">
        <div className="header__flex">
          <div className="header__headline">
            {projectData ? (
              <>
                Aktivní projekt: <strong>{projectData?.name}</strong>
              </>
            ) : (
              <>Žádný aktivní projekt</>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
*/
/*'use client'

import { useEffect, useState } from 'react'
import Cookies from 'js-cookie'
import './header.scss'

interface Project {
  name: string
}

const Header = () => {
  const [project, setProject] = useState<Project | null>(null)

  useEffect(() => {
    const fetchProject = async () => {
      const activeProject = Cookies.get('activeProject')

      if (!activeProject) return

      try {
        const res = await fetch(`/api/projects/${activeProject}`)
        if (!res.ok) throw new Error('Nezdařilo se načíst projekt')

        const data = await res.json()
        setProject(data)
      } catch (error) {
        console.error('Chyba při načítání projektu:', error)
      }
    }

    fetchProject()
  }, [])

  return (
    <header className="header">
      <div className="container">
        <div className="header__flex">
          <div className="header__headline">
            {project ? (
              <>
                Aktivní projekt: <strong>{project.name}</strong>
              </>
            ) : (
              <>Žádný aktivní projekt</>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
*/

import { cookies } from 'next/headers'
import './header.scss'
export default async function Header() {
  const cookieStore = await cookies()
  const activeProject = cookieStore?.get('activeProjectName')
  return (
    <header className="header">
      <div className="header__flex">
        <div className="header__headline">
          {activeProject ? (
            <>
              Aktivní projekt: <strong>{activeProject.value}</strong>
            </>
          ) : (
            <>Žádný aktivní projekt</>
          )}
        </div>
      </div>
    </header>
  )
}
