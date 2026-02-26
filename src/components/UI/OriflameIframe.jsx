'use client';

import React, { useState, useEffect } from 'react';

const OriflameIframe = () => {
  const [loading, setLoading] = useState(true);
  const [shouldLoad, setShouldLoad] = useState(false);

  // Responsive iframe style values based on window width.
  // On mobile the Oriflame form reflows to a taller single-column layout,
  // so height and crop margins need to be adjusted per breakpoint.
  const [iframeStyle, setIframeStyle] = useState({
    height: '1990px',
    marginTop: '-160px',
    marginBottom: '-160px',
  });

  useEffect(() => {
    const updateStyle = () => {
      const w = window.innerWidth;

      if (w >= 1024) {
        // Desktop
        setIframeStyle({ height: '1990px', marginTop: '-160px', marginBottom: '-160px' });
      } else if (w > 832) {
        // Tablet — 833px to 1023px (awkward range)
        setIframeStyle({ height: '1990px', marginTop: '-180px', marginBottom: '-120px' });
      } else if (w >= 480) {
        // Small tablet / large phone
        setIframeStyle({ height: '2500px', marginTop: '-180px', marginBottom: '-550px' });
      } else {
        // Mobile phone (≤ 480px)
        setIframeStyle({ height: '3000px', marginTop: '-200px', marginBottom: '-920px' });
      }
    };

    updateStyle();
    window.addEventListener('resize', updateStyle);

    // Interaction-based lazy loading
    const triggerLoad = () => {
      setShouldLoad(true);
      window.removeEventListener('scroll', triggerLoad);
      window.removeEventListener('touchstart', triggerLoad);
      window.removeEventListener('mousemove', triggerLoad);
    };

    window.addEventListener('scroll', triggerLoad, { passive: true });
    window.addEventListener('touchstart', triggerLoad, { passive: true });
    window.addEventListener('mousemove', triggerLoad, { passive: true });

    // Fallback if no interaction
    const timeout = setTimeout(triggerLoad, 3500);

    return () => {
      window.removeEventListener('resize', updateStyle);
      window.removeEventListener('scroll', triggerLoad);
      window.removeEventListener('touchstart', triggerLoad);
      window.removeEventListener('mousemove', triggerLoad);
      clearTimeout(timeout);
    };
  }, []);

  const ORIFLAME_URL =
    'https://tr.oriflame.com/business-opportunity/become-consultant?store=TR-kagan2532287006&sc_device=Blog';

  return (
    <div className="relative w-full rounded-2xl shadow-xl border border-gray-100 bg-white overflow-hidden mb-8">

      {/* ── CUSTOM HEADER ── */}
      <div
        className="w-full bg-primary flex flex-col items-center justify-center py-6 shadow-sm border-b border-primary/20"
      >
        <h3 className="text-white font-bold text-2xl tracking-wide uppercase">
          Ücretsiz Kayıt Formu
        </h3>
        <p className="text-white/90 text-sm mt-1 font-medium tracking-wider">
          GÜVENLİ &amp; DOĞRUDAN BAĞLANTI
        </p>
      </div>

      {/* ── LOADING SPINNER ── */}
      {loading && (
        <div
          className="w-full flex flex-col items-center justify-center bg-gray-50/90 py-32"
        >
          <div className="w-12 h-12 border-4 border-primary/20 border-t-primary rounded-full animate-spin mb-4" />
          <p className="text-gray-600 font-medium animate-pulse">Oriflame Formu Yükleniyor...</p>
        </div>
      )}

      {/* ── NATIVE IFRAME ── */}
      <div className={`relative w-full bg-white transition-opacity duration-500 overflow-hidden ${loading ? 'opacity-0' : 'opacity-100'}`}>
        {shouldLoad && (
          <iframe
            src={ORIFLAME_URL}
            onLoad={() => setLoading(false)}
            className="w-full border-0 relative z-10"
            style={iframeStyle}
            scrolling="no"
            title="Oriflame Kayıt"
            loading="lazy"
          />
        )}
        {/* Alttaki istenmeyen harfleri/footer kırpıntılarını gizleyen beyaz bant */}
        <div className="absolute bottom-0 left-0 w-full h-10 bg-white z-20 pointer-events-none" />
      </div>

    </div>
  );
};

export default OriflameIframe;
