import React from "react";
import HomeHeroImage from "@/public/assets/home-hero.png";
import Image from "next/image";
import CustomButton from "@/components/custom-button";

const HomeHeroSection = () => {
  return (
    <section className="relative bg-gradient-to-r from-primary/10 to-secondary">
      <div className="container space-y-10 py-10 flex items-center justify-between flex-wrap">
        <div className="lg:pr-10 md:w-1/2">
          <div className="wie__text__highlight">All in all IT Solution</div>
          <h1 className="lg:text-5xl md:text-4xl sm:text-3xl text-2xl font-bold tracking-tight leading-tight">
            Find The Best Solution For Your Needs <br />
          </h1>
          <p className="my-4 text-sm leading-6">
            We provide top-notch IT solutions to bring your ideas to life. From
            website building to ERP systems, app development, SEO, and
            healthcare technology – we’ve got it all covered.
          </p>
          <CustomButton
            label="Take Our Services"
            path="/services"
            size={"xl"}
            className=""
          />
        </div>

        <div className="flex-1">
          <Image
            src={HomeHeroImage}
            alt="Home Hero"
            height={600}
            width={600}
            className="md:max-h-[420px] max-h-[320px] object-contain md:w-[90%] w-full md:ml-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default HomeHeroSection;
