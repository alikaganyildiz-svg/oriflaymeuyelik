'use client';

import React, { useState } from 'react';
import { UserPlus, Loader2, RefreshCw } from 'lucide-react';

const MembershipForm = () => {
    const registrationUrl = "https://tr.oriflame.com/mypages/business-tools/recruit/register-new-vip?store=TR-kagan2532287006";
    const [isLoading, setIsLoading] = useState(true);

    return (
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100 flex flex-col h-full min-h-[1350px]">
            <div className="bg-primary text-white text-center py-4 px-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <UserPlus size={20} />
                    <h2 className="text-lg font-serif font-bold tracking-tight">Hemen Kayıt Ol</h2>
                </div>
                <div className="flex items-center gap-2 text-[10px] opacity-70">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    Güvenli Form
                </div>
            </div>

            <div className="flex-1 relative bg-gray-50 flex flex-col">
                {isLoading && (
                    <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-white/80 backdrop-blur-sm">
                        <Loader2 className="animate-spin text-primary mb-2" size={32} />
                        <p className="text-sm font-medium text-gray-600">Form Yükleniyor...</p>
                    </div>
                )}

                <iframe
                    src={registrationUrl}
                    scrolling="no"
                    loading="eager"
                    onLoad={() => setIsLoading(false)}
                    frameBorder="0"
                    className="w-full flex-1 animate-fade-in"
                    style={{ height: '1325px', minHeight: '1325px' }}
                    title="Oriflame Üyelik Formu"
                ></iframe>

                <div className="p-4 bg-white border-t border-gray-100 flex items-center justify-between text-[11px] text-gray-400">
                    <div className="flex items-center gap-1">
                        <RefreshCw size={12} />
                        <span>Sayfa yüklendiğinde formu doldurmaya başlayabilirsiniz</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MembershipForm;
