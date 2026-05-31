import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Megaphone } from 'lucide-react';
import { serverApi } from '@/lib/server-api';
import { ClassResponse } from '@/modules/classes/types';
import { AnnouncementResponse } from '@/modules/announcements/types';
import { updateAnnouncementAction } from './actions';
import { AnnouncementForm } from '@/modules/announcements/components/AnnouncementForm';

type EditAnnouncementPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function EditAnnouncementPage({
  params,
}: EditAnnouncementPageProps) {
  const { id } = await params;

  try {
    const [announcement, classesResponse] = await Promise.all([
      serverApi<AnnouncementResponse>(`/announcements/${id}`, {
        method: 'GET',
      }),
      serverApi<ClassResponse[] | { data: ClassResponse[] }>('/classes', {
        method: 'GET',
      }),
    ]);

    const classes = Array.isArray(classesResponse)
      ? classesResponse
      : classesResponse.data;

    const updateAnnouncementWithId = updateAnnouncementAction.bind(
      null,
      announcement.id,
    );

    return (
      <main className="space-y-6">
        <section className="flex flex-col gap-3 rounded-2xl border border-[#ddd4aa]/70 bg-[#fbfaf4] p-6 shadow-sm md:flex-row md:items-center md:justify-between">
          <div>
            <p className="mb-2 inline-flex items-center gap-2 rounded-full border border-[#d8d0a2] bg-white px-3 py-1 text-xs font-medium text-[#8a7a2f]">
              <Megaphone size={14} />
              Admin Announcements
            </p>

            <h1 className="text-2xl font-bold text-[#2f3303]">
              Edit Announcement
            </h1>

            <p className="mt-1 text-sm text-[#68654f]">
              Update announcement content, audience, priority, and target class.
            </p>
          </div>

          <Link
            href="/admin/announcements"
            className="rounded-xl border border-[#ddd4aa] bg-white px-4 py-2 text-sm font-medium text-[#4b5205] shadow-sm transition hover:bg-[#f1ead0]"
          >
            Back to Announcements
          </Link>
        </section>

        <section className="rounded-2xl border border-[#ddd4aa]/70 bg-white p-6 shadow-sm">
          <AnnouncementForm
            classes={classes}
            action={updateAnnouncementWithId}
            announcement={announcement}
            submitLabel="Update Announcement"
          />
        </section>
      </main>
    );
  } catch {
    notFound();
  }
}
