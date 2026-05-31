import { ClipboardCheck } from 'lucide-react';
import { serverApi } from '@/lib/server-api';
import { ClassResponse } from '@/modules/classes/types';
import {
  AttendanceResponse,
  EnrollmentResponse,
} from '@/modules/attendance/types';
import { AttendanceTable } from '@/modules/attendance/components/attendanceTable';

export default async function AdminAttendancePage() {
  const [classesResponse, enrollmentsResponse] = await Promise.all([
    serverApi<ClassResponse[] | { data: ClassResponse[] }>('/classes', {
      method: 'GET',
    }),
    serverApi<EnrollmentResponse[] | { data: EnrollmentResponse[] }>(
      '/enrollments',
      {
        method: 'GET',
      },
    ),
  ]);

  const classes = Array.isArray(classesResponse)
    ? classesResponse
    : classesResponse.data;

  const enrollments = Array.isArray(enrollmentsResponse)
    ? enrollmentsResponse
    : enrollmentsResponse.data;

  const attendanceByClass = await Promise.all(
    classes.map(async (classItem) => {
      const response = await serverApi<
        AttendanceResponse[] | { data: AttendanceResponse[] }
      >(`/attendance/class/${classItem.id}`, {
        method: 'GET',
      });

      const records = Array.isArray(response) ? response : response.data;

      return {
        classId: classItem.id,
        records,
      };
    }),
  );

  const classAttendance = classes.map((classItem) => {
    const classEnrollments = enrollments.filter(
      (enrollment) =>
        enrollment.class.id === classItem.id &&
        enrollment.enrollmentStatus === 'active',
    );

    const attendanceRecords =
      attendanceByClass.find((item) => item.classId === classItem.id)
        ?.records || [];

    const activeStudentIds = classEnrollments.map(
      (enrollment) => enrollment.student.id,
    );

    const markedRecords = attendanceRecords.filter((record) =>
      activeStudentIds.includes(record.student.id),
    );

    const present = markedRecords.filter(
      (record) => record.status === 'present',
    ).length;

    const absent = markedRecords.filter(
      (record) => record.status === 'absent',
    ).length;

    const late = markedRecords.filter(
      (record) => record.status === 'late',
    ).length;

    const isCompleted =
      activeStudentIds.length > 0 &&
      markedRecords.length >= activeStudentIds.length;

    return {
      id: classItem.id,
      className: classItem.name,
      teacher: classItem.teacher
        ? `${classItem.teacher.firstName} ${classItem.teacher.lastName}`
        : 'No teacher assigned',
      time: `${classItem.startTime || '--:--'} - ${
        classItem.endTime || '--:--'
      }`,
      totalStudents: activeStudentIds.length,
      present,
      absent,
      late,
      status: isCompleted ? 'completed' as const : 'pending' as const,
    };
  });

  return (
    <main className="space-y-6">
      <section className="rounded-2xl border border-[#ddd4aa] bg-[#fbfaf4] p-6 shadow-sm">
        <div className="flex items-center gap-2 text-[#4b5205]">
          <ClipboardCheck className="h-5 w-5" />
          <span className="text-sm font-medium">Attendance Management</span>
        </div>

        <h1 className="mt-2 text-2xl font-semibold text-[#2f3303]">
          Attendance
        </h1>

        <p className="mt-1 text-sm text-[#6f6a4d]">
          Select a class to mark or review attendance.
        </p>
      </section>

      <AttendanceTable classAttendance={classAttendance} />
    </main>
  );
}