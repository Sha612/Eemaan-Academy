'use server';

import { revalidatePath } from 'next/cache';
import { assignStudentToClass } from '@/modules/enrollments/services';

export type AssignStudentState = {
  success: boolean;
  message: string;
};

export async function assignStudentAction(
  prevState: AssignStudentState,
  formData: FormData,
): Promise<AssignStudentState> {
  try {
    const studentId = Number(formData.get('studentId'));
    const classId = Number(formData.get('classId'));
    const notes = String(formData.get('notes') || '').trim();

    if (!studentId || !classId) {
      return { success: false, message: 'Student and class are required.' };
    }

    await assignStudentToClass(studentId, classId, notes);
    revalidatePath('/admin/classes');

    return { success: true, message: 'Student assigned successfully.' };
  } catch (error) {
    return {
      success: false,
      message:
        error instanceof Error
          ? error.message
          : 'Failed to assign student to class.',
    };
  }

}