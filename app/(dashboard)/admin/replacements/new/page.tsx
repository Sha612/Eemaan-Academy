import { createReplacementAction } from './actions';

import { PageShell } from '@/components/layout/pageShell';
import { PageHeader } from '@/components/layout/PageHeader';
import { Button } from '@/components/ui/button';

import { getClasses } from '@/modules/classes/services';
import { getTeachers } from '@/modules/teachers/services';

export default async function NewReplacementPage() {
  const [classesResponse, teachersResponse] = await Promise.all([
    getClasses(),
    getTeachers(),
  ]);

  const classes = Array.isArray(classesResponse)
    ? classesResponse
    : classesResponse.data || [];

  const teachers = Array.isArray(teachersResponse)
    ? teachersResponse
    : teachersResponse.data || [];

  return (
    <PageShell>
      <PageHeader
        label="Admin Panel"
        title="Create Replacement"
        description="Assign temporary teacher access to a class."
      />

      <form
        action={createReplacementAction}
        className="space-y-6 rounded-2xl border border-[#ddd4aa]/70 bg-white p-6 shadow-sm"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-2">
            <label className="text-sm font-medium text-[#2f3303]">
              Class
            </label>

            <select
              name="classId"
              required
              className="w-full rounded-xl border border-[#ddd4aa] bg-[#fbfaf4] px-4 py-3 text-sm outline-none transition focus:border-[#4b5205]"
            >
              <option value="">Select class</option>

              {classes.map((classItem: any) => (
                <option
                  key={classItem.id}
                  value={classItem.id}
                >
                  {classItem.name}
                </option>
              ))}
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-[#2f3303]">
              Replacement Teacher
            </label>

            <select
              name="replacementTeacherId"
              required
              className="w-full rounded-xl border border-[#ddd4aa] bg-[#fbfaf4] px-4 py-3 text-sm outline-none transition focus:border-[#4b5205]"
            >
              <option value="">Select teacher</option>

              {teachers.map((teacher: any) => (
                <option
                  key={teacher.id}
                  value={teacher.id}
                >
                  {teacher.firstName} {teacher.lastName}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-2">
            <label className="text-sm font-medium text-[#2f3303]">
              Start Date
            </label>

            <input
              type="date"
              name="startDate"
              required
              className="w-full rounded-xl border border-[#ddd4aa] bg-[#fbfaf4] px-4 py-3 text-sm outline-none transition focus:border-[#4b5205]"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-[#2f3303]">
              End Date
            </label>

            <input
              type="date"
              name="endDate"
              required
              className="w-full rounded-xl border border-[#ddd4aa] bg-[#fbfaf4] px-4 py-3 text-sm outline-none transition focus:border-[#4b5205]"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-[#2f3303]">
            Reason
          </label>

          <textarea
            name="reason"
            rows={4}
            placeholder="Reason for replacement assignment..."
            className="w-full rounded-xl border border-[#ddd4aa] bg-[#fbfaf4] px-4 py-3 text-sm outline-none transition focus:border-[#4b5205]"
          />
        </div>

        <div className="flex justify-end">
          <Button
            type="submit"
            className="bg-[#4b5205] hover:bg-[#2f3303]"
          >
            Create Replacement
          </Button>
        </div>
      </form>
    </PageShell>
  );
}