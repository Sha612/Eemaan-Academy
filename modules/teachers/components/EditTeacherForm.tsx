import Link from 'next/link';
import {
  ArrowLeft,
  BookOpen,
  GraduationCap,
  Mail,
  Phone,
  Save,
  UserPlus,
} from 'lucide-react';
import { updateTeacherAction } from '@/app/(dashboard)/admin/teachers/[id]/edit/actions';
import { TeacherResponse } from '@/modules/teachers/types';
import { ClassResponse } from '@/modules/classes/types';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

type EditTeacherFormProps = {
  teacher: TeacherResponse;
  assignedClasses: ClassResponse[];
};

export function EditTeacherForm({
  teacher,
  assignedClasses,
}: EditTeacherFormProps) {
  const updateTeacherWithId = updateTeacherAction.bind(null, teacher.id);

  const fullName = `${teacher.firstName} ${teacher.lastName}`;
  const initials = `${teacher.firstName?.[0] || ''}${
    teacher.lastName?.[0] || ''
  }`.toUpperCase();

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 rounded-2xl border border-[#ddd4aa] bg-[#fbfaf4] p-5 shadow-sm md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-4">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#4b5205] text-xl font-semibold text-white">
            {initials}
          </div>

          <div>
            <h1 className="text-2xl font-semibold text-[#2f3303]">
              {fullName}
            </h1>

            <div className="mt-2 flex flex-wrap gap-3 text-sm text-[#6f6a4d]">
              <span className="flex items-center gap-1">
                <Mail className="h-4 w-4" />
                {teacher.user?.email}
              </span>

              <span className="flex items-center gap-1">
                <Phone className="h-4 w-4" />
                {teacher.phoneNumber}
              </span>

              <span className="flex items-center gap-1">
                <BookOpen className="h-4 w-4" />
                {assignedClasses.length} class
                {assignedClasses.length === 1 ? '' : 'es'}
              </span>
            </div>
          </div>
        </div>

        <Button asChild className="bg-[#4b5205] text-white hover:bg-[#2f3303]">
          <Link href={`/admin/classes/assign-teacher?teacherId=${teacher.id}`}>
            <UserPlus className="mr-2 h-4 w-4" />
            Assign Teacher to Class
          </Link>
        </Button>
      </div>

      <div className="grid gap-6 xl:grid-cols-[1.35fr_0.9fr]">
        <Card className="border-[#ddd4aa] bg-[#fbfaf4] shadow-sm">
          <CardHeader>
            <CardTitle className="text-[#2f3303]">Teacher Profile</CardTitle>
          </CardHeader>

          <CardContent>
            <form action={updateTeacherWithId} className="space-y-6">
              <section className="space-y-4">
                <h2 className="text-sm font-semibold uppercase tracking-wide text-[#6f6a4d]">
                  Personal Information
                </h2>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-[#4b5205]">
                      First Name
                    </label>
                    <Input
                      name="firstName"
                      defaultValue={teacher.firstName}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-[#4b5205]">
                      Last Name
                    </label>
                    <Input
                      name="lastName"
                      defaultValue={teacher.lastName}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-[#4b5205]">
                      Gender
                    </label>
                    <select
                      name="gender"
                      defaultValue={teacher.gender}
                      required
                      className="h-10 w-full rounded-md border border-input bg-background px-3 text-sm"
                    >
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-[#4b5205]">
                      Phone Number
                    </label>
                    <Input
                      name="phoneNumber"
                      defaultValue={teacher.phoneNumber}
                      required
                    />
                  </div>

                  <div className="space-y-2 md:col-span-2">
                    <label className="text-sm font-medium text-[#4b5205]">
                      Specialization
                    </label>
                    <Input
                      name="specialization"
                      defaultValue={teacher.specialization || ''}
                      placeholder="Example: Fiqh, Hifz, Hadeeth"
                    />
                  </div>
                </div>
              </section>

              <section className="space-y-4 border-t border-[#ddd4aa] pt-6">
                <h2 className="text-sm font-semibold uppercase tracking-wide text-[#6f6a4d]">
                  Login Access
                </h2>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-[#4b5205]">
                      Login Email
                    </label>
                    <Input
                      name="email"
                      type="email"
                      defaultValue={teacher.user?.email || ''}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-[#4b5205]">
                      Role
                    </label>
                    <select
                      name="role"
                      defaultValue={teacher.user?.role || 'teacher'}
                      required
                      className="h-10 w-full rounded-md border border-input bg-background px-3 text-sm"
                    >
                      <option value="teacher">Teacher</option>
                      <option value="head_teacher">Head Teacher</option>
                    </select>
                  </div>

                  <div className="space-y-2 md:col-span-2">
                    <label className="text-sm font-medium text-[#4b5205]">
                      New Password
                    </label>
                    <Input
                      name="password"
                      type="password"
                      placeholder="Leave blank to keep current password"
                    />
                  </div>
                </div>
              </section>

              <div className="flex justify-end gap-3 border-t border-[#ddd4aa] pt-6">
                <Button asChild variant="outline">
                  <Link href="/admin/teachers">Cancel</Link>
                </Button>

                <Button
                  type="submit"
                  className="bg-[#4b5205] text-white hover:bg-[#2f3303]"
                >
                  <Save className="mr-2 h-4 w-4" />
                  Update Teacher
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>

        <Card className="border-[#ddd4aa] bg-[#fbfaf4] shadow-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-[#2f3303]">
              <GraduationCap className="h-5 w-5" />
              Assigned Classes
            </CardTitle>
          </CardHeader>

          <CardContent>
            {assignedClasses.length === 0 ? (
              <div className="rounded-2xl border border-dashed border-[#d8c98b] bg-white p-6 text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#f1ead0] text-[#4b5205]">
                  <BookOpen className="h-6 w-6" />
                </div>

                <h3 className="mt-4 font-semibold text-[#2f3303]">
                  No class assigned
                </h3>

                <p className="mt-2 text-sm text-[#6f6a4d]">
                  This teacher is not currently assigned to any class.
                </p>

                <Button
                  asChild
                  className="mt-5 bg-[#4b5205] text-white hover:bg-[#2f3303]"
                >
                  <Link
                    href={`/admin/classes/assign-teacher?teacherId=${teacher.id}`}
                  >
                    Assign Teacher to Class
                  </Link>
                </Button>
              </div>
            ) : (
              <div className="space-y-4">
                {assignedClasses.map((classItem) => (
                  <div
                    key={classItem.id}
                    className="rounded-2xl border border-[#ddd4aa] bg-white p-4"
                  >
                    <h3 className="font-semibold text-[#2f3303]">
                      {classItem.name}
                    </h3>

                    <p className="mt-1 text-sm text-[#6f6a4d]">
                      {classItem.subject} · Level {classItem.level}
                    </p>

                    <p className="mt-2 text-xs text-[#8a8468]">
                      {classItem.day || 'No day set'} ·{' '}
                      {classItem.startTime || '--:--'} -{' '}
                      {classItem.endTime || '--:--'}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
