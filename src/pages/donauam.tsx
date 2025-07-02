import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';

const DonaUAM: React.FC = () => {
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
      <Sidebar currentPage="/donauam" onToggle={setSidebarOpen} />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000" />
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-violet-500 rounded-full mix-blend-multiply filter blur-xl opacity-15 animate-ping" />
      </div>



      {/* Main Content */}
      <div className={`relative z-10 container mx-auto px-2 sm:px-4 md:px-6 lg:px-12 py-6 md:py-12 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} ${sidebarOpen ? 'lg:pr-96' : ''}`}>
        
        {/* Hero Section with Video */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-violet-400 bg-clip-text mb-6 leading-tight tracking-tighter font-['Montserrat',_'system-ui',_sans-serif] animate-pulse">
            DonaUAM
          </h1>
          
          <div className="w-48 h-2 bg-gradient-to-r from-purple-400 via-pink-400 to-violet-400 mx-auto mb-8 rounded-full animate-pulse shadow-lg" />
          
          <p className="text-lg md:text-xl lg:text-2xl text-white/90 font-medium leading-relaxed max-w-3xl mx-auto font-['Inter',_'system-ui',_sans-serif] mb-12">
            <span className="font-bold text-purple-300">Sistema de donaciones</span> que permite a la comunidad universitaria compartir recursos y fomentar la ayuda mutua
          </p>
        </div>

        {/* Main Video Section */}
        <div className="mb-6 md:mb-8">
          <div className="max-w-full md:max-w-6xl mx-auto">
            <div className="bg-black/40 backdrop-blur-lg rounded-2xl md:rounded-3xl p-3 md:p-6 border border-purple-400/30 shadow-2xl shadow-purple-500/20">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center font-['Poppins',_'system-ui',_sans-serif]">
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Demostración del Sistema</span>
              </h2>
              
              <div className="relative rounded-xl md:rounded-2xl overflow-hidden shadow-2xl border border-purple-400/20 group">
                <video
                  id="donauam-video"
                  className="w-full h-auto min-h-[180px] sm:min-h-[240px] md:min-h-[300px] max-h-[260px] sm:max-h-[340px] md:max-h-[500px] md:min-h-[500px] md:max-h-[700px] object-cover"
                  src="/UAM/donauam1.webm"
                  autoPlay
                  loop
                  muted
                  playsInline
                  ref={(video) => {
                    if (video) {
                      video.playbackRate = 1.0; 
                    }
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 via-transparent to-transparent pointer-events-none" />
                
                {/* Fullscreen Button */}
                <button
                  onClick={() => {
                    const video = document.getElementById('donauam-video') as HTMLVideoElement;
                    if (video.requestFullscreen) {
                      video.requestFullscreen();
                    } else if (video.webkitRequestFullscreen) {
                      video.webkitRequestFullscreen();
                    }
                  }}
                  className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                  </svg>
                </button>
              </div>
              
              <div className="mt-6 text-center">
                <p className="text-white/80 text-lg font-medium">
                  Observa la vista principal de DonaUAM
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid - Como funciona y Beneficios */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mb-6 md:mb-8">
          
          {/* Left Column - How it works */}
          <div className="bg-black/30 backdrop-blur-lg rounded-2xl p-8 border border-purple-400/20 hover:border-purple-400/40 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10">
            <h3 className="text-2xl font-bold text-white mb-6 font-['Poppins',_'system-ui',_sans-serif]">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">¿Cómo funciona?</span>
            </h3>
            <ul className="space-y-4 text-white/90">
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-lg leading-relaxed">Permite a los usuarios <span className="font-semibold text-purple-300">donar o solicitar artículos</span> en buen estado que ya no utilicen.</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-pink-400 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-lg leading-relaxed">Los estudiantes pueden <span className="font-semibold text-pink-300">ofrecer productos o pedir</span> aquellos que necesiten.</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-violet-400 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-lg leading-relaxed">Coordinan directamente la entrega con otros usuarios de manera <span className="font-semibold text-violet-300">segura y eficiente</span>.</span>
              </li>
            </ul>
          </div>

          {/* Right Column - Benefits */}
          <div className="bg-black/30 backdrop-blur-lg rounded-2xl p-8 border border-pink-400/20 hover:border-pink-400/40 transition-all duration-300 hover:shadow-2xl hover:shadow-pink-500/10">
            <h3 className="text-2xl font-bold text-white mb-6 font-['Poppins',_'system-ui',_sans-serif]">
              <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">Beneficios</span>
            </h3>
            <div className="grid gap-4">
              <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-xl p-4 border border-purple-400/20">
                <div className="flex items-center space-x-3 mb-2">
                  <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <span className="font-semibold text-purple-300">Apoyo comunitario</span>
                </div>
                <p className="text-white/80 text-sm">Entre miembros de la comunidad universitaria</p>
              </div>
              
              <div className="bg-gradient-to-br from-pink-500/10 to-violet-500/10 rounded-xl p-4 border border-pink-400/20">
                <div className="flex items-center space-x-3 mb-2">
                  <svg className="w-6 h-6 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                  <span className="font-semibold text-pink-300">Evitar desperdicio</span>
                </div>
                <p className="text-white/80 text-sm">De recursos y materiales útiles</p>
              </div>
              
              <div className="bg-gradient-to-br from-violet-500/10 to-purple-500/10 rounded-xl p-4 border border-violet-400/20">
                <div className="flex items-center space-x-3 mb-2">
                  <svg className="w-6 h-6 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                  <span className="font-semibold text-violet-300">Cultura de ayuda</span>
                </div>
                <p className="text-white/80 text-sm">Fomenta la solidaridad estudiantil</p>
              </div>
              
              <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-xl p-4 border border-purple-400/20">
                <div className="flex items-center space-x-3 mb-2">
                  <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                  </svg>
                  <span className="font-semibold text-purple-300">Segunda vida</span>
                </div>
                <p className="text-white/80 text-sm">A objetos funcionales y útiles</p>
              </div>
            </div>
          </div>
        </div>

        {/* Presentation Navigation */}
        <div className="flex justify-center items-center space-x-8">
          <button 
            onClick={() => navigate('/')}
            className="flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span className="font-medium">Anterior</span>
          </button>

          <div className="flex space-x-2">
            <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
            <div className="w-3 h-3 bg-white/30 rounded-full"></div>
            <div className="w-3 h-3 bg-white/30 rounded-full"></div>
          </div>

          <button 
            onClick={() => navigate('/donauam/comparacion')}
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

export default DonaUAM;
