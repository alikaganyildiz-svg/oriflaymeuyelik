import { getSortedPostsData } from '@/lib/blog';

export default async function sitemap() {
    const baseUrl = 'https://oriflaymeuyelik.vercel.app'; // Replace with custom domain if available

    // Get all blog posts
    const posts = await getSortedPostsData();
    const blogUrls = posts.map((post) => ({
        url: `${baseUrl}/blog/${post.id}`,
        lastModified: new Date(post.date),
        changeFrequency: 'monthly',
        priority: 0.7,
    }));

    // Main pages
    const routes = ['', '/blog', '/katalog', '/iletisim'].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 1.0,
    }));

    return [...routes, ...blogUrls];
}
