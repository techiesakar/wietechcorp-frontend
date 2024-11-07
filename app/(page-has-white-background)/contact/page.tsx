import ContactCardWrapper from "@/components/page-components/contact/contact-card-wrapper";
import ContactForm from "@/components/page-components/contact/contact-form";
import { MapSection } from "@/components/page-components/contact/map-section";
import PageWrapperWithBanner from "@/components/page-components/page-wrapper-with-banner";
import { siteMetaData } from "@/lib/site";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: siteMetaData.contact.title,
  description: siteMetaData.contact.description,
};
const ContactUsPage = () => {
  return (
    <PageWrapperWithBanner pageTitle="contact">
      <section className="max-w-6xl mx-auto lg:py-20 px-4 md:py-14 py-10 bg-white flex lg:flex-row flex-col flex-wrap gap-8">
        <ContactCardWrapper />
        <div className="flex-1">
          <ContactForm />
        </div>
      </section>
      <section className="lg:pt-20">
        <MapSection />
      </section>
    </PageWrapperWithBanner>
  );
};

export default ContactUsPage;
