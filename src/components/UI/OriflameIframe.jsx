import React from 'react';

const OriflameIframe = () => {
  return (
    <div className="w-full h-[800px] overflow-hidden rounded-xl shadow-2xl border border-gray-200 bg-white relative">
      <div className="absolute top-0 left-0 w-full h-8 bg-gray-100 border-b flex items-center px-4 space-x-2">
        <div className="w-3 h-3 rounded-full bg-red-400"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
        <div className="w-3 h-3 rounded-full bg-green-400"></div>
        <span className="text-xs text-gray-500 ml-2">Oriflame Hızlı Kayıt</span>
      </div>
      
      {/* 
        Container for the iframe with negative margin to "crop" the header.
        Adjust -mt value to show "Hesap Detayları".
      */}
      <div className="w-full h-full pt-8 overflow-y-auto overflow-x-hidden">
        <iframe 
          src="https://tr.oriflame.com/mypages/business-tools/recruit/register-new-vip?store=TR-kagan2532287006"
          className="w-full h-[1500px] border-0 -mt-[380px]" 
          title="Oriflame Kayıt Formu"
          loading="lazy"
          sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
        />
      </div>
      
      {/* Overlay to hide the footer or other unwanted bottom elements if needed, 
          but usually scrolling is fine. */}
    </div>
  );
};

export default OriflameIframe;
