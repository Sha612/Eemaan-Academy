import { notFound } from 'next/navigation';
import { serverApi } from '@/lib/server-api';
import { EditTeacherForm } from '@/modules/teachers/components/EditTeacherForm';
import { TeacherResponse } from '@/modules/teachers/types';
import { ClassResponse } from '@/modules/classes/types';
import { PageShell } from '@/components/layout/pageShell';
import { PageHeader } from '@/components/layout/PageHeader';

type EditTeacherPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function EditTeacherPage({
  params,
}: EditTeacherPageProps) {
  const { id } = await params;

  let teacher: TeacherResponse;
  let assignedClasses: ClassResponse[];

  try {
    const [teacherResponse, classesResponse] = await Promise.all([
      serverApi<TeacherResponse>(`/teachers/${id}`, {
        method: 'GET',
      }),
      serverApi<{ data: ClassResponse[] }>('/classes', {
        method: 'GET',
      }),
    ]);

    teacher = teacherResponse;

    assignedClasses = classesResponse.data.filter(
      (classItem) => classItem.teacher?.id === Number(id),
    );
  } catch {
    notFound();
  }

  return (
    <PageShell>
      <PageHeader
        label="Admin Panel"
        title="Edit Teacher Profile"
        backHref="/admin/teachers"
        description="Update teacher profile, login details, and class assignment."
      />

      <EditTeacherForm teacher={teacher} assignedClasses={assignedClasses} />
    </PageShell>
  );
}