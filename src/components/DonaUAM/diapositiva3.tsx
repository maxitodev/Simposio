import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../Sidebar';

const Diapositiva3: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const technologies = [
    { name: 'OpenAI', logo: '/Logos/openai.png', description: 'Inteligencia Artificial' },
    { name: 'React', logo: '/Logos/react.png', description: 'Frontend Framework' },
    { name: 'Tailwind CSS', logo: '/Logos/tailwind.png', description: 'CSS Framework' },
    { name: 'JavaScript', logo: '/Logos/javascript.png', description: 'Programming Language' },
    { name: 'GSAP', logo: '/Logos/gsap.png', description: 'Animation Library' },
    { name: 'Vite', logo: '/Logos/vite.png', description: 'Build Tool' },
    { name: 'Node.js', logo: '/Logos/nodejs.png', description: 'Backend Runtime' },
    { name: 'Express', logo: '/Logos/express.png', description: 'Backend Framework' },
    { name: 'MongoDB', logo: '/Logos/mongodb.png', description: 'Database' },
    { name: 'Google Cloud', logo: '/Logos/gcloud.png', description: 'Cloud Platform' },
    { name: 'AWS', logo: '/Logos/aws.png', description: 'Cloud Services' }
  ];

  const websiteUrl = 'https://donauam.maxitodev.com/';

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-purple-900 via-violet-900 to-pink-900 overflow-x-hidden">
      {/* Sidebar */}
      <Sidebar currentPage="/donauam/tecnologias" onToggle={setSidebarOpen} />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000" />
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-violet-500 rounded-full mix-blend-multiply filter blur-xl opacity-15 animate-ping" />
      </div>

      {/* Main Content */}
      <div className={`relative z-10 container mx-auto px-6 lg:px-12 py-12 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} ${sidebarOpen ? 'lg:pr-96' : ''}`}>
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-violet-400 bg-clip-text mb-6 leading-tight tracking-tighter font-['Montserrat',_'system-ui',_sans-serif]">
            Stack Tecnológico
          </h1>
          
          <div className="w-48 h-2 bg-gradient-to-r from-purple-400 via-pink-400 to-violet-400 mx-auto mb-8 rounded-full animate-pulse shadow-lg" />
          
          <p className="text-lg md:text-xl text-white/90 font-medium leading-relaxed max-w-3xl mx-auto font-['Inter',_'system-ui',_sans-serif]">
            Tecnologías modernas utilizadas en el desarrollo de <span className="font-bold text-purple-300">DonaUAM</span>
          </p>
        </div>

        {/* Technologies Grid */}
        <div className="mb-12">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6 lg:gap-8">
            {technologies.map((tech, index) => (
              <div
                key={tech.name}
                className="group bg-black/30 backdrop-blur-lg rounded-2xl p-6 border border-purple-400/20 hover:border-purple-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20 hover:scale-105 animate-fade-in"
                style={{
                  animationDelay: `${index * 0.1}s`,
                  animationFillMode: 'both'
                }}
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-white/10 rounded-xl p-3 group-hover:bg-white/20 transition-all duration-300 flex items-center justify-center">
                    <img 
                      src={tech.logo} 
                      alt={tech.name}
                      className="w-full h-full object-contain filter group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-sm md:text-base mb-1 group-hover:text-purple-300 transition-colors duration-300">
                      {tech.name}
                    </h3>
                    <p className="text-white/60 text-xs group-hover:text-white/80 transition-colors duration-300">
                      {tech.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Website Section */}
        <div className="max-w-full md:max-w-4xl mx-auto mb-12">
          <div className="bg-black/40 backdrop-blur-lg rounded-2xl md:rounded-3xl p-4 md:p-8 border border-purple-400/30 shadow-2xl shadow-purple-500/20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
              
              {/* Left Column - Website Info */}
              <div className="text-center md:text-left">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-['Poppins',_'system-ui',_sans-serif]">
                  <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Visita el Sitio Web
                  </span>
                </h2>
                
                <p className="text-white/80 text-lg mb-6">
                  Explora la aplicación completa de DonaUAM en funcionamiento
                </p>
                
                <div className="bg-black/30 rounded-xl p-4 mb-6 border border-purple-400/20">
                  <p className="text-purple-300 font-mono text-sm break-all">
                    {websiteUrl}
                  </p>
                </div>
                
                <a
                  href={websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl font-medium text-lg"
                >
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  <span className="text-white">Abrir Sitio Web</span>
                </a>
              </div>

              {/* Right Column - QR Code */}
              <div className="flex flex-col items-center">
                <div className="bg-white p-6 rounded-2xl shadow-2xl mb-4">
                  <img 
                    src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(websiteUrl)}`}
                    alt="QR Code para DonaUAM"
                    className="w-48 h-48 object-contain"
                  />
                </div>
                <p className="text-white/70 text-center text-sm">
                  Escanea el código QR con tu dispositivo móvil
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Presentation Navigation */}
        <div className="flex flex-col items-center space-y-4 md:space-y-6">
          {/* Navigation Buttons */}
          <div className="flex justify-center items-center space-x-8">
            <button 
              onClick={() => navigate('/donauam/comparacion')}
              className="flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span className="font-medium">Anterior</span>
            </button>

            <div className="flex space-x-2">
              <div className="w-3 h-3 bg-white/30 rounded-full"></div>
              <div className="w-3 h-3 bg-white/30 rounded-full"></div>
              <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
            </div>

            <button 
              onClick={() => navigate('/')}
              className="flex items-center space-x-2 bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <span className="font-medium">Finalizar</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Additional Navigation to PerfilUAM */}
          <div className="text-center">
            <p className="text-white/60 text-sm mb-4">¿Quieres ver otra presentación?</p>
            <button 
              onClick={() => navigate('/perfiluam')}
              className="inline-flex items-center space-x-3 bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 text-white px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl font-medium text-lg border border-orange-400/30"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <span>Presentación - PerfilUAM</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
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

export default Diapositiva3;
