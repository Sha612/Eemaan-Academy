'use client';

type LoginAccessToggleProps = {
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
};

export function LoginAccessToggle({
  checked,
  onCheckedChange,
}: LoginAccessToggleProps) {
  return (
    <label className="relative inline-flex cursor-pointer items-center">
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onCheckedChange(e.target.checked)}
        className="peer sr-only"
      />

      <div className="h-8 w-16 rounded-full border border-[#ddd4aa] bg-[#d8d0aa] shadow-inner transition-all duration-300 peer-checked:bg-[#8a7a2f] peer-focus:ring-4 peer-focus:ring-[#c7ba74]/40" />

      <span className="absolute left-1 top-1 h-6 w-6 rounded-full bg-white shadow-md transition-all duration-300 peer-checked:translate-x-8" />
    </label>
  );
}
