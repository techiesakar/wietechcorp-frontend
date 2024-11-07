import CareerHeroSection from "@/components/page-components/careers/career-hero";
import CurrentOpeningSections from "@/components/page-components/careers/current-openings-section";
import { siteMetaData } from "@/lib/site";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: siteMetaData.careers.title,
  description: siteMetaData.careers.description,
};

const CareersPage = () => {
  return (
    <>
      <CareerHeroSection />
      <CurrentOpeningSections />
    </>
  );
};

export default CareersPage;
