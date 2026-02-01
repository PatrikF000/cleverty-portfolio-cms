import { NextRequest, NextResponse } from 'next/server'
import { formatCzechDateTime } from '@/lib/cronScheduler'

// Seznam povolených endpointů pro bezpečnost
const ALLOWED_ENDPOINTS = [
  '/api/cron/migrate',
  '/api/cron/files',
  '/api/migrate/create',
  '/api/migrate/update/complete',
  '/api/migrate/update/flats',
]

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { targetUrl, data } = body

    if (!targetUrl) {
      return NextResponse.json({ success: false, error: 'targetUrl is required' }, { status: 400 })
    }

    // Kontrola, zda je endpoint povolený
    if (!ALLOWED_ENDPOINTS.includes(targetUrl)) {
      return NextResponse.json({ success: false, error: 'Endpoint not allowed' }, { status: 403 })
    }

    // Get the token from environment (server-side only)
    const token = process.env.CRON_SECURITY_TOKEN || ''

    if (!token) {
      console.error('❌ CRON_SECURITY_TOKEN not configured')
      return NextResponse.json(
        { success: false, error: 'Server configuration error' },
        { status: 500 },
      )
    }

    // Call the target endpoint with the token
    const baseUrl =
      process.env.NEXT_PUBLIC_PAYLOAD_URL || process.env.TEST_URL || 'http://localhost:3000'
    const fullUrl = `${baseUrl}${targetUrl}`

    console.log(`🔄 Triggering endpoint: ${fullUrl}`)

    const response = await fetch(fullUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-cron-token': token,
      },
      body: JSON.stringify(data || {}),
    })

    const result = await response.json()

    return NextResponse.json({
      success: result.success,
      data: result,
      targetUrl,
      timestamp: formatCzechDateTime(new Date()),
    })
  } catch (error) {
    console.error('❌ Trigger error:', error)
    return NextResponse.json(
      {
        success: false,
        error: String(error),
        timestamp: formatCzechDateTime(new Date()),
      },
      { status: 500 },
    )
  }
}
