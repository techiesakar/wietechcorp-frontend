import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

type Props = {
  title: string;
  icon: LucideIcon;
  items: string[];
  type: "phone" | "email" | "address";
  className?: string;
};

const ContactCard = ({ title, icon, items, className, type }: Props) => {
  const Icon = icon;
  return (
    <div
      className={cn(
        "p-6 rounded-xl bg-lightGray shadow-sm flex items-center  gap-x-5 group wie__transition__300",
        className
      )}
    >
      <div className="size-14 rounded-full bg-primary/10 group-hover:bg-primary wie__transition__300 p-4 flex items-center justify-center">
        <Icon className="text-primary group-hover:text-white wie__transition__300" />
      </div>
      <div className="flex-1">
        <h3 className="text-sm w-full">{title}</h3>
        <Separator className="my-2 w-full" />
        <ul>
          {items.map((item, index) => (
            <li key={index} className="text-sm  font-medium py-1">
              {type === "phone" || type === "email" ? (
                <Link
                  href={`${type === "email" ? "mailto:" : "tel:"}${item}`}
                  className="hover:text-primary wie__transition__200 text-sm  font-medium"
                >
                  {item}
                </Link>
              ) : (
                item
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ContactCard;
