import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Gift, CheckCircle, Star } from 'lucide-react';

export const metadata = {
    title: 'Oriflame Hoşgeldin Programı 2026 | Yeni Üye Hediyeleri',
    description: 'Oriflame 2026 Hoşgeldin Programı (HP) ile ilk 3 ayınızda kazanacağınız muhteşem parfüm ve kozmetik hediyelerini hemen keşfedin.'
};

export default function OriflameHosgeldinProgrami2026Page() {
    const articleSchema = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Oriflame Hoşgeldin Programı 2026: İlk 3 Ay Hediyeleri",
        "description": "Oriflame 2026 Hoşgeldin Programı (HP) ile ilk 3 ayınızda kazanacağınız muhteşem parfüm ve kozmetik hediyelerini keşfedin.",
        "image": "https://oriflaymeuyelik.com/hosgeldin-programi-hediyeleri.jpg", // Temsili URL
        "author": {
            "@type": "Person",
            "name": "Oriflame Bağımsız Marka Ortağı"
        },
        "publisher": {
            "@type": "Organization",
            "name": "Oriflame Üyelik",
            "logo": {
                "@type": "ImageObject",
                "url": "https://oriflaymeuyelik.com/logo.png"
            }
        },
        "datePublished": "2026-03-04T09:00:00+03:00",
        "dateModified": "2026-03-04T09:00:00+03:00"
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
            />

            <main className="min-h-screen bg-gray-50 pb-20 pt-10">
                <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

                    {/* Article Header */}
                    <header className="mb-10 text-center">
                        <div className="inline-flex items-center space-x-2 bg-pink-100 text-pink-700 px-4 py-2 rounded-full mb-6 relative overflow-hidden group">
                            <Gift size={16} />
                            <span className="font-bold text-xs tracking-wide uppercase">Yeni Üye Kampanyası</span>
                        </div>

                        <h1 className="text-3xl md:text-5xl font-serif font-bold text-gray-900 mb-6 leading-tight">
                            Oriflame Hoşgeldin Programı 2026: İlk 3 Ay Hediyeleri
                        </h1>

                        <div className="flex items-center justify-center space-x-4 text-sm text-gray-500 mb-8">
                            <span>Yazan: Bağımsız Marka Ortağı</span>
                            <span>•</span>
                            <span>Yayınlanma: Mart 2026</span>
                        </div>

                        {/* Hero Image */}
                        <div className="relative w-full h-[300px] md:h-[450px] rounded-3xl overflow-hidden shadow-2xl bg-white mb-10">
                            <div className="absolute inset-0 bg-gradient-to-br from-pink-50 to-primary/20 flex items-center justify-center animate-pulse">
                                <Gift className="w-16 h-16 text-pink-200" />
                            </div>
                            <Image
                                src="https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&q=80&w=2000"
                                alt="Oriflame 2026 Hoşgeldin Programı Hediyeleri"
                                fill
                                className="object-cover relative z-10"
                                priority
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10 pointer-events-none"></div>
                        </div>
                    </header>

                    {/* Article Content */}
                    <div className="prose prose-lg prose-pink max-w-none text-gray-700 leading-relaxed bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100 mb-12">

                        <p className="text-xl text-gray-800 font-medium mb-8">
                            Oriflame ailesine yeni katılanları harika sürprizler bekliyor! Eğer siz de yeni üye olmayı düşünüyorsanız veya henüz kayıt olduysanız, <strong>Oriflame 2026 Hoşgeldin Programı</strong> ile muhteşem bir başlangıç yapabilirsiniz. Bu kampanya, yeni marka ortaklarına özel olarak tasarlanmış olup, ilk üç ayınız boyunca birbirinden değerli parfüm ve kozmetik ürünlerine inanılmaz avantajlarla sahip olmanızı sağlar.
                        </p>

                        <h2 className="text-2xl font-serif font-bold text-gray-900 mt-10 mb-4 border-b border-gray-100 pb-2 flex items-center">
                            <Star className="w-6 h-6 text-yellow-500 mr-2" />
                            Hoşgeldin Programı (HP) Nedir?
                        </h2>
                        <p>
                            Hoşgeldin Programı (kısaca HP), Oriflame'e yeni katılan marka ortaklarını motive etmek ve en sevilen ürünleri denemelerini sağlamak için hazırlanan 3 aylık bir ödül sistemidir. Sistemin işleyişi son derece basittir: Kayıt olduğunuz aydan itibaren, ardışık 3 ay boyunca kataloğumuzdan ihtiyaçlarınızı karşılarken belirli bir sipariş puanına (BP - Başarı Puanı) ulaştığınızda, o ayın özel hediye setini kazanmaya hak kazanırsınız.
                        </p>
                        <p className="mt-4">
                            Her ay sadece 100 BP ile 125 BP arasında (dönemin kampanya şartlarına göre değişebilir) sipariş vererek, normal değeri yüzlerce hatta binlerce lira olan lüks Oriflame ürünlerini çok cüzi bir fiyata veya tamamen ücretsiz (kampanya dinamiklerine bağlı olarak) alabilirsiniz.
                        </p>

                        <div className="my-10 space-y-8">
                            {/* HP1 */}
                            <div className="bg-pink-50 rounded-2xl p-6 border border-pink-100 relative overflow-hidden group hover:shadow-md transition-shadow">
                                <div className="absolute top-0 right-0 w-24 h-24 bg-white/40 rounded-full -mr-10 -mt-10"></div>
                                <h3 className="text-xl font-bold text-pink-800 mb-3 flex items-center relative z-10">
                                    <CheckCircle className="w-5 h-5 mr-2" />
                                    1. Ay (HP1): İlk Adım, İlk Heyecan
                                </h3>
                                <p className="text-pink-900/80 relative z-10">
                                    Kayıt olduğunuz ilk ay içerisinde gerekli BP limitine ulaştığınızda, Oriflame'in en popüler ve günlük kullanıma uygun harika ürünlerinden oluşan birinci adım hediyenizi kazanırsınız. Bu genellikle efsanevi boyutlara ulaşmış bir maskara, lüks bir ruj veya cildinizi yenileyecek ikonik bir cilt bakım ürünü olabilir.
                                </p>
                            </div>

                            {/* HP2 */}
                            <div className="bg-purple-50 rounded-2xl p-6 border border-purple-100 relative overflow-hidden group hover:shadow-md transition-shadow">
                                <div className="absolute top-0 right-0 w-24 h-24 bg-white/40 rounded-full -mr-10 -mt-10"></div>
                                <h3 className="text-xl font-bold text-purple-800 mb-3 flex items-center relative z-10">
                                    <CheckCircle className="w-5 h-5 mr-2" />
                                    2. Ay (HP2): Değer Katlanıyor
                                </h3>
                                <p className="text-purple-900/80 relative z-10">
                                    İkinci ayınızda da düzenli sipariş vererek BP şartını yerine getirdiğinizde, ikinci adım hediyenizi sepete eklersiniz. Bu aşamada hediye setinin değeri ciddi oranda artar! Muhteşem kokusuyla büyüleyen bir kadın/erkek parfümü veya NovAge gibi premium serilerden çok özel bakım ürünleri sizi bekliyor olacak.
                                </p>
                            </div>

                            {/* HP3 */}
                            <div className="bg-emerald-50 rounded-2xl p-6 border border-emerald-100 relative overflow-hidden group hover:shadow-md transition-shadow">
                                <div className="absolute top-0 right-0 w-24 h-24 bg-white/40 rounded-full -mr-10 -mt-10"></div>
                                <h3 className="text-xl font-bold text-emerald-800 mb-3 flex items-center relative z-10">
                                    <CheckCircle className="w-5 h-5 mr-2" />
                                    3. Ay (HP3): En Lüks Kapanış
                                </h3>
                                <p className="text-emerald-900/80 relative z-10">
                                    Üçüncü ve son adımda ise sabrınızın ve başarınızın ödülü olarak programın en değerli hediyesini kazanırsınız! Genellikle Giordani Gold gibi en lüks makyaj serilerimiz, yüksek kalıcılıktaki en pahalı parfümlerimiz veya tam donanımlı wellness takviyelerimiz bu son adımda sizin olur.
                                </p>
                            </div>
                        </div>

                        <p className="font-semibold text-gray-800 bg-gray-50 p-4 border-l-4 border-primary rounded-r-lg">
                            Unutmayın: Hoşgeldin Programı adımlarını kesintisiz olarak her ay takip etmeniz gerekmektedir. Bir ayı kaçırdığınızda veya BP hedefine ulaşamadığınızda programdan yararlanma hakkınız sona erer. Bu yüzden ilk 3 ay çok değerlidir!
                        </p>

                    </div>

                    {/* CTA Section */}
                    <div className="text-center bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-3xl p-10 md:p-14 shadow-2xl relative overflow-hidden border border-gray-800">
                        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-pink-500 via-purple-500 to-primary"></div>
                        <div className="absolute bottom-0 right-0 -mb-20 -mr-20 w-64 h-64 bg-primary/20 rounded-full blur-3xl pointer-events-none"></div>

                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6 relative z-10 leading-tight">
                            Bu Muhteşem Hediyeleri Kaçırmayın!
                        </h2>
                        <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto relative z-10">
                            Siz de bugün ücretsiz kaydınızı oluşturun, %20 indirimle alışveriş yaparken birbirinden lüks hediyelerin tadını çıkarın. Sadece birkaç dakikanızı ayırarak ilk adımınızı atın.
                        </p>

                        <Link
                            href="/#basvuru"
                            className="group relative z-10 flex items-center justify-center px-6 py-4 md:px-10 md:py-5 text-lg md:text-xl font-bold text-gray-900 bg-white hover:bg-gray-100 rounded-full shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] transition-all duration-300 transform hover:-translate-y-1 w-full mx-auto max-w-2xl text-center leading-snug"
                        >
                            Hediyeleri Kazanmak İçin Hemen Ücretsiz Kaydol
                            <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 shrink-0 transition-transform" />
                        </Link>
                    </div>

                </article>
            </main>
        </>
    );
}
