import {
  AlertTriangle,
  CheckCircle2,
  ClipboardCheck,
  Clock,
  MoreHorizontal,
  Users,
  XCircle,
} from 'lucide-react';

export type AttendanceItem = {
  id: string;
  className: string;
  teacher: string;
  time: string;
  totalStudents: number;
  present: number;
  absent: number;
  late: number;
  status: string;
};
export type AttendanceTeacherItem = {
  id: string;
  teacher: string;
  status: string;
  checkIn: string;
};

export type AttendanceTableSectionProps = {
  classAttendance: AttendanceItem[];
};

export function AttendanceTable({
  classAttendance,
}: AttendanceTableSectionProps) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[950px] text-left text-sm">
        <thead className="bg-[#fbfaf4] text-xs uppercase tracking-wide text-[#68654f]">
          <tr>
            <th className="px-4 py-3 font-semibold">Class</th>
            <th className="px-4 py-3 font-semibold">Teacher</th>
            <th className="px-4 py-3 font-semibold">Time</th>
            <th className="px-4 py-3 font-semibold">Students</th>
            <th className="px-4 py-3 font-semibold">Present</th>
            <th className="px-4 py-3 font-semibold">Absent</th>
            <th className="px-4 py-3 font-semibold">Late</th>
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
                    <p className="text-xs text-[#8c876d]">Class attendance</p>
                  </div>
                </div>
              </td>

              <td className="px-4 py-4 text-[#68654f]">{record.teacher}</td>

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

              <td className="px-4 py-4 text-green-700">{record.present}</td>

              <td className="px-4 py-4 text-red-700">{record.absent}</td>

              <td className="px-4 py-4 text-amber-700">{record.late}</td>

              <td className="px-4 py-4">
                <AttendanceStatusBadge status={record.status} />
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
  );
}

function AttendanceStatusBadge({ status }: { status: string }) {
  if (status === 'Marked') {
    return (
      <span className="inline-flex items-center gap-1 rounded-full bg-green-50 px-3 py-1 text-xs font-medium text-green-700">
        <CheckCircle2 size={13} />
        Marked
      </span>
    );
  }

  return (
    <span className="inline-flex items-center gap-1 rounded-full bg-amber-50 px-3 py-1 text-xs font-medium text-amber-700">
      <AlertTriangle size={13} />
      Pending
    </span>
  );
}

export function TeacherAttendanceBadge({ status }: { status: string }) {
  if (status === 'Present') {
    return (
      <span className="inline-flex items-center gap-1 rounded-full bg-green-50 px-3 py-1 text-xs font-medium text-green-700">
        <CheckCircle2 size={13} />
        Present
      </span>
    );
  }

  return (
    <span className="inline-flex items-center gap-1 rounded-full bg-red-50 px-3 py-1 text-xs font-medium text-red-700">
      <XCircle size={13} />
      Not marked
    </span>
  );
}
