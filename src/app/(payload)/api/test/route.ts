import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest): Promise<NextResponse> {
  // Verify security token
  const token = req.headers.get('x-cron-token')
  const expectedToken = process.env.CRON_SECURITY_TOKEN || ''

  if (!token || token !== expectedToken) {
    console.log('❌ Unauthorized access attempt to test endpoint')
    return NextResponse.json(
      {
        success: false,
        error: 'Unauthorized',
        timestamp: new Date().toISOString(),
      },
      { status: 401 },
    )
  }

  // Token is valid
  return NextResponse.json({
    success: true,
    message: 'Token verified successfully',
    timestamp: new Date().toISOString(),
  })
}
