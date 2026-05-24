'use client';

import { useMemo, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { ClipboardCheck, Save } from 'lucide-react';

import { PageShell } from '@/components/layout/pageShell';
import { PageHeader } from '@/components/layout/PageHeader';

import { AttendanceDetailsCard } from '@/components/admin/attendance/AttedanceDetailsCard';
import { SelectedClassCard } from '@/components/admin/attendance/SelectedClassCard';
import { AttendanceSummaryGrid } from '@/components/admin/attendance/AttendanceSummaryGrid';
import { StudentAttendanceTable } from '@/components/admin/attendance/StudentAttendanceTable';
import { AttendanceFooter } from '@/components/admin/attendance/AttendanceFooter';

import { attendanceClasses, statusOptions, students } from '@/lib/constants';
import { getAttendanceStats } from '@/lib/attendance/attendance-utils';
import type {
  AttendanceRecord,
  AttendanceStatus,
  AttendanceStatusOption,
} from '@/lib/attendance/attendance-types';

export default function AttendancePage() {
  const searchParams = useSearchParams();
  const preselectedClass = searchParams.get('class');

  const [selectedClass, setSelectedClass] = useState(preselectedClass || '1');
  const [selectedDate, setSelectedDate] = useState(
    new Date().toISOString().split('T')[0],
  );

  const [attendance, setAttendance] = useState<AttendanceRecord>({});

  const selectedClassDetails = useMemo(() => {
    return attendanceClasses.find((cls) => cls.id === selectedClass);
  }, [selectedClass]);

  const stats = getAttendanceStats(attendance, students.length);

  function updateAttendance(studentId: number, status: AttendanceStatus) {
    setAttendance((prev) => ({
      ...prev,
      [studentId]: prev[studentId] === status ? undefined : status,
    }));
  }

  function handleSave() {
    const payload = {
      classId: selectedClass,
      date: selectedDate,
      records: attendance,
    };

    console.log('Saving attendance:', payload);
    alert('Attendance saved successfully!');
  }

  const canSave = stats.markedCount === students.length;

  return (
    <PageShell>
      <PageHeader
        label="Attendance Management"
        title="Mark Student Attendance"
        icon={ClipboardCheck}
        description="Select a class and date, then record each student's attendance status before saving the register."
        actions={
          <button
            onClick={handleSave}
            disabled={!canSave}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#4b5205] px-5 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-[#2f3303] disabled:cursor-not-allowed disabled:opacity-50"
          >
            <Save size={18} />
            Save Attendance
          </button>
        }
      />

      <section className="grid gap-4 lg:grid-cols-[1.4fr_0.6fr]">
        <AttendanceDetailsCard
          classes={attendanceClasses}
          selectedClass={selectedClass}
          selectedDate={selectedDate}
          onClassChange={setSelectedClass}
          onDateChange={setSelectedDate}
        />

        <SelectedClassCard selectedClass={selectedClassDetails} />
      </section>

      <AttendanceSummaryGrid
        totalCount={students.length}
        presentCount={stats.presentCount}
        absentCount={stats.absentCount}
        lateCount={stats.lateCount}
        markedCount={stats.markedCount}
        progressPercentage={stats.progressPercentage}
      />

      <StudentAttendanceTable
        students={students}
        attendance={attendance}
        statusOptions={statusOptions as AttendanceStatusOption[]}
        remainingCount={stats.remainingCount}
        onUpdateAttendance={updateAttendance}
      />

      <AttendanceFooter
        markedCount={stats.markedCount}
        totalCount={students.length}
        remainingCount={stats.remainingCount}
        onSave={handleSave}
      />
    </PageShell>
  );
}
