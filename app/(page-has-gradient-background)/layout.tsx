import React from "react";
import Header from "@/components/navigations/header/header";

type Props = {
  children: React.ReactNode;
};

const LayoutForGradientBackground = ({ children }: Props) => {
  return (
    <>
      <Header />
      <main className="bg-[url('/images/shapes/gradient-shape.svg')] bg-no-repeat bg-cover  lg:pt-24 pt:20">
        {children}
      </main>
    </>
  );
};

export default LayoutForGradientBackground;
