// app/api/students/route.ts

import { getUserFromToken } from "@/modules/auth/getUser"
import { hasPermission } from "@/modules/auth/rbac"
import { Permission } from "@/modules/auth/permissions"
import { NextRequest } from "next/server"

export async function GET(req: NextRequest) {
  const token = req.cookies.get("token")?.value

  const user = await getUserFromToken(token)

  if (!user) {
    return new Response("Unauthorized", { status: 401 })
  }



  return Response.json([{ name: "Ali" }])
}