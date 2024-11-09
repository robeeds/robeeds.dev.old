import fs from "fs"
import path from "path"
import { compileMDX } from 'next-mdx-remote/rsc'

import { notFound } from "next/navigation"

const contentDir = path.join(process.cwd(), ".next/server/app/blog/_content")

export async function getBlogBySlug(slug: string) {
    const fileName = slug + ".mdx"
    const filePath = path.join(contentDir, fileName)
    let fileContent = ''

    if(!fs.existsSync(filePath)) {
        notFound()
    }  else {
        fileContent = fs.readFileSync(filePath, "utf8")
    }

    const { frontmatter, content } = await compileMDX<{
        title: string
        description: string
        author: string
        publishDate: string
    }>({
        source: fileContent,
        options: { parseFrontmatter: true},
    })
    return { 
        frontmatter,
        content,
        slug: path.parse(fileName).name,
    }
}

export async function getBlogs() {
    const files = fs.readdirSync(contentDir)
    const blogs = await Promise.all(
        files.map(async (file) => await getBlogBySlug(path.parse(file).name))
    )
    return blogs
}

export function getAllBlogSlug() {
    const files = fs.readdirSync(contentDir)
    const slugs = files.map((file) => ({ slug: path.parse(file).name}))
    return slugs
}