import React from "react";
import { DesktopNavigation } from "./desktop-navigation";
import SiteLogo from "@/components/logo";
import HeaderCTA from "./header-cta";
import HeaderWrapper from "./header-wrapper";
import { MobileSidebar } from "./mobile-sidebar/mobile-sidebar";

const Header = () => {
  return (
    <HeaderWrapper>
      <div className="container  flex lg:h-24 h-20 justify-between items-center">
        <div className="flex items-center gap-x-20">
          <SiteLogo type="light" />
          <div className="md:block hidden">
            <DesktopNavigation />
          </div>
        </div>
        <div className="flex items-center gap-x-4">
          <HeaderCTA />
          <MobileSidebar />
        </div>
      </div>
    </HeaderWrapper>
  );
};

export default Header;
