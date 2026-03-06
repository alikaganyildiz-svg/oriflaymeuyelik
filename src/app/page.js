
import Hero from '@/components/UI/Hero';
import InfoSection from '@/components/UI/InfoSection';
import EarningsTable from '@/components/UI/EarningsTable';

import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Oriflame Üyelik ve Kayıt | Oriflame Katalog & Sermayesiz İş',
  description: 'Oriflame kayıt ol işlemi ile ücretsiz üyelik fırsatını yakalayın. Sermayesiz iş kurarak Oriflame katalog ürünlerine indirimli sahip olun. Hemen Oriflame dünyasına katılın.',
}

export default function Home() {
  return (
    <div className="min-h-screen bg-background pb-20">

      {/* HERO SECTION (Includes Form) */}
      <div id="basvuru">
        <Hero />
      </div>

      {/* INFO / FEATURES SECTION */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">Neden Oriflame?</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">Hayallerinize ulaşmak için size sunduğumuz eşsiz fırsatları keşfedin.</p>
          </div>
          <InfoSection />
        </div>
      </section>

      {/* EARNINGS SECTION */}
      {/* <section id="kazanc" className="py-16 bg-green-50/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-primary font-bold tracking-widest uppercase text-xs mb-2 block">Kazanç Planı</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6">Ne Kadar Kazanabilirsin?</h2>
            <p className="text-gray-600 max-w-3xl mx-auto mb-8">
              Oriflame'de kazancın limiti yoktur. Satışlarınızdan anında %30 kâr elde ederken, ekibinizi büyüterek performans iskontoları ile aylık düzenli gelir sahibi olabilirsiniz.
            </p>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-lg">
            <EarningsTable />
          </div>
        </div>
      </section> */}

      {/* REHBER & FIRSATLAR SECTION */}
      <section className="py-16 bg-gray-50 border-t border-t-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-primary font-bold tracking-widest uppercase text-xs mb-2 block">Fırsatlar Dünyası</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">Oriflame Başarı ve Kazanç Rehberi</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">Alışverişlerinizi kazanca dönüştürecek özel stratejiler ve güncel fırsatları hemen keşfedin.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Kart 1 */}
            <Link href="/blog/oriflame-kazanc-tablosu-2026" className="group rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 flex flex-col h-full transform hover:-translate-y-1">
              <div className="relative h-56 md:h-64 w-full overflow-hidden">
                <div className="absolute inset-0 bg-green-900/10 z-10 group-hover:bg-transparent transition-colors duration-500"></div>
                <Image
                  src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=2000"
                  alt="2026 Oriflame Kazanç Tablosu"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 z-20">
                  <span className="bg-white/90 backdrop-blur-sm text-green-800 text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wide shadow-sm">Finansal Özgürlük</span>
                </div>
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-green-700 transition-colors">2026 Oriflame Kazanç Tablosu</h3>
                <p className="text-gray-600 leading-relaxed mb-6 flex-1">Oriflame ile ne kadar para kazanabilirsiniz? Güncel kazanç tablosu, direktörlük maaşları ve prim sisteminin tüm detaylarını inceleyin.</p>
                <div className="mt-auto flex items-center text-green-600 font-semibold group-hover:translate-x-2 transition-transform duration-300">
                  <span>Hemen İncele</span>
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </div>
              </div>
            </Link>

            {/* Kart 2 */}
            <Link href="/blog/oriflame-kargo-sifirlama-2026" className="group rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 flex flex-col h-full transform hover:-translate-y-1">
              <div className="relative h-56 md:h-64 w-full overflow-hidden">
                <div className="absolute inset-0 bg-green-900/10 z-10 group-hover:bg-transparent transition-colors duration-500"></div>
                <Image
                  src="https://images.unsplash.com/photo-1586528116311-ad8ed7c159ad?auto=format&fit=crop&q=80&w=2000"
                  alt="Oriflame Kargo Sıfırlama Taktikleri"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 z-20">
                  <span className="bg-white/90 backdrop-blur-sm text-green-800 text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wide shadow-sm">Bedava Kargo</span>
                </div>
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-green-700 transition-colors">Kargo Sıfırlama Taktikleri (2026)</h3>
                <p className="text-gray-600 leading-relaxed mb-6 flex-1">Siparişlerinizde kargo ücreti ödememek için güncel kargo sıfırlayıcı ürünleri ve Başarı Puanı taktiklerini keşfedin.</p>
                <div className="mt-auto flex items-center text-green-600 font-semibold group-hover:translate-x-2 transition-transform duration-300">
                  <span>Hemen Öğren</span>
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>      {/* BOTTOM CTA */}
      <section className="py-20 bg-primary text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">Hayallerine Bir Adım At</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">Binlerce kadın Oriflame ile kendi ayakları üzerinde duruyor. Sen de onlardan biri ol.</p>
          <a href="#basvuru" className="inline-block bg-white text-primary px-10 py-4 rounded-sm font-bold uppercase tracking-widest text-sm hover:bg-gray-100 transition-colors shadow-xl">
            Ücretsiz Üye Ol
          </a>
        </div>
      </section>

    </div>
  );
}
