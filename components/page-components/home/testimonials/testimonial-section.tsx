"use client";
import React, { useRef } from "react";
import FakeLogo from "@/public/logos/fake-logo.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import People from "@/public/images/people/user-1.jpg";
import { FaQuoteRight } from "react-icons/fa";
import { settings } from "./settings";

const TestimonialSection = () => {
  const customSlider = useRef<Slider>(null);
  return (
    <section className="py-10">
      <div className="slider-container max-w-[884px] px-4   mx-auto w-full">
        <Slider {...settings} ref={customSlider}>
          <div>
            <div className="space-y-4 flex justify-between gap-x-8 lg:pb-10 pb:6 flex-wrap">
              <div className="md:w-[200px] rounded shrink-0 w-full">
                <Image
                  src={People}
                  alt="about us"
                  width={250}
                  height={250}
                  className="rounded-br-[40%] rounded-md md:max-w-[190px] sm:max-w-[180px] max-w-[120px]"
                />
              </div>
              <div className="flex-1 space-y-5">
                <FaQuoteRight className="text-3xl text-primary" />

                <div className="lg:text-lg font-poppins leading-relaxed">
                  WieTech provided us with exceptional service and tailored
                  solutions that met all our requirements. Their dedication and
                  technical expertise helped bring our vision to life.
                </div>
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div>
                    <div className="text-primary lg:text-xl font-bold">
                      Sujan Singh
                    </div>
                    <p className="text-sm">Co-Founder/VP, Engineering</p>
                  </div>
                  <Image
                    src={FakeLogo}
                    alt="about us"
                    width={100}
                    height={100}
                  />
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default TestimonialSection;
