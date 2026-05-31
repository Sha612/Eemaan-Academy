import type { LucideIcon } from 'lucide-react'

export type DashboardStat = {
  label: string
  value: string
  description: string
  icon: LucideIcon
  iconBg: string
}

export type DashboardAction = {
  label: string
  description: string
  href: string
  icon: LucideIcon
  iconBg: string
}

export type DashboardActivity = {
  id: string
  title: string
  description: string
  time: string
  status: 'success' | 'warning' | 'info'
}

export type DashboardTodayClass = {
  className: string
  subject: string
  teacher: string
  attendanceStatus: 'Marked' | 'Pending' | 'Replacement Active'
  time: string
}

export type DashboardReplacementAccess = {
  teacher: string
  className: string
  access: string
  expires: string
  status: 'Active' | 'Pending'
}