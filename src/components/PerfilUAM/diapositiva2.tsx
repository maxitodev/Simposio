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
    <div className="relative min-h-screen bg-gradient-to-br from-orange-900 via-amber-900 to-yellow-900 overflow-x-hidden">
      {/* Sidebar */}
      <Sidebar currentPage="/perfiluam/funcionamiento" onToggle={setSidebarOpen} />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-orange-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-amber-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000" />
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-15 animate-ping" />
      </div>

      {/* Main Content */}
      <div className={`relative z-10 container mx-auto px-2 sm:px-4 md:px-6 lg:px-12 py-6 md:py-12 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} ${sidebarOpen ? 'lg:pr-96' : ''}`}>
        
        {/* Hero Section */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-transparent bg-gradient-to-r from-orange-400 via-amber-400 to-yellow-400 bg-clip-text mb-6 leading-tight tracking-tighter font-['Montserrat',_'system-ui',_sans-serif]">
            Funcionamiento de PerfilUAM
          </h1>
          
          <div className="w-48 h-2 bg-gradient-to-r from-orange-400 via-amber-400 to-yellow-400 mx-auto mb-6 rounded-full animate-pulse shadow-lg" />
          
          <p className="text-lg md:text-xl text-white/90 font-medium leading-relaxed max-w-4xl mx-auto font-['Inter',_'system-ui',_sans-serif] mb-8">
            <span className="font-bold text-orange-300">Sistema integral</span> para la gestión de perfiles profesionales y proyectos terminales
          </p>
        </div>

        {/* Video Demonstration Section */}
        <div className="mb-8">
          <div className="max-w-6xl mx-auto">
            <div className="bg-black/40 backdrop-blur-lg rounded-3xl p-6 border border-orange-400/30 shadow-2xl shadow-orange-500/20">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 text-center font-['Poppins',_'system-ui',_sans-serif]">
                <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">Demostración del Funcionamiento</span>
              </h2>
              
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-orange-400/20 group">
                <video
                  id="perfiluam-funcionamiento-video"
                  className="w-full h-auto min-h-[300px] max-h-[500px] md:min-h-[400px] md:max-h-[600px] object-cover"
                  src="/UAM/perfiluam2.webm"
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
                <div className="absolute inset-0 bg-gradient-to-t from-orange-900/20 via-transparent to-transparent pointer-events-none" />
                
                {/* Fullscreen Button */}
                <button
                  onClick={() => {
                    const video = document.getElementById('perfiluam-funcionamiento-video') as HTMLVideoElement;
                    if (video.requestFullscreen) {
                      video.requestFullscreen();
                    } else if (video.webkitRequestFullscreen) {
                      video.webkitRequestFullscreen();
                    }
                  }}
                  className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100"
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
              
              <div className="mt-6 text-center">
                <p className="text-white/80 text-lg font-medium">
                  Observa cómo funciona la plataforma PerfilUAM
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8 mb-6 md:mb-8">
          
          {/* Left Column - Creación de Perfiles */}
          <div className="bg-black/40 backdrop-blur-lg rounded-3xl p-6 border border-orange-400/30 shadow-2xl shadow-orange-500/20">
            <div className="text-center mb-6">
              <div className="flex items-center justify-center mb-4">
                <div className="bg-orange-500/20 p-3 rounded-full mr-3">
                  <svg className="w-8 h-8 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-white font-['Poppins',_'system-ui',_sans-serif]">
                  <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">Creación de Perfiles</span>
                </h2>
              </div>
              
              <h3 className="text-xl font-semibold text-orange-300 mb-4">Los estudiantes pueden incluir:</h3>
              
              <div className="space-y-4 text-left">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-white/90"><span className="font-semibold text-orange-300">Información personal y académica</span> (nombre, carrera, semestre)</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-amber-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-white/90"><span className="font-semibold text-amber-300">Currículum vitae</span> completo y actualizado</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-white/90"><span className="font-semibold text-yellow-300">Competencias técnicas</span> y habilidades especializadas</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-white/90"><span className="font-semibold text-orange-300">Datos de contacto</span> para oportunidades profesionales</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Publicación de Proyectos */}
          <div className="bg-black/40 backdrop-blur-lg rounded-3xl p-6 border border-amber-400/30 shadow-2xl shadow-amber-500/20">
            <div className="text-center mb-6">
              <div className="flex items-center justify-center mb-4">
                <div className="bg-amber-500/20 p-3 rounded-full mr-3">
                  <svg className="w-8 h-8 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-white font-['Poppins',_'system-ui',_sans-serif]">
                  <span className="bg-gradient-to-r from-amber-400 to-yellow-400 bg-clip-text text-transparent">Proyectos Terminales</span>
                </h2>
              </div>
              
              <h3 className="text-xl font-semibold text-amber-300 mb-4">Publicación de Tesinas:</h3>
              
              <div className="space-y-4 text-left">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-amber-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-white/90">Referencia para <span className="font-semibold text-amber-300">empleadores y colaboradores</span> académicos</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-white/90">Guía para <span className="font-semibold text-yellow-300">otros estudiantes</span> en sus proyectos</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-white/90">Incluye <span className="font-semibold text-orange-300">documentos, presentaciones</span> y código fuente</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-amber-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-white/90">Enlaces a <span className="font-semibold text-amber-300">repositorios</span> de código</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Ventajas e Interacciones */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          
          {/* Ventajas */}
          <div className="bg-black/30 backdrop-blur-lg rounded-2xl p-8 border border-orange-400/20 hover:border-orange-400/40 transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/10">
            <h3 className="text-2xl font-bold text-white mb-6 font-['Poppins',_'system-ui',_sans-serif]">
              <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">Ventajas Principales</span>
            </h3>
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-orange-500/10 to-amber-500/10 rounded-xl p-4 border border-orange-400/20">
                <div className="flex items-center space-x-3 mb-2">
                  <svg className="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <span className="font-semibold text-orange-300">Promoción del perfil profesional</span>
                </div>
                <p className="text-white/80 text-sm">Visibilidad estratégica para el desarrollo de carrera</p>
              </div>
              
              <div className="bg-gradient-to-br from-amber-500/10 to-yellow-500/10 rounded-xl p-4 border border-amber-400/20">
                <div className="flex items-center space-x-3 mb-2">
                  <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                  <span className="font-semibold text-amber-300">Acceso abierto a proyectos</span>
                </div>
                <p className="text-white/80 text-sm">Referencia académica para la comunidad estudiantil</p>
              </div>
              
              <div className="bg-gradient-to-br from-yellow-500/10 to-orange-500/10 rounded-xl p-4 border border-yellow-400/20">
                <div className="flex items-center space-x-3 mb-2">
                  <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <span className="font-semibold text-yellow-300">Vínculos comunitarios</span>
                </div>
                <p className="text-white/80 text-sm">Conexión entre universidad y sector externo</p>
              </div>
            </div>
          </div>

          {/* Interacciones */}
          <div className="bg-black/30 backdrop-blur-lg rounded-2xl p-8 border border-amber-400/20 hover:border-amber-400/40 transition-all duration-300 hover:shadow-2xl hover:shadow-amber-500/10">
            <h3 className="text-2xl font-bold text-white mb-6 font-['Poppins',_'system-ui',_sans-serif]">
              <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">Interacciones</span>
            </h3>
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-amber-500/10 to-orange-500/10 rounded-xl p-4 border border-amber-400/20">
                <div className="flex items-center space-x-3 mb-2">
                  <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  <span className="font-semibold text-amber-300">Contacto directo</span>
                </div>
                <p className="text-white/80 text-sm">Los usuarios pueden comunicarse directamente con estudiantes</p>
              </div>
              
              <div className="bg-gradient-to-br from-orange-500/10 to-yellow-500/10 rounded-xl p-4 border border-orange-400/20">
                <div className="flex items-center space-x-3 mb-2">
                  <svg className="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                  </svg>
                  <span className="font-semibold text-orange-300">Networking universitario</span>
                </div>
                <p className="text-white/80 text-sm">Fomenta la interacción entre comunidad interna y externa</p>
              </div>
              
              <div className="bg-gradient-to-br from-yellow-500/10 to-amber-500/10 rounded-xl p-4 border border-yellow-400/20">
                <div className="flex items-center space-x-3 mb-2">
                  <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                  </svg>
                  <span className="font-semibold text-yellow-300">Colaboración académica</span>
                </div>
                <p className="text-white/80 text-sm">Facilita colaboraciones en proyectos de investigación</p>
              </div>
            </div>
          </div>
        </div>

        {/* Presentation Navigation */}
        <div className="flex justify-between items-center">
          <button 
            onClick={() => navigate('/perfiluam')}
            className="flex items-center space-x-2 bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 text-white px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span className="font-medium">Anterior</span>
          </button>

          <div className="flex space-x-2">
            <div className="w-3 h-3 bg-white/30 rounded-full"></div>
            <div className="w-8 h-3 bg-orange-400 rounded-full"></div>
            <div className="w-3 h-3 bg-white/30 rounded-full"></div>
          </div>

          <button 
            onClick={() => navigate('/perfiluam/tecnologias')}
            className="flex items-center space-x-2 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
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
            className="absolute w-2 h-2 bg-orange-400/20 rounded-full animate-ping"
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
