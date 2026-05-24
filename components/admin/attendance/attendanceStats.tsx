import { StatsCard } from '@/components/admin/statsCard';
import { attendanceSummary } from '@/lib/constants';

type AttendanceStatsProps = {
  totalStudents: number;
};
export function AttendanceStats() {
  return (
    <section className="grid gap-4 md:grid-cols-4">
      {attendanceSummary.map((item) => (
        <StatsCard key={item.title} title={item.title} value={item.value} />
      ))}
    </section>
  );
}
