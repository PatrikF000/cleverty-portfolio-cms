//import { cookies } from 'next/headers'

// Funkce pro kontrolu přístupu k obrázkům podle projektu
export const accessByDomain = async ({ req }: { req: any }) => {
  // Pokud je uživatel přihlášený, má přístup
  if (req.user) return true

  // Získat referer z req objektu - zkusit různé možnosti
  /*let referer =
    req.headers?.referer ||
    req.headers?.origin ||
    req.headers?.host ||
    req.headers?.['x-forwarded-host'] ||
    ''
*/
  // Pokud nemáme referer, zkusit získat z URL nebo jiných zdrojů
  /*if (!referer) {
    // Zkusit získat z req.url
    /*if (req.url) {
      try {
        const url = new URL(req.url)
        referer = `${url.protocol}//${url.host}`
      } catch (e) {
        console.log('Error getting referer from url', e)
      }
    }*/

  // Zkusit získat z req.connection nebo req.socket
  /*if (!referer && req.connection?.encrypted) {
      referer = 'https://localhost:3000'
    } else if (!referer && req.connection) {
      referer = 'http://localhost:3000'
    }*/
  /*
    // Poslední fallback - použít localhost
    if (!referer) {
      referer = process.env.NEXT_PUBLIC_PAYLOAD_URL
    }
  }*/

  const isAllowedDomain = checkDomainForProject(process.env.NEXT_PUBLIC_PAYLOAD_URL || '')

  return isAllowedDomain
}

// Funkce pro kontrolu, zda doména odpovídá projektu
export const checkDomainForProject = (referer: string) => {
  // Pokud není referer, zamítnout přístup
  if (!referer) {
    return false
  }
  const domains = [
    'https://stoone-cpi.artstay.co',
    'https://dev-stoone-cpi.artstay.co',
    'https://dev-delarg.artstay.co',
    'http://localhost:3000',
    'http://localhost:3001',
  ]

  const isAllowed = domains.some((domain) => referer.startsWith(domain))

  return isAllowed
}
