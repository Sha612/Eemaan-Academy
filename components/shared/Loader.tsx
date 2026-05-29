// loading states
// API fetching
// components/shared/Loader.tsx
import { BookOpen } from "lucide-react"

export function Loader() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#fbfaf4]">
      <section className="flex flex-col items-center gap-5 rounded-3xl border border-[#ddd4aa]/70 bg-white px-10 py-8 shadow-sm">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#f1ead0] text-[#4b5205]">
          <BookOpen className="h-8 w-8 animate-pulse" />
        </div>

        <div className="flex flex-col items-center gap-2">
          <div className="h-10 w-10 animate-spin rounded-full border-4 border-[#ddd4aa] border-t-[#4b5205]" />

          <p className="text-sm font-semibold text-[#2f3303]">
            Loading Eemaan Institute...
          </p>

          <p className="text-xs text-[#8a7a2f]">
            Preparing your dashboard
          </p>
        </div>
      </section>
    </main>
  )
}