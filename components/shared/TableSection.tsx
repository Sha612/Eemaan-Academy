import { cn } from '@/lib/utils';

type TableSectionProps = {
  children: React.ReactNode;
  className?: string;
};

export function TableSection({ children, className }: TableSectionProps) {
  return (
    <section
      className={cn(
        'rounded-2xl border border-[#ddd4aa]/70 bg-white shadow-sm',
        className,
      )}
    >
      {children}
    </section>
  );
}
