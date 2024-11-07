import { blogs } from "@/components/blog/blogs";
import BlogGalleryCard from "@/components/blog/blog-gallery-card";

const OurBlogsSection = () => {
  return (
    <section className='bg-[#FFFAF0] lg:py-24 md:py-20 py-14 bg-[url("/images/shapes/blog-shape.svg")] bg-no-repeat'>
      <div className="container flex flex-col items-center justify-center">
        <div className="wie__text__highlight lg:mb-5 mb-3">Our blogs</div>
        <h2 className="lg:text-4xl md:text-3xl text-2xl capitalize text-center font-bold lg:mb-10 mb-6  tracking-tight leading-tight">
          Boost Your Business with <br /> Digital most Marketing
        </h2>
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
          {blogs.slice(0, 6).map((blog) => {
            return (
              <BlogGalleryCard
                key={blog.id}
                title={blog.title}
                path={blog.path}
                createdAt={blog.createdAt}
                featuredImage={blog.featuredImage}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OurBlogsSection;
