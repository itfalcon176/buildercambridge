import React from "react";
import Link from "next/link";
import Image from "next/image";

interface LogoProps {
  variant?: "dark" | "light";
  className?: string;
  size?: "sm" | "md" | "lg";
}

export const Logo: React.FC<LogoProps> = ({
  variant = "dark",
  className = "",
  size = "md",
}) => {
  const isLight = variant === "light";
  const logoSrc = isLight ? "/logo/logo side white.png" : "/logo/logo side  blue.png";

  const heightClasses = {
    sm: "h-9 w-auto",
    md: "h-12 w-auto",
    lg: "h-16 w-auto",
  }[size];

  return (
    <Link
      href="/"
      className={`inline-flex items-center group transition-transform duration-200 hover:scale-[1.02] ${className}`}
      aria-label="Builder Cambridge Home"
    >
      <div className="relative flex items-center">
        <Image
          src={logoSrc}
          alt="Builder Cambridge"
          width={240}
          height={60}
          priority
          className={`${heightClasses} object-contain transition-opacity duration-200`}
        />
      </div>
    </Link>
  );
};
