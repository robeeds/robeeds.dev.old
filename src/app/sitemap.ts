import { getBlogs } from "./blog/fetchers"

export const baseUrl = 'https://www.robeeds.dev'

export default async function sitemap() {

    const blogs = (await getBlogs()).map((post) => ({
        url: `${baseUrl}/blog/${post.slug}`
    }))

   {/*
     let blogs = getBlogs().((post) => ({
        url: `${baseUrl}/blog/${post.slug}`,
    })) */}

    const routes = ['', '/blog'].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date().toISOString().split('T')[0],
    }))

    return [...routes, ...blogs]
}