export type Gender = 'male' | 'female';
export type UserRole = 'admin' | 'head_teacher' | 'teacher' | 'student';
export type EnrollmentStatus = 'active' | 'completed' | 'dropped';

export interface CreateStudentUser {
  email: string;
  password: string;
  role: UserRole;
}

export interface UpdateStudentUser {
  email?: string;
  password?: string;
}

export interface UserResponse {
  id: number;
  email: string;
  role: UserRole;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface StudentClass {
  id: number;
  name: string;
  subject: string;
  level: number;
  description?: string | null;
  day?: string | null;
  startTime?: string | null;
  endTime?: string | null;
  schedule?: string | null;
  meetingUrl?: string | null;
  createdAt?: string;
  updatedAt?: string;
}

export interface CreateStudent {
  firstName: string;
  lastName: string;
  gender: Gender;
  phoneNumber: string;
  guardianName?: string | null;
  guardianPhoneNumber?: string | null;
  guardianEmail?: string | null;
  user: CreateStudentUser;
}

export interface UpdateStudent {
  firstName?: string;
  lastName?: string;
  gender?: Gender;
  phoneNumber?: string;
  guardianName?: string | null;
  guardianPhoneNumber?: string | null;
  guardianEmail?: string | null;
  user?: UpdateStudentUser;
}

export interface StudentResponse {
  id: number;
  firstName: string;
  lastName: string;
  gender: Gender;
  phoneNumber: string;
  guardianName: string | null;
  guardianPhoneNumber: string | null;
  guardianEmail: string | null;
  createdAt: string;
  updatedAt: string;
  class: StudentClass | null;
  user: UserResponse;
}

export interface PaginatedStudentsResponse {
  data: StudentResponse[];
  meta: {
    total: number;
    page: number;
    limit: number;
    totalPages: number;
  };
}

export interface StudentEnrollment {
  id: number;
  enrollmentDate: string;
  enrollmentStatus: EnrollmentStatus;
  notes?: string | null;
  student: StudentResponse;
  class: StudentClass;
}