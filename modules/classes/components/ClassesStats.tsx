import { StatsCard } from '@/components/shared/StatsCard'

type ClassesStatsProps = {
  totalClasses: number
  activeClasses?: number
  assignedTeachers?: number
  totalEnrollments?: number
}

export function ClassesStats({
  totalClasses,
  activeClasses = 0,
  assignedTeachers = 0,
  totalEnrollments = 0,
}: ClassesStatsProps) {
  const stats = [
    {
      title: 'Total Classes',
      value: totalClasses.toString(),
    },
    {
      title: 'Active Classes',
      value: activeClasses.toString(),
    },
    {
      title: 'Assigned Teachers',
      value: assignedTeachers.toString(),
    },
    {
      title: 'Total Enrollments',
      value: totalEnrollments.toString(),
    },
  ]

  return (
    <section className="grid gap-4 md:grid-cols-4">
      {stats.map((stat) => (
        <StatsCard
          key={stat.title}
          title={stat.title}
          value={stat.value}
        />
      ))}
    </section>
  )
}