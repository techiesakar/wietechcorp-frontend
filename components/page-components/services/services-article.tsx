import { services } from "@/app/(page-has-white-background)/services/services";
import ServiceCard from "./service-card";

const ServicesArticle = () => {
  return (
    <article>
      {services.map((service, index) => {
        return (
          <ServiceCard
            slug={service.slug}
            imageUrl={service.imageUrl}
            key={index}
            title={service.title}
            tagline={service.tagline}
            mainPara={service.mainPara}
            secondPara={service.secondPara}
            isOdd={index % 2 === 1}
          />
        );
      })}
    </article>
  );
};

export default ServicesArticle;
