import React from "react";
import ContextImage from "@/public/images/contextual/why-us.svg";
import Image from "next/image";
import { WhyUsAccordion } from "./why-us-accordion";

const WhyUsSection = () => {
  return (
    <section>
      <div className="container py-10 grid md:grid-cols-2 grid-cols-1">
        <div className="left">
          <Image
            src={ContextImage}
            alt="about us"
            width={600}
            height={600}
            className="w-[80%] object-contain mx-auto"
          />
        </div>
        <div className="right flex flex-col  justify-center">
          <div className="wie__text__highlight">Why Us</div>
          <h2 className="lg:text-4xl md:text-3xl sm:text-2xl text-xl  capitalize font-bold mb-4  tracking-tight leading-tight">
            We Provide Flexible <br />{" "}
            <span className="text-primary">IT Services</span>
          </h2>

          <p className="mb-4 leading-6 ">
            We specialize in delivering adaptable and innovative IT solutions
            tailored to meet the unique needs of your business.
          </p>

          <WhyUsAccordion />
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
