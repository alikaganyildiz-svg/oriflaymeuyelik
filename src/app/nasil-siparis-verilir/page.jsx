import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Sparkles, UserCheck, ShoppingCart, Truck, CreditCard } from 'lucide-react';

export const metadata = {
    title: 'Oriflame Nasıl Sipariş Verilir? | Adım Adım Rehber 2026',
    description: 'Oriflame sipariş verme, kargo ücretleri ve kapıda ödeme seçenekleri hakkında tüm detaylar. Ücretsiz üye olun, ürünlerinizi %20 indirimle hemen kapınıza getirtin.'
};

export default function NasilSiparisVerilirPage() {
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "Oriflame siparişlerinde kargo ücreti ne kadar?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Belirli bir Başarı Puanı (BP) üzerindeki siparişlerinizde kargo tamamen ücretsizdir. Altındaki siparişlerde ise cüzi bir kargo ücreti yansır veya kargo sıfırlayıcı ürün seçerek kargoyu bedavaya getirebilirsiniz."
                }
            },
            {
                "@type": "Question",
                "name": "Kapıda ödeme seçeneği var mı?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Evet, kredi kartı veya havale/EFT seçeneklerinin yanı sıra siparişlerinizi kapıda nakit veya kredi kartıyla ödeme seçeneğiyle de verebilirsiniz."
                }
            },
            {
                "@type": "Question",
                "name": "Siparişim kaç günde gelir?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Siparişleriniz genellikle 2-4 iş günü içerisinde anlaşmalı kargo şirketlerimiz aracılığıyla kapınıza kadar teslim edilir."
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

            <main className="min-h-screen bg-gray-50 pb-20 pt-10">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

                    {/* Header */}
                    <div className="text-center mb-10">
                        <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
                            <Sparkles size={18} />
                            <span className="font-bold text-sm tracking-wide uppercase">Hızlı ve Güvenli Alışveriş</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6 leading-tight">
                            Oriflame'den Nasıl Sipariş Verilir? <br className="hidden md:block" />Adım Adım Rehber
                        </h1>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
                            Oriflame dünyasında sipariş vermek, klasik bir e-ticaret sitesinden çok daha kolay, güvenli ve kazançlıdır. Evinizin rahatlığında, indirimli fiyatlarla en sevdiğiniz İsveç ürünlerini kapınıza kadar nasıl getirteceğinizi hemen öğrenin.
                        </p>
                    </div>

                    {/* Visual Architecture */}
                    <div className="relative w-full h-[300px] md:h-[450px] rounded-3xl overflow-hidden shadow-2xl mb-16 bg-white">
                        {/* Fallback pattern */}
                        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-primary/20 flex items-center justify-center animate-pulse">
                        </div>

                        <Image
                            src="https://images.unsplash.com/photo-1586880244406-556ebe35f282?auto=format&fit=crop&q=80&w=2000"
                            alt="Oriflame online sipariş verme ve kargo süreci"
                            fill
                            className="object-cover relative z-10"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent z-10 pointer-events-none"></div>
                    </div>

                    {/* Content Sections */}
                    <article className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-12 border border-gray-100">
                        <h2 className="text-3xl font-serif font-bold text-gray-900 mb-10 text-center">
                            4 Kolay Adımda Sipariş
                        </h2>

                        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-200 before:to-transparent">

                            {/* Step 1 */}
                            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-primary text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                                    <UserCheck size={18} />
                                </div>
                                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
                                    <h3 className="font-bold text-lg text-gray-900 mb-2">1. Üye Girişi Yapın</h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        Oriflame Türkiye web sitesine veya mobil uygulamasına gidin. Marka ortağı numaranız ve şifrenizle sisteme güvenli bir şekilde giriş yapın.
                                    </p>
                                </div>
                            </div>

                            {/* Step 2 */}
                            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-indigo-500 text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                                    <ShoppingCart size={18} />
                                </div>
                                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
                                    <h3 className="font-bold text-lg text-gray-900 mb-2">2. Ürünleri Sepete Ekleyin</h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        İster online kataloğu gezerek ürün kodlarına tıklayın, ister "Hızlı Sipariş" ekranına kodları doğrudan girerek sepetinizi %20 indirimli fiyatlarla doldurun.
                                    </p>
                                </div>
                            </div>

                            {/* Step 3 */}
                            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-teal-500 text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                                    <Truck size={18} />
                                </div>
                                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
                                    <h3 className="font-bold text-lg text-gray-900 mb-2">3. Kargo ve Adres Seçimi</h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        Siparişinizin gönderileceği adresi onaylayın. Sistem size en uygun kargo firmasını önerecektir. Bu ekranda dilerseniz kargo parası yerine "Kargo Sıfırlayıcı Ürün" ekleyebilirsiniz.
                                    </p>
                                </div>
                            </div>

                            {/* Step 4 */}
                            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-amber-500 text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                                    <CreditCard size={18} />
                                </div>
                                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
                                    <h3 className="font-bold text-lg text-gray-900 mb-2">4. Ödeme Yöntemi</h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        Kredi kartı/banka kartı, kapıda ödeme veya kredi kartına taksit imkanlarından size uygun olanı seçin ve siparişinizi onaylayın. Hepsi bu kadar!
                                    </p>
                                </div>
                            </div>

                        </div>
                    </article>

                    {/* Info Section */}
                    <div className="mb-12 p-8 bg-indigo-50 border border-indigo-100 rounded-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16"></div>
                        <h2 className="text-2xl font-serif font-bold text-indigo-900 mb-4 relative z-10">
                            Ödeme ve Kargo Avantajları
                        </h2>
                        <div className="text-gray-700 relative z-10 leading-relaxed space-y-4">
                            <p>
                                <strong>Kapıda Ödeme Kolaylığı:</strong> Siparişlerinizi güvenle verip, ödemesini kargonuz kapınıza geldiğinde nakit veya kredi kartıyla yapabilirsiniz. Bu yöntem yeni üyelerimiz için büyük güven sağlar.
                            </p>
                            <p>
                                <strong>Taksit Fırsatları:</strong> Belirli tutarın üzerindeki siparişlerinizde kredi kartına peşin fiyatına taksit avantajlarından faydalanarak bütçenizi sarsmadan alışveriş yapabilirsiniz.
                            </p>
                            <p>
                                <strong>Kargo Sıfırlayıcı Ürün (KSÜ):</strong> Kargo ücreti ödemek istemiyorsanız, sistemin size sunduğu çok özel indirimli bir "Kargo Sıfırlayıcı Ürün"ü sepetinize ekleyerek kargoyu tamamen bedavaya getirebilirsiniz!
                            </p>
                        </div>
                    </div>

                    {/* CTA Section */}
                    <div className="text-center bg-white rounded-3xl p-10 md:p-14 shadow-2xl relative overflow-hidden border border-gray-100">
                        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>
                        <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-indigo-400/10 rounded-full blur-3xl pointer-events-none"></div>

                        <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4 relative z-10">
                            Ayrıcalıklı Alışverişe Hazır mısınız?
                        </h2>
                        <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto relative z-10">
                            Bu kolay adımlarla Oriflame dünyasına adım atmak ve siparişinizi anında kargoya verdirmek için tek yapmanız gereken ücretsiz bir marka ortağı hesabı oluşturmak.
                        </p>

                        <Link
                            href="/#basvuru"
                            className="group relative z-10 flex items-center justify-center px-8 md:px-12 py-5 text-lg md:text-xl font-bold text-white bg-primary hover:bg-green-700 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 w-full mx-auto max-w-xl"
                        >
                            İndirimli Sipariş Vermek İçin Önce Ücretsiz Kaydol
                            <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>

                </div>
            </main>
        </>
    );
}
