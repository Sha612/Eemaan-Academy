import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ClipboardCheck } from 'lucide-react';
import { serverApi } from '@/lib/server-api';
import { ClassResponse } from '@/modules/classes/types';
import {
  AttendanceRecord,
  AttendanceResponse,
  EnrollmentResponse,
} from '@/modules/attendance/types';
import { MarkAttendancePanel } from '@/modules/attendance/components/MarkAttendancePanel';
import { Button } from '@/components/ui/button';

type AttendanceClassPageProps = {
  params: Promise<{
    classId: string;
  }>;
};

export default async function AttendanceClassPage({
  params,
}: AttendanceClassPageProps) {
  const { classId } = await params;
  const numericClassId = Number(classId);

  try {
    const [classItem, enrollmentsResponse, attendanceResponse] =
      await Promise.all([
        serverApi<ClassResponse>(`/classes/${classId}`, {
          method: 'GET',
        }),
        serverApi<EnrollmentResponse[] | { data: EnrollmentResponse[] }>(
          '/enrollments',
          {
            method: 'GET',
          },
        ),
        serverApi<AttendanceResponse[] | { data: AttendanceResponse[] }>(
          `/attendance/class/${classId}`,
          {
            method: 'GET',
          },
        ),
      ]);

    const enrollments = Array.isArray(enrollmentsResponse)
      ? enrollmentsResponse
      : enrollmentsResponse.data;

    const attendanceRecords = Array.isArray(attendanceResponse)
      ? attendanceResponse
      : attendanceResponse.data;

    const students = enrollments
      .filter(
        (enrollment) =>
          enrollment.class.id === numericClassId &&
          enrollment.enrollmentStatus === 'active',
      )
      .map((enrollment) => enrollment.student);

    const initialAttendance = attendanceRecords.reduce((acc, record) => {
      acc[record.student.id] = record.status;
      return acc;
    }, {} as AttendanceRecord);

    return (
      <main className="space-y-6">
        <section className="rounded-2xl border border-[#ddd4aa] bg-[#fbfaf4] p-6 shadow-sm">
          <Button
            asChild
            variant="ghost"
            size="sm"
            className="-ml-3 mb-3 text-[#4b5205] hover:bg-[#f1ead0]"
          >
            <Link href="/admin/attendance">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Attendance
            </Link>
          </Button>

          <div className="flex items-center gap-2 text-[#4b5205]">
            <ClipboardCheck className="h-5 w-5" />
            <span className="text-sm font-medium">Mark Attendance</span>
          </div>

          <h1 className="mt-2 text-2xl font-semibold text-[#2f3303]">
            {classItem.name}
          </h1>

          <p className="mt-1 text-sm text-[#6f6a4d]">
            {classItem.subject} · Level {classItem.level}
          </p>
        </section>

        <MarkAttendancePanel
          classId={numericClassId}
          className={classItem.name}
          teacher={
            classItem.teacher
              ? `${classItem.teacher.firstName} ${classItem.teacher.lastName}`
              : 'No teacher assigned'
          }
          schedule={`${classItem.day || 'No day'} · ${
            classItem.startTime || '--:--'
          } - ${classItem.endTime || '--:--'}`}
          students={students}
          initialAttendance={initialAttendance}
        />
      </main>
    );
  } catch {
    notFound();
  }
}