import {
  CheckCircle,
  Clock,
  MinusCircle,
  UserCheck,
  XCircle,
} from 'lucide-react';

type AttendanceSummaryGridProps = {
  totalCount: number;
  presentCount: number;
  absentCount: number;
  lateCount: number;
  excusedCount: number;
  markedCount: number;
  progressPercentage: number;
};

type SummaryCardProps = {
  label: string;
  value: number;
  icon: React.ReactNode;
};

function SummaryCard({ label, value, icon }: SummaryCardProps) {
  return (
    <div className="rounded-2xl border border-[#ddd4aa]/70 bg-white p-4 shadow-sm">
      <div className="flex items-center justify-between gap-3">
        <div>
          <p className="text-sm font-medium text-[#68654f]">{label}</p>
          <p className="mt-1 text-2xl font-bold text-[#2f3303]">{value}</p>
        </div>

        <div className="rounded-xl bg-[#f1ead0] p-2 text-[#4b5205]">
          {icon}
        </div>
      </div>
    </div>
  );
}

export function AttendanceSummaryGrid({
  totalCount,
  presentCount,
  absentCount,
  lateCount,
  markedCount,
  excusedCount,
  progressPercentage,
}: AttendanceSummaryGridProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
      <SummaryCard
        label="Total Students"
        value={totalCount}
        icon={<UserCheck className="h-5 w-5" />}
      />
      <SummaryCard
        label="Present"
        value={presentCount}
        icon={<CheckCircle className="h-5 w-5" />}
      />
      <SummaryCard
        label="Absent"
        value={absentCount}
        icon={<XCircle className="h-5 w-5" />}
      />
      <SummaryCard
        label="Late"
        value={lateCount}
        icon={<Clock className="h-5 w-5" />}
      />
      <SummaryCard label="Marked" value={markedCount} icon={<UserCheck className="h-5 w-5" />} />
      <SummaryCard label="Progress" value={progressPercentage} icon={<UserCheck className="h-5 w-5" />} />
      <SummaryCard
        label="Excused"
        value={excusedCount}
        icon={<MinusCircle className="h-5 w-5" />}
      />
    </div>
  );
}