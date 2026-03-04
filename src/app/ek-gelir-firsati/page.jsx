import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Sparkles, ShieldCheck, Clock, BookOpen, Heart } from 'lucide-react';

export const metadata = {
    title: 'Oriflame ile Evden Ek Gelir Fırsatı 2026 | Sermayesiz İş',
    description: 'Öğrenciler, ev hanımları ve ek gelir arayanlar için harika bir fırsat! Oriflame ile kendi çalışma saatlerinizi belirleyin, sermayesiz ve risksiz para kazanmaya hemen başlayın.'
};

export default function EkGelirFirsatiPage() {
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "Oriflame işine başlamak için sermaye gerekir mi?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Hayır, Oriflame'e kayıt olmak tamamen ücretsizdir. Hiçbir sermaye veya kayıt ücreti ödemeden işinizi kurmaya başlayabilirsiniz."
                }
            },
            {
                "@type": "Question",
                "name": "Çalışma saatlerim nasıl olacak?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Kendi patronunuz sizsiniz. İster günde 1 saat, ister tam zamanlı; çalışma saatlerinizi ve günlerinizi tamamen kendi hayatınıza göre esnek bir şekilde belirlersiniz."
                }
            },
            {
                "@type": "Question",
                "name": "Satış yapamazsam bir ceza öder miyim?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Kesinlikle hayır. Oriflame'de satış veya sipariş zorunluluğu yoktur, risk sıfırdır."
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
                        <div className="inline-flex items-center space-x-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full mb-6">
                            <Sparkles size={18} />
                            <span className="font-bold text-sm tracking-wide uppercase">Sermayesiz İş Fırsatı</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6 leading-tight">
                            Oriflame ile Evden Ek Gelir Fırsatı: <br className="hidden md:block" />Hayatınızı Değiştirin
                        </h1>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
                            Günümüz ekonomisinde tek bir gelire bağlı kalmak zor. Masrafların arttığı bu dönemde ailenize destek olmak, hayallerinizi gerçekleştirmek veya kendi ayaklarınızın üzerinde durmak istiyorsanız, Oriflame'in tamamen esnek ve risksiz dünyasına davetlisiniz.
                        </p>
                    </div>

                    {/* Visual Architecture */}
                    <div className="relative w-full h-[300px] md:h-[450px] rounded-3xl overflow-hidden shadow-2xl mb-16 bg-white">
                        {/* Fallback pattern */}
                        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-primary/20 flex items-center justify-center animate-pulse">
                        </div>

                        <Image
                            src="https://images.unsplash.com/photo-1434626881859-194d67b2b86f?auto=format&fit=crop&q=80&w=2000"
                            alt="Oriflame evden ek gelir ve esnek çalışma fırsatı"
                            fill
                            className="object-cover relative z-10"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10 pointer-events-none"></div>
                    </div>

                    {/* Content Sections */}
                    <article className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-12 border border-gray-100">
                        <div className="prose prose-lg max-w-none text-gray-700">

                            <div className="mb-12">
                                <h2 className="text-3xl font-serif font-bold text-gray-900 mb-8 text-center md:text-left">
                                    Neden Oriflame'i Seçmelisiniz?
                                </h2>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pl-0">
                                    <div className="flex bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow group">
                                        <div className="bg-emerald-100 text-emerald-600 p-3 rounded-xl h-fit mr-4 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                                            <ShieldCheck size={24} />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-gray-900 text-lg mb-2">Sıfır Sermaye ve Sıfır Risk</h3>
                                            <p className="text-sm text-gray-600 leading-relaxed">Başlangıç paketi satın alma zorunluluğu, kayıt ücreti veya sipariş cezası yoktur. Tamamen bedava başlayıp sıfır riskle işinizi kurarsınız.</p>
                                        </div>
                                    </div>

                                    <div className="flex bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow group">
                                        <div className="bg-blue-100 text-blue-600 p-3 rounded-xl h-fit mr-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                            <Clock size={24} />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-gray-900 text-lg mb-2">Esnek Çalışma Saatleri</h3>
                                            <p className="text-sm text-gray-600 leading-relaxed">Mesai saati veya devam zorunluluğu yok. İster sabah kalkıp çalışın, ister gece çocukları uyuttuktan sonra; hayatınıza nasıl uyuyorsa öyle planlayın.</p>
                                        </div>
                                    </div>

                                    <div className="flex bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow group">
                                        <div className="bg-amber-100 text-amber-600 p-3 rounded-xl h-fit mr-4 group-hover:bg-amber-600 group-hover:text-white transition-colors">
                                            <BookOpen size={24} />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-gray-900 text-lg mb-2">Eğitim ve Mentorluk Desteği</h3>
                                            <p className="text-sm text-gray-600 leading-relaxed">İşe başlarken yalnız değilsiniz. Uzman ekiplerimizden ve liderlerimizden cilt bakımı, satış teknikleri ve dijital pazarlama üzerine ücretsiz eğitimler alırsınız.</p>
                                        </div>
                                    </div>

                                    <div className="flex bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow group">
                                        <div className="bg-rose-100 text-rose-600 p-3 rounded-xl h-fit mr-4 group-hover:bg-rose-600 group-hover:text-white transition-colors">
                                            <Heart size={24} />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-gray-900 text-lg mb-2">Eğlenceli ve Sosyal Bir Çevre</h3>
                                            <p className="text-sm text-gray-600 leading-relaxed">Oriflame'de sadece para kazanmaz, pozitif ve destekleyici yeni insanlarla tanışarak sosyal çevrenizi de büyük ölçüde geliştirirsiniz.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="mb-8 p-8 md:p-10 bg-emerald-50 border border-emerald-100 rounded-3xl relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-40 h-40 bg-white/40 rounded-full -mr-20 -mt-20"></div>

                                <h2 className="text-2xl md:text-3xl font-serif font-bold text-emerald-800 mb-6 relative z-10 text-center">
                                    Bu İşi Kimler Yapabilir?
                                </h2>
                                <div className="relative z-10 text-emerald-900/80 leading-relaxed text-center max-w-2xl mx-auto">
                                    <p className="mb-4">
                                        <strong>Ev Hanımları:</strong> Evdeki düzeninizi bozmadan, çocuklarınıza zaman ayırarak kendi ekonomik özgürlüğünüzü kazanabilirsiniz.
                                    </p>
                                    <p className="mb-4">
                                        <strong>Öğrenciler:</strong> Ders programınıza göre şekillendirebileceğiniz bu işle hem harçlığınızı çıkarıp hem de okul sonrası için harika bir kariyer CV'si oluşturabilirsiniz.
                                    </p>
                                    <p className="mb-4">
                                        <strong>Mevcut İşine Ek Gelir Arayanlar:</strong> Maaşlı bir işte çalışıyor olsanız bile, akşamları sosyal medyayı kullanarak ikinci bir maaş yaratabilirsiniz.
                                    </p>
                                    <p className="font-semibold text-emerald-700 mt-6">
                                        Kısacası; hayalleri olan, başarmak isteyen ve kendi ayakları üzerinde durmayı arzulayan HERKES için Oriflame fırsatları sonsuzdur!
                                    </p>
                                </div>
                            </div>

                        </div>
                    </article>

                    {/* CTA Section */}
                    <div className="text-center bg-white rounded-3xl p-10 md:p-14 shadow-2xl relative overflow-hidden border border-gray-100">
                        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>
                        <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>

                        <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4 relative z-10">
                            Bugün Karar Verin, Hayatınız Değişsin
                        </h2>
                        <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto relative z-10">
                            Kaybedecek hiçbir şeyinizin olmadığı, kazanacağınız ise sınırsız olduğu bu büyük ekibe katılmak için sadece birkaç saniyenizi ayırın.
                        </p>

                        <Link
                            href="/#basvuru"
                            className="group relative z-10 flex items-center justify-center px-4 md:px-12 py-5 text-lg md:text-xl font-bold text-white bg-primary hover:bg-green-700 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 w-full mx-auto max-w-xl text-center leading-snug"
                        >
                            Risk Almadan Para Kazanmaya Başlamak İçin Ücretsiz Kaydol
                        </Link>
                    </div>

                </div>
            </main>
        </>
    );
}
