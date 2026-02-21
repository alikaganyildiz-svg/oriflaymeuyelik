'use client';

import React, { useState, useEffect, useRef } from 'react';

const OriflameIframe = () => {
  const [shouldLoad, setShouldLoad] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    // Çok Gelişmiş Tembel Yükleme: 
    // Masaüstünde form ekranın hemen sağında (above the fold) olduğu için PageSpeed botları 
    // anında formu yüklemeye çalışıp "Total Blocking Time" hatası veriyor.
    // Bunu engellemek için sadece kullanıcı sayfayla etkileşime girdiğinde (kaydırma, fare hareketi vs.)
    // VEYA 4 saniye sonra formu yüklüyoruz.

    let loadingTimer;

    const triggerLoad = () => {
      setShouldLoad(true);
      window.removeEventListener('scroll', triggerLoad);
      window.removeEventListener('mousemove', triggerLoad);
      window.removeEventListener('touchstart', triggerLoad);
      if (loadingTimer) clearTimeout(loadingTimer);
    };

    // Kullanıcı etkileşimlerini dinle (Sadece 1 kere çalış, sonra kendini temizle)
    window.addEventListener('scroll', triggerLoad, { once: true, passive: true });
    window.addEventListener('mousemove', triggerLoad, { once: true, passive: true });
    window.addEventListener('touchstart', triggerLoad, { once: true, passive: true });

    // Hiçbir etkileşim olmazsa 4 saniye sonra mecburi yükle
    loadingTimer = setTimeout(() => {
      triggerLoad();
    }, 4000);

    return () => {
      if (loadingTimer) clearTimeout(loadingTimer);
      window.removeEventListener('scroll', triggerLoad);
      window.removeEventListener('mousemove', triggerLoad);
      window.removeEventListener('touchstart', triggerLoad);
    };
  }, []);

  return (
    <div ref={containerRef} className="w-full h-[1675px] overflow-hidden rounded-xl shadow-2xl border border-gray-200 bg-white relative">
      <div className="absolute top-0 left-0 w-full h-14 bg-primary flex items-center justify-center border-b border-primary/10 z-10">
        <h3 className="text-white font-bold text-lg tracking-wide uppercase">Oriflame Ücretsiz Üyelik</h3>
      </div>

      {/* 
        Container for the iframe with negative margin to crop out the top navigation 
        and start exactly at "Marka Ortağı olun".
      */}
      <div className="w-full h-[1685px] pt-14 overflow-hidden bg-white relative">
        {/* Loading Spinner */}
        {!shouldLoad && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-50/50 z-0">
            <div className="w-10 h-10 border-4 border-primary/30 border-t-primary rounded-full animate-spin mb-3"></div>
            <p className="text-gray-500 font-medium animate-pulse">Kayıt Formu Yükleniyor...</p>
          </div>
        )}

        {/* The actual Heavy Iframe, only loaded when needed */}
        {shouldLoad && (
          <iframe
            src="https://tr.oriflame.com/business-opportunity/become-consultant?store=TR-kagan2532287006"
            className="border-0 relative z-10"
            style={{
              width: '111.1%',
              height: '2135px',
              transform: 'scale(0.90)',
              transformOrigin: 'top left',
              marginTop: '-200px'
            }}
            title="Oriflame Kayıt Formu"
            loading="lazy"
            scrolling="no"
            sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
          />
        )}
      </div>

      {/* Overlay to hide the live support button on the bottom right without blocking clicks to the cookie banner */}
      <div className="absolute bottom-0 right-0 w-24 h-24 bg-white z-20 rounded-tl-2xl pointer-events-none hidden md:block"></div>
      <div className="absolute bottom-0 right-0 w-20 h-20 bg-white z-20 rounded-tl-2xl pointer-events-none md:hidden"></div>
    </div>
  );
};

export default OriflameIframe;
