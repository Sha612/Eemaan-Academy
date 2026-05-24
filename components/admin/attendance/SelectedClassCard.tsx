// components/admin/attendance/SelectedClassCard.tsx

import type { AttendanceClass } from '@/lib/attendance/attendance-types';

type SelectedClassCardProps = {
  selectedClass?: AttendanceClass;
};

export function SelectedClassCard({ selectedClass }: SelectedClassCardProps) {
  return (
    <div className="rounded-2xl border border-[#ddd4aa]/70 bg-[#fbfaf4] p-6 shadow-sm">
      <h2 className="text-base font-semibold text-[#2f3303]">Selected Class</h2>

      <div className="mt-4 space-y-3 text-sm">
        <InfoRow label="Class" value={selectedClass?.name ?? 'Not selected'} />
        <InfoRow
          label="Teacher"
          value={selectedClass?.teacher ?? 'Not assigned'}
        />
        <InfoRow
          label="Schedule"
          value={selectedClass?.schedule ?? 'No schedule'}
        />
      </div>
    </div>
  );
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-[#8c876d]">{label}</p>
      <p className="font-medium text-[#2f3303]">{value}</p>
    </div>
  );
}
