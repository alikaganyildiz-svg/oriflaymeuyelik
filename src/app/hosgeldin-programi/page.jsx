import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Sparkles, Gift, Star, Award } from 'lucide-react';

export const metadata = {
    title: 'Oriflame Hoşgeldin Programı 2026 | Yeni Üyelere Özel Hediyeler',
    description: 'Oriflame\'e yeni üye olanlara özel Hoşgeldin Programı ile ilk 3 ayınızda harika parfüm, makyaj ve cilt bakım setlerini bedava veya çok özel indirimlerle kazanın.'
};

export default function HosgeldinProgramiPage() {
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "Oriflame Hoşgeldin Programı nedir?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yeni marka ortaklarımıza özel, kayıt oldukları aydan itibaren ilk 3 ay boyunca belirli Başarı Puanı (BP) siparişlerine ulaşarak muhteşem ürün setleri kazandıkları bir hediye kampanyasıdır."
                }
            },
            {
                "@type": "Question",
                "name": "Hoşgeldin Programı (HP) hediyeleri nelerdir?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Her ay değişmekle birlikte genellikle en çok satan parfümler, lüks makyaj setleri veya premium cilt bakım ürünleri hediye edilir."
                }
            },
            {
                "@type": "Question",
                "name": "Programa katılmak zorunlu mu?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Hayır, tamamen isteğe bağlıdır. Ancak yeni üyelerimizin en çok sevdiği ve en çok kazanç sağladığı kampanya olduğu için mutlaka değerlendirmenizi öneririz."
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
                        <div className="inline-flex items-center space-x-2 bg-rose-100 text-rose-600 px-4 py-2 rounded-full mb-6 relative overflow-hidden group">
                            <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                            <Sparkles size={18} />
                            <span className="font-bold text-sm tracking-wide uppercase">YENİ ÜYELERE ÖZEL</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 mb-6 leading-tight">
                            Oriflame Hoşgeldin Programı: <br className="hidden md:block" />İlk 3 Ayınız Hediyelerle Dolu
                        </h1>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
                            Oriflame ailesine yeni katılanları muhteşem bir kutlama bekliyor! Sadece yeni Marka Ortaklarımıza özel olarak hazırlanan Hoşgeldin Programı ile ilk 3 ayınız boyunca en sevilen ikonik Oriflame ürünlerine inanılmaz avantajlarla sahip olun. Sizin için hazırladığımız bu eşsiz serüvene hemen başlayın!
                        </p>
                    </div>

                    {/* Visual Architecture */}
                    <div className="relative w-full h-[350px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl mb-16 bg-white border border-gray-100">
                        {/* Fallback pattern */}
                        <div className="absolute inset-0 bg-gradient-to-br from-rose-50 to-primary/10 flex items-center justify-center animate-pulse">
                        </div>

                        <Image
                            src="https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&q=80&w=2000"
                            alt="Oriflame Hoşgeldin Programı yeni üye hediyeleri"
                            fill
                            className="object-cover relative z-10"
                            priority
                        />
                        {/* Gradient Overlay for a more premium feel */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 directly to-transparent z-10 pointer-events-none"></div>
                    </div>

                    {/* Content Sections */}
                    <article className="mb-20">
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-center text-gray-900 mb-12">
                            3 Adımda Muhteşem Kazanç
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {/* Card HP 1 */}
                            <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-rose-50 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-150 duration-500"></div>
                                <div className="w-16 h-16 bg-rose-100 rounded-2xl flex items-center justify-center mb-6 relative z-10">
                                    <span className="text-rose-600 font-black text-2xl font-serif">1</span>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4 relative z-10 flex items-center gap-2">
                                    1. Ay <span className="text-sm font-normal text-gray-500 bg-gray-100 px-2 py-1 rounded-md">HP1</span>
                                </h3>
                                <p className="text-gray-600 relative z-10 leading-relaxed">
                                    Kayıt olduğunuz ilk ay yapacağınız belirli puanlık (BP) alışverişin ardından muhteşem bir hoşgeldin hediyesini sepetinize ekleyebileceksiniz. İlk adımı atın ve sürpriz ürünü keşfedin!
                                </p>
                            </div>

                            {/* Card HP 2 */}
                            <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-150 duration-500"></div>
                                <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mb-6 relative z-10">
                                    <span className="text-primary font-black text-2xl font-serif">2</span>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4 relative z-10 flex items-center gap-2">
                                    2. Ay <span className="text-sm font-normal text-gray-500 bg-gray-100 px-2 py-1 rounded-md">HP2</span>
                                </h3>
                                <p className="text-gray-600 relative z-10 leading-relaxed">
                                    Başarınızı katlayın! İkinci ayınızda da belirlediğimiz puan hedefine ulaştığınızda, kazancınızı ve heyecanınızı artıracak çok daha yüksek değere sahip ürün setleri sizi bekliyor.
                                </p>
                            </div>

                            {/* Card HP 3 */}
                            <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-rose-400 border-2 relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-150 duration-500 z-0"></div>
                                <div className="w-16 h-16 bg-gradient-to-br from-rose-400 to-rose-600 text-white rounded-2xl flex items-center justify-center mb-6 relative z-10 shadow-lg">
                                    <Gift className="w-8 h-8" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4 relative z-10 flex items-center gap-2">
                                    3. Ay <span className="text-sm font-normal text-gray-500 bg-gray-100 px-2 py-1 rounded-md">HP3</span>
                                </h3>
                                <p className="text-gray-600 relative z-10 leading-relaxed">
                                    Final adımı! 3 ay boyunca gösterdiğiniz istikrarın ödülü olarak programın en prestijli, premium bakım serilerini veya tasarım aksesuarlarını sembolik rakamlara almanın ayrıcalığını yaşayın.
                                </p>
                            </div>
                        </div>
                        <p className="text-center text-sm text-gray-500 mt-6 max-w-2xl mx-auto italic">
                            *Hoşgeldin Programı (HP) kampanyalarındaki ürün setleri, puan şartları ve kazançlı paketler firmamız tarafından her ay yenilenmektedir.
                        </p>
                    </article>

                    {/* Limits Section */}
                    <div className="mb-16 p-8 md:p-12 bg-white border border-rose-100 rounded-3xl relative overflow-hidden shadow-lg">
                        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-rose-400 via-primary to-rose-400"></div>

                        <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
                            <div className="w-24 h-24 bg-rose-50 rounded-full flex items-center justify-center flex-shrink-0">
                                <Star className="w-12 h-12 text-rose-500" fill="currentColor" />
                            </div>
                            <div>
                                <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">
                                    Sadece İlk Kez Kayıt Olanlara Özel!
                                </h2>
                                <p className="text-lg text-gray-700 leading-relaxed">
                                    Bu eşsiz fırsattan sadece ailemize ilk defa katılan Marka Ortakları yararlanabilir. İlk 3 ayınızı bir daha geri dönmemek üzere geride bırakmadan önce, en sevilen setleri evinizin başköşesine taşımak için bu hediyeleri kaçırmayın!
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* CTA Section */}
                    <div className="text-center bg-white rounded-3xl p-10 md:p-14 shadow-2xl relative overflow-hidden border border-gray-100">
                        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>
                        <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-64 h-64 bg-rose-400/10 rounded-full blur-3xl pointer-events-none"></div>

                        <Award className="w-16 h-16 mx-auto text-rose-500 mb-6 relative z-10" />
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6 relative z-10">
                            Hediyeler Sizi Bekliyor!
                        </h2>
                        <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto relative z-10">
                            Bugün ücretsiz kaydınızı oluşturun, 3 ay sürecek bu harika ayrıcalığa adım atarak kendinizi ödüllendirmeye hemen başlayın.
                        </p>

                        <Link
                            href="/#basvuru"
                            className="group relative z-10 flex items-center justify-center px-8 md:px-12 py-5 text-lg md:text-xl font-bold text-white bg-primary hover:bg-green-700 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 w-full mx-auto max-w-xl"
                        >
                            Hoşgeldin Hediyelerini Kazanmak İçin Hemen Ücretsiz Kaydol
                            <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>

                </div>
            </main>
        </>
    );
}
