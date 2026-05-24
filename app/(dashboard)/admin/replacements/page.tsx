import Link from 'next/link';
import {
  CalendarClock,
  MoreHorizontal,
  Plus,
  Search,
  ShieldCheck,
  UserRoundCheck,
  BookOpen,
} from 'lucide-react';

import { StatsCard } from '@/components/admin/statsCard';
import { replacements } from '@/lib/constants';
import { PageShell } from '@/components/layout/pageShell';
import { PageHeader } from '@/components/layout/PageHeader';
import { buttonStyles } from '@/lib/style';
import { ReplacementTableSection } from '@/components/admin/replacements/ReplacementTableSection';

export default function AdminReplacementsPage() {
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
        <StatsCard
          title="Total Records"
          value={replacements.length.toString()}
        />
        <StatsCard
          title="Active"
          value={replacements
            .filter((r) => r.status === 'Active')
            .length.toString()}
        />
        <StatsCard
          title="Scheduled"
          value={replacements
            .filter((r) => r.status === 'Scheduled')
            .length.toString()}
        />
        <StatsCard
          title="Expired"
          value={replacements
            .filter((r) => r.status === 'Expired')
            .length.toString()}
        />
      </section>

      <ReplacementTableSection replacements={replacements} />

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
