'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { serverApi } from '@/lib/server-api';

export async function updateTeacherAction(
  teacherId: number,
  formData: FormData,
) {
  const password = String(formData.get('password') || '').trim();

  const payload = {
    firstName: String(formData.get('firstName') || '').trim(),
    lastName: String(formData.get('lastName') || '').trim(),
    gender: String(formData.get('gender') || '').trim(),
    phoneNumber: String(formData.get('phoneNumber') || '').trim(),
    specialization: String(formData.get('specialization') || '').trim(),
    user: {
      email: String(formData.get('email') || '').trim(),
      role: String(formData.get('role') || 'teacher').trim(),
      ...(password ? { password } : {}),
    },
  };

  await serverApi(`/teachers/${teacherId}`, {
    method: 'PATCH',
    data: payload,
  });

  revalidatePath('/admin/teachers');
  revalidatePath(`/admin/teachers/${teacherId}/edit`);

  redirect('/admin/teachers');
}