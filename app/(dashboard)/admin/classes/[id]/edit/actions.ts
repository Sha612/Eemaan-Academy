'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { serverApi } from '@/lib/server-api';

export async function updateClassAction(classId: number, formData: FormData) {
  const payload = {
    name: String(formData.get('name') || '').trim(),
    subject: String(formData.get('subject') || '').trim(),
    level: Number(formData.get('level')),
    description: String(formData.get('description') || '').trim() || null,
    day: String(formData.get('day') || '').trim().toUpperCase(),
    startTime: String(formData.get('startTime') || '').trim(),
    endTime: String(formData.get('endTime') || '').trim(),
    meetingUrl: String(formData.get('meetingUrl') || '').trim() || null,
  };

  await serverApi(`/classes/${classId}`, {
    method: 'PATCH',
    data: payload,
  });

  revalidatePath('/admin/classes');
  revalidatePath(`/admin/classes/${classId}/edit`);

  redirect('/admin/classes');
}