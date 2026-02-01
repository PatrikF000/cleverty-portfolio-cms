interface RevalidationData {
  collection: string
  id: string
  locale?: string
  urlProject?: string
  slug?: string
}

export async function revalidateFrontend(data: RevalidationData) {
  try {
    const frontendUrl = data?.urlProject

    if (!frontendUrl) {
      //console.error('No frontend URL provided')
      return false
    }
    console.log('revalidate')
    const response = await fetch(`${frontendUrl}/api/revalidate`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...data,
        secret: process.env.SECRET_REVALIDATE,
      }),
    })

    if (!response.ok) {
      console.error('Revalidation failed:', response.status, response.statusText)
      return false
    }

    const result = await response.json()
    console.log('Revalidation successful:', result)
    return true
  } catch (error) {
    console.error('Error calling revalidation endpoint:', error)
    return false
  }
}
