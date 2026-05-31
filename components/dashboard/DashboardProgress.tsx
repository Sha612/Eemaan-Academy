type DashboardProgressProps = {
  label: string;
  value: number;
};

export function DashboardProgress({ label, value }: DashboardProgressProps) {
  return (
    <div>
      <div className="mb-2 flex items-center justify-between text-sm">
        <span className="font-medium text-[#2f3303]">{label}</span>
        <span className="text-[#6f6a4f]">{value}%</span>
      </div>

      <div className="h-2 rounded-full bg-[#eee7c8]">
        <div
          className="h-2 rounded-full bg-[#8a7a2f]"
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
}
