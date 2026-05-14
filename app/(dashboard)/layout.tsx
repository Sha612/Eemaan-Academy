// ap/(dashboard)/Layout.tsx
import { cookies } from "next/headers"
import { SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/layout/sidebar/AppSidebar"
import { Navbar } from "@/components/layout/Navbar"
import { getUserFromToken } from "@/modules/auth/getUser"

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const token = (await cookies()).get("token")?.value
  const user = await getUserFromToken(token)

  if (!user) {
    return <div>Unauthorized</div>
  }

  return (
    <SidebarProvider>
      <div className="flex h-screen w-full">

        {/* Sidebar */}
        <AppSidebar user={user} />

        {/* Main */}
        <div className="flex flex-col flex-1 min-w-0">
          <Navbar />

          <main className="flex-1 bg-gray-50/50 p-6 overflow-auto">
            {children}
          </main>
        </div>

      </div>
    </SidebarProvider>
  )
}
