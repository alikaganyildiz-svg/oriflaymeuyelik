import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
    title: 'Oriflame Ücretsiz Üyelik Avantajları 2026 | İndirim ve Hediyeler',
    description: 'Oriflame üyeliği ile anında %20 indirim, hoşgeldin hediyeleri, bedava katalog ve numune fırsatlarını keşfedin. Hiçbir ücret ödemeden hemen kazanın.',
};

export default function UcretsizUyelikAvantajlariPage() {
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "Üye olunca ne kadar indirim kazanırım?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Tüm Oriflame ürünlerini katalog fiyatı üzerinden anında %20 indirimli 'geliş fiyatıyla' alırsınız."
                }
            },
            {
                "@type": "Question",
                "name": "Hoşgeldin Programı nedir?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yeni üyelere özel, ilk 3 ay boyunca sipariş verdikçe kazanılan muhteşem hediye paketleridir."
                }
            },
            {
                "@type": "Question",
                "name": "Üyelik için ücret ödeyecek miyim?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Hayır, üyelik tamamen ücretsizdir, kayıt ücreti veya aidat kesinlikle yoktur."
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
            <div className="min-h-screen bg-neutral-50 flex flex-col font-sans">
                {/* Main Content Area */}
                <main className="flex-grow pb-20">

                    {/* Hero Image Section */}
                    <div className="w-full relative h-72 md:h-96 lg:h-[450px] mb-12">
                        <Image
                            src="https://images.unsplash.com/photo-1549465220-1a8b9238cd48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80"
                            alt="Oriflame ücretsiz üyelik avantajları ve hoşgeldin hediyeleri"
                            fill
                            priority
                            className="object-cover object-center"
                            sizes="100vw"
                        />
                        {/* Minimal overlay to make text pop if added, though we'll keep the H1 outside for cleaner SEO structure as per plan usually, but we can do a light gradient purely for aesthetics */}
                        <div className="absolute inset-0 bg-gradient-to-t from-neutral-50 via-transparent to-transparent"></div>
                    </div>

                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-10">

                        {/* Header Section */}
                        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-12 text-center border border-neutral-100">
                            <span className="inline-block py-1 px-3 rounded-full bg-emerald-100 text-emerald-800 text-sm font-semibold tracking-wider uppercase mb-4">
                                Sürekli Kazanç
                            </span>
                            <h1 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 mb-6 leading-tight">
                                Oriflame Ücretsiz Üyelik Avantajları: <br />
                                <span className="text-emerald-600 block sm:inline mt-2 sm:mt-0">Kaydol ve Hemen Kazan</span>
                            </h1>
                            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed mt-6">
                                Oriflame dünyasına adım atmak, sadece çevrenize ürün satmak demek değildir. Sadece kendi ihtiyaçlarınızı, favori bakım veya makyaj ürünlerinizi doğrudan çok daha ucuza almak isteyen biriyseniz bile; bu eşsiz, masrafsız ve özgür ayrıcalıklar dünyası tam size göre!
                            </p>
                        </div>

                        {/* Benefits Section */}
                        <div className="mb-16">
                            <h2 className="text-3xl font-bold text-slate-800 mb-10 text-center">Avantajlar Nelerdir?</h2>

                            <div className="grid md:grid-cols-2 gap-6">
                                {/* Benefit 1 */}
                                <div className="bg-white p-6 rounded-2xl shadow-sm border border-neutral-100 flex items-start hover:shadow-md transition-shadow">
                                    <div className="mt-1 mr-4 flex-shrink-0">
                                        <svg className="w-8 h-8 text-emerald-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-slate-900 mb-2">Anında %20 İndirim</h3>
                                        <p className="text-slate-600 leading-relaxed">
                                            Sitemize ücretsiz üye olduğunuz andan itibaren tüm katalog ürünlerini %20 indirimli "Marka Ortağı Fiyatı" ile alırsınız. Kozmetik masraflarınızı anında düşürürsünüz.
                                        </p>
                                    </div>
                                </div>

                                {/* Benefit 2 */}
                                <div className="bg-white p-6 rounded-2xl shadow-sm border border-neutral-100 flex items-start hover:shadow-md transition-shadow">
                                    <div className="mt-1 mr-4 flex-shrink-0">
                                        <svg className="w-8 h-8 text-emerald-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-slate-900 mb-2">Kazandıran Hoşgeldin Programı</h3>
                                        <p className="text-slate-600 leading-relaxed">
                                            Yeni kaydolan üyelerimize özel hazırlanan ilk 3 ay süreli bu program sayesinde, belirli sipariş tutarlarına ulaştıkça muhteşem değerde hediye setleri kazanırsınız.
                                        </p>
                                    </div>
                                </div>

                                {/* Benefit 3 */}
                                <div className="bg-white p-6 rounded-2xl shadow-sm border border-neutral-100 flex items-start hover:shadow-md transition-shadow">
                                    <div className="mt-1 mr-4 flex-shrink-0">
                                        <svg className="w-8 h-8 text-emerald-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-slate-900 mb-2">Satış Zorunluluğu Yok</h3>
                                        <p className="text-slate-600 leading-relaxed">
                                            Belirli bir kotalara ulaşmak veya her ay sipariş vermek zorunda değilsiniz. Sadece isterseniz, sadece kendi ihtiyaçlarınızı uygun fiyata almak için üye kalabilirsiniz.
                                        </p>
                                    </div>
                                </div>

                                {/* Benefit 4 */}
                                <div className="bg-white p-6 rounded-2xl shadow-sm border border-neutral-100 flex items-start hover:shadow-md transition-shadow">
                                    <div className="mt-1 mr-4 flex-shrink-0">
                                        <svg className="w-8 h-8 text-emerald-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-slate-900 mb-2">Kendi İşini Kurma Fırsatı</h3>
                                        <p className="text-slate-600 leading-relaxed">
                                            Avantajlı ürünleri çevrenize önererek satış kârı elde edebilir, kendi ekibinizi büyüterek her ay artan prim ödemeleri ve yurtdışı seyahatleri kazanma şansını yakalayabilirsiniz.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Call to Action Container */}
                        <div className="text-center mt-16 pt-8 pb-4">
                            <Link
                                href="/#basvuru"
                                className="inline-flex items-center justify-center bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-5 px-10 md:px-14 rounded-full text-xl md:text-2xl shadow-[0_10px_25px_rgba(5,150,105,0.4)] hover:shadow-[0_15px_35px_rgba(5,150,105,0.5)] hover:-translate-y-1 transition-all duration-300"
                            >
                                Avantajları Yakala: Hemen Ücretsiz Kayıt Ol
                                <svg className="ml-3 w-6 h-6 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            </Link>
                            <p className="mt-6 text-slate-500 font-medium tracking-wide">Üyelik tamamen ücretsizdir. Hiçbir bağlayıcılığı yoktur.</p>
                        </div>

                    </div>
                </main>
            </div>
        </>
    );
}
