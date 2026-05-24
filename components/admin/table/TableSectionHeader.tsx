import { Search } from 'lucide-react';

type TableSectionHeaderProps = {
  title: string;
  description?: string;
  searchPlaceholder?: string;
};

export function TableSectionHeader({
  title,
  description,
  searchPlaceholder,
}: TableSectionHeaderProps) {
  return (
    <div className="flex flex-col gap-3 border-b border-[#eee7c8] p-4 md:flex-row md:items-center md:justify-between">
      <div>
        <h2 className="text-base font-semibold text-[#2f3303]">{title}</h2>

        {description ? (
          <p className="text-sm text-[#68654f]">{description}</p>
        ) : null}
      </div>

      {searchPlaceholder ? (
        <div className="flex items-center gap-2 rounded-xl border border-[#ddd4aa] bg-[#fbfaf4] px-3 py-2 text-sm text-[#68654f]">
          <Search size={16} />

          <input
            type="text"
            placeholder={searchPlaceholder}
            className="w-48 bg-transparent outline-none placeholder:text-[#9a947a]"
          />
        </div>
      ) : null}
    </div>
  );
}
