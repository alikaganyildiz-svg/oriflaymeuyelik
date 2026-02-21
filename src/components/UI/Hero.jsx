import React from 'react';
import Image from 'next/image';
import FAQ from './FAQ';
import OriflameIframe from './OriflameIframe';

const Hero = () => {
    return (
        <section className="relative w-full bg-gray-50 py-12 lg:py-20 overflow-hidden min-h-screen flex items-center">
            {/* Background Image Layer */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="https://images.unsplash.com/photo-1596462502278-27bfdd403348?q=80&w=2070&auto=format&fit=crop"
                    alt="Oriflame Background"
                    fill
                    priority={true}
                    className="object-cover opacity-15 filter blur-sm"
                    sizes="100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/70 to-gray-50/90"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full"> {/* Increased max-w */}

                <div className="flex flex-col lg:flex-row items-start justify-between gap-12">

                    {/* Left Column: Text & Value Prop */}
                    <div className="w-full lg:w-1/2 space-y-8 animate-fade-in-up text-left pt-10">
                        <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary font-bold text-sm uppercase tracking-widest rounded-full mb-2">
                            Güzellik & Kazanç Dünyası
                        </span>

                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-gray-900 leading-tight">
                            Kendi İşinin <br />
                            <span className="text-primary italic">Patronu Ol</span>
                        </h1>

                        <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
                            Sermayesiz, risksiz ve çalışma saatlerini senin belirlediğin bir iş fırsatı.
                            Oriflame dünyasına katıl, hem harika görün hem de kazanmaya başla.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 pt-6 border-b border-gray-200 pb-8 mb-8 w-full">
                            <div className="flex -space-x-4">
                                <Image width={56} height={56} className="rounded-full border-4 border-white shadow-md" src="https://randomuser.me/api/portraits/women/44.jpg" alt="User" />
                                <Image width={56} height={56} className="rounded-full border-4 border-white shadow-md" src="https://randomuser.me/api/portraits/women/65.jpg" alt="User" />
                                <Image width={56} height={56} className="rounded-full border-4 border-white shadow-md" src="https://randomuser.me/api/portraits/women/32.jpg" alt="User" />
                                <div className="w-14 h-14 rounded-full border-4 border-white bg-gray-100 flex items-center justify-center text-sm font-bold text-gray-600 shadow-md">+25k</div>
                            </div>
                            <p className="text-base text-gray-700 font-medium">
                                Bu ay <span className="text-primary font-bold text-lg">1.250+</span> kişi aramıza katıldı.
                            </p>
                        </div>

                        {/* SEO Content Summary (Hidden on mobile or reduced?) */}
                        <div className="hidden lg:block space-y-6 text-gray-700 leading-relaxed text-lg">
                            <p>
                                Oriflame dünyasına adım atmak artık çok kolay. Güzellik ve kazanç dolu bir yolculuğa çıkın.
                                İster kendi ihtiyaçlarınızı indirimli almak için, ister <strong>sermayesiz iş</strong> kurarak ek gelir elde etmek için Oriflame avantajlarından faydalanabilirsiniz.
                            </p>
                        </div>

                        {/* FAQ Section - Moved to Left Column */}
                        <div className="mt-12 text-left bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6">Merak Ettikleriniz</h2>
                            <FAQ />
                        </div>
                    </div>

                    {/* Right Column: Iframe Form */}
                    <div className="w-full lg:w-1/2 relative">
                        <div className="relative z-20 transform lg:translate-y-10"> {/* Slight overlap or adjust */}
                            {/* Optional Badge */}
                            <div className="absolute -top-6 -right-6 z-30 hidden lg:block">
                                <div className="bg-primary text-white w-24 h-24 rounded-full flex items-center justify-center font-bold text-center p-2 shadow-lg rotate-12">
                                    <span className="text-xs uppercase tracking-wide">Ücretsiz<br />Kayıt Ol</span>
                                </div>
                            </div>

                            <OriflameIframe />
                        </div>
                    </div>

                </div>

                {/* SEO Content Block (Rest of content) */}
                <div className="space-y-12 text-gray-700 leading-relaxed text-sm max-w-7xl mx-auto pt-20 text-left">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-white p-6 rounded-xl shadow-sm">
                            <h2 className="text-lg font-serif font-bold text-gray-900 mb-3">Oriflame Üyelik & Kayıt</h2>
                            <ul className="space-y-3 mt-2">
                                <li className="flex items-start"><span className="text-primary mr-2">✓</span> <span>Oriflame Dünyasına Adım Atın: Ücretsiz Üyelik ve Kayıt, Anında %15 İndirim.</span></li>
                                <li className="flex items-start"><span className="text-primary mr-2">✓</span> <span>Ayrıcalıklı Müşteri Olmak Çok Kolay, Kazanmaya Başlamak Bir Tık Uzağınızda.</span></li>
                                <li className="flex items-start"><span className="text-primary mr-2">✓</span> <span>Oriflame Üyeliği ile Güzellik Sırlarına ve Özel İndirimlere Kapı Aralayın.</span></li>
                            </ul>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-sm">
                            <h2 className="text-lg font-serif font-bold text-gray-900 mb-3">Katalog ile Kazanç</h2>
                            <ul className="space-y-3 mt-2">
                                <li className="flex items-start"><span className="text-primary mr-2">✓</span> <span>Yeni Oriflame Kataloğunu Keşfedin, Favori Ürünlerinizi %15 İndirimle Alın.</span></li>
                                <li className="flex items-start"><span className="text-primary mr-2">✓</span> <span>Doğanın Gücü Sayfalarda: En Güncel Kataloğu Hemen İnceleyin.</span></li>
                                <li className="flex items-start"><span className="text-primary mr-2">✓</span> <span>Aradığınız Güzellik Burada: Kataloğa Göz Atın, Fırsatları Yakalayın.</span></li>
                            </ul>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-sm">
                            <h2 className="text-lg font-serif font-bold text-gray-900 mb-3">Üyelik Avantajları</h2>
                            <ul className="space-y-3 mt-2">
                                <li className="flex items-start"><span className="text-primary mr-2">✓</span> <span>Akıllı Alışverişin Formülü: %15 İndirim + %15 Cüzdan İadesi!</span></li>
                                <li className="flex items-start"><span className="text-primary mr-2">✓</span> <span>Güzelliğinize Harcarken Cüzdanınızı Doldurun.</span></li>
                                <li className="flex items-start"><span className="text-primary mr-2">✓</span> <span>İlk Siparişinize Özel Kargo Bizden, Güzellik Sizden.</span></li>
                            </ul>
                        </div>
                    </div>


                </div>

            </div>
        </section>
    );
};

export default Hero;
