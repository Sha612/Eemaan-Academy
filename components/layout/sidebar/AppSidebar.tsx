"use client"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"


import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  useSidebar,
} from "@/components/ui/sidebar"

import { SidebarNav } from "./SidebarNav"
import { adminNavItems } from "./nav-items"
import { filterNavItems } from "@/lib/navigation"
import { User } from "@/modules/auth/types"
import { Avatar,AvatarFallback, AvatarImage } from "@/components/ui/avatar"


type AppSidebarProps = {
  user: User
}

export function AppSidebar({ user }: AppSidebarProps) {
  const { state } = useSidebar()
  const pathname = usePathname()
  const filteredNavItems = filterNavItems(adminNavItems, user)

  return (
    <Sidebar
        collapsible="icon"
        className="h-full  bg-transparent">
        <div className="flex h-full flex-col  border border-[#ddd4aa]/70 bg-[#fbfaf4] shadow-sm">
        <SidebarHeader className="pt-6 px-2">
          <div className="flex items-center gap-3">
            <div className="flex aspect-square size-9 items-center justify-center overflow-hidden rounded-lg shrink-0">
              <Image src="/eemaanFoundationIcon.jpg" alt="Logo" width={40} height={40} className="object-cover"/>
            </div>
            <div className={cn(
                "flex flex-col transition-all duration-300 overflow-hidden",
                state === "collapsed" ? "w-0 opacity-0" : "w-auto opacity-100" )} >
              <span className="font-bold text-sm whitespace-nowrap">
                Eemaan Academy
              </span>
              <span className="text-[10px] text-muted-foreground whitespace-nowrap">
                School Management
              </span>
            </div>
          </div>
        </SidebarHeader>

        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Main Menu</SidebarGroupLabel>
            <SidebarNav items={filteredNavItems} />
          </SidebarGroup>
        </SidebarContent>
        
      </div>
    </Sidebar>
  )
}