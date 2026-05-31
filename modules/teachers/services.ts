import { serverApi } from '@/lib/server-api';
import {
  CreateTeacher,
  PaginatedTeachersResponse,
  TeacherResponse,
  UpdateTeacher,
} from './types';

export async function getTeachers(page = 1, limit = 10) {
  return await serverApi<PaginatedTeachersResponse>('/teachers', {
    params: {
      page,
      limit,
    },
  });
}

export async function getTeacherById(id: number | string) {
  return await serverApi<TeacherResponse>(`/teachers/${id}`);
}

export async function createTeacher(data: CreateTeacher) {
  return await serverApi<TeacherResponse>('/teachers', {
    method: 'POST',
    data,
  });
}

export async function updateTeacher(id: number | string, data: UpdateTeacher) {
  return await serverApi<TeacherResponse>(`/teachers/${id}`, {
    method: 'PATCH',
    data,
  });
}

export async function deleteTeacher(id: number | string) {
  return await serverApi<void>(`/teachers/${id}`, {
    method: 'DELETE',
  });
}
