import React from "react";
import { blogs } from "./blogs";
import BlogGalleryCard from "./blog-gallery-card";
import { cn } from "@/lib/utils";
import { BlogPagination } from "./blog-pagination";

type Props = {
  category?: string;
};

const BlogGrid = ({ category }: Props) => {
  const filteredBlogs = blogs.filter((item) =>
    category ? item.category.slug === category : true
  );
  return (
    <section className="py-10">
      <div className="container space-y-10">
        <h1 className="text-3xl tracking-tight leading-tight font-bold">
          Blogs
        </h1>
        <div className="grid grid-cols-12 gap-6">
          {filteredBlogs.length > 0 ? (
            filteredBlogs.map((blog, i) => {
              return (
                <div
                  key={blog.id}
                  className={cn(
                    i <= 1
                      ? "md:col-span-6 col-span-12"
                      : "lg:col-span-4 md:col-span-6 col-span-12"
                  )}
                >
                  <BlogGalleryCard
                    title={blog.title}
                    path={blog.path}
                    createdAt={blog.createdAt}
                    featuredImage={blog.featuredImage}
                  />
                </div>
              );
            })
          ) : (
            <div className="col-span-12">No Blogs Found</div>
          )}
        </div>
        <BlogPagination />
      </div>
    </section>
  );
};

export default BlogGrid;
