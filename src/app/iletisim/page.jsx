import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Sparkles, Mail, Clock, Send, MapPin } from 'lucide-react';

export const metadata = {
    title: 'İletişim | Oriflame Bağımsız Marka Ortağı',
    description: 'Oriflame üyeliği, sipariş süreci veya ürünler hakkında bilgi almak için iletişime geçin. Ekibime katılmak ve sorularınız için buradayım.'
};

export default function IletisimPage() {
    const contactSchema = {
        "@context": "https://schema.org",
        "@type": "ContactPage",
        "name": "İletişim | Oriflame Bağımsız Marka Ortağı",
        "description": "Oriflame hakkında bilgi almak, ücretsiz üye olmak veya sipariş süreçleri için iletişim sayfası.",
        "url": "https://oriflaymeuyelik.com/iletisim", // Alan adınızı uygun şekilde değiştirin
        "mainEntity": {
            "@type": "ContactPoint",
            "contactType": "Müşteri Hizmetleri ve Üyelik Desteği",
            "email": "iletisim@oriflaymeuyelik.com", // Kendi e-postanızı girin
            "hoursAvailable": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                    "Sunday"
                ],
                "opens": "09:00",
                "closes": "20:00"
            }
        }
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
            />

            <main className="min-h-screen bg-gray-50 pb-20 pt-10">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

                    {/* Header */}
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6 relative overflow-hidden group">
                            <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                            <Sparkles size={18} />
                            <span className="font-bold text-sm tracking-wide uppercase">Size Bir Adım Uzaktayım</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6 leading-tight">
                            İletişime Geçin
                        </h1>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Sorularınız mı var? Oriflame dünyasına adım atmak, kariyer fırsatlarını değerlendirmek veya sadece favori ürünleriniz hakkında fikir almak için bana her zaman ulaşabilirsiniz. Size yardımcı olmaktan mutluluk duyarım!
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">

                        {/* Visual Architecture and Contact Cards */}
                        <div className="space-y-8">

                            <div className="relative w-full h-[250px] md:h-[300px] rounded-3xl overflow-hidden shadow-xl bg-white">
                                {/* Fallback pattern */}
                                <div className="absolute inset-0 bg-gradient-to-br from-teal-50 to-primary/20 flex items-center justify-center animate-pulse"></div>

                                <Image
                                    src="https://images.unsplash.com/photo-1534536281715-e28d76689b4d?auto=format&fit=crop&q=80&w=2000"
                                    alt="Oriflame iletişim ve üyelik desteği"
                                    fill
                                    className="object-cover relative z-10"
                                    priority
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10 pointer-events-none"></div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {/* Mail Card */}
                                <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 flex flex-col items-center text-center hover:border-primary/30 transition-colors">
                                    <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-4">
                                        <Mail size={24} />
                                    </div>
                                    <h3 className="font-bold text-gray-900 text-lg mb-1">E-Posta</h3>
                                    <a href="mailto:iletisim@siteadiniz.com" className="text-gray-600 hover:text-primary transition-colors text-sm break-all">
                                        iletisim@siteadiniz.com
                                    </a>
                                </div>

                                {/* Hours Card */}
                                <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 flex flex-col items-center text-center hover:border-primary/30 transition-colors">
                                    <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-4">
                                        <Clock size={24} />
                                    </div>
                                    <h3 className="font-bold text-gray-900 text-lg mb-1">Çalışma Saatleri</h3>
                                    <p className="text-gray-600 text-sm">
                                        Haftanın 7 Günü<br />
                                        09:00 - 20:00
                                    </p>
                                </div>
                            </div>

                        </div>

                        {/* Quick Contact Form (Static UI linked to main form action) */}
                        <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-gray-100 h-full flex flex-col">
                            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-2">
                                Bana Hızlıca Ulaşın
                            </h2>
                            <p className="text-gray-500 mb-8 text-sm">
                                Aşağıdaki formu doldurarak aklınızdaki soruları hemen iletebilirsiniz. En kısa sürede dönüş sağlayacağım.
                            </p>

                            <form className="space-y-5 flex-grow" action="/#basvuru" method="GET">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Adınız Soyadınız</label>
                                    <input
                                        type="text"
                                        id="name"
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-gray-50 focus:bg-white"
                                        placeholder="Örn: Ayşe Yılmaz"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">E-Posta veya Telefon</label>
                                    <input
                                        type="text"
                                        id="email"
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-gray-50 focus:bg-white"
                                        placeholder="Size geri dönebilmem için..."
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Mesajınız</label>
                                    <textarea
                                        id="message"
                                        rows="4"
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-gray-50 focus:bg-white resize-none"
                                        placeholder="Sormak istediklerinizi buraya yazın..."
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-gray-900 hover:bg-gray-800 text-white font-bold py-4 rounded-xl shadow-lg transition-all flex items-center justify-center space-x-2 group mt-4"
                                >
                                    <span>Mesajı Gönder</span>
                                    <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                                </button>
                            </form>
                        </div>

                    </div>

                    {/* Banner & Final CTA */}
                    <div className="bg-gradient-to-br from-primary via-green-600 to-green-700 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden text-center text-white">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none -mt-20 -mr-20"></div>
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full blur-3xl pointer-events-none -mb-20 -ml-20"></div>

                        <h2 className="text-3xl font-serif font-bold text-white mb-4 relative z-10">
                            Soru Sormaktan Fazlasını Yapın!
                        </h2>
                        <p className="text-primary-50 text-base md:text-lg mb-8 max-w-2xl mx-auto relative z-10 opacity-90">
                            Cevapları beklemeden fırsatlar dünyasına doğrudan adım atabilirsiniz. Oriflame ailesine katılıp indirimli alışverişin, muhteşem hediyelerin ve kârlı bir işin parçası olun.
                        </p>

                        <Link
                            href="/#basvuru"
                            className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-gray-900 bg-white hover:bg-gray-50 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 relative z-10 group"
                        >
                            Hemen Kazanmaya Başlamak İçin Kayıt Formunu Doldurun
                            <ArrowRight className="ml-3 w-5 h-5 text-gray-900 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>

                </div>
            </main>
        </>
    );
}
