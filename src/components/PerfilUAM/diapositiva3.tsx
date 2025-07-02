import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../Sidebar';

// Iconos SVG simples
const ArrowLeftIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
  </svg>
);

const ExternalLinkIcon = ({ className, style }: { className?: string; style?: React.CSSProperties }) => (
  <svg className={className} style={style} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
  </svg>
);

const PerfilUAMDiapositiva3: React.FC = () => {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    // Animación de entrada para los logos
    const logos = document.querySelectorAll('.tech-logo');
    logos.forEach((logo, index) => {
      (logo as HTMLElement).style.animationDelay = `${index * 0.2}s`;
    });
  }, []);

  const technologies = [
    { name: 'OpenAI', logo: '/Logos/openai.png' },
    { name: 'TypeScript', logo: '/Logos/typescript.png' },
    { name: 'React', logo: '/Logos/react.png' },
    { name: 'Tailwind CSS', logo: '/Logos/tailwind.png' },
    { name: 'GSAP', logo: '/Logos/gsap.png' },
    { name: 'Next.js', logo: '/Logos/nextjs.png' },
    { name: 'Node.js', logo: '/Logos/nodejs.png' },
    { name: 'MongoDB', logo: '/Logos/mongodb.png' },
    { name: 'Google Cloud', logo: '/Logos/gcloud.png' },
    { name: 'AWS', logo: '/Logos/aws.png' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-900 via-amber-900 to-orange-800 text-white relative overflow-hidden">
      {/* Sidebar */}
      <Sidebar currentPage="/perfiluam/tecnologias" onToggle={setSidebarOpen} />
      
      {/* Fondo animado con partículas */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-4 h-4 bg-orange-400 rounded-full animate-float opacity-60"></div>
        <div className="absolute top-40 right-20 w-6 h-6 bg-amber-300 rounded-full animate-float-delayed opacity-50"></div>
        <div className="absolute bottom-32 left-20 w-5 h-5 bg-orange-300 rounded-full animate-float opacity-40"></div>
        <div className="absolute bottom-60 right-32 w-3 h-3 bg-amber-400 rounded-full animate-float-delayed opacity-70"></div>
        <div className="absolute top-1/2 left-1/3 w-2 h-2 bg-orange-200 rounded-full animate-float opacity-30"></div>
      </div>

      {/* Gradiente overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>

      <div className={`relative z-10 container mx-auto px-2 sm:px-4 md:px-6 py-6 md:py-12 flex flex-col min-h-screen transition-all duration-300 ${sidebarOpen ? 'lg:pr-96' : ''}`}>
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-orange-300 to-amber-300 bg-clip-text text-transparent">
              PerfilUAM - Stack Tecnológico
            </h1>
          </div>
          
          {/* Indicadores de diapositiva */}
          <div className="flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-orange-400/30"></div>
            <div className="w-3 h-3 rounded-full bg-orange-400/30"></div>
            <div className="w-8 h-3 rounded-full bg-gradient-to-r from-orange-400 to-amber-400"></div>
          </div>
        </div>

        {/* Contenido principal */}
        <div className="flex-1 flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-12">
          
          {/* Sección de tecnologías */}
          <div className="flex-1 space-y-8 w-full">
            <div className="text-center lg:text-left">
              <h2 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-orange-300 to-amber-300 bg-clip-text text-transparent">
                Tecnologías Utilizadas
              </h2>
              <p className="text-lg text-orange-100 max-w-2xl">
                PerfilUAM está construido con las tecnologías más modernas y robustas del mercado, 
                garantizando rendimiento, escalabilidad y una experiencia de usuario excepcional.
              </p>
            </div>

            {/* Grid de tecnologías */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 md:gap-6">
              {technologies.map((tech) => (
                <div 
                  key={tech.name}
                  className="tech-logo flex flex-col items-center p-4 bg-gradient-to-br from-orange-800/50 to-amber-800/50 rounded-xl border border-orange-600/30 hover:border-orange-400/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/20"
                  style={{ animation: 'fadeInUp 0.8s ease-out forwards', opacity: 0 }}
                >
                  <img 
                    src={tech.logo} 
                    alt={tech.name}
                    className="w-12 h-12 object-contain mb-2 filter brightness-110"
                  />
                  <span className="text-sm text-orange-100 text-center font-medium">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>

            {/* Características destacadas */}
            <div className="bg-gradient-to-r from-orange-800/40 to-amber-800/40 rounded-xl p-6 border border-orange-600/30">
              <h3 className="text-xl font-bold text-orange-300 mb-4">Stack Moderno y Escalable</h3>
              <ul className="space-y-2 text-orange-100">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-orange-400 rounded-full mr-3"></div>
                  Frontend desarrollado con React y TypeScript
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-amber-400 rounded-full mr-3"></div>
                  Backend robusto con Node.js y Express
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-orange-400 rounded-full mr-3"></div>
                  Base de datos MongoDB para flexibilidad
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-amber-400 rounded-full mr-3"></div>
                  Integración con IA de OpenAI
                </li>
              </ul>
            </div>
          </div>

          {/* Sección del QR y enlace */}
          <div className="flex-shrink-0 text-center space-y-6 w-full max-w-xs md:max-w-sm lg:max-w-md">
            <div className="bg-gradient-to-br from-orange-800/60 to-amber-800/60 p-8 rounded-2xl border border-orange-600/40 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-orange-300 mb-4">
                Visita PerfilUAM
              </h3>
              
              {/* QR Code */}
              <div className="bg-white p-4 rounded-xl mb-6 inline-block shadow-lg">
                <img 
                  src="/QR/perfiluamqr.png" 
                  alt="QR Code PerfilUAM"
                  className="w-32 h-32 object-contain"
                />
              </div>
              
              <p className="text-orange-100 mb-4 text-sm">
                Escanea el código QR o visita el enlace
              </p>
              
              <a 
                href="https://perfiluam.maxitodev.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/30"
                style={{ 
                  color: '#ffffff',
                  textDecoration: 'none'
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.color = '#ffffff';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.color = '#ffffff';
                }}
              >
                <ExternalLinkIcon className="w-5 h-5 mr-2" style={{ color: '#ffffff' }} />
                Visitar PerfilUAM
              </a>
              
              <p className="text-xs text-orange-200 mt-3 break-all">
                perfiluam.maxitodev.com
              </p>
            </div>
          </div>
        </div>

        {/* Navegación */}
        <div className="flex justify-between items-center pt-8">
          <button
            onClick={() => navigate('/perfiluam/funcionamiento')}
            className="flex items-center px-6 py-3 bg-gradient-to-r from-orange-700/50 to-amber-700/50 hover:from-orange-600/50 hover:to-amber-600/50 text-white rounded-lg border border-orange-600/30 hover:border-orange-400/50 transition-all duration-300"
          >
            <ArrowLeftIcon className="w-5 h-5 mr-2" />
            Anterior
          </button>

          <div className="text-center">
            <span className="text-orange-300 font-medium">Diapositiva 3 de 3</span>
          </div>

          <div className="flex space-x-4">
            <button
              onClick={() => navigate('/donauam')}
              className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white rounded-lg font-semibold transition-all duration-300 hover:scale-105"
            >
              Ver DonaUAM
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerfilUAMDiapositiva3;