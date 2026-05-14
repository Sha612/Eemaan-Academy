
import Link from "next/link"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ChevronDown, Bell, Search, User} from "lucide-react"
import { LogoutButton } from "./logoutButton"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { logoutAction } from "@/app/(dashboard)/actions"

export function Navbar() {
  return (
    <header className="sticky top-0 flex h-16 w-full shrink-0 items-center justify-between border-b border-[#ddd4aa]/70 bg-[#fbfaf4]/95 px-6 backdrop-blur-md">
      <div className="flex min-w-0 items-center gap-4">
        <SidebarTrigger className="-ml-1 text-[#4b5205] hover:bg-[#f1ead0] hover:text-[#2f3303]" />

        <div className="hidden h-6 w-px bg-[#ddd4aa] md:block" />

        <form className="hidden items-center gap-2 rounded-xl border border-[#ddd4aa] bg-white px-3 py-2 text-sm text-[#8c876d] shadow-sm transition-all focus-within:border-[#8a7a0a] focus-within:ring-4 focus-within:ring-[#d6c26b]/20 md:flex">
          <Search size={16} className="shrink-0" />

          <input
            type="text"
            placeholder="Search dashboard..."
            className="w-64 bg-transparent text-[#2f3303] outline-none placeholder:text-[#9b967c] lg:w-80"
          />
        </form>
      </div>

      <div className="flex shrink-0 items-center gap-4">
        <button type="button" className="relative rounded-xl p-2 text-[#68654f] transition hover:bg-[#f1ead0] hover:text-[#2f3303]">
          <Bell size={20} />
          <span className="absolute right-2 top-2 h-2 w-2 rounded-full border-2 border-[#fbfaf4] bg-red-500" />
        </button> 
        <DropdownMenu>
          <DropdownMenuTrigger className="flex items-center gap-3 border-l border-r border-[#ddd4aa] pl-4 outline-none">
            <div className="hidden text-right sm:block">
              <p className="text-sm font-semibold leading-none text-[#2f3303]">
                Admin User
              </p>
              <p className="mt-1 text-xs text-center text-[#68654f]">Admin</p>
            </div>

            <Avatar className="h-9 w-9">
              <AvatarImage src="/path-to-logo.png" alt="Admin User" />
              <AvatarFallback className="bg-[#4b5205] text-white"><User size={20} /></AvatarFallback>
            </Avatar>

            <div className="border-r " ></div>
            

            {/* <ChevronDown size={14} className="text-[#68654f]" /> */}
          </DropdownMenuTrigger>

          <DropdownMenuContent
            align="end"
            className="mt-2 w-56 border-[#ddd4aa] bg-white"
          >
            <div className="px-2 py-1.5 text-sm font-semibold text-[#2f3303]">
              My Account
            </div>

            <DropdownMenuSeparator />

            <DropdownMenuItem asChild>
              <Link href="/admin">Admin Dashboard</Link>
            </DropdownMenuItem>

            <DropdownMenuItem asChild>
              <Link href="/teachers">Teacher Dashboard</Link>
            </DropdownMenuItem>

            <DropdownMenuSeparator />

            <DropdownMenuItem>Settings</DropdownMenuItem>

            
          </DropdownMenuContent>
        </DropdownMenu>

        <form action={logoutAction}>
                <LogoutButton />
              </form>
      </div>
    </header>
  )
}