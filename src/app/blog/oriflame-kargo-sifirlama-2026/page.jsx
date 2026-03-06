import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
    title: 'Oriflame Kargo Sıfırlama Taktikleri 2026 | Bedava Kargo',
    description: 'Oriflame siparişlerinizde kargo ücreti ödememek için güncel kargo sıfırlayıcı ürünleri ve Başarı Puanı (BP) taktiklerini keşfedin. Kargoyu bedavaya getirin.',
};

export default function OriflameKargoSifirlama2026() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Article",
                "headline": "Oriflame Kargo Sıfırlama Taktikleri (2026 Güncel Rehber)",
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
                        "name": "Oriflame kargo ücretsiz limiti ne kadar?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Her ay güncellenmekle birlikte, genellikle belirli bir Başarı Puanı (BP) limitine ulaştığınızda kargonuz tamamen ücretsiz olur."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Kargo sıfırlayıcı ürün nedir?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Kargo ücreti ödemek yerine, şirketin o ay belirlediği ve sepetinize eklediğinizde kargo ücretini sıfırlayan çok avantajlı indirimli ürünlerdir."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Kargo sıfırlama ürününü nasıl seçerim?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Sipariş onay ekranının ikinci veya üçüncü adımında sistem size o ayın kargo sıfırlayıcı ürün seçeneklerini otomatik olarak sunar."
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
                        <div className="absolute inset-0 bg-green-900/10 z-10" />
                        <Image
                            src="https://images.unsplash.com/photo-1586528116311-ad8ed7c159ad?auto=format&fit=crop&q=80&w=2000"
                            alt="Oriflame kargo sıfırlama taktikleri ve bedava kargo"
                            fill
                            priority
                            className="object-cover"
                        />
                    </div>

                    {/* İçerik Alanı */}
                    <div className="prose prose-lg md:prose-xl prose-green max-w-none text-gray-700 leading-relaxed space-y-8">

                        <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight mb-8">
                            Oriflame Kargo Sıfırlama Taktikleri (2026 Güncel Rehber)
                        </h1>

                        <p className="text-xl md:text-2xl font-medium text-gray-600 leading-snug">
                            İnternetten güvenle alışveriş yaparken hepimizin en canını sıkan şeylerden biri sepetin son adımında karşılaştığımız "Kargo Ücreti"dir. Harika bir haberimiz var; Oriflame dünyasında kargo şirketlerine havadan para ödemezsiniz!
                        </p>

                        <p>
                            Gelişmiş e-ticaret altyapısı ve akıllı alışveriş sistemi sayesinde Oriflame, üyelerine "Kargo Sıfırlama" ayrıcalığı sunar. Peki ama nasıl? Sistemde sadece sipariş vererek kargonuzu tamamen ücretsiz hale getirmenin veya kargo parasını yeni bir kozmetik ürününe çevirmenin iki harika yolu var. İşte 2026'nın en güncel ve en çok kazandıran bedava kargo taktikleri.
                        </p>

                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-14 mb-6 border-b border-gray-200 pb-3">
                            1. Yöntem: BP (Başarı Puanı) ile Otomatik Ücretsiz Kargo
                        </h2>
                        <p>
                            Oriflame siparişlerinizde sepetinize eklediğiniz her ürünün belirli bir <strong>BP (Başarı Puanı)</strong> değeri vardır. İhtiyaçlarınızı toplu bir şekilde aldığınızda veya çevrenizdeki siparişleri birleştirdiğinizde sistem bunu sizin lehinize çevirir.
                        </p>
                        <p>
                            Tıpkı e-ticaret sitelerindeki "Sepette 500 TL üzeri kargo bedava" mantığı gibi, Oriflame'de de aylık siparişleriniz belirli bir BP barajını (Örneğin kampanya dönemine göre değişiklik göstermekle birlikte <strong>100 BP</strong> veya <strong>125 BP</strong>) geçtiği an, hiçbir ekstra işlem yapmanıza gerek kalmadan sepetinizdeki kargo ücreti anında "<strong>0.00 TL</strong>" olarak güncellenir. Bu, hem yüksek indirimli ürünler almanızı hem de taşıma maliyetlerinden tamamen kurtulmanızı sağlayan otomatik bir ayrıcalıktır.
                        </p>

                        <div className="bg-green-50 border-l-4 border-green-500 p-6 my-8 rounded-r-lg">
                            <p className="m-0 text-green-800 font-medium">
                                <strong>İpucu:</strong> Tüm ihtiyaçlarınızı parça parça ayrı günlerde sipariş etmek yerine sepetinizde biriktirip tek seferde onaylarsanız, BP limitini çok daha kolay aşar ve kargo masrafından tamamen kurtulursunuz!
                            </p>
                        </div>

                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-14 mb-6 border-b border-gray-200 pb-3">
                            2. Yöntem: Kargo Sıfırlayıcı Ürünler (En Akıllıca Taktik!)
                        </h2>
                        <p>
                            Diyelim ki BP sınırına ulaşamadınız ve sepet tutarınız düşük kaldı. Normal şartlarda çoğu sitede kargo firmasına belirli bir ücret ödersiniz ve bu para cebinizden uçup gider. İşte Oriflame'in sektörde rakipsiz olmasını sağlayan sistem tam da burada devreye giriyor: <strong>Kargo Sıfırlayıcı Ürünler!</strong>
                        </p>
                        <p>
                            Sisteb her ay özel olarak seçilmiş, son derece kullanışlı ve popüler ürünleri (Örneğin; ferahlatıcı bir duş jeli, mis kokulu bir el kremi veya sevilen bir roll-on) "Kargo Sıfırlayıcı" olarak belirler. Sipariş adımlarını ilerletirken sistem size şunu teklif eder:
                        </p>

                        <blockquote className="italic border-l-4 border-gray-300 pl-6 text-gray-600 my-8">
                            "İstersen kargo şirketine 50 TL taşıma ücreti ödeyebilirsin... <strong>VEYA</strong> bana 50 TL vererek bu harika Duş Jelini sepetine ekleyebilirsin. Ürünü sana göndereceğim ve kargo şirketine hiçbir ödeme yapmayacaksın!"
                        </blockquote>

                        <p>
                            Bu ne anlama geliyor? Kargo firmasına verip havaya uçuracağınız parayla <strong>hem kargonuzu evinize kadar getirtiyorsunuz hem de yepyeni orijinal bir kozmetik/kişisel bakım ürününe sahip oluyorsunuz.</strong> Bu ürünü kendiniz kullanabilir veya dışarıya satarak kargo ücretinizi bile kâra dönüştürebilirsiniz! Sipariş onay ekranının 2. veya 3. adımında karşınıza çıkan bu ürünlerden dilediğinizi seçip yola kargo ödemeden devam edebilirsiniz.
                        </p>

                    </div>

                    {/* CTA Buton Alanı */}
                    <div className="mt-20 flex flex-col items-center justify-center py-10 px-6 bg-gradient-to-r from-emerald-600 to-green-700 rounded-3xl shadow-2xl text-center transform transition duration-500 hover:scale-[1.01]">
                        <h3 className="text-3xl font-bold text-white mb-6">
                            Kargonuzu Sıfırlamaya Hazır mısınız?
                        </h3>
                        <p className="text-green-50 text-lg mb-10 max-w-2xl">
                            Bu akıllıca taktiklerden yararlanmak, tüm ürünleri %20 daha ucuza almak ve ilk siparişinizi ücretsiz kargo avantajıyla vermek için saniyeler içinde aramıza katılın.
                        </p>
                        <Link
                            href="/#basvuru"
                            className="inline-flex items-center justify-center px-8 py-5 text-xl font-extrabold text-green-700 bg-white rounded-full shadow-lg hover:bg-gray-50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto text-center"
                        >
                            Kargo ödemeden %20 indirimli alışveriş yapmak için hemen marka ortağı olun
                        </Link>
                    </div>

                </article>
            </div>
        </>
    );
}
