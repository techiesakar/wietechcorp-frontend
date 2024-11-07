import ServicesArticle from "@/components/page-components/services/services-article";
import ServicesHeroSection from "@/components/page-components/services/services-hero";
import { siteMetaData } from "@/lib/site";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: siteMetaData.services.title,
  description: siteMetaData.contact.description,
};
const ServicesPage = () => {
  return (
    <>
      <ServicesHeroSection />
      <ServicesArticle />
    </>
  );
};

export default ServicesPage;
