import { Search, GraduationCap, Pencil, BookOpen } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { getStudents } from '@/modules/students/services';
import { getEnrollments } from '@/modules/enrollments/services';

export default async function AdminStudentsPage() {
  const [studentsResponse, enrollments] = await Promise.all([
    getStudents(1, 10),
    getEnrollments(),
  ]);

  const students = studentsResponse.data ?? [];
  const meta = studentsResponse.meta;

  const activeStudents = students.filter(
    (student) => student.user?.isActive,
  ).length;

  const activeEnrollments = enrollments.filter(
    (enrollment) =>
      !enrollment.enrollmentStatus || enrollment.enrollmentStatus === 'active',
  );

  const studentsWithClasses = students.map((student) => {
    const assignedClasses = activeEnrollments
      .filter((enrollment) => enrollment.student?.id === student.id)
      .map((enrollment) => enrollment.class)
      .filter(Boolean);

    return {
      ...student,
      assignedClasses,
    };
  });

  const enrolledStudentsCount = studentsWithClasses.filter(
    (student) => student.assignedClasses.length > 0,
  ).length;

  return (
    <main className="space-y-6">
      <section className="flex flex-col gap-3 rounded-2xl border border-[#ddd4aa]/70 bg-[#fbfaf4] p-6 shadow-sm md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-medium text-[#8a7a2f]">Admin Panel</p>
          <h1 className="mt-1 text-2xl font-semibold tracking-tight text-[#2f3303]">
            Students
          </h1>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-[#68654f]">
            Manage student profiles, enrolled classes, academic access, and
            student records.
          </p>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-4">
        <StatsCard title="Total Students" value={meta.total.toString()} />
        <StatsCard title="Active Students" value={activeStudents.toString()} />
        <StatsCard
          title="Students Enrolled"
          value={enrolledStudentsCount.toString()}
        />
        <StatsCard
          title="Total Enrollments"
          value={activeEnrollments.length.toString()}
        />
      </section>

      <section className="rounded-2xl border border-[#ddd4aa]/70 bg-white shadow-sm">
        <div className="flex flex-col gap-3 border-b border-[#eee7c8] p-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-base font-semibold text-[#2f3303]">
              Student List
            </h2>
            <p className="text-sm text-[#68654f]">
              View and manage all registered students.
            </p>
          </div>

          <div className="flex items-center gap-2 rounded-xl border border-[#ddd4aa] bg-[#fbfaf4] px-3 py-2 text-sm text-[#68654f]">
            <Search size={16} />
            <input
              type="text"
              placeholder="Search students..."
              className="w-48 bg-transparent outline-none placeholder:text-[#9a947a]"
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-200 text-left text-sm">
            <thead className="bg-[#fbfaf4] text-xs uppercase tracking-wide text-[#68654f]">
              <tr>
                <th className="px-4 py-3 font-semibold">Student</th>
                <th className="px-4 py-3 font-semibold">Login Email</th>
                <th className="px-4 py-3 font-semibold">Classes</th>
                <th className="px-4 py-3 font-semibold">Status</th>
                <th className="px-4 py-3 text-right font-semibold">Action</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-[#eee7c8]">
              {studentsWithClasses.length === 0 ? (
                <tr>
                  <td
                    colSpan={6}
                    className="px-4 py-8 text-center text-[#8c876d]"
                  >
                    No students found.
                  </td>
                </tr>
              ) : (
                studentsWithClasses.map((student) => (
                  <tr
                    key={student.id}
                    className="transition hover:bg-[#fbfaf4]"
                  >
                    <td className="px-4 py-4">
                      <div className="flex items-center gap-3">
                        <div className="flex size-10 items-center justify-center rounded-full bg-[#f1ead0] text-[#4b5205]">
                          <GraduationCap size={18} />
                        </div>

                        <div>
                          <p className="font-medium text-[#2f3303]">
                            {student.firstName} {student.lastName}
                          </p>
                          <p className="text-xs text-[#8c876d]">
                            Student ID: {student.id}
                          </p>
                        </div>
                      </div>
                    </td>

                    <td className="px-4 py-4">
                      <p className="text-sm text-[#2f3303]">
                        {student.user?.email ?? 'No login email'}
                      </p>
                    </td>

                    <td className="px-4 py-4">
                      {student.assignedClasses.length > 0 ? (
                        <div className="flex flex-col gap-1">
                          {student.assignedClasses.map((classItem) => (
                            <span
                              key={classItem.id}
                              className="inline-flex w-fit items-center gap-1 rounded-full bg-[#f1ead0] px-3 py-1 text-xs font-medium text-[#4b5205]"
                            >
                              <BookOpen size={13} />
                              {classItem.name}
                            </span>
                          ))}
                        </div>
                      ) : (
                        <span className="text-xs text-[#8c876d]">
                          Not assigned
                        </span>
                      )}
                    </td>

                    <td className="px-4 py-4">
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-medium ${
                          student.user?.isActive
                            ? 'bg-green-50 text-green-700'
                            : 'bg-red-50 text-red-700'
                        }`}
                      >
                        {student.user?.isActive ? 'Active' : 'Inactive'}
                      </span>
                    </td>

                    <td className="px-4 py-4 text-right">
                      <Button
                        asChild
                        variant="outline"
                        size="sm"
                        className="border-[#d8c98b] text-[#4b5205] hover:bg-[#f4efd8]"
                      >
                        <Link href={`/admin/students/${student.id}/edit`}>
                          <Pencil className="mr-2 h-4 w-4" />
                          Edit
                        </Link>
                      </Button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        <div className="flex items-center justify-between border-t border-[#eee7c8] px-4 py-3 text-sm text-[#68654f]">
          <p>
            Page {meta.page} of {meta.totalPages}
          </p>
          <p>{meta.total} students</p>
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
