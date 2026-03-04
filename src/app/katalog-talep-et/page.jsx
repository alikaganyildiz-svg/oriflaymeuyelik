import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BookOpen, Coffee, Gift, CheckCircle, ArrowRight, ShieldCheck } from 'lucide-react';

export const metadata = {
    title: 'Ücretsiz Oriflame Kataloğu Talep Et 2026 | Adresinize Gelsin',
    description: 'En güncel Oriflame kataloğunu adresinize ücretsiz gönderiyoruz. Formu doldurun, yeni ürünleri inceleyin ve anında %20 indirim fırsatını yakalayın.'
};

export default function KatalogTalepEtPage() {
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "Basılı katalog ücretli mi?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Ücretsiz marka ortağı formumuzu doldurduğunuzda, güncel Oriflame kataloğu adresinize ücretsiz olarak gönderilir."
                }
            },
            {
                "@type": "Question",
                "name": "Katalog ne zaman elime ulaşır?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Talebiniz alındıktan ve üyelik işleminiz tamamlandıktan sonraki ilk siparişinizle veya doğrudan kargo ile 2-4 iş günü içinde elinize ulaşır."
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
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    {/* Header */}
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center space-x-2 bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full mb-6">
                            <BookOpen size={18} />
                            <span className="font-bold text-sm tracking-wide uppercase">Adrese Teslim Katalog</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-5xl font-serif font-bold text-gray-900 mb-6 leading-tight">
                            Ücretsiz Oriflame Kataloğunuzu İsteyin
                        </h1>
                        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
                            Güzel demlenmiş bir çayınızı veya kahvenizi yudumlarken dokunabildiğiniz, sayfalarını karıştırdığınız, yepyeni ürünleri ve kampanyaları incelediğiniz fiziksel bir kataloğa sahip olmak istemez misiniz? Hemen talep edin, kapınıza gelsin!
                        </p>
                    </div>

                    {/* Two-Column Layout */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-start">

                        {/* Left Column: Visuals & Copy */}
                        <div>
                            {/* Hero Image */}
                            <div className="relative w-full h-[350px] md:h-[450px] rounded-3xl overflow-hidden shadow-2xl mb-10 bg-white">
                                <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-primary/20 flex items-center justify-center animate-pulse"></div>
                                <Image
                                    // A high quality Unsplash image representing a magazine/catalog reading vibe
                                    src="https://images.unsplash.com/photo-1544457070-4cd773b4d71e?auto=format&fit=crop&q=80&w=2000"
                                    alt="Oriflame ücretsiz basılı katalog talep formu"
                                    fill
                                    className="object-cover relative z-10"
                                    priority
                                />
                                <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md rounded-2xl p-4 shadow-lg z-20 flex items-center gap-4">
                                    <div className="bg-primary/10 p-3 rounded-full text-primary shrink-0">
                                        <Coffee size={24} />
                                    </div>
                                    <p className="font-medium text-gray-800 text-sm md:text-base leading-snug">
                                        "Fiziksel kataloğun kokusu ve sayfaları arasında gezinme keyfi bambaşka."
                                    </p>
                                </div>
                            </div>

                            <div className="prose prose-lg text-gray-700 max-w-none">
                                <h3 className="text-2xl font-serif font-bold text-gray-900 flex items-center mb-4">
                                    <Gift className="w-6 h-6 text-primary mr-3" />
                                    Neden Basılı Katalog İstmelisiniz?
                                </h3>
                                <ul className="space-y-4 list-none pl-0">
                                    <li className="flex items-start">
                                        <CheckCircle className="w-6 h-6 text-emerald-500 mr-3 shrink-0 mt-0.5" />
                                        <span><strong>Kaliteli Dokunuş:</strong> Ürünlerin detaylarını dijital ekranların yorgunluğu olmadan yüksek kaliteli kağıtta inceleyin.</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="w-6 h-6 text-emerald-500 mr-3 shrink-0 mt-0.5" />
                                        <span><strong>Kolay Paylaşım:</strong> Arkadaşlarınıza ve ailenize göstererek sipariş toplayabilir, kendi kazancınızı artırabilirsiniz.</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="w-6 h-6 text-emerald-500 mr-3 shrink-0 mt-0.5" />
                                        <span><strong>Yeni Parfümleri Keşfedin:</strong> Birçok kataloğumuzda yer alan "bileğinizi sürterek kokla" teknolojisi sayesinde parfümleri deneme şansı yakalayın.</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Right Column: CTA / Form Direction */}
                        <div className="sticky top-24">
                            <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100 relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 pointer-events-none"></div>
                                <div className="absolute bottom-0 left-0 w-40 h-40 bg-pink-500/5 rounded-full -ml-20 -mb-20 pointer-events-none"></div>

                                <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5 mb-8 flex items-start">
                                    <ShieldCheck className="w-8 h-8 text-blue-600 shrink-0 mr-4" />
                                    <div>
                                        <h4 className="font-bold text-blue-900 mb-1">Ayrıcalıklı Kataloğa Ulaşım</h4>
                                        <p className="text-sm text-blue-800 leading-relaxed">
                                            Kataloğun adresinize ücretsiz gönderilebilmesi için sizi sistemimize "Ücretsiz Marka Ortağı" olarak tanımlıyoruz. Bu sayede sadece katalog almakla kalmayacak, aynı zamanda dilediğiniz zaman tüm ürünleri geliş fiyatından (%20 İndirimli) alma hakkına sahip olacaksınız!
                                        </p>
                                    </div>
                                </div>

                                <div className="text-center">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                        Sipariş Formu ve Üyelik
                                    </h3>
                                    <p className="text-gray-600 mb-8 px-4">
                                        Adres bilgilerinizi almak ve size özel kataloğunuzu hazırlamak için lütfen saniyeler süren kayıt işlemimizi tamamlayın.
                                    </p>

                                    <Link
                                        href="/#basvuru"
                                        className="group flex items-center justify-center w-full bg-primary hover:bg-green-700 text-white text-xl font-bold py-5 px-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
                                    >
                                        Kataloğum Adresime Gelsin!
                                        <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
                                    </Link>

                                    <div className="mt-6 text-sm text-gray-500 flex items-center justify-center gap-2">
                                        <CheckCircle className="w-4 h-4 text-gray-400" />
                                        <span>Tamamen Ücretsizdir - Aidat / Kota Yoktur</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </main>
        </>
    );
}
