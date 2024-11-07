import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { services } from "@/lib/data";

export const WhyUsAccordion = () => {
  return (
    <Accordion type="single" className="w-full" defaultValue="item-1">
      {services.map((service, i) => (
        <AccordionItem
          key={service.slug}
          value={service.slug}
          defaultChecked={i == 0}
        >
          <AccordionTrigger>{service.title}</AccordionTrigger>
          <AccordionContent className="leading-6">
            {service.content}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};
