import { serverApi } from '@/lib/server-api'
import type { PaginatedClassesResponse } from './types'

export async function getClasses(page = 1, limit = 10) {
  return await serverApi<PaginatedClassesResponse>('/classes', {
    params: {
      page,
      limit,
    },
  })
}
export async function assignTeacherToClass(classId: number, teacherId: number) {
  return await serverApi(`/classes/${classId}/teacher`, {
    method: 'PATCH',
    data: { teacherId },
  });
}