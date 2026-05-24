import Link from 'next/link';
import { Megaphone, Plus } from 'lucide-react';
import { PageShell } from '@/components/layout/pageShell';
import { PageHeader } from '@/components/layout/PageHeader';
import { StatsCard } from '@/components/admin/statsCard';
import { prisma } from '@/lib/prisma';
import { AnnouncementSearch } from '@/components/admin/AnnouncementSearch';
import { Pagination } from '@/components/admin/Pagination';

type AnnouncementsPageProps = {
  searchParams: Promise<{
    query?: string;
    page?: string;
  }>;
};

export default async function AnnouncementsPage({
  searchParams,
}: AnnouncementsPageProps) {
  const params = await searchParams;

  const query = params.query?.trim() || '';
  const currentPage = Math.max(Number(params.page) || 1, 1);
  const pageSize = 5;

  const where = query
    ? {
        OR: [
          {
            title: {
              contains: query,
              mode: 'insensitive' as const,
            },
          },
          {
            message: {
              contains: query,
              mode: 'insensitive' as const,
            },
          },
          {
            type: {
              contains: query,
              mode: 'insensitive' as const,
            },
          },
          {
            audience: {
              contains: query,
              mode: 'insensitive' as const,
            },
          },
        ],
      }
    : {};

  const [
    announcements,
    totalAnnouncements,
    schoolWideCount,
    classSpecificCount,
    teacherOnlyCount,
  ] = await Promise.all([
    prisma.announcement.findMany({
      where,
      orderBy: {
        createdAt: 'desc',
      },
      skip: (currentPage - 1) * pageSize,
      take: pageSize,
    }),

    prisma.announcement.count({ where }),

    prisma.announcement.count({
      where: {
        type: 'school-wide',
      },
    }),

    prisma.announcement.count({
      where: {
        type: 'class-specific',
      },
    }),

    prisma.announcement.count({
      where: {
        type: 'teacher-only',
      },
    }),
  ]);

  const totalPages = Math.max(Math.ceil(totalAnnouncements / pageSize), 1);

  return (
    <PageShell>
      <PageHeader
        title="Announcements"
        description="Manage school-wide, class-specific, and teacher-only announcements."
        icon={Megaphone}
        actions={
          <Link
            href="/admin/announcements/new"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#4b5205] px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-[#2f3303]"
          >
            <Plus size={16} />
            New Announcement
          </Link>
        }
      />

      <section className="grid gap-4 md:grid-cols-3">
        <StatsCard title="School-wide" value={schoolWideCount.toString()} />
        <StatsCard
          title="Class-specific"
          value={classSpecificCount.toString()}
        />
        <StatsCard title="Teacher-only" value={teacherOnlyCount.toString()} />
      </section>

      <section className="rounded-2xl border border-[#ddd4aa]/70 bg-white shadow-sm">
        <div className="flex flex-col gap-3 border-b border-[#eee7c8] p-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-base font-semibold text-[#2f3303]">
              Announcement List
            </h2>
            <p className="text-sm text-[#68654f]">
              View and manage published announcements.
            </p>
          </div>

          <AnnouncementSearch />
        </div>

        {announcements.length === 0 ? (
          <div className="p-8 text-center">
            <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f1ead0] text-[#4b5205]">
              <Megaphone size={22} />
            </div>

            <h3 className="text-base font-semibold text-[#2f3303]">
              No announcements found
            </h3>

            <p className="mt-1 text-sm text-[#68654f]">
              Try a different search or create a new announcement.
            </p>
          </div>
        ) : (
          <div className="divide-y divide-[#eee7c8]">
            {announcements.map((announcement) => (
              <div
                key={announcement.id}
                className="grid gap-4 p-4 transition hover:bg-[#fbfaf4] lg:grid-cols-[1.5fr_1fr_1fr_auto]"
              >
                <div>
                  <h3 className="font-semibold text-[#2f3303]">
                    {announcement.title}
                  </h3>

                  <p className="mt-1 text-sm text-[#68654f]">
                    {announcement.message}
                  </p>
                </div>

                <div>
                  <p className="text-xs font-medium uppercase tracking-wide text-[#8a7a2f]">
                    Type
                  </p>

                  <p className="mt-1 text-sm font-medium text-[#2f3303]">
                    {announcement.type}
                  </p>

                  <p className="text-xs text-[#68654f]">
                    Audience: {announcement.audience || 'All users'}
                  </p>
                </div>

                <div>
                  <p className="text-xs font-medium uppercase tracking-wide text-[#8a7a2f]">
                    Details
                  </p>

                  <p className="mt-1 text-sm text-[#2f3303]">
                    {announcement.priority}
                  </p>

                  <p className="text-xs text-[#68654f]">
                    {announcement.createdAt.toLocaleDateString('en-GB', {
                      day: '2-digit',
                      month: 'short',
                      year: 'numeric',
                    })}
                  </p>
                </div>

                <div className="flex items-start justify-between gap-3 lg:justify-end">
                  <span className="rounded-full border border-[#d8d0a2] bg-[#fbfaf4] px-3 py-1 text-xs font-medium text-[#4b5205]">
                    {announcement.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          query={query}
        />
      </section>
    </PageShell>
  );
}
