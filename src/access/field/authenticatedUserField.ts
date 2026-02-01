import { FieldAccess } from 'payload'

export const authenticatedUserField: FieldAccess = ({ req }) => {
  const { user, headers } = req
  let apiKey: string | undefined
  //const a = headers.get('x-api-key')
  if (typeof headers.get === 'function') {
    apiKey = headers.get('x-api-key') ?? undefined
  } else {
    // @ts-expect-error: headers may be a plain object
    apiKey = headers['x-api-key']
  }
  if (apiKey === process.env.CMS_API_TOKEN) {
    return true
  }

  return Boolean(user)
}
