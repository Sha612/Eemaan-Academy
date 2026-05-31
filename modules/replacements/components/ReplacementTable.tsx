import { expireReplacementAction } from '@/app/(dashboard)/admin/replacements/actions';
import { Trash2, UserRoundCheck, CalendarClock, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
export type ReplacementItem = {
  id: string;
  replacementTeacher: string;
  className: string;
  startDate: string;
  startTime: string;
  endDate: string;
  endTime: string;
  reason: string;
  status: string;
};

type ReplacementTableProps = {
  replacements: ReplacementItem[];
};

export function ReplacementTable({ replacements }: ReplacementTableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-250 text-left text-sm">
        <thead className="bg-[#fbfaf4] text-xs uppercase tracking-wide text-[#68654f]">
          <tr>
            <th className="px-4 py-3 font-semibold">Replacement Teacher</th>
            <th className="px-4 py-3 font-semibold">Class</th>
            <th className="px-4 py-3 font-semibold">Access Window</th>
            <th className="px-4 py-3 font-semibold">Reason</th>
            <th className="px-4 py-3 font-semibold">Status</th>
            <th className="px-4 py-3 text-right font-semibold">Action</th>
          </tr>
        </thead>

        <tbody className="divide-y divide-[#eee7c8]">
          {replacements.map((replacement) => (
            <tr key={replacement.id} className="transition hover:bg-[#fbfaf4]">
              <td className="px-4 py-4">
                <div className="flex items-center gap-3">
                  <div className="flex size-10 items-center justify-center rounded-full bg-[#f1ead0] text-[#4b5205]">
                    <UserRoundCheck size={18} />
                  </div>

                  <div>
                    <p className="font-medium text-[#2f3303]">
                      {replacement.replacementTeacher}
                    </p>
                    <p className="text-xs text-[#8c876d]">Temporary access</p>
                  </div>
                </div>
              </td>

              <td className="px-4 py-4">
                <span className="inline-flex items-center gap-1 rounded-full bg-[#f1ead0] px-3 py-1 text-xs font-medium text-[#4b5205]">
                  <BookOpen size={13} />
                  {replacement.className}
                </span>
              </td>

              <td className="px-4 py-4">
                <div className="flex items-start gap-2 text-[#68654f]">
                  <CalendarClock size={16} className="mt-0.5" />
                  <div>
                    <p>
                      {replacement.startDate} at {replacement.startTime}
                    </p>
                    <p className="text-xs text-[#8c876d]">
                      Ends {replacement.endDate} at {replacement.endTime}
                    </p>
                  </div>
                </div>
              </td>

              <td className="px-4 py-4 text-[#68654f]">{replacement.reason}</td>

              <td className="px-4 py-4">
                <StatusBadge status={replacement.status} />
              </td>

              <td className="px-4 py-4">
                <form
                  action={async () => {
                    'use server';

                    await expireReplacementAction(replacement.id);
                  }}
                >
                  <Button
                    type="submit"
                    variant="outline"
                    size="sm"
                    disabled={replacement.status === 'expired'}
                    className="
    border-red-200
    bg-red-50
    text-red-700
    hover:border-red-300
    hover:bg-red-100
    hover:text-red-800
    disabled:cursor-not-allowed
    disabled:border-gray-200
    disabled:bg-gray-100
    disabled:text-gray-400
    disabled:opacity-70
  "
                  >
                    <Trash2 size={14} />

                    {replacement.status === 'expired'
                      ? 'Access Expired'
                      : 'Remove Access'}
                  </Button>
                </form>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function StatusBadge({ status }: { status: string }) {
  if (status === 'Active') {
    return (
      <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-medium text-green-700">
        Active
      </span>
    );
  }

  if (status === 'Scheduled') {
    return (
      <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">
        Scheduled
      </span>
    );
  }

  return (
    <span className="rounded-full bg-stone-100 px-3 py-1 text-xs font-medium text-stone-700">
      Expired
    </span>
  );
}
