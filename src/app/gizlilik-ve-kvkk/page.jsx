import React from 'react';
import Link from 'next/link';
import { ArrowLeft, ShieldCheck } from 'lucide-react';

export const metadata = {
    title: 'Gizlilik Politikası ve KVKK | Oriflame Marka Ortağı',
    description: 'Sitemizde toplanan kişisel verilerinizin nasıl korunduğuna ve işlendiğine dair Kişisel Verilerin Korunması Kanunu (KVKK) aydınlatma metnimiz.',
    robots: 'index, follow'
};

export default function GizlilikVeKvkkPage() {
    return (
        <main className="min-h-screen bg-gray-50 pb-20 pt-10">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header Section */}
                <div className="bg-white rounded-3xl shadow-md p-8 md:p-12 mb-8 border border-gray-100 text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -mr-16 -mt-16 pointer-events-none"></div>

                    <div className="inline-flex items-center justify-center w-16 h-16 bg-green-50 text-primary rounded-full mb-6">
                        <ShieldCheck size={32} />
                    </div>
                    <h1 className="text-3xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
                        Gizlilik Politikası ve KVKK Aydınlatma Metni
                    </h1>
                    <p className="text-sm font-medium text-gray-500 uppercase tracking-widest">
                        Son Güncelleme: Mart 2026
                    </p>
                </div>

                {/* Content Section */}
                <article className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100 mb-12">

                    <div className="prose prose-lg prose-green max-w-none text-gray-700 leading-relaxed">

                        <p className="text-lg mb-8">
                            Oriflame Bağımsız Marka Ortağı web sitesi ("Sitemiz") olarak, ziyaretçilerimizin ve kayıt formunu dolduran adaylarımızın gizliliğine, kişisel verilerinin güvenliğine en üst düzeyde saygı göstermekte ve hassasiyetle yaklaşmaktayız. Bu aydınlatma metni, 6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK") uyarınca sizleri bilgilendirmek amacıyla hazırlanmıştır.
                        </p>

                        <h2 className="text-2xl font-serif font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            1. Veri Sorumlusu
                        </h2>
                        <p>
                            Sitemiz üzerinden toplanan kişisel verileriniz, 6698 sayılı KVKK kapsamında, Oriflame Bağımsız Marka Ortağı olarak faaliyet gösteren site yetkilisi (veri sorumlusu) tarafından, aşağıda belirtilen şartlar ve yasal sınırlar çerçevesinde işlenmektedir. Site yetkilisi, Oriflame'in resmi çalışanı değil, bağımsız satış temsilcisi (Marka Ortağı) statüsündedir.
                        </p>

                        <h2 className="text-2xl font-serif font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            2. Toplanan Kişisel Veriler
                        </h2>
                        <p>
                            Sitemizdeki ücretsiz üyelik ve iletişim formları aracılığıyla, yalnızca sizin kendi rızanızla formlara girdiğiniz, aşağıdaki kişisel veriler toplanabilmektedir:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 mt-4 mb-6">
                            <li><strong>Kimlik Verisi:</strong> Adınız, soyadınız, cinsiyetiniz, doğum tarihiniz, T.C. Kimlik numaranız.</li>
                            <li><strong>İletişim Verisi:</strong> Cep telefonu numaranız, e-posta adresiniz, açık ikametgah/kargo adresiniz.</li>
                            <li><strong>İşlem Güvenliği Verisi:</strong> Sisteme giriş yapılan IP adresi ve form gönderim zamanı.</li>
                        </ul>

                        <h2 className="text-2xl font-serif font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            3. Verilerin İşlenme Amacı
                        </h2>
                        <p>
                            Toplanan kişisel verileriniz aşağıdaki amaçlarla ve yasal gereklilikler kapsamında işlenmektedir:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 mt-4 mb-6">
                            <li>Resmi Oriflame marka ortağı / VIP müşteri kaydınızın şirket sistemlerinde oluşturulması,</li>
                            <li>Siparişlerinizin faturandırılabilmesi için Maliye Bakanlığı yasaları gereği T.C. Kimlik numarasının yasal zorunlulukla işlenmesi,</li>
                            <li>Sipariş edilen ürünlerin kargo ile adresinize güvenli bir şekilde ulaştırılmasının sağlanması,</li>
                            <li>Tarafınıza üyelik süreçleri, kampanyalar ve Hoşgeldin Programı fırsatları hakkında bilgilendirme (SMS/Arama/E-posta) yapılması.</li>
                        </ul>

                        <h2 className="text-2xl font-serif font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            4. Verilerin Aktarımı
                        </h2>
                        <p>
                            Bize emanet ettiğiniz kişisel verileriniz <strong>kesinlikle yetkisiz 3. şahıslara veya kurumlara satılmaz, kiralanmaz ve paylaşılmaz.</strong> Verileriniz yalnızca üyeliğinizin aktifleştirilmesi amacıyla, yüksek güvenlik standartlarına sahip resmi <strong>Oriflame Türkiye (Oriflame Kozmetik Ürünleri Tic. Ltd. Şti.)</strong> veritabanına ve sipariş durumlarında yasal yükümlülük gereği kargo/lojistik firmalarına aktarılır.
                        </p>

                        <h2 className="text-2xl font-serif font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            5. Kullanıcı Hakları (KVKK Madde 11)
                        </h2>
                        <p>
                            KVKK'nın 11. maddesi kapsamında her kullanıcı şu haklara sahiptir:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 mt-4 mb-6">
                            <li>Kişisel verisinin işlenip işlenmediğini öğrenme,</li>
                            <li>İşlenmişse buna ilişkin bilgi talep etme,</li>
                            <li>İşlenme amacını ve amacına uygun kullanılıp kullanılmadığını öğrenme,</li>
                            <li>Eksik veya yanlış işlenen verilerin düzeltilmesini, kanundaki şartlar çerçevesinde silinmesini veya yok edilmesini talep etme.</li>
                        </ul>
                        <p className="mt-6">
                            Bu haklarınızı kullanmak veya verileriniz hakkında bilgi almak için web sitemizdeki iletişim sayfası aracılığıyla bizimle her zaman irtibata geçebilirsiniz. Sitemizi kullanmaya devam etmeniz ve üyelik formunu doldurmanız, bu şartları okuduğunuz ve şeffaf aydınlatma metnini kabul ettiğiniz anlamına gelmektedir.
                        </p>

                    </div>
                </article>

                {/* CTA Section */}
                <div className="text-center">
                    <Link
                        href="/"
                        className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-gray-700 bg-white border-2 border-gray-200 hover:border-gray-300 hover:bg-gray-50 rounded-full shadow-sm hover:shadow-md transition-all duration-300 group"
                    >
                        <ArrowLeft className="mr-3 w-5 h-5 text-gray-500 group-hover:-translate-x-1 transition-transform" />
                        Ana Sayfaya Dön
                    </Link>
                </div>

            </div>
        </main>
    );
}
