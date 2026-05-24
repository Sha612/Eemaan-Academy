export function SummaryCard({
  title,
  value,
  icon: Icon,
  helper,
}: {
  title: string;
  value: string | number;
  icon: React.ElementType;
  helper: string;
}) {
  return (
    <div className="rounded-2xl border border-[#ddd4aa]/70 bg-[#fbfaf4] p-5 shadow-sm">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-sm font-medium text-[#68654f]">{title}</p>
          <p className="mt-2 text-2xl font-semibold text-[#2f3303]">{value}</p>
          <p className="mt-1 text-xs text-[#8c876d]">{helper}</p>
        </div>

        <div className="rounded-xl border border-[#d8d0a7] bg-[#f1ead0] p-2 text-[#4b5205]">
          <Icon size={20} />
        </div>
      </div>
    </div>
  );
}
