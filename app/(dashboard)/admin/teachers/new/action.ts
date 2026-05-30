'use server'

import { redirect } from 'next/navigation'
import { createTeacher } from '@/modules/teachers/services'
import { Role } from '@/modules/auth/roles'
import { Gender } from '@/modules/teachers/types'

export async function createTeacherAction(formData: FormData) {
  const body = {
    firstName: String(formData.get('firstName') || ''),
    lastName: String(formData.get('lastName') || ''),
    gender: String(formData.get('gender') || '') as Gender,
    phoneNumber: String(formData.get('phoneNumber') || ''),
    user: {
      email: String(formData.get('email') || ''),
      password: String(formData.get('password') || ''),
      role: Role.TEACHER,
    },
  }

  await createTeacher(body)

  redirect('/admin/teachers')
}