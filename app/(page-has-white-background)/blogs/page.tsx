import BlogGrid from "@/components/blog/blog-grid";
import BlogCategoriesNav from "@/components/blog/categories-nav";
import { siteMetaData } from "@/lib/site";
import { Metadata } from "next";
type Props = {
  searchParams?: Promise<{
    category: string;
    query?: string;
  }>;
};

export const metadata: Metadata = {
  title: siteMetaData.blogs.title,
  description: siteMetaData.blogs.description,
};

const BlogPage = async ({ searchParams }: Props) => {
  const params = await searchParams;

  return (
    <>
      <BlogCategoriesNav />
      {/* BlogGrid */}
      <BlogGrid category={params?.category} />
    </>
  );
};

export default BlogPage;
