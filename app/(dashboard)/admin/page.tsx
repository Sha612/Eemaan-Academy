import Link from 'next/link';
import {
  AlertTriangle,
  Bell,
  BookOpen,
  CalendarDays,
  ClipboardCheck,
  FolderPlus,
  GraduationCap,
  Megaphone,
  ShieldCheck,
  UserCog,
  Users,
} from 'lucide-react';

import { ActivityItem } from '@/components/dashboard/ActivityItem';
import { DashboardProgress } from '@/components/dashboard/DashboardProgress';
import { QuickActionCard } from '@/components/dashboard/QuickActionCard';
import { ReplacementAccessCard } from '@/components/dashboard/ReplacementAccessCard';
import { StatCard } from '@/components/dashboard/StatCard';
import { TodayClassCard } from '@/components/dashboard/TodayClassCard';
import { getClasses } from '@/modules/classes/services';
import { getStudents } from '@/modules/students/services';
import { getTeachers } from '@/modules/teachers/services';
import { getRecentActivities } from '@/modules/dashboard/activity';

import type {
  DashboardAction,
  DashboardReplacementAccess,
  DashboardStat,
  DashboardTodayClass,
} from '@/components/dashboard/types';

export const metadata = {
  title: 'Admin Dashboard | Eemaan Academy',
};

