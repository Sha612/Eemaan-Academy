// components/users/StudentFields.tsx

export function StudentFields() {
  return (
    <section className="rounded-2xl border border-[#eee7c8] bg-[#fbfaf4] p-4">
      <h2 className="font-semibold text-[#2f3303]">Student Profile</h2>

      <div className="mt-4 grid gap-4 md:grid-cols-2">
        <input
          name="guardianName"
          className="rounded-xl border border-[#ddd4aa] px-4 py-2"
          placeholder="Guardian name"
        />

        <input
          name="guardianPhoneNumber"
          className="rounded-xl border border-[#ddd4aa] px-4 py-2"
          placeholder="Guardian phone number"
        />
        <input
          name="guardianEmail"
          className="rounded-xl border border-[#ddd4aa] px-4 py-2"
          placeholder="Guardian email"
        />
      </div>
    </section>
  );
}
