import React from 'react';
import Image from 'next/image';
import MembershipForm from './MembershipForm';
import FAQ from './FAQ';

const Hero = () => {
    return (
        <section className="relative w-full bg-gray-50 py-12 lg:py-20 overflow-hidden min-h-screen flex items-center">
            {/* Background Image Layer */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="https://images.unsplash.com/photo-1596462502278-27bfdd403348?q=80&w=2070&auto=format&fit=crop"
                    alt="Oriflame Background"
                    fill
                    className="object-cover opacity-10 filter blur-sm"
                    sizes="100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/80 to-gray-50/95"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-12 gap-12 items-start">

                    {/* Left Column: Content (7 cols) */}
                    <div className="lg:col-span-7 space-y-8 animate-fade-in-up">
                        <div className="text-left">
                            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary font-bold text-sm uppercase tracking-widest rounded-full mb-6">
                                Güzellik & Kazanç Dünyası
                            </span>

                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-gray-900 leading-tight mb-6">
                                Kendi İşinin <br />
                                <span className="text-primary italic">Patronu Ol</span>
                            </h1>

                            <p className="text-xl text-gray-600 max-w-2xl leading-relaxed mb-8">
                                Sermayesiz, risksiz ve çalışma saatlerini senin belirlediğin bir iş fırsatı.
                                Oriflame dünyasına katıl, hem harika görün hem de kazanmaya başla.
                            </p>

                            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-4 border-b border-gray-200 pb-10 mb-10">
                                <div className="flex -space-x-4">
                                    <Image width={48} height={48} className="rounded-full border-4 border-white shadow-sm" src="https://randomuser.me/api/portraits/women/44.jpg" alt="User" />
                                    <Image width={48} height={48} className="rounded-full border-4 border-white shadow-sm" src="https://randomuser.me/api/portraits/women/65.jpg" alt="User" />
                                    <Image width={48} height={48} className="rounded-full border-4 border-white shadow-sm" src="https://randomuser.me/api/portraits/women/32.jpg" alt="User" />
                                    <div className="w-12 h-12 rounded-full border-4 border-white bg-gray-100 flex items-center justify-center text-xs font-bold text-gray-600 shadow-sm">+25k</div>
                                </div>
                                <p className="text-sm text-gray-600">
                                    Bu ay <span className="text-primary font-bold">1.250+</span> kişi aramıza katıldı.
                                </p>
                            </div>
                        </div>

                        {/* FAQ moved to left as per previous context preference */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6">Merak Ettikleriniz</h2>
                            <FAQ />
                        </div>
                    </div>

                    {/* Right Column: CTA Card (5 cols) */}
                    <div className="lg:col-span-5 sticky top-24">
                        <MembershipForm />
                    </div>

                </div>

                {/* Additional SEO Content below the fold */}
                <div className="mt-24 space-y-12 text-gray-700 leading-relaxed text-lg max-w-4xl pt-10 border-t border-gray-200">
                    <div>
                        <h2 className="text-3xl font-serif font-bold text-primary mb-4">Oriflame İle Hayallerinize Kapı Aralayın</h2>
                        <p>
                            Oriflame dünyasına adım atmak artık çok kolay. Güzellik ve kazanç dolu bir yolculuğa çıkın.
                            İster kendi ihtiyaçlarınızı indirimli almak için, ister <strong>sermayesiz iş</strong> kurarak ek gelir elde etmek için Oriflame avantajlarından faydalanabilirsiniz.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-3 text-lg">Katalog ile Kazanç</h2>
                            <p className="text-sm">
                                Her ay yenilenen <strong>Oriflame katalog</strong>, binlerce kozmetik ve cilt bakımı ürününü beğenininize sunar. Satışlarınızdan kâr elde edin.
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-3 text-lg">Üyelik Avantajları</h2>
                            <ul className="space-y-2 text-sm mt-2">
                                <li className="flex items-start"><span className="text-primary mr-2">✓</span> <span>Ücretsiz Başlangıç</span></li>
                                <li className="flex items-start"><span className="text-primary mr-2">✓</span> <span>İndirimli Alışveriş</span></li>
                                <li className="flex items-start"><span className="text-primary mr-2">✓</span> <span>Hoşgeldin Hediyeleri</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
