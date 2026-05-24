"use server"

import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:4000"


export async function createStudentAction(formData: FormData) {
  const body = {
    firstName: String(formData.get("firstName")),
    lastName: String(formData.get("lastName")),
    gender: String(formData.get("gender")),
    phoneNumber: String(formData.get("phoneNumber")),
    guardianName: String(formData.get("guardianName")),
    guardianPhoneNumber: String(formData.get("guardianPhoneNumber")),
    guardianEmail: String(formData.get("guardianEmail")),

    user: {
      email: String(formData.get("email")),
      password: String(formData.get("password")),
      role: String(formData.get("role")),
    },
  }

  console.log("Student payload:", body)

  const res = await fetch(`${API_URL}/students`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  })

  if (!res.ok) {
    const error = await res.json().catch(() => null)

    console.log("Create student error:", error)

    throw new Error(
      Array.isArray(error?.message)
        ? error.message.join(", ")
        : error?.message ?? "Failed to create student"
    )
  }

  revalidatePath("/admin/users")
  revalidatePath("/admin/students")
  redirect("/admin/users")
}