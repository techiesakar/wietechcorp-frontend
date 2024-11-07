import React from "react";
import MainLogo from "@/public/logos/main-logo.svg";
import DarkLogo from "@/public/logos/logo-white.png";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
  type: "dark" | "light";
};

const SiteLogo = ({ type, className }: Props) => {
  return (
    <Link href={"/"}>
      <Image
        alt="Logo"
        src={type === "dark" ? DarkLogo : MainLogo}
        width={100}
        height={100}
        className={cn("md:h-14 h-10 w-auto", className)}
      />
    </Link>
  );
};

export default SiteLogo;
