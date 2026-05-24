// lib/attendance/attendance-utils.ts

import type { AttendanceRecord } from './attendance-types';

export function getAttendanceStats(
  attendance: AttendanceRecord,
  totalStudents: number,
) {
  const values = Object.values(attendance);

  const markedCount = values.filter(Boolean).length;
  const remainingCount = totalStudents - markedCount;

  const presentCount = values.filter((status) => status === 'present').length;
  const absentCount = values.filter((status) => status === 'absent').length;
  const lateCount = values.filter((status) => status === 'late').length;
  const excusedCount = values.filter((status) => status === 'excused').length;
  const droppedCount = values.filter((status) => status === 'dropped').length;

  const progressPercentage =
    totalStudents === 0 ? 0 : Math.round((markedCount / totalStudents) * 100);

  return {
    markedCount,
    remainingCount,
    presentCount,
    absentCount,
    lateCount,
    excusedCount,
    droppedCount,
    progressPercentage,
  };
}

export function getInitials(name: string) {
  return name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();
}
