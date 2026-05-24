import Link from 'next/link';
import {
  AlertTriangle,
  Bell,
  BookOpen,
  CalendarDays,
  ClipboardCheck,
  FileText,
  FolderPlus,
  GraduationCap,
  Megaphone,
  ShieldCheck,
  UserCheck,
  UserCog,
  UserPlus,
  Users,
} from 'lucide-react';

export const metadata = {
  title: 'Admin Dashboard | Eemaan Academy',
};

type Stat = {
  label: string;
  value: string;
  description: string;
  icon: React.ElementType;
  iconBg: string;
};

type QuickAction = {
  label: string;
  description: string;
  href: string;
  icon: React.ElementType;
  iconBg: string;
};

type Activity = {
  title: string;
  description: string;
  time: string;
  status: 'success' | 'warning' | 'info';
};

type TodayClass = {
  className: string;
  subject: string;
  teacher: string;
  attendanceStatus: 'Marked' | 'Pending' | 'Replacement Active';
  time: string;
};

type ReplacementAccess = {
  teacher: string;
  className: string;
  access: string;
  expires: string;
  status: 'Active' | 'Pending';
};

export default function AdminDashboardPage() {
  const stats: Stat[] = [
    {
      label: 'Total Students',
      value: '245',
      description: '+12 students added this month',
      icon: Users,
      iconBg: 'bg-emerald-600',
    },
    {
      label: 'Active Teachers',
      value: '18',
      description: '2 replacement teachers today',
      icon: GraduationCap,
      iconBg: 'bg-blue-600',
    },
    {
      label: 'Classes Today',
      value: '9',
      description: '7 completed, 2 still running',
      icon: BookOpen,
      iconBg: 'bg-purple-600',
    },
    {
      label: 'Pending Actions',
      value: '5',
      description: 'Require admin review',
      icon: AlertTriangle,
      iconBg: 'bg-amber-600',
    },
  ];

  const quickActions: QuickAction[] = [
    {
      label: 'Create User Account',
      description: 'Add admin, teacher, student, or parent login',
      href: '/admin/users/new',
      icon: UserCog,
      iconBg: 'bg-slate-700',
    },
    {
      label: 'Add Student',
      description: 'Register a new student',
      href: '/admin/students/new',
      icon: UserPlus,
      iconBg: 'bg-emerald-600',
    },
    {
      label: 'Add Teacher',
      description: 'Create a teacher profile',
      href: '/admin/teachers/new',
      icon: UserCheck,
      iconBg: 'bg-blue-600',
    },
    {
      label: 'Create Class',
      description: 'Set up a new class or subject group',
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

  const todaysClasses: TodayClass[] = [
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

  const replacementAccess: ReplacementAccess[] = [
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

  const recentActivities: Activity[] = [
    {
      title: 'New student enrolled',
      description: 'Ahmed Khan was added to Class 5A',
      time: '2 hours ago',
      status: 'success',
    },
    {
      title: 'Attendance marked',
      description: 'Class 5A - Quran Recitation attendance completed',
      time: '3 hours ago',
      status: 'success',
    },
    {
      title: 'Replacement teacher access granted',
      description: 'Ustadh Omar received temporary access to Class 4A',
      time: '4 hours ago',
      status: 'info',
    },
    {
      title: 'Attendance pending',
      description: 'Class 3B - Islamic Studies still needs attendance',
      time: 'Today',
      status: 'warning',
    },
    {
      title: 'Report cards pending review',
      description: 'Class 4B report cards need admin review',
      time: 'Yesterday',
      status: 'warning',
    },
  ];

  return (
    <main className="space-y-6 p-6">
      {/* Page Header */}
      <section className="flex flex-col gap-3 rounded-2xl border border-[#ddd4aa]/70 bg-[#fbfaf4] p-6 shadow-sm md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-medium text-[#8a7a2f]">
            Eemaan Foundation
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

          <Link
            href="/admin/attendance"
            className="inline-flex items-center gap-2 rounded-xl border border-[#ddd4aa] bg-white px-4 py-2 text-sm font-medium text-[#4b5205] transition hover:bg-[#f1ead0]"
          >
            <ClipboardCheck size={16} />
            View Attendance
          </Link>
        </div>
      </section>

      {/* Stats */}
      <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon;

          return (
            <div
              key={stat.label}
              className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition hover:shadow-md"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-medium text-gray-600">
                    {stat.label}
                  </p>
                  <p className="mt-2 text-3xl font-semibold text-gray-950">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-xs text-gray-500">
                    {stat.description}
                  </p>
                </div>

                <div className={`rounded-xl p-3 ${stat.iconBg}`}>
                  <Icon size={22} className="text-white" />
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* Main Grid */}
      <section className="grid grid-cols-1 gap-6 xl:grid-cols-3">
        {/* Quick Actions */}
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <div className="mb-5">
            <h2 className="text-lg font-semibold text-gray-950">
              Admin Actions
            </h2>
            <p className="mt-1 text-sm text-gray-500">
              Common tasks you will use often.
            </p>
          </div>

          <div className="space-y-3">
            {quickActions.map((action) => {
              const Icon = action.icon;

              return (
                <Link
                  key={action.label}
                  href={action.href}
                  className="flex items-center gap-3 rounded-xl border border-gray-100 p-3 transition hover:border-[#ddd4aa] hover:bg-[#fbfaf4]"
                >
                  <div className={`rounded-lg p-2 ${action.iconBg}`}>
                    <Icon size={18} className="text-white" />
                  </div>

                  <div>
                    <p className="text-sm font-medium text-gray-950">
                      {action.label}
                    </p>
                    <p className="text-xs text-gray-500">
                      {action.description}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Today's Classes */}
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm xl:col-span-2">
          <div className="mb-5 flex items-start justify-between gap-4">
            <div>
              <h2 className="text-lg font-semibold text-gray-950">
                Today&apos;s Classes
              </h2>
              <p className="mt-1 text-sm text-gray-500">
                Track class status, assigned teachers, and attendance progress.
              </p>
            </div>

            <Link
              href="/admin/classes"
              className="text-sm font-medium text-[#4b5205] hover:underline"
            >
              View all
            </Link>
          </div>

          <div className="space-y-3">
            {todaysClasses.map((classItem) => (
              <div
                key={`${classItem.className}-${classItem.subject}`}
                className="grid gap-3 rounded-xl border border-gray-100 p-4 md:grid-cols-[1.3fr_1fr_auto]"
              >
                <div>
                  <p className="font-medium text-gray-950">
                    {classItem.className} - {classItem.subject}
                  </p>
                  <p className="mt-1 text-sm text-gray-500">
                    {classItem.teacher}
                  </p>
                </div>

                <div>
                  <p className="text-sm text-gray-500">Time</p>
                  <p className="text-sm font-medium text-gray-900">
                    {classItem.time}
                  </p>
                </div>

                <div>
                  <span
                    className={`inline-flex rounded-full px-3 py-1 text-xs font-medium ${
                      classItem.attendanceStatus === 'Marked'
                        ? 'bg-emerald-50 text-emerald-700'
                        : classItem.attendanceStatus === 'Pending'
                          ? 'bg-amber-50 text-amber-700'
                          : 'bg-blue-50 text-blue-700'
                    }`}
                  >
                    {classItem.attendanceStatus}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Attendance, Replacement Access, Reports */}
      <section className="grid grid-cols-1 gap-6 xl:grid-cols-3">
        {/* Attendance Overview */}
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <div className="mb-5 flex items-center gap-3">
            <div className="rounded-xl bg-emerald-600 p-3">
              <ClipboardCheck size={20} className="text-white" />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-gray-950">
                Attendance
              </h2>
              <p className="text-sm text-gray-500">Today&apos;s summary</p>
            </div>
          </div>

          <div className="space-y-4">
            <DashboardProgress label="Student Attendance" value="91%" />
            <DashboardProgress label="Teacher Attendance" value="94%" />
            <DashboardProgress label="Classes Marked" value="78%" />
          </div>

          <Link
            href="/admin/attendance"
            className="mt-5 inline-flex text-sm font-medium text-[#4b5205] hover:underline"
          >
            Open attendance overview
          </Link>
        </div>

        {/* Replacement Access */}
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm xl:col-span-2">
          <div className="mb-5 flex items-start justify-between gap-4">
            <div>
              <h2 className="text-lg font-semibold text-gray-950">
                Replacement Teacher Access
              </h2>
              <p className="mt-1 text-sm text-gray-500">
                Temporary access given when a teacher is absent.
              </p>
            </div>

            <Link
              href="/admin/replacements"
              className="text-sm font-medium text-[#4b5205] hover:underline"
            >
              Manage
            </Link>
          </div>

          <div className="space-y-3">
            {replacementAccess.map((item) => (
              <div
                key={`${item.teacher}-${item.className}`}
                className="rounded-xl border border-gray-100 p-4"
              >
                <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                  <div>
                    <p className="font-medium text-gray-950">{item.teacher}</p>
                    <p className="mt-1 text-sm text-gray-500">
                      {item.className}
                    </p>
                    <p className="mt-1 text-xs text-gray-500">
                      Access: {item.access}
                    </p>
                  </div>

                  <div className="text-left md:text-right">
                    <span
                      className={`inline-flex rounded-full px-3 py-1 text-xs font-medium ${
                        item.status === 'Active'
                          ? 'bg-emerald-50 text-emerald-700'
                          : 'bg-amber-50 text-amber-700'
                      }`}
                    >
                      {item.status}
                    </span>
                    <p className="mt-2 text-xs text-gray-500">
                      Expires: {item.expires}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Activity + Reports */}
      <section className="grid grid-cols-1 gap-6 xl:grid-cols-3">
        {/* Recent Activity */}
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm xl:col-span-2">
          <div className="mb-5">
            <h2 className="text-lg font-semibold text-gray-950">
              Recent Activity
            </h2>
            <p className="mt-1 text-sm text-gray-500">
              Latest important actions in the school system.
            </p>
          </div>

          <div className="space-y-4">
            {recentActivities.map((activity) => (
              <div
                key={`${activity.title}-${activity.time}`}
                className="flex gap-4 border-b border-gray-100 pb-4 last:border-0 last:pb-0"
              >
                <div
                  className={`mt-1 h-2.5 w-2.5 rounded-full ${
                    activity.status === 'success'
                      ? 'bg-emerald-500'
                      : activity.status === 'warning'
                        ? 'bg-amber-500'
                        : 'bg-blue-500'
                  }`}
                />

                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-950">
                    {activity.title}
                  </p>
                  <p className="mt-1 text-sm text-gray-500">
                    {activity.description}
                  </p>
                  <p className="mt-1 text-xs text-gray-400">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Reports + Notifications */}
        <div className="space-y-6">
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="mb-4 flex items-center gap-3">
              <div className="rounded-xl bg-purple-600 p-3">
                <FileText size={20} className="text-white" />
              </div>
              <div>
                <h2 className="text-lg font-semibold text-gray-950">Reports</h2>
                <p className="text-sm text-gray-500">Report card progress</p>
              </div>
            </div>

            <div className="space-y-3 text-sm">
              <div className="flex justify-between gap-3">
                <span className="text-gray-600">Class 5A</span>
                <span className="font-medium text-emerald-700">
                  Ready for review
                </span>
              </div>
              <div className="flex justify-between gap-3">
                <span className="text-gray-600">Class 4B</span>
                <span className="font-medium text-amber-700">Pending</span>
              </div>
              <div className="flex justify-between gap-3">
                <span className="text-gray-600">Class 2A</span>
                <span className="font-medium text-blue-700">In progress</span>
              </div>
            </div>

            <Link
              href="/admin/reports"
              className="mt-5 inline-flex text-sm font-medium text-[#4b5205] hover:underline"
            >
              View reports
            </Link>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="mb-4 flex items-center gap-3">
              <div className="rounded-xl bg-blue-600 p-3">
                <Bell size={20} className="text-white" />
              </div>
              <div>
                <h2 className="text-lg font-semibold text-gray-950">
                  Notifications
                </h2>
                <p className="text-sm text-gray-500">Recent alerts</p>
              </div>
            </div>

            <div className="space-y-3 text-sm text-gray-600">
              <p>Homework uploaded for Quran Class 5A.</p>
              <p>Attendance notification sent to parents.</p>
              <p>New announcement scheduled for tomorrow.</p>
            </div>

            <Link
              href="/admin/announcements"
              className="mt-5 inline-flex text-sm font-medium text-[#4b5205] hover:underline"
            >
              Manage announcements
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

function DashboardProgress({ label, value }: { label: string; value: string }) {
  const numericValue = Number(value.replace('%', ''));

  return (
    <div>
      <div className="mb-2 flex items-center justify-between gap-4">
        <p className="text-sm text-gray-600">{label}</p>
        <p className="text-sm font-medium text-gray-950">{value}</p>
      </div>

      <div className="h-2 rounded-full bg-gray-100">
        <div
          className="h-2 rounded-full bg-[#4b5205]"
          style={{ width: `${numericValue}%` }}
        />
      </div>
    </div>
  );
}
