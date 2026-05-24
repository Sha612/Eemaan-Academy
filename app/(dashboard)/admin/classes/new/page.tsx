import Link from 'next/link';
import { ArrowLeft, BookOpen } from 'lucide-react';
import { createClassAction } from './actions';

export default function NewClassPage() {
  return (
    <main className="min-h-screen bg-[#f7f4e8] px-6 py-6">
      <div className="mx-auto max-w-4xl space-y-6">
        <div className="flex items-center gap-3">
          <Link
            href="/admin/classes"
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[#ddd4aa] bg-[#fbfaf4] text-[#4b5205] shadow-sm transition hover:bg-[#f1ead0]"
          >
            <ArrowLeft size={18} />
          </Link>

          <div>
            <h1 className="text-2xl font-semibold tracking-tight text-[#2f3303]">
              Create Class
            </h1>
            <p className="text-sm text-[#68654f]">
              Create a subject-based class such as Hifz 1, Fiqh 2, or Hadeeth 1.
            </p>
          </div>
        </div>

        <section className="rounded-2xl border border-[#ddd4aa]/70 bg-[#fbfaf4] p-6 shadow-sm">
          <div className="mb-6 flex items-start gap-4 rounded-2xl border border-[#ddd4aa]/70 bg-white p-4">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#f1ead0] text-[#4b5205]">
              <BookOpen size={22} />
            </div>

            <div>
              <h2 className="font-semibold text-[#2f3303]">
                Class Information
              </h2>
              <p className="mt-1 text-sm leading-6 text-[#68654f]">
                A class can later be assigned to one primary teacher and can
                have enrolled students.
              </p>
            </div>
          </div>

          <form action={createClassAction} className="space-y-6">
            <div className="grid gap-5 md:grid-cols-2">
              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="text-sm font-medium text-[#2f3303]"
                >
                  Class Name
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  placeholder="Example: Hifz 1"
                  className="h-11 w-full rounded-xl border border-[#ddd4aa] bg-white px-4 text-sm outline-none focus:border-[#8a7a2f] focus:ring-2 focus:ring-[#ddd4aa]"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="subject"
                  className="text-sm font-medium text-[#2f3303]"
                >
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  required
                  placeholder="Example: Hifz"
                  className="h-11 w-full rounded-xl border border-[#ddd4aa] bg-white px-4 text-sm outline-none focus:border-[#8a7a2f] focus:ring-2 focus:ring-[#ddd4aa]"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="level"
                  className="text-sm font-medium text-[#2f3303]"
                >
                  Level
                </label>
                <input
                  id="level"
                  name="level"
                  placeholder="Example: Level 1"
                  className="h-11 w-full rounded-xl border border-[#ddd4aa] bg-white px-4 text-sm outline-none focus:border-[#8a7a2f] focus:ring-2 focus:ring-[#ddd4aa]"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="status"
                  className="text-sm font-medium text-[#2f3303]"
                >
                  Status
                </label>
                <select
                  id="status"
                  name="status"
                  defaultValue="ACTIVE"
                  className="h-11 w-full rounded-xl border border-[#ddd4aa] bg-white px-4 text-sm outline-none focus:border-[#8a7a2f] focus:ring-2 focus:ring-[#ddd4aa]"
                >
                  <option value="ACTIVE">Active</option>
                  <option value="INACTIVE">Inactive</option>
                </select>
              </div>

              <div className="space-y-2 md:col-span-2">
                <label
                  htmlFor="description"
                  className="text-sm font-medium text-[#2f3303]"
                >
                  Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  rows={4}
                  placeholder="Optional class description"
                  className="w-full rounded-xl border border-[#ddd4aa] bg-white px-4 py-3 text-sm outline-none focus:border-[#8a7a2f] focus:ring-2 focus:ring-[#ddd4aa]"
                />
              </div>
            </div>

            <div className="flex flex-col-reverse gap-3 border-t border-[#ddd4aa]/70 pt-6 sm:flex-row sm:justify-end">
              <Link
                href="/admin/classes"
                className="inline-flex h-11 items-center justify-center rounded-xl border border-[#ddd4aa] bg-white px-5 text-sm font-medium text-[#4b5205] shadow-sm transition hover:bg-[#f1ead0]"
              >
                Cancel
              </Link>

              <button
                type="submit"
                className="inline-flex h-11 items-center justify-center rounded-xl bg-[#4b5205] px-5 text-sm font-medium text-white shadow-sm transition hover:bg-[#2f3303]"
              >
                Create Class
              </button>
            </div>
          </form>
        </section>
      </div>
    </main>
  );
}
