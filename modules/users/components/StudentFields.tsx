// @/modules/users/components/StudentFields.tsx

export function StudentFields() {
  return (
    <section className="rounded-2xl border border-[#eee7c8] bg-[#fbfaf4] p-4">
      <h2 className="mb-4 font-semibold text-[#2f3303]">Student Profile</h2>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <label className="text-sm font-medium text-[#2f3303]">
            Guardian Name
          </label>
          <input
            name="guardianName"
            required
            className="w-full rounded-xl border border-[#ddd4aa] bg-white px-4 py-3 text-sm outline-none transition focus:border-[#8a7a2f] focus:ring-2 focus:ring-[#8a7a2f]/20"
            placeholder="Guardian name"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-[#2f3303]">
            Guardian Phone Number
          </label>
          <input
            name="guardianPhoneNumber"
            type="tel"
            required
            className="w-full rounded-xl border border-[#ddd4aa] bg-white px-4 py-3 text-sm outline-none transition focus:border-[#8a7a2f] focus:ring-2 focus:ring-[#8a7a2f]/20"
            placeholder="Guardian phone number"
          />
        </div>

        <div className="space-y-2 md:col-span-2">
          <label className="text-sm font-medium text-[#2f3303]">
            Guardian Email
          </label>
          <input
            name="guardianEmail"
            type="email"
            required
            className="w-full rounded-xl border border-[#ddd4aa] bg-white px-4 py-3 text-sm outline-none transition focus:border-[#8a7a2f] focus:ring-2 focus:ring-[#8a7a2f]/20"
            placeholder="Guardian email"
          />
        </div>
      </div>
    </section>
  );
}
