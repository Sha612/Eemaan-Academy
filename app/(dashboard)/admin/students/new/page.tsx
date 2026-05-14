export default function AddStudentPage() {
  return (
    <main className="space-y-6 p-6">
      <section className="rounded-2xl border border-[#ddd4aa]/70 bg-[#fbfaf4] p-6 shadow-sm">
        <h1 className="text-2xl font-semibold tracking-tight text-[#2f3303]">
          Add Student
        </h1>
        <p className="mt-1 text-sm text-[#6f6a4f]">
          Register a new student and assign them to a class.
        </p>
      </section>

      <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
        <form className="grid gap-5 md:grid-cols-2">
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">
              First Name
            </label>
            <input
              type="text"
              placeholder="Enter first name"
              className="w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm outline-none transition focus:border-[#4b5205] focus:ring-2 focus:ring-[#4b5205]/20"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">
              Last Name
            </label>
            <input
              type="text"
              placeholder="Enter last name"
              className="w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm outline-none transition focus:border-[#4b5205] focus:ring-2 focus:ring-[#4b5205]/20"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">
              Date of Birth
            </label>
            <input
              type="date"
              className="w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm outline-none transition focus:border-[#4b5205] focus:ring-2 focus:ring-[#4b5205]/20"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">
              Gender
            </label>
            <select className="w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm outline-none transition focus:border-[#4b5205] focus:ring-2 focus:ring-[#4b5205]/20">
              <option value="">Select gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">
              Class
            </label>
            <select className="w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm outline-none transition focus:border-[#4b5205] focus:ring-2 focus:ring-[#4b5205]/20">
              <option value="">Select class</option>
              <option value="class-1">Class 1</option>
              <option value="class-2">Class 2</option>
              <option value="class-3">Class 3</option>
              <option value="class-4">Class 4</option>
              <option value="class-5">Class 5</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">
              Parent / Guardian Name
            </label>
            <input
              type="text"
              placeholder="Enter guardian name"
              className="w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm outline-none transition focus:border-[#4b5205] focus:ring-2 focus:ring-[#4b5205]/20"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">
              Parent Phone
            </label>
            <input
              type="tel"
              placeholder="Enter phone number"
              className="w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm outline-none transition focus:border-[#4b5205] focus:ring-2 focus:ring-[#4b5205]/20"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">
              Parent Email
            </label>
            <input
              type="email"
              placeholder="Enter parent email"
              className="w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm outline-none transition focus:border-[#4b5205] focus:ring-2 focus:ring-[#4b5205]/20"
            />
          </div>

          <div className="md:col-span-2 space-y-2">
            <label className="text-sm font-medium text-gray-700">
              Address
            </label>
            <textarea
              placeholder="Enter address"
              rows={4}
              className="w-full resize-none rounded-xl border border-gray-200 px-4 py-2.5 text-sm outline-none transition focus:border-[#4b5205] focus:ring-2 focus:ring-[#4b5205]/20"
            />
          </div>

          <div className="flex gap-3 md:col-span-2">
            <button
              type="submit"
              className="rounded-xl bg-[#4b5205] px-5 py-2.5 text-sm font-medium text-white transition hover:bg-[#2f3303]"
            >
              Save Student
            </button>

            <button
              type="button"
              className="rounded-xl border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-700 transition hover:bg-gray-50"
            >
              Cancel
            </button>
          </div>
        </form>
      </section>
    </main>
  )
}