// import { canAccessClass } from "@/lib/auth/access-control"
// import { Permission } from "@/lib/auth/permissions"

// export async function GET(req: Request) {
//   const user = await getUserFromSession()

//   const classId = "123"

//   if (!canAccessClass(user, classId, Permission.VIEW_CLASSES)) {
//     return new Response("Unauthorized", { status: 403 })
//   }

//   return Response.json({ data: "class data" })
// }