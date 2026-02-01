import Link from 'next/link'
import React from 'react'
import './navbar.scss'
import { BasePayload, PayloadRequest, User } from 'payload'
import { cookies } from 'next/headers'
import { Logout } from './components/Logout'
interface NavbarProps {
  payload?: BasePayload
  user?: User
  req: PayloadRequest
}

const Navbar = async ({ user }: NavbarProps) => {
  const rolesAccess = user?.role?.id === 1
  const cookieStore = await cookies()
  const activeProject = cookieStore?.get('activeProject')

  return (
    <nav className="nav__scroll navigation">
      <div className="navigation__container">
        <div className="navigation__links">
          <Link href="/admin">Domů</Link>
          {/* {activeProject?.value !== '' && (
            <div>
              <h3 className="">Obsah</h3>
              <ul className="menu">
                <li>
                  <Link href="/admin/collections/pages">Stránky</Link>
                </li>
                <li>
                  <Link href="/admin/collections/news">Novinky</Link>
                </li>
                <li>
                  <Link href="/admin/collections/projects">Projekty</Link>
                </li>
                <li>
                  <Link href="/admin/collections/buildings">Budovy</Link>
                </li>
                <li>
                  <Link href="/admin/collections/floors">Patra</Link>
                </li>
                <li>
                  <Link href="/admin/collections/flats">Byty</Link>
                </li>
                <li>
                  <Link href="/admin/collections/globalheader">Hlavička</Link>
                </li>
                <li>
                  <Link href="/admin/collections/globalfooter">Patička</Link>
                </li>
                <li>
                  <Link href="/admin/collections/projectGlobalSettings">Globální nastavení</Link>
                </li>
                <li>
                  <Link href="/admin/collections/flatDetailPage">Detail stránky bytu</Link>
                </li>
                <li>
                  <Link href="/admin/collections/share">Sdílené sekce</Link>
                </li>
              </ul>
            </div>
          )} */}
          <Link href="/admin/collections/investments">Investice</Link>
          {/* <Link href="/admin/collections/documents">Dokumenty</Link> */}
          {/* <Link href="/admin/collections/media">Média</Link> */}
          {/* {rolesAccess && <Link href="/admin/migrate-page">Migrace dat</Link>} */}
          <Link href="/admin/collections/users">Uživatelé</Link>
          {rolesAccess && <Link href="/admin/collections/roles">Role uživatelů</Link>}
          <Link href="/admin/collections/media">Média</Link>
        </div>
        {/* tvůj sidebar */}
        <Logout />
      </div>
    </nav>
  )
}

export default Navbar
