'use server';

import axios, { AxiosError } from 'axios';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { Role } from '@/modules/auth/roles';
import { LoginResponse } from '@/modules/auth/types';

type LoginState = { error: string };

const API_URL = process.env.NEST_API_URL;

function getDashboardPath(role: Role) {
  if (role === Role.ADMIN) return '/admin';
  if (role === Role.TEACHER || role === Role.HEAD_TEACHER) return '/teacher';
  if (role === Role.STUDENT) return '/student';

  return '/login';
}

export async function loginAction(
  prevState: LoginState,
  formData: FormData,
): Promise<LoginState> {
  if (!API_URL) {
    return { error: 'Server API URL is not configured' };
  }

  const email = String(formData.get('email') || '');
  const password = String(formData.get('password') || '');

  try {
    const res = await axios.post<LoginResponse>(
      `${API_URL}/auth/login`,
      { email, password },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );

    const data = res.data;

    if (!data.accessToken || !data.user?.role) {
      return {
        error: 'Invalid login response from server',
      };
    }

    const cookieStore = await cookies();

    cookieStore.set('token', data.accessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      maxAge: 60 * 60 * 24 * 7,
    });

    cookieStore.set('role', data.user.role, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      maxAge: 60 * 60 * 24 * 7,
    });
  } catch (error) {
    if (error instanceof AxiosError) {
      return {
        error: 'Invalid email or password',
      };
    }

    return {
      error: 'Something went wrong during login',
    };
  }

  redirect(getDashboardPath((await cookies()).get('role')?.value as Role));
}
