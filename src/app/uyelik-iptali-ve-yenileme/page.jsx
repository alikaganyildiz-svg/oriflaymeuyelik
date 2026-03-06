import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
    title: 'Oriflame Üyelik İptali ve Yenileme Rehberi 2026',
    description: 'Oriflame üyelik iptali nasıl yapılır? Hesabınız ne zaman silinir? Eski sponsorunuzdan destek göremediyseniz, üyeliğinizi yenileyip güçlü bir ekiple yeniden başlama fırsatını keşfedin.',
};

export default function UyelikIptaliVeYenileme() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "FAQPage",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "Oriflame üyeliğimi nasıl iptal edebilirim?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Müşteri hizmetlerini arayarak veya resmi site üzerinden bilgi güncelleme kısmından üyelik iptal talebinizi iletebilirsiniz. Ayrıca 1 yıl boyunca hiç sipariş vermediğinizde üyeliğiniz otomatik olarak düşer."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "İptal ettikten sonra tekrar üye olabilir miyim?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Evet, şirket kuralları gereği üyeliğiniz tamamen silindikten (veya otomatik düştükten) sonra farklı bir sponsor ile yeniden kayıt olabilirsiniz."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Üyeliğim ne zaman otomatik olarak silinir?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Kayıt olduktan sonra hiç sipariş vermezseniz 3 ay (katalog dönemi) içinde, sipariş veren bir üyeyseniz son siparişinizden itibaren 1 yıl (17 katalog dönemi) sonra üyeliğiniz otomatik düşer."
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
                            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=2000"
                            alt="Oriflame üyelik yenileme ve yeni bir ekiple başlangıç"
                            fill
                            priority
                            className="object-cover transition-transform duration-1000 hover:scale-105"
                        />
                    </div>

                    {/* İçerik Alanı */}
                    <div className="prose prose-lg md:prose-xl prose-stone max-w-none text-gray-700 leading-relaxed space-y-8">

                        <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight mb-8">
                            Oriflame Üyelik İptali ve Yenileme: Yeni Bir Başlangıç
                        </h1>

                        <p className="text-xl md:text-2xl font-medium text-gray-600 leading-snug">
                            Bazen büyük bir hevesle başladığımız güzellik yolculuğunda her şey planladığımız gibi gitmeyebilir. Doğru ekibi bulamadığımız için veya yeterli rehberlik alamadığımız için motivasyonumuz kırılabilir.
                        </p>

                        <p>
                            Eğer şu an Oriflame üyeliğinizi sonlandırmayı düşünüyor veya sistemden tamamen düşüp yeni bir başlangıç yapmak istiyorsanız, bu rehber bilmeniz gereken tüm resmi yasal süreçleri ve yeni fırsatları sizin için şeffafça açıklıyor.
                        </p>

                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-14 mb-6 border-b border-gray-200 pb-3">
                            Üyelik İptali Nasıl Yapılır? (Yasal Süreçler)
                        </h2>
                        <p>
                            Oriflame, Marka Ortaklarına kendi işlerini istedikleri zaman bırakabilme özgürlüğü tanır. Herhangi bir nedenden dolayı üyeliğinizi aktif olarak sonlandırmak isterseniz süreci iki şekilde yönetebilirsiniz:
                        </p>
                        <ul className="space-y-4">
                            <li>
                                <strong>Aktif İptal Talebi:</strong> Oriflame resmi web sitesine şifrenizle giriş yapıp "Ayarlar" ve "Bilgi Güncelleme" sayfaları aracılığıyla üyelik iptal talebinizi şirkete direkt iletebilir veya Müşteri Hizmetlerini (0212 371 68 00) arayabilirsiniz.
                            </li>
                            <li>
                                <strong>Otomatik Düşme (Sistem Silinmesi):</strong> Eğer herhangi bir işlem yapmadan beklerseniz; sisteme kayıt olduktan sonra hiç sipariş vermediyseniz ilk <strong>3 katalog dönemi (yaklaşık 3 ay)</strong> sonunda, daha önce sipariş verdiyseniz son siparişinizin üzerinden <strong>17 katalog dönemi (tam 1 yıl)</strong> geçtiğinde üyeliğiniz şirketin sisteminden otomatik ve kalıcı olarak silinir.
                            </li>
                        </ul>

                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-14 mb-6 border-b border-gray-200 pb-3">
                            Destek Göremediğiniz İçin Mi Ayrılıyorsunuz?
                        </h2>
                        <p>
                            Pek çok potansiyeli olan üye, kayıt oldukları ekipten eğitim alamadığı, sorularına yanıt bulamadığı veya sponsorları (onları sisteme dahil eden kişi) onlarla ilgilenmediği için sistemi bırakma kararı alıyor. Eğer siz de sistemden bu nedenle ayrılıyorsanız veya üyeliğiniz zaten ilgisizlikten dolayı düştüyse, <strong>potansiyelinizi harcamayın!</strong>
                        </p>
                        <p>
                            Oriflame'de başarı; kaliteli ürünlerin yanı sıra güçlü bir vizyon, doğru bir <strong>Mentorluk (Sponsor desteği)</strong> ve birbirini yukarı çeken bir ekiple mümkündür. Kimse bu yolda tek başına yürümek zorunda değildir. İşinizi nasıl büyüteceğinizi, sosyal medyayı nasıl kullanacağınızı ve o muhteşem dolar ödüllerini nasıl alacağınızı size adım adım gösterecek bir lidere ihtiyacınız var.
                        </p>

                        <div className="bg-gradient-to-br from-green-50 to-white rounded-2xl p-6 md:p-8 my-10 border border-green-100 shadow-sm relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-2 h-full bg-green-500 rounded-l-2xl"></div>
                            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 ml-4">Güçlü Bir Ekiple Yeniden Doğun</h3>
                            <p className="text-gray-700 ml-4 mb-0">
                                Eğer yasal iptal/bekleme süreniz dolduysa ve sistemden tamamen düştüyseniz, artık özgürsünüz! Şirket kuralları gereği tamamen yeni bir başlangıç yapabilir, 7/24 eğitim ve destek sunan, sorularınızı anında yanıtlayan vizyoner ekibimizde hak ettiğiniz yeri alabilirsiniz.
                            </p>
                        </div>

                    </div>

                    {/* CTA Buton Alanı */}
                    <div className="mt-20 flex flex-col items-center justify-center py-10 px-6 bg-gradient-to-r from-emerald-600 to-green-700 rounded-3xl shadow-2xl text-center transform transition duration-500 hover:scale-[1.01]">
                        <h3 className="text-3xl font-bold text-white mb-6">
                            Yeni Bir Hikaye Yazmaya Hazır Mısınız?
                        </h3>
                        <p className="text-green-50 text-lg mb-10 max-w-2xl">
                            Üyeliğiniz kapandıysa ve doğru destekle, doğru mentorlukla bu kez başarmaya kesin kararlıysanız kollarınızı sıvayın. Bizimle birlikte hayallerinizi ertelemeye son verin.
                        </p>
                        <Link
                            href="/#basvuru"
                            className="inline-flex items-center justify-center px-8 py-5 text-xl font-extrabold text-green-700 bg-white rounded-full shadow-lg hover:bg-gray-50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto text-center"
                        >
                            Üyeliğiniz düştüyse ve artık kazanmaya hazırsanız, ekibime katılmak için hemen formu doldurun
                        </Link>
                    </div>

                </article>
            </div>
        </>
    );
}
