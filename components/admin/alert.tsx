import { AlertTriangle, CheckCircle, Info, XCircle } from "lucide-react"

// Define the allowed visual styles
export type AlertVariant = "warning" | "error" | "success" | "info"

type AlertProps = {
  title: string
  description: string
  variant?: AlertVariant
}

// Map variants to exact Tailwind color classes
const variantStyles: Record<AlertVariant, { container: string; iconBg: string; iconText: string; titleText: string; descText: string; icon: typeof AlertTriangle }> = {
  warning: {
    container: "border-amber-200 bg-amber-50",
    iconBg: "bg-amber-100",
    iconText: "text-amber-700",
    titleText: "text-amber-900",
    descText: "text-amber-800",
    icon: AlertTriangle,
  },
  error: {
    container: "border-red-200 bg-red-50",
    iconBg: "bg-red-100",
    iconText: "text-red-700",
    titleText: "text-red-900",
    descText: "text-red-800",
    icon: XCircle,
  },
  success: {
    container: "border-emerald-200 bg-emerald-50",
    iconBg: "bg-emerald-100",
    iconText: "text-emerald-700",
    titleText: "text-emerald-900",
    descText: "text-emerald-800",
    icon: CheckCircle,
  },
  info: {
    container: "border-blue-200 bg-blue-50",
    iconBg: "bg-blue-100",
    iconText: "text-blue-700",
    titleText: "text-blue-900",
    descText: "text-blue-800",
    icon: Info,
  },
}

export function Alert({ title, description, variant = "info" }: AlertProps) {
  const styles = variantStyles[variant]
  const IconComponent = styles.icon

  return (
    <section className={`rounded-2xl border p-5 shadow-sm ${styles.container}`}>
      <div className="flex items-start gap-3">
        <div className={`flex size-10 shrink-0 items-center justify-center rounded-full ${styles.iconBg} ${styles.iconText}`}>
          <IconComponent size={18} />
        </div>

        <div>
          <h2 className={`text-sm font-semibold ${styles.titleText}`}>
            {title}
          </h2>
          <p className={`mt-1 text-sm leading-6 ${styles.descText}`}>
            {description}
          </p>
        </div>
      </div>
    </section>
  )
}
