/*
Purpose:
landing page
redirect to login
*/
export default function StudentPage() {
  return (
    <main className="space-y-6">
      <section className="rounded-2xl border border-[#ddd4aa]/70 bg-[#fbfaf4] p-6 shadow-sm">
        <p className="text-sm font-medium text-[#68654f]">Student Portal</p>

        <h1 className="mt-2 text-2xl font-semibold text-[#2f3303]">
          My Dashboard
        </h1>

        <p className="mt-2 text-sm text-[#68654f]">
          View your enrolled classes, attendance, materials, assignments,
          grades, and report cards.
        </p>
      </section>
    </main>
  );
}
