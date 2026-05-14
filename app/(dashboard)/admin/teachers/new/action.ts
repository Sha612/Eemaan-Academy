"use server"

import { redirect } from "next/navigation"
import { readJsonFile, writeJsonFile } from "@/lib/dev-store"
import {
  generateTemporaryPassword,
  hashPassword,
} from "@/lib/auth/password"

type StoredUser = {
  id: string
  name: string
  email: string
  passwordHash: string
  role: "TEACHER"
  status: "ACTIVE"
  mustChangePassword: boolean
  createdAt: string
}

type StoredTeacher = {
  id: string
  userId: string
  teacherCode: string
  phone: string
  subjects: string[]
  createdAt: string
}

export async function createTeacherAction(formData: FormData) {
  const name = String(formData.get("name") || "").trim()
  const email = String(formData.get("email") || "").trim().toLowerCase()
  const phone = String(formData.get("phone") || "").trim()
  const teacherCode = String(formData.get("teacherCode") || "").trim()
  const subjectsText = String(formData.get("subjects") || "").trim()

  if (!name) throw new Error("Teacher name is required")
  if (!email) throw new Error("Teacher email is required")

  const users = await readJsonFile<StoredUser[]>("users.json", [])
  const teachers = await readJsonFile<StoredTeacher[]>("teachers.json", [])

  const emailExists = users.some((user) => user.email === email)

  if (emailExists) {
    throw new Error("A user with this email already exists")
  }

  const temporaryPassword = generateTemporaryPassword()
  const passwordHash = await hashPassword(temporaryPassword)

  const userId = crypto.randomUUID()

  const newUser: StoredUser = {
    id: userId,
    name,
    email,
    passwordHash,
    role: "TEACHER",
    status: "ACTIVE",
    mustChangePassword: true,
    createdAt: new Date().toISOString(),
  }

  const newTeacher: StoredTeacher = {
    id: crypto.randomUUID(),
    userId,
    teacherCode: teacherCode || `TCH-${teachers.length + 1}`,
    phone,
    subjects: subjectsText
      ? subjectsText.split(",").map((subject) => subject.trim())
      : [],
    createdAt: new Date().toISOString(),
  }

  users.push(newUser)
  teachers.push(newTeacher)

  await writeJsonFile("users.json", users)
  await writeJsonFile("teachers.json", teachers)

  console.log("Temporary teacher password:", temporaryPassword)

  redirect("/admin/teachers")
}