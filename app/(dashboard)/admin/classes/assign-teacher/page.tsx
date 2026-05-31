import { PageShell } from '@/components/layout/pageShell';
import { PageHeader } from '@/components/layout/PageHeader';
import { AssignTeacherForm } from '@/modules/classes/components/AssignTeacherForm';
import { getClasses } from '@/modules/classes/services';
import { getTeachers } from '@/modules/teachers/services';

type AssignTeacherPageProps = {
  searchParams: Promise<{
    teacherId?: string;
    classId?:string;
  }>;
};

export default async function AssignTeacherPage({
  searchParams,
}: AssignTeacherPageProps) {
  const { teacherId, classId } = await searchParams;

  const [classesResponse, teachersResponse] = await Promise.all([
    getClasses(),
    getTeachers(),
  ]);

  return (
    <PageShell>
      <PageHeader
        label="Admin Panel"
        title="Assign Teacher to Class"
        backHref="/admin/classes"
        description="Assign a teacher to a class or change existing class-teacher assignments."
      />

      <AssignTeacherForm
        classes={classesResponse.data}
        teachers={teachersResponse.data}
        selectedTeacherId={teacherId}
        selectedClassId={classId}
      />
    </PageShell>
  );
}
