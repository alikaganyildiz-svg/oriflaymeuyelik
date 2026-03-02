
import { Outfit, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import Breadcrumbs from "@/components/UI/Breadcrumbs";
import PopularSearches from "@/components/UI/PopularSearches";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL('https://oriflaymeuyelik.com'), // Replace with actual domain if known
  title: {
    default: "Oriflame Ücretsiz Üyelik & Türkiye Online Katalog",
    template: "%s | Oriflame Üyelik",
  },
  description: "Oriflame dünyasına katılın, sermayesiz iş fırsatıyla ücretsiz kayıt olun. Güncel online katalog ürünlerindeki mükemmel indirim ve kazançlardan yararlanın.",
  openGraph: {
    title: "Oriflame Ücretsiz Üyelik & Türkiye Online Katalog",
    description: "Oriflame dünyasına katılın, sermayesiz iş fırsatıyla ücretsiz kayıt olun. Güncel online katalog ürünlerindeki mükemmel indirim ve kazançlardan yararlanın.",
    url: '/',
    siteName: 'Oriflame Türkiye Üyelik ve Kayıt',
    locale: 'tr_TR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Oriflame Ücretsiz Üyelik & Türkiye Online Katalog",
    description: "Oriflame dünyasına katılın, sermayesiz iş fırsatıyla ücretsiz kayıt olun.",
  },
  verification: {
    google: '1D4WInyfv7-8zWsZqnypQXXdBbsnz_XjzDUvYfwF99k',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body
        className={`${outfit.variable} ${playfair.variable} antialiased font-sans`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Oriflame Türkiye Üyelik ve Kayıt",
              "url": "https://oriflaymeuyelik.com",
              "logo": "https://oriflaymeuyelik.com/favicon.ico",
              "description": "Oriflame dünyasına katılın, sermayesiz iş fırsatıyla ücretsiz kayıt olun. Güncel online katalog ürünlerindeki mükemmel indirim ve kazançlardan yararlanın.",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "TR"
              }
            })
          }}
        />
        <Header />
        <Breadcrumbs />
        <main>
          {children}
        </main>
        <PopularSearches />
        <Footer />
      </body>
    </html>
  );
}
