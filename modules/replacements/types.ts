export type ReplacementStatus = 'active' | 'expired' | 'upcoming';

export type ReplacementTeacher = {
  id: number;
  firstName: string;
  lastName: string;
  gender: string;
  phoneNumber: string;
  specialization: string;
  createdAt: string;
  updatedAt: string;
};

export type ReplacementClass = {
  id: number;
  name: string;
  subject: string;
  level: number;
  description: string | null;
  day: string;
  startTime: string;
  endTime: string;
  meetingUrl: string | null;
  createdAt: string;
  updatedAt: string;
};

export type ReplacementResponse = {
  id: number;
  replacementTeacher: ReplacementTeacher;
  class: ReplacementClass;
  startDate: string;
  endDate: string;
  status: ReplacementStatus;
  reason: string;
  createdAt: string;
};

export type CreateReplacementPayload = {
  replacementTeacherId: number;
  classId: number;
  startDate: string;
  endDate: string;
  reason: string;
};

export type PaginatedReplacementsResponse = {
  data: ReplacementResponse[];
  meta: {
    total: number;
    page: number;
    limit: number;
    totalPages: number;
  };
};