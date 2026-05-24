// app/(dashboard)/admin/users/page.tsx

import Link from "next/link"
import { Pencil, UserX , Trash , Trash2} from "lucide-react"
import { apiFetch } from "@/lib/api"
import { User } from "@/modules/auth/types"

export default async function UsersPage() {
  const users = await apiFetch<User[]>("/users")

  return (
    <main className="p-6">
      <section className="rounded-2xl border border-[#ddd4aa]/70 bg-white shadow-sm">
        <div className="border-b border-[#eee7c8] p-4">
          <h1 className="text-xl font-semibold text-[#2f3303]">Users</h1>
          <p className="text-sm text-[#68654f]">Manage all system accounts.</p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-[#fbfaf4] text-[#68654f]">
              <tr>
                <th className="p-4">Email</th>
                <th className="p-4">Role</th>
                <th className="p-4">Status</th>
                <th className="p-4 text-right">Actions</th>
              </tr>
            </thead>

            <tbody>
              {users.map((user) => (
                <tr
                  key={user.id}
                  className="border-t border-[#eee7c8] transition-colors duration-200 hover:bg-[#fbfaf4]"
                >
                  <td className="p-4 font-medium text-[#2f3303]">
                    {user.email}
                  </td>

                  <td className="p-4 capitalize text-[#68654f]">
                    {user.role}
                  </td>

                  <td className="p-4">
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-medium ${
                        user.isActive
                          ? "bg-green-50 text-green-700"
                          : "bg-red-50 text-red-700"
                      }`}
                    >
                      {user.isActive ? "Active" : "Inactive"}
                    </span>
                  </td>

                  <td className="p-4">
                    <div className="flex justify-end gap-2">
                      <Link
                        href={`/admin/users/${user.id}/edit`}
                        className="group inline-flex items-center gap-2 rounded-xl border border-[#ddd4aa] bg-[#fbfaf4] px-3 py-2 text-xs font-medium text-[#2f3303] shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-[#8a7a2f] hover:bg-[#f5f0d7] hover:shadow-md active:translate-y-0"
                      >
                      <span className="opacity-0 max-w-0 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:max-w-[50px] whitespace-nowrap">
                        Edit</span>
                        <Pencil className="h-4 w-4 transition-transform duration-200 group-hover:rotate-[-8deg] group-hover:scale-110" />
                        
                      </Link>
                      <button
                        type="button"
                        className="group inline-flex items-center gap-2 rounded-xl  border-red-200 bg-red-50 px-3 py-2 text-xs font-medium text-red-700 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-red-300 hover:bg-red-100 hover:shadow-md active:translate-y-0"
                      >
                        <Trash2 className="h-4 w-4 transition-transform duration-200 group-hover:rotate-[-8deg] group-hover:animate-bounce group-hover:scale-150" />
                        
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  )
}