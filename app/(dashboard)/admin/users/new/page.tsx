import Link from "next/link"
import { ArrowLeft, UserPlus } from "lucide-react"
import { createUserAction } from "./actions"

export default function NewUserPage() {
  return (
    <main className="min-h-screen bg-[#f7f4e8] px-6 py-6">
      <div className="mx-auto max-w-4xl space-y-6">
        <div className="flex items-center gap-3">
          <Link
            href="/admin"
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[#ddd4aa] bg-[#fbfaf4] text-[#4b5205] shadow-sm transition hover:bg-[#f1ead0]"
          >
            <ArrowLeft size={18} />
          </Link>

          <div>
            <h1 className="text-2xl font-semibold tracking-tight text-[#2f3303]">
              Create User Account
            </h1>
            <p className="text-sm text-[#68654f]">
              Create login access for an Admin, Head Teacher, Teacher, or Student.
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
                Account Information
              </h2>
              <p className="mt-1 text-sm leading-6 text-[#68654f]">
                This creates the user login account. Student-specific and
                teacher-specific details can be completed from their own
                profile pages.
              </p>
            </div>
          </div>

          <form action={createUserAction} className="space-y-6">
            <div className="grid gap-5 md:grid-cols-2">
              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="text-sm font-medium text-[#2f3303]"
                >
                  Full Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Enter full name"
                  className="h-11 w-full rounded-xl border border-[#ddd4aa] bg-white px-4 text-sm text-[#2f3303] shadow-sm outline-none transition placeholder:text-[#9a957c] focus:border-[#8a7a2f] focus:ring-2 focus:ring-[#ddd4aa]"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-[#2f3303]"
                >
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="example@email.com"
                  className="h-11 w-full rounded-xl border border-[#ddd4aa] bg-white px-4 text-sm text-[#2f3303] shadow-sm outline-none transition placeholder:text-[#9a957c] focus:border-[#8a7a2f] focus:ring-2 focus:ring-[#ddd4aa]"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="role"
                  className="text-sm font-medium text-[#2f3303]"
                >
                  User Role
                </label>
                <select
                  id="role"
                  name="role"
                  required
                  defaultValue=""
                  className="h-11 w-full rounded-xl border border-[#ddd4aa] bg-white px-4 text-sm text-[#2f3303] shadow-sm outline-none transition focus:border-[#8a7a2f] focus:ring-2 focus:ring-[#ddd4aa]"
                >
                  <option value="" disabled>
                    Select role
                  </option>
                  <option value="ADMIN">Admin</option>
                  <option value="HEAD_TEACHER">Head Teacher</option>
                  <option value="TEACHER">Teacher</option>
                  <option value="STUDENT">Student</option>
                </select>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="status"
                  className="text-sm font-medium text-[#2f3303]"
                >
                  Account Status
                </label>
                <select
                  id="status"
                  name="status"
                  defaultValue="ACTIVE"
                  className="h-11 w-full rounded-xl border border-[#ddd4aa] bg-white px-4 text-sm text-[#2f3303] shadow-sm outline-none transition focus:border-[#8a7a2f] focus:ring-2 focus:ring-[#ddd4aa]"
                >
                  <option value="ACTIVE">Active</option>
                  <option value="INACTIVE">Inactive</option>
                </select>
              </div>
            </div>

            <div className="rounded-2xl border border-[#ddd4aa]/70 bg-white p-4">
              <h3 className="text-sm font-semibold text-[#2f3303]">
                Default Password
              </h3>
              <p className="mt-1 text-sm leading-6 text-[#68654f]">
                For now, the system will assign a temporary password in the
                server action. Later, you can generate a secure temporary
                password and force the user to change it after first login.
              </p>
            </div>

            <div className="flex flex-col-reverse gap-3 border-t border-[#ddd4aa]/70 pt-6 sm:flex-row sm:justify-end">
              <Link
                href="/admin"
                className="inline-flex h-11 items-center justify-center rounded-xl border border-[#ddd4aa] bg-white px-5 text-sm font-medium text-[#4b5205] shadow-sm transition hover:bg-[#f1ead0]"
              >
                Cancel
              </Link>

              <button
                type="submit"
                className="inline-flex h-11 items-center justify-center rounded-xl bg-[#4b5205] px-5 text-sm font-medium text-white shadow-sm transition hover:bg-[#2f3303]"
              >
                Create User Account
              </button>
            </div>
          </form>
        </section>
      </div>
    </main>
  )
}