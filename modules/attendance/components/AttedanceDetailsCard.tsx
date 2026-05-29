import { Calendar } from 'lucide-react';
import type { AttendanceClass } from '@/lib/attendance/attendance-types';

type AttendanceDetailsCardProps = {
  classes: AttendanceClass[];
  selectedClass: string;
  selectedDate: string;
  onClassChange: (classId: string) => void;
  onDateChange: (date: string) => void;
};

export function AttendanceDetailsCard({
  classes,
  selectedClass,
  selectedDate,
  onClassChange,
  onDateChange,
}: AttendanceDetailsCardProps) {
  return (
    <div className="rounded-2xl border border-[#ddd4aa]/70 bg-[#fbfaf4] p-6 shadow-sm">
      <div className="mb-5">
        <h2 className="text-base font-semibold text-[#2f3303]">
          Attendance Details
        </h2>
        <p className="mt-1 text-sm text-[#68654f]">
          Choose the class and attendance date.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <label className="text-sm font-medium text-[#3f4214]">
            Select Class <span className="text-red-600">*</span>
          </label>

          <select
            value={selectedClass}
            onChange={(event) => onClassChange(event.target.value)}
            className="h-11 w-full rounded-xl border border-[#d8d0a7] bg-white px-4 text-sm text-[#2f3303] outline-none transition focus:border-[#8a7a2f] focus:ring-4 focus:ring-[#ddd4aa]/40"
          >
            {classes.map((cls) => (
              <option key={cls.id} value={cls.id}>
                {cls.name}
              </option>
            ))}
          </select>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-[#3f4214]">
            Date <span className="text-red-600">*</span>
          </label>

          <div className="relative">
            <Calendar
              className="absolute left-3 top-1/2 -translate-y-1/2 text-[#8c876d]"
              size={18}
            />

            <input
              type="date"
              value={selectedDate}
              onChange={(event) => onDateChange(event.target.value)}
              className="h-11 w-full rounded-xl border border-[#d8d0a7] bg-white pl-10 pr-4 text-sm text-[#2f3303] outline-none transition focus:border-[#8a7a2f] focus:ring-4 focus:ring-[#ddd4aa]/40"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
