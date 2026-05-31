'use client';

import { useRouter } from 'next/navigation';
import { useActionState, useEffect } from 'react';
import Link from 'next/link';
import { BookOpen, GraduationCap, Save } from 'lucide-react';
import {
  assignStudentAction,
  type AssignStudentState,
} from '@/app/(dashboard)/admin/classes/assign-student/actions';
import type { ClassResponse } from '@/modules/classes/types';
import type { StudentResponse } from '@/modules/students/types';

type AssignStudentFormProps = {
  classes: ClassResponse[];
  students: StudentResponse[];
  selectedStudentId?: string;
};

const initialState: AssignStudentState = {
  success: false,
  message: '',
};

export function AssignStudentForm({
  classes,
  students,
  selectedStudentId,
}: AssignStudentFormProps) {
  const router = useRouter();

  const [state, formAction, isPending] = useActionState(
    assignStudentAction,
    initialState,
  );

  useEffect(() => {
    if (state.success) {
      router.push('/admin/classes');
    }
  }, [state.success, router]);

  return (
    <section className="rounded-2xl border border-[#ddd4aa]/70 bg-white p-6 shadow-sm">
      <form action={formAction} className="space-y-6">
        {state.message && (
          <div
            className={`rounded-xl border px-4 py-3 text-sm ${
              state.success
                ? 'border-green-200 bg-green-50 text-green-700'
                : 'border-red-200 bg-red-50 text-red-700'
            }`}
          >
            {state.message}
          </div>
        )}

        <div className="space-y-2">
          <label
            htmlFor="studentId"
            className="flex items-center gap-2 text-sm font-medium text-[#2f3303]"
          >
            <GraduationCap size={16} />
            Student
          </label>

          <select
            name="studentId"
            defaultValue={selectedStudentId || ''}
            required
            className="h-10 w-full rounded-md border border-input bg-background px-3 text-sm"
          >
            <option value="">Select student</option>

            {students.map((student) => (
              <option key={student.id} value={student.id}>
                {student.id} - {student.firstName} {student.lastName}
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
            className="w-full rounded-xl border border-[#ddd4aa] bg-[#fbfaf4] px-4 py-3 text-sm text-[#2f3303]"
          >
            <option value="">Select a class</option>
            {classes.map((classItem) => (
              <option key={classItem.id} value={classItem.id}>
                {classItem.name}
              </option>
            ))}
          </select>
        </div>

        <textarea
          name="notes"
          rows={4}
          placeholder="Optional notes..."
          className="w-full resize-none rounded-xl border border-[#ddd4aa] bg-[#fbfaf4] px-4 py-3 text-sm text-[#2f3303]"
        />

        <div className="flex justify-end gap-3 border-t border-[#eee7c8] pt-6">
          <Link
            href="/admin/classes"
            className="rounded-xl border px-4 py-2.5 text-sm"
          >
            Cancel
          </Link>

          <button
            type="submit"
            disabled={isPending}
            className="inline-flex items-center gap-2 rounded-xl bg-[#4b5205] px-4 py-2.5 text-sm font-medium text-white disabled:opacity-60"
          >
            <Save size={18} />
            {isPending ? 'Assigning...' : 'Assign Student'}
          </button>
        </div>
      </form>
    </section>
  );
}
