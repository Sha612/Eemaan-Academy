import { cn } from "@/lib/utils"

type PageShellProps = {
  children: React.ReactNode
  className?: string
}

export function PageShell({ children, className }: PageShellProps) {
  return (
    <main className={cn("space-y-6 p-6", className)}>
      {children}
    </main>
  )
}