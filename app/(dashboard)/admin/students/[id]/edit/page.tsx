import { notFound } from 'next/navigation';
import { EditStudentForm } from '@/modules/students/components/EditStudentForm';
import { serverApi } from '@/lib/server-api';
import { StudentEnrollment, StudentResponse } from '@/modules/students/types';
import { PageShell } from '@/components/layout/pageShell';
import { PageHeader } from '@/components/layout/PageHeader';

type EditStudentPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function EditStudentPage({
  params,
}: EditStudentPageProps) {
  const { id } = await params;

  try {
    const [student, enrollments] = await Promise.all([
      serverApi<StudentResponse>(`/students/${id}`, {
        method: 'GET',
      }),
      serverApi<StudentEnrollment[]>('/enrollments', {
        method: 'GET',
      }),
    ]);

    const studentEnrollments = enrollments.filter(
      (enrollment) => enrollment.student.id === Number(id),
    );

    return (
      <PageShell>
        <PageHeader
          label="Admin Panel"
          title="Edit Student Profile"
          backHref="/admin/students"
          description="Update student profile, login details, and class enrollment status.
"
        />
        <EditStudentForm student={student} enrollments={studentEnrollments} />
      </PageShell>
    );
  } catch {
    notFound();
  }
}
