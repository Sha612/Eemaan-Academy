import { Role } from '@/modules/auth/roles';

type TeacherFieldsProps = {
  role: Role.TEACHER | Role.HEAD_TEACHER;
};

export function TeacherFields({ role }: TeacherFieldsProps) {
  return (
    <section className="rounded-2xl border border-[#eee7c8] bg-[#fbfaf4] p-4">
      <h2 className="font-semibold text-[#2f3303]">
        {role === Role.HEAD_TEACHER
          ? 'Head Teacher Profile'
          : 'Teacher Profile'}
      </h2>

      <div className="mt-4 grid gap-4 md:grid-cols-2">
        <input
          name="specialization"
          className="rounded-xl border border-[#ddd4aa] px-4 py-2"
          placeholder="Specialization e.g. Hifz"
        />

        <select
          name="classId"
          defaultValue=""
          className="rounded-xl border border-[#ddd4aa] px-4 py-2"
        >
          <option value="">Assign class later</option>
          <option value="1">Hifz 1</option>
          <option value="2">Fiqh 1</option>
          <option value="3">Hadeeth 1</option>
        </select>
      </div>
    </section>
  );
}
