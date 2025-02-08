// @/src/app/blog/[slug]/page.tsx

// Imports
import { getBlogBySlug, getAllBlogSlug } from "../fetchers";
import { Metadata } from "next";
import Image from "next/image";
import PostLayout from "./post-layout";

// Generate Metadata using Blog title and description
export async function generateMetadata(
  props: {
    params: Promise<{ slug: string }>
  }
): Promise<Metadata> {

  const params = await props.params;
  const blog = await getBlogBySlug(params.slug)

  const title = blog.frontmatter.title
  const description = blog.frontmatter.description || ""

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
  return (
    <PostLayout>
      
      {/* Image Preview */}
      <div className="flex flex-1">
        <Image src={blog.frontmatter.previewImage} alt="preview image" width={1000} height={1000} className="rounded-[15px]"/>
      </div>

      {/* This is the title section */}

      <div className="flex flex-col flex-1 self-start pt-8">
        <p className="font-semibold text-[48px]">{blog.frontmatter.title}</p>
        <p className="text-gray">{blog.frontmatter.author}</p>
        <p className="text-gray">{blog.frontmatter.publishDate}</p>
      </div>

      {/* Actual Blog Content */}

      <article className="
        max-w-[1000px]
        prose
        pb-4 
        pt-8 
        prose-headings:font-medium 
        prose-headings:text-dimWhite 
        prose-p:text-gray
        prose-a:text-blue 
        prose-a:no-underline
        hover:prose-a:underline 
        prose-ol:text-gray
        prose-ul: text-gray
        prose-strong:text-dimWhite
        prose-code:text-gray
      ">{blog.content}</article>
    </PostLayout>
  )
}