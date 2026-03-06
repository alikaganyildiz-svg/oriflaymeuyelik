import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
    title: 'NovAge Leke Karşıtı Set İncelemesi ve Kullanımı 2026',
    description: 'Cilt lekelerine kesin çözüm arayanlar için NovAge serisi incelemesi. Adım adım kullanım rehberi ve seti %20 indirimle (geliş fiyatına) alma fırsatı.',
};

export default function NovageLekeGidericiİncelemesi() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Product",
                "name": "NovAge Leke Karşıtı Cilt Bakım Seti",
                "description": "Cilt tonunu eşitleyen, koyu leke görünümünü azaltan klinik olarak kanıtlanmış gelişmiş cilt bakım seti.",
                "brand": {
                    "@type": "Brand",
                    "name": "Oriflame"
                },
                "offers": {
                    "@type": "Offer",
                    "availability": "https://schema.org/InStock",
                    "priceCurrency": "TRY",
                    "price": "0.00",
                    "description": "Marka Ortaklarına Özel %20 İndirimli"
                }
            },
            {
                "@type": "FAQPage",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "NovAge leke giderici set işe yarıyor mu?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Klinik olarak kanıtlanmış formülü sayesinde, düzenli kullanımda cilt tonu eşitsizliklerini ve koyu leke görünümünü gözle görülür şekilde azaltır."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "NovAge setini nasıl kullanmalıyım?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Sabah ve akşam olmak üzere 4 basit adımda: Temizleme, Göz Bakımı, Serum ve Nemlendirme (Gündüz/Gece kremi) şeklinde kullanılmalıdır."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "NovAge setini en ucuza nasıl alabilirim?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Ücretsiz marka ortağı formumuzu doldurarak seti doğrudan katalog fiyatı üzerinden %20 indirimle, geliş fiyatına satın alabilirsiniz."
                        }
                    }
                ]
            }
        ]
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <div className="bg-white py-12 md:py-20 px-4 sm:px-6 lg:px-8 font-sans">
                <article className="max-w-3xl mx-auto">

                    {/* Görsel Alanı */}
                    <div className="relative w-full h-[300px] md:h-[500px] mb-12 rounded-2xl overflow-hidden shadow-xl">
                        <div className="absolute inset-0 bg-blue-900/5 z-10" />
                        <Image
                            src="/novage-leke-karsiti-set.jpg"
                            alt="Oriflame NovAge leke karşıtı cilt bakım seti"
                            fill
                            priority
                            className="object-cover transition-transform duration-1000 hover:scale-105"
                        />
                    </div>

                    {/* İçerik Alanı */}
                    <div className="prose prose-lg md:prose-xl prose-blue max-w-none text-gray-700 leading-relaxed space-y-8">

                        <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight mb-8">
                            NovAge Leke Karşıtı Set İncelemesi: Pürüzsüz Bir Cilt
                        </h1>

                        <p className="text-xl md:text-2xl font-medium text-gray-600 leading-snug">
                            Güneşin bıraktığı istenmeyen anılar, yaş almanın getirdiği hiperpigmentasyon, hamilelik lekeleri veya sivilce izleri... Hepimiz aynaya baktığımızda o kusursuz, eşit tonlu ve aydınlık cildi görmek istiyoruz.
                        </p>

                        <p>
                            Ancak cilt lekeleri, kapatıcılarla saklanması en zor ve psikolojik olarak en çok rahatsızlık veren cilt sorunlarından biridir. İşte tam bu noktada Oriflame, yıllar süren bilimsel araştırmalar ve devrim niteliğindeki kök hücre teknolojisi ile <strong>NovAge Leke Karşıtı Serisini</strong> geliştirdi. Bu seri sadece var olan lekelerin rengini açmakla kalmaz, aynı zamanda cildin derinliklerindeki melanin üretimini kontrol altına alarak yeni lekelerin oluşumunu da profesyonelce engeller.
                        </p>

                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-14 mb-6 border-b border-gray-200 pb-3">
                            4 Adımda Doğru Kullanım Sırası
                        </h2>
                        <p>
                            NovAge setinin klinik gücünden tam anlamıyla faydalanmak için "rutin" çok önemlidir. Ürünler birbirini tamamlayacak şekilde tasarlanmıştır ve sabah/akşam uygulayacağınız bu 4 adım sadece 2 dakikanızı alır:
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
                            <div className="bg-blue-50/50 p-6 rounded-xl border border-blue-100 flex items-start space-x-4">
                                <div className="bg-blue-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">1</div>
                                <div>
                                    <h3 className="font-bold text-gray-900 text-lg mt-0 mb-2">Temizleme</h3>
                                    <p className="text-gray-600 text-base m-0">Temizleyici Jel, cildi kurutmadan derinlemesine arındırır ve diğer ürünlerin emilimi için harika bir kanvas oluşturur.</p>
                                </div>
                            </div>

                            <div className="bg-blue-50/50 p-6 rounded-xl border border-blue-100 flex items-start space-x-4">
                                <div className="bg-blue-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">2</div>
                                <div>
                                    <h3 className="font-bold text-gray-900 text-lg mt-0 mb-2">Göz Bakımı</h3>
                                    <p className="text-gray-600 text-base m-0">Hassas göz çevresi için özel olarak formüle edilen Göz Kremi, koyu halka ve yorgunluk izlerini anında hedefler.</p>
                                </div>
                            </div>

                            <div className="bg-blue-50/50 p-6 rounded-xl border border-blue-100 flex items-start space-x-4">
                                <div className="bg-blue-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">3</div>
                                <div>
                                    <h3 className="font-bold text-gray-900 text-lg mt-0 mb-2">Güçlendirme (Serum)</h3>
                                    <p className="text-gray-600 text-base m-0">Rutinin kalbi! Yüksek konsantrasyonlu Serum, aktif bileşenleri cildin en alt katmanlarına taşıyarak lekelere güçlü bir şekilde savaş açar.</p>
                                </div>
                            </div>

                            <div className="bg-blue-50/50 p-6 rounded-xl border border-blue-100 flex items-start space-x-4">
                                <div className="bg-blue-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">4</div>
                                <div>
                                    <h3 className="font-bold text-gray-900 text-lg mt-0 mb-2">Nemlendirme</h3>
                                    <p className="text-gray-600 text-base m-0">Sabahları yüksek SPF içeren Gündüz Kremi ile güneşe karşı kalkan oluşturun. Akşamları ise Gece Kremi ile hücre yenilenmesini destekleyin.</p>
                                </div>
                            </div>
                        </div>

                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-14 mb-6 border-b border-gray-200 pb-3">
                            Neden Marka Ortağı Olarak Almalısınız? (Büyük Avantaj)
                        </h2>
                        <p>
                            NovAge cilt bakım setleri, klinik sonuçları olan <strong>premium dermo-kozmetik</strong> sınıfı ürünlerdir. Bu nedenle standart katalog fiyatları ortalamanın biraz üzerinde olabilir. Fakat çok akıllıca bir kısayol var!
                        </p>
                        <p>
                            Bu seti sipariş etmeden saniyeler önce "Ücretsiz Marka Ortağı" formunu doldurarak anında %20 indirim hakkı kazanırsınız. Sadece bu setin fiyatında bile yüzlerce liralık bir "Geliş Fiyatı" avantajı yakalarsınız.
                        </p>
                        <p>
                            Dahası, bu set <strong>Çok Yüksek Puan (BP)</strong> getiren özel bir promosyon ürünüdür. Üye olarak bir NovAge seti aldığınız an, büyük ihtimalle Oriflame'in "Hoşgeldin Programı"ndaki devasa puan barajlarını tek seferde paramparça edersiniz! Böylece hem kargo ücreti ödemekten kurtulur (Sistem yüksek BP'den dolayı kargoyu sıfırlar) hem de bir sonraki ay seçeceğiniz binlerce liralık parfüm, çanta veya sürpriz hediyeleri bedavaya (çok cüzi rakamlara) alma hakkı kazanırsınız.
                        </p>

                    </div>

                    {/* CTA Buton Alanı */}
                    <div className="mt-20 flex flex-col items-center justify-center py-10 px-6 bg-gradient-to-r from-blue-600 to-indigo-800 rounded-3xl shadow-2xl text-center transform transition duration-500 hover:scale-[1.01]">
                        <h3 className="text-3xl font-bold text-white mb-6">
                            Lekesiz Bir Cilt ve Ayrıcalıklı Fiyatlar Sizi Bekliyor
                        </h3>
                        <p className="text-blue-100 text-lg mb-10 max-w-2xl">
                            Pürüzsüz cildinize giden yolda yüzlerce lira tasarruf etmek çok kolay. Herhangi bir satış zorunluluğu olmadan, sadece kendi ürünlerinizi toptan fiyatına almak için güvenle aramıza katılın.
                        </p>
                        <Link
                            href="/#basvuru"
                            className="inline-flex items-center justify-center px-8 py-5 text-xl font-extrabold text-blue-800 bg-white rounded-full shadow-lg hover:bg-gray-50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto text-center"
                        >
                            Bu premium seti %20 indirimli almak ve sürpriz hediyeler kazanmak için hemen ücretsiz kaydolun
                        </Link>
                    </div>

                </article>
            </div>
        </>
    );
}
