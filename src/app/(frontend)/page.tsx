import { headers as getHeaders } from 'next/headers.js'
import Image from 'next/image'
import Link from 'next/link'
import { getPayload } from 'payload'
import React from 'react'

import config from '@payload-config'

export default async function HomePage() {
  const headers = await getHeaders()
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })
  const { user } = await payload.auth({ headers })

  // const fileURL = `vscode://file/${fileURLToPath(import.meta.url)}`

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-2xl space-y-8 text-center">
        <div className="flex justify-center h-12">
          <Image src="/images/cleverty-logo.png" alt="Cleverty" width={461} height={100} className="h-12 w-auto object-contain" />
        </div>
      
        <div className="space-y-4">
          <h1 className="text-2xl font-bold tracking-tight md:text-xl flex flex-col items-center justify-center">
            {user && <span>Welcome back, {user.email} to</span>}
            {!user && <span>Welcome to</span>}
            Portfolio Creator Admin
          </h1>
          <p className="text-lg text-muted-foreground md:text-xl">
            Přihlaste se pro přístup do administrace
          </p>
        </div>

        <Link href={payloadConfig.routes.admin} className="text-lg  md:text-xl bg-transparent border border-black text-black px-4 py-2 rounded-md">Přihlásit se</Link>
      </div>
    </div>
  )
}
