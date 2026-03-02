import MembershipForm from '@/components/UI/MembershipForm';

export const metadata = {
    title: 'Oriflame Kayıt Formu 2026 | Hemen Ücretsiz Üye Ol',
    description: 'Oriflame ücretsiz üyelik formunu hızlıca doldurun, %20 indirim ve hoşgeldin hediyelerinden anında yararlanmaya başlayın. Bilgileriniz %100 güvendedir.',
};

export default function KayitFormuPage() {
    return (
        <div className="min-h-screen bg-slate-50 flex flex-col font-sans selection:bg-emerald-200">

            {/* Inline style to hide the globally injected PopularSearches component specifically on this page for maximum focus */}
            <style dangerouslySetInnerHTML={{
                __html: `
        main + section,
        section.bg-gray-50.py-10.border-t.border-gray-200 { 
           display: none !important; 
        }
      `}} />

            <main className="flex-grow flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">

                {/* Header Section */}
                <div className="text-center w-full max-w-3xl mb-8">
                    <h1 className="text-3xl md:text-5xl font-serif font-bold text-slate-800 mb-4 tracking-tight">
                        Ücretsiz Kayıt Formu
                    </h1>
                    <p className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto">
                        Aşağıdaki formu doldurarak Oriflame dünyasına ilk adımınızı atın. Kayıt tamamen ücretsizdir ve hiçbir sipariş zorunluluğu yoktur.
                    </p>
                </div>

                {/* Trust Badges */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mb-8 w-full max-w-3xl">
                    <div className="flex items-center text-slate-700 bg-white px-4 py-2 rounded-full shadow-sm border border-slate-100">
                        <svg className="w-5 h-5 text-emerald-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                        <span className="text-sm font-medium">SSL ile Güvenli Veri</span>
                    </div>
                    <div className="flex items-center text-slate-700 bg-white px-4 py-2 rounded-full shadow-sm border border-slate-100">
                        <svg className="w-5 h-5 text-emerald-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z" clipRule="evenodd"></path><path d="M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z"></path></svg>
                        <span className="text-sm font-medium">Ücretsiz Kayıt</span>
                    </div>
                    <div className="flex items-center text-slate-700 bg-white px-4 py-2 rounded-full shadow-sm border border-slate-100">
                        <svg className="w-5 h-5 text-emerald-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                        <span className="text-sm font-medium">Aidat Yok</span>
                    </div>
                </div>

                {/* Form Container */}
                <div className="w-full max-w-4xl bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-slate-100 p-2 sm:p-4 md:p-8">
                    <MembershipForm />
                </div>

            </main>
        </div>
    );
}
