import Link from "next/link";

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "outline";
  className?: string;
  download?: boolean;
  onClick?: () => void;
};

export function Button({
  children,
  href,
  variant = "primary",
  className = "",
  download,
  onClick,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-gray-950";

  const variants = {
    primary: "bg-cyan-500 text-gray-950 hover:bg-cyan-400",
    outline:
      "border border-gray-700 text-gray-100 hover:border-cyan-500 hover:text-cyan-400",
  };

  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    if (download || href.startsWith("http")) {
      return (
        <a href={href} className={classes} download={download || undefined} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noopener noreferrer" : undefined}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
