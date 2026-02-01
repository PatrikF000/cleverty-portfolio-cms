import cron from 'node-cron'
import { getPayload } from 'payload'
import config from '@payload-config'

let isSchedulerRunning = false
let schedulerJob: any = null
let autoRestartJob: any = null

// Auto-restart interval (3 hours in milliseconds)
const AUTO_RESTART_INTERVAL = 3 * 60 * 60 * 1000 // 3 hours

// Start the automatic scheduler
export async function startAutomaticScheduler(enableAutoRestart: boolean = false) {
  if (isSchedulerRunning) {
    console.log('📋 Scheduler is already running')
    return { success: true, message: 'Scheduler already running' }
  }

  try {
    console.log('🚀 Starting automatic project scheduler...')

    // Run every minute to check all projects
    // Každé 3 hodiny (vždy v 0:00, 3:00, 6:00, 9:00, 12:00, 15:00, 18:00, 21:00)
    schedulerJob = cron.schedule(
      '0 */3 * * *',
      async () => {
        await checkAndRunProjectMigrations()
      },
      {
        timezone: 'Europe/Prague',
      },
    )
    isSchedulerRunning = true

    // Setup auto-restart every 3 hours if enabled
    if (enableAutoRestart) {
      setupAutoRestart()
    }

    console.log('✅ Automatic scheduler started - checking every 3 hours')
    console.log(
      enableAutoRestart ? '🔄 Auto-restart enabled every 3 hours' : '⚙️ Manual control mode',
    )

    return {
      success: true,
      message: `Automatic scheduler started successfully${enableAutoRestart ? ' with auto-restart every 3 hours' : ''}`,
    }
  } catch (error) {
    console.error('❌ Failed to start scheduler:', error)
    return { success: false, error: String(error) }
  }
}

// Setup auto-restart every 3 hours
function setupAutoRestart() {
  // Clear any existing auto-restart timer
  if (autoRestartJob) {
    clearTimeout(autoRestartJob)
  }

  autoRestartJob = setTimeout(async () => {
    console.log('🔄 Auto-restart: Restarting scheduler after 3 hours...')

    try {
      // Stop current scheduler
      await stopAutomaticScheduler()

      // Wait a moment
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Start again with auto-restart enabled
      await startAutomaticScheduler(true)

      console.log('✅ Auto-restart completed successfully')
    } catch (error) {
      console.error('❌ Auto-restart failed:', error)
    }
  }, AUTO_RESTART_INTERVAL)

  console.log(
    `⏰ Auto-restart scheduled in 3 hours (${formatCzechDateTime(new Date(Date.now() + AUTO_RESTART_INTERVAL))})`,
  )
}

// Stop the scheduler
export async function stopAutomaticScheduler() {
  if (!isSchedulerRunning || !schedulerJob) {
    console.log('📋 Scheduler is not running')
    return { success: true, message: 'Scheduler was not running' }
  }

  try {
    schedulerJob.stop()
    schedulerJob = null
    isSchedulerRunning = false

    // Clear auto-restart timer if it exists
    if (autoRestartJob) {
      clearTimeout(autoRestartJob)
      autoRestartJob = null
      console.log('🔄 Auto-restart timer cleared')
    }

    console.log('🛑 Automatic scheduler stopped')
    return { success: true, message: 'Scheduler stopped successfully' }
  } catch (error) {
    console.error('❌ Failed to stop scheduler:', error)
    return { success: false, error: String(error) }
  }
}

// Get scheduler status
export function getSchedulerStatus() {
  return {
    success: true,
    running: isSchedulerRunning,
    message: isSchedulerRunning ? 'Scheduler is running' : 'Scheduler is stopped',
  }
}

// Main function that checks all projects and runs migrations
async function checkAndRunProjectMigrations() {
  try {
    console.log('⏰ Checking projects for scheduled migrations...')

    const payload = await getPayload({ config })
    const now = new Date()

    // Get all projects with enabled cron settings
    const { docs: projects } = await payload.find({
      collection: 'projects',
      where: {
        'cronSettings.enabled': { equals: true },
        'cronSettings.status': { not_equals: 'paused' },
      },
      limit: 100,
    })

    if (!projects.length) {
      console.log('📭 No active cron projects found')
      return
    }

    console.log(`📋 Checking ${projects.length} active projects...`)

    // Process each project individually
    for (const project of projects) {
      try {
        const shouldRun = shouldProjectRunNow(project, now)

        if (shouldRun) {
          console.log(`🚀 Running scheduled migration for: ${project.name}`)
          await runProjectMigration(project)
        }
      } catch (projectError) {
        console.error(`❌ Error processing project ${project.name}:`, projectError)

        // Update project status to error
        await updateProjectStatus(payload, project, 'error', String(projectError))
      }
    }
  } catch (error) {
    console.error('❌ Scheduler check failed:', error)
  }
}

