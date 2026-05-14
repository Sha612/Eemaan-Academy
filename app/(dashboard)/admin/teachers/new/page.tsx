import Link from "next/link"
import { ArrowLeft, UserPlus } from "lucide-react"
import { createTeacherAction } from "./action"

export default function NewTeacherPage() {
  return (
    <main className="min-h-screen bg-[#f7f4e8] px-6 py-6">
      <div className="mx-auto max-w-4xl space-y-6">
        <div className="flex items-center gap-3">
          <Link
            href="/admin/teachers"
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[#ddd4aa] bg-[#fbfaf4] text-[#4b5205] shadow-sm transition hover:bg-[#f1ead0]"
          >
            <ArrowLeft size={18} />
          </Link>

          <div>
            <h1 className="text-2xl font-semibold tracking-tight text-[#2f3303]">
              Add Teacher
            </h1>
            <p className="text-sm text-[#68654f]">
              Create a teacher account and teacher profile.
            </p>
          </div>
        </div>

        <section className="rounded-2xl border border-[#ddd4aa]/70 bg-[#fbfaf4] p-6 shadow-sm">
          <div className="mb-6 flex items-start gap-4 rounded-2xl border border-[#ddd4aa]/70 bg-white p-4">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#f1ead0] text-[#4b5205]">
              <UserPlus size={22} />
            </div>

            <div>
              <h2 className="font-semibold text-[#2f3303]">
                Teacher Information
              </h2>
              <p className="mt-1 text-sm leading-6 text-[#68654f]">
                This will create a login account with the TEACHER role and a
                teacher profile.
              </p>
            </div>
          </div>

          <form action={createTeacherAction} className="space-y-6">
            <div className="grid gap-5 md:grid-cols-2">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-[#2f3303]">
                  Full Name
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  placeholder="Enter teacher name"
                  className="h-11 w-full rounded-xl border border-[#ddd4aa] bg-white px-4 text-sm outline-none focus:border-[#8a7a2f] focus:ring-2 focus:ring-[#ddd4aa]"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-[#2f3303]">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="teacher@email.com"
                  className="h-11 w-full rounded-xl border border-[#ddd4aa] bg-white px-4 text-sm outline-none focus:border-[#8a7a2f] focus:ring-2 focus:ring-[#ddd4aa]"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-medium text-[#2f3303]">
                  Phone
                </label>
                <input
                  id="phone"
                  name="phone"
                  placeholder="Optional phone number"
                  className="h-11 w-full rounded-xl border border-[#ddd4aa] bg-white px-4 text-sm outline-none focus:border-[#8a7a2f] focus:ring-2 focus:ring-[#ddd4aa]"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="teacherCode" className="text-sm font-medium text-[#2f3303]">
                  Teacher Code
                </label>
                <input
                  id="teacherCode"
                  name="teacherCode"
                  placeholder="Example: TCH-001"
                  className="h-11 w-full rounded-xl border border-[#ddd4aa] bg-white px-4 text-sm outline-none focus:border-[#8a7a2f] focus:ring-2 focus:ring-[#ddd4aa]"
                />
              </div>

              <div className="space-y-2 md:col-span-2">
                <label htmlFor="subjects" className="text-sm font-medium text-[#2f3303]">
                  Subjects
                </label>
                <input
                  id="subjects"
                  name="subjects"
                  placeholder="Example: Hifz, Fiqh, Hadeeth"
                  className="h-11 w-full rounded-xl border border-[#ddd4aa] bg-white px-4 text-sm outline-none focus:border-[#8a7a2f] focus:ring-2 focus:ring-[#ddd4aa]"
                />
              </div>
            </div>

            <div className="flex flex-col-reverse gap-3 border-t border-[#ddd4aa]/70 pt-6 sm:flex-row sm:justify-end">
              <Link
                href="/admin/teachers"
                className="inline-flex h-11 items-center justify-center rounded-xl border border-[#ddd4aa] bg-white px-5 text-sm font-medium text-[#4b5205] shadow-sm transition hover:bg-[#f1ead0]"
              >
                Cancel
              </Link>

              <button
                type="submit"
                className="inline-flex h-11 items-center justify-center rounded-xl bg-[#4b5205] px-5 text-sm font-medium text-white shadow-sm transition hover:bg-[#2f3303]"
              >
                Create Teacher
              </button>
            </div>
          </form>
        </section>
      </div>
    </main>
  )
}