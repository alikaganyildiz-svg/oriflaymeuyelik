import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';

export const metadata = {
    title: 'Oriflame Wellness Ürünleri | Omega 3 ve Sağlıklı Yaşam',
    description: 'Oriflame Wellness serisi ile İsveç biliminin sunduğu Omega 3, Astaksantin ve vitamin takviyelerini keşfedin. Ücretsiz kayıt olarak %20 indirimle sağlıklı yaşama adım atın.'
};

export default function WellnessUrunleriPage() {
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "Oriflame Wellness ürünleri nelerdir?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Omega 3, Astaksantin, multivitamin ve takviye edici gıdalar gibi İsveç standartlarında üretilen yüksek kaliteli ürünlerdir."
                }
            },
            {
                "@type": "Question",
                "name": "Wellness ürünleri güvenilir mi?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Evet, tüm ürünlerimiz katı Avrupa Birliği standartlarına ve İsveç kalite kontrollerine uygun olarak bilim insanları tarafından geliştirilmektedir."
                }
            },
            {
                "@type": "Question",
                "name": "Wellness ürünlerini indirimli nasıl alabilirim?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Sitemizden ücretsiz marka ortağı kaydınızı oluşturarak tüm Wellness serisini anında %20 geliş fiyatı indirimiyle satın alabilirsiniz."
                }
            }
        ]
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />

            <main className="min-h-screen bg-gray-50 pb-20 pt-10">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

                    {/* Header */}
                    <div className="text-center mb-10">
                        <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
                            <Sparkles size={18} />
                            <span className="font-bold text-sm tracking-wide uppercase">İsveç'ten Gelen Sağlık</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6 leading-tight">
                            Oriflame Wellness: <br className="hidden md:block" />İsveç'ten Gelen Sağlık ve Güzellik
                        </h1>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
                            Gerçek güzellik önce içeriden başlar. İsveç'in saf doğasından ilham alan ve titiz bilimsel araştırmalarla desteklenen Wellness by Oriflame felsefesiyle tanışın. Bedeninizi en iyi içeriklerle besleyerek her güne daha enerjik ve zinde uyanın.
                        </p>
                    </div>

                    {/* Visual Architecture */}
                    <div className="relative w-full h-[300px] md:h-[450px] rounded-3xl overflow-hidden shadow-2xl mb-16 bg-white">
                        {/* Fallback pattern */}
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-primary/20 flex items-center justify-center animate-pulse">
                        </div>

                        <Image
                            src="/wellness-urunleri.jpg"
                            alt="Oriflame Wellness Omega 3 ve takviye edici gıdalar"
                            fill
                            className="object-cover relative z-10"
                            priority
                        />
                    </div>

                    {/* Content Sections */}
                    <article className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-12 border border-gray-100">
                        <div className="prose prose-lg max-w-none text-gray-700">

                            <div className="mb-12">
                                <h2 className="text-2xl md:text-3xl font-serif font-bold text-gray-900 mb-6 flex items-center">
                                    <span className="bg-primary/10 text-primary w-10 h-10 rounded-full flex items-center justify-center mr-4 text-xl flex-shrink-0">1</span>
                                    Kalite ve Güven
                                </h2>
                                <div className="pl-0 md:pl-14">
                                    <p className="leading-relaxed mb-4">
                                        Wellness by Oriflame ürünleri, katı <strong>Avrupa Birliği standartlarına</strong> uygun olarak üretilir ve üstün İsveç biliminin en güncel yeniliklerini taşır.
                                    </p>
                                    <p className="leading-relaxed">
                                        Sürdürülebilir kaynaklardan elde edilen saf Omega 3, güçlü antioksidan Astaksantin ve gerekli tüm vitamin-mineral bileşenleri; GDO içermeyen güvenilir formüllerle vücudunuza sunulur. Doğallığın ve bilimin bu muazzam dengesiyle sağlığınızı güvenle destekleyebilirsiniz.
                                    </p>
                                </div>
                            </div>

                            <div className="mb-8 p-8 bg-blue-50 border border-blue-100 rounded-2xl relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16"></div>

                                <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary mb-6 flex items-center relative z-10">
                                    <span className="bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center mr-4 text-xl flex-shrink-0">2</span>
                                    Sağlığınıza ve Bütçenize Yatırım Yapın
                                </h2>
                                <div className="pl-0 md:pl-14 relative z-10">
                                    <p className="leading-relaxed mb-4">
                                        Sağlıklı bir yaşam rutini uzun vadeli bir taahhüttür. Düzenli olarak kullanacağınız Wellness ürünlerini mağaza fiyatıyla değil, <strong>%20 indirimli üye fiyatıyla (geliş fiyatı)</strong> satın almak bütçenize inanılmaz bir destek sağlar.
                                    </p>
                                    <ul className="space-y-4 mt-6">
                                        <li className="flex items-start">
                                            <div className="flex-shrink-0 mt-1.5">
                                                <div className="w-2.5 h-2.5 rounded-full bg-primary/80"></div>
                                            </div>
                                            <span className="ml-3"><strong>Kesintisiz 20% İndirim:</strong> Marka Ortağı olduğunuz an başlayan indirim, her ay kesintisiz devam eder. Takviyelerinizi yenilerken kârlı çıkarsınız.</span>
                                        </li>
                                        <li className="flex items-start">
                                            <div className="flex-shrink-0 mt-1.5">
                                                <div className="w-2.5 h-2.5 rounded-full bg-primary/80"></div>
                                            </div>
                                            <span className="ml-3"><strong>Hoşgeldin Programı Kazancı:</strong> Üye olduktan sonra verdiğiniz Wellness siparişlerinin yüksek puan getirileri sayesinde yeni üyelere özel Hoşgeldin Programı hediyelerini kapmak çok daha kolaydır!</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </article>

                    {/* CTA Section */}
                    <div className="text-center bg-white rounded-3xl p-10 md:p-14 shadow-2xl relative overflow-hidden border border-gray-100">
                        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>
                        <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-blue-400/10 rounded-full blur-3xl pointer-events-none"></div>

                        <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4 relative z-10">
                            Gerçek Güzellik İçeriden Başlar
                        </h2>
                        <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto relative z-10">
                            Wellness takviyeleriyle sağlığınıza yatırım yaparken %20 indirimin keyfini çıkarmak için hemen harekete geçin. Vücudunuza en saf olanı hediye edin!
                        </p>

                        <Link
                            href="/#basvuru"
                            className="group relative z-10 flex items-center justify-center px-8 md:px-12 py-5 text-lg md:text-xl font-bold text-white bg-primary hover:bg-green-700 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 w-full mx-auto max-w-xl"
                        >
                            Wellness Ürünlerini %20 İndirimli Almak İçin Ücretsiz Kaydol
                            <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>

                </div>
            </main>
        </>
    );
}
