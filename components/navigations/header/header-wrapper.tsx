"use client";

import { cn } from "@/lib/utils";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { useEffect, useState } from "react";

type Props = {
  children: React.ReactNode;
};

const HeaderWrapper = ({ children }: Props) => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0   bg-[#FAFCFE99] z-50 wie__transition__300",
        scrollPosition > 70 && "bg-white"
      )}
    >
      {children}
    </header>
  );
};

export default HeaderWrapper;
