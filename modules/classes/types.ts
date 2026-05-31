export type ClassTeacher = {
  id: number;
  firstName: string;
  lastName: string;
} | null;

export interface ClassResponse {
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
  createdAt: string;
  updatedAt: string;
  teacher: ClassTeacher;
  studentsCount?: number;
  status?: string;
}

export type PaginatedClassesResponse = {
  data: ClassResponse[]
  meta: {
    total: number
    page: number
    limit: number
    totalPages: number
  }
}