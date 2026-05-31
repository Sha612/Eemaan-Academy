import type { DashboardReplacementAccess } from './types'

type ReplacementAccessCardProps = DashboardReplacementAccess

export function ReplacementAccessCard({
  teacher,
  className,
  access,
  expires,
  status,
}: ReplacementAccessCardProps) {
  const statusClass =
    status === 'Active'
      ? 'bg-green-50 text-green-700'
      : 'bg-amber-50 text-amber-700'

  return (
    <div className="rounded-xl border border-[#eee7c8] bg-white p-4">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="text-sm font-semibold text-[#2f3303]">{teacher}</h3>
          <p className="mt-1 text-sm text-[#6f6a4f]">{className}</p>
          <p className="mt-2 text-xs text-[#8c8668]">{access}</p>
        </div>

        <span
          className={`rounded-full px-3 py-1 text-xs font-medium ${statusClass}`}
        >
          {status}
        </span>
      </div>

      <p className="mt-3 text-xs font-medium text-[#4b5205]">{expires}</p>
    </div>
  )
}