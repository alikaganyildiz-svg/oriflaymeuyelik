import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
    title: '2026 Oriflame Kazanç Tablosu ve Prim Sistemi | Ne Kadar Kazanırım?',
    description: 'Oriflame ile ne kadar para kazanabilirsiniz? 2026 güncel kazanç tablosu, direktörlük maaşları, dolar ödülleri ve prim sisteminin tüm detaylarını inceleyin.',
};

export default function OriflameKazancTablosu2026() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Article",
                "headline": "2026 Oriflame Kazanç Tablosu: Ek Gelirden Finansal Özgürlüğe",
                "description": metadata.description,
                "author": {
                    "@type": "Organization",
                    "name": "Oriflame"
                }
            },
            {
                "@type": "FAQPage",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "Oriflame'de maaş var mı?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Oriflame'de sabit bir maaş yerine, kurduğunuz ekibin cirosuna göre her ay artabilen ve limitsiz olan performans primleri (kazanç) vardır."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "2026 Oriflame Direktörlük kazancı ne kadar?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "%21 seviyesine ulaşıp Direktör olduğunuzda, aylık performans primine ek olarak binlerce dolarlık tek seferlik nakit ödüller kazanırsınız."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Prim kazanmak için şartlar nelerdir?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Kişisel sipariş şartını yerine getirmek ve ekibinizle birlikte belirli Başarı Puanı (BP) seviyelerine ulaşmak yeterlidir."
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
                    <div className="relative w-full h-[250px] md:h-[450px] mb-12 rounded-2xl overflow-hidden shadow-xl">
                        <div className="absolute inset-0 bg-green-900/10 z-10" /> {/* Subtle overlay */}
                        <Image
                            src="/oriflame-kazanc-gorseli.jpg"
                            alt="2026 Oriflame kazanç tablosu ve başarı primleri"
                            fill
                            priority
                            className="object-cover"
                        />
                    </div>

                    {/* İçerik Alanı */}
                    <div className="prose prose-lg md:prose-xl prose-green max-w-none text-gray-700 leading-relaxed space-y-8">

                        <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight mb-8">
                            2026 Oriflame Kazanç Tablosu: Ek Gelirden Finansal Özgürlüğe
                        </h1>

                        <p className="text-xl md:text-2xl font-medium text-gray-600 leading-snug">
                            Hayallerinizi ertelemekten yorulmadınız mı? Kendi işinizin patronu olmak, çalışma saatlerinizi kendiniz belirlemek ve gelirinizin sınırını sadece sizin çizdiğiniz risksiz bir girişimcilik modeli düşünün.
                        </p>

                        <p>
                            İşte Oriflame dünyası, tam da bu özgürlüğü sunuyor. Milyonlarca insan neden Oriflame'i risksiz bir girişimcilik modeli olarak seçiyor? Çünkü burada büyük sermayelere ihtiyaç yok, batma riski sıfır, destek sonsuz ve başarma şansı tamamen sizin elinizde. İster mutfak masrafınızı çıkaracak bir "ek gelir", ister size dünyayı gezdirecek devasa bir "pasif gelir" hedefleyin; direksiyon tamamen sizde.
                        </p>

                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-14 mb-6 border-b border-gray-200 pb-3">
                            Kazanmanın Temel Mantığı
                        </h2>
                        <p>
                            Oriflame fırsatları çok katmanlı ve esnektir. Kazancınızı adım adım inşa edebileceğiniz 3 temel yapı taşı bulunur:
                        </p>
                        <ul className="space-y-4">
                            <li>
                                <strong>%20 İndirimle Tasarruf Et:</strong> Sisteme dahil olduğunuz an, tüm kozmetik ve zindelik ürünlerini katalog fiyatından %20 indirimli alırsınız. Bu, kişisel harcamalarınızda anında nakit tasarrufu demektir.
                            </li>
                            <li>
                                <strong>%30 Kârla Sıcak Satış:</strong> Çevrenizdeki kişilere kataloğu (dijital veya basılı) sunarak sipariş topladığınızda, ürünleri indirimli fiyattan alıp katalog fiyatına satarak anında %30 sıcak satış kârı elde edersiniz. Günlük ihtiyaçlarınızı karşılamak için harika bir sıcak para akışıdır.
                            </li>
                            <li>
                                <strong>Ekip Kur, Prim (Maaş) Kazan:</strong> Gerçek finansal özgürlüğün sırrı buradadır. Başkalarını da bu fırsatla tanıştırıp onlara rehberlik ettiğinizde kendi ekibinizi inşa edersiniz. Oriflame size ekibinizin oluşturduğu toplam satış cirosu (Başarı Puanı) üzerinden her ay düzenli ve katlanarak büyüyen bir "Performans Primi" öder.
                            </li>
                        </ul>

                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-14 mb-6 border-b border-gray-200 pb-3">
                            2026 Başarı Basamakları ve Primler
                        </h2>
                        <p>
                            Sizin ve ekibinizin ürettiği her ürün satışının bir "Başarı Puanı (BP)" değeri vardır. Ay sonunda grubunuzda biriken toplam BP, sizin o ayki prim yüzdenizi belirler. Basamaklar ne kadar yüksekse, pastadan aldığınız pay da o kadar büyür!
                        </p>

                        <div className="bg-gradient-to-br from-green-50 to-white rounded-2xl p-6 md:p-8 my-10 border border-green-100 shadow-sm">
                            <ul className="space-y-6 m-0 list-none p-0">
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 flex items-center justify-center w-14 h-14 rounded-xl bg-green-100 text-green-700 font-bold text-xl mr-5">%4</span>
                                    <div>
                                        <h3 className="font-bold text-gray-900 text-lg m-0">Başlangıç Seviyesi (500 - 999 BP)</h3>
                                        <p className="text-gray-600 text-base mt-1 mb-0">Liderlik yolculuğunuzun ilk adımı. Ufak ama heyecan verici ilk performans priminizi şirket hesabınıza yatırır.</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 flex items-center justify-center w-14 h-14 rounded-xl bg-green-200 text-green-800 font-bold text-xl mr-5">%8</span>
                                    <div>
                                        <h3 className="font-bold text-gray-900 text-lg m-0">Gelişim Seviyesi (1000 - 1999 BP)</h3>
                                        <p className="text-gray-600 text-base mt-1 mb-0">Ekibiniz yavaş yavaş şekillenirken kazancınız katalize olmaya ve fark edilmeye başlar.</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 flex items-center justify-center w-14 h-14 rounded-xl bg-green-500 text-white font-bold text-xl mr-5 shadow-md">%12</span>
                                    <div>
                                        <h3 className="font-bold text-gray-900 text-lg m-0">Lider (2000 - 3999 BP)</h3>
                                        <p className="text-gray-600 text-base mt-1 mb-0">Tebrikler, artık resmi bir Lidersiniz! Ciddi bir grubu yönetiyor ve ev ekonomisine çok güçlü bir katkı sağlıyorsunuz.</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 flex items-center justify-center w-14 h-14 rounded-xl bg-green-700 text-white font-bold text-xl mr-5 shadow-lg">%16</span>
                                    <div>
                                        <h3 className="font-bold text-gray-900 text-lg m-0">Danışman (4000 - 6599 BP)</h3>
                                        <p className="text-gray-600 text-base mt-1 mb-0">Kazançlarınız asgari ücret sınırlarına yaklaşır. Artık hobiniz tam zamanlı profesyonel bir işe dönüşmek üzeredir.</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 flex items-center justify-center w-14 h-14 rounded-xl bg-yellow-400 text-gray-900 font-bold text-xl mr-5 shadow-xl ring-4 ring-yellow-100">%21</span>
                                    <div>
                                        <h3 className="font-bold text-gray-900 text-lg m-0">Üst Danışman / Direktör Adayı (6600+ BP)</h3>
                                        <p className="text-gray-600 text-base mt-1 mb-0">Zirveye hoş geldiniz! Bu seviyeyi 6 ay koruyarak resmi "Direktör" unvanını alırsınız. Buradaki aylık kazançlar, tam zamanlı meslek kazançlarının çok üzerine çıkabilmektedir.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-14 mb-6 border-b border-gray-200 pb-3">
                            Dolar Ödülleri ve Yurtdışı Seyahatleri
                        </h2>
                        <p>
                            Aylık performans primleri aslında buzdağının sadece görünen yüzüdür. Direktör unvanından sonra kariyer planında yükseldiğiniz her yeni unvanda (Altın Direktör, Safir Direktör, Elmas Direktör vb.), Oriflame sizi devasa <strong>Tek Seferlik Nakit Dolar Ödülleri</strong> ile taçlandırır.
                        </p>
                        <p>
                            Binlerce dolarlık nakit ödüller, devasa sahnelerde, binlerce kişinin coşkulu alkışları eşliğinde tarafınıza takdim edilir. Bununla da bitmez; Oriflame her yıl liderlerini ödüllendirmek için dünyanın en büyüleyici lokasyonlarına uluslararası ücretsiz seyahatler düzenler. Uçak bileti, lüks konaklama ve unutulmaz gala yemeklerinin tamamen şirket tarafından karşılandığı bu konferanslarda hem vizyonunuz genişler hem de hayallerinizin ötesinde tatiller yaparsınız.
                        </p>

                    </div>

                    {/* CTA Buton Alanı */}
                    <div className="mt-20 flex flex-col items-center justify-center py-10 px-6 bg-gradient-to-r from-emerald-600 to-green-700 rounded-3xl shadow-2xl text-center transform transition duration-500 hover:scale-[1.01]">
                        <h3 className="text-3xl font-bold text-white mb-6">
                            Kendi Başarı Hikayenizi Yazma Vakti Gelmedi mi?
                        </h3>
                        <p className="text-green-50 text-lg mb-10 max-w-2xl">
                            Ücretsiz üyelik ile risk almadan kendi işinizin patronu olun. Kayıt ücreti yok, zorunlu paket alımı yok. İlk adımı bugün atın, başarmanız için ihtiyacınız olan her adımda yanınızdayım.
                        </p>
                        <Link
                            href="/#basvuru"
                            className="inline-flex items-center justify-center px-8 py-5 text-xl font-extrabold text-green-700 bg-white rounded-full shadow-lg hover:bg-gray-50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto"
                        >
                            Finansal özgürlüğünüz için ilk adımı bugün atın ve ekibime katılın
                        </Link>
                    </div>

                </article>
            </div>
        </>
    );
}
