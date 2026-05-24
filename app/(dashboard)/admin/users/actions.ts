"use server"

import { redirect } from "next/navigation"
import { apiFetch } from "@/lib/api"

export async function updateUserAction(formData: FormData) {
  const id = String(formData.get("id"))

  const payload = {
    email: String(formData.get("email")),
  }

  await apiFetch(`/users/${id}`, {
    method: "PATCH",
    body: JSON.stringify(payload),
  })

  redirect("/admin/users")
}