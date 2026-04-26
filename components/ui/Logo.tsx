import Image from "next/image";

interface LogoProps {
  height?: number;
  className?: string;
}

export default function Logo({ height = 52, className = "" }: LogoProps) {
  return (
    <Image
      src="/logo.svg"
      alt="MathsStudios logo"
      width={height * 2}
      height={height}
      style={{ height, width: "auto" }}
      className={className}
      priority
    />
  );
}
