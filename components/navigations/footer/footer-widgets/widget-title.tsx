import React from "react";

type Props = {
  title: string;
};

const WidgetTitle = ({ title }: Props) => {
  return <h3 className="text-2xl text-white mb-5 font-medium">{title}</h3>;
};

export default WidgetTitle;
