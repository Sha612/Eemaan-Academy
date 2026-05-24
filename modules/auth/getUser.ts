// modules/auth/getUser.ts
import { verifyToken } from './services';
import { User } from './types';
import { Role } from './roles';

export async function getUserFromToken(
  token: string | undefined,
): Promise<User | null> {
  if (!token) return null;

  const payload = await verifyToken(token);
  if (!payload) return null;
  // In a real application, you would fetch the user from the database using the payload information (e.g., user ID)
  // For this example, we'll return a mock user based on the token payload
  // You can customize this logic to fit your actual user data structure and database queries
  return {
    id: payload.id as string,
    email: payload.email as string,
    role: payload.role as Role,
  };
}