// Check if a specific project should run now based on its cron settings
function shouldProjectRunNow(project: any, now: Date): boolean {
  const cronSettings = project.cronSettings
  if (!cronSettings?.enabled) return false

  // Get the actual cron expression (custom or mapped from schedule)
  const cronExpression =
    cronSettings.customSchedule || getCronPatternFromSchedule(cronSettings.schedule)
  const lastRun = cronSettings.lastRun ? parseCzechDateTime(cronSettings.lastRun) : null

  // If never ran, run it once
  if (!lastRun) {
    console.log(`✅ ${project.name} - Never ran before, will run now`)
    return true
  }

  const minutesSinceLastRun = Math.floor((now.getTime() - lastRun.getTime()) / (1000 * 60))

  // Check different cron patterns
  switch (cronExpression) {
    case '*/5 * * * *': // Every 5 minutes
      return minutesSinceLastRun >= 5

    case '*/15 * * * *': // Every 15 minutes
      return minutesSinceLastRun >= 15

    case '0 * * * *': // Every hour
      return minutesSinceLastRun >= 60 && now.getMinutes() === 0

    case '0 */6 * * *': // Every 6 hours
      return minutesSinceLastRun >= 360 && now.getMinutes() === 0 && now.getHours() % 6 === 0

    case '0 */12 * * *': // Every 12 hours
      return minutesSinceLastRun >= 720 && now.getMinutes() === 0 && now.getHours() % 12 === 0

    case '0 0 * * *': // Daily at midnight
      return minutesSinceLastRun >= 1440 && now.getHours() === 0 && now.getMinutes() === 0

    case '0 6 * * *': // Daily at 6 AM
      return minutesSinceLastRun >= 1440 && now.getHours() === 6 && now.getMinutes() === 0

    case '0 0 * * 0': // Weekly on Sunday
      return (
        minutesSinceLastRun >= 10080 &&
        now.getDay() === 0 &&
        now.getHours() === 0 &&
        now.getMinutes() === 0
      )

    default:
      // For custom expressions, use a simple 5-minute fallback
      console.log(`⚠️ Unknown cron pattern for ${project.name}: ${cronExpression}`)
      return minutesSinceLastRun >= 5
  }
}

// Helper function to map schedule values to cron patterns
export function getCronPatternFromSchedule(schedule: string | undefined): string {
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

// Run migration for a specific project
async function runProjectMigration(project: any) {
  try {
    const payload = await getPayload({ config })

    // Call the migration API endpoint
    const baseUrl =
      process.env.NEXT_PUBLIC_PAYLOAD_URL || process.env.TEST_URL || 'http://localhost:3000'

    const response = await fetch(`${baseUrl}/api/migrate/trigger`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ projectId: project.id }),
    })

    if (response.ok) {
      const result = await response.json()
      console.log(
        `✅ Migration completed for ${project.name}:`,
        result.migration?.imported || 0,
        'items',
      )

      // Update project's last run and status
      await updateProjectStatus(payload, project, 'active', JSON.stringify(result, null, 2))
    } else {
      const errorText = await response.text()
      console.error(`❌ Migration failed for ${project.name}:`, response.status, errorText)

      await updateProjectStatus(payload, project, 'error', `HTTP ${response.status}: ${errorText}`)
    }
  } catch (error) {
    console.error(`❌ Migration error for ${project.name}:`, error)
    throw error
  }
}

// Update project's cron status and last run time
async function updateProjectStatus(payload: any, project: any, status: string, result: string) {
  try {
    console.log(
      'TEST SCHEDULE',
      project.cronSettings?.customSchedule || project.cronSettings?.schedule,
    )
    await payload.update({
      collection: 'projects',
      id: project.id,
      data: {
        cronSettings: {
          ...project.cronSettings,
          lastRun: formatCzechDateTime(new Date()),
          status: status,
          lastResult: result,
          nextRun: calculateNextRun(
            project.cronSettings?.customSchedule || project.cronSettings?.schedule,
          ),
        },
      },
    })
  } catch (error) {
    console.error(`❌ Failed to update project status for ${project.name}:`, error)
  }
}

// Format date and time for PostgreSQL compatibility (YYYY-MM-DD HH:MM)
export function formatCzechDateTime(date: Date): string {
  const day = date.getDate().toString().padStart(2, '0')
  const month = (date.getMonth() + 1).toString().padStart(2, '0')
  const year = date.getFullYear()
  const hours = date.getHours().toString().padStart(2, '0')
  const minutes = date.getMinutes().toString().padStart(2, '0')

  // PostgreSQL-compatible format: YYYY-MM-DD HH:MM
  const result = `${year}-${month}-${day} ${hours}:${minutes}`

  return result
}

