'use client'
import { FC, useState, useEffect } from 'react'
import { Project } from '@/payload-types'

interface CronJobsData {
  projects: Project[]
  loading: boolean
  error: string | null
}

const MigrateCronJobs: FC = () => {
  const [data, setData] = useState<CronJobsData>({
    projects: [],
    loading: true,
    error: null,
  })

  const [updating, setUpdating] = useState<string | null>(null)

  // Helper functions for cron schedule mapping
  const getCronPattern = (schedule: string | undefined): string => {
    if (!schedule) return ''
    const cronPatterns: Record<string, string> = {
      every_5_minutes: '*/5 * * * *',
      every_15_minutes: '*/15 * * * *',
      every_hour: '0 * * * *',
      every_6_hours: '0 */6 * * *',
      every_12_hours: '0 */12 * * *',
      daily_midnight: '0 0 * * *',
      daily_6am: '0 6 * * *',
      weekly_sunday: '0 0 * * 0',
    }
    return cronPatterns[schedule] || schedule
  }

  const getScheduleLabel = (schedule: string | undefined): string => {
    if (!schedule) return 'Přednastaveno'
    const scheduleLabels: Record<string, string> = {
      every_5_minutes: 'Každých 5 minut',
      every_15_minutes: 'Každých 15 minut',
      every_hour: 'Každou hodinu',
      every_6_hours: 'Každých 6 hodin',
      every_12_hours: 'Každých 12 hodin',
      daily_midnight: 'Denně v půlnoci',
      daily_6am: 'Denně v 6:00',
      weekly_sunday: 'Týdně (neděle)',
    }
    return scheduleLabels[schedule] || 'Přednastaveno'
  }

  // Fetch all projects with cron settings
  const fetchProjects = async () => {
    try {
      setData((prev) => ({ ...prev, loading: true, error: null }))

      const response = await fetch('/api/projects?limit=100')
      if (!response.ok) throw new Error('Failed to fetch projects')

      const result = await response.json()
      setData({
        projects: result.docs || [],
        loading: false,
        error: null,
      })
      console.log('TEST DATA', result.docs)
    } catch (error) {
      setData((prev) => ({
        ...prev,
        loading: false,
        error: String(error),
      }))
    }
  }

  useEffect(() => {
    fetchProjects()
  }, [])

  // Update cron settings for a project
  const updateCronSettings = async (projectId: string, cronSettings: any) => {
    try {
      setUpdating(projectId)

      const response = await fetch(`/api/projects/${projectId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ cronSettings }),
      })

      if (!response.ok) throw new Error('Failed to update cron settings')

      // Refresh projects data
      await fetchProjects()
    } catch (error) {
      console.error('Error updating cron settings:', error)
      alert(`Chyba při aktualizaci: ${String(error)}`)
    } finally {
      setUpdating(null)
    }
  }

  // Toggle cron enabled/disabled
  const toggleCron = async (project: Project) => {
    const newSettings = {
      ...project.cronSettings,
      enabled: !project.cronSettings?.enabled,
      status: !project.cronSettings?.enabled ? 'active' : 'inactive',
    }

    await updateCronSettings(String(project.id), newSettings)
  }

  // Manual trigger cron job
  const triggerCronJob = async (project: Project) => {
    try {
      setUpdating(String(project.id))

      const response = await fetch('/api/trigger', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          targetUrl: '/api/cron/migrate',
          data: { projectId: project.id },
        }),
      })

      if (!response.ok) throw new Error('Failed to trigger cron job')

      const result = await response.json()

      // Update last run info
      const newSettings = {
        ...project.cronSettings,
        lastRun: new Date().toISOString(),
        lastResult: JSON.stringify(result.data || result, null, 2),
      }

      await updateCronSettings(String(project.id), newSettings)
    } catch (error) {
      console.error('Error triggering cron job:', error)
      alert(`Chyba při spuštění: ${String(error)}`)
    } finally {
      setUpdating(null)
    }
  }

  const triggerFilesUpdate = async (project: Project) => {
    try {
      setUpdating(String(project.id))

      const response = await fetch('/api/trigger', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          targetUrl: '/api/cron/files',
          data: { projectId: project.id },
        }),
      })

      if (!response.ok) throw new Error('Failed to trigger files update')

      const result = await response.json()

      if (result.success) {
        //const summary = result.data?.summary
        /*alert(
          `Aktualizace obrázků dokončena:\n- Zpracováno bytů: ${summary?.totalFlats || 0}\n- Staženo dokumentů: ${summary?.totalDownloaded || 0}\n- Chyb: ${summary?.totalErrors || 0}`,
        )*/
      } else {
        alert(`Chyba při aktualizaci obrázků: ${result.error || 'Neznámá chyba'}`)
      }
    } catch (error) {
      console.error('Error triggering files update:', error)
      alert(`Chyba při aktualizaci obrázků: ${String(error)}`)
    } finally {
      setUpdating(null)
    }
  }

  if (data.loading) {
    return (
      <div className="migrationPage__block">
        <div className="migrationPage__loading">
          <div className="migrationPage__loading__spinner"></div>
          <div className="migrationPage__loading__text">Načítám projekty...</div>
        </div>
      </div>
    )
  }

  if (data.error) {
    return (
      <div className="migrationPage__block">
        <div className="migrationPage__error">
          <div className="migrationPage__error__message">Chyba: {data.error}</div>
          <button className="migrationPage__error__retry" onClick={fetchProjects}>
            Zkusit znovu
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="migrationPage__block">
      <div className="migrationPage__header">
        <h3>Automatické/ruční migrace bytů</h3>
        <p>Správa automatických migrací pro všechny projekty.</p>
      </div>

      {data.projects.length === 0 ? (
        <div className="migrationPage__empty">
          <div className="migrationPage__empty__icon">📋</div>
          <div className="migrationPage__empty__text">Žádné projekty nebyly nalezeny.</div>
        </div>
      ) : (
        <div className="migrationPage__cron-jobs-table">
          <table className="migrationPage__modern-table">
            <thead>
              <tr>
                <th>Projekt</th>
                <th>Stav</th>
                <th>Frekvence</th>
                <th>Poslední spuštění</th>
                <th>Akce</th>
              </tr>
            </thead>
            <tbody>
              {data.projects.map((project) => (
                <tr key={project.id} className={`${project.realpadid ? 'enabled' : 'disabled'}`}>
                  <td data-label="Projekt">
                    <div className="migrationPage__cron-jobs-table__project-info">
                      <div className="migrationPage__cron-jobs-table__project-info__name">
                        {project.name}
                        {project.realpadid && (
                          <span className="migrationPage__cron-jobs-table__project-info__name__badge">
                            RealPad
                          </span>
                        )}
                      </div>
                      {project.realpadid && (
                        <div className="migrationPage__cron-jobs-table__project-info__realpad-id">
                          ID: {project.realpadid}
                        </div>
                      )}
                    </div>
                  </td>
                  <td data-label="Stav">
                    <div className="migrationPage__cron-jobs-table__status">
                      <span
                        className={`migrationPage__cron-jobs-table__status__badge ${
                          project.cronSettings?.enabled
                            ? 'migrationPage__cron-jobs-table__status__badge--active'
                            : 'migrationPage__cron-jobs-table__status__badge--inactive'
                        }`}
                      >
                        {project.cronSettings?.enabled ? 'Aktivní' : 'Neaktivní'}
                      </span>
                    </div>
                  </td>
                  <td data-label="Frekvence">
                    {project.cronSettings?.enabled ? (
                      <div className="migrationPage__cron-jobs-table__schedule">
                        <div className="migrationPage__cron-jobs-table__schedule__code">
                          {project.cronSettings?.customSchedule ||
                            getCronPattern(project.cronSettings?.schedule || undefined)}
                        </div>
                        <div className="migrationPage__cron-jobs-table__schedule__type">
                          {project.cronSettings?.customSchedule
                            ? 'Vlastní pattern'
                            : getScheduleLabel(project.cronSettings?.schedule || undefined)}
                        </div>
                      </div>
                    ) : (
                      <span style={{ color: '#94a3b8' }}>-</span>
                    )}
                  </td>
                  <td data-label="Poslední spuštění">
                    {project.cronSettings?.lastRun ? (
                      <div className="migrationPage__cron-jobs-table__last-run">
                        <div className="migrationPage__cron-jobs-table__last-run__date">
                          {new Date(project.cronSettings.lastRun).toLocaleString('cs-CZ')}
                        </div>
                      </div>
                    ) : (
                      <div className="migrationPage__cron-jobs-table__last-run">
                        <div className="migrationPage__cron-jobs-table__last-run__never">Nikdy</div>
                      </div>
                    )}
                  </td>
                  <td data-label="Akce" className={`${project.realpadid ? 'enabled' : 'disabled'}`}>
                    <div className="migrationPage__cron-jobs-table__actions">
                      <button
                        onClick={() => toggleCron(project)}
                        disabled={updating === String(project.id) || !project.realpadid}
                        className={`migrationPage__button ${
                          project.cronSettings?.enabled
                            ? 'migrationPage__button--danger'
                            : 'migrationPage__button--success'
                        }`}
                      >
                        {updating === String(project.id) ? '⏳' : '🔄'}
                        {project.cronSettings?.enabled
                          ? 'Pozastavit aktualizaci'
                          : 'Aktivovat aktualizaci'}
                      </button>

                      <button
                        onClick={() => triggerCronJob(project)}
                        disabled={updating === String(project.id) || !project.realpadid}
                        className="migrationPage__button migrationPage__button--primary"
                        title={!project.realpadid ? 'Chybí RealPad ID' : 'Spustit migraci teď'}
                      >
                        {updating === String(project.id) ? '⏳' : '🚀'} Spustit migraci dat
                      </button>

                      <button
                        onClick={() => triggerFilesUpdate(project)}
                        disabled={updating === String(project.id) || !project.realpadid}
                        className="migrationPage__button migrationPage__button--info"
                        title="Aktualizovat obrázky a dokumenty"
                      >
                        {updating === String(project.id) ? '⏳' : '📁'} Aktualizovat obrázky
                      </button>

                      <a
                        href={`/admin/collections/projects/${project.id}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`migrationPage__button migrationPage__button--secondary ${
                          !project.realpadid ? 'disabled' : ''
                        }`}
                      >
                        ⚙️ Nastavit
                      </a>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}

export default MigrateCronJobs
