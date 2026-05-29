import { classes } from '@/lib/constants';

import { PageShell } from '@/components/layout/pageShell';
import { PageHeader } from '@/components/layout/PageHeader';

import { ClassesTableSection } from '@/modules/classes/components/ClassesTableSection';
import { ClassesStats } from '@/modules/classes/components/ClassesStats';
import { ClassesActions } from '@/modules/classes/components/ClassesActions';

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
