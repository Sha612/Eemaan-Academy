// lib/attendance/attendance-types.ts

import type { LucideIcon } from 'lucide-react';

export type AttendanceStatus =
  | 'present'
  | 'absent'
  | 'late'
  | 'excused'
  | 'dropped';

export type AttendanceRecord = Record<number, AttendanceStatus | undefined>;

export type Student = {
  id: number;
  name: string;
  rollNumber: string;
};

export type AttendanceClass = {
  id: string;
  name: string;
  teacher: string;
  schedule: string;
};

export type AttendanceStatusOption = {
  label: string;
  value: AttendanceStatus;
  icon: LucideIcon;
  activeClass: string;
  inactiveClass: string;
};
