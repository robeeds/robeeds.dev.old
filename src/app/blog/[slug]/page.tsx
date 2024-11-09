import { getBlogBySlug, getAllBlogSlug } from "../fetchers";
import { Metadata } from "next";
import PostLayout from "./post-layout";

export async function generateMetadata(
  props: {
    params: Promise<{ slug: string }>
  }
): Promise<Metadata> {

  const params = await props.params;
  const blog = await getBlogBySlug(params.slug)

  const title = blog.frontmatter.title
  const description = blog.frontmatter.description

  const ogImageUrl = `/api/?title=${title}&desc=${description}`;

  return {
      title,
      description,
      openGraph: {
          title,
          description,
          images: [
              {
                  url:ogImageUrl,
                  width: 1200,
                  height: 630,
                  alt: "Blog - Open Graph Image",
              },
          ],
      },
  };
}

export async function generateStaticParams() {
  return getAllBlogSlug()
}

export default async function BlogPage(
  props: {
    params: Promise<{ slug: string }>
  }
) {
  const params = await props.params;
  const blog = await getBlogBySlug(params.slug)
  console.log(blog.frontmatter.title)
  return (
    <PostLayout>
      <article className="p-4">{blog.content}</article>
    </PostLayout>
  )
}