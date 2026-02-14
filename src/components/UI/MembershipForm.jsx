'use client';

import React, { useState } from 'react';
import { Loader2 } from 'lucide-react';

const MembershipForm = () => {
    const registrationUrl = "https://tr.oriflame.com/mypages/business-tools/recruit/register-new-vip?store=TR-kagan2532287006";
    const [isLoading, setIsLoading] = useState(true);

    return (
        <div className="relative w-full bg-white rounded-2xl shadow-xl overflow-hidden" style={{ height: '1950px' }}>
            {isLoading && (
                <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-white">
                    <Loader2 className="animate-spin text-primary mb-2" size={32} />
                    <p className="text-sm font-medium text-gray-400">Yükleniyor...</p>
                </div>
            )}
            <iframe
                src={registrationUrl}
                scrolling="no"
                loading="eager"
                onLoad={() => setIsLoading(false)}
                frameBorder="0"
                className="w-full animate-fade-in"
                style={{
                    border: 'none',
                    height: '3250px',
                    marginTop: '-1020px'
                }}
                title="Oriflame Üyelik Formu"
            ></iframe>
        </div>
    );
};

export default MembershipForm;
