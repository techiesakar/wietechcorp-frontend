import React from "react";
import WidgetTitle from "./widget-title";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const data = [
  {
    title: "address",
    value: "Kimathi Chambers Equity Bank House, Nairobi, Kenya",
    icon: FaLocationDot,
  },
  {
    title: "phone number",
    value: "98********",
    icon: FaPhoneAlt,
  },
  {
    title: "email",
    value: "contact@wietechcorp.com",
    icon: MdEmail,
  },
];

export const ContactWidget = () => {
  return (
    <div>
      <WidgetTitle title="Contact" />
      <div>
        {data.map((item, index) => (
          <div key={index} className="flex gap-x-4 py-1.5">
            <div>
              <item.icon className="text-primary size-5" />
            </div>
            <div className="flex flex-col gap-y-1 flex-1">
              <span className="text-gray-400 capitalize">{item.title}</span>
              <span className="text-white md:font-semibold">{item.value}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
