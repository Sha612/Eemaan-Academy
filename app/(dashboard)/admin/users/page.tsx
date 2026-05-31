import Link from 'next/link'
import { Pencil, Plus, Trash2, Users } from 'lucide-react'
import { getUsers } from '@/modules/users/services'
import { deleteUserAction } from './actions'

type UsersPageProps = {
  searchParams: Promise<{
    page?: string
  }>
}

export default async function UsersPage({ searchParams }: UsersPageProps) {
  const { page } = await searchParams
  const currentPage = Number(page ?? 1)

  const usersResponse = await getUsers(currentPage, 10)

  const users = usersResponse.data
  const { meta } = usersResponse

  return (
    <main className="p-6">
      <section className="rounded-3xl border border-[#ddd4aa]/70 bg-white shadow-sm">
        <div className="flex flex-col gap-4 border-b border-[#eee7c8] p-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#f1ead0] text-[#4b5205]">
              <Users className="h-5 w-5" />
            </div>

            <div>
              <h1 className="text-xl font-semibold text-[#2f3303]">Users</h1>
              <p className="text-sm text-[#68654f]">
                Manage all system accounts and access roles.
              </p>
            </div>
          </div>

          <Link
            href="/admin/users/new"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#4b5205] px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-[#2f3303]"
          >
            <Plus className="h-4 w-4" />
            Add User
          </Link>
        </div>

        <div className="p-5">
          <div className="overflow-hidden rounded-2xl border border-[#eee7c8]">
            <table className="w-full text-left text-sm">
              <thead className="bg-[#fbfaf4] text-xs uppercase tracking-wide text-[#68654f]">
                <tr>
                  <th className="p-4">User</th>
                  <th className="p-4">Role</th>
                  <th className="p-4">Status</th>
                  <th className="p-4 text-right">Actions</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-[#eee7c8]">
                {users.map((user) => (
                  <tr
                    key={user.id}
                    className="transition hover:bg-[#fbfaf4]"
                  >
                    <td className="p-4">
                      <div>
                        <p className="font-medium text-[#2f3303]">
                          {user.email}
                        </p>
                        <p className="text-xs text-[#8a7a2f]">
                          User ID: {user.id}
                        </p>
                      </div>
                    </td>

                    <td className="p-4">
                      <span className="rounded-full bg-[#f1ead0] px-3 py-1 text-xs font-medium capitalize text-[#4b5205]">
                        {user.role.replace('_', ' ')}
                      </span>
                    </td>

                    <td className="p-4">
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-medium ${
                          user.isActive
                            ? 'bg-green-50 text-green-700'
                            : 'bg-red-50 text-red-700'
                        }`}
                      >
                        {user.isActive ? 'Active' : 'Inactive'}
                      </span>
                    </td>

                    <td className="p-4">
                      <div className="flex justify-end gap-2">
                        <Link
                          href={`/admin/users/${user.id}/edit`}
                          className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-[#ddd4aa] bg-[#fbfaf4] text-[#2f3303] transition hover:border-[#8a7a2f] hover:bg-[#f5f0d7]"
                        >
                          <Pencil className="h-4 w-4" />
                        </Link>

                        <form action={deleteUserAction}>
                          <input type="hidden" name="id" value={user.id} />
                          <button
                            type="submit"
                            className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-red-200 bg-red-50 text-red-700 transition hover:bg-red-100"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </form>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-[#68654f]">
              Showing page {meta.page} of {meta.totalPages} — {meta.total} users
            </p>

            <div className="flex items-center gap-2">
              <Link
                href={`/admin/users?page=${Math.max(meta.page - 1, 1)}`}
                className={`rounded-xl border px-4 py-2 text-sm font-medium transition ${
                  meta.page <= 1
                    ? 'pointer-events-none border-[#eee7c8] bg-[#fbfaf4] text-[#b8ad85]'
                    : 'border-[#ddd4aa] bg-white text-[#4b5205] hover:bg-[#fbfaf4]'
                }`}
              >
                Previous
              </Link>

              <Link
                href={`/admin/users?page=${Math.min(
                  meta.page + 1,
                  meta.totalPages
                )}`}
                className={`rounded-xl border px-4 py-2 text-sm font-medium transition ${
                  meta.page >= meta.totalPages
                    ? 'pointer-events-none border-[#eee7c8] bg-[#fbfaf4] text-[#b8ad85]'
                    : 'border-[#ddd4aa] bg-white text-[#4b5205] hover:bg-[#fbfaf4]'
                }`}
              >
                Next
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}