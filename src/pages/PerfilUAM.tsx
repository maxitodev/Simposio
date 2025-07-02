import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';

const PerfilUAM: React.FC = () => {
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
      <Sidebar currentPage="/perfiluam" onToggle={setSidebarOpen} />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-orange-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-amber-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000" />
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-15 animate-ping" />
      </div>

      {/* Main Content */}
      <div className={`relative z-10 container mx-auto px-6 lg:px-12 py-12 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} ${sidebarOpen ? 'lg:pr-96' : ''}`}>
        
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-transparent bg-gradient-to-r from-orange-400 via-amber-400 to-yellow-400 bg-clip-text mb-6 leading-tight tracking-tighter font-['Montserrat',_'system-ui',_sans-serif] animate-pulse">
            PerfilUAM
          </h1>
          
          <div className="w-48 h-2 bg-gradient-to-r from-orange-400 via-amber-400 to-yellow-400 mx-auto mb-8 rounded-full animate-pulse shadow-lg" />
          
          <p className="text-lg md:text-xl lg:text-2xl text-white/90 font-medium leading-relaxed max-w-3xl mx-auto font-['Inter',_'system-ui',_sans-serif] mb-12">
            <span className="font-bold text-orange-300">Plataforma estratégica</span> para proyectar el talento estudiantil y apoyar la inserción laboral
          </p>
        </div>

        {/* Main Video Section */}
        <div className="mb-8">
          <div className="max-w-6xl mx-auto">
            <div className="bg-black/40 backdrop-blur-lg rounded-3xl p-6 border border-orange-400/30 shadow-2xl shadow-orange-500/20">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center font-['Poppins',_'system-ui',_sans-serif]">
                <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">Demostración del Sistema</span>
              </h2>
              
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-orange-400/20 group">
                <video
                  id="perfiluam-video"
                  className="w-full h-auto min-h-[300px] max-h-[500px] md:min-h-[500px] md:max-h-[700px] object-cover"
                  src="/UAM/perfiluam1.webm"
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
                    const video = document.getElementById('perfiluam-video') as HTMLVideoElement;
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
                  Observa la interfaz principal de PerfilUAM
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid - Funcionalidades */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          
          {/* Left Column - Funcionalidades */}
          <div className="bg-black/30 backdrop-blur-lg rounded-2xl p-8 border border-orange-400/20 hover:border-orange-400/40 transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/10">
            <h3 className="text-2xl font-bold text-white mb-6 font-['Poppins',_'system-ui',_sans-serif]">
              <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">¿Qué pueden hacer los estudiantes?</span>
            </h3>
            <ul className="space-y-4 text-white/90">
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-lg leading-relaxed">Publicar su <span className="font-semibold text-orange-300">currículum completo</span> de manera profesional</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-amber-400 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-lg leading-relaxed">Destacar sus <span className="font-semibold text-amber-300">competencias y habilidades</span> técnicas</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-lg leading-relaxed">Compartir <span className="font-semibold text-yellow-300">datos de contacto</span> para oportunidades laborales</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-lg leading-relaxed">Mostrar su <span className="font-semibold text-orange-300">tesina y proyectos</span> académicos</span>
              </li>
            </ul>
          </div>

          {/* Right Column - Beneficios */}
          <div className="bg-black/30 backdrop-blur-lg rounded-2xl p-8 border border-amber-400/20 hover:border-amber-400/40 transition-all duration-300 hover:shadow-2xl hover:shadow-amber-500/10">
            <h3 className="text-2xl font-bold text-white mb-6 font-['Poppins',_'system-ui',_sans-serif]">
              <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">Beneficios</span>
            </h3>
            <div className="grid gap-4">
              <div className="bg-gradient-to-br from-orange-500/10 to-amber-500/10 rounded-xl p-4 border border-orange-400/20">
                <div className="flex items-center space-x-3 mb-2">
                  <svg className="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2v0" />
                  </svg>
                  <span className="font-semibold text-orange-300">Inserción laboral</span>
                </div>
                <p className="text-white/80 text-sm">Facilita el acceso a oportunidades de empleo</p>
              </div>
              
              <div className="bg-gradient-to-br from-amber-500/10 to-yellow-500/10 rounded-xl p-4 border border-amber-400/20">
                <div className="flex items-center space-x-3 mb-2">
                  <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <span className="font-semibold text-amber-300">Proyección del talento</span>
                </div>
                <p className="text-white/80 text-sm">Visibilidad profesional para estudiantes destacados</p>
              </div>
              
              <div className="bg-gradient-to-br from-yellow-500/10 to-orange-500/10 rounded-xl p-4 border border-yellow-400/20">
                <div className="flex items-center space-x-3 mb-2">
                  <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                  </svg>
                  <span className="font-semibold text-yellow-300">Networking académico</span>
                </div>
                <p className="text-white/80 text-sm">Conexión entre estudiantes y empleadores</p>
              </div>
              
              <div className="bg-gradient-to-br from-orange-500/10 to-amber-500/10 rounded-xl p-4 border border-orange-400/20">
                <div className="flex items-center space-x-3 mb-2">
                  <svg className="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                  <span className="font-semibold text-orange-300">Certificación digital</span>
                </div>
                <p className="text-white/80 text-sm">Validación oficial de competencias académicas</p>
              </div>
            </div>
          </div>
        </div>

        {/* Target Audience */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="bg-black/40 backdrop-blur-lg rounded-3xl p-8 border border-orange-400/30 shadow-2xl shadow-orange-500/20">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-['Poppins',_'system-ui',_sans-serif]">
                <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">Dirigido a Estudiantes</span>
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6 text-left">
                <div className="bg-gradient-to-br from-orange-500/10 to-amber-500/10 rounded-xl p-6 border border-orange-400/20">
                  <div className="flex items-center space-x-3 mb-4">
                    <svg className="w-8 h-8 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <h3 className="text-xl font-bold text-orange-300">Ingeniería en Computación</h3>
                  </div>
                  <p className="text-white/80">Estudiantes especializados en desarrollo de software, sistemas y tecnologías computacionales</p>
                </div>
                
                <div className="bg-gradient-to-br from-amber-500/10 to-yellow-500/10 rounded-xl p-6 border border-amber-400/20">
                  <div className="flex items-center space-x-3 mb-4">
                    <svg className="w-8 h-8 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                    <h3 className="text-xl font-bold text-amber-300">Matemáticas Aplicadas</h3>
                  </div>
                  <p className="text-white/80">Estudiantes enfocados en modelado matemático, análisis de datos y métodos cuantitativos</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Presentation Navigation */}
        <div className="flex justify-center items-center space-x-8">
          <button 
            onClick={() => navigate('/')}
            className="flex items-center space-x-2 bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 text-white px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span className="font-medium">Anterior</span>
          </button>

          <div className="flex space-x-2">
            <div className="w-3 h-3 bg-orange-400 rounded-full"></div>
            <div className="w-3 h-3 bg-white/30 rounded-full"></div>
            <div className="w-3 h-3 bg-white/30 rounded-full"></div>
          </div>

          <button 
            onClick={() => navigate('/perfiluam/funcionamiento')}
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

export default PerfilUAM;
