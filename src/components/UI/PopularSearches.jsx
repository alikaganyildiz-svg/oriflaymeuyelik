import React from 'react';
import Link from 'next/link';

const PopularSearches = () => {
    const categories = [
        {
            title: "Üyelik ve Kayıt",
            links: [
                { name: "Oriflame Üye Olmak İstiyorum", href: "https://oriflaymeuyelik.com/oriflame-uye-olmak-istiyorum" },
                { name: "Üyelik Şartları", href: "/uyelik-sartlari" },
                { name: "Marka Ortağı Başvurusu", href: "/marka-ortagi-basvurusu" },
                { name: "Kayıt Formu", href: "/kayit-formu" },
                { name: "Ücretsiz Üyelik Avantajları", href: "/ucretsiz-uyelik-avantajlari" }
            ]
        },
        {
            title: "Katalog ve Ürünler",
            links: [
                { name: "Güncel Oriflame Kataloğu", href: "/katalog" },
                { name: "Cilt Bakım Setleri", href: "/cilt-bakim-setleri" },
                { name: "Parfüm İndirimleri", href: "/parfum-indirimleri" },
                { name: "Wellness Ürünleri", href: "/wellness-urunleri" },
                { name: "Yeni Gelenler", href: "/yeni-gelenler" }
            ]
        },
        {
            title: "Kazanç ve Fırsatlar",
            links: [
                { name: "Kazanç Planı", href: "/kazanc-plani" },
                { name: "Hoşgeldin Programı", href: "/hosgeldin-programi" },
                { name: "Nasıl Sipariş Verilir?", href: "/nasil-siparis-verilir" },
                { name: "Ek Gelir Fırsatı", href: "/ek-gelir-firsati" },
                { name: "Başarı Hikayeleri", href: "/basari-hikayeleri" }
            ]
        },
        {
            title: "Popüler Aramalar",
            links: [
                { name: "Oriflame Sipariş Takibi", href: "/siparis-takibi" },
                { name: "Danışman Girişi", href: "/danisman-girisi" },
                { name: "İade Koşulları", href: "/iade-kosullari" },
                { name: "Katalog Talep Et", href: "/katalog-talep-et" },
                { name: "İletişim", href: "/iletisim" }
            ]
        }
    ];

    return (
        <section className="bg-gray-50 py-10 border-t border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                    {categories.map((category, idx) => (
                        <div key={idx}>
                            <h3 className="font-semibold text-gray-800 text-sm mb-4">
                                {category.title}
                            </h3>
                            <ul className="space-y-2.5">
                                {category.links.map((link, linkIdx) => (
                                    <li key={linkIdx}>
                                        <Link
                                            href={link.href}
                                            className="text-xs text-gray-500 hover:text-gray-900 hover:underline transition-colors block"
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PopularSearches;
