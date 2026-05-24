import Link from 'next/link';

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  query?: string;
};

export function Pagination({
  currentPage,
  totalPages,
  query,
}: PaginationProps) {
  if (totalPages <= 1) return null;

  function createPageUrl(page: number) {
    const params = new URLSearchParams();

    if (query) {
      params.set('query', query);
    }

    params.set('page', page.toString());

    return `/admin/announcements?${params.toString()}`;
  }

  return (
    <div className="flex items-center justify-end gap-2 border-t border-[#eee7c8] p-4">
      <Link
        href={createPageUrl(currentPage - 1)}
        className={`rounded-xl border border-[#ddd4aa] px-4 py-2 text-sm font-medium ${
          currentPage <= 1
            ? 'pointer-events-none opacity-50'
            : 'hover:bg-[#f1ead0]'
        }`}
      >
        Previous
      </Link>

      <span className="text-sm text-[#68654f]">
        Page {currentPage} of {totalPages}
      </span>

      <Link
        href={createPageUrl(currentPage + 1)}
        className={`rounded-xl border border-[#ddd4aa] px-4 py-2 text-sm font-medium ${
          currentPage >= totalPages
            ? 'pointer-events-none opacity-50'
            : 'hover:bg-[#f1ead0]'
        }`}
      >
        Next
      </Link>
    </div>
  );
}
