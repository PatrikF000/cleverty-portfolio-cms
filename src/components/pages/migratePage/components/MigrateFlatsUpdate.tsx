import { Project } from '@/payload-types'
import { FC, useState } from 'react'

export interface IMigrateUpdate {
  project?: Project
  children?: React.ReactNode
}

const MigrateFlatsUpdate: FC<IMigrateUpdate> = (props) => {
  const { project, children } = props
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [isError, setIsError] = useState(false)
  const [countFlats, setCountFlats] = useState(0)

  const handleMigrateIfExists = async () => {
    if (!project) return
    setIsLoading(true)
    const urlFetch = new URL(
      `${process.env.NEXT_PUBLIC_PAYLOAD_URL || process.env.TEST_URL}/api/migrate/update/flats`,
    )
    const awaitedData = await fetch(urlFetch, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        projectRealID: project?.realpadid,
        projectID: project?.id,
        projectName: project?.name,
      }),
    })
    awaitedData
      .json()
      .then((data: any) => {
        setCountFlats(data?.countFlats)
        if (!awaitedData?.ok) {
          setIsError(true)
        } else {
          setIsSuccess(true)
        }
      })
      .catch(() => {
        setIsError(true)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }
  return (
    <div className="migrationPage">
      <div className="migrationPage__block">
        <button type="button" onClick={handleMigrateIfExists} disabled={isLoading}>
          {isLoading ? 'Načítám data...' : `Aktualizovat byty v ${project?.name}`}
        </button>
      </div>
      <div className="migrationPage__block">
        {isError && <div>Nastala chyba při migraci dat</div>}
        {isSuccess && <div>Migrace dat proběhla úspěšně</div>}
      </div>
      <div className="migrationPage__block">
        {isSuccess && <div>Nahráno bytů: {countFlats}</div>}
      </div>
      {children}
    </div>
  )
}

export default MigrateFlatsUpdate
