import createMDX from '@next/mdx'
import remarkFrontmatter from 'remark-frontmatter';
import remarkMdxFrontmatter from 'remark-mdx-frontmatter';

/** @type {import('next').NextConfig} */
const nextConfig = {

    pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
    transpilePackages: ['next-mdx-remote'],

};

const withMDX = createMDX({
    // Add markdown plugins here
    options: {
        remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter]
    }
})

export default withMDX(nextConfig);
