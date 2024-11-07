import { MoveRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const CareerHeroContent = () => {
  return (
    <div className="middle flex flex-1 flex-col space-y-7 items-center justify-center">
      <h1 className="lg:text-5xl md:text-4xl text-3xl text-center text-wrap">
        Join the Team That’s Shaping the Future with Talent and Innovation
      </h1>
      <p className="text-center text-wrap text-gray-600">
        We’re looking for driven individuals who bring energy, adaptability, and
        a thirst for growth.
      </p>
      <div className="flex items-center gap-4">
        <div className="w-fit px-4 py-2 border bg-gray-100 rounded-3xl">
          👋 We're hiring!
        </div>
        <Link
          href={"#currentOpenings"}
          className="text-primary group inline-flex gap-x-3 hover:text-dark font-medium wie__transition__300"
        >
          View Open Positions
          <MoveRight className="group-hover:translate-x-[4px] wie__transition__300" />
        </Link>
      </div>
    </div>
  );
};

export default CareerHeroContent;