export default async function AdminDashboardPage() {
  const [studentsResponse, teachersResponse, classesResponse] =
    await Promise.all([getStudents(), getTeachers(), getClasses()]);

  const totalStudents = studentsResponse.meta.total;
  const totalTeachers = teachersResponse.meta.total;
  const totalClasses = classesResponse.meta.total;
  const recentActivities = await getRecentActivities()

  const stats: DashboardStat[] = [
    {
      label: 'Total Students',
      value: String(totalStudents),
      description: 'Fetched from students table',
      icon: Users,
      iconBg: 'bg-emerald-600',
    },
    {
      label: 'Active Teachers',
      value: String(totalTeachers),
      description: 'Fetched from teachers table',
      icon: GraduationCap,
      iconBg: 'bg-blue-600',
    },
    {
      label: 'Total Classes',
      value: String(totalClasses),
      description: 'Fetched from classes table',
      icon: BookOpen,
      iconBg: 'bg-purple-600',
    },
    {
      label: 'Pending Actions',
      value: '0',
      description: 'No pending actions endpoint available',
      icon: AlertTriangle,
      iconBg: 'bg-amber-600',
    },
  ];

  const quickActions: DashboardAction[] = [
    {
      label: 'Create User Account',
      description: 'Add admin, teacher, student, or parent login',
      href: '/admin/users/new',
      icon: UserCog,
      iconBg: 'bg-slate-700',
    },
    {
      label: 'View Student',
      description: 'View student details and records',
      href: '/admin/students',
      icon: GraduationCap,
      iconBg: 'bg-emerald-600',
    },
    {
      label: 'View Teacher',
      description: 'View teacher details and records',
      href: '/admin/teachers',
      icon: Users,
      iconBg: 'bg-blue-600',
    },
    {
      label: 'Create Class',
      description: 'Set up a new class',
      href: '/admin/classes/new',
      icon: FolderPlus,
      iconBg: 'bg-purple-600',
    },
    {
      label: 'Assign Teacher',
      description: 'Assign a teacher to a class',
      href: '/admin/classes/assign-teacher',
      icon: ShieldCheck,
      iconBg: 'bg-indigo-600',
    },
    {
      label: 'Grant Replacement Access',
      description: 'Allow temporary class access',
      href: '/admin/replacements',
      icon: CalendarDays,
      iconBg: 'bg-amber-600',
    },
  ];

  const todaysClasses: DashboardTodayClass[] = [
    {
      className: 'Class 5A',
      subject: 'Quran Recitation',
      teacher: 'Ustadh Ibrahim',
      attendanceStatus: 'Marked',
      time: '08:30 - 09:30',
    },
    {
      className: 'Class 3B',
      subject: 'Islamic Studies',
      teacher: 'Ustadha Aisha',
      attendanceStatus: 'Pending',
      time: '09:45 - 10:45',
    },
    {
      className: 'Class 4A',
      subject: 'Arabic',
      teacher: 'Replacement: Ustadh Omar',
      attendanceStatus: 'Replacement Active',
      time: '11:00 - 12:00',
    },
  ];

  const replacementAccess: DashboardReplacementAccess[] = [
    {
      teacher: 'Ustadh Omar',
      className: 'Class 4A - Arabic',
      access: 'Attendance + homework view',
      expires: 'Today, 12:30 PM',
      status: 'Active',
    },
    {
      teacher: 'Ustadha Maryam',
      className: 'Class 2B - Quran',
      access: 'Attendance only',
      expires: 'Awaiting approval',
      status: 'Pending',
    },
  ];

  return (
    <main className="space-y-6 p-6">
      <section className="flex flex-col gap-3 rounded-2xl border border-[#ddd4aa]/70 bg-[#fbfaf4] p-6 shadow-sm md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-medium text-[#8a7a2f]">
            Eemaan Institute
          </p>
          <h1 className="mt-1 text-2xl font-semibold tracking-tight text-[#2f3303]">
            Admin Dashboard
          </h1>
          <p className="mt-1 text-sm text-[#6f6a4f]">
            Manage students, teachers, classes, attendance, replacement access,
            reports, and announcements from one place.
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          <Link
            href="/admin/announcements/new"
            className="inline-flex items-center gap-2 rounded-xl bg-[#4b5205] px-4 py-2 text-sm font-medium text-white transition hover:bg-[#2f3303]"
          >
            <Megaphone size={16} />
            New Announcement
          </Link>
        </div>
      </section>

      <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => (
          <StatCard key={stat.label} {...stat} />
        ))}
      </section>

      <section>
        <div className="mb-4 flex items-center justify-between">
          <div>
            <h2 className="text-lg font-semibold text-[#2f3303]">
              Quick Actions
            </h2>
            <p className="text-sm text-[#6f6a4f]">
              Common administrative tasks.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {quickActions.map((action) => (
            <QuickActionCard key={action.label} {...action} />
          ))}
        </div>
      </section>

      <section className="grid grid-cols-1 gap-6 xl:grid-cols-3">
        <div className="space-y-4 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm xl:col-span-2">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold text-[#2f3303]">
                Today&apos;s Classes
              </h2>
              <p className="text-sm text-[#6f6a4f]">
                Live overview of scheduled classes.
              </p>
            </div>

            <BookOpen size={20} className="text-[#8a7a2f]" />
          </div>

          <div className="space-y-3">
            {todaysClasses.map((classItem) => (
              <TodayClassCard
                key={`${classItem.className}-${classItem.subject}`}
                {...classItem}
              />
            ))}
          </div>
        </div>

        <div className="space-y-4 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold text-[#2f3303]">
                Attendance Progress
              </h2>
              <p className="text-sm text-[#6f6a4f]">Daily completion status.</p>
            </div>

            <ClipboardCheck size={20} className="text-[#8a7a2f]" />
          </div>

          <DashboardProgress label="Student Attendance" value={78} />
          <DashboardProgress label="Teacher Attendance" value={92} />
          <DashboardProgress label="Report Updates" value={61} />
        </div>
      </section>

      <section className="grid grid-cols-1 gap-6 xl:grid-cols-2">
        <div className="space-y-4 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold text-[#2f3303]">
                Replacement Access
              </h2>
              <p className="text-sm text-[#6f6a4f]">
                Temporary teacher permissions.
              </p>
            </div>

            <ShieldCheck size={20} className="text-[#8a7a2f]" />
          </div>

          <div className="space-y-3">
            {replacementAccess.map((item) => (
              <ReplacementAccessCard
                key={`${item.teacher}-${item.className}`}
                {...item}
              />
            ))}
          </div>
        </div>

        <div className="space-y-4 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold text-[#2f3303]">
                Recent Activity
              </h2>
              <p className="text-sm text-[#6f6a4f]">Latest system updates.</p>
            </div>

            <Bell size={20} className="text-[#8a7a2f]" />
          </div>

          <div className="space-y-3">
            {recentActivities.map((activity) => (
              <ActivityItem key={activity.id} {...activity} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
