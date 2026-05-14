"use client"

import { useActionState } from "react"
import { loginAction } from "./actions"

import { useRouter } from "next/navigation"
import Image from "next/image"

const initialState = {
    error: "",
}

export default function LoginPage() {
  const [state, formAction, isPending] = useActionState(
    loginAction,
    initialState  
  )

  return (
    <main className="min-h-screen flex items-center justify-center px-4 py-8 bg-[radial-gradient(circle_at_top_left,#d6c26b_0%,transparent_30%),linear-gradient(to_bottom_right,#f7f4e8,#ffffff,#ebe6cc)]">
      <section className="w-full max-w-6xl overflow-hidden rounded-3xl bg-white/90 shadow-2xl ring-1 ring-[#d6c26b]/30 backdrop-blur-xl">
        <div className="grid min-h-[620px] grid-cols-1 lg:grid-cols-2">

          {/* Left banner / brand panel */}
          <div className="relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#4b5205] via-[#5f6509] to-[#2f3303] px-6 py-10 sm:px-10">
            <div className="absolute -left-16 top-10 h-48 w-48 rounded-full bg-[#b59b00]/25 blur-3xl" />
            <div className="absolute bottom-8 right-8 h-56 w-56 rounded-full bg-[#d6c26b]/20 blur-3xl" />
            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.08)_0%,transparent_45%,rgba(0,0,0,0.08)_100%)]" />

            <div className="relative w-full max-w-xl">
              <div className="rounded-[2rem] border border-white/15 bg-white p-4 shadow-2xl shadow-black/25">
                <Image
                  src="/eemaanFoundationIcon2.png"
                  alt="Eemaan Foundation Banner"
                  width={1491}
                  height={209}
                  priority
                  className="h-auto w-full rounded-3xl object-contain"
                />
              </div>

              <div className="mt-8 rounded-[2rem] border border-white/15 bg-white/10 p-7 shadow-xl shadow-black/20 backdrop-blur-md">
                <p className="mb-3 inline-flex rounded-full border border-[#d6c26b]/40 bg-[#d6c26b]/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#f7f4e8]">
                  Quran Institute
                </p>

                <h1 className="text-3xl font-bold tracking-tight text-white">
                  Modern management for your Islamic school
                </h1>

                <p className="mt-4 text-sm leading-7 text-[#f7f4e8]/85">
                  Access students, classes, teachers, attendance, homework,
                  reports, and school operations from one secure admin portal.
                </p>

                <div className="mt-6 grid grid-cols-3 gap-3">
                  <div className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-md">
                    <p className="text-sm font-semibold text-white">
                      Admin
                    </p>
                    <p className="mt-1 text-xs text-[#f7f4e8]/75">
                      Control
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-md">
                    <p className="text-sm font-semibold text-white">
                      Secure
                    </p>
                    <p className="mt-1 text-xs text-[#f7f4e8]/75">
                      Access
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-md">
                    <p className="text-sm font-semibold text-white">
                      Simple
                    </p>
                    <p className="mt-1 text-xs text-[#f7f4e8]/75">
                      Workflow
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right login panel */}
          <div className="flex items-center justify-center bg-[#fbfaf4] px-6 py-10 sm:px-10 lg:px-16">
            <div className="w-full max-w-md">
              <div className="mb-8">
                <p className="mb-3 inline-flex rounded-full bg-[#f1ead0] px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#5f6509]">
                  Admin Portal
                </p>

                <h2 className="text-4xl font-bold tracking-tight text-[#2f3303]">
                  Welcome back
                </h2>

                <p className="mt-3 text-sm leading-6 text-[#68654f]">
                  Enter your admin credentials to access the management
                  dashboard.
                </p>
              </div>

              <form action={formAction} className="space-y-5">
                {state.error && <p className="text-red-500">{state.error}</p>}
                <div>
                  <label className="mb-2 block text-sm font-medium text-[#3f4306]">
                    Email Address
                  </label>

                  <input
                    name="email"
  type="email"
                    className="w-full rounded-xl border border-[#ddd4aa] bg-white px-4 py-3 text-[#2f3303] shadow-sm outline-none transition placeholder:text-[#9b967c] focus:border-[#8a7a0a] focus:ring-4 focus:ring-[#d6c26b]/25"
                    placeholder="Email address"
                    autoComplete="email"
                    required
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-[#3f4306]">
                    Password
                  </label>

                  <input
                    name="password"
  type="password"
                    className="w-full rounded-xl border border-[#ddd4aa] bg-white px-4 py-3 text-[#2f3303] shadow-sm outline-none transition placeholder:text-[#9b967c] focus:border-[#8a7a0a] focus:ring-4 focus:ring-[#d6c26b]/25"
                    placeholder="Enter your password"
                    autoComplete="current-password"
                    required
                  />
                </div>

                <div className="flex items-center justify-between">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      className="h-4 w-4 rounded border-[#c9bf8c] text-[#5f6509] focus:ring-[#8a7a0a]"
                    />

                    <span className="ml-2 text-sm text-[#68654f]">
                      Remember me
                    </span>
                  </label>

                  <button
                    type="button"
                    className="text-sm font-medium text-[#5f6509] hover:text-[#2f3303]"
                  >
                    Forgot password?
                  </button>
                </div>

                <button
                  type="submit"
                  disabled={isPending}
                  className="w-full rounded-xl bg-[#4b5205] px-4 py-3 font-semibold text-white shadow-lg shadow-[#4b5205]/25 transition hover:-translate-y-0.5 hover:bg-[#3f4306] hover:shadow-xl hover:shadow-[#4b5205]/30 disabled:translate-y-0 disabled:cursor-not-allowed disabled:bg-[#9b967c]"
                >
                  {isPending ? "Signing in..." : "Sign In"}
                </button>
              </form>

              

              <p className="mt-8 text-center text-xs text-[#8c876d]">
                Quran Institute Management System © 2026
              </p>
            </div>
          </div>

        </div>
      </section>
    </main>
  )
}