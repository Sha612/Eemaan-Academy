//app/layout.tsx
import type { Metadata } from "next"

import { Inter } from "next/font/google"
import "./globals.css"
import { cn } from "@/lib/utils"
import { TooltipProvider } from "@/components/ui/tooltip"

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
})


export const metadata: Metadata = {
  title: { template: "%s | Eemaan Academy" ,default: "Eemaan Academy" },
  description: "Quran Institute Management System",
  metadataBase: new URL('http://localhost:3000/admin'),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full antialiased",
        inter.variable,
        "font-sans"
      )}
    >
      <body className="min-h-full bg-[#f8f6ee] text-[#2f3303]">
        <TooltipProvider>
          {children}
        </TooltipProvider>
      </body>
    </html>
  )
}
