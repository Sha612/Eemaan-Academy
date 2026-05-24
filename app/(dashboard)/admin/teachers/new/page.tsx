import Link from 'next/link';
import { ArrowLeft, UserPlus } from 'lucide-react';
import TeacherForm from '@/components/admin/forms/TeacherForm';

export default function NewTeacherPage() {
  return (
    <main className="min-h-screen bg-[#f7f4e8] px-6 py-6">
      <div className="mx-auto max-w-4xl space-y-6">
        <div className="flex items-center gap-3">
          <Link
            href="/admin/teachers"
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[#ddd4aa] bg-[#fbfaf4] text-[#4b5205] shadow-sm transition hover:bg-[#f1ead0]"
          >
            <ArrowLeft size={18} />
          </Link>

          <div>
            <h1 className="text-2xl font-semibold tracking-tight text-[#2f3303]">
              Add Teacher
            </h1>
            <p className="text-sm text-[#68654f]">
              Create a teacher profile, with optional login access.
            </p>
          </div>
        </div>

        <section className="rounded-2xl border border-[#ddd4aa]/70 bg-[#fbfaf4] p-6 shadow-sm">
          <div className="mb-6 flex items-start gap-4 rounded-2xl border border-[#ddd4aa]/70 bg-white p-4">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#f1ead0] text-[#4b5205]">
              <UserPlus size={22} />
            </div>

            <div>
              <h2 className="font-semibold text-[#2f3303]">
                Teacher Information
              </h2>
              <p className="mt-1 text-sm leading-6 text-[#68654f]">
                Add teacher details now. You can also create login access for
                the teacher from this form.
              </p>
            </div>
          </div>

          <TeacherForm />
        </section>
      </div>
    </main>
  );
}
