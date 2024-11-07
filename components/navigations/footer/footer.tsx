import React from "react";
import { BottomFooter } from "./footer-bottom";
import { MainFooter } from "./main-footer";
import FooterShape from "@/public/images/shapes/footer-shape.svg";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-[#0E191E] mt-auto w-full  relative">
      <Image
        src={FooterShape}
        alt="footer"
        className="absolute bottom-0 right-0 opacity-5 z-0"
      />

      <MainFooter />
      <BottomFooter />
    </footer>
  );
};

export default Footer;
