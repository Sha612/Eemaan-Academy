import Link from 'next/link';
import {
  AlertTriangle,
  CheckCircle2,
  ClipboardCheck,
  Clock,
  Eye,
  Users,
} from 'lucide-react';
import { AttendanceClassOverview } from '@/modules/attendance/types';
import { Button } from '@/components/ui/button';

type AttendanceTableProps = {
  classAttendance: AttendanceClassOverview[];
};

export function AttendanceTable({ classAttendance }: AttendanceTableProps) {
  return (
    <section className="overflow-hidden rounded-2xl border border-[#ddd4aa] bg-white shadow-sm">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[950px] text-left text-sm">
          <thead className="bg-[#fbfaf4] text-xs uppercase tracking-wide text-[#68654f]">
            <tr>
              <th className="px-4 py-3 font-semibold">Class</th>
              <th className="px-4 py-3 font-semibold">Teacher</th>
              <th className="px-4 py-3 font-semibold">Time</th>
              <th className="px-4 py-3 font-semibold">Students</th>
              <th className="px-4 py-3 font-semibold">Status</th>
              <th className="px-4 py-3 text-right font-semibold">Action</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-[#eee7c8]">
            {classAttendance.map((record) => (
              <tr key={record.id} className="transition hover:bg-[#fbfaf4]">
                <td className="px-4 py-4">
                  <div className="flex items-center gap-3">
                    <div className="flex size-10 items-center justify-center rounded-full bg-[#f1ead0] text-[#4b5205]">
                      <ClipboardCheck size={18} />
                    </div>

                    <div>
                      <p className="font-medium text-[#2f3303]">
                        {record.className}
                      </p>
                      <p className="text-xs text-[#8c876d]">
                        Class attendance
                      </p>
                    </div>
                  </div>
                </td>

                <td className="px-4 py-4 text-[#68654f]">
                  {record.teacher}
                </td>

                <td className="px-4 py-4">
                  <span className="inline-flex items-center gap-1 text-[#68654f]">
                    <Clock size={15} />
                    {record.time}
                  </span>
                </td>

                <td className="px-4 py-4">
                  <span className="inline-flex items-center gap-1 text-[#68654f]">
                    <Users size={15} />
                    {record.totalStudents}
                  </span>
                </td>

                <td className="px-4 py-4">
                  {record.status === 'completed' ? (
                    <span className="inline-flex items-center gap-1 rounded-full bg-green-50 px-3 py-1 text-xs font-medium text-green-700">
                      <CheckCircle2 size={13} />
                      Completed
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 rounded-full bg-amber-50 px-3 py-1 text-xs font-medium text-amber-700">
                      <AlertTriangle size={13} />
                      Pending
                    </span>
                  )}
                </td>

                <td className="px-4 py-4 text-right">
                  <Button asChild size="sm" variant="outline">
                    <Link href={`/admin/attendance/class/${record.id}`}>
                      <Eye className="mr-2 h-4 w-4" />
                      Mark Attendance
                    </Link>
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}