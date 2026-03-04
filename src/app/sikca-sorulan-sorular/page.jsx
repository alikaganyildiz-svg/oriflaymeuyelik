import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ChevronDown, Sparkles, HelpCircle, Package, ShieldQuestion } from 'lucide-react';

// Next.js metadata must be exported from a Server Component or handled differently if the page has 'use client'.
// However, since we need state for accordions, we separate metadata to a layout or we remove 'use client' and make Accordion a client component.
// To keep it simple in one file without creating extra components, we can render the metadata in <head> or assume a parent layout handles generic SEO, but the prompt asks for generateMetadata/metadata.
// The best Next.js pattern is to make this page a Server Component, and extract the Accordion into a Client Component.
// Given I must output ONE file, I'll provide the Client Component part embedded and note that metadata in 'use client' pages in App Router is officially not supported. 
// BUT, I'll structure it as a Server Component that imports a Client Component, or just put 'use client' only where needed.
// Actually, since I can only write ONE file per the user's request, I will export the default page as a Server Component, and define a client component inside it? No, Next.js doesn't allow defining a client component inside a server component file. 
// Instead, I will omit 'use client' at the top, and convert the accordion to use <details> and <summary> HTML tags which don't require JavaScript state, OR I can use a standard React approach if it's acceptable to the user.
// Let's use the native HTML <details> for the accordion to keep it a pure Server Component so `metadata` works perfectly!

export const metadata = {
    title: 'Oriflame Sıkça Sorulan Sorular 2026 | Üyelik ve Sipariş',
    description: 'Oriflame ücretsiz üyelik, sipariş süreci, kargo ücretleri ve kazanç planı hakkında aklınıza takılan tüm soruların cevapları burada.'
};

