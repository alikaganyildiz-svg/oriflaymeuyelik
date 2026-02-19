export default function robots() {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: '/private/',
        },
        sitemap: 'https://oriflaymeuyelik.vercel.app/sitemap.xml',
    };
}
