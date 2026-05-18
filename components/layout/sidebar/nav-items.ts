//Keep your permissions inside the nav items. 
// This way, you can easily check permissions when rendering the 
// sidebar and hide items that the user doesn't have access to. 
// It also keeps your permission logic centralized and 
// easier to manage as your application grows.
import {
  LayoutDashboard,
  Users,
  Megaphone,
  BookOpen,
  ClipboardCheck,
  GraduationCap,
  FileText,
  Settings,
  ShieldCheck,
} from "lucide-react"

import { Permission } from "@/modules/auth/permissions"

export const adminNavItems = [
  {
    title: "Dashboard",
    href: "/admin",
    icon: LayoutDashboard,
    permission: Permission.VIEW_DASHBOARD,
  },
  {
    title: "Students",
    icon: GraduationCap,
    permission: Permission.VIEW_STUDENTS,
    children: [
      {
        title: "All Students",
        href: "/admin/students",
        permission: Permission.VIEW_STUDENTS,
      },
      {
        title: "Add Student",
        href: "/admin/students/new",
        permission: Permission.CREATE_STUDENT,
      },
    ],
  },
  {
    title: "Teachers",
    icon: Users,
    permission: Permission.VIEW_TEACHERS,
    children: [
      {
        title: "All Teachers",
        href: "/admin/teachers",
        permission: Permission.VIEW_TEACHERS,
      },
      {
        title: "Add Teacher",
        href: "/admin/teachers/new",
        permission: Permission.CREATE_TEACHER,
      },
    ],
  },
  {
    title: "Classes",
    icon: BookOpen,
    permission: Permission.VIEW_CLASSES,
    children: [
      {
        title: "All Classes",
        href: "/admin/classes",
        permission: Permission.VIEW_CLASSES,
      },
      {
        title: "Create Class",
        href: "/admin/classes/new",
        permission: Permission.CREATE_CLASS,
      },
      {
        title: "Assign Teacher",
        href: "/admin/classes/assign-teacher",
        permission: Permission.ASSIGN_TEACHER,
      },
      {
        title:"Assign Students",
        href:"/admin/classes/assign-student",
        permission: Permission.ASSIGN_STUDENTS,
      }
    ],
  },
  {
    title: "Announcements",
    href: "/admin/announcements",
    icon: Megaphone,
     permission: Permission.MANAGE_SETTINGS,
  },
  {
    title: "Replacement Access",
    href: "/admin/replacements",
    icon: ShieldCheck,
  },
  {
    title: "Attendance",  
    icon: ClipboardCheck,
    permission: Permission.VIEW_ATTENDANCE,
    children: [
      {
        title: "Attendance Overview",
        href: "/admin/attendance/overview",
        permission: Permission.VIEW_ATTENDANCE,
      },
      {
        title: "Mark Attendance",
        href: "/admin/attendance",
        permission: Permission.MARK_ATTENDANCE,
      },
    ],
  },
]