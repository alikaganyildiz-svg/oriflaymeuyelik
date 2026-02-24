'use client';

import React, { useState } from 'react';

const OriflameIframe = () => {
  const [loading, setLoading] = useState(true);

  // The "Blog Mode" Secret:
  // Using "?sc_device=Blog" tells Oriflame's server to natively hide its header and footer!
  // By setting the iframe height to 2500px, we fit the entire form natively, 
  // eliminating the inner scrollbar. The user simply uses the main page scrollbar.
  // The Cookie Popup will naturally appear at the bottom of this 2500px area.

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
          GÜVENLİ & DOĞRUDAN BAĞLANTI
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
        <iframe
          src={ORIFLAME_URL}
          onLoad={() => setLoading(false)}
          className="w-full border-0 relative z-10"
          style={{
            height: '1970px', // Compensating the 180px shift + dynamic errors
            marginTop: '-160px', // Hides the "Marka Ortağı olun" and description text
            marginBottom: '-160px' // Balances the height so container isn't excessively tall
          }}
          scrolling="no"
          title="Oriflame Kayıt"
          loading="lazy"
        />
        {/* Alttaki istenmeyen harfleri/footer kırpıntılarını gizleyen beyaz bant */}
        <div className="absolute bottom-0 left-0 w-full h-10 bg-white z-20 pointer-events-none" />
      </div>

    </div>
  );
};

export default OriflameIframe;
