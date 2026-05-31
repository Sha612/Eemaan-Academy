import Link from 'next/link';
import { Plus, ShieldCheck } from 'lucide-react';

import { StatsCard } from '@/components/shared/StatsCard';
import { PageShell } from '@/components/layout/pageShell';
import { PageHeader } from '@/components/layout/PageHeader';
import { buttonStyles } from '@/lib/style';
import { ReplacementTableSection } from '@/modules/replacements/components/ReplacementTableSection';
import { getReplacements } from '@/modules/replacements/services';
import { ReplacementResponse } from '@/modules/replacements/types';

function normalizeReplacements(
  response:
    | ReplacementResponse[]
    | { data?: ReplacementResponse[] }
    | ReplacementResponse,
): ReplacementResponse[] {
  if (Array.isArray(response)) return response;

  if ('data' in response && Array.isArray(response.data)) {
    return response.data;
  }

  if ('id' in response) return [response];

  return [];
}

function mapReplacementToTableItem(replacement: ReplacementResponse) {
  return {
    id: String(replacement.id),
    className: replacement.class?.name ?? 'N/A',
    subject: replacement.class?.subject ?? 'N/A',
    level: replacement.class?.level ?? 'N/A',

    replacementTeacher: replacement.replacementTeacher
      ? `${replacement.replacementTeacher.firstName} ${replacement.replacementTeacher.lastName}`
      : 'N/A',

    primaryTeacher: 'N/A',

    startDate: replacement.startDate,
    endDate: replacement.endDate,

    startTime: replacement.class?.startTime ?? 'N/A',
    endTime: replacement.class?.endTime ?? 'N/A',

    status: replacement.status,
    reason: replacement.reason || 'N/A',
  };
}

export default async function AdminReplacementsPage() {
  const response = await getReplacements();
  const replacements = normalizeReplacements(response);

  const tableReplacements = replacements.map(mapReplacementToTableItem);

  const activeCount = replacements.filter((r) => r.status === 'active').length;
  const scheduledCount = replacements.filter((r) => r.status === 'upcoming').length;
  const expiredCount = replacements.filter((r) => r.status === 'expired').length;

  return (
    <PageShell>
      <PageHeader
        label="Admin Panel"
        title="Replacements"
        description="Manage temporary class access for replacement teachers during absences."
        actions={
          <Link href="/admin/replacements/new" className={buttonStyles.primary}>
            <Plus size={18} />
            Create Replacement
          </Link>
        }
      />

      <section className="grid gap-4 md:grid-cols-4">
        <StatsCard title="Total Records" value={replacements.length.toString()} />
        <StatsCard title="Active" value={activeCount.toString()} />
        <StatsCard title="Scheduled" value={scheduledCount.toString()} />
        <StatsCard title="Expired" value={expiredCount.toString()} />
      </section>

      <ReplacementTableSection replacements={tableReplacements} />

      <section className="rounded-2xl border border-[#ddd4aa]/70 bg-[#fbfaf4] p-5 shadow-sm">
        <div className="flex items-start gap-3">
          <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-[#f1ead0] text-[#4b5205]">
            <ShieldCheck size={18} />
          </div>

          <div>
            <h2 className="text-sm font-semibold text-[#2f3303]">
              Access rule reminder
            </h2>

            <p className="mt-1 text-sm leading-6 text-[#68654f]">
              A replacement teacher should only get teacher-level permissions
              for the selected class and only during the allowed start and end
              time.
            </p>
          </div>
        </div>
      </section>
    </PageShell>
  );
}