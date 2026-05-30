export type Gender = 'male' | 'female';

export interface StudentUser {
  email: string;
  password: string;
  role: string;
}

export interface UpdateStudentUser {
  email?: string;
  password?: string;
}

export interface UserResponse {
  id: number;
  email: string;
  role: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface StudentClass {
  id: number;
  name: string;
  subject: string;
  level: number;
  schedule?: string | null;
  meetingUrl?: string | null;
}

export interface CreateStudent {
  firstName: string;
  lastName: string;
  gender: Gender;
  phoneNumber: string;
  guardianName: string;
  guardianPhoneNumber: string;
  guardianEmail: string;
  user: StudentUser;
}

export interface UpdateStudent {
  firstName?: string;
  lastName?: string;
  gender?: Gender;
  phoneNumber?: string;
  guardianName?: string;
  guardianPhoneNumber?: string;
  guardianEmail?: string;
  user?: UpdateStudentUser;
}

export interface StudentResponse {
  id: number;
  firstName: string;
  lastName: string;
  gender: Gender;
  phoneNumber: string;
  guardianName: string;
  guardianPhoneNumber: string;
  guardianEmail: string;
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