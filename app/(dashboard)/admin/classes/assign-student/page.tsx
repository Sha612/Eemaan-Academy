import { PageHeader } from '@/components/layout/PageHeader';
import { PageShell } from '@/components/layout/pageShell';
import { AssignStudentForm } from '@/modules/classes/components/AssignStudentForm';
import { getClasses } from '@/modules/classes/services';
import { getStudents } from '@/modules/students/services';

type AssignStudentPageProps = {
  searchParams: Promise<{
    studentId?: string;
  }>;
};

export default async function AssignStudentPage({
  searchParams,
}: AssignStudentPageProps) {
  const { studentId } = await searchParams;

  const [classesResponse, studentsResponse] = await Promise.all([
    getClasses(),
    getStudents(),
  ]);

  return (
    <PageShell>
      <PageHeader
        label="Admin Panel"
        title="Assign Student to Class"
        backHref="/admin/classes"
        description="Assign a student to a class or change existing class-student assignments."
      />

       <AssignStudentForm
        classes={classesResponse.data}
        students={studentsResponse.data}
        selectedStudentId={studentId}
      />
    </PageShell>
  );
}
