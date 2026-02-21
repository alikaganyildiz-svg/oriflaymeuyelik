import { getSortedPostsData } from '@/lib/blog';

export default async function sitemap() {
    const baseUrl = 'https://oriflaymekayit.com';

    // Get all blog posts
    const posts = await getSortedPostsData();
    const blogUrls = posts.map((post) => ({
        url: `${baseUrl}/blog/${post.id}`,
        lastModified: new Date(post.date),
        changeFrequency: 'weekly',
        priority: 0.8,
    }));

    // Main pages with specific priorities
    const routes = [
        { route: '', priority: 1.0, freq: 'daily' },
        { route: '/katalog', priority: 0.9, freq: 'daily' },
        { route: '/blog', priority: 0.9, freq: 'daily' }
    ].map(({ route, priority, freq }) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: freq,
        priority: priority,
    }));

    return [...routes, ...blogUrls];
}
