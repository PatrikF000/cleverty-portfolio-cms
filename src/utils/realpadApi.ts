import { Readable } from 'stream'
import xmlFlow from 'xml-flow'
import { RealPadConfig } from '@/types/migrate'

/**
 * Create RealPad API configuration from environment variables with enhanced validation
 */
export function createRealPadConfig(projectRealID: string): RealPadConfig {
  const config = {
    login: process.env.REALPAD_LOGIN || '',
    password: process.env.REALPAD_PW || '',
    screenid: process.env.REALPAD_SCREENID || '',
    developerid: process.env.REALPAD_DEVELOPERID || '',
    projectid: projectRealID,
  }

  // Validate configuration
  const missingKeys = Object.entries(config)
    .filter(([key, value]) => !value)
    .map(([key]) => key)

  if (missingKeys.length > 0) {
    throw new Error(`Missing RealPad configuration: ${missingKeys.join(', ')}`)
  }

  // Validate URL
  if (!process.env.REALPAD_API_URL) {
    throw new Error('REALPAD_API_URL environment variable is not set')
  }

  // Validate URL format
  try {
    new URL(process.env.REALPAD_API_URL)
  } catch (error) {
    throw new Error('REALPAD_API_URL is not a valid URL')
  }

  return config
}

/**
 * Build RealPad API URL with parameters
 */
export function buildRealPadUrl(config: RealPadConfig): string {
  const baseUrl = `${process.env.REALPAD_API_URL}ws/v10/get-project`

  if (!process.env.REALPAD_API_URL) {
    throw new Error('REALPAD_API_URL environment variable is not set')
  }

  const params = new URLSearchParams({
    login: config.login,
    password: config.password,
    screenid: config.screenid,
    developerid: config.developerid,
    projectid: config.projectid,
  })

  return `${baseUrl}?${params.toString()}`
}

/**
 * Create XML stream from response body with timeout
 */
export function createXMLStream(response: Response): Readable {
  if (!response.body) {
    throw new Error('Response has no body')
  }

  // Convert Web Stream to Node.js stream
  // @ts-ignore - This works in Node.js runtime
  const stream = Readable.fromWeb(response.body)

  // Add timeout to prevent hanging streams
  const timeout = setTimeout(() => {
    if (stream.destroy) {
      stream.destroy(new Error('XML stream processing timed out'))
    }
  }, 60000) // 60 second timeout for XML processing

  stream.on('end', () => clearTimeout(timeout))
  stream.on('error', () => clearTimeout(timeout))

  return stream
}

/**
 * Setup XML parser for building data with error handling
 */
export function setupXMLParser(stream: import('stream').Readable) {
  try {
    const parser = xmlFlow(stream)

    // Add error handling to the parser
    parser.on('error', (error: any) => {
      console.error('❌ XML parser error:', error)
      throw new Error(`XML parsing failed: ${error.message}`)
    })

    return parser
  } catch (error) {
    console.error('❌ Failed to setup XML parser:', error)
    throw new Error(
      `Failed to setup XML parser: ${error instanceof Error ? error.message : 'Unknown error'}`,
    )
  }
}

/**
 * Fetch project data from RealPad API with enhanced error handling
 */
export async function fetchRealPadProject(config: RealPadConfig): Promise<Response> {
  const url = buildRealPadUrl(config)

  try {
    // Add timeout to prevent hanging requests
    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), 30000) // 30 second timeout

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      signal: controller.signal,
    })

    clearTimeout(timeoutId)

    if (!response.ok) {
      const errorText = await response.text().catch(() => 'Unable to read error response')
      throw new Error(`RealPad API error: ${response.status} ${response.statusText} - ${errorText}`)
    }

    // Check if response has content
    const responseText = await response.text()
    if (!responseText || responseText.trim().length === 0) {
      throw new Error('RealPad API returned empty response')
    }

    // Create a new response with the text content
    return new Response(responseText, {
      status: response.status,
      statusText: response.statusText,
      headers: response.headers,
    })
  } catch (error) {
    if (error instanceof Error) {
      if (error.name === 'AbortError') {
        throw new Error('RealPad API request timed out after 30 seconds')
      }
      throw new Error(`RealPad API request failed: ${error.message}`)
    }
    throw new Error('RealPad API request failed with unknown error')
  }
}

/**
 * Fetch project data from RealPad API with retry mechanism
 */
export async function fetchRealPadProjectWithRetry(
  config: RealPadConfig,
  maxRetries: number = 3,
): Promise<Response> {
  let lastError: Error | null = null

  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      console.log(`🔄 Attempt ${attempt}/${maxRetries} to fetch RealPad project data`)
      return await fetchRealPadProject(config)
    } catch (error) {
      lastError = error instanceof Error ? error : new Error(String(error))
      console.error(`❌ Attempt ${attempt} failed:`, lastError.message)

      if (attempt < maxRetries) {
        // Wait before retry (exponential backoff)
        const delay = Math.min(1000 * Math.pow(2, attempt - 1), 10000) // Max 10 seconds
        console.log(`⏳ Waiting ${delay}ms before retry...`)
        await new Promise((resolve) => setTimeout(resolve, delay))
      }
    }
  }

  throw new Error(
    `Failed to fetch RealPad project data after ${maxRetries} attempts. Last error: ${lastError?.message}`,
  )
}

/**
 * Performance timing utility
 */
export class PerformanceTimer {
  private startTime: number

  constructor() {
    this.startTime = Date.now()
  }

  elapsed(): number {
    return Date.now() - this.startTime
  }

  reset(): void {
    this.startTime = Date.now()
  }
}
