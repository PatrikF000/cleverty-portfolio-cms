import { fetchRealPadProject } from '@/utils/realpadApi'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const response = await fetchRealPadProject({
    login: 'artstay-test-integration', //'lukas.oslzla.penta.cz.1',
    password: 'cHPYKmw7C4Bk', //'Artstay159951',
    screenid: '350613',
    developerid: '36727528', //'1458501',
    projectid: '36728545',
  })
  const responseText = await response.text()

  return new NextResponse(responseText, {
    headers: {
      'Content-Type': 'application/xml',
    },
  })
}
