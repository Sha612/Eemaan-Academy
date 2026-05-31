// modules/auth/getUserFromSession.ts
import { cookies } from 'next/headers';

export async function getUserFromSession() {
  try{
    const cookieStore = await cookies();

  const name = cookieStore.get('name')?.value;
  const email = cookieStore.get('email')?.value;
  const role = cookieStore.get('role')?.value;

  return {
    name,
    email,
    role,
  };
  }catch (error) {
    console.error('Error retrieving user from session:', error);
    return null;
  }
  
}