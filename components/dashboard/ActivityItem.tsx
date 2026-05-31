import type { DashboardActivity } from './types'

type ActivityItemProps = DashboardActivity

export function ActivityItem({
  title,
  description,
  time,
  status,
}: ActivityItemProps) {
  const statusClass =
    status === 'success'
      ? 'bg-green-600'
      : status === 'warning'
        ? 'bg-amber-600'
        : 'bg-blue-600'

  return (
    <div className="flex gap-3 rounded-xl border border-[#eee7c8] bg-[#fbfaf4] p-4">
      <span
        className={`mt-1 h-2.5 w-2.5 rounded-full ${statusClass}`}
      />

      <div className="min-w-0 flex-1">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-sm font-semibold text-[#2f3303]">{title}</h3>
          <span className="shrink-0 text-xs text-[#8c8668]">{time}</span>
        </div>

        <p className="mt-1 text-sm text-[#6f6a4f]">{description}</p>
      </div>
    </div>
  )
}