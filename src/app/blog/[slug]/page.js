
import React from 'react';
import { BookOpen, ArrowLeft } from 'lucide-react';
import { getPostData } from '@/lib/blog';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const post = await getPostData(slug);

    if (!post) {
        return {
            title: 'Yazı Bulunamadı',
        };
    }

    return {
        title: `${post.title} | Oriflame Blog`,
        description: post.excerpt,
        openGraph: {
            title: `${post.title} | Oriflame Blog`,
            description: post.excerpt,
            url: `/blog/${slug}`,
            type: 'article',
            publishedTime: post.date,
            images: [
                {
                    url: post.image,
                    width: 1200,
                    height: 630,
                    alt: post.title,
                }
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title: `${post.title} | Oriflame Blog`,
            description: post.excerpt,
            images: [post.image],
        },
    };
}

export default async function BlogPostPage({ params }) {
    const { slug } = await params;
    const post = await getPostData(slug);

    if (!post) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-gray-50 pb-20">
            {/* JSON-LD Article Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Article",
                        "headline": post.title,
                        "image": [
                            post.image || 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=2000'
                        ],
                        "datePublished": post.date,
                        "dateModified": post.date,
                        "author": [{
                            "@type": "Organization",
                            "name": "Oriflame Türkiye"
                        }]
                    })
                }}
            />
            {/* Simple Header for Navigation */}
            <div className="bg-white border-b border-gray-100 sticky top-0 z-50">
                <div className="container mx-auto px-4 py-4">
                    <Link href="/blog" className="inline-flex items-center text-white bg-green-800 hover:bg-green-900 px-5 py-2.5 rounded-full font-bold shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5">
                        <ArrowLeft size={20} className="mr-2" />
                        Blog'a Dön
                    </Link>
                </div>
            </div>

            <div className="relative bg-gradient-to-r from-green-800 to-primary py-20 overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <img src="https://www.transparenttextures.com/patterns/cubes.png" alt="Pattern" className="w-full h-full object-cover" />
                </div>
            </div>

            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-32 relative z-10">
                <article className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
                    <div className="relative h-72 sm:h-[500px] overflow-hidden group">
                        <img
                            src={post.image || 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=2000'}
                            alt={post.title}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                        <div className="absolute bottom-6 left-6 sm:bottom-10 sm:left-10 text-white">
                            <span className="inline-block px-3 py-1 bg-primary text-white rounded-md text-sm font-bold uppercase tracking-wide mb-3 shadow-md">
                                {post.category || 'Güzellik'}
                            </span>
                        </div>
                    </div>

                    <div className="p-8 sm:p-16">
                        <div className="mb-12 text-center border-b border-gray-100 pb-10">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 leading-tight mb-6 text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-green-800">
                                {post.title}
                            </h1>
                            <div className="flex items-center justify-center space-x-2 text-gray-500 font-medium">
                                <span>{new Date(post.date).toLocaleDateString('tr-TR', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                                <span>•</span>
                                <span className="text-primary flex items-center gap-1"><BookOpen size={16} /> 3 Dk Okuma</span>
                            </div>
                        </div>

                        {/* Enhanced Typography (Same as main blog) */}

                        {/* Enhanced Typography (Global Styles Applied) */}
                        <div className="blog-content prose prose-lg md:prose-xl prose-stone mx-auto text-gray-700">
                            <div dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
                        </div>

                        <div className="my-16 flex items-center justify-center">
                            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gray-200 to-transparent rounded-full"></div>
                        </div>

                        <div className="bg-gradient-to-br from-green-50 to-white p-8 rounded-2xl border border-green-100 flex items-center gap-6 shadow-sm">
                            <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-white shadow-lg shrink-0">
                                <span className="font-serif text-2xl font-bold">O</span>
                            </div>
                            <div>
                                <div className="font-bold text-xl text-gray-900 mb-1">Oriflame Editör Masası</div>
                                <p className="text-gray-600">Güzellik, sağlık ve iyi yaşam üzerine uzman ekibimizle hazırladığımız günlük içerikler.</p>
                            </div>
                        </div>
                    </div>
                </article>
            </div>
        </div>
    );
}
