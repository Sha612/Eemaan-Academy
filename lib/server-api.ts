// lib/server-api.ts
import axios, { AxiosError, AxiosRequestConfig } from 'axios';
import { cookies } from 'next/headers';

const API_URL = process.env.NEST_API_URL;

export async function serverApi<T>(
  path: string,
  options: AxiosRequestConfig = {},
): Promise<T> {
  if (!API_URL) {
    throw new Error('NEST_API_URL is not defined');
  }

  const cookieStore = await cookies();
  const token = cookieStore.get('token')?.value;

  try {
    const res = await axios.request<T>({
      baseURL: API_URL,
      url: path,
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
        ...options.headers,
      },
    });

    return res.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      const message = error.response?.data?.message;

      throw new Error(
        Array.isArray(message)
          ? message.join(', ')
          : message || `API error: ${error.response?.status || 'unknown'}`,
      );
    }

    throw error;
  }
}
