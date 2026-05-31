'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { serverApi } from '@/lib/server-api';
import { AttendanceRecord } from '@/modules/attendance/types';

export async function saveClassAttendanceAction(
  classId: number,
  formData: FormData,
) {
  const rawAttendance = String(formData.get('attendance') || '{}');
  const rawOriginalAttendance = String(
    formData.get('originalAttendance') || '{}',
  );

  const attendance = JSON.parse(rawAttendance) as AttendanceRecord;
  const originalAttendance = JSON.parse(
    rawOriginalAttendance,
  ) as AttendanceRecord;

  const newEntries = Object.entries(attendance).filter(
    ([studentId, status]) =>
      status && originalAttendance[Number(studentId)] === undefined,
  );

  await Promise.all(
    newEntries.map(([studentId, status]) =>
      serverApi('/attendance', {
        method: 'POST',
        data: {
          studentId: Number(studentId),
          classId,
          status,
        },
      }),
    ),
  );

  revalidatePath(`/admin/attendance/class/${classId}`);
  redirect('/admin/attendance');
}