import { Megaphone } from "lucide-react"
import Link from "next/link"

export default function NewAnnouncementPage() {
  return (
    <main className="space-y-6">
      <section className="flex flex-col gap-3 rounded-2xl border border-[#ddd4aa]/70 bg-[#fbfaf4] p-6 shadow-sm md:flex-row md:items-center md:justify-between">
        <div>
          <p className="mb-2 inline-flex items-center gap-2 rounded-full border border-[#d8d0a2] bg-white px-3 py-1 text-xs font-medium text-[#8a7a2f]">
            <Megaphone size={14} />
            Admin Announcements
          </p>

          <h1 className="text-2xl font-bold text-[#2f3303]">
            Create Announcement
          </h1>

          <p className="mt-1 text-sm text-[#68654f]">
            Publish school-wide, class-specific, or teacher-only announcements.
          </p>
        </div>

        <Link
          href="/admin/announcements"
          className="rounded-xl border border-[#ddd4aa] bg-white px-4 py-2 text-sm font-medium text-[#4b5205] shadow-sm transition hover:bg-[#f1ead0]"
        >
          Back to Announcements
        </Link>
      </section>

      <section className="rounded-2xl border border-[#ddd4aa]/70 bg-white p-6 shadow-sm">
        <form className="space-y-5">
          <div className="grid gap-5 md:grid-cols-2">
            <div className="space-y-2">
              <label className="text-sm font-medium text-[#2f3303]">
                Announcement Title
              </label>
              <input
                name="title"
                type="text"
                placeholder="Example: Quran class schedule update"
                className="w-full rounded-xl border border-[#ddd4aa] bg-white px-4 py-3 text-sm text-[#2f3303] outline-none transition focus:border-[#8a7a0a] focus:ring-4 focus:ring-[#d6c26b]/20"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-[#2f3303]">
                Announcement Type
              </label>
              <select
                name="type"
                className="w-full rounded-xl border border-[#ddd4aa] bg-white px-4 py-3 text-sm text-[#2f3303] outline-none transition focus:border-[#8a7a0a] focus:ring-4 focus:ring-[#d6c26b]/20"
              >
                <option value="">Select type</option>
                <option value="school-wide">School-wide</option>
                <option value="class-specific">Class-specific</option>
                <option value="teacher-only">Teacher-only</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-[#2f3303]">
                Target Class
              </label>
              <select
                name="classId"
                className="w-full rounded-xl border border-[#ddd4aa] bg-white px-4 py-3 text-sm text-[#2f3303] outline-none transition focus:border-[#8a7a0a] focus:ring-4 focus:ring-[#d6c26b]/20"
              >
                <option value="">Not class-specific</option>
                <option value="fiqh-1">Fiqh 1</option>
                <option value="hifz-1">Hifz 1</option>
                <option value="hadeeth-1">Hadeeth 1</option>
              </select>
              <p className="text-xs text-[#68654f]">
                Only select a class when the type is class-specific.
              </p>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-[#2f3303]">
                Priority
              </label>
              <select
                name="priority"
                className="w-full rounded-xl border border-[#ddd4aa] bg-white px-4 py-3 text-sm text-[#2f3303] outline-none transition focus:border-[#8a7a0a] focus:ring-4 focus:ring-[#d6c26b]/20"
              >
                <option value="normal">Normal</option>
                <option value="important">Important</option>
                <option value="urgent">Urgent</option>
              </select>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-[#2f3303]">
              Message
            </label>
            <textarea
              name="message"
              rows={6}
              placeholder="Write the announcement message here..."
              className="w-full resize-none rounded-xl border border-[#ddd4aa] bg-white px-4 py-3 text-sm text-[#2f3303] outline-none transition focus:border-[#8a7a0a] focus:ring-4 focus:ring-[#d6c26b]/20"
            />
          </div>

          <div className="flex flex-col gap-3 border-t border-[#eee7c8] pt-5 sm:flex-row sm:justify-end">
            <Link
              href="/admin/announcements"
              className="rounded-xl border border-[#ddd4aa] bg-white px-5 py-2.5 text-center text-sm font-medium text-[#4b5205] transition hover:bg-[#f1ead0]"
            >
              Cancel
            </Link>

            <button
              type="submit"
              className="rounded-xl bg-[#4b5205] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#2f3303]"
            >
              Publish Announcement
            </button>
          </div>
        </form>
      </section>
    </main>
  )
}