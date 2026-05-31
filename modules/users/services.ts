import { serverApi } from '@/lib/server-api';
import { PaginatedUsersResponse } from './types';

export async function getUsers(page = 1, limit = 10) {
  return await serverApi<PaginatedUsersResponse>('/users', {
    params: {
      page,
      limit,
    },
  });
}
