"use client"

import { SidebarMenu } from "@/components/ui/sidebar"
import { SidebarNavItem } from "./SidebarNavItem"
import type { NavItem } from "@/lib/navigation"

type SidebarNavProps = {
  items: NavItem[]
}

export function SidebarNav({ items }: SidebarNavProps) {
  return (
    <SidebarMenu>
      {items.map((item) => (
        <SidebarNavItem key={item.title} item={item} />
      ))}
    </SidebarMenu>
  )
}