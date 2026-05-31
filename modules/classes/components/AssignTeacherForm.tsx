import Link from 'next/link';
import { ArrowLeft, UserCheck } from 'lucide-react';
import { assignTeacherAction } from '@/app/(dashboard)/admin/classes/assign-teacher/actions';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { ClassResponse } from '@/modules/classes/types';
import { TeacherResponse } from '@/modules/teachers/types';

type AssignTeacherFormProps = {
  classes: ClassResponse[];
  teachers: TeacherResponse[];
  selectedTeacherId?: string;
  selectedClassId?: string;
};

export function AssignTeacherForm({
  classes,
  teachers,
  selectedTeacherId,
  selectedClassId,
}: AssignTeacherFormProps) {
  return (
    <div >
      

      <Card className="border-[#ddd4aa] bg-[#fbfaf4] shadow-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-[#2f3303]">
            <UserCheck className="h-5 w-5" />
            Assign Teacher to Class
          </CardTitle>
        </CardHeader>

        <CardContent>
          <form action={assignTeacherAction} className="space-y-5">
            <div className="space-y-2">
              <label className="text-sm font-medium text-[#4b5205]">
                Teacher
              </label>

              <select
                name="teacherId"
                defaultValue={selectedTeacherId || ''}
                required
                className="h-10 w-full rounded-md border border-input bg-background px-3 text-sm"
              >
                <option value="">Select teacher</option>

                {teachers.map((teacher) => (
                  <option key={teacher.id} value={teacher.id}>
                    {teacher.firstName} {teacher.lastName}
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-[#4b5205]">
                Class
              </label>

              <select
                name="classId"
                defaultValue={selectedClassId || ''}
                required
                className="h-10 w-full rounded-md border border-input bg-background px-3 text-sm"
              >
                <option value="">Select class</option>

                {classes.map((classItem) => (
                  <option key={classItem.id} value={classItem.id}>
                    {classItem.name} — {classItem.subject} Level{' '}
                    {classItem.level}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex justify-end gap-3 border-t border-[#ddd4aa] pt-5">
              <Button asChild variant="outline">
                <Link href="/admin/classes">Cancel</Link>
              </Button>

              <Button
                type="submit"
                className="bg-[#4b5205] text-white hover:bg-[#2f3303]"
              >
                Assign Teacher
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}