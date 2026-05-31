import type { ClassResponse } from '@/modules/classes/types'

export type EnrollmentStatus = 'active' | 'inactive' | 'dropped' | 'completed'

export type EnrollmentResponse = {
  id: number
  student: {
    id: number
    firstName: string
    lastName: string
    gender: string
    phoneNumber: string
    guardianName: string | null
    guardianPhoneNumber: string | null
    guardianEmail: string | null
    createdAt: string
    updatedAt: string
  }
  class: ClassResponse
  enrollmentDate: string
  enrollmentStatus: EnrollmentStatus
  notes: string | null
  createdAt: string
  updatedAt: string
}