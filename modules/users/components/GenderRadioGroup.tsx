//@/modules/users/components/GenderRadioGroup.tsx

type GenderRadioGroupProps = {
  name?: string;
};
enum Gender {
  MALE = "male",
  FEMALE = "female",
}
export function GenderRadioGroup({ name = 'gender' }: GenderRadioGroupProps) {

  return (
    <div className="space-y-2">
      <p className="text-sm font-medium text-[#2f3303]">Gender</p>
      <div className="flex items-center gap-6">
        <label className="flex items-center gap-2 text-sm text-[#2f3303]">
          <input
            type="radio"
            name={name}
            value={Gender.MALE}
            className="h-4 w-4 accent-[#8a7a2f]"
          />
          Male
        </label>

        <label className="flex items-center gap-2 text-sm text-[#2f3303]">
          <input
            type="radio"
            name={name}
            value={Gender.FEMALE}
            className="h-4 w-4 accent-[#8a7a2f]"
          />
          Female
        </label>
      </div>
    </div>
  );
}
