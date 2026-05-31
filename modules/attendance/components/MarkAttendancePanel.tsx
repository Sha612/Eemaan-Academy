'use client';

import { useMemo, useState } from 'react';
import {
  CheckCircle2,
  Clock,
  MinusCircle,
  ShieldAlert,
  XCircle,
} from 'lucide-react';
import { AttendanceSummaryGrid } from './AttendanceSummaryGrid';
import { StudentAttendanceTable } from './StudentAttendanceTable';
import { AttendanceFooter } from './AttendanceFooter';
import { SelectedClassCard } from './SelectedClassCard';
import {
  AttendanceRecord,
  AttendanceStatus,
  AttendanceStatusOption,
  AttendanceStudent,
} from '@/modules/attendance/types';
import { saveClassAttendanceAction } from '@/app/(dashboard)/admin/attendance/class/[classId]/actions';

type MarkAttendancePanelProps = {
  classId: number;
  className: string;
  teacher: string;
  schedule: string;
  students: AttendanceStudent[];
  initialAttendance: AttendanceRecord;
};

const statusOptions: AttendanceStatusOption[] = [
  {
    label: 'Present',
    value: 'present',
    icon: CheckCircle2,
    activeClass: 'border-green-200 bg-green-50 text-green-700',
    inactiveClass: 'border-[#ddd4aa] bg-white text-[#68654f] hover:bg-green-50',
  },
  {
    label: 'Absent',
    value: 'absent',
    icon: XCircle,
    activeClass: 'border-red-200 bg-red-50 text-red-700',
    inactiveClass: 'border-[#ddd4aa] bg-white text-[#68654f] hover:bg-red-50',
  },
  {
    label: 'Late',
    value: 'late',
    icon: Clock,
    activeClass: 'border-yellow-200 bg-yellow-50 text-yellow-700',
    inactiveClass:
      'border-[#ddd4aa] bg-white text-[#68654f] hover:bg-yellow-50',
  },
  {
    label: 'Excused',
    value: 'excused',
    icon: ShieldAlert,
    activeClass: 'border-blue-200 bg-blue-50 text-blue-700',
    inactiveClass: 'border-[#ddd4aa] bg-white text-[#68654f] hover:bg-blue-50',
  },
  {
    label: 'Dropped',
    value: 'dropped',
    icon: MinusCircle,
    activeClass: 'border-gray-200 bg-gray-100 text-gray-700',
    inactiveClass: 'border-[#ddd4aa] bg-white text-[#68654f] hover:bg-gray-50',
  },
];

export function MarkAttendancePanel({
  classId,
  className,
  teacher,
  schedule,
  students,
  initialAttendance,
}: MarkAttendancePanelProps) {
  const [attendance, setAttendance] =
    useState<AttendanceRecord>(initialAttendance);

  const stats = useMemo(() => {
    const values = Object.values(attendance);

    const presentCount = values.filter((status) => status === 'present').length;
    const absentCount = values.filter((status) => status === 'absent').length;
    const lateCount = values.filter((status) => status === 'late').length;
    const markedCount = values.length;
    const excusedCount = values.filter((status) => status === 'excused').length;
    const remainingCount = Math.max(students.length - markedCount, 0);

    const progressPercentage =
      students.length > 0
        ? Math.round((markedCount / students.length) * 100)
        : 0;

    return {
      presentCount,
      absentCount,
      lateCount,
      excusedCount,
      markedCount,
      remainingCount,
      progressPercentage,
    };
  }, [attendance, students.length]);

  const action = saveClassAttendanceAction.bind(null, classId);

  function updateAttendance(studentId: number, status: AttendanceStatus) {
    setAttendance((current) => ({
      ...current,
      [studentId]: status,
    }));
  }

  return (
    <div className="space-y-6">
      <SelectedClassCard
        selectedClass={{
          id: String(classId),
          name: className,
          teacher,
          schedule,
        }}
      />

      <AttendanceSummaryGrid
        totalCount={students.length}
        presentCount={stats.presentCount}
        absentCount={stats.absentCount}
        lateCount={stats.lateCount}
        excusedCount={stats.excusedCount}
        markedCount={stats.markedCount}
        progressPercentage={stats.progressPercentage}
      />

      <form action={action} className="space-y-6">
        <input
          type="hidden"
          name="attendance"
          value={JSON.stringify(attendance)}
          readOnly
        />

        <input
          type="hidden"
          name="originalAttendance"
          value={JSON.stringify(initialAttendance)}
          readOnly
        />

        <StudentAttendanceTable
          students={students.map((student, index) => ({
            id: student.id,
            name: `${student.firstName} ${student.lastName}`,
            rollNumber: String(index + 1).padStart(2, '0'),
          }))}
          attendance={attendance}
          statusOptions={statusOptions}
          remainingCount={stats.remainingCount}
          onUpdateAttendance={updateAttendance}
        />

        <AttendanceFooter
          markedCount={stats.markedCount}
          totalCount={students.length}
          remainingCount={stats.remainingCount}
          onSave={() => undefined}
        />
      </form>
    </div>
  );
}
