import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Sparkles, HeartHandshake, GraduationCap, TrendingUp } from 'lucide-react';

export const metadata = {
    title: 'Hakkımda | Oriflame Bağımsız Marka Ortağınız',
    description: 'Oriflame serüvenim, ekibime sunduğum mentorluk desteği ve başarı hikayem. Siz de güçlü bir ekiple kendi işinizi kurmak için hikayeme ortak olun.'
};

export default function HakkimdaPage() {
    const personSchema = {
        "@context": "https://schema.org",
        "@type": "Person",
        "jobTitle": "Bağımsız Oriflame Marka Ortağı ve Lideri",
        "worksFor": {
            "@type": "Organization",
            "name": "Oriflame"
        }
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
            />

            <main className="min-h-screen bg-gray-50 pb-20 pt-10">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

                    <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 mb-16">
                        <div className="grid grid-cols-1 lg:grid-cols-2">

                            {/* Image Section */}
                            <div className="relative h-[400px] lg:h-auto bg-gradient-to-br from-pink-50 to-primary/10 flex items-center justify-center p-8 lg:p-12">
                                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiM2YjcyODAiIGZpbGwtb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')] opacity-50"></div>

                                <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full border-8 border-white shadow-2xl overflow-hidden z-10">
                                    <Image
                                        src="/profil-fotografi.jpg" // Kendi fotoğrafınız ile değiştirin
                                        alt="Oriflame Bağımsız Lideri ve Marka Ortağı"
                                        fill
                                        className="object-cover"
                                        priority
                                    />
                                    {/* Etrafında şık bir hare (halo) detayı */}
                                    <div className="absolute inset-0 rounded-full ring-1 ring-inset ring-black/10 pointer-events-none"></div>
                                </div>

                                {/* Yüzen dekoratif elementler */}
                                <div className="absolute top-10 right-10 w-16 h-16 bg-primary/20 rounded-full blur-xl animate-pulse"></div>
                                <div className="absolute bottom-10 left-10 w-20 h-20 bg-pink-400/20 rounded-full blur-xl animate-pulse delay-1000"></div>
                            </div>

                            {/* Intro Content Section */}
                            <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center">
                                <div className="inline-flex items-center space-x-2 bg-pink-100 text-pink-700 px-4 py-2 rounded-full mb-6 w-fit">
                                    <Sparkles size={16} />
                                    <span className="font-bold text-xs tracking-wide uppercase">Biz Bize Konuşalım</span>
                                </div>

                                <h1 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6 leading-tight">
                                    Merhaba, Ben Bağımsız Marka Ortağınız!
                                </h1>

                                <div className="prose prose-lg text-gray-600 leading-relaxed mb-8">
                                    <p>
                                        Oriflame ile ilk tanıştığım gün, sadece kaliteli bir krem veya güzel bir parfüm aldığımı sanıyordum. Ancak o küçük kutunun içinden kocaman bir <strong>fırsatlar dünyası</strong> çıktı.
                                    </p>
                                    <p>
                                        {/* HİKAYENİZ İÇİN BOŞLUK - BURAYI KENDİNİZE GÖRE DOLDURABİLİRSİNİZ */}
                                        [Buraya Oriflame'e neden katıldığınızı, ilk başlarda neler hissettiğinizi ve hayatınızda nelerin olumlu yönde değiştiğini anlatan kendi samimi hikayenizi, kısaca, birkaç satırla ekleyebilirsiniz. Örneğin, çocuklarınıza daha çok vakit ayırabildiğinizi veya ekonomik özgürlüğünüzü nasıl kazandığınızı bahsedebilirsiniz.]
                                    </p>
                                    <p>
                                        Bugün ise sadece kendi hayallerimi değil, benimle birlikte yürüyen muhteşem ekibimin hayallerini de gerçekleştirmek için buradayım. Gelin, sizin hikayenizi de birlikte yazalım.
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* Mentorship Section */}
                    <article className="mb-16">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
                                Neden Benim Ekibime Katılmalısınız?
                            </h2>
                            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                                Bana katıldığınızda sıradan bir marka ortağı olmazsınız; büyük bir ailenin çok değerli bir parçası ve size özel bir mentorluk programının ayrıcalıklı üyesi olursunuz.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {/* Feature 1 */}
                            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 text-center hover:shadow-2xl transition-shadow group relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-24 h-24 bg-pink-50 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
                                <div className="w-16 h-16 mx-auto bg-pink-100 text-pink-600 rounded-2xl flex items-center justify-center mb-6 relative z-10">
                                    <HeartHandshake className="w-8 h-8" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3 relative z-10">
                                    7/24 Birebir Destek
                                </h3>
                                <p className="text-gray-600 relative z-10">
                                    Kayıt olduğunuz ilk andan itibaren ne yapacağınızı düşünmezsiniz. İşin her adımında birebir ilgimle yanınızda olacak, aklınıza takılan her soruyu cevaplayacağım.
                                </p>
                            </div>

                            {/* Feature 2 */}
                            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 text-center hover:shadow-2xl transition-shadow group relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
                                <div className="w-16 h-16 mx-auto bg-primary/20 text-primary rounded-2xl flex items-center justify-center mb-6 relative z-10">
                                    <GraduationCap className="w-8 h-8" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3 relative z-10">
                                    Ücretsiz Eğitim ve Kamplar
                                </h3>
                                <p className="text-gray-600 relative z-10">
                                    Satış teknikleri, cilt bakımı uzmanlığı ve sosyal medyayı doğru kullanma üzerine sunduğum düzenli ücretsiz eğitimler ve motivasyon toplantıları ile işinizi hızla büyüteceğiz.
                                </p>
                            </div>

                            {/* Feature 3 */}
                            <div className="bg-white rounded-3xl p-8 shadow-xl border-t-4 border-t-pink-400 text-center hover:shadow-2xl transition-shadow group relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-24 h-24 bg-purple-50 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
                                <div className="w-16 h-16 mx-auto bg-purple-100 text-purple-600 rounded-2xl flex items-center justify-center mb-6 relative z-10">
                                    <TrendingUp className="w-8 h-8" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3 relative z-10">
                                    Birlikte Büyüme Hedefi
                                </h3>
                                <p className="text-gray-600 relative z-10">
                                    Tek başarı, birlikte kazandığımız başarıdır! Ünvanlarınızı artırmanız, yüksek primler almanız ve ödül seyahatlerine çıkmanız için size özel stratejiler planlayıp adım adım uygulayacağız.
                                </p>
                            </div>
                        </div>
                    </article>

                    {/* CTA Section */}
                    <div className="text-center bg-white rounded-3xl p-10 md:p-14 shadow-2xl relative overflow-hidden border border-gray-100">
                        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-pink-400 via-primary to-purple-400"></div>
                        <div className="absolute bottom-0 right-0 -mb-20 -mr-20 w-64 h-64 bg-pink-100/50 rounded-full blur-3xl pointer-events-none"></div>

                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6 relative z-10">
                            Şimdi Sizin Hikayenizin Başlama Vakti!
                        </h2>
                        <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto relative z-10">
                            Eğer hayatınızda güzel, yenilikçi ve kazançlı bir sayfa açmak isterseniz, ben buradayım ve yol göstericiniz olmaktan mutluluk duyarım.
                        </p>

                        <Link
                            href="/#basvuru"
                            className="group relative z-10 flex items-center justify-center px-8 md:px-12 py-5 text-lg md:text-xl font-bold text-white bg-primary hover:bg-green-700 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 w-full mx-auto max-w-xl"
                        >
                            Ekibime Katılın ve Birlikte Kazanalım
                            <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>

                </div>
            </main>
        </>
    );
}
