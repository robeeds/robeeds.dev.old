import Link from "next/link"
import { getBlogs } from "./fetchers"

export default async function BlogsPage() {
    const blogs = await getBlogs()
    return (
        <div className="flex flex-1 flex-col justify-center item-center text-center p-4">

            {/* Title */}
            <p className="font-semibold text-white text-[48px]">Blog</p>

            {/* Blog Pages Section */}
            <div className="flex flex-col justify-center items-center md:grid md:grid-cols-2">

                {/* This will map all the recent blogs */}
                {blogs.map((blog, i) => (
                    <article key={i} className="flex flex-1 w-full">

                        {/* This will be the text portion of each blog */}
                        <div className="flex flex-1 flex-col justify-center items-center text-center p-4">
                            <p className="font-semibold text-dimWhite text-[36px]">{blog.frontmatter.title}</p>
                            <p className="text-gray">{blog.frontmatter.author}</p>
                            <p className="text-gray">{blog.frontmatter.publishDate}</p>
                            <Link 
                                href={`/blog/${blog.slug}`} 
                                className=""
                            >Read More</Link>
                        </div>

                    </article> 
                ))}
            </div>
        </div>
    )
}