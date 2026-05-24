type FormFieldProps = {
  label: string;
  name: string;
  id?: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  className?: string;
};

export function FormField({
  label,
  name,
  id = name,
  type = 'text',
  placeholder,
  required = false,
  className = '',
}: FormFieldProps) {
  return (
    <div className={`space-y-2 ${className}`}>
      <label htmlFor={id} className="text-sm font-medium text-[#2f3303]">
        {label}
      </label>

      <input
        id={id}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="h-11 w-full rounded-xl border border-[#ddd4aa] bg-white px-4 text-sm outline-none focus:border-[#8a7a2f] focus:ring-2 focus:ring-[#ddd4aa]"
      />
    </div>
  );
}
