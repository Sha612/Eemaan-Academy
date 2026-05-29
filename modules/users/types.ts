import { User } from '@/modules/auth/types'

export type PaginatedUsersResponse = {
  data: User[]
  meta: {
    total: number
    page: number
    limit: number
    totalPages: number
  }
}