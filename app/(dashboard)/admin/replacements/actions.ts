'use server';

import { revalidatePath } from 'next/cache';
import { serverApi } from '@/lib/server-api';

export async function expireReplacementAction(id: string) {
  await serverApi(`/replacements/${id}/expire`, {
    method: 'PATCH',
  });

  revalidatePath('/admin/replacements');
}