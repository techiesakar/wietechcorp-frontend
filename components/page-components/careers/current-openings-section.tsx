import React from "react";
import { vacancies } from "./vacancies";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { GoZap } from "react-icons/go";
import { Button } from "@/components/ui/button";

const CurrentOpeningSections = () => {
  return (
    <section className="lg:py-20 py-10" id="currentOpenings">
      <div className="container">
        <h2 className="text-4xl  capitalize font-bold mb-4 tracking-tight text-center leading-tight">
          <span className="text-primary ">Open</span> Positions
        </h2>
        <p className="text-gray-600 text-center">
          Ready to join our team? Submit your application—we're excited to
          connect with you!
        </p>
        <div className="mt-10 space-y-5">
          {vacancies.map((vacancy) => (
            <div
              key={vacancy.title}
              className="flex  gap-x-5 p-5 bg-[#F7F7FF] rounded-xl"
            >
              <div className="flex items-center justify-between gap-3 flex-1">
                <div className="left space-y-4 flex-1">
                  <h3 className="text-2xl ">{vacancy.title}</h3>
                  <div className="grid grid-cols-2 items-center gap-3 max-w-[320px] w-full">
                    <div className="flex items-center gap-3">
                      <MapPin className="size-5 text-primary" />
                      <p className="text-sm">{vacancy.location}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <GoZap className="size-5 text-primary" />
                      <p className="text-sm">{vacancy.requirements}</p>
                    </div>
                  </div>
                </div>
                <Button
                  asChild
                  size={"sm"}
                  className="bg-black wie__transition__300 text-sm"
                >
                  <Link
                    href={"#"}
                    className="inline-flex items-center group gap-x-2 text-sm wie__transition__300"
                  >
                    Apply Now
                    <ArrowRight className="size-4 group-hover:translate-x-[3px] wie__transition__300" />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CurrentOpeningSections;
