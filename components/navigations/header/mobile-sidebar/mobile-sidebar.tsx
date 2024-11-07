"use client";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { IoIosCloseCircleOutline } from "react-icons/io";
import { mobileSidebarData } from "../sidebar-data";
import { cn } from "@/lib/utils";
import { SidebarSocial } from "./sidebar-social";
import { site } from "@/lib/site";
import { SidebarContactInfo } from "./sidebar-contact-info";
import SiteLogo from "@/components/logo";
import { DialogTitle } from "@/components/ui/dialog";
import { AlignJustify } from "lucide-react";

export const MobileSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const date = new Date();

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <button className="lg:hidden rounded-full shadow-none border-none  p-0  text-primary transition-colors  duration-200 ease-in cursor-pointer">
          <AlignJustify className="size-6 text-xl" />
        </button>
      </SheetTrigger>
      <SheetContent
        side={"left"}
        className="z-50 p-0 bg-white shadow-lg border border-primary/10"
      >
        <SheetHeader className="border-b border-primary/20 ">
          <div className="container mx-auto py-4 sm:h-[84px] h-[70px] flex items-center justify-between">
            <SiteLogo type="light" />
            <DialogTitle>
              <span className="text-primary/80 sr-only">{site.title}</span>
            </DialogTitle>

            <IoIosCloseCircleOutline
              className="size-6 cursor-pointer text-primary"
              onClick={() => setIsOpen(false)}
            />
          </div>
        </SheetHeader>
        <div className="flex flex-col p-4">
          {mobileSidebarData.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "px-1 py-3  text-sm text-black hover:text-primary transition-all duration-300 ease-in border-b border-gray-100",
                pathname === item.href && "text-primary"
              )}
            >
              {item.name}
            </Link>
          ))}

          <SidebarContactInfo
            addressLine1={site.address.addressLine1}
            streetAddress={site.address.streetAddress}
            city={site.address.city}
            email={site.email}
            phone={site.phone}
          />

          <SidebarSocial socialProfiles={site.socialProfiles} />

          <p className="px-1 py-4  text-sm text-black">
            &copy; {date.getFullYear()} {site.title}. All rights reserved.
          </p>
        </div>
      </SheetContent>
    </Sheet>
  );
};
