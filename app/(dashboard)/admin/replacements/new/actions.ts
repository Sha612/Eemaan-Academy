'use server';

import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';
import { serverApi } from '@/lib/server-api';

export async function createReplacementAction(formData: FormData) {
  const payload = {
    replacementTeacherId: Number(formData.get('replacementTeacherId')),
    classId: Number(formData.get('classId')),
    startDate: String(formData.get('startDate')),
    endDate: String(formData.get('endDate')),
    reason: String(formData.get('reason') || '').trim(),
  };

  await serverApi('/replacements', {
    method: 'POST',
    data: payload,
  });

  revalidatePath('/admin/replacements');
  redirect('/admin/replacements');
}