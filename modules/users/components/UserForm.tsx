// @/modules/users/components/UserForm.tsx

'use client';
import { createUserAction } from '@/app/(dashboard)/admin/users/new/actions';
import { useState } from 'react';
import { RoleSpecificFields } from './RoleSpecificFields';
import { Role } from '@/modules/auth/roles';
import { GenderRadioGroup } from './GenderRadioGroup';
export function UserForm() {
  const [role, setRole] = useState<Role>(Role.STUDENT);

  return (
    <form
      action={createUserAction}
      className="mx-auto max-w-3xl space-y-6 rounded-2xl border border-[#ddd4aa]/70 bg-white p-6 shadow-sm"
    >
      <div>
        <h1 className="text-2xl font-semibold text-[#2f3303]">
          Create System User
        </h1>
        <p className="text-sm text-[#68654f]">
          Create one user account and attach the correct profile based on role.
        </p>
      </div>

      <section className="grid gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <label className="text-sm font-medium text-[#2f3303]">
            First Name
          </label>
          <input
            name="firstName"
            className="w-full rounded-xl border border-[#ddd4aa] px-4 py-2 outline-none focus:ring-2 focus:ring-[#8a7a2f]/30"
            placeholder="Enter first name"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-[#2f3303]">
            Last Name
          </label>
          <input
            name="lastName"
            className="w-full rounded-xl border border-[#ddd4aa] px-4 py-2 outline-none focus:ring-2 focus:ring-[#8a7a2f]/30"
            placeholder="Enter last name"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-[#2f3303]">Email</label>
          <input
            name="email"
            type="email"
            className="w-full rounded-xl border border-[#ddd4aa] px-4 py-2 outline-none focus:ring-2 focus:ring-[#8a7a2f]/30"
            placeholder="user@example.com"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-[#2f3303]">Password</label>
          <input
            name="password"
            type="password"
            className="w-full rounded-xl border border-[#ddd4aa] px-4 py-2 outline-none focus:ring-2 focus:ring-[#8a7a2f]/30"
            placeholder="Enter password"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-[#2f3303]">
            Phone Number
          </label>
          <input
            name="phoneNumber"
            className="w-full rounded-xl border border-[#ddd4aa] px-4 py-2 outline-none focus:ring-2 focus:ring-[#8a7a2f]/30"
            placeholder="Phone number"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-[#2f3303]">Role</label>
          <select
            name="role"
            required
            value={role}
            onChange={(e) => setRole(e.target.value as Role)}
            className="w-full rounded-xl border border-[#ddd4aa] 
              bg-[#fbfaf4] px-4 py-3 text-sm capitalize outline-none transition 
              focus:border-[#8a7a2f] focus:ring-2 focus:ring-[#8a7a2f]/20"
          >
            <option value={Role.STUDENT}>Student</option>
            <option value={Role.TEACHER}>Teacher</option>
            <option value={Role.HEAD_TEACHER}>Head Teacher</option>
            <option value={Role.ADMIN}>Admin</option>
          </select>
        </div>
      </section>

      <GenderRadioGroup />
      <RoleSpecificFields role={role} />

      <button
        type="submit"
        className="w-full rounded-xl bg-[#8a7a2f] px-5 py-3 font-medium text-white transition hover:bg-[#6f6225]"
      >
        Create User
      </button>
    </form>
  );
}
