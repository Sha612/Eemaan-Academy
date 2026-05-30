import { getServerApi } from '@/lib/server-api'
import {
  CreateTeacher,
  PaginatedTeachersResponse,
  TeacherResponse,
  UpdateTeacher,
} from './types'

export async function getTeachers(page = 1, limit = 10) {
  const serverApi = await getServerApi()

  const response = await serverApi.get<PaginatedTeachersResponse>('/teachers', {
    params: {
      page,
      limit,
    },
  })

  return response.data
}

export async function getTeacherById(id: number | string) {
  const serverApi = await getServerApi()

  const response = await serverApi.get<TeacherResponse>(`/teachers/${id}`)

  return response.data
}

export async function createTeacher(data: CreateTeacher) {
  const serverApi = await getServerApi()

  const response = await serverApi.post<TeacherResponse>('/teachers', data)

  return response.data
}

export async function updateTeacher(id: number | string, data: UpdateTeacher) {
  const serverApi = await getServerApi()

  const response = await serverApi.patch<TeacherResponse>(
    `/teachers/${id}`,
    data
  )

  return response.data
}

export async function deleteTeacher(id: number | string) {
  const serverApi = await getServerApi()

  await serverApi.delete(`/teachers/${id}`)
}