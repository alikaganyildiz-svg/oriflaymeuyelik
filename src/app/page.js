import MembershipForm from '@/components/UI/MembershipForm';

export const metadata = {
  title: 'Oriflame Hızlı Kayıt | Ücretsiz Üyelik Formu',
  description: 'Oriflame dünyasına katılmak için hızlı kayıt formunu doldurun. Ücretsiz üyelik ve avantajlardan hemen yararlanın.',
}

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-start py-8 px-4">
      <div className="w-full max-w-4xl mx-auto">
        <MembershipForm />
      </div>

      {/* Visual background elements if needed */}
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
    </div>
  );
}
