import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Star, Quote, Award } from 'lucide-react';

export const metadata = {
    title: 'Oriflame Başarı Hikayeleri 2026 | İlham Veren Liderler',
    description: 'Oriflame ile sıfırdan kendi işini kuran, hayallerine ulaşan girişimcilerin, ev hanımlarının ve öğrencilerin gerçek başarı hikayelerini okuyun.'
};

export default function BasariHikayeleriPage() {
    const successStories = [
        {
            name: "Ayşe Y.",
            title: "Altın Direktör",
            persona: "Ev Hanımı",
            quote: "Sadece kendi parfümlerimi ve makyaj ürünlerimi geliş fiyatına, ucuza almak için sisteme dahil olmuştum. Bugün Oriflame sayesinde hem ev ekonomisine devasa bir katkı sağlıyor hem de yönettiğim ekibimle dünyanın birçok ülkesini ücretsiz geziyorum. Hayallerin sınırı yok!",
            img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400",
        },
        {
            name: "Burcu K.",
            title: "Kıdemli Direktör",
            persona: "Kurumsal Çalışan",
            quote: "Sabah 9 akşam 6 döngüsünde masa başında tükeniyordum. Ek gelir arayışıyla başladığım bu serüven, asıl işimi bırakmamı sağlayacak büyük bir kazanç kapısı oldu. Artık kendi çalışma saatlerimi belirliyor, kendi hayatımın patronu olarak işimi büyütüyorum.",
            img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400",
        },
        {
            name: "Zeynep M.",
            title: "Marka Ortağı & Lider",
            persona: "Üniversite Öğrencisi",
            quote: "Öğrenci harçlığımı çıkarmak için sermayesiz olduğu için üye oldum. Satış yaptıkça, kataloğu çevreme gösterdikçe inanamayacağım primler kazandım. Şimdi kendi okul masraflarımı karşılıyor, yaşıtlarımdan çok daha erken maddi özgürlüğümü ilan etmenin gururunu yaşıyorum.",
            img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400",
        }
    ];

    const itemListSchema = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": "Oriflame Başarı Hikayeleri",
        "description": "Oriflame ile hayatı değişenlerin ilham veren hikayeleri.",
        "itemListElement": successStories.map((story, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "item": {
                "@type": "Person",
                "name": story.name,
                "jobTitle": story.title,
                "description": story.quote
            }
        }))
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
            />

            <main className="min-h-screen bg-gray-50 pb-20 pt-10">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

                    {/* Header */}
                    <div className="text-center mb-10">
                        <div className="inline-flex items-center space-x-2 bg-pink-100 text-pink-700 px-4 py-2 rounded-full mb-6 relative overflow-hidden">
                            <Award size={18} />
                            <span className="font-bold text-sm tracking-wide uppercase">İlham Veren Liderler</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 mb-6 leading-tight">
                            Başarı Hikayeleri: <br className="hidden md:block" />Sizin Hikayeniz Hangisi Olacak?
                        </h1>
                        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
                            Oriflame sadece bir güzellik ve kozmetik markası değil, aynı zamanda hayatları baştan aşağı değiştiren global bir kadın girişimcilik hareketidir. Sıfır sermaye ile başlayıp hayallerine dokunan, kendi işinin patronu olan gerçek insanların gerçek hikayelerini keşfedin.
                        </p>
                    </div>

                    {/* Hero Image */}
                    <div className="relative w-full h-[300px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl mb-20 bg-white">
                        <div className="absolute inset-0 bg-gradient-to-br from-pink-50 to-primary/20 flex items-center justify-center animate-pulse"></div>
                        <Image
                            src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=2000"
                            alt="Oriflame liderleri başarı ve kutlama sahneleri"
                            fill
                            className="object-cover relative z-10"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-gray-900/20 to-transparent z-10 flex flex-col justify-end p-8 md:p-12">
                            <span className="text-white text-lg md:text-xl font-medium flex items-center">
                                <Star className="w-5 h-5 text-yellow-400 mr-2 fill-current" />
                                Hayallerin Gerçeğe Dönüştüğü O An
                            </span>
                        </div>
                    </div>

                    {/* Story Cards (Grid Layout) */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 mb-20">
                        {successStories.map((story, idx) => (
                            <div key={idx} className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 relative group hover:-translate-y-2 transition-transform duration-300">

                                <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 group-hover:text-primary transition-all duration-300">
                                    <Quote size={80} />
                                </div>

                                <div className="relative w-24 h-24 mb-6 rounded-full border-4 border-primary/20 p-1 mx-auto group-hover:border-primary/50 transition-colors duration-300">
                                    <div className="w-full h-full rounded-full overflow-hidden relative">
                                        <Image
                                            src={story.img}
                                            alt={story.name}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div className="absolute -bottom-2 -right-2 bg-white rounded-full p-1.5 shadow-md border border-gray-100">
                                        <Award className="w-5 h-5 text-yellow-500" />
                                    </div>
                                </div>

                                <div className="text-center mb-6">
                                    <h3 className="text-2xl font-serif font-bold text-gray-900">{story.name}</h3>
                                    <p className="text-primary font-medium">{story.title}</p>
                                    <span className="inline-block px-3 py-1 bg-gray-100 text-gray-500 rounded-full text-xs font-semibold mt-2 uppercase tracking-wide">
                                        — {story.persona} —
                                    </span>
                                </div>

                                <div className="relative z-10">
                                    <p className="text-gray-600 leading-relaxed text-center italic">
                                        "{story.quote}"
                                    </p>
                                </div>

                            </div>
                        ))}
                    </div>

                    {/* CTA Section */}
                    <div className="text-center bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-3xl p-10 md:p-16 shadow-2xl relative overflow-hidden border border-gray-800">
                        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-pink-500 via-purple-500 to-primary"></div>
                        <div className="absolute bottom-0 right-0 -mb-24 -mr-24 w-72 h-72 bg-primary/20 rounded-full blur-3xl pointer-events-none"></div>

                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white mb-6 relative z-10 leading-tight">
                            Sıradaki Başarı Hikayesi <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-primary">Siz Olun!</span>
                        </h2>
                        <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto relative z-10">
                            Sermayeye veya deneyime ihtiyacınız yok. İhtiyacınız olan tek şey hayallerinize inanmak. İlk adımı bugün atın, harika bir mentorlükle kendi işinizi inşa etmeye başlayalım.
                        </p>

                        <Link
                            href="/#basvuru"
                            className="group relative z-10 flex items-center justify-center px-6 py-4 md:px-10 md:py-6 text-lg md:text-xl font-bold text-gray-900 bg-white hover:bg-gray-100 rounded-full shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] transition-all duration-300 transform hover:-translate-y-1 w-full mx-auto max-w-2xl text-center leading-snug"
                        >
                            Kendi Başarı Hikayenizi Yazmak İçin Şimdi Ücretsiz Başlayın
                            <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 shrink-0 transition-transform" />
                        </Link>
                    </div>

                </div>
            </main>
        </>
    );
}
