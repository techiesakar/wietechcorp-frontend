import React from "react";
import { AspectRatio } from "../ui/aspect-ratio";
import Image from "next/image";
import { CalendarDays, MoveRight } from "lucide-react";
import Link from "next/link";

type Props = {
  title: string;

  path: string;
  createdAt: string;
  featuredImage: string;
};

const BlogGalleryCard = ({ title, path, createdAt, featuredImage }: Props) => {
  return (
    <div className="shadow-sm overflow-hidden border border-gray-200 bg-white rounded-b-3xl hover:shadow-wie wie__transition__200">
      <AspectRatio ratio={16 / 10} className="relative">
        <Image
          src={featuredImage}
          alt="Image"
          className="rounded-md object-cover"
          fill
        />
      </AspectRatio>
      <div className="bg-white px-8 pt-5 pb-8 ">
        <div className="flex items-center gap-x-3 mb-3">
          <CalendarDays className="text-primary size-5" />
          <time className="text-primary">October 19, 2022</time>
        </div>
        <h1>
          <Link href={path} className="text-2xl font-semibold">
            {title}
          </Link>
        </h1>
        <Link
          href={path}
          className="text-primary font-outfit  flex mt-5 font-semibold"
        >
          Read More{" "}
          <MoveRight className="group-hover:rotate-0 ml-2 wie__transition__200" />
        </Link>
      </div>
    </div>
  );
};

export default BlogGalleryCard;
