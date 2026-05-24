// components/admin/attendance/AttendanceSummaryGrid.tsx

import {
  CheckCircle2,
  ClipboardCheck,
  Clock,
  Users,
  XCircle,
} from 'lucide-react';
import { SummaryCard } from '@/components/admin/attendance/attendanceFunctions';

type AttendanceSummaryGridProps = {
  totalCount: number;
  presentCount: number;
  absentCount: number;
  lateCount: number;
  markedCount: number;
  progressPercentage: number;
};

export function AttendanceSummaryGrid({
  totalCount,
  presentCount,
  absentCount,
  lateCount,
  markedCount,
  progressPercentage,
}: AttendanceSummaryGridProps) {
  return (
    <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
      <SummaryCard
        title="Total Students"
        value={totalCount}
        icon={Users}
        helper="Students enrolled"
      />

      <SummaryCard
        title="Present"
        value={presentCount}
        icon={CheckCircle2}
        helper="Marked present"
      />

      <SummaryCard
        title="Absent"
        value={absentCount}
        icon={XCircle}
        helper="Marked absent"
      />

      <SummaryCard
        title="Late"
        value={lateCount}
        icon={Clock}
        helper="Arrived late"
      />

      <SummaryCard
        title="Progress"
        value={`${markedCount}/${totalCount}`}
        icon={ClipboardCheck}
        helper={`${progressPercentage}% completed`}
      />
    </section>
  );
}
