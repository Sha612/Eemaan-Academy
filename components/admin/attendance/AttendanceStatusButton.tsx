// components/admin/attendance/AttendanceStatusButton.tsx

import type {
  AttendanceStatus,
  AttendanceStatusOption,
} from '@/lib/attendance/attendance-types';

type AttendanceStatusButtonProps = {
  option: AttendanceStatusOption;
  selectedStatus?: AttendanceStatus;
  onClick: () => void;
};

export function AttendanceStatusButton({
  option,
  selectedStatus,
  onClick,
}: AttendanceStatusButtonProps) {
  const Icon = option.icon;
  const isActive = selectedStatus === option.value;

  return (
    <button
      type="button"
      onClick={onClick}
      className={`inline-flex items-center gap-2 rounded-xl border px-3 py-2 text-xs font-medium transition ${
        isActive ? option.activeClass : option.inactiveClass
      }`}
    >
      <Icon size={15} />
      {option.label}
    </button>
  );
}
