export function Card({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-xl border border-gray-700 bg-gray-900 p-6 transition-colors hover:border-gray-600 ${className}`}
    >
      {children}
    </div>
  );
}
