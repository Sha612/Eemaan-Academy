'use client';

import { useState } from 'react';
import { LoginAccessToggle } from '@/components/admin/forms/LoginAccessToggle';
import { createTeacherAction } from '@/app/(dashboard)/admin/teachers/new/action';

export default function TeacherForm() {
  const [grantLoginAccess, setGrantLoginAccess] = useState(false);

  return (
    <form className="space-y-6" action={createTeacherAction} method="post">
      <section className="rounded-2xl border border-[#ddd4aa]/70 bg-white p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-[#2f3303]">
          Teacher Details
        </h2>

        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <input
            name="fullName"
            placeholder="Full name"
            className="rounded-xl border border-[#ddd4aa] px-4 py-2"
          />

          <input
            name="phoneNumber"
            placeholder="Phone number"
            className="rounded-xl border border-[#ddd4aa] px-4 py-2"
          />
        </div>
      </section>

      <section className="rounded-2xl border border-[#ddd4aa]/70 bg-[#fbfaf4] p-6 shadow-sm">
        <div className="flex items-center justify-between gap-4">
          <div>
            <h2 className="text-lg font-semibold text-[#2f3303]">
              Login Access
            </h2>
            <p className="text-sm text-[#68654f]">
              Allow this teacher to log in to the system.
            </p>
          </div>

          <LoginAccessToggle
            checked={grantLoginAccess}
            onCheckedChange={setGrantLoginAccess}
          />
        </div>

        <div
          className={
            grantLoginAccess
              ? 'grid grid-rows-[1fr] opacity-100 transition-all duration-300'
              : 'grid grid-rows-[0fr] opacity-0 transition-all duration-300'
          }
        >
          <div className="overflow-hidden">
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <input
                name="email"
                type="email"
                placeholder="Login email"
                disabled={!grantLoginAccess}
                className="rounded-xl border border-[#ddd4aa] px-4 py-2"
              />

              <select
                name="role"
                defaultValue="TEACHER"
                disabled={!grantLoginAccess}
                className="rounded-xl border border-[#ddd4aa] px-4 py-2"
              >
                <option value="TEACHER">Teacher</option>
                <option value="HEAD_TEACHER">Head Teacher</option>
              </select>

              <input
                name="temporaryPassword"
                type="password"
                placeholder="Temporary password"
                disabled={!grantLoginAccess}
                className="rounded-xl border border-[#ddd4aa] px-4 py-2 md:col-span-2"
              />
            </div>
          </div>
        </div>
      </section>

      <input
        type="hidden"
        name="grantLoginAccess"
        value={String(grantLoginAccess)}
      />

      <button className="rounded-xl bg-[#8a7a2f] px-6 py-3 font-medium text-white">
        Create Teacher
      </button>
    </form>
  );
}
