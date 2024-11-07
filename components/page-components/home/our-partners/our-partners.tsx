"use client";
import Image from "next/image";
import Slider from "react-slick";

const settings = {
  dots: false,
  arrows: false,
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  swipeToSlide: true,
  adaptiveHeight: true,
  autoplaySpeed: 5000,
  centerPadding: "12px",

  responsive: [
    {
      breakpoint: 1240,
      settings: {
        arrows: false,
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 1040,
      settings: {
        arrows: false,
        slidesToShow: 3,
      },
    },
  ],
};

const OurPartners = () => {
  return (
    <section className="lg:py-20 py-10">
      <div className="container slider-container">
        <Slider {...settings}>
          {Array.from({ length: 5 }, (_, i) => (
            <div key={i}>
              <div className="relative lg:h-24 md:h-20 h-16">
                <Image
                  src={`/images/partners/partner-${i + 1}.svg`}
                  alt="about us"
                  fill
                  className="cursor-pointer focus:outline-none contrast-50 focus-visible:ring-0  wie__transition__200 hover:contrast-125"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default OurPartners;
