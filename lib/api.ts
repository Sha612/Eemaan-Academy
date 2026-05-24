const API_URL = process.env.NEST_API_URL ?? "http://localhost:4000"

export async function apiFetch<T>(
  path: string,
  options?: RequestInit
): Promise<T> {
  const url = `${API_URL}${path}`

  const res = await fetch(url, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...(options?.headers || {}),
    },
    cache: "no-store",
  })

  if (!res.ok) {
    const error = await res.json().catch(() => null)

    console.error("API ERROR:", {
      url,
      status: res.status,
      error,
    })

    throw new Error(
      Array.isArray(error?.message)
        ? error.message.join(", ")
        : error?.message || `API error: ${res.status}`
    )
  }

  return res.json()
}