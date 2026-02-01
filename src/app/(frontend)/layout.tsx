import React from 'react'
import '@/styles/globals.css'

export const metadata = {
  description: 'Cleverty Creator CMS',
  title: 'Cleverty Creator CMS',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  )
}
