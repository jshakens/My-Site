export function Container({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto max-w-6xl px-6 sm:px-8 ${className}`}>
      {children}
    </div>
  );
}
