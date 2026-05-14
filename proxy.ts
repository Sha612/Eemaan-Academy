// proxy.ts
import { NextRequest, NextResponse } from "next/server"
import { getUserFromToken } from "@/modules/auth/getUser"

export async function proxy(req: NextRequest) {
  const token = req.cookies.get("token")?.value

  const user = await getUserFromToken(token)

  if (!user && req.nextUrl.pathname.startsWith("/admin")) {
    return NextResponse.redirect(new URL("/login", req.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/admin/:path*"],
}