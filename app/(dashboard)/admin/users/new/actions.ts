"use server"

import { redirect } from "next/navigation"
import { promises as fs } from "fs"
import path from "path"
import {
  generateTemporaryPassword,
  hashPassword,
} from "@/lib/auth/password"

type UserRole = "ADMIN" | "HEAD_TEACHER" | "TEACHER" | "STUDENT"
type AccountStatus = "ACTIVE" | "INACTIVE"

type StoredUser = {
  id: string
  name: string
  email: string
  passwordHash: string
  role: UserRole
  status: AccountStatus
  mustChangePassword: boolean
  createdAt: string
}

const usersFilePath = path.join(process.cwd(), "data", "users.json")

async function readUsersFromFile(): Promise<StoredUser[]> {
  try {
    const fileContent = await fs.readFile(usersFilePath, "utf-8")
    return JSON.parse(fileContent) as StoredUser[]
  } catch (error) {
    return []
  }
}

async function saveUsersToFile(users: StoredUser[]) {
  await fs.mkdir(path.dirname(usersFilePath), { recursive: true })
  await fs.writeFile(usersFilePath, JSON.stringify(users, null, 2), "utf-8")
}

export async function createUserAction(formData: FormData) {
  const name = String(formData.get("name") || "").trim()
  const email = String(formData.get("email") || "").trim().toLowerCase()
  const role = String(formData.get("role") || "") as UserRole
  const status = String(formData.get("status") || "ACTIVE") as AccountStatus

  if (!name) {
    throw new Error("Name is required")
  }

  if (!email) {
    throw new Error("Email is required")
  }

  if (!["ADMIN", "HEAD_TEACHER", "TEACHER", "STUDENT"].includes(role)) {
    throw new Error("Invalid role selected")
  }

  if (!["ACTIVE", "INACTIVE"].includes(status)) {
    throw new Error("Invalid account status")
  }

  const users = await readUsersFromFile()

  const emailAlreadyExists = users.some((user) => user.email === email)

  if (emailAlreadyExists) {
    throw new Error("A user with this email already exists")
  }

  const temporaryPassword = generateTemporaryPassword()
  const passwordHash = await hashPassword(temporaryPassword)

  const newUser: StoredUser = {
    id: crypto.randomUUID(),
    name,
    email,
    passwordHash,
    role,
    status,
    mustChangePassword: true,
    createdAt: new Date().toISOString(),
  }

  users.push(newUser)

  await saveUsersToFile(users)

  console.log("Temporary password for new user:", temporaryPassword)

  redirect("/admin/users")
}