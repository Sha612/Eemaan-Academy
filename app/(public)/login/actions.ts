'use server'

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { Role } from '@/modules/auth/roles'
import { LoginResponse } from '@/modules/auth/types'

type LoginState = {
  error: string
}

const API_URL = "https://eemaan-foundation-backend-production.up.railway.app"

function getDashboardPath(role: Role) {
  if (role === Role.ADMIN) return '/admin'
  if (role === Role.TEACHER || role === Role.HEAD_TEACHER) return '/teacher'
  if (role === Role.STUDENT) return '/student'

  return '/login'
}

export async function loginAction(
  prevState: LoginState,
  formData: FormData
): Promise<LoginState> {
  const email = String(formData.get('email') || '')
  const password = String(formData.get('password') || '')

  const res = await fetch(`${API_URL}/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
    cache: 'no-store',
  })

  if (!res.ok) {
    return {
      error: 'Invalid email or password',
    }
  }
  const data: LoginResponse = await res.json()

  if (!data.accessToken || !data.user?.role) {
    return {
      error: 'Invalid login response from server',
    }
  }

  const cookieStore = await cookies()

  cookieStore.set('token', data.accessToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: 60 * 60 * 24 * 7,
  })

  cookieStore.set('role', data.user.role, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: 60 * 60 * 24 * 7,
  })

  redirect(getDashboardPath(data.user.role))
}
