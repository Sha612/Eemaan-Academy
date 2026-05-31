'use server';

import { revalidatePath } from 'next/cache';
import { serverApi } from '@/lib/server-api';

export async function deleteAnnouncementAction(formData: FormData) {
  const id = Number(formData.get('id'));

  if (!id) {
    throw new Error('Announcement ID is required');
  }

  await serverApi(`/announcements/${id}`, {
    method: 'DELETE',
  });

  revalidatePath('/admin/announcements');
}