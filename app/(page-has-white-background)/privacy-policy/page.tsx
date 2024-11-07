import PageWrapperWithBanner from "@/components/page-components/page-wrapper-with-banner";
import { siteMetaData } from "@/lib/site";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: siteMetaData.privacy.title,
  description: siteMetaData.privacy.description,
};
const PrivacyPolicyPage = () => {
  return (
    <PageWrapperWithBanner pageTitle="Privacy Policy">
      <section className="max-w-6xl mx-auto lg:py-20 px-4 md:py-14 py-10 bg-white flex lg:flex-row flex-col flex-wrap gap-8"></section>
      <section className="lg:pt-20"></section>
    </PageWrapperWithBanner>
  );
};

export default PrivacyPolicyPage;
