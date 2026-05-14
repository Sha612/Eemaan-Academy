
import {
    MoreHorizontal,
    UserRoundCheck,
    CalendarClock,
    BookOpen,
    Search,
} from "lucide-react"

export type ReplacementItem = {
    id: string
    replacementTeacher: string
    primaryTeacher: string
    className: string
    startDate: string
    startTime: string
    endDate: string
    endTime: string
    reason: string
    status: string
}

type ReplacementTableProps = {
    replacements: ReplacementItem[]
}


export function ReplacementTable({ replacements }: ReplacementTableProps) {
  return (

        <div className="overflow-x-auto">
          <table className="w-full min-w-250 text-left text-sm">
            <thead className="bg-[#fbfaf4] text-xs uppercase tracking-wide text-[#68654f]">
              <tr>
                <th className="px-4 py-3 font-semibold">Replacement Teacher</th>
                <th className="px-4 py-3 font-semibold">Class</th>
                <th className="px-4 py-3 font-semibold">Primary Teacher</th>
                <th className="px-4 py-3 font-semibold">Access Window</th>
                <th className="px-4 py-3 font-semibold">Reason</th>
                <th className="px-4 py-3 font-semibold">Status</th>
                <th className="px-4 py-3 text-right font-semibold">Action</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-[#eee7c8]">
              {replacements.map((replacement) => (
                <tr
                  key={replacement.id}
                  className="transition hover:bg-[#fbfaf4]"
                >
                  <td className="px-4 py-4">
                    <div className="flex items-center gap-3">
                      <div className="flex size-10 items-center justify-center rounded-full bg-[#f1ead0] text-[#4b5205]">
                        <UserRoundCheck size={18} />
                      </div>

                      <div>
                        <p className="font-medium text-[#2f3303]">
                          {replacement.replacementTeacher}
                        </p>
                        <p className="text-xs text-[#8c876d]">
                          Temporary access
                        </p>
                      </div>
                    </div>
                  </td>

                  <td className="px-4 py-4">
                    <span className="inline-flex items-center gap-1 rounded-full bg-[#f1ead0] px-3 py-1 text-xs font-medium text-[#4b5205]">
                      <BookOpen size={13} />
                      {replacement.className}
                    </span>
                  </td>

                  <td className="px-4 py-4 text-[#68654f]">
                    {replacement.primaryTeacher}
                  </td>

                  <td className="px-4 py-4">
                    <div className="flex items-start gap-2 text-[#68654f]">
                      <CalendarClock size={16} className="mt-0.5" />
                      <div>
                        <p>
                          {replacement.startDate} at {replacement.startTime}
                        </p>
                        <p className="text-xs text-[#8c876d]">
                          Ends {replacement.endDate} at {replacement.endTime}
                        </p>
                      </div>
                    </div>
                  </td>

                  <td className="px-4 py-4 text-[#68654f]">
                    {replacement.reason}
                  </td>

                  <td className="px-4 py-4">
                    <StatusBadge status={replacement.status} />
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

function StatusBadge({ status }: { status: string }) {
  if (status === "Active") {
    return (
      <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-medium text-green-700">
        Active
      </span>
    )
  }

  if (status === "Scheduled") {
    return (
      <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">
        Scheduled
      </span>
    )
  }

  return (
    <span className="rounded-full bg-stone-100 px-3 py-1 text-xs font-medium text-stone-700">
      Expired
    </span>
  )
}