import {
  AttendanceCompletionStatus,
  AttendanceStatus,
} from '@/modules/attendance/types';

type BadgeStatus =
  | AttendanceStatus
  | AttendanceCompletionStatus;

type AttendanceStatusBadgeProps = {
  status: BadgeStatus;
};

export function AttendanceStatusBadge({
  status,
}: AttendanceStatusBadgeProps) {
  const styles: Record<BadgeStatus, string> = {
    present: 'bg-green-50 text-green-700',
    absent: 'bg-red-50 text-red-700',
    late: 'bg-yellow-50 text-yellow-700',
    excused: 'bg-blue-50 text-blue-700',
    dropped: 'bg-gray-100 text-gray-700',

    completed: 'bg-green-50 text-green-700',
    pending: 'bg-yellow-50 text-yellow-700',
  };

  return (
    <span
      className={`rounded-full px-3 py-1 text-xs font-medium capitalize ${styles[status]}`}
    >
      {status}
    </span>
  );
}