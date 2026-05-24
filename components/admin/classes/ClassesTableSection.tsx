import { TableSection } from '@/components/admin/table/TableSection';
import { TableSectionHeader } from '@/components/admin/table/TableSectionHeader';

import { ClassesTable } from '@/components/admin/classes/ClassesTable';

import { ClassItem } from '@/components/admin/classes/ClassesTable';

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

{
  /*
  

  */
}
