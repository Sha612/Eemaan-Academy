import { notFound } from 'next/navigation';
import { serverApi } from '@/lib/server-api';
import { EditClassForm } from '@/modules/classes/components/EditClassForm';
import { ClassResponse } from '@/modules/classes/types';

type EditClassPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function EditClassPage({ params }: EditClassPageProps) {
  const { id } = await params;

  try {
    const classItem = await serverApi<ClassResponse>(`/classes/${id}`, {
      method: 'GET',
    });

    return (
      <div className="mx-auto max-w-4xl space-y-6">
        <EditClassForm classItem={classItem} />
      </div>
    );
  } catch {
    notFound();
  }
}