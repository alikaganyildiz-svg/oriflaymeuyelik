import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Sparkles, ShoppingBag, Users, DollarSign } from 'lucide-react';

export const metadata = {
    title: 'Oriflame Kazanç Planı 2026 | Ek Gelir ve Kariyer Fırsatı',
    description: 'Oriflame ile nasıl para kazanılır? Anında satış kârı, aylık başarı primleri, dolar ödülleri ve yurtdışı seyahatleriyle dolu kazanç planımızı inceleyin.'
};

export default function KazancPlaniPage() {
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "Oriflame'den nasıl para kazanılır?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Üç farklı şekilde kazanabilirsiniz: Kendi ihtiyaçlarınızı %20 indirimli alarak tasarruf edersiniz, çevrenize ürün satarak %30 anında kâr elde edersiniz ve kendi ekibinizi kurarak şirketten aylık performans primi (maaş gibi) alırsınız."
                }
            },
            {
                "@type": "Question",
                "name": "Ekip kurmak zorunlu mu?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Hayır, sadece kendi alışverişiniz veya satış yapmak için de üye olabilirsiniz. Ancak yüksek ve düzenli gelir hedefliyorsanız ekip kurmak en kârlı yoldur."
                }
            },
            {
                "@type": "Question",
                "name": "Kazancın bir sınırı var mı?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Oriflame'de kazancınızı kendi eforunuz belirler, herhangi bir üst kazanç sınırı yoktur."
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
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

                    {/* Header */}
                    <div className="text-center mb-10">
                        <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
                            <Sparkles size={18} />
                            <span className="font-bold text-sm tracking-wide uppercase">Kariyer Fırsatı</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 mb-6 leading-tight">
                            Oriflame Kazanç Planı: <br className="hidden md:block" />Hayallerinize Giden Yol
                        </h1>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
                            Oriflame sadece dünya standartlarında bir İsveç güzellik markası değil, aynı zamanda hayallerini gerçeğe dönüştürmek isteyen herkes için risksiz ve sermayesiz bir iş modelidir. Sınırsız gelirin, prestijli unvanların ve dünyayı gezme fırsatının kapılarını aralayın.
                        </p>
                    </div>

                    {/* Visual Architecture */}
                    <div className="relative w-full h-[350px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl mb-16 bg-white border border-gray-100">
                        {/* Fallback pattern */}
                        <div className="absolute inset-0 bg-gradient-to-br from-yellow-50 to-primary/20 flex items-center justify-center animate-pulse">
                        </div>

                        <Image
                            src="/kazanc-plani.jpg"
                            alt="Oriflame kazanç planı ve başarı basamakları"
                            fill
                            className="object-cover relative z-10"
                            priority
                        />
                        {/* Gradient Overlay for a more premium feel */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 directly to-transparent z-10 pointer-events-none"></div>
                    </div>

                    {/* Content Sections */}
                    <article className="mb-20">
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-center text-gray-900 mb-12">
                            Kazanmanın 3 Yolu
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {/* Card 1 */}
                            <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-green-50 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-150 duration-500"></div>
                                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 relative z-10">
                                    <ShoppingBag className="w-8 h-8 text-primary" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4 relative z-10">
                                    1. Harcarken Kazan
                                </h3>
                                <p className="text-gray-600 relative z-10">
                                    Tüm Oriflame ürünlerini katalog satış fiyatı üzerinden direkt olarak <strong>%20 geliş fiyatı indirimiyle</strong> satın alırsınız. Temel ihtiyaçlarınızı alırken bile tasarruf ederek kazanç sağlarsınız.
                                </p>
                            </div>

                            {/* Card 2 */}
                            <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-50 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-150 duration-500"></div>
                                <div className="w-16 h-16 bg-yellow-100 rounded-2xl flex items-center justify-center mb-6 relative z-10">
                                    <DollarSign className="w-8 h-8 text-yellow-600" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4 relative z-10">
                                    2. Satarken Kazan
                                </h3>
                                <p className="text-gray-600 relative z-10">
                                    Üye geliş fiyatıyla aldığınız ürünleri çevrenize katalog fiyatından sunarak aradaki <strong>%30 farkı anında satış kârı (sıcak para)</strong> olarak kazanırsınız. Kâr marjınız size günlük nakit akışı sağlar.
                                </p>
                            </div>

                            {/* Card 3 */}
                            <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-primary/20 border-2 relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-150 duration-500"></div>
                                <div className="w-16 h-16 bg-primary text-white rounded-2xl flex items-center justify-center mb-6 relative z-10 shadow-lg">
                                    <Users className="w-8 h-8" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4 relative z-10">
                                    3. Ekip Kurarak Kazan
                                </h3>
                                <p className="text-gray-600 relative z-10">
                                    En büyük ve kalıcı gelir kapısıdır. Başkalarını Oriflame'e davet edip kendi ekibinizi büyüterek şirketin cirosundan <strong>her ay düzenli performans primi</strong> (maaş gibi) kazanırsınız.
                                </p>
                            </div>
                        </div>
                    </article>

                    {/* Limits Section */}
                    <div className="mb-16 p-8 md:p-12 bg-gradient-to-br from-yellow-50 via-white to-green-50 border border-yellow-100 rounded-3xl relative overflow-hidden shadow-lg">

                        <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6 relative z-10 text-center md:text-left">
                            Sınırları Siz Belirleyin
                        </h2>
                        <div className="prose prose-lg max-w-none text-gray-700 relative z-10">
                            <p className="leading-relaxed">
                                Oriflame'de başarı merdivenlerini tırmandıkça sadece aylık prim geliriniz artmakla kalmaz. <strong>Direktörlük</strong> unvanlarına ulaştığınız andan itibaren hayatınızı değiştirecek ödüllerle karşılaşırsınız:
                            </p>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 list-none pl-0">
                                <li className="flex items-center bg-white p-4 rounded-xl shadow-sm">
                                    <div className="w-2 h-2 rounded-full bg-primary mr-3"></div>
                                    <span>Binlerce dolar değerinde <strong>nakit ödüller</strong></span>
                                </li>
                                <li className="flex items-center bg-white p-4 rounded-xl shadow-sm">
                                    <div className="w-2 h-2 rounded-full bg-primary mr-3"></div>
                                    <span>Uluslararası <strong>ücretsiz 5 yıldızlı tatiller</strong> (Konferanslar)</span>
                                </li>
                                <li className="flex items-center bg-white p-4 rounded-xl shadow-sm">
                                    <div className="w-2 h-2 rounded-full bg-primary mr-3"></div>
                                    <span>Özel etkinliklere ve <strong>gala yemeklerine</strong> katılım</span>
                                </li>
                                <li className="flex items-center bg-white p-4 rounded-xl shadow-sm">
                                    <div className="w-2 h-2 rounded-full bg-primary mr-3"></div>
                                    <span>Tamamen size ait, devredilebilir bir <strong>uluslararası iş</strong></span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* CTA Section */}
                    <div className="text-center bg-white rounded-3xl p-10 md:p-14 shadow-2xl relative overflow-hidden border border-gray-100">
                        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>
                        <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-64 h-64 bg-yellow-400/10 rounded-full blur-3xl pointer-events-none"></div>

                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6 relative z-10">
                            Maaşınızı Kendiniz Belirlemeye Hazır mısınız?
                        </h2>
                        <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto relative z-10">
                            Risk yok, sermaye yok, sadece sınırsız fırsatlar var. Bugün ilk adımı atın, hayallerinizdeki kariyere giden yolda liderlerimizden destek alarak kendi işinizin patronu olun!
                        </p>

                        <Link
                            href="/#basvuru"
                            className="group relative z-10 flex items-center justify-center px-8 md:px-12 py-5 text-lg md:text-xl font-bold text-white bg-primary hover:bg-green-700 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 w-full mx-auto max-w-xl"
                        >
                            Kendi İşinizi Kurmak İçin Hemen Ücretsiz Başlayın
                            <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>

                </div>
            </main>
        </>
    );
}
