type FormSectionProps = {
  title: string;
  description?: string;
  children: React.ReactNode;
};

export function FormSection({
  title,
  description,
  children,
}: FormSectionProps) {
  return (
    <section className="rounded-2xl border border-[#ddd4aa]/70 bg-white p-5">
      <div className="mb-5">
        <h2 className="font-semibold text-[#2f3303]">{title}</h2>

        {description ? (
          <p className="mt-1 text-sm text-[#68654f]">{description}</p>
        ) : null}
      </div>

      {children}
    </section>
  );
}
