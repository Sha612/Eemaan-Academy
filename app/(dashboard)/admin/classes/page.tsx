import { classes } from '@/lib/constants';

import { PageShell } from '@/components/layout/pageShell';
import { PageHeader } from '@/components/layout/PageHeader';

import { ClassesTableSection } from '@/components/admin/classes/ClassesTableSection';
import { ClassesStats } from '@/components/admin/classes/ClassesStats';
import { ClassesActions } from '@/components/admin/classes/ClassesActions';

export default function AdminClassesPage() {
  return (
    <PageShell>
      <PageHeader
        label="Admin Panel"
        title="Classes"
        description="Manage all classes, assigned teachers, enrolled students, and schedules."
        actions={<ClassesActions />}
      />

      <ClassesStats totalClasses={classes.length} />

      <ClassesTableSection classes={classes} />
    </PageShell>
  );
}
