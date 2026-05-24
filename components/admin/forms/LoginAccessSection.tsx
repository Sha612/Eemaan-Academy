'use client';

import { useState } from 'react';
import { FormField } from './FormField';

export function LoginAccessSection() {
  const [createAccount, setCreateAccount] = useState(false);

  return (
    <section className="rounded-2xl border border-[#ddd4aa]/70 bg-white p-5">
      <div className="flex items-center justify-between gap-4">
        <div>
          <h2 className="font-semibold text-[#2f3303]">Login Access</h2>
          <p className="mt-1 text-sm text-[#68654f]">
            Allow this teacher to log in and use the system.
          </p>
        </div>

        <button
          type="button"
          onClick={() => setCreateAccount((current) => !current)}
          className={`rounded-full px-4 py-2 text-sm font-medium transition ${
            createAccount
              ? 'bg-[#4b5205] text-white'
              : 'bg-[#f1ead0] text-[#4b5205]'
          }`}
        >
          {createAccount ? 'Enabled' : 'Disabled'}
        </button>
      </div>

      <input type="hidden" name="createAccount" value={String(createAccount)} />

      {createAccount ? (
        <div className="mt-5 grid gap-5 md:grid-cols-2">
          <FormField
            label="Email"
            name="email"
            type="email"
            required
            placeholder="teacher@email.com"
          />

          <div className="space-y-2">
            <label
              htmlFor="role"
              className="text-sm font-medium text-[#2f3303]"
            >
              Role
            </label>

            <select
              id="role"
              name="role"
              defaultValue="TEACHER"
              className="h-11 w-full rounded-xl border border-[#ddd4aa] bg-white px-4 text-sm outline-none focus:border-[#8a7a2f] focus:ring-2 focus:ring-[#ddd4aa]"
            >
              <option value="TEACHER">Teacher</option>
              <option value="HEAD_TEACHER">Head Teacher</option>
            </select>
          </div>

          <FormField
            label="Temporary Password"
            name="temporaryPassword"
            type="password"
            required
            placeholder="Enter temporary password"
          />
        </div>
      ) : null}
    </section>
  );
}
