import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';

export const metadata = {
    title: 'Oriflame Yeni Gelenler 2026 | Bu Ayın Yeni Ürünleri',
    description: 'Oriflame kataloglarındaki en yeni ürünleri, makyaj trendlerini ve lansmana özel indirimleri keşfedin. Ücretsiz kayıt olun, yeni ürünlere %20 indirimle sahip olun.'
};

export default function YeniGelenlerPage() {
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "Oriflame yeni ürünleri ne zaman çıkar?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Her ay yenilenen kataloğumuzla birlikte kozmetik, cilt bakımı ve parfüm kategorilerinde yepyeni ürünler satışa sunulur."
                }
            },
            {
                "@type": "Question",
                "name": "Yeni ürünleri denemek için numune alabilir miyim?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Evet, ücretsiz marka ortağı olduğunuzda yeni çıkacak ürünlerin numunelerini önceden çok uygun fiyatlara sipariş edip deneyebilirsiniz."
                }
            },
            {
                "@type": "Question",
                "name": "Yeni lansman ürünlerinde indirim var mı?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yeni ürünler katalogda genellikle lansmana özel indirimlerle yer alır. Üye olduğunuzda bu indirimli fiyat üzerinden anında ekstra %20 geliş fiyatı indirimi daha kazanırsınız."
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
                            <span className="font-bold text-sm tracking-wide uppercase">En Yüksek Trendler</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6 leading-tight">
                            Oriflame Yeni Gelenler: <br className="hidden md:block" />Trendleri İlk Siz Keşfedin
                        </h1>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
                            İsveç'in en yenilikçi güzellik laboratuvarlarından çıkan, doğa ve bilim harikası yeni trendlerle tanışın. Her ay yenilenen o muhteşem lansman rüzgarında, heyecan verici renkler, devrim yaratan cilt bakımı teknolojileri ve baş döndürücü yeni kokular sizi bekliyor!
                        </p>
                    </div>

                    {/* Visual Architecture */}
                    <div className="relative w-full h-[300px] md:h-[450px] rounded-3xl overflow-hidden shadow-2xl mb-16 bg-white">
                        {/* Fallback pattern */}
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-primary/20 flex items-center justify-center animate-pulse">
                        </div>

                        <Image
                            src="/yeni-gelenler.jpg"
                            alt="Oriflame bu ayın yeni gelen kozmetik ürünleri ve lansmanları"
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
                                    Neden Yeni Ürünleri Üye Olarak Almalısınız?
                                </h2>
                                <div className="pl-0 md:pl-14">
                                    <p className="leading-relaxed mb-4">
                                        Oriflame, her yeni çıkan ürün için kataloğunda "Lansmana Özel Muhteşem İndirimler" sunar. Ancak <strong>Marka Ortakları</strong> (üyeler) bu muazzam lansman fırsatlarını bile, liste fiyatının <strong>esktra %20 altında</strong> anında indirimle (geliş fiyatıyla) alırlar.
                                    </p>
                                    <p className="leading-relaxed">
                                        Siz de sezonun en hit makyaj koleksiyonlarına, yüksek teknoloji cilt bakım serumlarına veya yepyeni kokulara, henüz raflardaki yerini yeni almışken komik rakamlara sahip olabilirsiniz.
                                    </p>
                                </div>
                            </div>

                            <div className="mb-8 p-8 bg-purple-50 border border-purple-100 rounded-2xl relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16"></div>

                                <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary mb-6 flex items-center relative z-10">
                                    <span className="bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center mr-4 text-xl flex-shrink-0">2</span>
                                    VIP Deneyim ve Numuneler
                                </h2>
                                <div className="pl-0 md:pl-14 relative z-10">
                                    <p className="leading-relaxed mb-4">
                                        Gerçek bir VIP ayrıcalığı! Üye olarak sadece fırsatları yakalamakla kalmaz, aynı zamanda bir sonraki ayın büyük sürprizlerine de herkesten önce dokunma şansı elde edersiniz.
                                    </p>
                                    <ul className="space-y-4 mt-6">
                                        <li className="flex items-start">
                                            <div className="flex-shrink-0 mt-1.5">
                                                <div className="w-2.5 h-2.5 rounded-full bg-primary/80"></div>
                                            </div>
                                            <span className="ml-3"><strong>Özel Ön Sipariş Numuneleri:</strong> Yeni ayın lansman ürünlerinin numunelerini (parfüm vialleri, ruj testerleri, krem saşeleri) önden çok uygun fiyatlara sepetinize ekleyebilir, ürün çıkmadan onu deneyimlemenin ayrıcalığını yaşarsınız.</span>
                                        </li>
                                        <li className="flex items-start">
                                            <div className="flex-shrink-0 mt-1.5">
                                                <div className="w-2.5 h-2.5 rounded-full bg-primary/80"></div>
                                            </div>
                                            <span className="ml-3"><strong>Lansman Hediyeleri:</strong> Yepyeni koleksiyonların çıkışında sadece üyelere sunulan hediye aksesuarları (örneğin özel tasarım makyaj çantaları) sepetinize anında eklenme garantisindedir.</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </article>

                    {/* CTA Section */}
                    <div className="text-center bg-white rounded-3xl p-10 md:p-14 shadow-2xl relative overflow-hidden border border-gray-100">
                        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>
                        <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-purple-400/10 rounded-full blur-3xl pointer-events-none"></div>

                        <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4 relative z-10">
                            Yenilikleri Kaçırmamak İçin Acele Edin
                        </h2>
                        <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto relative z-10">
                            Trend belirleyici olun! Sadece 2 dakikada ücretsiz formumuzu doldurarak Oriflame dünyasına adım atın ve yepyeni koleksiyonlara %20 indirimle herkesten önce ulaşın.
                        </p>

                        <Link
                            href="/#basvuru"
                            className="group relative z-10 flex items-center justify-center px-8 md:px-12 py-5 text-lg md:text-xl font-bold text-white bg-primary hover:bg-green-700 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 w-full mx-auto max-w-xl"
                        >
                            Yeni Ürünleri %20 İndirimli Almak İçin Ücretsiz Kaydol
                            <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>

                </div>
            </main>
        </>
    );
}
