import Link from 'next/link';
import { ArrowLeft, Save } from 'lucide-react';
import { serverApi } from '@/lib/server-api';
import { User } from '@/modules/auth/types';
import { updateUserAction } from '../../actions';

type EditUserPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function EditUserPage({ params }: EditUserPageProps) {
  const { id } = await params;
  const user = await serverApi<User>(`/users/${id}`);
  return (
    <main className="p-6">
      <section className="mx-auto max-w-2xl rounded-2xl border border-[#ddd4aa]/70 bg-white shadow-sm">
        <div className="flex items-center gap-3 border-b border-[#eee7c8] p-4">
          <Link
            href="/admin/users"
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[#ddd4aa] bg-[#fbfaf4] text-[#4b5205] shadow-sm transition hover:bg-[#f1ead0]"
          >
            <ArrowLeft size={18} />
          </Link>

          <div>
            <h1 className="text-xl font-semibold text-[#2f3303]">Edit User</h1>
            <p className="text-sm text-[#68654f]">
              Update the user email. Role and login status are managed
              separately.
            </p>
          </div>
        </div>

        <form action={updateUserAction} className="space-y-5 p-4">
          <input type="hidden" name="id" value={user.id} />

          <div className="space-y-2">
            <label className="text-sm font-medium text-[#2f3303]">Email</label>
            <input
              name="email"
              type="email"
              defaultValue={user.email}
              className="w-full rounded-xl border border-[#ddd4aa] bg-[#fbfaf4] px-4 py-3 text-sm outline-none transition focus:border-[#8a7a2f] focus:ring-2 focus:ring-[#8a7a2f]/20"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-[#2f3303]">Role</label>
            <select
              name="role"
              defaultValue={user.role}
              disabled
              className="w-full cursor-not-allowed rounded-xl border border-[#ddd4aa] bg-gray-100 px-4 py-3 text-sm capitalize text-gray-500 outline-none"
            >
              <option value="admin">Admin</option>
              <option value="teacher">Teacher</option>
              <option value="student">Student</option>
            </select>
          </div>

          <div className="rounded-xl border border-[#ddd4aa] bg-gray-100 p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-[#2f3303]">
                  Active Account
                </p>
                <p className="text-xs text-[#68654f]">
                  Login status is disabled on this page.
                </p>
              </div>

              <span
                className={`rounded-full px-3 py-1 text-xs font-medium ${
                  user.isActive
                    ? 'bg-green-50 text-green-700'
                    : 'bg-red-50 text-red-700'
                }`}
              >
                {user.isActive ? 'Active' : 'Inactive'}
              </span>
            </div>
          </div>

          <div className="flex justify-end gap-3 pt-2">
            <Link
              href="/admin/users"
              className="rounded-xl border border-[#ddd4aa] px-4 py-2 text-sm font-medium text-[#68654f] transition hover:bg-[#fbfaf4] hover:text-[#2f3303]"
            >
              Cancel
            </Link>

            <button
              type="submit"
              className="group inline-flex items-center gap-2 rounded-xl bg-[#8a7a2f] px-4 py-2 text-sm font-medium text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#736625] hover:shadow-md active:translate-y-0"
            >
              <Save className="h-4 w-4 transition-transform duration-200 group-hover:scale-110" />
              Save Changes
            </button>
          </div>
        </form>
      </section>
    </main>
  );
}
