import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';

export const metadata = {
    title: 'Oriflame Parfüm İndirimleri 2026 | Kadın ve Erkek Parfümleri',
    description: 'Dünyaca ünlü parfümörlerin imzasını taşıyan kalıcı Oriflame kadın ve erkek parfümlerini keşfedin. Ücretsiz üye olarak favori kokunuzu %20 indirimle alın.'
};

export default function ParfumIndirimleriPage() {
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "Oriflame parfümleri kalıcı mı?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Evet, Oriflame parfümleri dünyaca ünlü uzman parfümörler tarafından Fransa'da tasarlanır ve yüksek esans oranlarıyla gün boyu kalıcılık sağlar."
                }
            },
            {
                "@type": "Question",
                "name": "En iyi Oriflame kadın parfümü hangisi?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Giordani Gold, Possess, Divine, Eclat gibi çok sevilen ve imza niteliği taşıyan ödüllü parfümlerimiz bulunmaktadır."
                }
            },
            {
                "@type": "Question",
                "name": "Parfümleri nasıl daha ucuza alabilirim?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Sitemiz üzerinden ücretsiz marka ortağı kaydınızı yaparak tüm parfümleri anında %20 indirimli geliş fiyatıyla satın alabilirsiniz."
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
                            <span className="font-bold text-sm tracking-wide uppercase">İmza Kokunuzu Keşfedin</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6 leading-tight">
                            Oriflame Parfüm İndirimleri: <br className="hidden md:block" />İmza Kokunuzu Bulun
                        </h1>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
                            Oriflame, Fransa'nın usta burunlarıyla (parfümörleriyle) çalışarak her damlasında ayrı bir hikaye ve karakter barındıran eşsiz kokular tasarlar. Zarif, etkileyici ve unutulmaz bir iz bırakmak için size en uygun parfümü keşfetme zamanı.
                        </p>
                    </div>

                    {/* Visual Architecture */}
                    <div className="relative w-full h-[300px] md:h-[450px] rounded-3xl overflow-hidden shadow-2xl mb-16 bg-white">
                        {/* Fallback pattern */}
                        <div className="absolute inset-0 bg-gradient-to-br from-amber-50 to-primary/20 flex items-center justify-center animate-pulse">
                        </div>

                        <Image
                            src="/parfum-indirimleri.jpg"
                            alt="Oriflame kalıcı kadın ve erkek parfüm indirimleri"
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
                                    Kalıcılığın Sırrı
                                </h2>
                                <div className="pl-0 md:pl-14">
                                    <p className="leading-relaxed mb-4">
                                        Oriflame parfümlerinin uzun süren etkisinin sırrı, yüksek kaliteli esanslar ve İsveç standartlarında üretilen formülleridir. Özellikle <strong>Eau de Parfum (EDP)</strong> ve <strong>Parfum</strong> konsantrasyonları, cildinizle bütünleşerek gün boyu süren zengin bir koku deneyimi sunar.
                                    </p>
                                    <p className="leading-relaxed">
                                        Üst, orta ve alt notaların ustalıkla harmanlandığı parfümlerimiz, teninizde saatler geçtikçe farklı ve büyüleyici karakterlerini ortaya çıkarmaya devam eder.
                                    </p>
                                </div>
                            </div>

                            <div className="mb-8 p-8 bg-amber-50 border border-amber-100 rounded-2xl relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16"></div>

                                <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary mb-6 flex items-center relative z-10">
                                    <span className="bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center mr-4 text-xl flex-shrink-0">2</span>
                                    Parfümleri Üye Fiyatıyla Alın
                                </h2>
                                <div className="pl-0 md:pl-14 relative z-10">
                                    <p className="leading-relaxed mb-4">
                                        Dünya standartlarında, ödüllü bir parfüme mağaza fiyatlarının çok daha altında sahip olabilirsiniz. İşin sırrı <strong>Oriflame Marka Ortağı</strong> olmaktan geçiyor.
                                    </p>
                                    <ul className="space-y-4 mt-6">
                                        <li className="flex items-start">
                                            <div className="flex-shrink-0 mt-1.5">
                                                <div className="w-2.5 h-2.5 rounded-full bg-primary/80"></div>
                                            </div>
                                            <span className="ml-3"><strong>%20 Anında İndirim:</strong> Ücretsiz üye olduğunuz andan itibaren tüm parfümleri anında %20 indirimli geliş fiyatıyla alırsınız.</span>
                                        </li>
                                        <li className="flex items-start">
                                            <div className="flex-shrink-0 mt-1.5">
                                                <div className="w-2.5 h-2.5 rounded-full bg-primary/80"></div>
                                            </div>
                                            <span className="ml-3"><strong>Parfüm Hediyeli Hoşgeldin Programı:</strong> Yeni üyelere özel Hoşgeldin Programı ile en sevilen parfümlere hediye olarak veya inanılmaz fiyatlarla sahip olabilirsiniz.</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </article>

                    {/* CTA Section */}
                    <div className="text-center bg-white rounded-3xl p-10 md:p-14 shadow-2xl relative overflow-hidden border border-gray-100">
                        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>
                        <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-amber-400/10 rounded-full blur-3xl pointer-events-none"></div>

                        <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4 relative z-10">
                            Kendi Hikayenizi Kokunuzla Anlatın
                        </h2>
                        <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto relative z-10">
                            Imza kokunuzu bulmak ve %20 indirim avantajından hemen faydalanmak için adım atın. Ücretsiz marka ortağı formunu doldurarak fırsatlar dünyasına katılın!
                        </p>

                        <Link
                            href="/#basvuru"
                            className="group relative z-10 flex items-center justify-center px-8 md:px-12 py-5 text-lg md:text-xl font-bold text-white bg-primary hover:bg-green-700 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 w-full mx-auto max-w-xl"
                        >
                            Favori Parfümünü %20 İndirimli Almak İçin Kaydol
                            <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>

                </div>
            </main>
        </>
    );
}
