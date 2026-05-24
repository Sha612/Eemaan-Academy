// modules/auth/getUser.ts

import { jwtDecode } from 'jwt-decode'
import { Role } from './roles'

type JwtPayload = {
  sub: number
  role: Role
  iat: number
  exp: number
}

export type AuthUser = {
  id: number
  role: Role
}

export function getUserFromToken(token?: string): AuthUser | null {
  if (!token) return null

  try {
    const decoded = jwtDecode<JwtPayload>(token)

    return {
      id: decoded.sub,
      role: decoded.role,
    }
  } catch {
    return null
  }
}