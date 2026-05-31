import type { LucideIcon } from 'lucide-react'

type StatCardProps = {
  label: string
  value: string
  description: string
  icon: LucideIcon
  iconBg: string
}

export function StatCard({
  label,
  value,
  description,
  icon: Icon,
  iconBg,
}: StatCardProps) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition hover:shadow-md">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-medium text-gray-600">{label}</p>
          <p className="mt-2 text-3xl font-semibold text-gray-950">{value}</p>
          <p className="mt-2 text-xs text-gray-500">{description}</p>
        </div>

        <div className={`rounded-xl p-3 ${iconBg}`}>
          <Icon size={22} className="text-white" />
        </div>
      </div>
    </div>
  )
}