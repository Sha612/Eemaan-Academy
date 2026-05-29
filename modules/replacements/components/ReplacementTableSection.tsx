import { TableSection } from '@/components/shared/TableSection';
import { TableSectionHeader } from '@/components/shared/TableSectionHeader';

import { ReplacementTable,ReplacementItem } from '@/modules/replacements/components/ReplacementTable';

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
