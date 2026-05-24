type StatsCardProps = {
  title: string;
  value: string | number;
};

export function StatsCard({ title, value }: StatsCardProps) {
  return (
    <div className="rounded-2xl border border-[#ddd4aa]/70 bg-white p-5 shadow-sm">
      <p className="text-sm font-medium text-[#68654f]">{title}</p>
      <p className="mt-2 text-2xl font-semibold text-[#2f3303]">{value}</p>
    </div>
  );
}
