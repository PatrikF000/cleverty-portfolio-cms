import React, { FC, useState, useEffect, useCallback, useRef } from 'react'
import { Project } from '@/payload-types'

export interface IMigrateUpdate {
  project?: Project
  children?: React.ReactNode
}

interface MigrationProgress {
  currentPage: number
  totalPages: number
  totalProcessed: number
  totalCreated: number
  totalErrors: number
  buildings: number
  floors: number
  flats: number
  isComplete: boolean
}

// Backend response typing (subset)
interface BackendPagination {
  currentPage: number
  totalPages: number
  hasMore: boolean
  totalItems: number
  itemsPerPage: number
  nextPage: number | null
}

interface BackendProgress {
  totalProcessed: number
  totalCreated: number
  totalErrors: number
}

interface BackendData {
  pagination: BackendPagination
  progress: BackendProgress
  countBuildings: number
  countFloors: number
  countFlats: number
  imported: number
  error?: string
}

interface TriggerResponse {
  success: boolean
  data: BackendData
  error?: string
}

const MigrateCompleteUpdate: FC<IMigrateUpdate> = (props) => {
  const { project, children } = props
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [isError, setIsError] = useState(false)
  const [progress, setProgress] = useState<MigrationProgress>({
    currentPage: 0,
    totalPages: 0,
    totalProcessed: 0,
    totalCreated: 0,
    totalErrors: 0,
    buildings: 0,
    floors: 0,
    flats: 0,
    isComplete: false,
  })
  const [logs, setLogs] = useState<string[]>([])

  // Use refs to persist state between renders
  const isRunningRef = useRef(false)
  const currentPageRef = useRef(1)
  const hasStartedRef = useRef(false)

  const addLog = useCallback((message: string) => {
    setLogs((prev) => [...prev, `${new Date().toLocaleTimeString()}: ${message}`])
  }, [])

  const handleMigrateIfExists = useCallback(async () => {
    addLog(
      `🔍 Migration attempt - project: ${!!project}, isRunning: ${isRunningRef.current}, hasStarted: ${hasStartedRef.current}`,
    )

    if (!project || isRunningRef.current || hasStartedRef.current) {
      addLog(
        `🚫 Migration blocked: project=${!!project}, isRunning=${isRunningRef.current}, hasStarted=${hasStartedRef.current}`,
      )
      return
    }

    hasStartedRef.current = true
    isRunningRef.current = true
    setIsLoading(true)
    setIsSuccess(false)
    setIsError(false)
    setProgress({
      currentPage: 0,
      totalPages: 0,
      totalProcessed: 0,
      totalCreated: 0,
      totalErrors: 0,
      buildings: 0,
      floors: 0,
      flats: 0,
      isComplete: false,
    })
    setLogs([])

    try {
      addLog('🚀 Starting migration process...')

      let currentPage = currentPageRef.current
      let hasMore = true
      let totalBuildings = 0
      let totalFloors = 0
      let totalFlats = 0
      let totalErrors = 0
      let pageCount = 0

      addLog(
        `🔍 Starting while loop with hasMore=${hasMore}, isRunningRef.current=${isRunningRef.current}`,
      )

      while (hasMore && isRunningRef.current) {
        pageCount++
        addLog(`📄 Processing page ${currentPage} (iteration ${pageCount})...`)

        const urlFetch = new URL(
          `${process.env.NEXT_PUBLIC_PAYLOAD_URL || process.env.TEST_URL}/api/trigger`,
        )
        const response: Response = await fetch(urlFetch, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            targetUrl: '/api/migrate/create',
            data: {
              projectRealID: project?.realpadid,
              projectID: project?.id,
              projectName: project?.name,
              page: currentPage,
              limit: 50, // Process 50 items per page
            },
          }),
        })

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }

        const result: TriggerResponse = (await response.json()) as TriggerResponse

        if (!result.success) {
          throw new Error(result.error || 'Unknown error occurred')
        }

        const data: BackendData = result.data

        // Debug logging
        addLog(
          `🔍 Debug: hasMore=${data.pagination.hasMore}, nextPage=${data.pagination.nextPage}, totalPages=${data.pagination.totalPages}`,
        )

        // Update progress
        setProgress((prev) => ({
          currentPage: data.pagination.currentPage,
          totalPages: data.pagination.totalPages,
          totalProcessed: data.progress.totalProcessed,
          totalCreated: data.progress.totalCreated,
          totalErrors: data.progress.totalErrors,
          buildings: prev.buildings + data.countBuildings,
          floors: prev.floors + data.countFloors,
          flats: prev.flats + data.countFlats,
          isComplete: !data.pagination.hasMore,
        }))

        // Update totals
        totalBuildings += data.countBuildings
        totalFloors += data.countFloors
        totalFlats += data.countFlats
        totalErrors += data.progress.totalErrors

        addLog(`✅ Page ${currentPage} completed: ${data.imported} items imported`)
        addLog(
          `   🏢 Buildings: ${data.countBuildings}, 🏗️ Floors: ${data.countFloors}, 🏠 Flats: ${data.countFlats}`,
        )

        if (data.pagination.hasMore) {
          const computedNext =
            typeof data.pagination.nextPage === 'number'
              ? data.pagination.nextPage
              : (Number(data.pagination.currentPage) || currentPage) + 1
          currentPage = computedNext
          currentPageRef.current = currentPage
          hasMore = true
          addLog(`🔄 Next page will be: ${currentPage}, hasMore=${data.pagination.hasMore}`)
          // Small delay between pages to prevent overwhelming the system
          await new Promise((resolve) => setTimeout(resolve, 1000))
        } else {
          addLog(`🏁 No more pages, hasMore=${data.pagination.hasMore}`)
          hasMore = false
        }

        addLog(`🔍 After update: hasMore=${hasMore}, isRunningRef.current=${isRunningRef.current}`)

        // Safety check to prevent infinite loops
        if (pageCount > 100) {
          addLog(`⚠️ Safety check: Stopping after ${pageCount} pages to prevent infinite loop`)
          break
        }
      }

      addLog(
        `🔍 While loop ended: hasMore=${hasMore}, isRunningRef.current=${isRunningRef.current}, pageCount=${pageCount}`,
      )

      if (isRunningRef.current) {
        addLog(`🎉 Migration completed successfully after ${pageCount} pages!`)
        addLog(
          `📊 Final totals: ${totalBuildings} buildings, ${totalFloors} floors, ${totalFlats} flats`,
        )

        if (totalErrors > 0) {
          addLog(`⚠️ ${totalErrors} errors occurred during migration`)
        }

        setIsSuccess(true)
      } else {
        addLog(`⏹️ Migration was stopped after ${pageCount} pages`)
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred'
      addLog(`❌ Migration failed: ${errorMessage}`)
      setIsError(true)
    } finally {
      isRunningRef.current = false
      hasStartedRef.current = false // Reset this flag so migration can be run again
      setIsLoading(false)
    }
  }, [project, addLog])

  // Reset migration state when project changes
  useEffect(() => {
    addLog(`🔄 Project changed, resetting migration state`)
    hasStartedRef.current = false
    currentPageRef.current = 1
    isRunningRef.current = false
    setIsLoading(false)
    setIsSuccess(false)
    setIsError(false)
    setProgress({
      currentPage: 0,
      totalPages: 0,
      totalProcessed: 0,
      totalCreated: 0,
      totalErrors: 0,
      buildings: 0,
      floors: 0,
      flats: 0,
      isComplete: false,
    })
    setLogs([])
  }, [project, addLog])

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      addLog(`🔄 Component unmounting, cleaning up`)
      isRunningRef.current = false
      hasStartedRef.current = false
    }
  }, [addLog])

  return (
    <div className="migrationPage">
      <div className="migrationPage__content">
        <div className="migrationPage__header">
          <h2>Migrace dat z RealPad API</h2>
          <p>Projekt: {project?.name}</p>
        </div>

        <div className="migrationPage__actions">
          <button
            onClick={handleMigrateIfExists}
            disabled={isLoading || !project}
            className="migrationPage__button migrationPage__button--primary"
          >
            {isLoading ? '🔄 Probíhá migrace...' : '🚀 Spustit migraci'}
          </button>
        </div>

        {/* Progress Display */}
        {isLoading && (
          <div className="migrationPage__progress">
            <h3>📊 Průběh migrace</h3>
            <div className="migrationPage__progress-stats">
              <div className="progress-stat">
                <span className="label">Stránka:</span>
                <span className="value">
                  {progress.currentPage} / {progress.totalPages || '?'}
                </span>
              </div>
              <div className="progress-stat">
                <span className="label">Zpracováno:</span>
                <span className="value">{progress.totalProcessed}</span>
              </div>
              <div className="progress-stat">
                <span className="label">Vytvořeno:</span>
                <span className="value">{progress.totalCreated}</span>
              </div>
              <div className="progress-stat">
                <span className="label">Chyby:</span>
                <span className="value">{progress.totalErrors}</span>
              </div>
            </div>

            <div className="migrationPage__progress-items">
              <div className="progress-item">
                <span className="icon">🏢</span>
                <span className="label">Budovy:</span>
                <span className="value">{progress.buildings}</span>
              </div>
              <div className="progress-item">
                <span className="icon">🏗️</span>
                <span className="label">Patra:</span>
                <span className="value">{progress.floors}</span>
              </div>
              <div className="progress-item">
                <span className="icon">🏠</span>
                <span className="label">Byty:</span>
                <span className="value">{progress.flats}</span>
              </div>
            </div>

            {progress.isComplete && (
              <div className="migrationPage__progress-complete">✅ Migrace dokončena!</div>
            )}
          </div>
        )}

        {/* Status Messages */}
        {isSuccess && (
          <div className="migrationPage__status migrationPage__status--success">
            <h3>✅ Migrace úspěšně dokončena!</h3>
            <p>Všechna data byla úspěšně importována z RealPad API.</p>
          </div>
        )}

        {isError && (
          <div className="migrationPage__status migrationPage__status--error">
            <h3>❌ Migrace selhala</h3>
            <p>Během migrace došlo k chybě. Zkontrolujte logy pro více informací.</p>
          </div>
        )}

        {/* Logs */}
        {logs.length > 0 && (
          <div className="migrationPage__logs">
            <h3>📋 Log migrace</h3>
            <div className="migrationPage__logs-content">
              {logs.map((log, index) => (
                <div key={index} className="log-entry">
                  {log}
                </div>
              ))}
            </div>
          </div>
        )}

        {children}
      </div>
    </div>
  )
}

export default MigrateCompleteUpdate
