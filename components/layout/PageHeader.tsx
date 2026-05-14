import Link from "next/link"
import { ArrowLeft, LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

type PageHeaderProps = {
  label?: string
  title: string
  description?: string
  actions?: React.ReactNode
  className?: string
  icon?: LucideIcon
  backHref?: string
  backLabel?: string
}

export function PageHeader({
  label,
  title,
  description,
  actions,
  className,
  icon: Icon,
  backHref,
  backLabel = "Go back",
}: PageHeaderProps) {
  return (
    <section
      className={cn(
        "flex flex-col gap-4 rounded-2xl border border-[#ddd4aa]/70 bg-[#fbfaf4] p-6 shadow-sm md:flex-row md:items-center md:justify-between",
        className
      )}
    >
      <div className="flex min-w-0 items-start gap-3">
        {backHref ? (
          <Link
            href={backHref}
            aria-label={backLabel}
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#ddd4aa] bg-[#fbfaf4] text-[#4b5205] shadow-sm transition hover:bg-[#f1ead0]"
          >
            <ArrowLeft size={18} />
          </Link>
        ) : null}

        <div className="min-w-0">
          {label ? (
            <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-[#d8d0a7] bg-white px-3 py-1 text-xs font-medium text-[#68654f]">
              {Icon ? <Icon size={14} /> : null}
              {label}
            </div>
          ) : null}

          <h1 className="text-2xl font-semibold tracking-tight text-[#2f3303]">
            {title}
          </h1>

          {description ? (
            <p className="mt-1 max-w-2xl text-sm leading-6 text-[#68654f]">
              {description}
            </p>
          ) : null}
        </div>
      </div>

      {actions ? (
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
          {actions}
        </div>
      ) : null}
    </section>
  )
}