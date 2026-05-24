'use client';

import { Search } from 'lucide-react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export function AnnouncementSearch() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const currentQuery = searchParams.get('query') || '';
  const [searchValue, setSearchValue] = useState(currentQuery);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const trimmedValue = searchValue.trim();
      const currentUrlQuery = searchParams.get('query') || '';

      if (trimmedValue === currentUrlQuery) {
        return;
      }

      const params = new URLSearchParams(searchParams);

      if (trimmedValue) {
        params.set('query', trimmedValue);
      } else {
        params.delete('query');
      }

      params.set('page', '1');

      const newUrl = `${pathname}?${params.toString()}`;

      router.replace(newUrl);
    }, 500);

    return () => clearTimeout(timeout);
  }, [searchValue, searchParams, pathname, router]);

  return (
    <div className="flex items-center gap-2 rounded-xl border border-[#ddd4aa] bg-white px-3 py-2 text-sm text-[#8c876d] shadow-sm">
      <Search size={16} />
      <input
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
        type="text"
        placeholder="Search announcements..."
        className="w-full bg-transparent text-[#2f3303] outline-none placeholder:text-[#9b967c] md:w-64"
      />
    </div>
  );
}
