import { cn } from "@/lib/utils";
import Image from "next/image";

type Props = {
  className?: string;
  imageUrl: string;
};

const CareerHeroImage = ({ className, imageUrl }: Props) => {
  return (
    <div className=" basis-[280px] shrink-0 xl:block hidden">
      <Image
        src={imageUrl}
        alt="career image"
        width={280}
        height={320}
        className={cn(className)}
        quality={100}
      />
    </div>
  );
};

export default CareerHeroImage;
