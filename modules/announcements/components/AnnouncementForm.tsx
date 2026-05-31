'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ClassResponse } from '@/modules/classes/types';
import { AnnouncementResponse } from '@/modules/announcements/types';

type AnnouncementFormProps = {
  classes: ClassResponse[];
  action: (formData: FormData) => void;
  announcement?: AnnouncementResponse;
  submitLabel: string;
};

export function AnnouncementForm({
  classes,
  action,
  announcement,
  submitLabel,
}: AnnouncementFormProps) {
  const [type, setType] = useState(announcement?.type || '');

  return (
    <form action={action} className="space-y-5">
      <div className="grid gap-5 md:grid-cols-2">
        <div className="space-y-2">
          <label className="text-sm font-medium text-[#2f3303]">
            Announcement Title
          </label>

          <input
            name="title"
            type="text"
            required
            defaultValue={announcement?.title || ''}
            className="w-full rounded-xl border border-[#ddd4aa] bg-white px-4 py-3 text-sm text-[#2f3303] outline-none transition focus:border-[#8a7a0a] focus:ring-4 focus:ring-[#d6c26b]/20"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-[#2f3303]">Priority</label>

          <select
            name="priority"
            required
            defaultValue={announcement?.priority || 'normal'}
            className="w-full rounded-xl border border-[#ddd4aa] bg-white px-4 py-3 text-sm text-[#2f3303] outline-none transition focus:border-[#8a7a0a] focus:ring-4 focus:ring-[#d6c26b]/20"
          >
            <option value="normal">Normal</option>
            <option value="important">Important</option>
            <option value="urgent">Urgent</option>
          </select>
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-[#2f3303]">
            Announcement Type
          </label>

          <select
            name="type"
            required
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="w-full rounded-xl border border-[#ddd4aa] bg-white px-4 py-3 text-sm text-[#2f3303] outline-none transition focus:border-[#8a7a0a] focus:ring-4 focus:ring-[#d6c26b]/20"
          >
            <option value="">Select type</option>
            <option value="school-wide">School-wide</option>
            <option value="class-specific">Class-specific</option>
            <option value="teacher-only">Teacher-only</option>
          </select>
        </div>

        {type === 'class-specific' && (
          <div className="space-y-2">
            <label className="text-sm font-medium text-[#2f3303]">
              Target Class
            </label>

            <select
              name="classId"
              defaultValue={String(announcement?.class?.id ?? '')}
              className="w-full rounded-xl border border-[#ddd4aa] bg-white px-4 py-3 text-sm text-[#2f3303] outline-none transition focus:border-[#8a7a0a] focus:ring-4 focus:ring-[#d6c26b]/20"
            >
              <option value="">Select class</option>

              {classes.map((classItem) => (
                <option key={classItem.id} value={String(classItem.id)}>
                  {classItem.name} — {classItem.subject} Level {classItem.level}
                </option>
              ))}
            </select>
          </div>
        )}
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium text-[#2f3303]">Message</label>

        <textarea
          name="message"
          rows={6}
          required
          defaultValue={announcement?.message || ''}
          className="w-full resize-none rounded-xl border border-[#ddd4aa] bg-white px-4 py-3 text-sm text-[#2f3303] outline-none transition focus:border-[#8a7a0a] focus:ring-4 focus:ring-[#d6c26b]/20"
        />
      </div>

      <div className="flex flex-col gap-3 border-t border-[#eee7c8] pt-5 sm:flex-row sm:justify-end">
        <Link
          href="/admin/announcements"
          className="rounded-xl border border-[#ddd4aa] bg-white px-5 py-2.5 text-center text-sm font-medium text-[#4b5205] transition hover:bg-[#f1ead0]"
        >
          Cancel
        </Link>

        <button
          type="submit"
          className="rounded-xl bg-[#4b5205] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#2f3303]"
        >
          {submitLabel}
        </button>
      </div>
    </form>
  );
}
