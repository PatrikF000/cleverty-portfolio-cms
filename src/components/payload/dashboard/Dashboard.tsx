import { BasePayload, PayloadRequest, User } from 'payload'
import './dashboard.scss'
import { cookies } from 'next/headers'
import DashboardBlock from './components/dashboardInfoBlock/DashboardInfoBlock'

interface DashboardProps {
  payload: BasePayload
  user: User
  req: PayloadRequest
}

const Dashboard = async (props: DashboardProps) => {
  const { user, payload } = props
  const cookieStore = await cookies()
  const activeProject = cookieStore?.get('activeProject')
  const countInvestments: number = 0


  return (
    <div className="gutter--left gutter--right dashboard__wrap dashboard">
      <h1 className="dashboard__mainheading">
        Vítejte <strong>{user.email}</strong>
      </h1>
        <div className="dashboard__grid">
          <DashboardBlock
            link={`/admin/collections/investments`}
            label="Investice"
            className="dashboard__grid__item"
            count={countInvestments}
          />
          {/* <DashboardBlock
            link={`/admin/collections/pages`}
            label="Stránky"
            className="dashboard__grid__item"
            count={countPage}
          />
          <DashboardBlock
            link={`/admin/collections/globalheader`}
            label="Hlavička"
            className="dashboard__grid__item"
            count={countHeaders}
          />
          <DashboardBlock
            link={`/admin/collections/globalfooter`}
            label="Patička"
            className="dashboard__grid__item"
            count={countFooters}
          />
          <DashboardBlock
            link={`/admin/collections/projectGlobalSettings`}
            label="Globální nastavení"
            className="dashboard__grid__item"
            count={countGlobals}
          />
          <DashboardBlock
            link={`/admin/collections/buildings`}
            label="Budovy"
            className="dashboard__grid__item"
            count={countBuidings}
          />
          <DashboardBlock
            link={`/admin/collections/floors`}
            label="Podlaží"
            className="dashboard__grid__item"
            count={countFloors}
          />
          <DashboardBlock
            link={`/admin/collections/flats`}
            label="Byty"
            className="dashboard__grid__item"
            count={countFlats}
          />
          <DashboardBlock
            link={`/admin/collections/news`}
            label="Novinky"
            className="dashboard__grid__item"
            count={countNews}
          />
          <DashboardBlock
            link={`/admin/collections/flatDetailPage`}
            label="Detail stránky bytu"
            className="dashboard__grid__item"
            count={countFlatDetailPage}
          />
          <DashboardBlock
            link={`/admin/collections/newsDetailPage`}
            label="Detail stránky novinky"
            className="dashboard__grid__item"
            count={countNewsDetailPage}
          /> */}
        </div>
    </div>
  )
}

export default Dashboard
