import { site } from "@/lib/site";
import Link from "next/link";
import React from "react";

export const BottomFooter = () => {
  return (
    <div className="border-t border-gray-800 py-5 md:text-base text-sm relative z-10">
      <div className="container mx-auto  flex md:flex-row flex-col gap-4 md:items-center justify-between">
        <p className="text-gray-400 text-sm">
          <Link
            href={"/"}
            className="text-primary hover:text-white text-sm mr-1"
          >
            {site.title}
          </Link>
          <span> © {new Date().getFullYear()}. All Rights Reserved.</span>{" "}
        </p>
        <nav className="flex items-center gap-6">
          <Link
            href={"/terms-and-conditions"}
            className="text-gray-400 hover:text-white text-sm"
          >
            Terms & Conditions
          </Link>
          <Link
            href={"/privacy-policy"}
            className="text-gray-400 hover:text-white text-sm"
          >
            Privacy Policy
          </Link>
          <Link
            href={"/contact"}
            className="text-gray-400 hover:text-white text-sm"
          >
            Contact Us
          </Link>
        </nav>
      </div>
    </div>
  );
};
