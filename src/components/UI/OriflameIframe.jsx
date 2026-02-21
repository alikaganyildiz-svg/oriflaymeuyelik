import React from 'react';

const OriflameIframe = () => {
  return (
    <div className="w-full h-[1500px] overflow-hidden rounded-xl shadow-2xl border border-gray-200 bg-white relative">
      <div className="absolute top-0 left-0 w-full h-14 bg-primary flex items-center justify-center border-b border-primary/10">
        <h3 className="text-white font-bold text-lg tracking-wide uppercase">Oriflame Ücretsiz Üyelik</h3>
      </div>

      {/* 
        Container for the iframe with negative margin to crop out the top navigation 
        and start exactly at "Marka Ortağı olun".
      */}
      <div className="w-full h-[1550px] pt-14 overflow-hidden bg-white relative">
        <iframe
          src="https://tr.oriflame.com/business-opportunity/become-consultant?store=TR-kagan2532287006"
          className="w-full h-[1800px] border-0 -mt-[180px]"
          title="Oriflame Kayıt Formu"
          loading="lazy"
          scrolling="no"
          sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
        />
      </div>

      {/* Overlay to hide the live support button on the bottom right and block clicks */}
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-white z-20 rounded-tl-2xl hidden md:block"></div>
      <div className="absolute bottom-0 right-0 w-24 h-24 bg-white z-20 rounded-tl-2xl md:hidden"></div>
    </div>
  );
};

export default OriflameIframe;
