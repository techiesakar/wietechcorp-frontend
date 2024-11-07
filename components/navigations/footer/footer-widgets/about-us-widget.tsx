import React from "react";
import { site } from "@/lib/site";
import SiteLogo from "@/components/logo";

export const AboutUsWidget = () => {
  return (
    <div className="space-y-6">
      <SiteLogo type="dark" />
      <p className="font-outfit font-light text-white mb-6">
        {site.description}
      </p>
    </div>
  );
};
