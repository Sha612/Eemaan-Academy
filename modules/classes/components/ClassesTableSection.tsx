import { TableSection } from '@/components/shared/TableSection';
import { TableSectionHeader } from '@/components/shared/TableSectionHeader';
import { ClassesTable, ClassItem } from '@/modules/classes/components/ClassesTable';

export function ClassesTableSection({ classes }: { classes: ClassItem[] }) {
  return (
    <TableSection>
      <TableSectionHeader
        title="Class List"
        description="View all active classes and their assigned teachers."
        searchPlaceholder="Search classes..."
      />

      <ClassesTable classes={classes} />
    </TableSection>
  );
}