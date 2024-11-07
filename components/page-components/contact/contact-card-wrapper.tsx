import { Mail, MapPin, Phone } from "lucide-react";
import ContactCard from "./contact-card";

const ContactCardWrapper = () => {
  return (
    <div className="left shrink-0 lg:basis-80 grid lg:grid-cols-1 grid-cols-2 gap-4">
      <ContactCard
        icon={Phone}
        title="Get Free Quote"
        items={["319-666-0112", "319-666-0112"]}
        className="md:col-span-1 col-span-2"
        type="phone"
      />
      <ContactCard
        icon={Mail}
        title="Email"
        items={["contact@wietechcorp.com", "support@wietechcorp.com"]}
        className="md:col-span-1 col-span-2"
        type="email"
      />
      <ContactCard
        icon={MapPin}
        title="Location"
        items={["4429 Richards Avenue Arnold,", "CA 95223"]}
        type="address"
        className="lg:col-span-1 col-span-2"
      />
    </div>
  );
};

export default ContactCardWrapper;
