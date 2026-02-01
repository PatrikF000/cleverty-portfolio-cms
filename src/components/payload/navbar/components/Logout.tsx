'use client'

import Link from 'next/link'
import { FC } from 'react'

export const Logout: FC = () => {
  const handleLogout = async (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    try {
      await fetch('/api/projectCookie', {
        method: 'GET',
      })
    } catch (error) {
      console.error('Chyba při odhlášení:', error)
    } finally {
      window.location.href = '/admin/logout'
    }
  }
  return (
    <Link href="" onClick={handleLogout} className="navigation__logout">
      Odhlásit se
    </Link>
  )
}
