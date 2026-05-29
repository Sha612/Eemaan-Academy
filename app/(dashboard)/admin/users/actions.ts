'use server';

import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';
import { getServerApi } from '@/lib/server-api';

export async function updateUserAction(formData: FormData) {
  const id = String(formData.get('id'));

  const payload = {
    email: String(formData.get('email')),
  };
  const serverApi = await getServerApi();

  await serverApi.patch(`/users/${id}`, payload);

  redirect('/admin/users');
}
export async function deleteUserAction(formData: FormData) {
  const id = String(formData.get('id'));

  if (!id) {
    throw new Error('User ID is required');
  }

  const serverApi = await getServerApi();
  await serverApi.delete(`/users/${id}`);

  revalidatePath('/admin/users');
}
