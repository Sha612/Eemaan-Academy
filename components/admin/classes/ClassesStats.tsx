import { StatsCard } from "@/components/admin/statsCard"

type ClassesStatsProps = {
  totalClasses: number
}

export function ClassesStats({ totalClasses }: ClassesStatsProps) {
  const stats = [
    {
      title: "Total Classes",
      value: totalClasses.toString(),
    },
    {
      title: "Active Classes",
      value: "3",
    },
    {
      title: "Assigned Teachers",
      value: "3",
    },
    {
      title: "Total Enrollments",
      value: "30",
    },
  ]

  return (
    <section className="grid gap-4 md:grid-cols-4">
      {stats.map((stat) => (
        <StatsCard key={stat.title} title={stat.title} value={stat.value} />
      ))}
    </section>
  )
}