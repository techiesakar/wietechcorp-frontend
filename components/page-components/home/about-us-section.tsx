import Image from "next/image";
import React from "react";
import MaleFemale from "@/public/assets/male-female.png";
import CustomButton from "@/components/custom-button";

const AboutUsSection = () => {
  return (
    <section className="py-10 bg-[#F8F8F8]">
      <div className="max-w-screen-lg px-2 gap-6 mx-auto grid md:grid-cols-2 grid-cols-1">
        <div className="left mx-auto">
          <Image
            src={MaleFemale}
            alt="about us"
            width={400}
            height={400}
            className="md:w-[90%] md:max-h-[420px] max-h-[320px] object-contain max-w-[380px]"
          />
        </div>
        <div className="right flex flex-col  justify-center">
          <div className="wie__text__highlight ">About Us</div>
          <h2 className="lg:text-4xl md:text-3xl sm:text-2xl text-xl capitalize font-bold tracking-tight leading-tight">
            We'll Ensure you always get the best guidance
          </h2>
          <div className="space-y-4 my-4">
            <p className="text-sm leading-6">
              At WieTech, we’re committed to delivering high-quality IT
              solutions that help businesses grow and succeed. Our team of
              experienced professionals specializes in web development, ERP
              systems, mobile applications, SEO, healthcare technology, and
              more.
            </p>
            <p className="text-sm leading-6">
              We understand that each project is unique and provide personalized
              solutions tailored to your needs.
            </p>
          </div>

          <CustomButton
            label="Learn More"
            path="/about"
            size={"xl"}
            className="w-fit"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
