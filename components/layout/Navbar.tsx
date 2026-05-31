import { SidebarTrigger } from '@/components/ui/sidebar';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Bell, User } from 'lucide-react';
import { LogoutButton } from './logoutButton';
import { ActivityItem } from '@/components/dashboard/ActivityItem';
import { getRecentActivities } from '@/modules/dashboard/activity';
import { getUserFromSession } from '@/modules/auth/getUserFromSession';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { logoutAction } from '@/app/(dashboard)/actions';

function formatRole(role?: string) {
  if (!role) return 'User';

  return role
    .replaceAll('_', ' ')
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

export async function Navbar() {
  const [recentActivitiesResult, userResult] = await Promise.allSettled([
  getRecentActivities(),
  getUserFromSession(),
]);

const recentActivities =
  recentActivitiesResult.status === 'fulfilled'
    ? recentActivitiesResult.value
    : [];

const user =
  userResult.status === 'fulfilled'
    ? userResult.value
    : null;

  const role = formatRole(user?.role);

  return (
    <header className="sticky top-0 z-40 flex h-16 w-full shrink-0 items-center justify-between border-b border-[#e6dfbd]/80 bg-[#fbfaf4]/85 px-4 shadow-sm backdrop-blur-xl md:px-6">
      <div className="flex min-w-0 flex-1 items-center gap-4">
        <SidebarTrigger className="-ml-1 rounded-xl text-[#4b5205] transition hover:bg-[#efe8ca] hover:text-[#2f3303]" />

        <div className="hidden md:block">
          <p className="text-sm font-semibold text-[#2f3303]">
            Eemaan Institute
          </p>
          <p className="text-xs text-[#7a755b]">
            Academic Management Dashboard
          </p>
        </div>
      </div>

      <div className="flex shrink-0 items-center gap-5">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button
              type="button"
              aria-label="View recent activity"
              className="group relative flex h-11 w-11 items-center justify-center rounded-2xl border border-[#e6dfbd] bg-white/80 text-[#68654f] shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#f5efd7] hover:text-[#2f3303] hover:shadow-md"
            >
              <Bell size={19} />

              {recentActivities.length > 0 && (
                <span className="absolute right-2 top-2 flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-70" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full border-2 border-white bg-red-500" />
                </span>
              )}
            </button>
          </DropdownMenuTrigger>

          <DropdownMenuContent
            align="end"
            className="mt-3 w-[22rem] overflow-hidden rounded-2xl border-[#e6dfbd] bg-white/95 p-0 shadow-xl backdrop-blur-xl sm:w-96"
          >
            <div className="border-b border-[#eee7c8] bg-[#fbfaf4] px-4 py-4">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <h3 className="text-sm font-semibold text-[#2f3303]">
                    Recent Activity
                  </h3>
                  <p className="mt-1 text-xs text-[#6f6a4f]">
                    Latest system updates from the database.
                  </p>
                </div>

                {recentActivities.length > 0 && (
                  <span className="rounded-full bg-[#4b5205]/10 px-2.5 py-1 text-xs font-medium text-[#4b5205]">
                    {recentActivities.length}
                  </span>
                )}
              </div>
            </div>

            <div className="max-h-[420px] space-y-3 overflow-y-auto p-3">
              {recentActivities.length === 0 ? (
                <div className="rounded-xl border border-dashed border-[#ddd4aa] bg-[#fbfaf4] px-4 py-6 text-center">
                  <p className="text-sm font-medium text-[#2f3303]">
                    No recent activity
                  </p>
                  <p className="mt-1 text-xs text-[#6f6a4f]">
                    New updates will appear here.
                  </p>
                </div>
              ) : (
                recentActivities.map((activity) => (
                  <ActivityItem key={activity.id} {...activity} />
                ))
              )}
            </div>
          </DropdownMenuContent>
        </DropdownMenu>

<div className="hidden items-center gap-3 rounded-2xl border border-[#e6dfbd] bg-white/70 py-1.5 pl-4 pr-2 shadow-sm sm:flex">
          <div className="min-w-0 text-right">
            <p className="max-w-44 truncate text-sm font-semibold leading-none text-[#2f3303]">
              {role}
            </p>
          </div>

          <Avatar className="h-10 w-10 border border-[#ddd4aa] shadow-sm">
            <AvatarFallback className="bg-gradient-to-br from-[#4b5205] to-[#737a18] text-sm font-semibold text-white">
              {<User size={18} />}
            </AvatarFallback>
          </Avatar>
        </div>

        <div className="ml-1">
          <form action={logoutAction}>
            <LogoutButton />
          </form>
        </div>
      </div>
    </header>
  );
}
