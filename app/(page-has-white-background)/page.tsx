import AboutUsSection from "@/components/page-components/home/about-us-section";
import HomeHeroSection from "@/components/page-components/home/home-hero";
import OurBlogsSection from "@/components/page-components/home/our-blogs/our-blogs-section";
import OurPartners from "@/components/page-components/home/our-partners/our-partners";
import TestimonialSection from "@/components/page-components/home/testimonials/testimonial-section";
import WhyUsSection from "@/components/page-components/home/why-us/why-us-section";
import FAQSection from "@/components/sections/faq-section";

export default async function HomePage() {
  return (
    <main className="bg-white min-h-screen">
      <HomeHeroSection />
      <AboutUsSection />
      {/* Our Partners Section */}
      <OurPartners />
      <TestimonialSection />
      <WhyUsSection />
      <OurBlogsSection />
      <FAQSection />
    </main>
  );
}
