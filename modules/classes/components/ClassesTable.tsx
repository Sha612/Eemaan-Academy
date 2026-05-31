import { BookOpen, Pencil, UserRoundCheck, Users } from 'lucide-react';
import type { ClassResponse } from '../types';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

type ClassTableRow = ClassResponse & {
  studentsCount?: number;
};

type ClassesTableProps = {
  classes: ClassTableRow[];
};

export function ClassesTable({ classes }: ClassesTableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-225 text-left text-sm">
        <thead className="bg-[#fbfaf4] text-xs uppercase tracking-wide text-[#68654f]">
          <tr>
            <th className="px-4 py-3 font-semibold">Class</th>
            <th className="px-4 py-3 font-semibold">Subject</th>
            <th className="px-4 py-3 font-semibold">Primary Teacher</th>
            <th className="px-4 py-3 font-semibold">Students</th>
            <th className="px-4 py-3 font-semibold">Schedule</th>
            <th className="px-4 py-3 font-semibold">Meeting Link</th>
            <th className="px-4 py-3 text-right font-semibold">Action</th>
          </tr>
        </thead>

        <tbody className="divide-y divide-[#eee7c8]">
          {classes.length === 0 ? (
            <tr>
              <td colSpan={7} className="px-4 py-8 text-center text-[#8c876d]">
                No classes found.
              </td>
            </tr>
          ) : (
            classes.map((classItem) => (
              <tr key={classItem.id} className="transition hover:bg-[#fbfaf4]">
                <td className="px-4 py-4">
                  <div className="flex items-center gap-3">
                    <div className="flex size-10 items-center justify-center rounded-full bg-[#f1ead0] text-[#4b5205]">
                      <BookOpen size={18} />
                    </div>

                    <div>
                      <p className="font-medium text-[#2f3303]">
                        {classItem.name}
                      </p>
                      <p className="text-xs text-[#8c876d]">
                        Level {classItem.level}
                      </p>
                    </div>
                  </div>
                </td>

                <td className="px-4 py-4 text-[#68654f]">
                  {classItem.subject}
                </td>

                <td className="px-4 py-4">
                  <span className="inline-flex items-center gap-1 rounded-full bg-[#f1ead0] px-3 py-1 text-xs font-medium text-[#4b5205]">
                    <UserRoundCheck size={13} />
                    {classItem.teacher
                      ? `${classItem.teacher.firstName} ${classItem.teacher.lastName}`
                      : 'Not assigned'}
                  </span>
                </td>

                <td className="px-4 py-4">
                  <span className="inline-flex items-center gap-1 text-[#68654f]">
                    <Users size={15} />
                    {classItem.studentsCount ?? 0}
                  </span>
                </td>

                <td className="px-4 py-4 text-[#68654f]">
                  {classItem.day && classItem.startTime && classItem.endTime
                    ? `${classItem.day} • ${classItem.startTime} - ${classItem.endTime}`
                    : 'No schedule'}
                </td>

                <td className="px-4 py-4">
                  {classItem.meetingUrl ? (
                    <a
                      href={classItem.meetingUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs font-medium text-[#4b5205] underline-offset-4 hover:underline"
                    >
                      Open link
                    </a>
                  ) : (
                    <span className="text-xs text-[#8c876d]">No link</span>
                  )}
                </td>

                <td className="px-4 py-4 text-right">
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="border-[#d8c98b] text-[#4b5205] hover:bg-[#f4efd8]"
                  >
                    <Link href={`/admin/classes/${classItem.id}/edit`}>
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
  );
}
