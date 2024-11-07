import Link from "next/link";
import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
  FaXTwitter,
} from "react-icons/fa6";

type Props = {
  socialProfiles?: {
    platform: string;
    url: string;
  }[];
};

export const SidebarSocial = ({ socialProfiles }: Props) => {
  return (
    <div>
      <h2 className="text-sm font-bold my-2 px-1">Follow Us</h2>
      <div className="flex gap-3 items-center">
        {socialProfiles?.map((profile, index) => {
          return (
            <React.Fragment key={index}>
              {getSocialIcon(profile.platform, profile.url)}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

const getSocialIcon = (platform: string, url: string) => {
  switch (platform) {
    case "facebook":
      return (
        <Link
          target="_black"
          href={url || "/"}
          className="p-3 bg-slate-200 rounded-full"
        >
          <FaFacebookF className="size-3" />
        </Link>
      );
    case "whatsapp":
      return (
        <Link
          target="_black"
          href={url || "/"}
          className="p-3 bg-slate-200 rounded-full"
        >
          <FaWhatsapp className="size-3" />
        </Link>
      );
    case "instagram":
      return (
        <Link
          target="_black"
          href={url || "/"}
          className="p-3 bg-slate-200 rounded-full"
        >
          <FaInstagram className="size-3" />
        </Link>
      );

    case "twitter":
      return (
        <Link
          target="_black"
          href={url || "/"}
          className="p-3 bg-slate-200 rounded-full"
        >
          <FaXTwitter className="size-3" />
        </Link>
      );

    case "x":
      return (
        <Link
          target="_black"
          href={url || "/"}
          className="p-3 bg-slate-200 rounded-full"
        >
          <FaXTwitter className="size-3" />
        </Link>
      );

    case "linkedin":
      return (
        <Link
          target="_black"
          href={url || "/"}
          className="p-3 bg-slate-200 rounded-full"
        >
          <FaLinkedin className="size-3" />
        </Link>
      );
    default:
      break;
  }
};
