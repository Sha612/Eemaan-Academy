'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { serverApi } from '@/lib/server-api';
import { EnrollmentStatus } from '@/modules/students/types';

export async function updateStudentAction(
  studentId: number,
  formData: FormData,
) {
  const password = String(formData.get('password') || '').trim();

  const payload = {
    firstName: String(formData.get('firstName') || '').trim(),
    lastName: String(formData.get('lastName') || '').trim(),
    gender: String(formData.get('gender') || '').trim(),
    phoneNumber: String(formData.get('phoneNumber') || '').trim(),
    guardianName: String(formData.get('guardianName') || '').trim() || null,
    guardianPhoneNumber:
      String(formData.get('guardianPhoneNumber') || '').trim() || null,
    guardianEmail: String(formData.get('guardianEmail') || '').trim() || null,
    user: {
      email: String(formData.get('email') || '').trim(),
      ...(password ? { password } : {}),
    },
  };

  await serverApi(`/students/${studentId}`, {
    method: 'PATCH',
    data: payload,
  });

  revalidatePath('/admin/students');
  revalidatePath(`/admin/students/${studentId}/edit`);

  redirect('/admin/students');
}

export async function updateEnrollmentStatusAction(
  studentId: number,
  enrollmentId: number,
  formData: FormData,
) {
  const enrollmentStatus = String(
    formData.get('enrollmentStatus') || 'active',
  ) as EnrollmentStatus;

  await serverApi(`/enrollments/${enrollmentId}`, {
    method: 'PATCH',
    data: {
      enrollmentStatus,
    },
  });

  revalidatePath('/admin/students');
  revalidatePath(`/admin/students/${studentId}/edit`);
}