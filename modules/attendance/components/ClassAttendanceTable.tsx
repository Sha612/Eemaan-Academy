import { markAttendanceAction } from '@/app/(dashboard)/admin/attendance/class/[classId]/actions';
import { AttendanceResponse, AttendanceStatus } from '../types';
import { Gender } from '@/modules/students/types';
import { Button } from '@/components/ui/button';
import { AttendanceStatusBadge } from './AttendanceStatusBadge';

type AttendanceStudent = {
  id: number;
  firstName: string;
  lastName: string;
  gender: Gender | string;
  phoneNumber: string;
  guardianName: string | null;
  guardianPhoneNumber: string | null;
  guardianEmail: string | null;
  createdAt: string;
  updatedAt: string;
};

type ClassAttendanceTableProps = {
  classId: number;
  students: AttendanceStudent[];
  attendanceRecords: AttendanceResponse[];
};

const statuses: AttendanceStatus[] = [
  'present',
  'absent',
  'late',
  'excused',
  'dropped',
];

export function ClassAttendanceTable({
  classId,
  students,
  attendanceRecords,
}: ClassAttendanceTableProps) {
  return (
    <div className="overflow-hidden rounded-2xl border border-[#ddd4aa] bg-white shadow-sm">
      <table className="w-full text-sm">
        <thead className="bg-[#fbfaf4] text-left text-[#4b5205]">
          <tr>
            <th className="px-5 py-4 font-semibold">Student</th>
            <th className="px-5 py-4 font-semibold">Current Status</th>
            <th className="px-5 py-4 font-semibold">Update Attendance</th>
          </tr>
        </thead>

        <tbody>
          {students.map((student) => {
            const record = attendanceRecords.find(
              (attendance) => attendance.student.id === student.id,
            );

            const action = markAttendanceAction.bind(null, classId);

            return (
              <tr
                key={student.id}
                className="border-t border-[#eee6c7] hover:bg-[#fbfaf4]"
              >
                <td className="px-5 py-4">
                  <div>
                    <p className="font-medium text-[#2f3303]">
                      {student.firstName} {student.lastName}
                    </p>

                    <p className="text-xs text-[#6f6a4d]">
                      {student.phoneNumber}
                    </p>
                  </div>
                </td>

                <td className="px-5 py-4">
                  {record ? (
                    <AttendanceStatusBadge status={record.status} />
                  ) : (
                    <span className="text-sm text-[#8a8468]">
                      Not marked
                    </span>
                  )}
                </td>

                <td className="px-5 py-4">
                  <form action={action} className="flex items-center gap-3">
                    <input
                      type="hidden"
                      name="studentId"
                      value={student.id}
                    />

                    <select
                      name="status"
                      defaultValue={record?.status || 'present'}
                      className="h-10 rounded-md border border-input bg-background px-3 text-sm"
                    >
                      {statuses.map((status) => (
                        <option key={status} value={status}>
                          {status.charAt(0).toUpperCase() +
                            status.slice(1)}
                        </option>
                      ))}
                    </select>

                    <Button
                      type="submit"
                      size="sm"
                      className="bg-[#4b5205] text-white hover:bg-[#2f3303]"
                    >
                      Save
                    </Button>
                  </form>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}