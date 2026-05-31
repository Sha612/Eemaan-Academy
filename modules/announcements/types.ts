export type AnnouncementType =
  | 'school-wide'
  | 'class-specific'
  | 'teacher-only';

export type AnnouncementPriority = 'normal' | 'important' | 'urgent';

export interface AnnouncementClass {
  id: number;
  name: string;
  subject: string;
  level: number;
  description?: string | null;
  day?: string | null;
  startTime?: string | null;
  endTime?: string | null;
  meetingUrl?: string | null;
  createdAt?: string;
  updatedAt?: string;
}

export interface AnnouncementResponse {
  id: number;
  title: string;
  message: string;
  type: AnnouncementType;
  priority: AnnouncementPriority;
  class: AnnouncementClass | null;
  createdAt: string;
  updatedAt: string;
}

export type PaginatedAnnouncementsResponse = {
  data: AnnouncementResponse[];
  meta: {
    total: number;
    page: number;
    limit: number;
    totalPages: number;
  };
};