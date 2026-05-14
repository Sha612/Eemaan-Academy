import Link from "next/link"
import { ArrowLeft, ShieldCheck } from "lucide-react"
import { readJsonFile } from "@/lib/dev-store"
import { grantReplacementAccessAction } from "../new/actions"

type StoredUser = {
  id: string
  name: string
  email: string
  role: string
}

type StoredClass = {
  id: string
  name: string
  subject: string
}

export default async function GrantReplacementAccessPage() {
  const users = await readJsonFile<StoredUser[]>("users.json", [])
  const classes = await readJsonFile<StoredClass[]>("classes.json", [])

  const teachers = users.filter(
    (user) => user.role === "TEACHER" || user.role === "HEAD_TEACHER"
  )

  return (
    <main className="min-h-screen bg-[#f7f4e8] px-6 py-6">
      <div className="mx-auto max-w-4xl space-y-6">
        <div className="flex items-center gap-3">
          <Link
            href="/admin/replacements"
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[#ddd4aa] bg-[#fbfaf4] text-[#4b5205] shadow-sm transition hover:bg-[#f1ead0]"
          >
            <ArrowLeft size={18} />
          </Link>

          <div>
            <h1 className="text-2xl font-semibold tracking-tight text-[#2f3303]">
              Grant Replacement Access
            </h1>
            <p className="text-sm text-[#68654f]">
              Give a replacement teacher temporary access to a class.
            </p>
          </div>
        </div>

        <section className="rounded-2xl border border-[#ddd4aa]/70 bg-[#fbfaf4] p-6 shadow-sm">
          <div className="mb-6 flex items-start gap-4 rounded-2xl border border-[#ddd4aa]/70 bg-white p-4">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#f1ead0] text-[#4b5205]">
              <ShieldCheck size={22} />
            </div>

            <div>
              <h2 className="font-semibold text-[#2f3303]">
                Temporary Class Access
              </h2>
              <p className="mt-1 text-sm leading-6 text-[#68654f]">
                The replacement teacher will temporarily get teacher-level
                permissions for the selected class.
              </p>
            </div>
          </div>

          <form action={grantReplacementAccessAction} className="space-y-6">
            <div className="grid gap-5 md:grid-cols-2">
              <div className="space-y-2">
                <label htmlFor="classId" className="text-sm font-medium text-[#2f3303]">
                  Class
                </label>
                <select
                  id="classId"
                  name="classId"
                  required
                  defaultValue=""
                  className="h-11 w-full rounded-xl border border-[#ddd4aa] bg-white px-4 text-sm outline-none focus:border-[#8a7a2f] focus:ring-2 focus:ring-[#ddd4aa]"
                >
                  <option value="" disabled>
                    Select class
                  </option>
                  {classes.map((classItem) => (
                    <option key={classItem.id} value={classItem.id}>
                      {classItem.name} — {classItem.subject}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="teacherId" className="text-sm font-medium text-[#2f3303]">
                  Replacement Teacher
                </label>
                <select
                  id="teacherId"
                  name="teacherId"
                  required
                  defaultValue=""
                  className="h-11 w-full rounded-xl border border-[#ddd4aa] bg-white px-4 text-sm outline-none focus:border-[#8a7a2f] focus:ring-2 focus:ring-[#ddd4aa]"
                >
                  <option value="" disabled>
                    Select teacher
                  </option>
                  {teachers.map((teacher) => (
                    <option key={teacher.id} value={teacher.id}>
                      {teacher.name} — {teacher.email}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="startDate" className="text-sm font-medium text-[#2f3303]">
                  Start Date
                </label>
                <input
                  id="startDate"
                  name="startDate"
                  type="date"
                  required
                  className="h-11 w-full rounded-xl border border-[#ddd4aa] bg-white px-4 text-sm outline-none focus:border-[#8a7a2f] focus:ring-2 focus:ring-[#ddd4aa]"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="endDate" className="text-sm font-medium text-[#2f3303]">
                  End Date
                </label>
                <input
                  id="endDate"
                  name="endDate"
                  type="date"
                  required
                  className="h-11 w-full rounded-xl border border-[#ddd4aa] bg-white px-4 text-sm outline-none focus:border-[#8a7a2f] focus:ring-2 focus:ring-[#ddd4aa]"
                />
              </div>

              <div className="space-y-2 md:col-span-2">
                <label htmlFor="reason" className="text-sm font-medium text-[#2f3303]">
                  Reason
                </label>
                <textarea
                  id="reason"
                  name="reason"
                  rows={4}
                  placeholder="Example: Primary teacher is absent"
                  className="w-full rounded-xl border border-[#ddd4aa] bg-white px-4 py-3 text-sm outline-none focus:border-[#8a7a2f] focus:ring-2 focus:ring-[#ddd4aa]"
                />
              </div>
            </div>

            <div className="rounded-2xl border border-[#ddd4aa]/70 bg-white p-4 text-sm leading-6 text-[#68654f]">
              Replacement access should be time-bound. When the end date has
              passed, your permission-checking logic should stop treating this
              teacher as active for the class.
            </div>

            <div className="flex flex-col-reverse gap-3 border-t border-[#ddd4aa]/70 pt-6 sm:flex-row sm:justify-end">
              <Link
                href="/admin/replacements"
                className="inline-flex h-11 items-center justify-center rounded-xl border border-[#ddd4aa] bg-white px-5 text-sm font-medium text-[#4b5205] shadow-sm transition hover:bg-[#f1ead0]"
              >
                Cancel
              </Link>

              <button
                type="submit"
                className="inline-flex h-11 items-center justify-center rounded-xl bg-[#4b5205] px-5 text-sm font-medium text-white shadow-sm transition hover:bg-[#2f3303]"
              >
                Grant Access
              </button>
            </div>
          </form>
        </section>
      </div>
    </main>
  )
}