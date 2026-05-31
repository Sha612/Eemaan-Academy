import { TableSection } from '@/components/shared/TableSection';
import { TableSectionHeader } from '@/components/shared/TableSectionHeader';
import { ClassesTable } from '@/modules/classes/components/ClassesTable';
import type { ClassResponse } from '@/modules/classes/types'

type ClassTableRow = ClassResponse & {
  studentsCount?: number
}

type ClassesTableSectionProps = {
  classes: ClassTableRow[]
}
export function ClassesTableSection({ classes }: ClassesTableSectionProps) {
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