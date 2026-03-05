export function SectionHeading({
  title,
  subtitle,
  className = "",
}: {
  title: string;
  subtitle?: string;
  className?: string;
}) {
  return (
    <div className={`mb-12 ${className}`}>
      <h2 className="text-3xl font-bold text-gray-100 sm:text-4xl">{title}</h2>
      {subtitle && (
        <p className="mt-3 text-lg text-gray-400">{subtitle}</p>
      )}
    </div>
  );
}
