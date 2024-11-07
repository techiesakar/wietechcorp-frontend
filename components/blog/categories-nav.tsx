import React, { Suspense } from "react";

import { categories } from "./blogs";
import NavItem from "./nav-item";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";

const BlogCategoriesNav = () => {
  return (
    <section className=" bg-white  border-b">
      <Suspense fallback={<div>Loading...</div>}>
        <ScrollArea className="w-full" scrollHideDelay={6000}>
          <nav className="container w-full flex gap-6 justify-center py-4 px-10 ">
            <NavItem title={"Blog"} />
            {categories.map((item) => {
              return (
                <NavItem key={item.slug} title={item.title} slug={item.slug} />
              );
            })}
          </nav>
          <ScrollBar
            orientation="horizontal"
            className="mt-10 p-0"
            forceMount={true}
          />
        </ScrollArea>
      </Suspense>
    </section>
  );
};

export default BlogCategoriesNav;
