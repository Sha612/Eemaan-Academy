// modules/auth/getUser.ts
import { verifyToken } from "./services";
import { User } from "./types";
import { Role } from "./roles";

export async function getUserFromToken(
  token: string | undefined
): Promise<User | null> {
  if (!token) return null;

  const payload = await verifyToken(token);
  if (!payload) return null;

  return {
    id: Number(payload.id),
    email: payload.email as string,
    role: payload.role as Role,
    isActive: payload.isActive as boolean,
    createdAt: payload.createdAt as string,
    updatedAt: payload.updatedAt as string,
  };
}