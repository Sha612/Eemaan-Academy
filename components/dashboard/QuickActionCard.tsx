import Link from 'next/link'
import type { DashboardAction } from './types'

type QuickActionCardProps = DashboardAction

export function QuickActionCard({
  label,
  description,
  href,
  icon: Icon,
  iconBg,
}: QuickActionCardProps) {
  return (
    <Link
      href={href}
      className="group rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
    >
      <div
        className={`mb-4 flex h-11 w-11 items-center justify-center rounded-xl text-white ${iconBg}`}
      >
        <Icon size={21} />
      </div>

      <h3 className="text-sm font-semibold text-[#2f3303] transition group-hover:text-[#4b5205]">
        {label}
      </h3>

      <p className="mt-1 text-sm text-[#7a755a]">{description}</p>
    </Link>
  )
}