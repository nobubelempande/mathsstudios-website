import Image from "next/image";
import { asset } from "@/lib/assetPath";

interface LogoProps {
  height?: number;
  className?: string;
}

export default function Logo({ height = 52, className = "" }: LogoProps) {
  return (
    <Image
      src={asset("/logo.svg")}
      alt="MathsStudios logo"
      width={height * 2}
      height={height}
      style={{ height, width: "auto" }}
      className={className}
      priority
    />
  );
}
