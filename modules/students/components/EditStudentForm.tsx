import Link from 'next/link';
import {
  BookOpen,
  CheckCircle2,
  GraduationCap,
  Mail,
  Phone,
  UserPlus,
} from 'lucide-react';
import {
  updateEnrollmentStatusAction,
  updateStudentAction,
} from '@/app/(dashboard)/admin/students/[id]/edit/actions';
import {
  EnrollmentStatus,
  StudentEnrollment,
  StudentResponse,
} from '@/modules/students/types';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

type EditStudentFormProps = {
  student: StudentResponse;
  enrollments: StudentEnrollment[];
};

const enrollmentStatuses: EnrollmentStatus[] = [
  'active',
  'completed',
  'dropped',
];

function formatStatus(status: EnrollmentStatus) {
  return status.charAt(0).toUpperCase() + status.slice(1);
}

export function EditStudentForm({
  student,
  enrollments,
}: EditStudentFormProps) {
  const updateStudentWithId = updateStudentAction.bind(null, student.id);

  const fullName = `${student.firstName} ${student.lastName}`;
  const initials = `${student.firstName?.[0] || ''}${
    student.lastName?.[0] || ''
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
                {student.user?.email}
              </span>

              <span className="flex items-center gap-1">
                <Phone className="h-4 w-4" />
                {student.phoneNumber}
              </span>

              <span className="flex items-center gap-1">
                <BookOpen className="h-4 w-4" />
                {enrollments.length} class{enrollments.length === 1 ? '' : 'es'}
              </span>
            </div>
          </div>
        </div>

        <Button asChild className="bg-[#4b5205] text-white hover:bg-[#2f3303]">
          <Link href={`/admin/classes/assign-student?studentId=${student.id}`}>
            <UserPlus className="mr-2 h-4 w-4" />
            Assign Student to Class
          </Link>
        </Button>
      </div>

      <div className="grid gap-6 xl:grid-cols-[1.35fr_0.9fr]">
        <Card className="border-[#ddd4aa] bg-[#fbfaf4] shadow-sm">
          <CardHeader>
            <CardTitle className="text-[#2f3303]">Student Profile</CardTitle>
          </CardHeader>

          <CardContent>
            <form action={updateStudentWithId} className="space-y-6">
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
                      defaultValue={student.firstName}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-[#4b5205]">
                      Last Name
                    </label>
                    <Input
                      name="lastName"
                      defaultValue={student.lastName}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-[#4b5205]">
                      Gender
                    </label>
                    <select
                      name="gender"
                      defaultValue={student.gender}
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
                      defaultValue={student.phoneNumber}
                      required
                    />
                  </div>
                </div>
              </section>

              <section className="space-y-4 border-t border-[#ddd4aa] pt-6">
                <h2 className="text-sm font-semibold uppercase tracking-wide text-[#6f6a4d]">
                  Guardian Details
                </h2>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-[#4b5205]">
                      Guardian Name
                    </label>
                    <Input
                      name="guardianName"
                      defaultValue={student.guardianName || ''}
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-[#4b5205]">
                      Guardian Phone
                    </label>
                    <Input
                      name="guardianPhoneNumber"
                      defaultValue={student.guardianPhoneNumber || ''}
                    />
                  </div>

                  <div className="space-y-2 md:col-span-2">
                    <label className="text-sm font-medium text-[#4b5205]">
                      Guardian Email
                    </label>
                    <Input
                      name="guardianEmail"
                      type="email"
                      defaultValue={student.guardianEmail || ''}
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
                      defaultValue={student.user?.email || ''}
                      required
                    />
                  </div>

                  <div className="space-y-2">
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
                  <Link href="/admin/students">Cancel</Link>
                </Button>

                <Button
                  type="submit"
                  className="bg-[#4b5205] text-white hover:bg-[#2f3303]"
                >
                  Update Student
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
            {enrollments.length === 0 ? (
              <div className="rounded-2xl border border-dashed border-[#d8c98b] bg-white p-6 text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#f1ead0] text-[#4b5205]">
                  <UserPlus className="h-6 w-6" />
                </div>

                <h3 className="mt-4 font-semibold text-[#2f3303]">
                  No class assigned
                </h3>

                <p className="mt-2 text-sm text-[#6f6a4d]">
                  This student is not enrolled in any class yet.
                </p>

                <Button
                  asChild
                  className="mt-5 bg-[#4b5205] text-white hover:bg-[#2f3303]"
                >
                  <Link
                    href={`/admin/classes/assign-student?studentId=${student.id}`}
                  >
                    Assign Student to Class
                  </Link>
                </Button>
              </div>
            ) : (
              <div className="space-y-4">
                {enrollments.map((enrollment) => {
                  const updateEnrollmentWithIds =
                    updateEnrollmentStatusAction.bind(
                      null,
                      student.id,
                      enrollment.id,
                    );

                  return (
                    <form
                      key={enrollment.id}
                      action={updateEnrollmentWithIds}
                      className="rounded-2xl border border-[#ddd4aa] bg-white p-4"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <h3 className="font-semibold text-[#2f3303]">
                            {enrollment.class.name}
                          </h3>

                          <p className="mt-1 text-sm text-[#6f6a4d]">
                            {enrollment.class.subject} · Level{' '}
                            {enrollment.class.level}
                          </p>
                        </div>

                        <span className="rounded-full bg-[#f1ead0] px-3 py-1 text-xs font-medium text-[#4b5205]">
                          {formatStatus(enrollment.enrollmentStatus)}
                        </span>
                      </div>

                      <div className="mt-4 space-y-2">
                        <label className="text-sm font-medium text-[#4b5205]">
                          Enrollment Status
                        </label>

                        <select
                          name="enrollmentStatus"
                          defaultValue={enrollment.enrollmentStatus}
                          className="h-10 w-full rounded-md border border-input bg-background px-3 text-sm"
                        >
                          {enrollmentStatuses.map((status) => (
                            <option key={status} value={status}>
                              {formatStatus(status)}
                            </option>
                          ))}
                        </select>
                      </div>

                      <Button
                        type="submit"
                        className="mt-4 w-full bg-[#4b5205] text-white hover:bg-[#2f3303]"
                      >
                        <CheckCircle2 className="mr-2 h-4 w-4" />
                        Save Class Status
                      </Button>
                    </form>
                  );
                })}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
