import type { AccessArgs, FieldAccess } from 'payload'

import type { Role, User } from '@/payload-types'

type isAuthenticated = (args: AccessArgs<User>) => boolean

/*
 * Metoda pro kontrolu, jestli uživatel je admin
 * Použití: víceméně všude, kde se jedná o úpravy jenom pro admin uživatele
 * Popis: Kontrola, jestli uživatel má roli admin
 *
 */

export const authenticatedAdmin: isAuthenticated = ({ req: { user } }) => {
  if (!user || user.collection !== 'users') return false
  const userObject = user.role as Role
  return userObject?.id === 1
}

export const isAdminFieldLevel: FieldAccess<{ id: string }> = ({ req: { user } }) => {
  return user?.id === 1
}

/**
 * Access control for role field that allows access during first user creation
 * or when user is admin (id === 1)
 */
export const allowRoleOnFirstUserOrAdmin: FieldAccess<{ id: string }> = ({ req: { user } }) => {
  // Allow if no user (first user creation) or if user is admin
  return !user || user?.id === 1
}
