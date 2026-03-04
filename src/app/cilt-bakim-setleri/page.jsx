import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';

export const metadata = {
    title: 'Oriflame Cilt Bakım Setleri | NovAge ve Optimals İndirimleri',
    description: 'Oriflame cilt bakım setleri ile İsveç bilimini cildinizde hissedin. NovAge ve Optimals serilerini %20 üye indirimiyle almak için hemen ücretsiz kayıt olun.'
};

export default function CiltBakimSetleriPage() {
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "Hangi Oriflame cilt bakım seti bana uygun?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yaşınıza ve cilt endişenize (leke, kırışıklık, sarkma) göre özel olarak geliştirilmiş NovAge ve Optimals serilerinden size en uygun olanı seçebilirsiniz."
                }
            },
            {
                "@type": "Question",
                "name": "Cilt bakım setlerini nasıl indirimli alabilirim?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Sitemizden ücretsiz marka ortağı kaydınızı oluşturarak tüm setleri anında %20 indirimli geliş fiyatıyla alabilirsiniz."
                }
            },
            {
                "@type": "Question",
                "name": "NovAge setleri ne kadar süre kullanılır?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Düzenli kullanımda bir NovAge seti ortalama 3-4 ay boyunca cildinizin tüm günlük bakım ihtiyacını karşılar."
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
                            <span className="font-bold text-sm tracking-wide uppercase">Cilt Bakımı Uzmanlığı</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6 leading-tight">
                            Oriflame Cilt Bakım Setleri: <br className="hidden md:block" />İsveç Bilimiyle Gelen Güzellik
                        </h1>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
                            Oriflame'in cilt bakımındaki uzmanlığı, doğal özler ve bilimsel araştırmalarla geliştirilen patentli teknolojilerden gücünü alıyor. Sizi en iyi versiyonunuza ulaştıracak formüllerle tanışın.
                        </p>
                    </div>

                    {/* Visual Architecture */}
                    <div className="relative w-full h-[300px] md:h-[450px] rounded-3xl overflow-hidden shadow-2xl mb-16 bg-white">
                        {/* Fallback pattern */}
                        <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-primary/20 flex items-center justify-center animate-pulse">
                        </div>

                        <Image
                            src="/cilt-bakim-setleri.jpg"
                            alt="Oriflame NovAge ve Optimals Cilt Bakım Setleri"
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
                                    Neden Set Olarak Almalısınız?
                                </h2>
                                <div className="pl-0 md:pl-14">
                                    <p className="leading-relaxed mb-4">
                                        Araştırmalara ve klinik testlere göre, ürünleri tek tek almak yerine 4 adımlı cilt bakım rutini (temizleyici, göz kremi, serum ve nemlendirici) olarak set halinde kullanmak <strong>7 kata kadar daha etkili</strong> sonuçlar vermektedir.
                                    </p>
                                    <p className="leading-relaxed">
                                        Set içerisindeki her bir ürün, bir önceki ürünün hazırladığı zemine etki ederek birbirinin gücünü maksimize edecek şekilde tasarlanmıştır. Cildinizin gerçek potansiyelini ancak tam bir rutin ile ortaya çıkarabilirsiniz.
                                    </p>
                                </div>
                            </div>

                            <div className="mb-8 p-8 bg-green-50 border border-green-100 rounded-2xl relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16"></div>

                                <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary mb-6 flex items-center relative z-10">
                                    <span className="bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center mr-4 text-xl flex-shrink-0">2</span>
                                    Setleri Üye Olarak Almanın Avantajı
                                </h2>
                                <div className="pl-0 md:pl-14 relative z-10">
                                    <p className="leading-relaxed mb-4">
                                        Oriflame'in en yüksek puanlı (BP) ve en prestijli ürünleri cilt bakım setleridir. Bu setleri <strong>marka ortağı (üye fiyatıyla ve %20 İNDİRİMLE) almak</strong>, size hem büyük bir maddi tasarruf sağlar hem de anında kazandırır.
                                    </p>
                                    <ul className="space-y-4 mt-6">
                                        <li className="flex items-start">
                                            <div className="flex-shrink-0 mt-1.5">
                                                <div className="w-2.5 h-2.5 rounded-full bg-primary/80"></div>
                                            </div>
                                            <span className="ml-3"><strong>Anında Tasarruf:</strong> Katalog fiyatına göre net %20 indirimli (geliş fiyatından) alışveriş yaparsınız.</span>
                                        </li>
                                        <li className="flex items-start">
                                            <div className="flex-shrink-0 mt-1.5">
                                                <div className="w-2.5 h-2.5 rounded-full bg-primary/80"></div>
                                            </div>
                                            <span className="ml-3"><strong>Hoşgeldin Hediyeleri:</strong> Cilt bakım setlerinin verdiği yüksek puanlar sayesinde, ilk ayınızda "Hoşgeldin Programı" hediyelerini kolayca kazanabilirsiniz.</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </article>

                    {/* CTA Section */}
                    <div className="text-center bg-white rounded-3xl p-10 md:p-14 shadow-2xl relative overflow-hidden border border-gray-100">
                        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>
                        <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-green-400/10 rounded-full blur-3xl pointer-events-none"></div>

                        <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4 relative z-10">
                            Güzelliğe Kar Gözüyle Bakın
                        </h2>
                        <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto relative z-10">
                            Hem cildinize hem cebinize dost bu eşsiz fırsatı kaçırmayın. Hemen şimdi ücretsiz marka ortağı kaydınızı oluşturup İsveç kalitesine indirimli ulaşın!
                        </p>

                        <Link
                            href="/#basvuru"
                            className="group relative z-10 flex items-center justify-center px-8 md:px-12 py-5 text-lg md:text-xl font-bold text-white bg-primary hover:bg-green-700 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 w-full mx-auto max-w-xl"
                        >
                            Cilt Bakım Setini %20 İndirimli Almak İçin Kaydol
                            <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>

                </div>
            </main>
        </>
    );
}
