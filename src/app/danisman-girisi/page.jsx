import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Lock, ExternalLink, ShieldCheck, UserPlus, Gift } from 'lucide-react';

export const metadata = {
    title: 'Oriflame Danışman Girişi 2026 | Marka Ortağı Ekranı',
    description: 'Oriflame marka ortağı (danışman) giriş sayfasına güvenle ulaşın. Şifrenizi mi unuttunuz? Giriş rehberimizi okuyun veya hemen yeni ücretsiz kaydınızı oluşturun.'
};

export default function DanismanGirisiPage() {
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "Oriflame danışman girişi nereden yapılır?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Marka ortağı numaranız ve şifrenizle Oriflame'in resmi web sitesi üzerinden güvenle giriş yapabilirsiniz. Sayfamızdaki yönlendirme butonunu kullanabilirsiniz."
                }
            },
            {
                "@type": "Question",
                "name": "Danışman şifremi unuttum, ne yapmalıyım?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Resmi giriş ekranındaki 'Şifremi Unuttum' bağlantısına tıklayarak, kayıtlı cep telefonunuza veya e-posta adresinize yeni şifre talep edebilirsiniz."
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
                        <div className="inline-flex items-center space-x-2 bg-green-100 text-green-800 px-4 py-2 rounded-full mb-6 relative overflow-hidden">
                            <Lock size={18} />
                            <span className="font-bold text-sm tracking-wide uppercase">Güvenli Giriş Paneli</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-5xl font-serif font-bold text-gray-900 mb-6 leading-tight">
                            Oriflame Danışman Girişi ve <br className="hidden md:block" />Marka Ortağı Ekranı
                        </h1>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8 leading-relaxed">
                            Bu sayfa üzerinden, sipariş vermek ve takımınızı yönetmek için kullandığınız resmi Oriflame marka ortağı (danışman) paneline güvenle giriş yapabilirsiniz.
                        </p>
                    </div>

                    {/* Visual Architecture */}
                    <div className="relative w-full h-[300px] md:h-[400px] rounded-3xl overflow-hidden shadow-2xl mb-12 bg-white">
                        <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-primary/20 flex items-center justify-center animate-pulse"></div>
                        <Image
                            src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&q=80&w=2000"
                            alt="Oriflame marka ortağı ve danışman giriş ekranı"
                            fill
                            className="object-cover relative z-10"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10 flex flex-col justify-end p-8">
                            <div className="flex items-center text-white bg-black/40 backdrop-blur-sm w-fit px-4 py-2 rounded-full">
                                <ShieldCheck className="w-5 h-5 mr-2 text-green-400" />
                                <span className="font-medium">256-bit Güvenli Bağlantı</span>
                            </div>
                        </div>
                    </div>

                    {/* Primary Function: Login Redirect */}
                    <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-16 border border-gray-100 text-center relative overflow-hidden">
                        <div className="absolute -top-10 -right-10 w-40 h-40 bg-green-50 rounded-full opacity-50 blur-2xl"></div>
                        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-green-50 rounded-full opacity-50 blur-2xl"></div>

                        <h3 className="text-2xl font-bold text-gray-900 mb-4 relative z-10">Mevcut Üyeler İçin Giriş</h3>
                        <p className="text-gray-600 mb-10 max-w-xl mx-auto relative z-10">
                            Oriflame danışman (marka ortağı) numaranız ve şifrenizi kullanarak sipariş sistemine ulaşmak için aşağıdaki güvenli kanalı kullanabilirsiniz. Şifrenizi hatırlamıyorsanız, açılan sayfada "Şifremi Unuttum" seçeneğiyle yenileyebilirsiniz.
                        </p>

                        {/* Note: This points to `#` as requested. Normally you could point it to the actual tr.oriflame.com login URL */}
                        <a
                            href="#"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group inline-flex items-center justify-center bg-[#5D8752] hover:bg-[#486b3f] text-white text-xl font-bold py-5 px-10 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 relative z-10"
                        >
                            Resmi Oriflame Sistemine Giriş Yap
                            <ExternalLink className="ml-3 w-6 h-6 group-hover:scale-110 transition-transform" />
                        </a>
                    </div>

                    {/* Non-Member Conversion Section */}
                    <div className="text-center mb-10">
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 inline-block relative">
                            Henüz Danışman Değil Misiniz?
                            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50"></div>
                        </h2>
                    </div>

                    {/* Attractive Promotion Card */}
                    <div className="bg-gradient-to-br from-green-900 to-black rounded-3xl p-10 md:p-14 shadow-2xl relative overflow-hidden mb-12 border border-gray-800 group">
                        <div className="absolute top-0 right-0 -mt-16 -mr-16 w-64 h-64 bg-primary/20 rounded-full blur-3xl pointer-events-none group-hover:bg-primary/30 transition-colors duration-1000"></div>
                        <div className="absolute bottom-0 left-0 -mb-16 -ml-16 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-pink-500/20 transition-colors duration-1000"></div>

                        <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 md:gap-12">
                            <div className="flex-1 text-center md:text-left">
                                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                                    Fırsatları Kaçırmayın!
                                </h3>
                                <p className="text-gray-300 leading-relaxed text-lg mb-6">
                                    Bağımsız Marka Ortağı olarak kataloğumuzdaki binlerce ürünü <strong>%20 net indirimle</strong> almak, ilk 3 ay muhteşem <strong>Hoşgeldin Hediyeleri</strong> kazanmak ve kendi ekibinizi kurarak sınırsız prim kazanmak için henüz geç kalmadınız. Üyelik aidatı yok, sipariş kotası yok!
                                </p>
                                <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
                                    <div className="flex items-center text-emerald-300 bg-emerald-900/40 px-3 py-1.5 rounded-full border border-emerald-800/50">
                                        <Gift className="w-4 h-4 mr-2" />
                                        <span className="text-sm font-medium">Hoşgeldin Hediyeleri</span>
                                    </div>
                                    <div className="flex items-center text-emerald-300 bg-emerald-900/40 px-3 py-1.5 rounded-full border border-emerald-800/50">
                                        <ShieldCheck className="w-4 h-4 mr-2" />
                                        <span className="text-sm font-medium">Ücretsiz Üyelik</span>
                                    </div>
                                </div>
                            </div>

                            <div className="shrink-0 w-full md:w-auto">
                                <Link
                                    href="/#basvuru"
                                    className="group flex items-center justify-center px-8 py-5 text-lg font-bold text-green-900 bg-white hover:bg-gray-50 rounded-full shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] transition-all duration-300 transform hover:-translate-y-1 w-full"
                                >
                                    <UserPlus className="mr-3 w-6 h-6 shrink-0" />
                                    Siz de Ekibimize Katılın: Ücretsiz Kayıt Olun
                                    <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 shrink-0 transition-transform opacity-70" />
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>
            </main>
        </>
    );
}
