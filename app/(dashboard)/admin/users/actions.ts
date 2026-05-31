'use server';

import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';
import { serverApi } from '@/lib/server-api';

export async function updateUserAction(formData: FormData) {
  const id = String(formData.get('id'));

  const payload = {
    email: String(formData.get('email')),
  };

  await serverApi(`/users/${id}`, { method: 'PATCH', data: payload });

  redirect('/admin/users');
}
export async function deleteUserAction(formData: FormData) {
  const id = String(formData.get('id'));

  if (!id) {
    throw new Error('User ID is required');
  }

  await serverApi(`/users/${id}`, { method: 'DELETE' });

  revalidatePath('/admin/users');
}
