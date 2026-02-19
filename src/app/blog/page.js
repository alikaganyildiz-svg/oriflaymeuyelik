
import React from 'react';
import { BookOpen, Archive } from 'lucide-react';
import { getSortedPostsData } from '@/lib/blog';
import Link from 'next/link';

// Revalidate every hour
export const revalidate = 3600;

export default async function BlogPage() {
    // Get posts from file system
    const allPostsData = getSortedPostsData();
    const latestPost = allPostsData[0];

    if (!latestPost) {
        return (
            <div className="pt-20 min-h-screen bg-gray-50 text-center px-4 flex flex-col items-center justify-center">
                <h1 className="text-3xl font-bold text-gray-800">Henüz İçerik Yok</h1>
                <p className="text-gray-600 mt-2 mb-4">Blog yazıları çok yakında eklenecektir.</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 pb-20">
            {/* Header Section with Gradient */}
            <div className="relative bg-gradient-to-r from-green-800 to-primary py-24 sm:py-32 overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <img src="https://www.transparenttextures.com/patterns/cubes.png" alt="Pattern" className="w-full h-full object-cover" />
                </div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
                    <span className="inline-block px-4 py-1.5 bg-white/20 backdrop-blur-sm border border-white/30 text-white font-bold text-xs uppercase tracking-widest rounded-full mb-6">
                        Güzellik & Yaşam Bloğu
                    </span>
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 tracking-tight shadow-sm">Günlük İlham Köşesi</h1>
                    <p className="text-green-100 text-xl font-light max-w-2xl mx-auto">Sizin için her gün yepyeni, özgün ve ilham verici içerikler hazırlıyoruz.</p>
                </div>
            </div>

            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-10">
                <article className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
                    <div className="relative h-72 sm:h-[500px] overflow-hidden group">
                        <Link href={`/blog/${latestPost.id}`}>
                            <img
                                src={latestPost.image || 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=2000'}
                                alt={latestPost.title}
                                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                            />
                        </Link>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none"></div>
                        <div className="absolute bottom-6 left-6 sm:bottom-10 sm:left-10 text-white pointer-events-none">
                            <span className="inline-block px-3 py-1 bg-primary text-white rounded-md text-sm font-bold uppercase tracking-wide mb-3 shadow-md">
                                {latestPost.category || 'Güzellik'}
                            </span>
                        </div>
                    </div>

                    <div className="p-8 sm:p-16">
                        <div className="mb-12 text-center border-b border-gray-100 pb-10">
                            <Link href={`/blog/${latestPost.id}`} className="hover:text-green-800 transition-colors">
                                <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 leading-tight mb-6">
                                    {latestPost.title}
                                </h1>
                            </Link>
                            <div className="flex items-center justify-center space-x-2 text-gray-500 font-medium">
                                <span>{new Date(latestPost.date).toLocaleDateString('tr-TR', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                                <span>•</span>
                                <span className="text-primary flex items-center gap-1"><BookOpen size={16} /> 3 Dk Okuma</span>
                            </div>
                        </div>

                        <div className="text-center">
                            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                                {latestPost.excerpt}
                            </p>
                            <Link href={`/blog/${latestPost.id}`} className="inline-block px-8 py-3 bg-green-800 text-white font-bold rounded-full hover:bg-green-900 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                                Yazının Devamını Oku
                            </Link>
                        </div>

                        <div className="my-16 flex items-center justify-center">
                            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gray-200 to-transparent rounded-full"></div>
                        </div>

                        {/* Recent Posts Grid (excluding latest) */}
                        {allPostsData.length > 1 && (
                            <div className="mb-16">
                                <h2 className="text-2xl font-serif font-bold text-gray-900 mb-8 text-center">Diğer Yazılarımız</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    {allPostsData.slice(1).map((post) => (
                                        <Link key={post.id} href={`/blog/${post.id}`} className="group block bg-gray-50 rounded-2xl overflow-hidden hover:shadow-lg transition-all border border-gray-100">
                                            <div className="h-48 overflow-hidden">
                                                <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                            </div>
                                            <div className="p-6">
                                                <span className="text-xs font-bold text-primary uppercase tracking-wider mb-2 block">{post.category}</span>
                                                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-green-800 transition-colors">{post.title}</h3>
                                                <p className="text-gray-600 text-sm line-clamp-2">{post.excerpt}</p>
                                                <div className="mt-4 text-xs text-gray-400 font-medium">
                                                    {new Date(post.date).toLocaleDateString('tr-TR', { day: 'numeric', month: 'long', year: 'numeric' })}
                                                </div>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        )}

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
};
