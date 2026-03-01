import type { Access } from 'payload'

/** Povolené domény pro anonymní read přístup (frontend) */
const ALLOWED_DOMAINS = [
  'https://stoone-cpi.artstay.co',
  'https://dev-stoone-cpi.artstay.co',
  'https://dev-delarg.artstay.co',
  'http://localhost:3000',
  'http://localhost:3001',
]

function getHeader(headers: unknown, name: string): string | undefined {
  try {
    const h = headers as any
    if (h?.get && typeof h.get === 'function') {
      return h.get(name) ?? undefined
    }
    return h?.[name] ?? h?.[name.toLowerCase()]
  } catch {
    return undefined
  }
}

/**
 * Read access pro kolekce: přihlášení uživatelé, API key, nebo anonymní z povolených domén.
 */
export const accessByDomain: Access = async ({ req }) => {
  // Přihlášený uživatel má přístup
  if (req.user) return true

  // API key má přístup
  const apiKey = getHeader(req.headers, 'x-api-key')
  if (apiKey === process.env.CMS_API_TOKEN) return true

  // Anonymní: kontrola referer/origin/host
  const referer = getHeader(req.headers, 'referer')
  const origin = getHeader(req.headers, 'origin')
  const forwardedHost = getHeader(req.headers, 'x-forwarded-host')
  const forwardedProto = getHeader(req.headers, 'x-forwarded-proto')
  const host = getHeader(req.headers, 'host')

  const sources: string[] = []
  if (referer) sources.push(referer)
  if (origin) sources.push(origin)
  if (forwardedHost) sources.push(`${forwardedProto === 'https' ? 'https' : 'http'}://${forwardedHost}`)
  if (host) {
    sources.push(`http://${host}`, `https://${host}`)
  }

  return sources.some((s) => s && ALLOWED_DOMAINS.some((d) => s.startsWith(d)))
}
