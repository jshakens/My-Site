export function Badge({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`inline-block rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-400 ${className}`}
    >
      {children}
    </span>
  );
}
