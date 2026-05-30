import {getServerApi} from '@/lib/server-api'
import {
  CreateStudent,
  PaginatedStudentsResponse,
  StudentResponse,
  UpdateStudent,
} from './types'

export async function getStudents(page = 1, limit = 10) {
  const serverApi = await getServerApi()

  const response = await serverApi.get<PaginatedStudentsResponse>('/students', {
    params: {
      page,
      limit,
    },
  })

  return response.data
}

export async function getStudentById(id: number | string) {
  const serverApi = await getServerApi()

  const response = await serverApi.get<StudentResponse>(`/students/${id}`)

  return response.data
}

export async function createStudent(data: CreateStudent) {
  const serverApi = await getServerApi()

  const response = await serverApi.post<StudentResponse>('/students', data)

  return response.data
}

export async function updateStudent(id: number | string, data: UpdateStudent) {
  const serverApi = await getServerApi()

  const response = await serverApi.patch<StudentResponse>(
    `/students/${id}`,
    data
  )

  return response.data
}

export async function deleteStudent(id: number | string) {
  const serverApi = await getServerApi()

  await serverApi.delete(`/students/${id}`)
}