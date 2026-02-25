'use client';


import React from 'react';
import { LOGO_URL } from '../constants';

export const LoadingScreen: React.FC = () => {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-gradient-to-br from-navy-900 via-blue-900 to-navy-950 overflow-hidden font-sans">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center opacity-60"
        style={{ 
          backgroundImage: 'url("https://res.cloudinary.com/dc7zy0p4q/image/upload/v1770728605/WhatsApp_Image_2026-02-08_at_15.15.02_t9y9bc.jpg")' 
        }}
      ></div>

      {/* Animated Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-900/80 via-blue-900/70 to-navy-950/80 z-5 mix-blend-darken"></div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden z-5">
        {/* Animated gradients */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500 rounded-full mix-blend-screen opacity-20 blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-yellow-400 rounded-full mix-blend-screen opacity-10 blur-[120px] animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-blue-600 rounded-full mix-blend-screen opacity-15 blur-[100px] animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Grid Background Pattern */}
      <div className="absolute inset-0 z-5 opacity-5">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 z-5 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-yellow-400 rounded-full opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${3 + i}s infinite ease-in-out`,
              animationDelay: `${i * 0.3}s`
            }}
          />
        ))}
      </div>

      {/* Content Container */}
      <div className="relative z-20 flex flex-col items-center text-center">
        
        {/* Logo Container with Glow */}
        <div className="mb-6 md:mb-10 relative animate-fade-in-down">
          <div className="absolute inset-0 bg-yellow-400 blur-3xl opacity-20 rounded-full animate-pulse"></div>
          <img 
            src={LOGO_URL} 
            alt="AD São Romão" 
            className="w-28 h-28 md:w-40 md:h-40 object-contain relative z-10 drop-shadow-2xl"
          />
        </div>

        {/* Badge */}
        <div className="mb-4">
          <span className="text-white font-bold tracking-[0.3em] text-sm md:text-xl lg:text-2xl uppercase drop-shadow-lg">
            Associação Desportiva
          </span>
        </div>

        {/* Main Title */}
        <div className="mb-6 md:mb-8 overflow-hidden">
          <h1 className="font-display font-black text-6xl md:text-8xl lg:text-9xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-300 to-yellow-300 uppercase leading-none tracking-tighter drop-shadow-2xl animate-fade-in-up">
            SÃO ROMÃO
          </h1>
        </div>

        {/* Animated Divider */}
        <div className="mb-6 md:mb-8 flex items-center gap-4">
          <div className="w-8 h-1 bg-gradient-to-r from-transparent to-yellow-400 rounded-full animate-slide-left"></div>
          <span className="text-yellow-400 font-bold text-xs md:text-sm tracking-[0.25em] uppercase drop-shadow-lg">
            Loading
          </span>
          <div className="w-8 h-1 bg-gradient-to-l from-transparent to-yellow-400 rounded-full animate-slide-right"></div>
        </div>

        {/* Slogan */}
        <p className="font-display font-bold text-lg md:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-yellow-300 uppercase tracking-[0.1em] drop-shadow-lg mb-8 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
          Juntos e Fortes
        </p>

        {/* Motivational Text */}
        <p className="text-blue-200 text-xs md:text-sm font-semibold tracking-wider opacity-80 animate-pulse">
          Preparando o melhor conteúdo para ti...
        </p>
      </div>
      
      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1.5 bg-blue-950/50 overflow-hidden">
        <div className="h-full bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400 animate-loading-progress w-full shadow-[0_0_20px_#FFD700]"></div>
      </div>

      <style>{`
        @keyframes loading-progress {
          0% { transform: scaleX(0); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: scaleX(1); opacity: 0; }
        }
        
        .animate-loading-progress {
          animation: loading-progress 2.5s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }

        @keyframes fade-in-down {
          0% { opacity: 0; transform: translateY(-30px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fade-in-down {
          animation: fade-in-down 0.6s ease-out forwards;
        }

        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          animation-delay: 0.1s;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          25% { transform: translateY(-20px) translateX(10px); }
          50% { transform: translateY(-40px) translateX(-10px); }
          75% { transform: translateY(-20px) translateX(15px); }
        }

        .animate-float {
          animation: float 4s ease-in-out infinite;
        }

        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }

        @keyframes slide-left {
          0% { width: 0; }
          100% { width: 32px; }
        }

        .animate-slide-left {
          animation: slide-left 0.8s ease-out forwards;
          animation-delay: 0.3s;
        }

        @keyframes slide-right {
          0% { width: 0; }
          100% { width: 32px; }
        }

        .animate-slide-right {
          animation: slide-right 0.8s ease-out forwards;
          animation-delay: 0.3s;
        }

        @keyframes bounce {
          0%, 80%, 100% { transform: scaleY(0.5); opacity: 0.5; }
          40% { transform: scaleY(1); opacity: 1; }
        }
      `}</style>
    </div>
  );
};
