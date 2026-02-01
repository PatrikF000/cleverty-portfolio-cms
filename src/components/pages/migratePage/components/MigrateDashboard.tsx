'use client'
import '../migrationPage.scss'
import { Project } from '@/payload-types'
import { FC, useState } from 'react'
import MigrateInsert from './MigrateInsert'
import Link from 'next/link'
import MigrateCronJobs from './MigrateCronJobs'

export interface MigrateDashboard {
  className?: string
  children?: React.ReactNode
  project?: Project
}

const MigrateDashboard: FC<MigrateDashboard> = (props) => {
  const { children, project } = props

  const [activeTab, setActiveTab] = useState(0)

  return (
    <div className="gutter--left gutter--right dashboard__wrap dashboard">
      {project?.id ? (
        <>
          <h1 className="dashboard__mainheading">Stránka pro migrace dat - {project?.name}</h1>
          <div className="dashboard__tabs">
            <ul className="dashboard__tabs__navigation">
              <li
                className={`${activeTab === 0 ? 'active' : ''} dashboard__tabs__navigation__item`}
              >
                <Link href="#" onClick={() => setActiveTab(0)}>
                  Ruční nahrání dat
                </Link>
              </li>
              <li
                className={`${activeTab === 1 ? 'active' : ''} dashboard__tabs__navigation__item`}
              >
                <Link href="#" onClick={() => setActiveTab(1)}>
                  Automatické nahrání dat
                </Link>
              </li>
            </ul>
            {activeTab === 0 && <MigrateInsert project={project} />}
            {activeTab === 1 && <MigrateCronJobs />}
          </div>
        </>
      ) : (
        <>
          <h1 className="dashboard__mainheading">Migrace dat - není vybrán projekt</h1>
        </>
      )}
      {children}
    </div>
  )
}

export default MigrateDashboard
