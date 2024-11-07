import Link from "next/link";
import React from "react";

type Props = {
  data: {
    href: string;
    title: string;
  }[];
};

export const WidgetsLinkItems = ({ data }: Props) => {
  return (
    <ul className="list-none ">
      {data.map((item, index) => (
        <li key={index}>
          {" "}
          <Link
            href={item.href}
            className="text-white hover:text-primary py-3 inline-block vise__transition__200"
          >
            {item.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};
