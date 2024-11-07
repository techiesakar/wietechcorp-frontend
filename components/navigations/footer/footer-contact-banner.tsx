import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";
import { Phone } from "lucide-react";

export const FooterContactBanner = () => {
  return (
    <section className='relative z-10 bg-[url("/images/shapes/footer-contact-shape.png")] bg-no-repeat bg-cover bg-center py-14 shadow-md'>
      <div className="container mx-auto flex items-center justify-between lg:flex-row flex-col gap-y-4">
        <div className="text-white lg:text-left text-center">
          <h3 className="text-2xl font-bold tracking-wide mb-3">
            Looking for the best tours & travels service in Dubai?
          </h3>
          <p className="text-sm">
            Contact us today and we will be happy to assist you.
          </p>
        </div>
        <Button
          size={"xl"}
          variant={"outline"}
          className="border-gray-300 bg-transparent text-white font-bold hover:bg-white hover:text-dark"
        >
          <span className="inline-flex items-center justify-center bg-primary p-2 size-6 rounded-full mr-2">
            <Phone className="text-white size-4" />
          </span>
          <span> {site.phone}</span>
        </Button>
      </div>
    </section>
  );
};
