import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

type Props = {
  title: string;
  slug: string;
  tagline: string;
  mainPara: string;
  secondPara: string;
  imageUrl: string;
  isOdd: boolean;
};

const ServiceCard = ({
  title,
  tagline,
  mainPara,
  secondPara,
  imageUrl,
  slug,
  isOdd,
}: Props) => {
  return (
    <div
      id={slug}
      className={cn(
        "lg:py-20 md:py-16 py-12 shadow-sm",
        !isOdd && "bg-lightGray "
      )}
    >
      <div className="container grid lg:grid-cols-2 grid-cols-1 lg:gap-20 gap-8">
        <div
          className={cn(
            "lg:order-1 order-2 flex flex-col lg:gap-y-4 gap-y-3  justify-center",
            isOdd && "lg:order-2"
          )}
        >
          <p className="text-primary uppercase font-semibold">{title}</p>
          <h2 className="lg:text-3xl text-xl font-medium">{tagline}</h2>
          <p className="lg:text-lg">{mainPara}</p>
          <p className="lg:text-base text-sm">{secondPara}</p>
        </div>
        <div className={cn("lg:order-2 order-1", isOdd && "lg:order-1")}>
          <Image
            alt="service image"
            src={imageUrl}
            className={cn(
              "h-full w-full object-cover rounded-xl max-h-[320px]",
              isOdd
                ? "lg:rounded-bl-[35%] lg:pl-20"
                : "lg:rounded-tr-[35%] lg:pr-20"
            )}
            width={300}
            height={320}
            quality={100}
          />
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
