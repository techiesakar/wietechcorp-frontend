import { AboutUsWidget } from "./footer-widgets/about-us-widget";
import { UsefulLinksWidget } from "./footer-widgets/useful-links-widget";

import { ContactWidget } from "./footer-widgets/contact-widget";
import { FooterNewsLetterWidget } from "./footer-widgets/footer-newsletter-widget";

export const MainFooter = () => {
  return (
    <div className="pt-14 container mx-auto relative z-10">
      <div className="grid lg:grid-cols-4 pb-14 pt-6 md:grid-cols-2 grid-cols-1 lg:gap-x-16 md:gap-x-10 gap-y-8 lg:gap-y-0">
        <AboutUsWidget />
        <UsefulLinksWidget />
        <ContactWidget />
        <FooterNewsLetterWidget />
      </div>
    </div>
  );
};
