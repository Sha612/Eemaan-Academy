import Link from 'next/link';
import {
  Plus,
  Search,
  UserRoundCheck,
  BookOpen,
  MoreHorizontal,
} from 'lucide-react';

const teachers = [
  {
    id: '1',
    name: 'Ahmed Teacher',
    email: 'ahmed.teacher@example.com',
    assignedClasses: ['Fiqh 1', 'Fiqh 2'],
    status: 'Active',
  },
  {
    id: '2',
    name: 'Fatima Head Teacher',
    email: 'fatima.head@example.com',
    assignedClasses: ['Hifz 1'],
    status: 'Active',
  },
  {
    id: '3',
    name: 'Umar Teacher',
    email: 'umar.teacher@example.com',
    assignedClasses: ['Hadeeth 1'],
    status: 'Active',
  },
];

export default function AdminTeachersPage() {
  return (
    <main className="space-y-6">
      <section className="flex flex-col gap-3 rounded-2xl border border-[#ddd4aa]/70 bg-[#fbfaf4] p-6 shadow-sm md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-medium text-[#8a7a2f]">Admin Panel</p>
          <h1 className="mt-1 text-2xl font-semibold tracking-tight text-[#2f3303]">
            Teachers
          </h1>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-[#68654f]">
            Manage teacher profiles, assigned classes, replacement access, and
            teaching responsibilities.
          </p>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-4">
        <StatsCard title="Total Teachers" value={teachers.length.toString()} />
        <StatsCard title="Active Teachers" value="3" />
        <StatsCard title="Assigned Classes" value="4" />
        <StatsCard title="Replacement Access" value="0" />
      </section>

      <section className="rounded-2xl border border-[#ddd4aa]/70 bg-white shadow-sm">
        <div className="flex flex-col gap-3 border-b border-[#eee7c8] p-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-base font-semibold text-[#2f3303]">
              Teacher List
            </h2>
            <p className="text-sm text-[#68654f]">
              View all teachers and the classes currently assigned to them.
            </p>
          </div>

          <div className="flex items-center gap-2 rounded-xl border border-[#ddd4aa] bg-[#fbfaf4] px-3 py-2 text-sm text-[#68654f]">
            <Search size={16} />
            <input
              type="text"
              placeholder="Search teachers..."
              className="w-48 bg-transparent outline-none placeholder:text-[#9a947a]"
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-200 text-left text-sm">
            <thead className="bg-[#fbfaf4] text-xs uppercase tracking-wide text-[#68654f]">
              <tr>
                <th className="px-4 py-3 font-semibold">Teacher</th>
                <th className="px-4 py-3 font-semibold">Email</th>
                <th className="px-4 py-3 font-semibold">Assigned Classes</th>
                <th className="px-4 py-3 font-semibold">Status</th>
                <th className="px-4 py-3 text-right font-semibold">Action</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-[#eee7c8]">
              {teachers.map((teacher) => (
                <tr key={teacher.id} className="transition hover:bg-[#fbfaf4]">
                  <td className="px-4 py-4">
                    <div className="flex items-center gap-3">
                      <div className="flex size-10 items-center justify-center rounded-full bg-[#f1ead0] text-[#4b5205]">
                        <UserRoundCheck size={18} />
                      </div>
                      <div>
                        <p className="font-medium text-[#2f3303]">
                          {teacher.name}
                        </p>
                        <p className="text-xs text-[#8c876d]">
                          Teacher ID: {teacher.id}
                        </p>
                      </div>
                    </div>
                  </td>

                  <td className="px-4 py-4 text-[#68654f]">{teacher.email}</td>

                  <td className="px-4 py-4">
                    <div className="flex flex-wrap gap-2">
                      {teacher.assignedClasses.map((className) => (
                        <span
                          key={className}
                          className="inline-flex items-center gap-1 rounded-full bg-[#f1ead0] px-3 py-1 text-xs font-medium text-[#4b5205]"
                        >
                          <BookOpen size={13} />
                          {className}
                        </span>
                      ))}
                    </div>
                  </td>

                  <td className="px-4 py-4">
                    <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-medium text-green-700">
                      {teacher.status}
                    </span>
                  </td>

                  <td className="px-4 py-4 text-right">
                    <button className="inline-flex size-9 items-center justify-center rounded-lg text-[#68654f] transition hover:bg-[#f1ead0] hover:text-[#2f3303]">
                      <MoreHorizontal size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}

function StatsCard({ title, value }: { title: string; value: string }) {
  return (
    <div className="rounded-2xl border border-[#ddd4aa]/70 bg-white p-5 shadow-sm">
      <p className="text-sm font-medium text-[#68654f]">{title}</p>
      <p className="mt-2 text-2xl font-semibold text-[#2f3303]">{value}</p>
    </div>
  );
}
