// modules/auth/rbac.ts

import { Role } from "./roles"
import { Permission } from "./permissions"

export const rolePermissions: Record<Role, Permission[]> = {
  [Role.ADMIN]: Object.values(Permission),

  [Role.HEAD_TEACHER]: [
    Permission.VIEW_DASHBOARD,
    Permission.VIEW_STUDENTS,
    Permission.VIEW_CLASSES,
    Permission.CREATE_CLASS,
    Permission.MARK_ATTENDANCE,
    Permission.EDIT_REPORT_CARD,
  ],

  [Role.TEACHER]: [
    Permission.VIEW_DASHBOARD,
    Permission.VIEW_STUDENTS,
    Permission.VIEW_CLASSES,
    Permission.MARK_ATTENDANCE,
    Permission.EDIT_REPORT_CARD,
  ],

  [Role.STUDENT]: [
    Permission.VIEW_DASHBOARD,
  ],
}

// modules/auth/rbac.ts

export function hasPermission(
  user: { role: Role } | null | undefined,
  permission: Permission
) {
  if (!user) return false

  const permissions = rolePermissions[user.role] || []
  return permissions.includes(permission)
}