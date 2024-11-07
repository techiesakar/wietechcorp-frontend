import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/custom-accordion";
import { faqs } from "./faqs";

const FAQSection = () => {
  return (
    <section className="bg-white py-10">
      <div className="container">
        <div className="">
          <div className="wie__text__highlight">FAQ</div>
          <h2 className="lg:text-4xl md:text-3xl sm:text-2xl text-xl capitalize font-bold mb-4  tracking-tight leading-tight">
            Frequently asked questions
          </h2>
          <p className="mb-6  text-gray-500">
            We hope this section will help you better understand the issues
            related to software
          </p>
        </div>

        <div className="w-full grid md:grid-cols-2 grid-cols-1 gap-6">
          <div className="w-full space-y-6">
            {faqs.slice(0, 3).map((faq) => {
              return (
                <Accordion
                  key={faq.id}
                  type="single"
                  collapsible
                  className="border-b-0"
                >
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="hover:no-underline">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="leading-6">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              );
            })}
          </div>
          <div className="w-full space-y-6">
            {faqs.slice(3, 6).map((faq) => {
              return (
                <Accordion
                  key={faq.id}
                  type="single"
                  collapsible
                  className="border-b-0"
                >
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="hover:no-underline">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="leading-6">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
