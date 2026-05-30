'use server';
import axios from 'axios'

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { getServerApi } from '@/lib/server-api';

export async function createUserAction(formData: FormData) {
  try {
    const role = String(formData.get('role'));

    const user = {
      email: String(formData.get('email')),
      password: String(formData.get('password')),
      role,
    };

    let endpoint = '';
    let body: unknown;

    if (role === 'student') {
      endpoint = '/students';

      body = {
        firstName: String(formData.get('firstName')),
        lastName: String(formData.get('lastName')),
        gender: String(formData.get('gender')),
        phoneNumber: String(formData.get('phoneNumber')),
        guardianName: String(formData.get('guardianName')),
        guardianPhoneNumber: String(formData.get('guardianPhoneNumber')),
        guardianEmail: String(formData.get('guardianEmail')),
        user,
      };
    } else if (role === 'teacher' || role === 'head teacher') {
      endpoint = '/teachers';

      body = {
        firstName: String(formData.get('firstName')),
        lastName: String(formData.get('lastName')),
        gender: String(formData.get('gender')),
        phoneNumber: String(formData.get('phoneNumber')),
        specialization: String(formData.get('specialization')),
        user,
      };
    } else if (role === 'admin') {
      endpoint = '/users';

      body = user;
    } else {
      throw new Error('Invalid role selected');
    }

    console.log('Create user payload:', body);

    const serverApi = await getServerApi();

    await serverApi.post(endpoint, body);
  } catch (error) {
  if (axios.isAxiosError(error)) {
    console.error('Create user backend error:', error.response?.data)
    throw new Error(
      Array.isArray(error.response?.data?.message)
        ? error.response.data.message.join(', ')
        : error.response?.data?.message || 'Create user failed'
    )
  }

  throw new Error('Something went wrong while creating the user')
}

  revalidatePath('/admin/users');
  revalidatePath('/admin/students');
  revalidatePath('/admin/teachers');

  redirect('/admin/users');
}
