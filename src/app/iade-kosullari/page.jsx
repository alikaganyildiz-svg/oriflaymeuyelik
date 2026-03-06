import Link from 'next/link';

export const metadata = {
    title: 'İade ve İptal Koşulları | Oriflame Güvencesi',
    description: 'Oriflame ürünlerinde iade, değişim ve sipariş iptal koşullarını öğrenin. %100 müşteri memnuniyeti ve yasal iade haklarınız hakkında detaylı bilgi.',
    robots: {
        index: true,
        follow: true,
    },
};

export default function IadeKosullari() {
    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 font-sans">
            <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100">

                <div className="mb-10 text-center">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
                        İade ve İptal Koşulları
                    </h1>
                    <p className="text-lg text-gray-500">
                        Müşteri memnuniyetiniz, yasal haklarınız ve güvenliğiniz bizim için önceliklidir.
                    </p>
                    <div className="mt-8 border-b border-gray-200"></div>
                </div>

                <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-10">

                    <section>
                        <h2 className="text-2xl font-semibold text-gray-900 border-l-4 border-green-500 pl-4 mb-4">
                            14 Günlük Yasal İade Hakkı
                        </h2>
                        <p>
                            Müşterilerimiz, sipariş ettikleri ürünleri teslim aldıkları tarihten itibaren <strong>14 gün içinde</strong> hiçbir gerekçe göstermeksizin ve cezai şart ödemeksizin iade etme hakkına sahiptir.
                        </p>
                        <p>
                            İade edilecek ürünlerin kullanılmamış, orijinal ambalajı veya şeffaf koruma bantları açılmamış ve yeniden satılabilir durumda olması gerekmektedir. İade edilmek istenen ürünlerin faturası, orijinal kutusu, ambalajı ve varsa promosyon ürünleri ile birlikte eksiksiz ve hasarsız olarak teslim edilmesi zorunludur. Kozmetik ve kişisel bakım ürünlerinde iade işleminin yasal olarak kabul edilebilmesi için ürünün kesinlikle <strong>denenmemiş ve kullanılmamış</strong> olması şarttır.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-gray-900 border-l-4 border-green-500 pl-4 mb-4">
                            İade Süreci Nasıl İşler?
                        </h2>
                        <p>
                            Önemle belirtmek isteriz ki; bu dijital platform bağımsız bir Oriflame Marka Ortaklığı girişimidir. Satın aldığınız ürünlerin iadesi, sipariş iptali veya değişimi <strong>bu web sitesine değil</strong>, doğrudan ürünlerin çıkış noktası ve faturanın asıl sahibi olan <strong>resmi Oriflame Kozmetik A.Ş.</strong> depolarına yapılmalıdır.
                        </p>
                        <p>
                            İade işlemlerinizi başlatmak için size gelen ürün faturası üzerinde yer alan iade adımlarını takip edebilir, faturanızın alt kısmında bulunan iade bölümünü doldurarak, Oriflame'in anlaşmalı olduğu kargo firmaları aracılığıyla ürünleri ücretsiz olarak geri gönderebilirsiniz. İade kargonuz resmi Oriflame depolarına ulaştığında kalite kalite kontrol sürecinden geçecek ve yasal süre içerisinde ücret iadesi işlemi, tarafınıza ait ödeme yöntemine yapılacaktır.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-gray-900 border-l-4 border-green-500 pl-4 mb-4">
                            Kusurlu veya Yanlış Ürünler
                        </h2>
                        <p>
                            Siparişiniz kargo firmasından size teslim edilirken, pakette herhangi bir ezilme, yırtılma veya sıvı teması gibi durumlar fark ederseniz ürünü kuryeden teslim almayıp <strong>"Hasar Tespit Tutanağı"</strong> tutturmanız gerekmektedir. Hasarlı kargonun kabul edilmesi durumunda sorumluluk alıcıya geçer.
                        </p>
                        <p>
                            Eğer paketi açtığınızda içeriğinde eksik, yanlış veya üretim hatasından kaynaklı kusurlu bir ürün tespit ederseniz, Oriflame Müşteri Hizmetleri ile doğrudan iletişime geçerek durumu bildirebilir ve ücretsiz değişim veya iade talebinde bulunabilirsiniz. Tespiti yapılan kusurlu ürünlerin iade süreçlerinde kargo ve taşıma masrafları firmaya aittir.
                        </p>
                    </section>

                </div>

                <div className="mt-16 bg-green-50 border border-green-100 rounded-xl p-8 md:p-10 text-center shadow-sm">
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                        Avantajlı Alışveriş Dünyasına Katılın
                    </h3>
                    <p className="text-gray-700 mb-8 max-w-2xl mx-auto text-lg leading-relaxed">
                        Güvenle alışveriş yapmak, siparişlerinizi resmi güvence altında oluşturmak ve tüm Oriflame ürünlerinden <strong>%20 İndirimli Formül</strong> ile yararlanmak için aramıza katılın.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                        <Link
                            href="/#basvuru"
                            className="inline-flex justify-center items-center px-8 py-3.5 border border-transparent text-base md:text-lg font-medium rounded-lg text-white bg-green-600 hover:bg-green-700 transition-all shadow-md hover:shadow-lg w-full sm:w-auto"
                        >
                            Ücretsiz Kayıt Ol & İndirim Kazan
                        </Link>
                        <Link
                            href="/iletisim"
                            className="inline-flex justify-center items-center px-8 py-3.5 border border-gray-300 text-base md:text-lg font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 transition-all shadow-sm w-full sm:w-auto"
                        >
                            Bize Ulaşın
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    );
}
