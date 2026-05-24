// components/users/RoleSpecificFields.tsx

import { StudentFields } from './StudentFields';
import { TeacherFields } from './TeacherFields';
import { Role } from '@/modules/auth/roles';

export function RoleSpecificFields({ role }: { role: Role }) {
  if (role === Role.STUDENT) return <StudentFields />;

  if (role === Role.TEACHER || role === Role.HEAD_TEACHER) {
    return <TeacherFields role={role} />;
  }

  return null;
}
