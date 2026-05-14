"use server"
import { Role } from "@/modules/auth/roles"
import { signToken } from "@/modules/auth/services"

import { cookies } from "next/headers"
import { redirect } from "next/navigation"

type LoginState = {
    error: string 

}

export async function loginAction(
    previousState: LoginState,
    formData: FormData
): Promise<LoginState> {
    console.log("EMAIL:", formData.get("email"))
  console.log("PASSWORD:", formData.get("password"))
    const email = formData.get("email")
    const password = formData.get("password")

    if (typeof email !== "string" || typeof password !== "string") {
        return { error: "Invalid form data" }
    }

    
    if (!email || !password) {
        return { error: "Email and password are required" }
    }
// 🔴 TEMP: Replace with DB later
    if (email !== "nasir@gmail.com" || password !== "admin1") {
        return { error: "Invalid email or password" }
    }

    const token = await signToken({
        id: "1",
        email,
        role: Role.ADMIN,
    })

    const cookieStore = await cookies()
    cookieStore.set("token", token, {
        httpOnly: true,
        secure: false, // true in production
        path: "/",
        maxAge: 60 * 60 * 24 * 7,
        sameSite: "lax",
    })

    redirect("/admin")

}