import Link from 'next/link';
import { ArrowLeft, BookOpen, CalendarDays, Users } from 'lucide-react';
import { createClassAction } from './actions';
import { getTeachers } from '@/modules/teachers/services';

export default async function NewClassPage() {
  const teacherResponse = await getTeachers();

const teachers = teacherResponse.data;

  return (
    <main className="min-h-screen bg-[#f7f4e8] px-6 py-6">
      <div className="mx-auto max-w-5xl space-y-6">
        <div className="flex items-center gap-3">
          <Link
            href="/admin/classes"
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[#ddd4aa] bg-[#fbfaf4] text-[#4b5205] shadow-sm transition hover:bg-[#f1ead0]"
          >
            <ArrowLeft size={18} />
          </Link>

          <div>
            <h1 className="text-2xl font-semibold tracking-tight text-[#2f3303]">
              Create Class
            </h1>
            <p className="text-sm text-[#68654f]">
              Set up the class, weekly schedule, meeting link, and primary teacher.
            </p>
          </div>
        </div>

        <section className="overflow-hidden rounded-3xl border border-[#ddd4aa]/70 bg-[#fbfaf4] shadow-sm">
          <div className="border-b border-[#ddd4aa]/70 bg-white/70 p-6">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f1ead0] text-[#4b5205]">
                <BookOpen size={24} />
              </div>

              <div>
                <h2 className="text-lg font-semibold text-[#2f3303]">
                  Class Information
                </h2>
                <p className="mt-1 max-w-2xl text-sm leading-6 text-[#68654f]">
                  Classes are subject-based and level-based. Each class can have
                  one primary teacher and a recurring weekly schedule.
                </p>
              </div>
            </div>
          </div>

          <form action={createClassAction} className="space-y-8 p-6">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <BookOpen size={18} className="text-[#4b5205]" />
                <h3 className="font-semibold text-[#2f3303]">Basic Details</h3>
              </div>

              <div className="grid gap-5 md:grid-cols-3">
                <div className="space-y-2 md:col-span-2">
                  <label htmlFor="name" className="text-sm font-medium text-[#2f3303]">
                    Class Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    required
                    placeholder="Example: Hifz 1"
                    className="h-11 w-full rounded-xl border border-[#ddd4aa] bg-white px-4 text-sm text-[#2f3303] outline-none transition placeholder:text-[#9a9578] focus:border-[#8a7a2f] focus:ring-2 focus:ring-[#ddd4aa]"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="level" className="text-sm font-medium text-[#2f3303]">
                    Level
                  </label>
                  <input
                    id="level"
                    name="level"
                    type="number"
                    required
                    min={1}
                    placeholder="1"
                    className="h-11 w-full rounded-xl border border-[#ddd4aa] bg-white px-4 text-sm text-[#2f3303] outline-none transition placeholder:text-[#9a9578] focus:border-[#8a7a2f] focus:ring-2 focus:ring-[#ddd4aa]"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-[#2f3303]">
                    Subject
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    required
                    placeholder="Example: Hifz"
                    className="h-11 w-full rounded-xl border border-[#ddd4aa] bg-white px-4 text-sm text-[#2f3303] outline-none transition placeholder:text-[#9a9578] focus:border-[#8a7a2f] focus:ring-2 focus:ring-[#ddd4aa]"
                  />
                </div>

                <div className="space-y-2 md:col-span-2">
                  <label htmlFor="teacher_id" className="text-sm font-medium text-[#2f3303]">
                    Primary Teacher
                  </label>
                  <select
                    id="teacher_id"
                    name="teacher_id"
                    defaultValue=""
                    className="h-11 w-full rounded-xl border border-[#ddd4aa] bg-white px-4 text-sm text-[#2f3303] outline-none transition focus:border-[#8a7a2f] focus:ring-2 focus:ring-[#ddd4aa]"
                  >
                    <option value="">No teacher assigned yet</option>
                    {teachers.map((teacher) => (
                      <option key={teacher.id} value={teacher.id}>
                        {teacher.firstName} {teacher.lastName}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-[#ddd4aa]/70 bg-white/60 p-5">
              <div className="mb-4 flex items-center gap-2">
                <CalendarDays size={18} className="text-[#4b5205]" />
                <h3 className="font-semibold text-[#2f3303]">Weekly Schedule</h3>
              </div>

              <div className="grid gap-5 md:grid-cols-3">
                <div className="space-y-2">
                  <label htmlFor="day" className="text-sm font-medium text-[#2f3303]">
                    Day
                  </label>
                  <select
                    id="day"
                    name="day"
                    required
                    defaultValue=""
                    className="h-11 w-full rounded-xl border border-[#ddd4aa] bg-white px-4 text-sm text-[#2f3303] outline-none transition focus:border-[#8a7a2f] focus:ring-2 focus:ring-[#ddd4aa]"
                  >
                    <option value="" disabled>
                      Select day
                    </option>
                    <option value="monday">MONDAY</option>
                    <option value="tuesday">TUESDAY</option>
                    <option value="wednesday">WEDNESDAY</option>
                    <option value="thursday">THURSDAY</option>
                    <option value="friday">FRIDAY</option>
                    <option value="saturday">SATURDAY</option>
                    <option value="sunday">SUNDAY</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="startTime" className="text-sm font-medium text-[#2f3303]">
                    Start Time
                  </label>
                  <input
                    id="startTime"
                    name="startTime"
                    type="time"
                    required
                    className="h-11 w-full rounded-xl border border-[#ddd4aa] bg-white px-4 text-sm text-[#2f3303] outline-none transition focus:border-[#8a7a2f] focus:ring-2 focus:ring-[#ddd4aa]"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="endTime" className="text-sm font-medium text-[#2f3303]">
                    End Time
                  </label>
                  <input
                    id="endTime"
                    name="endTime"
                    type="time"
                    required
                    className="h-11 w-full rounded-xl border border-[#ddd4aa] bg-white px-4 text-sm text-[#2f3303] outline-none transition focus:border-[#8a7a2f] focus:ring-2 focus:ring-[#ddd4aa]"
                  />
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-[#ddd4aa]/70 bg-white/60 p-5">
              <div className="mb-4 flex items-center gap-2">
                <Users size={18} className="text-[#4b5205]" />
                <h3 className="font-semibold text-[#2f3303]">Virtual Class Access</h3>
              </div>

              <div className="space-y-2">
                <label htmlFor="meetingUrl" className="text-sm font-medium text-[#2f3303]">
                  Google Meet Link
                </label>
                <input
                  id="meetingUrl"
                  name="meetingUrl"
                  type="url"
                  placeholder="https://meet.google.com/xxx-xxxx-xxx"
                  className="h-11 w-full rounded-xl border border-[#ddd4aa] bg-white px-4 text-sm text-[#2f3303] outline-none transition placeholder:text-[#9a9578] focus:border-[#8a7a2f] focus:ring-2 focus:ring-[#ddd4aa]"
                />
              </div>
            </div>

            <div className="flex flex-col-reverse gap-3 border-t border-[#ddd4aa]/70 pt-6 sm:flex-row sm:justify-end">
              <Link
                href="/admin/classes"
                className="inline-flex h-11 items-center justify-center rounded-xl border border-[#ddd4aa] bg-white px-5 text-sm font-medium text-[#4b5205] shadow-sm transition hover:bg-[#f1ead0]"
              >
                Cancel
              </Link>

              <button
                type="submit"
                className="inline-flex h-11 items-center justify-center rounded-xl bg-[#4b5205] px-5 text-sm font-medium text-white shadow-sm transition hover:bg-[#2f3303]"
              >
                Create Class
              </button>
            </div>
          </form>
        </section>
      </div>
    </main>
  );
}