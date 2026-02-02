import { v4 as uuidv4 } from 'uuid'

// Job status types
export type JobStatus = 'pending' | 'running' | 'completed' | 'failed' | 'cancelled'

// Job interface
export interface MigrationJob {
  id: string
  projectID: string
  projectRealID: string
  projectName: string
  status: JobStatus
  progress: {
    currentPage: number
    totalPages: number
    percentage: number
    message: string
    stats: {
      buildings: number
      floors: number
      flats: number
      imported: number
    }
  }
  result?: {
    success: boolean
    imported: number
    countBuildings: number
    countFloors: number
    countFlats: number
    errors: any[]
    processingTime: number
  }
  error?: string
  createdAt: Date
  startedAt?: Date
  completedAt?: Date
  updatedAt: Date
}

// Job queue class
class JobQueue {
  private jobs: Map<string, MigrationJob> = new Map()
  private runningJobs: Set<string> = new Set()
  private maxConcurrentJobs: number = 2

  // Create new migration job
  async createJob(projectID: string, projectRealID: string, projectName: string): Promise<string> {
    const jobId = uuidv4()

    const job: MigrationJob = {
      id: jobId,
      projectID,
      projectRealID,
      projectName,
      status: 'pending',
      progress: {
        currentPage: 0,
        totalPages: 0,
        percentage: 0,
        message: 'Job created, waiting to start...',
        stats: {
          buildings: 0,
          floors: 0,
          flats: 0,
          imported: 0,
        },
      },
      createdAt: new Date(),
      updatedAt: new Date(),
    }

    this.jobs.set(jobId, job)
    console.log(`📋 Job ${jobId} created for project ${projectName}`)

    // Try to start the job
    this.processQueue()

    return jobId
  }

  // Get job by ID
  getJob(jobId: string): MigrationJob | undefined {
    return this.jobs.get(jobId)
  }

  // Get all jobs
  getAllJobs(): MigrationJob[] {
    return Array.from(this.jobs.values()).sort(
      (a, b) => b.createdAt.getTime() - a.createdAt.getTime(),
    )
  }

  // Update job progress
  updateJobProgress(jobId: string, progress: Partial<MigrationJob['progress']>) {
    const job = this.jobs.get(jobId)
    if (job) {
      job.progress = { ...job.progress, ...progress }
      job.updatedAt = new Date()
      console.log(`📊 Job ${jobId} progress: ${progress.message}`)
    }
  }

  // Update job status
  updateJobStatus(
    jobId: string,
    status: JobStatus,
    result?: MigrationJob['result'],
    error?: string,
  ) {
    const job = this.jobs.get(jobId)
    if (job) {
      job.status = status
      job.updatedAt = new Date()

      if (status === 'running' && !job.startedAt) {
        job.startedAt = new Date()
      } else if (status === 'completed' || status === 'failed') {
        job.completedAt = new Date()
        if (result) job.result = result
        if (error) job.error = error
      }

      console.log(`🔄 Job ${jobId} status changed to: ${status}`)
    }
  }

  // Process job queue
  private async processQueue() {
    if (this.runningJobs.size >= this.maxConcurrentJobs) {
      return // Max concurrent jobs reached
    }

    const pendingJob = Array.from(this.jobs.values()).find(
      (job) => job.status === 'pending' && !this.runningJobs.has(job.id),
    )

    if (pendingJob) {
      await this.startJob(pendingJob.id)
    }
  }

  // Start a job
  private async startJob(jobId: string) {
    const job = this.jobs.get(jobId)
    if (!job || job.status !== 'pending') return

    this.runningJobs.add(jobId)
    this.updateJobStatus(jobId, 'running')
    this.updateJobProgress(jobId, {
      message: 'Starting migration...',
      percentage: 0,
    })

    try {
      // Import migration service dynamically to avoid circular dependencies
      // const { startMigrationJob } = await import('@/services/migrationJobService')

      // Start the actual migration
      // await startMigrationJob(job, (progress) => {
      //   this.updateJobProgress(jobId, progress)
      // })

      this.updateJobStatus(jobId, 'completed')
      this.updateJobProgress(jobId, {
        message: 'Migration completed successfully!',
        percentage: 100,
      })
    } catch (error) {
      console.error(`❌ Job ${jobId} failed:`, error)
      this.updateJobStatus(
        jobId,
        'failed',
        undefined,
        error instanceof Error ? error.message : String(error),
      )
    } finally {
      this.runningJobs.delete(jobId)
      this.processQueue() // Process next job
    }
  }

  // Cancel a job
  cancelJob(jobId: string): boolean {
    const job = this.jobs.get(jobId)
    if (job && job.status === 'pending') {
      this.updateJobStatus(jobId, 'cancelled')
      return true
    }
    return false
  }

  // Clean up old completed jobs (older than 24 hours)
  cleanupOldJobs() {
    const cutoff = new Date(Date.now() - 24 * 60 * 60 * 1000) // 24 hours ago

    for (const [jobId, job] of this.jobs.entries()) {
      if (job.status === 'completed' && job.completedAt && job.completedAt < cutoff) {
        this.jobs.delete(jobId)
        console.log(`🧹 Cleaned up old completed job: ${jobId}`)
      }
    }
  }

  // Get queue statistics
  getQueueStats() {
    const total = this.jobs.size
    const pending = Array.from(this.jobs.values()).filter((j) => j.status === 'pending').length
    const running = this.runningJobs.size
    const completed = Array.from(this.jobs.values()).filter((j) => j.status === 'completed').length
    const failed = Array.from(this.jobs.values()).filter((j) => j.status === 'failed').length

    return {
      total,
      pending,
      running,
      completed,
      failed,
      maxConcurrent: this.maxConcurrentJobs,
    }
  }
}

// Export singleton instance
export const jobQueue = new JobQueue()

// Cleanup old jobs every hour
setInterval(
  () => {
    jobQueue.cleanupOldJobs()
  },
  60 * 60 * 1000,
) // 1 hour

export default jobQueue
