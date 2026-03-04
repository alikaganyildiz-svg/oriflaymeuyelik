import React from 'react';
import Link from 'next/link';
import { ArrowRight, Scale } from 'lucide-react';

export const metadata = {
    title: 'Kullanım Koşulları ve Yasal Uyarı | Oriflame Bağımsız Marka Ortağı',
    description: 'Web sitemizin kullanım koşulları, telif hakları ve Bağımsız Marka Ortağı yasal uyarı metni.',
    robots: 'index, follow'
};

export default function KullanimKosullariPage() {
    return (
        <main className="min-h-screen bg-gray-50 pb-20 pt-10">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header Section */}
                <div className="bg-white rounded-3xl shadow-md p-8 md:p-12 mb-8 border border-gray-100 text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -mr-16 -mt-16 pointer-events-none"></div>

                    <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-50 text-blue-600 rounded-full mb-6">
                        <Scale size={32} />
                    </div>
                    <h1 className="text-3xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
                        Kullanım Koşulları ve Yasal Uyarı
                    </h1>
                    <p className="text-sm font-medium text-gray-500 uppercase tracking-widest">
                        Bağımsız Marka Ortağı Beyannamesi
                    </p>
                </div>

                {/* Content Section */}
                <article className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100 mb-12">

                    <div className="prose prose-lg prose-blue max-w-none text-gray-700 leading-relaxed">

                        <p className="text-lg mb-8">
                            Bu web sitesini ziyaret ederek veya iletişim/kayıt formlarımızı doldurarak, aşağıda belirtilen Kullanım Koşulları ve Yasal Uyarı beyannamelerini okumuş, anlamış ve kabul etmiş sayılırsınız. Lütfen hizmetlerimizi kullanmadan önce bu metni dikkatle inceleyiniz.
                        </p>

                        <h2 className="text-2xl font-serif font-bold text-gray-900 mt-10 mb-4 border-b border-gray-100 pb-2">
                            Bağımsız Marka Ortağı Beyanı
                        </h2>
                        <p className="font-semibold text-gray-800 bg-gray-50 p-4 border-l-4 border-blue-600 rounded-r-lg mb-6">
                            ÖNEMLİ BİLGİLENDİRME: Bu web sitesi, Oriflame Kozmetik Ürünleri Tic. Ltd. Şti. ("Oriflame Türkiye") şirketinin resmi kurumsal internet sitesi değildir.
                        </p>
                        <p>
                            Sitemiz, tamamen bağımsız olarak faaliyet gösteren yetkili bir <strong>Oriflame Bağımsız Marka Ortağı</strong> tarafından yönetilmektedir. Sitede yer alan iletişim, tanıtım, kozmetik tavsiyeleri ve üyelik toplama faaliyetleri şahsımıza (bağımsız temsilciye) ait olup şirket resmi kanallarından bağımsız ve etik kurallar çerçevesinde sürdürülmektedir.
                        </p>

                        <h2 className="text-2xl font-serif font-bold text-gray-900 mt-10 mb-4 border-b border-gray-100 pb-2">
                            Fikri Mülkiyet ve Telif Hakları
                        </h2>
                        <p>
                            Bu sitede adı geçen Oriflame markası, logoları, ürün görselleri, ticari markalar, katalog tasarımları ve şirkete ait tüm tescilli fikri mülkiyet hakları, doğrudan <strong>Oriflame Kozmetik firmasına aittir.</strong>
                        </p>
                        <p className="mt-4">
                            İşbu web sitesinde bu kurumsal materyaller; sadece marka ortaklığının doğası gereği ürünlerin doğru tanıtımını yapabilmek ve ziyaretçilere şeffaf iş fırsatları sunabilmek adına, bağımsız danışmanlık kuralları çerçevesinde <strong>bilgilendirme amacıyla</strong> kullanılmaktadır. Sitemizdeki tarafımızca üretilen özgün kampanya içerikleri, tasarım kodları ve metinlerin ise yazılı iznimiz olmadan kopyalanması, çoğaltılması ve başka platformlarda kullanılması telif hakları ihlali sayılacaktır.
                        </p>

                        <h2 className="text-2xl font-serif font-bold text-gray-900 mt-10 mb-4 border-b border-gray-100 pb-2">
                            Sorumluluk Reddi
                        </h2>
                        <p>
                            Web sitemizde yer alan ürün fiyatları, Hoşgeldin Programı hediyeleri, indirim oranları, seviyeler ve prim/kazanç tabloları yayınlandığı güncel katalog dönemine (ve o anki sistem dinamiklerine) aittir ve açıkça sadece <strong>bilgilendirme amaçlıdır.</strong>
                        </p>
                        <p className="mt-4">
                            Oriflame Türkiye ana firması; her kampanya döneminde fiyatları, stok durumlarını, üretim politikalarını ve fırsat koşullarını önceden haber vermeksizin değiştirme hakkını saklı tutar.
                        </p>
                        <p className="mt-4 font-medium">
                            Olası uyuşmazlıklarda, stok tükenmelerinde ve resmi üyelik/sipariş onay aşamalarında, sistemde onaylandığı andaki <strong>Oriflame resmi internet sitesi ve sistemlerindeki güncel kayıtlar, fiyatlar ve Tüketici Hakları geçerli olacaktır.</strong> Sitemiz (veritabanı yöneticisi), kampanya tarihlerinden veya olası yazım/fiyat güncellemelerinden doğabilecek dolaylı veya doğrudan maddi hatalardan, stok problemlerinden dolayı hukuki olarak sorumlu tutulamaz.
                        </p>

                    </div>
                </article>

                {/* CTA Section */}
                <div className="text-center">
                    <Link
                        href="/#basvuru"
                        className="inline-flex items-center justify-center px-6 py-4 md:px-10 md:py-5 text-base md:text-lg font-bold text-white bg-gray-900 hover:bg-gray-800 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 w-full max-w-3xl mx-auto group leading-snug"
                    >
                        Koşulları kabul ediyor ve avantajlar dünyasına katılmak istiyorsanız...
                        <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 shrink-0 transition-transform" />
                    </Link>
                </div>

            </div>
        </main>
    );
}
