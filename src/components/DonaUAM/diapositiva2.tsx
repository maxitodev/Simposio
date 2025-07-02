import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../Sidebar';

const Diapositiva2: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-purple-900 via-violet-900 to-pink-900 overflow-x-hidden">
      {/* Sidebar */}
      <Sidebar currentPage="/donauam/comparacion" onToggle={setSidebarOpen} />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000" />
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-violet-500 rounded-full mix-blend-multiply filter blur-xl opacity-15 animate-ping" />
      </div>

      {/* Main Content */}
      <div className={`relative z-10 container mx-auto px-2 sm:px-4 md:px-6 lg:px-12 py-6 md:py-12 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} ${sidebarOpen ? 'lg:pr-96' : ''}`}>
        
        {/* Hero Section */}
        <div className="text-center mb-6 md:mb-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-violet-400 bg-clip-text mb-4 md:mb-6 leading-tight tracking-tighter font-['Montserrat',_'system-ui',_sans-serif] animate-pulse">
            Evolución Tecnológica
          </h1>
          
          <div className="w-32 sm:w-48 h-2 bg-gradient-to-r from-purple-400 via-pink-400 to-violet-400 mx-auto mb-4 md:mb-6 rounded-full animate-pulse shadow-lg" />
          
          <p className="text-base sm:text-lg md:text-xl text-white/90 font-medium leading-relaxed max-w-2xl md:max-w-4xl mx-auto font-['Inter',_'system-ui',_sans-serif] mb-6 md:mb-8">
            <span className="font-bold text-purple-300">Comparación</span> entre la implementación anterior con JavaServerFaces y la nueva versión con tecnologías modernas
          </p>
        </div>

        {/* Comparison Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8 mb-6 md:mb-8">
          
          {/* ANTES - JavaServerFaces */}
          <div className="bg-black/40 backdrop-blur-lg rounded-3xl p-6 border border-red-400/30 shadow-2xl shadow-red-500/20">
            <div className="text-center mb-6">
              <div className="flex items-center justify-center mb-4">
                <div className="bg-red-500/20 p-3 rounded-full mr-3">
                  <svg className="w-8 h-8 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-white font-['Poppins',_'system-ui',_sans-serif]">
                  <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">ANTES</span>
                </h2>
              </div>
              
              <h3 className="text-xl font-semibold text-red-300 mb-4">JavaServerFaces (JSF)</h3>
              
              <div className="space-y-4 text-left">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-white/90">Arquitectura <span className="font-semibold text-red-300">monolítica</span> basada en servidor</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-white/90">Interfaz <span className="font-semibold text-orange-300">menos responsiva</span> y pesada</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-white/90">Dependencia completa del <span className="font-semibold text-red-300">backend Java</span></span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-white/90">Desarrollo más <span className="font-semibold text-orange-300">lento y complejo</span></span>
                </div>
              </div>
            </div>
            
            {/* Technologies Used - Before */}
            <div className="border-t border-red-400/20 pt-4">
              <h4 className="text-sm font-semibold text-red-300 mb-3 text-center">Tecnologías Utilizadas</h4>
              <div className="flex flex-wrap justify-center gap-2">
                <span className="bg-red-500/20 text-red-300 px-3 py-1 rounded-full text-xs font-medium border border-red-400/30">JSF</span>
                <span className="bg-orange-500/20 text-orange-300 px-3 py-1 rounded-full text-xs font-medium border border-orange-400/30">PrimeFaces</span>
                <span className="bg-red-500/20 text-red-300 px-3 py-1 rounded-full text-xs font-medium border border-red-400/30">Java EE</span>
                <span className="bg-orange-500/20 text-orange-300 px-3 py-1 rounded-full text-xs font-medium border border-orange-400/30">JPA</span>
              </div>
            </div>
          </div>

          {/* AHORA - JavaScript Moderno */}
          <div className="bg-black/40 backdrop-blur-lg rounded-3xl p-6 border border-green-400/30 shadow-2xl shadow-green-500/20">
            <div className="text-center mb-6">
              <div className="flex items-center justify-center mb-4">
                <div className="bg-green-500/20 p-3 rounded-full mr-3">
                  <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-white font-['Poppins',_'system-ui',_sans-serif]">
                  <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">AHORA</span>
                </h2>
              </div>
              
              <h3 className="text-xl font-semibold text-green-300 mb-4">JavaScript & Tecnologías Modernas</h3>
              
              <div className="space-y-4 text-left">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-white/90">Arquitectura <span className="font-semibold text-green-300">moderna y escalable</span></span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-white/90">Interfaz <span className="font-semibold text-emerald-300">reactiva y rápida</span></span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-white/90">Frontend <span className="font-semibold text-green-300">independiente</span> y modular</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-white/90">Desarrollo <span className="font-semibold text-emerald-300">ágil y eficiente</span></span>
                </div>
              </div>
            </div>
            
            {/* Technologies Used - Now */}
            <div className="border-t border-green-400/20 pt-4">
              <h4 className="text-sm font-semibold text-green-300 mb-3 text-center">Tecnologías Utilizadas</h4>
              <div className="flex flex-wrap justify-center gap-2">
                <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-xs font-medium border border-blue-400/30">React</span>
                <span className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-xs font-medium border border-green-400/30">Node.js</span>
                <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-xs font-medium border border-purple-400/30">Express</span>
                <span className="bg-emerald-500/20 text-emerald-300 px-3 py-1 rounded-full text-xs font-medium border border-emerald-400/30">MongoDB</span>
              </div>
            </div>
          </div>
        </div>

        {/* Video Demonstration Section */}
        <div className="mb-6 md:mb-8">
          <div className="max-w-full md:max-w-6xl mx-auto">
            <div className="bg-black/40 backdrop-blur-lg rounded-2xl md:rounded-3xl p-3 md:p-6 border border-purple-400/30 shadow-2xl shadow-purple-500/20">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4 md:mb-6 text-center font-['Poppins',_'system-ui',_sans-serif]">
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Comparación Visual</span>
              </h2>
              
              <div className="relative rounded-xl md:rounded-2xl overflow-hidden shadow-2xl border border-purple-400/20 group">
                <video
                  id="comparison-video"
                  className="w-full h-auto min-h-[180px] sm:min-h-[240px] md:min-h-[300px] max-h-[260px] sm:max-h-[340px] md:max-h-[500px] md:min-h-[400px] md:max-h-[600px] object-cover"
                  src="/UAM/comparacion.webm"
                  autoPlay
                  loop
                  muted
                  playsInline
                  ref={(video) => {
                    if (video) {
                      video.playbackRate = 1.2;
                    }
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 via-transparent to-transparent pointer-events-none" />
                
                {/* Fullscreen Button */}
                <button
                  onClick={() => {
                    const video = document.getElementById('comparison-video') as HTMLVideoElement;
                    if (video.requestFullscreen) {
                      video.requestFullscreen();
                    } else if (video.webkitRequestFullscreen) {
                      video.webkitRequestFullscreen();
                    }
                  }}
                  className="absolute top-2 right-2 md:top-4 md:right-4 bg-black/50 hover:bg-black/70 text-white p-2 md:p-3 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100"
                  style={{
                    color: '#ffffff',
                    backgroundColor: 'rgba(0, 0, 0, 0.5)'
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
                  }}
                >
                  <svg 
                    className="w-6 h-6" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                    style={{ color: '#ffffff' }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                  </svg>
                </button>
              </div>
              
              <div className="mt-4 md:mt-6 text-center">
                <p className="text-white/80 text-base md:text-lg font-medium">
                  Observa las diferencias en rendimiento y experiencia de usuario
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Performance Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 mb-6 md:mb-8">
          <div className="bg-black/30 backdrop-blur-lg rounded-2xl p-6 border border-blue-400/20 text-center">
            <div className="text-3xl font-bold text-blue-400 mb-2">75%</div>
            <div className="text-white/80 text-sm">Reducción en tiempo de carga</div>
          </div>
          <div className="bg-black/30 backdrop-blur-lg rounded-2xl p-6 border border-green-400/20 text-center">
            <div className="text-3xl font-bold text-green-400 mb-2">90%</div>
            <div className="text-white/80 text-sm">Mejora en responsividad</div>
          </div>
          <div className="bg-black/30 backdrop-blur-lg rounded-2xl p-6 border border-purple-400/20 text-center">
            <div className="text-3xl font-bold text-purple-400 mb-2">60%</div>
            <div className="text-white/80 text-sm">Menos líneas de código</div>
          </div>
        </div>

        {/* Presentation Navigation */}
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8">
          <button 
            onClick={() => navigate('/donauam')}
            className="flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span className="font-medium">Anterior</span>
          </button>

          <div className="flex space-x-2">
            <div className="w-3 h-3 bg-white/30 rounded-full"></div>
            <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
            <div className="w-3 h-3 bg-white/30 rounded-full"></div>
          </div>

          <button 
            onClick={() => navigate('/donauam/tecnologias')}
            className="flex items-center space-x-2 bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <span className="font-medium">Siguiente</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-purple-400/20 rounded-full animate-ping"
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

export default Diapositiva2;
