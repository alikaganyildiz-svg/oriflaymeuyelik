import Link from 'next/link';
import Image from 'next/image'; export const metadata = {
    title: 'Oriflame Üye Ol: Ücretsiz Kayıt ve Fırsatlar | Bağımsız Marka Ortağı',
    description: 'Oriflame\'e ücretsiz üye olun, %20 geliş fiyatı indiriminden ve hoşgeldin hediyelerinden hemen yararlanın. Kayıt formunu doldurun.',
};

export default function UyeOlPage() {
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "Oriflame üyelik ücretli mi?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Hayır, Oriflame'e üye olmak tamamen ücretsizdir. Kayıt ücreti veya aidat yoktur."
                }
            },
            {
                "@type": "Question",
                "name": "Her ay sipariş verme zorunluluğu var mı?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Hayır, hiçbir sipariş veya kota zorunluluğu yoktur. Sadece kendi ihtiyaçlarınızı indirimli almak için bile üye olabilirsiniz."
                }
            },
            {
                "@type": "Question",
                "name": "Kimler Oriflame'e üye olabilir?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "18 yaşını doldurmuş herkes ücretsiz olarak kayıt olabilir."
                }
            }
        ]
    };

    const faqs = [
        {
            question: "Oriflame üyelik ücretli mi?",
            answer: "Hayır, Oriflame'e üye olmak tamamen ücretsizdir. Kayıt ücreti veya aidat yoktur."
        },
        {
            question: "Her ay sipariş verme zorunluluğu var mı?",
            answer: "Hayır, hiçbir sipariş veya kota zorunluluğu yoktur. Sadece kendi ihtiyaçlarınızı indirimli almak için bile üye olabilirsiniz."
        },
        {
            question: "Kimler Oriflame'e üye olabilir?",
            answer: "18 yaşını doldurmuş herkes ücretsiz olarak kayıt olabilir."
        }
    ];

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <div className="min-h-screen bg-gray-50 flex flex-col">
                {/* Main Content Area */}
                <main className="flex-grow pb-24">

                    {/* Hero Image Section */}
                    <div className="w-full relative h-72 md:h-96 lg:h-[450px] mb-12">
                        <Image
                            src="https://images.unsplash.com/photo-1573164574572-cb89e39749b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80"
                            alt="Oriflame üye olmak istiyorum - güvenilir ve ücretsiz online kayıt formu"
                            fill
                            priority
                            className="object-cover object-center"
                            sizes="100vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-50 via-transparent to-transparent"></div>
                    </div>

                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-10">

                        {/* Header Section */}
                        <div className="text-center mb-16">
                            <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6 leading-tight">
                                Oriflame Üye Olmak İstiyorum: <span className="text-primary block sm:inline mt-2 sm:mt-0">Ücretsiz Kayıt ve Avantajlar</span>
                            </h1>
                            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                                Aramıza hoş geldiniz! Bağımsız bir Oriflame Marka Ortağı olarak, güzellik ve kazanç dünyasının kapılarını aralıyoruz. İster kendi ihtiyaçlarınızı indirimli almak isteyin, ister ailenize ek gelir sağlamayı hedefleyin; burası sizin için doğru yer. Kendinizi özel hissedeceğiniz, her adımda destekleneceğiniz bu güvenli ailede yerinizi almak için sürecimiz tamamen şeffaf ve masrafsızdır. Sizi de aramızda görmekten mutluluk duyarız!
                            </p>
                        </div>

                        {/* Why Join Section */}
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12 mb-16">
                            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Neden Üye Olmalısınız?</h2>
                            <div className="space-y-6 text-gray-700 text-lg">
                                <p>
                                    Oriflame ailesine katıldığınızda, sadece kaliteli İsveç kozmetik ürünlerine sahip olmakla kalmaz, aynı zamanda hayatınızı değiştirebilecek pek çok ayrıcalığa da erişirsiniz:
                                </p>
                                <ul className="list-none space-y-4">
                                    <li className="flex items-start">
                                        <span className="text-primary mr-3 text-xl">✓</span>
                                        <div>
                                            <strong className="text-gray-900">Anında %20 Geliş Fiyatı İndirimi:</strong> Katalogdaki ürünleri katalog fiyatı yerine %20 indirimli Marka Ortağı alış fiyatıyla alırsınız. Kendi kozmetik ihtiyaçlarınızı karşılarken anında tasarruf edersiniz.
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-primary mr-3 text-xl">✓</span>
                                        <div>
                                            <strong className="text-gray-900">Kazandıran Hoşgeldin Hediyeleri:</strong> Yeni üyelere özel Hoşgeldiniz Programı (HP) ile sipariş verdikçe ilk aylarınızda harika Oriflame ürünlerini hediye olarak veya çok küçük bedellerle kazanırsınız.
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-primary mr-3 text-xl">✓</span>
                                        <div>
                                            <strong className="text-gray-900">Ek Gelir ve Kariyer Fırsatı:</strong> Çevrenize ürün tavsiye ederek satış yapabilir ve anında %30 satış kârı elde edebilirsiniz. Kendi ekibinizi kurarak aylık düzenli başarı primleri, bonuslar ve yurtdışı seyahatleri kazanma şansına sahip olursunuz!
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* FAQ Section */}
                        <div className="mb-16">
                            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Sıkça Sorulan Sorular</h2>
                            <div className="space-y-4">
                                {faqs.map((faq, index) => (
                                    <details
                                        key={index}
                                        className="group bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden [&_summary::-webkit-details-marker]:hidden"
                                    >
                                        <summary className="flex items-center justify-between cursor-pointer p-6 font-semibold text-gray-900 text-lg hover:bg-gray-50 transition-colors">
                                            {faq.question}
                                            <span className="transition duration-300 group-open:-rotate-180">
                                                <svg className="w-6 h-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                                </svg>
                                            </span>
                                        </summary>
                                        <div className="px-6 pb-6 text-gray-600 text-base leading-relaxed bg-white border-t border-gray-50">
                                            <p className="mt-4">{faq.answer}</p>
                                        </div>
                                    </details>
                                ))}
                            </div>
                        </div>

                        {/* Call to Action */}
                        <div className="bg-gradient-to-r from-primary/10 to-transparent rounded-3xl p-8 md:p-12 text-center border border-primary/20">
                            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Oriflame Dünyasına Adım Atın</h3>
                            <p className="text-gray-700 mb-8 text-lg max-w-xl mx-auto">
                                Hiçbir risk almadan, ücretsiz olarak kayıt olun ve Oriflame\'in sunduğu tüm avantajlardan hemen yararlanmaya başlayın.
                            </p>
                            <Link
                                href="/#basvuru"
                                className="inline-flex items-center justify-center bg-primary text-white font-bold py-4 px-10 rounded-full text-lg shadow-lg hover:bg-opacity-90 hover:scale-105 hover:shadow-xl transition-all duration-300"
                            >
                                Hemen Ücretsiz Kayıt Formunu Doldur
                                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </main>
            </div>
        </>
    );
}
