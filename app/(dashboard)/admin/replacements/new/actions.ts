"use server"

import { redirect } from "next/navigation"
import { readJsonFile, writeJsonFile } from "@/lib/dev-store"

type StoredUser = {
  id: string
  name: string
  email: string
  role: string
}

type StoredClass = {
  id: string
  name: string
}

type ReplacementAccess = {
  id: string
  classId: string
  teacherId: string
  startDate: string
  endDate: string
  reason: string
  status: "ACTIVE"
  createdAt: string
}

export async function grantReplacementAccessAction(formData: FormData) {
  const classId = String(formData.get("classId") || "").trim()
  const teacherId = String(formData.get("teacherId") || "").trim()
  const startDate = String(formData.get("startDate") || "").trim()
  const endDate = String(formData.get("endDate") || "").trim()
  const reason = String(formData.get("reason") || "").trim()

  if (!classId) throw new Error("Class is required")
  if (!teacherId) throw new Error("Replacement teacher is required")
  if (!startDate) throw new Error("Start date is required")
  if (!endDate) throw new Error("End date is required")

  const start = new Date(startDate)
  const end = new Date(endDate)

  if (end < start) {
    throw new Error("End date cannot be before start date")
  }

  const users = await readJsonFile<StoredUser[]>("users.json", [])
  const classes = await readJsonFile<StoredClass[]>("classes.json", [])
  const replacements = await readJsonFile<ReplacementAccess[]>(
    "replacements.json",
    []
  )

  const teacherExists = users.some(
    (user) =>
      user.id === teacherId &&
      (user.role === "TEACHER" || user.role === "HEAD_TEACHER")
  )

  if (!teacherExists) {
    throw new Error("Selected replacement teacher does not exist")
  }

  const classExists = classes.some((classItem) => classItem.id === classId)

  if (!classExists) {
    throw new Error("Selected class does not exist")
  }

  const hasOverlappingAccess = replacements.some((replacement) => {
    if (replacement.classId !== classId) return false
    if (replacement.teacherId !== teacherId) return false

    const existingStart = new Date(replacement.startDate)
    const existingEnd = new Date(replacement.endDate)

    return start <= existingEnd && end >= existingStart
  })

  if (hasOverlappingAccess) {
    throw new Error("This teacher already has replacement access during this period")
  }

  const newReplacement: ReplacementAccess = {
    id: crypto.randomUUID(),
    classId,
    teacherId,
    startDate,
    endDate,
    reason,
    status: "ACTIVE",
    createdAt: new Date().toISOString(),
  }

  replacements.push(newReplacement)

  await writeJsonFile("replacements.json", replacements)

  redirect("/admin/replacements")
}