import { serverApi } from '@/lib/server-api';
import type { EnrollmentResponse } from './types';

export async function getEnrollments() {
  return serverApi<EnrollmentResponse[]>('/enrollments');
}

export async function assignStudentToClass(
  studentId: number,
  classId: number,
  notes?: string,
) {
  return serverApi('/enrollments', {
    method: 'POST',
    data: {
      studentId,
      classId,
      notes: notes?.trim() || null,
    },
  });
}