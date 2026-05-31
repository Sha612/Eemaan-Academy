import { PageShell } from '@/components/layout/pageShell';
import { PageHeader } from '@/components/layout/PageHeader';

import { ClassesTableSection } from '@/modules/classes/components/ClassesTableSection';
import { ClassesStats } from '@/modules/classes/components/ClassesStats';
import { ClassesActions } from '@/modules/classes/components/ClassesActions';

import { getClasses } from '@/modules/classes/services';
import { getEnrollments } from '@/modules/enrollments/services';

export default async function AdminClassesPage() {
  const [classesResponse, enrollmentsResponse] = await Promise.all([
    getClasses(),
    getEnrollments(),
  ]);

  const classes = classesResponse.data ?? [];
  const meta = classesResponse.meta;
  const enrollments = enrollmentsResponse ?? [];

  const activeEnrollments = enrollments.filter((enrollment) => {
    return (
      !enrollment.enrollmentStatus || enrollment.enrollmentStatus === 'active'
    );
  });

  const assignedTeachers = classes.filter((classItem) => {
    return Boolean(classItem.teacher);
  }).length;

  const classesWithStudentCount = classes.map((classItem) => {
    const studentsCount = activeEnrollments.filter((enrollment) => {
      return enrollment.class?.id === classItem.id;
    }).length;

    return {
      ...classItem,
      studentsCount,
      teacherName: classItem.teacher
        ? `${classItem.teacher.firstName} ${classItem.teacher.lastName}`
        : 'Not assigned',
    };
  });

  return (
    <PageShell>
      <PageHeader
        label="Admin Panel"
        title="Classes"
        description="Manage all classes, assigned teachers, enrolled students, and schedules."
        actions={<ClassesActions />}
      />

      <ClassesStats
        totalClasses={meta?.total ?? classes.length}
        activeClasses={classes.length}
        assignedTeachers={assignedTeachers}
        totalEnrollments={activeEnrollments.length}
      />

      <ClassesTableSection classes={classesWithStudentCount} />
    </PageShell>
  );
}
