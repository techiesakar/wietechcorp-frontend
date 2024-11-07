import React from "react";
import WidgetTitle from "./widget-title";
import { WidgetsLinkItems } from "./widgets-list-items";

const data = [
  {
    title: "About Us",
    href: "/",
  },
  {
    title: "Service",
    href: "/contact-us",
  },
  {
    title: "Blog Post",
    href: "/blogs",
  },
  {
    title: "Team Members",
    href: "/privacy-policy",
  },
];

export const NewsLetterWidget = () => {
  return (
    <div>
      <WidgetTitle title="Newsletter" />
    </div>
  );
};
