import Link from "next/link";
import { ReactNode } from "react";

type Variant = "primary" | "secondary" | "outline" | "ghost";

interface ButtonProps {
  href: string;
  variant?: Variant;
  children: ReactNode;
  className?: string;
  external?: boolean;
}

const styles: Record<Variant, string> = {
  primary: `
    inline-flex items-center gap-2 font-bold text-[15px] px-8 py-[15px] rounded-md
    text-white no-underline transition-all duration-200
    bg-[var(--red)] hover:bg-[var(--red-light)] hover:-translate-y-0.5
    shadow-[0_4px_16px_rgba(196,30,30,0.25)]
  `,
  secondary: `
    inline-flex items-center gap-2 font-bold text-[15px] px-8 py-[15px] rounded-md
    text-white no-underline transition-all duration-200
    bg-[var(--green)] hover:bg-[var(--green-mid)] hover:-translate-y-0.5
    shadow-[0_4px_16px_rgba(26,107,40,0.2)]
  `,
  outline: `
    inline-flex items-center gap-2 font-semibold text-[15px] px-7 py-[15px] rounded-md
    text-[#ede9e3] no-underline transition-all duration-200
    border border-white/70 bg-transparent hover:bg-white/10 hover:border-white/60
  `,
  ghost: `
    inline-flex items-center gap-2 font-semibold text-[14px] px-6 py-3 rounded-md
    text-white no-underline transition-all duration-200
    bg-white/10 border border-white/20 hover:bg-white/20
  `,
};

export default function Button({
  href,
  variant = "primary",
  children,
  className = "",
  external = false,
}: ButtonProps) {
  const cls = `${styles[variant]} ${className}`.trim().replace(/\s+/g, " ");

  if (external) {
    return (
      <a href={href} className={cls} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}
