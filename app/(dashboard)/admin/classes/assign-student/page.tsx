import Link from 'next/link';
import {
  ArrowLeft,
  BookOpen,
  CalendarDays,
  GraduationCap,
  Save,
} from 'lucide-react';
import { PageShell } from '@/components/layout/pageShell';
import { PageHeader } from '@/components/layout/PageHeader';

import { classes } from '@/lib/classes/classes-constants';
import { students } from '@/lib/classes/classes-constants';
export default function AdminAssignStudentPage() {
  return (
    <PageShell>
      <PageHeader
        label="Admin Panel "
        title="Assign Student to Class"
        backHref="/admin/classes"
        description="Enroll an existing student into one of the available classes."
        icon={GraduationCap}
      />

      <section className="rounded-2xl border border-[#ddd4aa]/70 bg-white p-6 shadow-sm">
        <form className="space-y-6">
          <div className="space-y-2">
            <label
              htmlFor="studentId"
              className="flex items-center gap-2 text-sm font-medium text-[#2f3303]"
            >
              <GraduationCap size={16} />
              Student
            </label>

            <select
              id="studentId"
              name="studentId"
              required
              className="w-full rounded-xl border border-[#ddd4aa] bg-[#fbfaf4] px-4 py-3 text-sm text-[#2f3303] outline-none transition focus:border-[#8a7a2f] focus:bg-white"
            >
              <option value="">Select a student</option>

              {students.map((student) => (
                <option key={student.id} value={student.id}>
                  {student.name} — {student.email}
                </option>
              ))}
            </select>
          </div>
          <div className="space-y-2">
            <label
              htmlFor="classId"
              className="flex items-center gap-2 text-sm font-medium text-[#2f3303]"
            >
              <BookOpen size={16} />
              Class
            </label>

            <select
              id="classId"
              name="classId"
              required
              className="w-full rounded-xl border border-[#ddd4aa] bg-[#fbfaf4] px-4 py-3 text-sm text-[#2f3303] outline-none transition focus:border-[#8a7a2f] focus:bg-white"
            >
              <option value="">Select a class</option>

              {classes.map((classItem) => (
                <option key={classItem.id} value={classItem.id}>
                  {classItem.name} — {classItem.teacher}
                </option>
              ))}
            </select>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <label
                htmlFor="enrollmentDate"
                className="flex items-center gap-2 text-sm font-medium text-[#2f3303]"
              >
                <CalendarDays size={16} />
                Enrollment Date
              </label>

              <input
                id="enrollmentDate"
                name="enrollmentDate"
                type="date"
                required
                className="w-full rounded-xl border border-[#ddd4aa] bg-[#fbfaf4] px-4 py-3 text-sm text-[#2f3303] outline-none transition focus:border-[#8a7a2f] focus:bg-white"
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="status"
                className="text-sm font-medium text-[#2f3303]"
              >
                Enrollment Status
              </label>

              <select
                id="status"
                name="status"
                required
                defaultValue="active"
                className="w-full rounded-xl border border-[#ddd4aa] bg-[#fbfaf4] px-4 py-3 text-sm text-[#2f3303] outline-none transition focus:border-[#8a7a2f] focus:bg-white"
              >
                <option value="active">Active</option>
                <option value="dropped">Dropped</option>
              </select>
            </div>
          </div>
          <div className="space-y-2">
            <label
              htmlFor="notes"
              className="text-sm font-medium text-[#2f3303]"
            >
              Notes
            </label>

            <textarea
              id="notes"
              name="notes"
              rows={4}
              placeholder="Optional notes about this enrollment..."
              className="w-full resize-none rounded-xl border border-[#ddd4aa] bg-[#fbfaf4] px-4 py-3 text-sm text-[#2f3303] outline-none transition placeholder:text-[#9a947a] focus:border-[#8a7a2f] focus:bg-white"
            />
          </div>
          <div className="flex flex-col gap-3 border-t border-[#eee7c8] pt-6 sm:flex-row sm:justify-end">
            <Link
              href="/admin/classes"
              className="inline-flex items-center justify-center rounded-xl border border-[#ddd4aa] bg-white px-4 py-2.5 text-sm font-medium text-[#68654f] transition hover:bg-[#f1ead0] hover:text-[#2f3303]"
            >
              Cancel
            </Link>

            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#4b5205] px-4 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-[#2f3303]"
            >
              <Save size={18} />
              Assign Student
            </button>
          </div>
        </form>
      </section>
    </PageShell>
  );
}
