import type { DashboardTodayClass } from './types'

type TodayClassCardProps = DashboardTodayClass

export function TodayClassCard({
  className,
  subject,
  teacher,
  attendanceStatus,
  time,
}: TodayClassCardProps) {
  const statusClass =
    attendanceStatus === 'Marked'
      ? 'bg-green-50 text-green-700'
      : attendanceStatus === 'Replacement Active'
        ? 'bg-blue-50 text-blue-700'
        : 'bg-amber-50 text-amber-700'

  return (
    <div className="rounded-xl border border-[#eee7c8] bg-[#fbfaf4] p-4">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="text-sm font-semibold text-[#2f3303]">{className}</h3>
          <p className="mt-1 text-sm text-[#6f6a4f]">{subject}</p>
          <p className="mt-2 text-xs text-[#8c8668]">{teacher}</p>
        </div>

        <span
          className={`rounded-full px-3 py-1 text-xs font-medium ${statusClass}`}
        >
          {attendanceStatus}
        </span>
      </div>

      <p className="mt-3 text-xs font-medium text-[#4b5205]">{time}</p>
    </div>
  )
}