"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

type Props = {
  title: string;
  slug?: string;
};

const NavItem = ({ title, slug }: Props) => {
  const param = useSearchParams();
  return (
    <Link
      key={slug}
      href={slug ? `/blogs?category=${slug}` : "/blogs"}
      className={cn(
        "px-3 py-2  wie__transition__300 hover:text-primary shrink-0",

        param.get("category") === slug
          ? "font-semibold text-primary"
          : !slug && "font-semibold"
      )}
    >
      {title}
    </Link>
  );
};

export default NavItem;
