import Link from 'next/link';
import {
  ArrowLeft,
  BookOpen,
  CalendarDays,
  Clock,
  LinkIcon,
  Save,
  UserRound,
} from 'lucide-react';
import { updateClassAction } from '@/app/(dashboard)/admin/classes/[id]/edit/actions';
import { ClassResponse } from '@/modules/classes/types';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

type EditClassFormProps = {
  classItem: ClassResponse;
};

const days = [
  'MONDAY',
  'TUESDAY',
  'WEDNESDAY',
  'THURSDAY',
  'FRIDAY',
  'SATURDAY',
  'SUNDAY',
];

export function EditClassForm({ classItem }: EditClassFormProps) {
  const updateClassWithId = updateClassAction.bind(null, classItem.id);

  return (
    <div className="space-y-6">
      <div className="rounded-2xl border border-[#ddd4aa] bg-[#fbfaf4] p-5 shadow-sm">
        <Button
          asChild
          variant="ghost"
          size="sm"
          className="-ml-3 mb-3 text-[#4b5205] hover:bg-[#f1ead0]"
        >
          <Link href="/admin/classes">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Classes Table
          </Link>
        </Button>

        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-2xl font-semibold text-[#2f3303]">
              Edit {classItem.name}
            </h1>

            <div className="mt-2 flex flex-wrap gap-3 text-sm text-[#6f6a4d]">
              <span className="flex items-center gap-1">
                <BookOpen className="h-4 w-4" />
                {classItem.subject}
              </span>

              <span className="flex items-center gap-1">
                <CalendarDays className="h-4 w-4" />
                {classItem.day || 'No day set'}
              </span>

              <span className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {classItem.startTime || '--:--'} - {classItem.endTime || '--:--'}
              </span>

              <span className="flex items-center gap-1">
                <UserRound className="h-4 w-4" />
                {classItem.teacher
                  ? `${classItem.teacher.firstName} ${classItem.teacher.lastName}`
                  : 'No teacher assigned'}
              </span>
            </div>
          </div>

          {!classItem.teacher && (
            <Button
              asChild
              className="bg-[#4b5205] text-white hover:bg-[#2f3303]"
            >
              <Link href={`/admin/classes/assign-teacher?classId=${classItem.id}`}>
                Assign Teacher
              </Link>
            </Button>
          )}
        </div>
      </div>

      <Card className="border-[#ddd4aa] bg-[#fbfaf4] shadow-sm">
        <CardHeader>
          <CardTitle className="text-[#2f3303]">Class Details</CardTitle>
        </CardHeader>

        <CardContent>
          <form action={updateClassWithId} className="space-y-6">
            <section className="space-y-4">
              <h2 className="text-sm font-semibold uppercase tracking-wide text-[#6f6a4d]">
                Academic Information
              </h2>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-[#4b5205]">
                    Class Name
                  </label>
                  <Input
                    name="name"
                    defaultValue={classItem.name}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-[#4b5205]">
                    Subject
                  </label>
                  <Input
                    name="subject"
                    defaultValue={classItem.subject}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-[#4b5205]">
                    Level
                  </label>
                  <Input
                    name="level"
                    type="number"
                    min="1"
                    defaultValue={classItem.level}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-[#4b5205]">
                    Day
                  </label>
                  <select
                    name="day"
                    defaultValue={classItem.day || ''}
                    required
                    className="h-10 w-full rounded-md border border-input bg-background px-3 text-sm"
                  >
                    <option value="">Select day</option>
                    {days.map((day) => (
                      <option key={day} value={day}>
                        {day.charAt(0) + day.slice(1).toLowerCase()}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2 md:col-span-2">
                  <label className="text-sm font-medium text-[#4b5205]">
                    Description
                  </label>
                  <Input
                    name="description"
                    defaultValue={classItem.description || ''}
                    placeholder="Optional class description"
                  />
                </div>
              </div>
            </section>

            <section className="space-y-4 border-t border-[#ddd4aa] pt-6">
              <h2 className="text-sm font-semibold uppercase tracking-wide text-[#6f6a4d]">
                Schedule & Meeting
              </h2>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-[#4b5205]">
                    Start Time
                  </label>
                  <Input
                    name="startTime"
                    type="time"
                    defaultValue={classItem.startTime || ''}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-[#4b5205]">
                    End Time
                  </label>
                  <Input
                    name="endTime"
                    type="time"
                    defaultValue={classItem.endTime || ''}
                    required
                  />
                </div>

                <div className="space-y-2 md:col-span-2">
                  <label className="text-sm font-medium text-[#4b5205]">
                    Meeting URL
                  </label>
                  <div className="relative">
                    <LinkIcon className="absolute left-3 top-3 h-4 w-4 text-[#6f6a4d]" />
                    <Input
                      name="meetingUrl"
                      type="url"
                      defaultValue={classItem.meetingUrl || ''}
                      placeholder="https://meet.google.com/example"
                      className="pl-9"
                    />
                  </div>
                </div>
              </div>
            </section>

            <div className="flex justify-end gap-3 border-t border-[#ddd4aa] pt-6">
              <Button asChild variant="outline">
                <Link href="/admin/classes">Cancel</Link>
              </Button>

              <Button
                type="submit"
                className="bg-[#4b5205] text-white hover:bg-[#2f3303]"
              >
                <Save className="mr-2 h-4 w-4" />
                Update Class
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}