// lib/server-api.ts

import { cookies } from 'next/headers';
import { api } from './axios';

export async function getServerApi() {
  const cookieStore = await cookies();
  const token = cookieStore.get('token')?.value;

  if (!token) {
    throw new Error('Authentication required');
  }

  return {
    get: <T>(url: string, config = {}) =>
      api.get<T>(url, {
        ...config,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),

    post: <T>(url: string, data?: unknown, config = {}) =>
      api.post<T>(url, data, {
        ...config,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),

    patch: <T>(url: string, data?: unknown, config = {}) =>
      api.patch<T>(url, data, {
        ...config,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),

    delete: <T>(url: string, config = {}) =>
      api.delete<T>(url, {
        ...config,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
  };
}
