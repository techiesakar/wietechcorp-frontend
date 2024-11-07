import Header from "@/components/navigations/header/header";
type Props = {
  children: React.ReactNode;
};

const LayoutForWhiteBackground = ({ children }: Props) => {
  return (
    <>
      <Header />
      <main className="lg:pt-24 pt-20">{children}</main>
    </>
  );
};

export default LayoutForWhiteBackground;
