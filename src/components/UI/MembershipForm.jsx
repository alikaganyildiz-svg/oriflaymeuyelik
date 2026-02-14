'use client';

import React from 'react';
import { UserPlus, ChevronRight, ExternalLink } from 'lucide-react';

const MembershipForm = () => {
    const registrationUrl = "https://tr.oriflame.com/mypages/business-tools/recruit/register-new-vip?store=TR-kagan2532287006";

    return (
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100 flex flex-col h-full transform hover:scale-[1.01] transition-all duration-300">
            <div className="bg-primary text-white text-center py-6 px-4">
                <h2 className="text-2xl font-serif font-bold tracking-tight">Ücretsiz Kayıt Ol</h2>
                <div className="w-12 h-0.5 bg-white/30 mx-auto mt-2"></div>
                <p className="text-sm opacity-90 mt-3 font-medium">Oriflame Güzellik Elçisi Olma Fırsatı</p>
            </div>

            <div className="flex-1 flex flex-col items-center justify-center p-8 text-center space-y-8 bg-gradient-to-b from-white to-gray-50">
                <div className="relative">
                    <div className="w-24 h-24 bg-primary/5 rounded-full flex items-center justify-center animate-pulse-slow">
                        <UserPlus size={48} className="text-primary" />
                    </div>
                    <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                        <div className="w-2 h-2 bg-white rounded-full animate-ping"></div>
                    </div>
                </div>

                <div className="space-y-4">
                    <h3 className="text-xl font-bold text-gray-900">Resmi Kayıt Sayfasına Git</h3>
                    <p className="text-gray-600 leading-relaxed text-sm">
                        Kaydınızı tamamlamak için Oriflame Türkiye'nin güvenli resmi kayıt sayfasına yönlendirileceksiniz.
                    </p>
                </div>

                <div className="w-full space-y-4">
                    <a
                        href={registrationUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative flex items-center justify-center gap-3 w-full bg-primary hover:bg-green-800 text-white font-bold py-5 px-8 rounded-xl transition-all shadow-lg hover:shadow-primary/30 active:scale-95"
                    >
                        <span>Hemen Başvuruyu Yap</span>
                        <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        <div className="absolute inset-0 rounded-xl border-2 border-white/0 group-hover:border-white/20 transition-all pointer-events-none"></div>
                    </a>

                    <div className="flex items-center justify-center gap-2 text-xs text-gray-400">
                        <ExternalLink size={14} />
                        <span>Resmi Oriflame Sayfasına Yönlendirilir</span>
                    </div>
                </div>

                <div className="pt-4 grid grid-cols-2 gap-4 w-full border-t border-gray-200 mt-2">
                    <div className="text-left">
                        <span className="text-[10px] uppercase tracking-wider text-gray-400 font-bold block">Güvenlik</span>
                        <span className="text-xs text-gray-600 font-medium">SSL Korumalı</span>
                    </div>
                    <div className="text-right">
                        <span className="text-[10px] uppercase tracking-wider text-gray-400 font-bold block">Destek</span>
                        <span className="text-xs text-gray-600 font-medium">7/24 Aktif</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MembershipForm;