// Parse date format back to Date object (supports multiple formats)
export function parseCzechDateTime(dateString: string): Date | null {
  if (!dateString) return null

  // PostgreSQL format: "2025-07-29 11:50"
  const pgMatch = dateString.match(/(\d{4})-(\d{2})-(\d{2}) (\d{2}):(\d{2})/)
  if (pgMatch) {
    const [, year, month, day, hours, minutes] = pgMatch
    const date = new Date(
      parseInt(year),
      parseInt(month) - 1, // Month is 0-indexed
      parseInt(day),
      parseInt(hours),
      parseInt(minutes),
    )
    return isNaN(date.getTime()) ? null : date
  }

  // Legacy Czech format: "29.07.2025 11:50"
  const czMatch = dateString.match(/(\d{2})\.(\d{2})\.(\d{4}) (\d{2}):(\d{2})/)
  if (czMatch) {
    const [, day, month, year, hours, minutes] = czMatch
    const date = new Date(
      parseInt(year),
      parseInt(month) - 1, // Month is 0-indexed
      parseInt(day),
      parseInt(hours),
      parseInt(minutes),
    )
    return isNaN(date.getTime()) ? null : date
  }

  // Try to parse as ISO format (fallback)
  const isoDate = new Date(dateString)
  return isNaN(isoDate.getTime()) ? null : isoDate
}

// Display date in Czech format for UI (DD.MM.YYYY HH:MM)
export function displayCzechDateTime(dateString: string | null): string {
  if (!dateString) return 'Nenastaveno'

  const date = parseCzechDateTime(dateString)
  if (!date) return dateString // fallback to original string

  const day = date.getDate().toString().padStart(2, '0')
  const month = (date.getMonth() + 1).toString().padStart(2, '0')
  const year = date.getFullYear()
  const hours = date.getHours().toString().padStart(2, '0')
  const minutes = date.getMinutes().toString().padStart(2, '0')

  return `${day}.${month}.${year} ${hours}:${minutes}`
}

// Calculate next run time based on cron expression
function calculateNextRun(cronExpression: string | null | undefined): string | null {
  if (!cronExpression) {
    return null
  }

  const now = new Date()
  const next = new Date(now)

  switch (cronExpression) {
    case '*/5 * * * *':
      next.setMinutes(next.getMinutes() + 5)
      break
    case '*/15 * * * *':
      next.setMinutes(next.getMinutes() + 15)
      break
    case '0 * * * *':
      next.setHours(next.getHours() + 1, 0, 0, 0)
      break
    case '0 */6 * * *':
      next.setHours(next.getHours() + 6, 0, 0, 0)
      break
    case '0 */12 * * *':
      next.setHours(next.getHours() + 12, 0, 0, 0)
      break
    case '0 0 * * *':
      next.setDate(next.getDate() + 1)
      next.setHours(0, 0, 0, 0)
      break
    case '0 6 * * *':
      if (next.getHours() >= 6) next.setDate(next.getDate() + 1)
      next.setHours(6, 0, 0, 0)
      break
    case '0 0 * * 0':
      const daysUntilSunday = (7 - next.getDay()) % 7 || 7
      next.setDate(next.getDate() + daysUntilSunday)
      next.setHours(0, 0, 0, 0)
      break
    default:
      next.setMinutes(next.getMinutes() + 5)
  }

  return formatCzechDateTime(next)
}

// Start scheduler with auto-restart every 3 hours (convenience function)
export async function startSchedulerWithAutoRestart() {
  return await startAutomaticScheduler(true)
}

// Helper function to update project's lastRun timestamp - can be called from any migration endpoint
export async function updateProjectLastRun(
  projectId: string | number,
  status?: 'active' | 'error',
  result?: string,
) {
  try {
    const payload = await getPayload({ config })

    // Get current project data
    const project = await payload.findByID({
      collection: 'projects',
      id: projectId,
    })

    if (!project) {
      console.error(`❌ Project ${projectId} not found for lastRun update`)
      return
    }

    const cronSettings = project.cronSettings || {}
    const cronExpression =
      cronSettings.customSchedule || getCronPatternFromSchedule(cronSettings.schedule || undefined)
    const nextRunCalculated = calculateNextRun(cronExpression)
    // Update lastRun, status, result, and calculate nextRun
    const updateData: any = {
      cronSettings: {
        ...cronSettings,
        lastRun: formatCzechDateTime(new Date()),
        nextRun: nextRunCalculated,
        ...(status && { status }),
        ...(result && { lastResult: result }),
      },
    }

    await payload.update({
      collection: 'projects',
      id: projectId,
      data: updateData,
    })
    console.log(`✅ Updated lastRun for project ${project.name} (ID: ${projectId})`)
  } catch (error) {
    console.error(`❌ Failed to update lastRun for project ${projectId}:`, error)
  }
}
