import { TableSection } from '@/components/admin/table/TableSection';
import { TableSectionHeader } from '@/components/admin/table/TableSectionHeader';
import { AttendanceTable, TeacherAttendanceBadge } from './attendanceTable';
import { classAttendance, teacherAttendance } from '@/lib/constants';
import { AttendanceItem, AttendanceTeacherItem } from './attendanceTable';

export function AttendanceTableSection({
  classAttendance,
}: {
  classAttendance: AttendanceItem[];
}) {
  return (
    <TableSection>
      <TableSectionHeader
        title="Class Attendance Status"
        description="Check whether attendance has been completed for each class."
        searchPlaceholder="Search classes..."
      />
      <AttendanceTable classAttendance={classAttendance} />
    </TableSection>
  );
}

export function TeacherAttendanceSection({
  teacherAttendance,
}: {
  teacherAttendance: AttendanceTeacherItem[];
}) {
  return (
    <TableSection>
      <TableSectionHeader
        title="Teacher Attendance"
        description="Overview of teacher self-attendance and pending teacher records."
      />

      <div className="divide-y divide-[#eee7c8]">
        {teacherAttendance.map((record) => (
          <div
            key={record.id}
            className="flex flex-col gap-3 p-4 md:flex-row md:items-center md:justify-between"
          >
            <div>
              <p className="font-medium text-[#2f3303]">{record.teacher}</p>
              <p className="text-sm text-[#68654f]">
                Check-in time: {record.checkIn}
              </p>
            </div>

            <TeacherAttendanceBadge status={record.status} />
          </div>
        ))}
      </div>
    </TableSection>
  );
}
