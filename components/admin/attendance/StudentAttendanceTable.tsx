// components/admin/attendance/StudentAttendanceTable.tsx

import { AttendanceStatusButton } from "./AttendanceStatusButton"
import { getInitials } from "@/lib/attendance/attendance-utils"
import type {
  AttendanceRecord,
  AttendanceStatus,
  AttendanceStatusOption,
  Student,
} from "@/lib/attendance/attendance-types"

type StudentAttendanceTableProps = {
  students: Student[]
  attendance: AttendanceRecord
  statusOptions: AttendanceStatusOption[]
  remainingCount: number
  onUpdateAttendance: (studentId: number, status: AttendanceStatus) => void
}

export function StudentAttendanceTable({
  students,
  attendance,
  statusOptions,
  remainingCount,
  onUpdateAttendance,
}: StudentAttendanceTableProps) {
  return (
    <section className="overflow-hidden rounded-2xl border border-[#ddd4aa]/70 bg-[#fbfaf4] shadow-sm">
      <div className="flex flex-col gap-2 border-b border-[#ddd4aa]/70 bg-white/60 p-6 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-base font-semibold text-[#2f3303]">
            Student Register
          </h2>
          <p className="mt-1 text-sm text-[#68654f]">
            Mark one status for every student before saving.
          </p>
        </div>

        <div className="rounded-full border border-[#d8d0a7] bg-[#f7f3df] px-4 py-2 text-sm font-medium text-[#4b5205]">
          {remainingCount === 0
            ? "All students marked"
            : `${remainingCount} remaining`}
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[900px]">
          <thead>
            <tr className="border-b border-[#ddd4aa]/70 bg-[#f7f3df] text-left text-xs font-semibold uppercase tracking-wide text-[#68654f]">
              <th className="px-6 py-4">Roll No.</th>
              <th className="px-6 py-4">Student</th>
              <th className="px-6 py-4 text-center">Attendance Status</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-[#eee7c8]">
            {students.map((student) => {
              const selectedStatus = attendance[student.id]

              return (
                <tr key={student.id} className="transition hover:bg-[#fffdf2]">
                  <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-[#68654f]">
                    {student.rollNumber}
                  </td>

                  <td className="whitespace-nowrap px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="flex size-10 items-center justify-center rounded-full border border-[#d8d0a7] bg-[#f1ead0] text-sm font-semibold text-[#4b5205]">
                        {getInitials(student.name)}
                      </div>

                      <div>
                        <p className="text-sm font-semibold text-[#2f3303]">
                          {student.name}
                        </p>
                        <p className="text-xs text-[#8c876d]">
                          Enrolled student
                        </p>
                      </div>
                    </div>
                  </td>

                  <td className="px-6 py-4">
                    <div className="flex flex-wrap justify-center gap-2">
                      {statusOptions.map((option) => (
                        <AttendanceStatusButton
                          key={option.value}
                          option={option}
                          selectedStatus={selectedStatus}
                          onClick={() =>
                            onUpdateAttendance(student.id, option.value)
                          }
                        />
                      ))}
                    </div>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </section>
  )
}