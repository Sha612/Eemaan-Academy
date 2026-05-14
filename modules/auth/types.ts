// modules/auth/types.ts

import { Role } from "./roles"

export interface User {
  id: string
  email: string
  role: Role
}