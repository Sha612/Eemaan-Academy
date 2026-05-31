import { serverApi } from '@/lib/server-api';
import {
  CreateStudent,
  PaginatedStudentsResponse,
  StudentResponse,
  UpdateStudent,
} from './types';

export async function getStudents(page = 1, limit = 10) {
  return await serverApi<PaginatedStudentsResponse>('/students', {
    params: {
      page,
      limit,
    },
  });
}

export async function getStudentById(id: number | string) {
  return await serverApi<StudentResponse>(`/students/${id}`);
}

export async function createStudent(data: CreateStudent) {
  return await serverApi<StudentResponse>('/students', {
    method: 'POST',
    data,
  });
}

export async function updateStudent(id: number | string, data: UpdateStudent) {
  return await serverApi<StudentResponse>(`/students/${id}`, {
    method: 'PATCH',
    data,
  });
}

export async function deleteStudent(id: number | string) {
  return await serverApi<void>(`/students/${id}`, {
    method: 'DELETE',
  });
}
