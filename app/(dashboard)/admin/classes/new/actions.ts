'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { serverApi } from '@/lib/server-api';

export async function createClassAction(formData: FormData) {
  const payload = {
    name: String(formData.get('name') || '').trim(),
    subject: String(formData.get('subject') || '').trim(),
    level: Number(formData.get('level')),
    day: String(formData.get('day') || '')
      .trim()
      .toUpperCase(),
    startTime: String(formData.get('startTime') || '').trim(),
    endTime: String(formData.get('endTime') || '').trim(),
    meetingUrl: String(formData.get('meetingUrl') || '').trim() || null,
  };
  console.log('Creating class with payload:', payload);

  await serverApi('/classes', { method: 'POST', data: payload });

  revalidatePath('/admin/classes');
  redirect('/admin/classes');
}
