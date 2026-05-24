'use server';

import { redirect } from 'next/navigation';
import { readJsonFile, writeJsonFile } from '@/lib/dev-store';

type StoredClass = {
  id: string;
  name: string;
  subject: string;
  level?: string;
  description?: string;
  status?: 'ACTIVE' | 'INACTIVE';
  primaryTeacherId: string | null;
  createdAt?: string;
};

type StoredUser = {
  id: string;
  name: string;
  email: string;
  role: string;
};

export async function assignTeacherAction(formData: FormData) {
  const classId = String(formData.get('classId') || '').trim();
  const teacherId = String(formData.get('teacherId') || '').trim();

  if (!classId) throw new Error('Class is required');
  if (!teacherId) throw new Error('Teacher is required');

  const classes = await readJsonFile<StoredClass[]>('classes.json', []);
  const users = await readJsonFile<StoredUser[]>('users.json', []);

  const teacher = users.find(
    (user) =>
      user.id === teacherId &&
      (user.role === 'TEACHER' || user.role === 'HEAD_TEACHER'),
  );

  if (!teacher) {
    throw new Error('Selected teacher does not exist');
  }

  const updatedClasses = classes.map((classItem) => {
    if (classItem.id !== classId) {
      return classItem;
    }

    return {
      ...classItem,
      primaryTeacherId: teacherId,
    };
  });

  await writeJsonFile('classes.json', updatedClasses);

  redirect('/admin/classes');
}
