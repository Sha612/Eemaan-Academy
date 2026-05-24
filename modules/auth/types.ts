// modules/auth/types.ts

import { Role } from './roles';

export interface User {
  id: number
  email: string
  role: Role
  isActive: boolean
  createdAt: string
  updatedAt: string
}
