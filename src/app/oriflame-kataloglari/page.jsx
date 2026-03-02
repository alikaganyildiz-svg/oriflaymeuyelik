import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
    title: 'Güncel Oriflame Kataloğu 2026 | Online İncele ve İndirimli Al',
    description: 'En yeni Oriflame kataloğunu online inceleyin. Yeni ürünler, parfüm ve cilt bakım indirimleri burada. Ücretsiz üye olarak %20 geliş fiyatıyla hemen sipariş verin.',
};

export default function OriflameKataloglariPage() {
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "Oriflame kataloğu ne sıklıkla yenilenir?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Oriflame kataloğu her ay yenilenir ve yepyeni indirimler, fırsatlar sunar."
                }
            },
            {
                "@type": "Question",
                "name": "Basılı (kağıt) katalog nasıl alabilirim?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Ücretsiz marka ortağı olduğunuzda, ilk siparişinizle birlikte yeni ayın basılı kataloğu size hediye olarak gönderilir."
                }
            },
            {
                "@type": "Question",
                "name": "Katalog ürünlerini nasıl indirimli alırım?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Sitemizden ücretsiz kayıt formunu doldurarak anında %20 indirim hakkı kazanırsınız."
                }
            }
        ]
    };

    const faqs = [
        {
            question: "Oriflame kataloğu ne sıklıkla yenilenir?",
            answer: "Oriflame kataloğu her ay yenilenir ve yepyeni indirimler, fırsatlar sunar."
        },
        {
            question: "Basılı (kağıt) katalog nasıl alabilirim?",
            answer: "Ücretsiz marka ortağı olduğunuzda, ilk siparişinizle birlikte yeni ayın basılı kataloğu size hediye olarak gönderilir."
        },
        {
            question: "Katalog ürünlerini nasıl indirimli alırım?",
            answer: "Sitemizden ücretsiz kayıt formunu doldurarak anında %20 indirim hakkı kazanırsınız."
        }
    ];

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
                {/* Main Content Area */}
                <main className="flex-grow pb-24">

                    {/* Hero Image Section representing the Catalog Cover */}
                    <div className="w-full relative h-72 md:h-96 lg:h-[450px] mb-8">
                        <Image
                            src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
                            alt="2026 Güncel Oriflame Kataloğu Kapağı"
                            fill
                            priority
                            className="object-cover object-center"
                            sizes="100vw"
                        />
                        {/* Soft gradient overlay for aesthetics */}
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-50 via-slate-900/10 to-transparent"></div>
                    </div>

                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-24 relative z-10 flex flex-col items-center">

                        {/* Primary Action: View Online Catalog Button */}
                        <div className="mb-12 w-full text-center">
                            <Link
                                href="#"
                                className="inline-flex items-center justify-center bg-white text-emerald-600 border-2 border-emerald-500 font-extrabold py-5 px-10 md:px-16 rounded-2xl text-xl md:text-2xl shadow-xl hover:bg-emerald-50 hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto"
                            >
                                <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>
                                Online Kataloğu İncele
                            </Link>
                        </div>

                        {/* Header / Intro Section */}
                        <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12 mb-12 text-center border border-slate-100 w-full">
                            <span className="inline-block py-1 px-4 rounded-full bg-emerald-100 text-emerald-800 text-sm font-bold tracking-wider uppercase mb-5">
                                Yeni Ay, Yeni Fırsatlar
                            </span>
                            <h1 className="text-3xl md:text-5xl font-serif font-black text-slate-900 mb-6 leading-tight">
                                2026 Güncel Oriflame Kataloğu: <br />
                                <span className="text-emerald-600 block mt-2">Fırsatları Keşfet</span>
                            </h1>
                            <p className="text-lg text-slate-600 leading-relaxed font-medium">
                                Bu ayın kataloğu kelimenin tam anlamıyla muazzam fırsatlarla dolu! Yeni çıkan, baş döndürücü parfümler, yenilenmiş içerikleriyle devrim yaratan cilt bakım setleri, popüler renk kozmetikleri ve kişisel bakım ürünlerindeki dev indirim fırtınası sizi bekliyor. Sayfaları çevirdikçe hem kendinizi şımartacak hem de bütçenizi koruyacaksınız. Sınırları aşan güzellik dünyasını hemen keşfedin!
                            </p>
                        </div>

                        {/* Conversion Focus: Catalog vs Member Price */}
                        <div className="w-full bg-gradient-to-br from-emerald-50 to-teal-100 rounded-3xl p-8 md:p-12 mb-16 border border-emerald-200 relative overflow-hidden shadow-sm">
                            {/* Decorative element */}
                            <svg className="absolute top-0 right-0 transform translate-x-1/4 -translate-y-1/4 text-emerald-200 opacity-50 w-64 h-64" fill="currentColor" viewBox="0 0 100 100"><circle cx="50" cy="50" r="50" /></svg>

                            <div className="relative z-10">
                                <h2 className="text-2xl md:text-4xl font-black text-emerald-900 mb-6">Katalog Fiyatı <span className="text-emerald-500 font-light mx-2">vs.</span> Geliş Fiyatı</h2>
                                <div className="prose prose-lg text-slate-700 max-w-none">
                                    <p className="font-medium text-xl mb-4 text-slate-800">Biliyor muydunuz? Katalogda Gördüğünüz Fiyatı Ödemek Zorunda Değilsiniz!</p>
                                    <p className="mb-6">
                                        Birçok kişi kataloğu incelediğinde, o muhteşem indirimli fiyatların bile <strong>%20 daha da ucuzlayabileceğinden</strong> habersizdir. İşte Oriflame dünyasının en büyük sırrı budur: <strong>Ücretsiz Kayıt Olmak.</strong>
                                    </p>

                                    <div className="bg-white rounded-2xl p-6 shadow-sm border border-emerald-100 my-6">
                                        <ul className="space-y-4">
                                            <li className="flex items-start">
                                                <svg className="w-6 h-6 text-emerald-500 mr-3 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                                <span><strong>Örnek:</strong> Katalogda 100 TL'ye düşmüş harika bir parfüm beğendiniz. Normal bir müşteri bu ürünü 100 TL'ye alır.</span>
                                            </li>
                                            <li className="flex items-start">
                                                <svg className="w-6 h-6 text-emerald-500 mr-3 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                                <span><strong>Siz (Üye iseniz):</strong> Kasada anında %20 indirim uygulanır ve siz aynı ürüne <strong>sadece 80 TL</strong> (Geliş Fiyatı) ödersiniz!</span>
                                            </li>
                                        </ul>
                                    </div>

                                    <p className="font-bold text-slate-800">
                                        Hiçbir sipariş zorunluluğu, aidat veya satış yapma şartı yoktur. Sepetinize ürün eklemeden önce tek yapmanız gereken aşağıdaki formdan tamamen ücretsiz bir şekilde "Marka Ortağı" profilinizi açmaktır.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* FAQ Section */}
                        <div className="w-full mb-16">
                            <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">Katalog Hakkında Sıkça Sorulan Sorular</h2>
                            <div className="space-y-4">
                                {faqs.map((faq, index) => (
                                    <details
                                        key={index}
                                        className="group bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden [&_summary::-webkit-details-marker]:hidden"
                                    >
                                        <summary className="flex items-center justify-between cursor-pointer p-6 font-semibold text-slate-800 text-lg hover:bg-slate-50 transition-colors">
                                            {faq.question}
                                            <span className="transition duration-300 group-open:-rotate-180">
                                                <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                                            </span>
                                        </summary>
                                        <div className="px-6 pb-6 text-slate-600 text-base leading-relaxed bg-white border-t border-slate-50">
                                            <p className="mt-4">{faq.answer}</p>
                                        </div>
                                    </details>
                                ))}
                            </div>
                        </div>

                        {/* Huge Final CTA */}
                        <div className="w-full text-center mt-4">
                            <Link
                                href="/#basvuru"
                                className="inline-flex flex-col items-center justify-center bg-emerald-600 hover:bg-emerald-700 text-white font-black py-6 px-8 md:px-14 rounded-3xl shadow-[0_10px_25px_rgba(5,150,105,0.4)] hover:shadow-[0_15px_35px_rgba(5,150,105,0.5)] hover:-translate-y-2 transition-all duration-300 w-full md:w-auto border-b-4 border-emerald-800"
                            >
                                <span className="text-xl md:text-2xl mb-1">Katalog Ürünlerini %20 İndirimli Almak İçin</span>
                                <span className="text-2xl md:text-3xl text-emerald-100 flex items-center">
                                    Ücretsiz Kaydol
                                    <svg className="ml-3 w-8 h-8 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </svg>
                                </span>
                            </Link>
                            <p className="mt-6 text-slate-500 font-medium tracking-wide">Kayıt olmak sadece 1 dakikanızı alır, sipariş veya satış kotalarından tamamen muaftır.</p>
                        </div>

                    </div>
                </main>
            </div>
        </>
    );
}
