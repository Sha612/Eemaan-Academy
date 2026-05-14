"use server"

import { redirect } from "next/navigation"
import { readJsonFile, writeJsonFile } from "@/lib/dev-store"

type StoredClass = {
  id: string
  name: string
  subject: string
  level: string
  description: string
  status: "ACTIVE" | "INACTIVE"
  primaryTeacherId: string | null
  createdAt: string
}

export async function createClassAction(formData: FormData) {
  const name = String(formData.get("name") || "").trim()
  const subject = String(formData.get("subject") || "").trim()
  const level = String(formData.get("level") || "").trim()
  const description = String(formData.get("description") || "").trim()
  const status = String(formData.get("status") || "ACTIVE") as "ACTIVE" | "INACTIVE"

  if (!name) throw new Error("Class name is required")
  if (!subject) throw new Error("Subject is required")

  const classes = await readJsonFile<StoredClass[]>("classes.json", [])

  const classExists = classes.some(
    (classItem) => classItem.name.toLowerCase() === name.toLowerCase()
  )

  if (classExists) {
    throw new Error("A class with this name already exists")
  }

  const newClass: StoredClass = {
    id: crypto.randomUUID(),
    name,
    subject,
    level,
    description,
    status,
    primaryTeacherId: null,
    createdAt: new Date().toISOString(),
  }

  classes.push(newClass)

  await writeJsonFile("classes.json", classes)

  redirect("/admin/classes")
}