import Link from "next/link"
import {
  Megaphone,
  Plus,
  Search,
} from "lucide-react"
import { PageShell } from "@/components/layout/pageShell"
import { PageHeader } from "@/components/layout/PageHeader"

import {announcements} from "@/lib/constants"
import { StatsCard } from "@/components/shared/StatsCard"


export default function AnnouncementsPage() {
  return (
    <PageShell>
        <PageHeader
          title="Announcements"
          description="Manage school-wide, class-specific, and teacher-only announcements."
          icon={Megaphone}
          actions={
            <Link
              href="/admin/announcements/new"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#4b5205] px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-[#2f3303]"
            >
              <Plus size={16} />
              New Announcement
            </Link>
          }
        />

      <section className="grid gap-4 md:grid-cols-3">

        <StatsCard title="School-wide" value={announcements.filter(a => a.type === "School-wide").length.toString()}  />
        <StatsCard title="Class-specific" value={announcements.filter(a => a.type === "Class-specific").length.toString()}  />
        <StatsCard title="Teacher-only" value={announcements.filter(a => a.type === "Teacher-only").length.toString()}  />
        
      </section>

      <section className="rounded-2xl border border-[#ddd4aa]/70 bg-white shadow-sm">
        <div className="flex flex-col gap-3 border-b border-[#eee7c8] p-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-base font-semibold text-[#2f3303]">
              Announcement List
            </h2>
            <p className="text-sm text-[#68654f]">
              View and manage published announcements.
            </p>
          </div>

          <div className="flex items-center gap-2 rounded-xl border border-[#ddd4aa] bg-white px-3 py-2 text-sm text-[#8c876d] shadow-sm">
            <Search size={16} />
            <input
              type="text"
              placeholder="Search announcements..."
              className="w-full bg-transparent text-[#2f3303] outline-none placeholder:text-[#9b967c] md:w-64"
            />
          </div>
        </div>

        <div className="divide-y divide-[#eee7c8]">
          {announcements.map((announcement) => (
            <div
              key={announcement.id}
              className="grid gap-4 p-4 transition hover:bg-[#fbfaf4] lg:grid-cols-[1.5fr_1fr_1fr_auto]"
            >
              <div>
                <h3 className="font-semibold text-[#2f3303]">
                  {announcement.title}
                </h3>
                <p className="mt-1 text-sm text-[#68654f]">
                  {announcement.message}
                </p>
              </div>

              <div>
                <p className="text-xs font-medium uppercase tracking-wide text-[#8a7a2f]">
                  Type
                </p>
                <p className="mt-1 text-sm font-medium text-[#2f3303]">
                  {announcement.type}
                </p>
                <p className="text-xs text-[#68654f]">
                  Audience: {announcement.audience}
                </p>
              </div>

              <div>
                <p className="text-xs font-medium uppercase tracking-wide text-[#8a7a2f]">
                  Details
                </p>
                <p className="mt-1 text-sm text-[#2f3303]">
                  {announcement.priority}
                </p>
                <p className="text-xs text-[#68654f]">{announcement.date}</p>
              </div>

              <div className="flex items-start justify-between gap-3 lg:justify-end">
                <span className="rounded-full border border-[#d8d0a2] bg-[#fbfaf4] px-3 py-1 text-xs font-medium text-[#4b5205]">
                  {announcement.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  )
}