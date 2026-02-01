import { Project } from '@/payload-types'
import { FC, useState } from 'react'

export interface IMigrateInsert {
  project?: Project
  children?: React.ReactNode
}

// Progress update interface
interface ProgressUpdate {
  type: 'page_start' | 'page_progress' | 'page_complete' | 'all_complete'
  page: number
  totalPages: number
  message: string
  progress: {
    current: number
    total: number
    percentage: number
  }
  stats: {
    buildings: number
    floors: number
    flats: number
    imported: number
  }
}

const MigrateInsert: FC<IMigrateInsert> = (props) => {
  const { project, children } = props
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [isError, setIsError] = useState(false)
  const [countBuildings, setCountBuildings] = useState(0)
  const [countFloors, setCountFloors] = useState(0)
  const [countFlats, setCountFlats] = useState(0)

  // Progress tracking states
  const [currentPage, setCurrentPage] = useState(0)
  const [totalPages, setTotalPages] = useState(0)
  const [progressPercentage, setProgressPercentage] = useState(0)
  const [currentMessage, setCurrentMessage] = useState('')
  const [progressHistory, setProgressHistory] = useState<ProgressUpdate[]>([])
  console.log('progressHistory', progressHistory)
  const handleMigrateIfExists = async () => {
    if (!project) return

    // Reset progress states
    setIsLoading(true)
    setIsSuccess(false)
    setIsError(false)
    setCurrentPage(0)
    setTotalPages(0)
    setProgressPercentage(0)
    setCurrentMessage('')
    setProgressHistory([])
    setCountBuildings(0)
    setCountFloors(0)
    setCountFlats(0)

    try {
      // Start with page 1
      let currentPage = 1
      let hasMorePages = true
      let totalPages = 0
      let totalImported = 0
      let totalBuildings = 0
      let totalFloors = 0
      let totalFlats = 0

      // Process pages sequentially
      while (hasMorePages) {
        console.log(`🔄 Processing page ${currentPage}...`)
        console.log(process.env.NEXT_PUBLIC_PAYLOAD_URL || process.env.TEST_URL)
        // Update progress for current page
        setCurrentPage(currentPage)
        if (totalPages > 0) {
          const pageProgress = Math.round((currentPage / totalPages) * 100)
          setProgressPercentage(pageProgress)
        }
        setCurrentMessage(`Zpracovávám stránku ${currentPage}...`)

        // Call migrate/create endpoint directly (permissions already verified)
        const migrateUrl = new URL(
          `${process.env.NEXT_PUBLIC_PAYLOAD_URL || process.env.TEST_URL}/api/migrate/create`,
        )
        const response = await fetch(migrateUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            projectRealID: project?.realpadid,
            projectID: project?.id,
            projectName: project?.name,
            page: currentPage,
            limit: 50,
          }),
        })

        const data = await response.json()

        if (!response.ok) {
          throw new Error(data.error || `Failed to process page ${currentPage}`)
        }

        // Extract results from current page
        const pageData = data
        const pageImported = pageData.imported || 0
        const pageBuildings = pageData.countBuildings || 0
        const pageFloors = pageData.countFloors || 0
        const pageFlats = pageData.countFlats || 0

        // Update totals
        totalImported += pageImported
        totalBuildings += pageBuildings
        totalFloors += pageFloors
        totalFlats += pageFlats

        // Update UI with current totals
        setCountBuildings(totalBuildings)
        setCountFloors(totalFloors)
        setCountFlats(totalFlats)

        // Get pagination info
        if (pageData.pagination) {
          totalPages = pageData.pagination.totalPages || totalPages
          hasMorePages = pageData.pagination.hasMore || false
          setTotalPages(totalPages)
        }

        // Update progress message
        if (hasMorePages) {
          setCurrentMessage(
            `Stránka ${currentPage}/${totalPages} dokončena - Pokračuji na stránku ${currentPage + 1}...`,
          )
          console.log(`✅ Page ${currentPage} completed: ${pageImported} items imported`)
          console.log(
            `📊 Progress: ${currentPage}/${totalPages} pages, Total: ${totalImported} items`,
          )

          // Small delay before next page
          await new Promise((resolve) => setTimeout(resolve, 1000))
        } else {
          setCurrentMessage(
            `Stránka ${currentPage}/${totalPages} dokončena - Všechny stránky hotovy!`,
          )
          console.log(`🏁 All pages completed! Total: ${totalImported} items imported`)
        }

        // Move to next page
        currentPage++
      }

      // Migration completed successfully
      setIsSuccess(true)
      setProgressPercentage(100)
      setCurrentMessage(`Migrace dokončena! Celkem importováno ${totalImported} položek`)
      console.log(`🎉 Migration completed successfully: ${totalImported} total items imported`)
    } catch (error) {
      console.error('Migration error:', error)
      setIsError(true)
      setCurrentMessage(error instanceof Error ? error.message : 'Nastala chyba při migraci dat')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="migrationPage">
      <div className="migrationPage__block">
        <button type="button" onClick={handleMigrateIfExists} disabled={isLoading}>
          {isLoading
            ? 'Načítám data...'
            : `Přidat nové nebo doplňit stávající data pro ${project?.name}`}
        </button>
      </div>

      {/* Progress Display */}
      {isLoading && (
        <div className="migrationPage__block">
          <div className="progress-container">
            <div className="progress-header">
              <h3>Průběh migrace</h3>
              <div className="progress-status">
                Stránka {currentPage}/{totalPages} ({progressPercentage}%)
              </div>
            </div>

            <div className="progress-bar">
              <div className="progress-fill" style={{ width: `${progressPercentage}%` }}></div>
            </div>

            <div className="progress-message">{currentMessage}</div>

            {currentPage > 0 && (
              <div className="progress-stats">
                <div className="stat-item">
                  <span className="stat-label">Budovy:</span>
                  <span className="stat-value">{countBuildings}</span>
                </div>
                <div className="stat-item">
                  <span className="stat-label">Patra:</span>
                  <span className="stat-value">{countFloors}</span>
                </div>
                <div className="stat-item">
                  <span className="stat-label">Byty:</span>
                  <span className="stat-value">{countFlats}</span>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      <div className="migrationPage__block">
        {isError && <div className="error-message">{currentMessage}</div>}
        {isSuccess && <div className="success-message">{currentMessage}</div>}
      </div>

      {isSuccess && (
        <div className="migrationPage__block">
          <div className="final-results">
            <h3>Výsledky migrace</h3>
            <div className="results-grid">
              <div className="result-item">
                <span className="result-label">Nahráno budov:</span>
                <span className="result-value">{countBuildings}</span>
              </div>
              <div className="result-item">
                <span className="result-label">Nahráno pater:</span>
                <span className="result-value">{countFloors}</span>
              </div>
              <div className="result-item">
                <span className="result-label">Nahráno bytů:</span>
                <span className="result-value">{countFlats}</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {children}
    </div>
  )
}

export default MigrateInsert
