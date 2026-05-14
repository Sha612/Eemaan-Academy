import {
  BookOpen,
  MoreHorizontal,
  UserRoundCheck,
  Users,
} from "lucide-react"

export type ClassItem = {
  id: string
  name: string
  level: string
  subject: string
  primaryTeacher: string
  studentsCount: number
  schedule: string
  status: string
}

type ClassesTableProps = {
  classes: ClassItem[]
}

export function ClassesTable({ classes }: ClassesTableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-225 text-left text-sm">
        <thead className="bg-[#fbfaf4] text-xs uppercase tracking-wide text-[#68654f]">
          <tr>
            <th className="px-4 py-3 font-semibold">Class</th>
            <th className="px-4 py-3 font-semibold">Subject</th>
            <th className="px-4 py-3 font-semibold">Primary Teacher</th>
            <th className="px-4 py-3 font-semibold">Students</th>
            <th className="px-4 py-3 font-semibold">Schedule</th>
            <th className="px-4 py-3 font-semibold">Status</th>
            <th className="px-4 py-3 text-right font-semibold">Action</th>
          </tr>
        </thead>

        <tbody className="divide-y divide-[#eee7c8]">
          {classes.map((classItem) => (
            <tr key={classItem.id} className="transition hover:bg-[#fbfaf4]">
              <td className="px-4 py-4">
                <div className="flex items-center gap-3">
                  <div className="flex size-10 items-center justify-center rounded-full bg-[#f1ead0] text-[#4b5205]">
                    <BookOpen size={18} />
                  </div>

                  <div>
                    <p className="font-medium text-[#2f3303]">
                      {classItem.name}
                    </p>
                    <p className="text-xs text-[#8c876d]">
                      {classItem.level}
                    </p>
                  </div>
                </div>
              </td>

              <td className="px-4 py-4 text-[#68654f]">
                {classItem.subject}
              </td>

              <td className="px-4 py-4">
                <span className="inline-flex items-center gap-1 rounded-full bg-[#f1ead0] px-3 py-1 text-xs font-medium text-[#4b5205]">
                  <UserRoundCheck size={13} />
                  {classItem.primaryTeacher}
                </span>
              </td>

              <td className="px-4 py-4">
                <span className="inline-flex items-center gap-1 text-[#68654f]">
                  <Users size={15} />
                  {classItem.studentsCount} students
                </span>
              </td>

              <td className="px-4 py-4 text-[#68654f]">
                {classItem.schedule}
              </td>

              <td className="px-4 py-4">
                <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-medium text-green-700">
                  {classItem.status}
                </span>
              </td>

              <td className="px-4 py-4 text-right">
                <button className="inline-flex size-9 items-center justify-center rounded-lg text-[#68654f] transition hover:bg-[#f1ead0] hover:text-[#2f3303]">
                  <MoreHorizontal size={18} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}