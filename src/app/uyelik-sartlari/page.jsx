import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
    title: 'Oriflame Üyelik Şartları 2026 | Ücretsiz ve Şartsız Kayıt',
    description: 'Oriflame üyelik şartları nelerdir? Sipariş zorunluluğu var mı? Aidat ödenir mi? Tüm merak ettikleriniz ve ücretsiz kayıt detayları.',
};

export default function UyelikSartlariPage() {
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "Oriflame'e üye olmak için hangi belgeler gerekli?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Sadece ad, soyad, doğum tarihi, iletişim bilgileriniz ve yasal faturalandırma zorunluluğu gereği TC Kimlik numaranız yeterlidir. Belge veya evrak göndermenize gerek yoktur."
                }
            },
            {
                "@type": "Question",
                "name": "Oriflame üyeliği iptal edilebilir mi?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Evet, üyeliğinizi dilediğiniz zaman hiçbir cezai şart ödemeden iptal edebilirsiniz. Ayrıca 1 yıl boyunca hiç sipariş vermediğinizde üyeliğiniz otomatik olarak düşer."
                }
            },
            {
                "@type": "Question",
                "name": "Her ay sipariş veya satış kotası var mı?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Hayır, kesinlikle hiçbir sipariş verme veya satış yapma zorunluluğunuz yoktur."
                }
            }
        ]
    };

    const faqs = [
        {
            question: "Oriflame'e üye olmak için hangi belgeler gerekli?",
            answer: "Sadece ad, soyad, doğum tarihi, iletişim bilgileriniz ve yasal faturalandırma zorunluluğu gereği TC Kimlik numaranız yeterlidir. Belge veya evrak göndermenize gerek yoktur."
        },
        {
            question: "Oriflame üyeliği iptal edilebilir mi?",
            answer: "Evet, üyeliğinizi dilediğiniz zaman hiçbir cezai şart ödemeden iptal edebilirsiniz. Ayrıca 1 yıl boyunca hiç sipariş vermediğinizde üyeliğiniz otomatik olarak düşer."
        },
        {
            question: "Her ay sipariş veya satış kotası var mı?",
            answer: "Hayır, kesinlikle hiçbir sipariş verme veya satış yapma zorunluluğunuz yoktur."
        }
    ];

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <div className="min-h-screen bg-slate-50 flex flex-col">
                {/* Main Content Area */}
                <main className="flex-grow pb-24">

                    {/* Hero Image Section */}
                    <div className="w-full relative h-72 md:h-96 lg:h-[450px] mb-12">
                        <Image
                            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
                            alt="Oriflame üyelik şartları ve ücretsiz kayıt detayları"
                            fill
                            priority
                            className="object-cover object-center"
                            sizes="100vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-50 via-transparent to-transparent"></div>
                    </div>

                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-10">
                        {/* Header Section */}
                        <div className="text-center mb-16">
                            <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-6 leading-tight">
                                Oriflame Üyelik Şartları: <span className="text-green-600 block sm:inline mt-2 sm:mt-0">Aklınızdaki Tüm Sorular</span>
                            </h1>
                            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
                                Oriflame'de her şey sizin rahatınız ve güveniniz için tasarlandı. Sürpriz masraflar, gizli şartlar veya bunaltıcı kotalar yok! Tamamen şeffaf ve esnek yapımızla, ister sadece kendi ürünlerinizi alın, ister ek gelir sağlayın, kontrol daima sizde.
                            </p>
                        </div>

                        {/* Basic Requirements / Trust Section */}
                        <div className="bg-white rounded-3xl shadow-sm border border-slate-200 p-8 md:p-12 mb-12 relative overflow-hidden">
                            {/* Decorative background element for trust aesthetic */}
                            <div className="absolute top-0 right-0 -mt-16 -mr-16 w-48 h-48 bg-blue-50 rounded-full opacity-50 blur-3xl pointer-events-none"></div>

                            <div className="flex items-center mb-8 relative z-10">
                                <div className="bg-blue-100 p-3 rounded-2xl mr-4">
                                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
                                </div>
                                <h2 className="text-3xl font-bold text-slate-800">Temel Şartlar Nelerdir?</h2>
                            </div>
                            <div className="space-y-6 text-slate-700 text-lg relative z-10">
                                <p>
                                    Aramıza katılmak hem çok kolay hem de yasal olarak güvence altındadır. Sadece aşağıdaki temel kriterleri sağlamanız yeterlidir:
                                </p>
                                <div className="grid md:grid-cols-2 gap-6 mt-6">
                                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                                        <h3 className="font-bold text-slate-900 mb-2 flex items-center">
                                            <span className="text-green-500 mr-2 text-xl">✓</span> 18 Yaş Sınırı
                                        </h3>
                                        <p className="text-slate-600 text-sm">Yasal olarak 18 yaşını doldurmuş olan herkes Oriflame ailesine marka ortağı olarak katılabilir.</p>
                                    </div>
                                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                                        <h3 className="font-bold text-slate-900 mb-2 flex items-center">
                                            <span className="text-green-500 mr-2 text-xl">✓</span> Türkiye İkameti
                                        </h3>
                                        <p className="text-slate-600 text-sm">Oriflame Türkiye sistemine kayıt olabilmek için Türkiye sınırları içerisinde ikamet ediyor olmanız gerekmektedir.</p>
                                    </div>
                                </div>

                                {/* Important Legal Notice */}
                                <div className="mt-8 bg-blue-50/50 p-6 rounded-2xl border-l-4 border-blue-500">
                                    <h4 className="font-bold text-slate-900 mb-2">T.C. Kimlik Numarası Neden İsteniyor?</h4>
                                    <p className="text-slate-700 text-sm">
                                        Üyelik sırasında istenen T.C. Kimlik numaranız, <strong className="font-semibold">Maliye Bakanlığı'nın e-fatura yasal zorunluluğu</strong> nedeniyledir. Adınıza kesilecek faturaların resmiyeti ve sizin yasal güvenceniz için bu bilgi zorunludur. Oriflame, kişisel verilerinizi KVKK kapsamında en üst düzey güvenlikle korur.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* What We DONT Ask For (Crucial Section) */}
                        <div className="mb-16">
                            <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">Oriflame'de Asla İstenmeyenler!</h2>
                            <div className="grid sm:grid-cols-2 gap-4">
                                <div className="bg-white p-6 rounded-2xl shadow-sm border border-red-100 flex items-start">
                                    <div className="bg-red-50 p-2 rounded-full mr-4 flex-shrink-0">
                                        <span className="text-red-500 font-bold text-xl">✕</span>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-slate-900 mb-1">Kayıt Ücreti Yok!</h3>
                                        <p className="text-slate-600 text-sm">Üye olurken veya sonrasında hiçbir şekilde kayıt parası veya gizli ücret talep edilmez.</p>
                                    </div>
                                </div>
                                <div className="bg-white p-6 rounded-2xl shadow-sm border border-red-100 flex items-start">
                                    <div className="bg-red-50 p-2 rounded-full mr-4 flex-shrink-0">
                                        <span className="text-red-500 font-bold text-xl">✕</span>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-slate-900 mb-1">Aylık Aidat Yok!</h3>
                                        <p className="text-slate-600 text-sm">Sisteme dahil olduğunuz için düzenli ödemeniz gereken hiçbir üyelik ücreti veya aidat bulunmamaktadır.</p>
                                    </div>
                                </div>
                                <div className="bg-white p-6 rounded-2xl shadow-sm border border-red-100 flex items-start">
                                    <div className="bg-red-50 p-2 rounded-full mr-4 flex-shrink-0">
                                        <span className="text-red-500 font-bold text-xl">✕</span>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-slate-900 mb-1">Sipariş Kotası Yok!</h3>
                                        <p className="text-slate-600 text-sm">Her ay belirli bir tutarda ürün almak veya sipariş vermek zorunda değilsiniz.</p>
                                    </div>
                                </div>
                                <div className="bg-white p-6 rounded-2xl shadow-sm border border-red-100 flex items-start">
                                    <div className="bg-red-50 p-2 rounded-full mr-4 flex-shrink-0">
                                        <span className="text-red-500 font-bold text-xl">✕</span>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-slate-900 mb-1">Stok Yapma Şartı Yok!</h3>
                                        <p className="text-slate-600 text-sm">Sadece ihtiyacınız olanı, dilediğiniz zaman alırsınız. Ürün stoğu yapmaya asla zorlanmazsınız.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* FAQ Section */}
                        <div className="mb-16">
                            <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">Sıkça Sorulan Sorular</h2>
                            <div className="space-y-4">
                                {faqs.map((faq, index) => (
                                    <details
                                        key={index}
                                        className="group bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden [&_summary::-webkit-details-marker]:hidden"
                                    >
                                        <summary className="flex items-center justify-between cursor-pointer p-6 font-semibold text-slate-800 text-lg hover:bg-slate-50 transition-colors">
                                            {faq.question}
                                            <span className="transition duration-300 group-open:-rotate-180">
                                                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                                            </span>
                                        </summary>
                                        <div className="px-6 pb-6 text-slate-600 text-base leading-relaxed bg-white border-t border-slate-50">
                                            <p className="mt-4">{faq.answer}</p>
                                        </div>
                                    </details>
                                ))}
                            </div>
                        </div>

                        {/* Call to Action */}
                        <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-3xl p-8 md:p-12 text-center border border-green-100 shadow-sm relative overflow-hidden">
                            {/* Decorative background circle */}
                            <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-green-200 rounded-full opacity-30 pointer-events-none"></div>

                            <div className="relative z-10">
                                <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">Üyelik Şartları Gördüğünüz Gibi Çok Kolay!</h3>
                                <p className="text-slate-700 mb-8 text-lg max-w-xl mx-auto">
                                    Hiçbir bağlayıcılığı ve riski olmayan bu ayrıcalıklı dünyaya adım atmak için şimdi harekete geçin.
                                </p>
                                <Link
                                    href="/oriflame-uye-olmak-istiyorum"
                                    className="inline-flex items-center justify-center bg-green-600 text-white font-bold py-4 px-8 md:px-12 rounded-full text-lg shadow-lg shadow-green-600/30 hover:bg-green-700 hover:scale-105 hover:shadow-xl hover:shadow-green-700/40 transition-all duration-300"
                                >
                                    Şartları Okudum, Hemen Ücretsiz Kayıt Olmak İstiyorum
                                    <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </Link>
                            </div>
                        </div>

                    </div>
                </main>
            </div>
        </>
    );
}
