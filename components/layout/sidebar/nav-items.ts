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
  ShieldCheck,
  UserPlus,
} from 'lucide-react';

import { Permission } from '@/modules/auth/permissions';

export const adminNavItems = [
  {
    title: 'Dashboard',
    href: '/admin',
    icon: LayoutDashboard,
    permission: Permission.VIEW_DASHBOARD,
  },
  {
    title: 'Users',
    href: '/admin/users',
    icon: Users,
    children: [
      {
        title: 'All Users',
        href: '/admin/users',
        permission: Permission.VIEW_USERS,
      },
      {
        title: 'Add New User',
        href: '/admin/users/new',
        icon: UserPlus,
        permission: Permission.CREATE_USER,
      },
    ],
  },
  {
    title: 'Students',
    icon: GraduationCap,
    permission: Permission.VIEW_STUDENTS,
    href: '/admin/students',
  },
  {
    title: 'Teachers',
    icon: Users,
    permission: Permission.VIEW_TEACHERS,
    href: '/admin/teachers',
    
  },
  {
    title: 'Classes',
    icon: BookOpen,
    permission: Permission.VIEW_CLASSES,
    children: [
      {
        title: 'All Classes',
        href: '/admin/classes',
        permission: Permission.VIEW_CLASSES,
      },
      {
        title: 'Create Class',
        href: '/admin/classes/new',
        permission: Permission.CREATE_CLASS,
      },
      {
        title: 'Assign Teacher',
        href: '/admin/classes/assign-teacher',
        permission: Permission.ASSIGN_TEACHER,
      },
      {
        title: 'Assign Students',
        href: '/admin/classes/assign-student',
        permission: Permission.ASSIGN_STUDENTS,
      },
    ],
  },
  {
    title: 'Announcements',
    href: '/admin/announcements',
    icon: Megaphone,
    permission: Permission.MANAGE_SETTINGS,
  },
  {
    title: 'Replacement Access',
    href: '/admin/replacements',
    icon: ShieldCheck,
  },
  {
    title: 'Attendance',
    icon: ClipboardCheck,
    permission: Permission.VIEW_ATTENDANCE,
    href: '/admin/attendance',
  },
];
