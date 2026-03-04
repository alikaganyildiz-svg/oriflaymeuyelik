import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Truck, MapPin, Package, Bell, ShoppingBag, ArrowRight, ShieldCheck, Clock } from 'lucide-react';

export const metadata = {
    title: 'Oriflame Sipariş Takibi ve Kargo Sorgulama 2026',
    description: 'Oriflame siparişiniz nerede? Kargo takip numaranızla veya danışman sayfanızdan siparişinizin durumunu hemen sorgulayın. Hızlı ve güvenli kargo rehberi.'
};

export default function SiparisTakibiPage() {
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "Oriflame siparişimi nasıl takip edebilirim?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Marka ortağı numaranızla resmi siteye giriş yaparak 'Siparişlerim' bölümünden veya size SMS ile gelen kargo takip numarasıyla kargo firmasının sitesinden takip edebilirsiniz."
                }
            },
            {
                "@type": "Question",
                "name": "Hangi kargo şirketleriyle çalışıyorsunuz?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Siparişleriniz güvenli ve hızlı teslimat için Yurtiçi Kargo, Aras Kargo veya MNG Kargo gibi anlaşmalı kurumsal kargo firmalarıyla gönderilmektedir."
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
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

                    {/* Header */}
                    <div className="text-center mb-10">
                        <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full mb-6 relative overflow-hidden">
                            <Truck size={18} />
                            <span className="font-bold text-sm tracking-wide uppercase">Hızlı ve Güvenli Teslimat</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-5xl font-serif font-bold text-gray-900 mb-6 leading-tight">
                            Oriflame Sipariş Takibi:<br className="hidden md:block" /> Kargom Nerede?
                        </h1>
                        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
                            Siparişleriniz onaylandıktan sonra büyük bir özenle hazırlanır ve genellikle <strong className="text-gray-900">2-4 iş günü içerisinde</strong> anlaşmalı kargo firmaları güvencesiyle kapınıza kadar ulaştırılır. Kargonuzun nerede olduğunu adım adım takip edebilirsiniz.
                        </p>
                    </div>

                    {/* Hero Image */}
                    <div className="relative w-full h-[300px] md:h-[400px] rounded-3xl overflow-hidden shadow-2xl mb-16 bg-white">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-primary/20 flex items-center justify-center animate-pulse"></div>
                        <Image
                            src="https://images.unsplash.com/photo-1580674285054-bed31e145f59?auto=format&fit=crop&q=80&w=2000"
                            alt="Oriflame kargo ve sipariş takip rehberi"
                            fill
                            className="object-cover relative z-10"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent z-10 flex flex-col justify-end p-8 md:p-12">
                            <div className="flex items-center text-white bg-black/40 backdrop-blur-sm w-fit px-5 py-3 rounded-full">
                                <Package className="w-5 h-5 mr-3 text-blue-400" />
                                <span className="font-medium text-lg">Özenle Paketlenmiş Koliler Yolda!</span>
                            </div>
                        </div>
                    </div>

                    {/* Tracking Guide / Steps */}
                    <div className="mb-16">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-10">Siparişinizi Sorgulamanın 2 Kolay Yolu</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                            {/* Step 1 */}
                            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 relative group hover:-translate-y-2 transition-transform duration-300">
                                <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-6 border border-blue-100 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                                    <MapPin size={32} />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">1. Resmi Sistem Üzerinden</h3>
                                <p className="text-gray-600 leading-relaxed mb-6">
                                    Oriflame marka ortağı / danışman numaranız ve şifrenizle giriş yaparak "Siparişlerim" menüsünden tüm sipariş geçmişinizi ve kargoya verilme durumunu anlık olarak görüntüleyebilirsiniz.
                                </p>
                                <a
                                    href="/danisman-girisi"
                                    className="inline-flex items-center font-bold text-blue-600 hover:text-blue-800 transition-colors"
                                >
                                    Sisteme Giriş Yapın <ArrowRight className="ml-2 w-5 h-5" />
                                </a>
                            </div>

                            {/* Step 2 */}
                            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 relative group hover:-translate-y-2 transition-transform duration-300">
                                <div className="w-16 h-16 bg-green-50 text-green-600 rounded-full flex items-center justify-center mb-6 border border-green-100 group-hover:bg-green-600 group-hover:text-white transition-colors duration-300">
                                    <Bell size={32} />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">2. SMS ve Kargo Firması ile</h3>
                                <p className="text-gray-600 leading-relaxed mb-6">
                                    Siparişiniz depodan çıkıp kargo firmasına (Yurtiçi, Aras veya MNG) teslim edildiğinde, doğrudan cep telefonunuza bir SMS veya e-posta ile gönderi takip numarası iletilir.
                                </p>
                                <div className="flex items-center text-sm font-medium text-gray-500 bg-gray-50 px-4 py-3 rounded-xl">
                                    <Clock className="w-5 h-5 mr-3 text-gray-400" />
                                    SMS gelmediyse, siparişiniz henüz kargoya teslim edilmemiş olabilir.
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Non-Member Conversion Section */}
                    <div className="text-center mb-10">
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 inline-block relative">
                            Henüz Sipariş Vermediniz mi?
                            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50"></div>
                        </h2>
                    </div>

                    {/* Promotional Conversion Card */}
                    <div className="bg-gradient-to-br from-green-900 via-primary to-green-950 rounded-3xl p-10 md:p-14 shadow-2xl relative overflow-hidden border border-green-800 group mb-12">
                        <div className="absolute top-0 right-0 -mt-16 -mr-16 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none group-hover:bg-white/20 transition-colors duration-1000"></div>
                        <div className="absolute bottom-0 left-0 -mb-16 -ml-16 w-64 h-64 bg-pink-500/20 rounded-full blur-3xl pointer-events-none"></div>

                        <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 md:gap-12">
                            <div className="flex-1 text-center md:text-left">
                                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                                    Kargo Bekleyen Değil, Kazanan Olun!
                                </h3>
                                <p className="text-green-50 leading-relaxed text-lg mb-6">
                                    Sipariş takibi için buradasınız ama biliyor musunuz? Şu an sisteme <strong>ücretsiz marka ortağı</strong> olarak kaydolarak vereceğiniz işlemlerde, tüm ürünleri <strong>net %20 indirimli (geliş fiyatından)</strong> alacaksınız! Ayın muhteşem Hoşgeldin Hediyeleri de sepetinize eklenecek.
                                </p>
                                <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
                                    <div className="flex items-center text-white bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm border border-white/20">
                                        <ShoppingBag className="w-5 h-5 mr-2 text-pink-300" />
                                        <span className="font-medium">İlk Siparişe Özel İndirim</span>
                                    </div>
                                </div>
                            </div>

                            <div className="shrink-0 w-full md:w-auto">
                                <Link
                                    href="/#basvuru"
                                    className="group flex flex-col items-center justify-center px-8 py-5 text-lg font-bold text-green-900 bg-white hover:bg-gray-100 rounded-2xl shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] transition-all duration-300 transform hover:-translate-y-1 w-full text-center"
                                >
                                    <span className="flex items-center mb-1">
                                        İndirimli Sipariş Vermek İçin <ArrowRight className="ml-2 w-5 h-5 shrink-0 group-hover:translate-x-1 transition-transform" />
                                    </span>
                                    <span className="text-sm font-bold text-pink-600 uppercase tracking-wide">Hemen Ücretsiz Kaydolun</span>
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>
            </main>
        </>
    );
}
