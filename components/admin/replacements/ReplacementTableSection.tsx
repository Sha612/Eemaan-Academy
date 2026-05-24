import { TableSection } from '@/components/admin/table/TableSection';
import { TableSectionHeader } from '@/components/admin/table/TableSectionHeader';

import { ReplacementTable } from '@/components/admin/replacements/ReplacementTable';

import { ReplacementItem } from '@/components/admin/replacements/ReplacementTable';

export function ReplacementTableSection({
  replacements,
}: {
  replacements: ReplacementItem[];
}) {
  return (
    <TableSection>
      <TableSectionHeader
        title="Replacement Records"
        description="Track temporary class access granted to replacement teachers."
        searchPlaceholder="Search replacements..."
      />

      <ReplacementTable replacements={replacements} />
    </TableSection>
  );
}
