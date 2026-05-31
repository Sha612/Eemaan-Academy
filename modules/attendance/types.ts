import { LucideIcon } from 'lucide-react';
import { ClassResponse } from '@/modules/classes/types';
export type AttendanceClass = {
  id: string;
  name: string;
  teacher: string;
  schedule: string;
};
export type AttendanceStatus =
  | 'present'
  | 'absent'
  | 'late'
  | 'excused'
  | 'dropped';

export type AttendanceRecord = Record<number, AttendanceStatus>;

export type AttendanceStudent = {
  id: number;
  firstName: string;
  lastName: string;
  gender: string;
  phoneNumber: string;
  guardianName: string | null;
  guardianPhoneNumber: string | null;
  guardianEmail: string | null;
  createdAt: string;
  updatedAt: string;
};

export type AttendanceStatusOption = {
  label: string;
  value: AttendanceStatus;
  icon: LucideIcon;
  activeClass: string;
  inactiveClass: string;
};

export interface AttendanceResponse {
  id: number;
  status: AttendanceStatus;
  date?: string;
  createdAt: string;
  updatedAt: string;
  student: AttendanceStudent;
  class: ClassResponse;
}

export interface EnrollmentResponse {
  id: number;
  enrollmentStatus: 'active' | 'completed' | 'dropped';
  notes?: string | null;
  student: AttendanceStudent;
  class: ClassResponse;
}
export type AttendanceCompletionStatus = 'completed' | 'pending';

export interface AttendanceClassOverview {
  id: number;
  className: string;
  teacher: string;
  time: string;
  totalStudents: number;
  present: number;
  absent: number;
  late: number;
  status: AttendanceCompletionStatus;
}
