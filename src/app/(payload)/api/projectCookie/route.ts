import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const cookieStore = await cookies()
  cookieStore.delete('activeProject')
  cookieStore.delete('activeProjectName')
  return NextResponse.json({ status: 'success', statusCode: 200 })
}
