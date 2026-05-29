import { Role } from '@/modules/auth/roles';

type TeacherFieldsProps = {
  role: Role.TEACHER | Role.HEAD_TEACHER;
};

export function TeacherFields({ role }: TeacherFieldsProps) {
  return (
    <section className="rounded-2xl border border-[#eee7c8] bg-[#fbfaf4] p-4">
      <h2 className="mb-4 font-semibold text-[#2f3303]">
        {role === Role.HEAD_TEACHER
          ? 'Head Teacher Profile'
          : 'Teacher Profile'}
      </h2>

      <div className="space-y-2">
        <label className="text-sm font-medium text-[#2f3303]">
          Specialization
        </label>
        <input
          name="specialization"
          className="w-full rounded-xl border border-[#ddd4aa] bg-white px-4 py-3 text-sm outline-none transition focus:border-[#8a7a2f] focus:ring-2 focus:ring-[#8a7a2f]/20"
          placeholder="Specialization e.g. Hifz"
        />
      </div>
    </section>
  );
}