export default function FAQPage() {
    const faqs = [
        {
            category: "Üyelik ve Kayıt Soruları",
            icon: <ShieldQuestion className="w-6 h-6 text-primary" />,
            questions: [
                {
                    q: "Oriflame üyeliği ücretli mi?",
                    a: "Hayır, tamamen ücretsizdir ve aidat yoktur."
                },
                {
                    q: "T.C. Kimlik numarası neden isteniyor?",
                    a: "Maliye Bakanlığı yasaları gereği faturalandırma işlemi için yasal bir zorunluluktur, bilgileriniz şifrelenerek korunur."
                },
                {
                    q: "Ürünleri nasıl %20 indirimli alırım?",
                    a: "Ücretsiz kayıt formunu doldurduğunuz an tüm ürünleri %20 geliş fiyatıyla alırsınız."
                }
            ]
        },
        {
            category: "Sipariş ve Kargo Soruları",
            icon: <Package className="w-6 h-6 text-indigo-600" />,
            questions: [
                {
                    q: "Her ay sipariş verme zorunluluğu var mı?",
                    a: "Hayır, hiçbir sipariş zorunluluğu yoktur, dilediğiniz zaman alışveriş yapabilirsiniz."
                },
                {
                    q: "Kargo ücreti ne kadar?",
                    a: "Belirli bir puanın (BP) üzerindeki siparişlerde ücretsizdir, altında ise cüzi bir miktar yansır."
                }
            ]
        }
    ];

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "Oriflame üyeliği ücretli mi?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Hayır, tamamen ücretsizdir ve aidat yoktur."
                }
            },
            {
                "@type": "Question",
                "name": "Her ay sipariş verme zorunluluğu var mı?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Hayır, hiçbir sipariş zorunluluğu yoktur, dilediğiniz zaman alışveriş yapabilirsiniz."
                }
            },
            {
                "@type": "Question",
                "name": "T.C. Kimlik numarası neden isteniyor?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Maliye Bakanlığı yasaları gereği faturalandırma işlemi için yasal bir zorunluluktur, bilgileriniz şifrelenerek korunur."
                }
            },
            {
                "@type": "Question",
                "name": "Ürünleri nasıl %20 indirimli alırım?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Ücretsiz kayıt formunu doldurduğunuz an tüm ürünleri %20 geliş fiyatıyla alırsınız."
                }
            },
            {
                "@type": "Question",
                "name": "Kargo ücreti ne kadar?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Belirli bir puanın (BP) üzerindeki siparişlerde ücretsizdir, altında ise cüzi bir miktar yansır."
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
                        <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-6">
                            <Sparkles size={18} />
                            <span className="font-bold text-sm tracking-wide uppercase">Şeffaflık ve Güven</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6 leading-tight">
                            Sıkça Sorulan Sorular (SSS)
                        </h1>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
                            Oriflame ailesine katılırken veya sipariş verirken hiçbir şüpheniz kalmasın! Aklınıza takılan tüm soruları büyük bir şeffaflık ve netlikle sizin için cevapladık.
                        </p>
                    </div>

                    {/* Visual Architecture */}
                    <div className="relative w-full h-[300px] md:h-[400px] rounded-3xl overflow-hidden shadow-2xl mb-16 bg-white">
                        {/* Fallback pattern */}
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-primary/20 flex items-center justify-center animate-pulse">
                        </div>

                        <Image
                            src="/sikca-sorulan-sorular.jpg"
                            alt="Oriflame üyelik ve sipariş sıkça sorulan sorular"
                            fill
                            className="object-cover relative z-10"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10 pointer-events-none"></div>
                    </div>

                    {/* Accordion Content Section */}
                    <article className="mb-16">
                        <div className="space-y-12">

                            {faqs.map((category, catIdx) => (
                                <div key={catIdx} className="bg-white rounded-3xl shadow-xl p-6 md:p-10 border border-gray-100">
                                    <div className="flex items-center space-x-4 mb-8">
                                        <div className="p-3 bg-gray-50 rounded-2xl border border-gray-100 shadow-sm">
                                            {category.icon}
                                        </div>
                                        <h2 className="text-2xl font-serif font-bold text-gray-900">
                                            {category.category}
                                        </h2>
                                    </div>

                                    <div className="space-y-4">
                                        {category.questions.map((faq, idx) => (
                                            <details
                                                key={idx}
                                                className="group bg-gray-50 border border-gray-100 rounded-2xl overflow-hidden open:bg-white open:border-primary/30 open:shadow-md transition-all duration-300"
                                            >
                                                <summary className="flex items-center justify-between p-5 md:p-6 cursor-pointer list-none font-bold text-gray-800 text-lg hover:text-primary transition-colors">
                                                    <span className="flex items-center gap-3">
                                                        <HelpCircle className="w-5 h-5 text-gray-400 group-open:text-primary transition-colors shrink-0" />
                                                        {faq.q}
                                                    </span>
                                                    <span className="transition duration-300 group-open:rotate-180 shrink-0 ml-4 rounded-full bg-white p-1 shadow-sm border border-gray-100">
                                                        <ChevronDown className="w-5 h-5 text-gray-500 group-hover:text-primary" />
                                                    </span>
                                                </summary>
                                                <div className="p-5 md:p-6 pt-0 text-gray-600 leading-relaxed border-t border-gray-50/0 group-open:border-gray-100 animate-fadeIn bg-white shrink-0">
                                                    {faq.a}
                                                </div>
                                            </details>
                                        ))}
                                    </div>
                                </div>
                            ))}

                        </div>
                    </article>

                    {/* CTA Section */}
                    <div className="text-center bg-white rounded-3xl p-10 md:p-14 shadow-2xl relative overflow-hidden border border-gray-100">
                        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>
                        <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl pointer-events-none"></div>

                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6 relative z-10">
                            Aklınızda Soru İşareti Kalmadıysa, Şimdi Kazanma Vakti!
                        </h2>
                        <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto relative z-10">
                            Şeffaf, risk barındırmayan ve yüz binlerce kadına gelir kapısı olan büyük Oriflame ailesine bugün katılın. Kayıt tamamen ücretsiz!
                        </p>

                        <Link
                            href="/#basvuru"
                            className="group relative z-10 flex items-center justify-center px-8 md:px-12 py-5 text-lg md:text-xl font-bold text-white bg-primary hover:bg-green-700 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 w-full mx-auto max-w-xl"
                        >
                            Ücretsiz Kaydolun ve İndirimli Alışverişe Başlayın
                            <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>

                </div>

                {/* Custom styles to hide default details marker and add fade animation */}
                <style dangerouslySetInnerHTML={{
                    __html: `
          details > summary::-webkit-details-marker {
            display: none;
          }
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(-10px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeIn {
            animation: fadeIn 0.3s ease-out forwards;
          }
        `}} />
            </main>
        </>
    );
}
