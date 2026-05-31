import Link from 'next/link';
import {
  Megaphone,
  Pencil,
  Plus,
  Trash2,
} from 'lucide-react';
import { serverApi } from '@/lib/server-api';
import {
  AnnouncementResponse,
  PaginatedAnnouncementsResponse,
} from '@/modules/announcements/types';
import { deleteAnnouncementAction } from './actions';
import { Button } from '@/components/ui/button';

function getPriorityBadge(priority: string) {
  const base =
    'rounded-full px-3 py-1 text-xs font-medium capitalize';

  if (priority === 'high') {
    return `${base} bg-red-50 text-red-700`;
  }

  if (priority === 'medium') {
    return `${base} bg-yellow-50 text-yellow-700`;
  }

  return `${base} bg-green-50 text-green-700`;
}

export default async function AnnouncementsPage() {
  const response = await serverApi<
    AnnouncementResponse[] | PaginatedAnnouncementsResponse
  >('/announcements', {
    method: 'GET',
  });

  const announcements = Array.isArray(response)
    ? response
    : response.data;

  return (
    <main className="space-y-6 p-6">
      <div className="flex flex-col gap-4 rounded-2xl border border-[#ddd4aa] bg-[#fbfaf4] p-5 shadow-sm md:flex-row md:items-center md:justify-between">
        <div>
          <div className="flex items-center gap-2 text-[#4b5205]">
            <Megaphone className="h-5 w-5" />
            <span className="text-sm font-medium">
              Communication Management
            </span>
          </div>

          <h1 className="mt-2 text-2xl font-semibold text-[#2f3303]">
            Announcements
          </h1>

          <p className="mt-1 text-sm text-[#6f6a4d]">
            Manage school-wide, class-specific, and teacher announcements.
          </p>
        </div>

        <Button
          asChild
          className="bg-[#4b5205] text-white hover:bg-[#2f3303]"
        >
          <Link href="/admin/announcements/new">
            <Plus className="mr-2 h-4 w-4" />
            New Announcement
          </Link>
        </Button>
      </div>

      <section className="overflow-hidden rounded-2xl border border-[#ddd4aa] bg-white shadow-sm">
        {announcements.length === 0 ? (
          <div className="p-10 text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#f1ead0] text-[#4b5205]">
              <Megaphone className="h-6 w-6" />
            </div>

            <h2 className="mt-4 font-semibold text-[#2f3303]">
              No announcements found
            </h2>

            <p className="mt-2 text-sm text-[#6f6a4d]">
              Create your first announcement to start communicating with users.
            </p>

            <Button
              asChild
              className="mt-5 bg-[#4b5205] text-white hover:bg-[#2f3303]"
            >
              <Link href="/admin/announcements/new">
                Create Announcement
              </Link>
            </Button>
          </div>
        ) : (
          <table className="w-full border-collapse text-sm">
            <thead className="bg-[#fbfaf4] text-left text-[#4b5205]">
              <tr>
                <th className="px-5 py-4 font-semibold">Title</th>
                <th className="px-5 py-4 font-semibold">Type</th>
                <th className="px-5 py-4 font-semibold">Priority</th>
                <th className="px-5 py-4 font-semibold">Class</th>
                <th className="px-5 py-4 font-semibold">Created</th>
                <th className="px-5 py-4 text-right font-semibold">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody>
              {announcements.map((announcement) => (
                <tr
                  key={announcement.id}
                  className="border-t border-[#eee6c7] transition hover:bg-[#fbfaf4]"
                >
                  <td className="px-5 py-4">
                    <div>
                      <p className="font-medium text-[#2f3303]">
                        {announcement.title}
                      </p>
                      <p className="mt-1 line-clamp-1 max-w-md text-xs text-[#6f6a4d]">
                        {announcement.message}
                      </p>
                    </div>
                  </td>

                  <td className="px-5 py-4 capitalize text-[#6f6a4d]">
                    {announcement.type}
                  </td>

                  <td className="px-5 py-4">
                    <span className={getPriorityBadge(announcement.priority)}>
                      {announcement.priority}
                    </span>
                  </td>

                  <td className="px-5 py-4 text-[#6f6a4d]">
                    {announcement.class
                      ? `${announcement.class.name}`
                      : announcement.type === 'class-specific'
                        ? 'Class not linked'
                        : 'Not required'}
                  </td>

                  <td className="px-5 py-4 text-[#6f6a4d]">
                    {new Date(announcement.createdAt).toLocaleDateString()}
                  </td>

                  <td className="px-5 py-4">
                    <div className="flex justify-end gap-2">
                      <Button asChild size="sm" variant="outline">
                        <Link
                          href={`/admin/announcements/${announcement.id}/edit`}
                        >
                          <Pencil className="mr-2 h-4 w-4" />
                          Edit
                        </Link>
                      </Button>

                      <form action={deleteAnnouncementAction}>
                        <input
                          type="hidden"
                          name="id"
                          value={announcement.id}
                        />

                        <Button
                          type="submit"
                          size="sm"
                          variant="outline"
                          className="border-red-200 text-red-700 hover:bg-red-50"
                        >
                          <Trash2 className="mr-2 h-4 w-4" />
                          Delete
                        </Button>
                      </form>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </section>
    </main>
  );
}