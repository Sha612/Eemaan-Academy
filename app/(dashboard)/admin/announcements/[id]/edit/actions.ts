'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { serverApi } from '@/lib/server-api';

export async function updateAnnouncementAction(
  announcementId: number,
  formData: FormData,
) {
  const type = String(formData.get('type'));
  const classId = formData.get('classId');

  const payload = {
    title: String(formData.get('title') || '').trim(),
    message: String(formData.get('message') || '').trim(),
    type,
    priority: String(formData.get('priority')),
    classId: type === 'class-specific' && classId ? Number(classId) : null,
  };

  await serverApi(`/announcements/${announcementId}`, {
    method: 'PATCH',
    data: payload,
  });

  revalidatePath('/admin/announcements');
  revalidatePath(`/admin/announcements/${announcementId}/edit`);

  redirect('/admin/announcements');
}
