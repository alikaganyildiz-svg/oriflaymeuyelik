import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
    title: 'Oriflame Marka Ortağı Başvurusu 2026 | Kendi İşini Kur',
    description: 'Oriflame marka ortağı olarak kendi işinizin patronu olun. Yüksek kazanç planı, bonuslar ve seyahat fırsatları için hemen başvurunuzu yapın.',
};

export default function MarkaOrtagiBasvurusuPage() {
    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Oriflame Marka Ortaklığı",
        "description": "Bağımsız girişimcilik ve satış kanalı yönetimi fırsatı.",
        "provider": {
            "@type": "Organization",
            "name": "Oriflame",
            "url": "https://oriflaymeuyelik.com"
        },
        "serviceType": "Bağımsız Satış Ortaklığı ve Girişimcilik",
        "areaServed": "TR"
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
            />
            <div className="min-h-screen bg-neutral-50 flex flex-col font-sans">
                {/* Main Content Area */}
                <main className="flex-grow pt-10 pb-24">
                    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

                        {/* Hero Section with Image */}
                        <div className="relative rounded-3xl overflow-hidden shadow-xl mb-16 aspect-[16/9] md:aspect-[21/9] bg-slate-800">
                            {/* Using a reliable business-focused Unsplash image for a highly professional look */}
                            <Image
                                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80"
                                alt="Oriflame marka ortağı kazanç ve kariyer fırsatları"
                                fill
                                priority
                                className="object-cover opacity-80"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent"></div>

                            <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-14 text-white">
                                <span className="text-yellow-500 font-bold tracking-widest uppercase text-sm mb-3">#HayallerinizeUlaşın</span>
                                <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight max-w-3xl">
                                    Oriflame Marka Ortağı Başvurusu: <span className="text-emerald-400">Hayalindeki İşi Kur</span>
                                </h1>
                            </div>
                        </div>

                        {/* Introduction Paragraph */}
                        <div className="bg-white rounded-2xl shadow-sm border border-neutral-200 p-8 md:p-12 mb-16 relative overflow-hidden">
                            {/* Elegant Gold Accents */}
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 via-yellow-600 to-yellow-800"></div>
                            <div className="absolute -right-20 -top-20 w-64 h-64 bg-yellow-50 rounded-full opacity-50 pointer-events-none"></div>

                            <div className="relative z-10">
                                <p className="text-xl md:text-2xl text-slate-700 leading-relaxed font-light mb-6">
                                    <strong className="font-semibold text-slate-900">Kendi mesainizi, kendi kazancınızı ve kendi hayatınızı yönetmeye hazır mısınız?</strong>
                                </p>
                                <p className="text-lg text-slate-600 leading-relaxed">
                                    İçinizdeki girişimcilik ruhunu ortaya çıkarma zamanı geldi! Oriflame Marka Ortağı olarak bir ofise, mesai saatlerine veya patronlara bağlı kalmadan, tamamen kendi şartlarınızla yüksek kazançlı bir iş sahibi olabilirsiniz. Güçlü ve global bir şirketin sunduğu risksiz iş modeli sayesinde; güzelliği kazanca dönüştürebilir, vizyonunuzla başkalarına ilham verebilirsiniz. Sınırları sadece siz belirlersiniz!
                                </p>
                            </div>
                        </div>

                        {/* Why Become a Brand Partner Section */}
                        <div className="mb-16">
                            <div className="text-center mb-10">
                                <span className="text-emerald-700 font-bold tracking-widest uppercase text-xs mb-2 block">Kazanç ve Kariyer</span>
                                <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Neden Marka Ortağı Olmalısınız?</h2>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                {/* Point 1: Profit */}
                                <div className="bg-white p-8 rounded-2xl shadow-sm border border-neutral-100 flex items-start group hover:border-emerald-200 transition-colors">
                                    <div className="bg-emerald-50 p-4 rounded-xl mr-5 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-slate-900 mb-2">Anında %30'a Varan Kâr</h3>
                                        <p className="text-slate-600">Her siparişte ve satışta katalog fiyatı üzerinden %30'a varan anında kâr marjıyla sıcak nakit akışı sağlarsınız. Satış yaptıkça hemen o anda kazanırsınız.</p>
                                    </div>
                                </div>

                                {/* Point 2: Team Building */}
                                <div className="bg-white p-8 rounded-2xl shadow-sm border border-neutral-100 flex items-start group hover:border-blue-200 transition-colors">
                                    <div className="bg-blue-50 p-4 rounded-xl mr-5 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-slate-900 mb-2">Sınırsız Prim Geliri</h3>
                                        <p className="text-slate-600">Kendi iş ağınızı (ekibinizi) kurarak ve etrafınızdakilere mentorluk yaparak; ekibinizin ulaştığı hacim üzerinden aylık düzenli ve giderek artan pasif performans primi elde edersiniz.</p>
                                    </div>
                                </div>

                                {/* Point 3: Cash Awards */}
                                <div className="bg-white p-8 rounded-2xl shadow-sm border border-neutral-100 flex items-start group hover:border-yellow-200 transition-colors">
                                    <div className="bg-yellow-50 p-4 rounded-xl mr-5 text-yellow-600 group-hover:bg-yellow-500 group-hover:text-white transition-colors">
                                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path></svg>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-slate-900 mb-2">Unvanlar ve Nakit Ödüller</h3>
                                        <p className="text-slate-600">Kariyer basamaklarını (Direktör, Altın Direktör vb.) tırmandıkça düzenli gelirinizin yanında tek seferlik on binlerce liralık harika nakit ödüller kazanırsınız.</p>
                                    </div>
                                </div>

                                {/* Point 4: Travel */}
                                <div className="bg-white p-8 rounded-2xl shadow-sm border border-neutral-100 flex items-start group hover:border-purple-200 transition-colors">
                                    <div className="bg-purple-50 p-4 rounded-xl mr-5 text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-slate-900 mb-2">Uluslararası Seyahatler</h3>
                                        <p className="text-slate-600">İşinizi ciddiye alıp büyüttüğünüzde, Oriflame sizi her yıl dünyanın en prestijli lokasyonlarında gerçekleşen, her şey dahil, muazzam yurtdışı konferanslarına davet eder.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* How to Apply Section */}
                        <div className="bg-slate-900 text-white rounded-3xl p-8 md:p-12 mb-16 relative overflow-hidden">
                            {/* Decorative Element */}
                            <svg className="absolute top-0 right-0 transform translate-x-1/3 -translate-y-1/3 text-emerald-900 opacity-50 w-96 h-96" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none">
                                <polygon points="0,100 100,0 100,100" />
                            </svg>

                            <div className="relative z-10 max-w-3xl">
                                <h2 className="text-3xl font-bold mb-6 text-emerald-400">Nasıl Başvuru Yapılır?</h2>
                                <div className="space-y-6 text-slate-300 text-lg">
                                    <p>
                                        Dünyanın dört bir yanındaki binlerce girişimcinin yaptığı gibi, değişime ve başarıya giden bu ilk adımınız saniyeler sürecektir. Karışık mülakatlar, ağır resmi belgeler veya deneyim şartı yoktur.
                                    </p>
                                    <ul className="space-y-4">
                                        <li className="flex items-center">
                                            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-emerald-500 text-white font-bold mr-4 flex-shrink-0">1</span>
                                            <span>Aşağıdaki bağlantıdan tamamen ücretsiz ve kolay kayıt formunu doldurun.</span>
                                        </li>
                                        <li className="flex items-center">
                                            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-emerald-500 text-white font-bold mr-4 flex-shrink-0">2</span>
                                            <span>Bir sponsor ve lider olarak, hesabınız aktivasyona geçtiğinde deneyimlerimi sizinle paylaşmak üzere yanınızda olacağım. Size hedef belirleme, ürün eğitimi ve satış kanalı yönetimi konularında mentorluk sağlayacağım.</span>
                                        </li>
                                        <li className="flex items-center">
                                            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-emerald-500 text-white font-bold mr-4 flex-shrink-0">3</span>
                                            <span>İlk siparişinizi oluşturduğunuzda hemen kazanmaya başlar, HP (Hoşgeldiniz Programı) hediyelerinizi sıfır maliyetle eklersiniz. Güçlü ve büyüyen ekibinizi inşa etmeye ilk günden başlarsınız.</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Powerful Call to Action */}
                        <div className="text-center pb-8 border-b border-neutral-200">
                            <h3 className="text-2xl font-bold text-slate-900 mb-6 font-serif">Kendi hikayenizi bugün yazmaya başlayın!</h3>
                            <Link
                                href="/#basvuru"
                                className="inline-flex items-center justify-center bg-gradient-to-r from-emerald-600 to-emerald-800 text-white font-bold py-5 px-10 md:px-14 rounded-full text-xl shadow-2xl shadow-emerald-900/40 hover:scale-105 hover:shadow-emerald-900/50 transition-all duration-300"
                            >
                                Girişimci Başvurusunu Tamamla
                                <svg className="ml-3 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </Link>
                            <p className="mt-6 text-sm text-slate-500">Formu doldurmak sadece 1 dakikanızı alır, hiçbir yasal taahhüt içermez.</p>
                        </div>

                    </div>
                </main>
            </div>
        </>
    );
}
