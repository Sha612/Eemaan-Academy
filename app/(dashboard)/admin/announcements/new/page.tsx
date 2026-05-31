import { Megaphone } from 'lucide-react';
import Link from 'next/link';
import { createAnnouncementAction } from './actions';
import { serverApi } from '@/lib/server-api';
import { ClassResponse } from '@/modules/classes/types';
import { AnnouncementForm } from '@/modules/announcements/components/AnnouncementForm';

export default async function NewAnnouncementPage() {
  const classesResponse = await serverApi<
    ClassResponse[] | { data: ClassResponse[] }
  >('/classes', {
    method: 'GET',
  });

  const classes = Array.isArray(classesResponse)
    ? classesResponse
    : classesResponse.data;

  return (
    <main className="space-y-6">
      <section className="flex flex-col gap-3 rounded-2xl border border-[#ddd4aa]/70 bg-[#fbfaf4] p-6 shadow-sm md:flex-row md:items-center md:justify-between">
        <div>
          <p className="mb-2 inline-flex items-center gap-2 rounded-full border border-[#d8d0a2] bg-white px-3 py-1 text-xs font-medium text-[#8a7a2f]">
            <Megaphone size={14} />
            Admin Announcements
          </p>

          <h1 className="text-2xl font-bold text-[#2f3303]">
            Create Announcement
          </h1>

          <p className="mt-1 text-sm text-[#68654f]">
            Publish school-wide, class-specific, or teacher-only announcements.
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
          action={createAnnouncementAction}
          submitLabel="Publish Announcement"
        />
      </section>
    </main>
  );
}
