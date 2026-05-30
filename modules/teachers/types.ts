export type Gender = 'male' | 'female'

export interface TeacherUser {
  email: string
  password: string
  role: string
}

export interface UpdateTeacherUser {
  email?: string
  password?: string
}

export interface UserResponse {
  id: number
  email: string
  role: string
  isActive: boolean
  createdAt: string
  updatedAt: string
}
export interface CreateTeacher {
  firstName: string
  lastName: string
  gender: Gender
  phoneNumber: string
  specialization: string
  user: TeacherUser
}

export interface UpdateTeacher {
  firstName?: string
  lastName?: string
  gender?: Gender
  phoneNumber?: string
  specialization?: string
  user?: UpdateTeacherUser
  
}

export interface TeacherResponse {
  id: number
  firstName: string
  lastName: string
  gender: Gender
  phoneNumber: string
  createdAt: string
  updatedAt: string
  specialization: string
  user: UserResponse

}

export interface PaginatedTeachersResponse {
  data: TeacherResponse[]
  meta: {
    total: number
    page: number
    limit: number
    totalPages: number
  }
}