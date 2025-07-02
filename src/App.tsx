import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

const App: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [particleCount, setParticleCount] = useState(20);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 500);
    
    // Set particle count based on screen size
    const updateParticleCount = () => {
      setParticleCount(window.innerWidth < 640 ? 10 : 20);
    };
    
    updateParticleCount();
    window.addEventListener('resize', updateParticleCount);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', updateParticleCount);
    };
  }, []);

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"
         style={{ minHeight: '100vh', minWidth: '100vw' }}>
      {/* Video Background */}
      <video
        className="absolute inset-0 w-full h-full object-cover opacity-30 sm:opacity-40"
        src="/UAM/uamcuajimalpa.webm"
        autoPlay
        loop
        muted
        playsInline
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/50 via-blue-900/30 to-indigo-900/50" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 sm:-top-40 -right-20 sm:-right-40 w-40 sm:w-80 h-40 sm:h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse" />
        <div className="absolute -bottom-20 sm:-bottom-40 -left-20 sm:-left-40 w-40 sm:w-80 h-40 sm:h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 sm:w-96 h-48 sm:h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-ping" />
      </div>

      {/* Navigation */}
      <nav className="relative z-20 flex flex-col sm:flex-row justify-between items-center p-3 sm:p-4 md:p-6 lg:p-8 gap-3 sm:gap-4 md:gap-0">
        <div className="flex items-center space-x-1 sm:space-x-2 md:space-x-4">
          <img src="/UAM/logouam.webp" alt="UAM Logo" className="h-10 sm:h-12 md:h-14 lg:h-16 w-auto" />
          <div className="text-white font-bold text-base sm:text-lg md:text-xl lg:text-2xl font-['Inter',_'system-ui',_sans-serif] tracking-wide"></div>
        </div>
        
        {/* Event Logos - Top Right */}
        <div className="flex items-center space-x-1 sm:space-x-2 md:space-x-3 lg:space-x-4">
          <div className="bg-white/90 backdrop-blur-sm rounded-lg sm:rounded-xl md:rounded-2xl p-1.5 sm:p-2 md:p-2.5 lg:p-3 border border-white/30">
            <img src="/UAM/Imagen1.png" alt="UAMC Logo" className="h-6 sm:h-8 md:h-10 lg:h-12 w-auto" />
          </div>
          <div className="bg-white/90 backdrop-blur-sm rounded-lg sm:rounded-xl md:rounded-2xl p-1.5 sm:p-2 md:p-2.5 lg:p-3 border border-white/30">
            <img src="/UAM/Imagen2.png" alt="VII Simposio DCNI Logo" className="h-6 sm:h-8 md:h-10 lg:h-12 w-auto" />
          </div>
        </div>
      </nav>

      {/* Student Name - Top Center */}
      <div className="absolute top-32 sm:top-20 md:top-22 lg:top-24 xl:top-28 left-1/2 transform -translate-x-1/2 z-20 text-center px-2 sm:px-3 md:px-4 w-full">
        <h2 className="text-xs sm:text-sm md:text-lg lg:text-2xl xl:text-3xl 2xl:text-4xl font-light text-white/90 mb-0.5 sm:mb-1 md:mb-2 lg:mb-3 tracking-wide font-['Inter',_'system-ui',_sans-serif]">
          Presentado por:
        </h2>
        <h3 className="text-sm sm:text-lg md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-white font-['Poppins',_'system-ui',_sans-serif] tracking-tight">
          <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text text-transparent drop-shadow-lg">
            Max Uriel Sánchez Díaz
          </span>
        </h3>
      </div>

      {/* Main Content */}
      <div className={`relative z-10 flex flex-col items-center justify-center h-full px-4 sm:px-6 lg:px-8 -mt-16 sm:mt-0 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        
        {/* Main Title */}
        <div className="text-center mb-6 sm:mb-8 md:mb-12 lg:mb-16 w-full">
          <h1 
            className="font-black text-white mb-4 sm:mb-6 md:mb-8 lg:mb-12 leading-tight tracking-tighter font-['Montserrat',_'system-ui',_sans-serif]"
            style={{ fontSize: 'clamp(2rem, 8vw, 8rem)' }}
          >
            <span className="bg-gradient-to-r from-purple-300 via-pink-300 to-blue-300 bg-clip-text text-transparent animate-pulse drop-shadow-2xl">
              PRESENTACIÓN
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-300 via-indigo-300 to-purple-300 bg-clip-text text-transparent">
              DE PROYECTOS
            </span>
          </h1>
          <div className="w-24 sm:w-32 md:w-48 lg:w-64 h-1 sm:h-1.5 lg:h-2 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 mx-auto mb-4 sm:mb-6 md:mb-8 lg:mb-12 rounded-full animate-pulse shadow-lg" />
          <p className="text-sm sm:text-base md:text-xl lg:text-2xl xl:text-3xl text-white/90 font-medium leading-relaxed font-['Inter',_'system-ui',_sans-serif] tracking-wide max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-4xl mx-auto px-3 sm:px-4 lg:px-8">
            Dos sitios web innovadores para el 
            <br className="hidden sm:block" />
            <span className="sm:inline"> </span>
            <span className="font-bold bg-gradient-to-r from-purple-200 to-blue-200 bg-clip-text text-transparent"> Departamento de Matemáticas Aplicadas y Sistemas</span>
          </p>
        </div>

        {/* Action Button */}
        <div className="mb-12 sm:mb-16 lg:mb-20">
          <button 
            onClick={() => navigate('/donauam')}
            className="group relative px-8 sm:px-12 md:px-16 lg:px-20 py-3 sm:py-4 md:py-5 lg:py-6 bg-gradient-to-r from-pink-500 via-purple-500 to-violet-600 text-white font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl rounded-full hover:from-pink-600 hover:via-purple-600 hover:to-violet-700 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-pink-500/30 font-['Poppins',_'system-ui',_sans-serif] tracking-wide border border-pink-400/30 hover:border-pink-400/50"
          >
            
            {/* Subtle inner highlight */}
            <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/5 to-white/10 rounded-full opacity-60" />
            
            <span className="relative z-10 flex items-center space-x-2 sm:space-x-3 lg:space-x-4">
              <span className="drop-shadow-sm text-center">
                <span className="block sm:hidden">COMENZAR</span>
                <span className="hidden sm:block">COMENZAR PRESENTACIÓN</span>
              </span>
              <div className="p-1.5 sm:p-2 bg-white/15 rounded-full group-hover:bg-white/25 transition-all duration-300 backdrop-blur-sm">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
            </span>
          </button>
        </div>
      </div>

      {/* Supervisors Information - Bottom Left */}
      <div className="absolute bottom-2 sm:bottom-4 md:bottom-6 lg:bottom-8 xl:bottom-12 left-2 sm:left-4 md:left-6 lg:left-8 xl:left-12 z-20 bg-black/40 backdrop-blur-lg rounded-lg sm:rounded-xl md:rounded-2xl p-2 sm:p-3 md:p-4 lg:p-5 xl:p-6 border border-white/30 max-w-[280px] sm:max-w-xs md:max-w-sm lg:max-w-md">
        <h4 className="text-white font-bold text-xs sm:text-sm md:text-base lg:text-lg mb-1 sm:mb-2 md:mb-3 font-['Inter',_'system-ui',_sans-serif] tracking-wide">Supervisores del Proyecto</h4>
        <div className="space-y-0.5 sm:space-y-1 md:space-y-2 text-white/95">
          <p className="font-medium text-[10px] sm:text-xs md:text-sm lg:text-base font-['Inter',_'system-ui',_sans-serif] leading-tight">Dra. María del Carmen Gómez Fuentes</p>
          <p className="font-medium text-[10px] sm:text-xs md:text-sm lg:text-base font-['Inter',_'system-ui',_sans-serif] leading-tight">Dr. Jorge Cervantes Ojeda</p>
        </div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(particleCount)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 sm:w-2 h-1.5 sm:h-2 bg-white/20 rounded-full animate-ping"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default App;