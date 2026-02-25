'use client';

import React from 'react';
import { Play } from 'lucide-react';

export const ClubVideo: React.FC = () => {
  return (
    <div className="bg-navy-900 py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('hhttps://res.cloudinary.com/dc7zy0p4q/video/upload/v1769429372/FDownloader.net-802993895614882-_1080p_zusvit.mp4')] opacity-10"></div>
      
      <div className="container mx-auto px-4 relative z-10 text-center">
        <span className="text-yellow-400 font-bold tracking-[0.2em] text-xs uppercase block mb-4">
            Documentário
        </span>
        <h2 className="text-4xl md:text-5xl font-display font-bold text-white uppercase mb-12">
          Memória Viva
        </h2>

        <div className="max-w-4xl mx-auto relative group cursor-pointer">
           {/* Video Thumbnail Placeholder */}
           <div className="aspect-video bg-gray-800 rounded-xl overflow-hidden shadow-2xl relative">
              <img 
                src="https://res.cloudinary.com/dc7zy0p4q/image/upload/v1771324911/Screenshot_2026-02-17_at_10.41.44_hx1rn8.png" 
                alt="Video Thumbnail" 
                className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-300 group-hover:scale-105 transform"
              />
              
              <div className="absolute inset-0 flex items-center justify-center">
                 <div className="w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg shadow-yellow-400/30 group-hover:scale-110 transition-transform duration-300">
                    <Play className="text-navy-900 w-8 h-8 ml-1" fill="currentColor" />
                 </div>
              </div>
           </div>
           
           <p className="mt-6 text-gray-400 text-sm max-w-2xl mx-auto">
             Testemunhos de antigos presidentes, jogadores e sócios que construíram a grandeza da AD São Romão. Uma viagem emocional pelas nossas raízes.
           </p>
        </div>
      </div>
    </div>
  );
};