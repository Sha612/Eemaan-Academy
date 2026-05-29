import { Save } from 'lucide-react';

type AttendanceFooterProps = {
  markedCount: number;
  totalCount: number;
  remainingCount: number;
  onSave: () => void;
};

export function AttendanceFooter({
  markedCount,
  totalCount,
  remainingCount,
  onSave,
}: AttendanceFooterProps) {
  const isComplete = markedCount === totalCount;

  return (
    <div className="flex flex-col gap-3 rounded-2xl border border-[#ddd4aa]/70 bg-[#f7f3df] px-6 py-4 md:flex-row md:items-center md:justify-between">
      <p className="text-sm text-[#68654f]">
        {isComplete ? (
          <span className="font-medium text-[#4b5205]">
            Attendance is complete and ready to save.
          </span>
        ) : (
          <span>
            Please mark{' '}
            <span className="font-semibold text-[#2f3303]">
              {remainingCount}
            </span>{' '}
            more student{remainingCount > 1 ? 's' : ''}.
          </span>
        )}
      </p>

      <button
        onClick={onSave}
        disabled={!isComplete}
        className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#4b5205] px-5 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-[#2f3303] disabled:cursor-not-allowed disabled:opacity-50"
      >
        <Save size={18} />
        Save Attendance
      </button>
    </div>
  );
}
