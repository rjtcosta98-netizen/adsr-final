'use client';


import React, { useEffect } from 'react';
import { Instagram, Facebook } from 'lucide-react';

export const SocialFeed: React.FC = () => {
  useEffect(() => {
    // Carregar script do Instafeed dinamicamente
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/instafeed.js@2.1.0/dist/instafeed.min.js';
    script.async = true;
    script.onload = () => {
      // Inicializar Instafeed após script carregar
      const feed = new (window as any).Instafeed({
        target: 'instagram-feed',
        username: 'adsaoromao',
        limit: 12,
        accessKey: 'IGQWRQYnF3V0ZA',
        accessSecret: '52d1fb737f84e6ae8821d6dabd19a6a6',
        resolution: 'standard_resolution',
        links: true,
        defaultImage: true,
      });
      feed.run();
    };
    document.body.appendChild(script);
  }, []);

  return (
    <div className="bg-white py-20 border-t border-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
           <span className="text-blue-600 font-bold tracking-[0.2em] text-xs uppercase block mb-3">
             #ADSRomao
           </span>
           <h2 className="text-3xl md:text-4xl font-display font-bold text-navy-900 uppercase mb-6">
             Siga-nos nas Redes
           </h2>
           <p className="text-gray-500 text-sm mb-8 max-w-lg mx-auto">
             Fica a par de tudo o que acontece no universo ADSR. Partilha a tua paixão usando a nossa hashtag oficial.
           </p>
           
           <div className="flex justify-center gap-4 mb-12">
              <a href="#" className="flex items-center gap-2 px-8 py-3 bg-navy-900 text-white rounded-full text-xs font-bold uppercase tracking-wider hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
                 <Instagram size={18} /> @adsromao
              </a>
              <a href="#" className="flex items-center gap-2 px-8 py-3 bg-blue-600 text-white rounded-full text-xs font-bold uppercase tracking-wider hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
                 <Facebook size={18} /> AD São Romão
              </a>
           </div>
        </div>

        {/* Grid de Posts do Instagram */}
        <div id="instagram-feed" className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-1 md:gap-4">
           {/* Instafeed carrega os posts aqui automaticamente */}
           <div className="col-span-2 md:col-span-3 lg:col-span-6 text-center py-8 text-gray-400 text-sm">
              Carregando posts do Instagram...
           </div>
        </div>
      </div>
    </div>
  );
};
