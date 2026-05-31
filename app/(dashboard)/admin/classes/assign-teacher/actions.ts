'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { serverApi } from '@/lib/server-api';

export async function assignTeacherAction(formData: FormData) {
  const classId = Number(formData.get('classId'));
  const teacherId = Number(formData.get('teacherId'));

  await serverApi(`/classes/${classId}/teacher`, {
    method: 'PATCH',
    data: {
      teacherId,
    },
  });

  revalidatePath('/admin/classes');
  revalidatePath('/admin/teachers');

  redirect('/admin/classes');
}
