import React from "react";
import BannerImage from "@/public/images/banners/page-banner.png";
import Image from "next/image";
import { ChevronRight, Home } from "lucide-react";
import Link from "next/link";
type Props = {
  children: React.ReactNode;
  pageTitle: string;
};

const PageWrapperWithBanner = ({ children, pageTitle }: Props) => {
  return (
    <>
      <section className="lg:min-h-32 min-h-28 xl:py-32 lg:py-28 md:py-24 py-14 relative">
        <Image
          alt="banner image"
          src={BannerImage}
          className="h-full w-full absolute inset-0 -z-10 object-cover"
        />
        <div className="w-full h-full absolute top-0 left-0 bg-gradient-to-tr from-dark/70 to-dark/30 -z-10"></div>

        <div className="container">
          <h1 className="text-3xl text-white font-extrabold mb-4 capitalize">
            {pageTitle}
          </h1>
          <div className="flex items-center gap-x-3 text-white">
            <Home className="size-5" />
            <Link href={"/"} className="font-light">
              Home
            </Link>
            <ChevronRight className="text-primary" />

            <span className="capitalize">{pageTitle}</span>
          </div>
        </div>
      </section>
      <div>{children}</div>
    </>
  );
};

export default PageWrapperWithBanner;
