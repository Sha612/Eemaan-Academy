import {
  LayoutDashboard,
  Users,
  BookOpen,
} from "lucide-react"

import type { LucideIcon } from "lucide-react"

import { Permission } from "../modules/auth/permissions"
import { hasPermission } from "../modules/auth/rbac"
import { User } from "@/modules/auth/types"

export type NavChildItem = {
  title: string
  href: string
  permission?: Permission
}

export type NavItem = {
  title: string
  href?: string
  icon: LucideIcon
  permission?: Permission
  children?: NavChildItem[]
}

export function filterNavItems(items: NavItem[], user?: User): NavItem[] {
  if (!user) return []

  return items
    .map((item) => {
      const canViewParent = item.permission
        ? hasPermission(user, item.permission)
        : true

      if (item.children) {
        const children = item.children.filter((child) =>
          child.permission ? hasPermission(user, child.permission) : true
        )

        if (!canViewParent && children.length === 0) {
          return null
        }

        if (children.length === 0) {
          return null
        }

        return {
          ...item,
          children,
        }
      }

      if (!canViewParent) {
        return null
      }

      return item
    })
    .filter(Boolean) as NavItem[]
}