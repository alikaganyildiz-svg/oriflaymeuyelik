
import Hero from '@/components/UI/Hero';

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

    </div>
  );
}
