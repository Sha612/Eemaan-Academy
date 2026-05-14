// app/attendance/overview/page.tsx
import {
  CalendarDays,
} from "lucide-react"
import { PageShell } from "@/components/layout/pageShell"
import { PageHeader } from "@/components/layout/PageHeader"


import { classAttendance, teacherAttendance } from "@/lib/constants"
import { AttendanceStats } from "@/components/admin/attendance/attendanceStats"
import { Alert } from "@/components/admin/alert"
import { AttendanceTableSection, TeacherAttendanceSection } from "@/components/admin/attendance/attendanceTableSection"

export default function AdminAttendanceOverviewPage() {
  return (
    <PageShell>
      <PageHeader
      label="Admin Panel"
      title="Attendance Overview"
      description="Monitor student and teacher attendance across all classes."
      actions={
        <div className="flex items-center gap-2 rounded-xl border border-[#ddd4aa] bg-white px-4 py-2.5 text-sm font-medium text-[#68654f] shadow-sm">
          <CalendarDays size={18} />
          Today
        </div>
      }  
      />

      <AttendanceStats />

      <Alert 
        variant="warning"
        title="Pending attendance found"
        description="Hifz 1 attendance has not been marked yet. Admin or Head Teacher should follow up with the assigned teacher."
      />

      <AttendanceTableSection classAttendance={classAttendance} />

      <TeacherAttendanceSection teacherAttendance={teacherAttendance} />

    </PageShell>
  )
}
