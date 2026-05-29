// modules/users/services.ts

import { getServerApi } from '@/lib/server-api'
import { PaginatedUsersResponse } from './types'

export async function getUsers(page = 1, limit = 10) {
  const serverApi = await getServerApi()

  const response = await serverApi.get<PaginatedUsersResponse>('/users', {
    params: {
      page,
      limit,
    },
  })

  return response.data
}