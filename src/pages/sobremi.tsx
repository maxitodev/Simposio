import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';

const SobreMi: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const socialLinks = [
    { 
      name: 'Facebook', 
      url: 'https://facebook.com/maxitodev', 
      icon: (
        <svg className="w-5 h-5" fill="white" viewBox="0 0 24 24" style={{ color: 'white !important' }}>
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      ),
      color: 'from-blue-600 to-blue-700'
    },
    { 
      name: 'Instagram', 
      url: 'https://instagram.com/maxitodev', 
      icon: (
        <svg className="w-5 h-5" fill="white" viewBox="0 0 24 24" style={{ color: 'white !important' }}>
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      ),
      color: 'from-pink-600 to-purple-700'
    },
    { 
      name: 'GitHub', 
      url: 'https://github.com/maxitodev', 
      icon: (
        <svg className="w-5 h-5" fill="white" viewBox="0 0 24 24" style={{ color: 'white !important' }}>
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      ),
      color: 'from-gray-700 to-gray-900'
    },
    { 
      name: 'LinkedIn', 
      url: 'https://linkedin.com/in/maxitodev', 
      icon: (
        <svg className="w-5 h-5" fill="white" viewBox="0 0 24 24" style={{ color: 'white !important' }}>
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      color: 'from-blue-600 to-blue-800'
    }
  ];

  const projects = [
    {
      name: 'DonaUAM',
      description: 'Sistema de donaciones universitarias con IA',
      github: 'https://github.com/maxitodev/DonaUAM',
      website: 'https://donauam.maxitodev.com',
      qr: '/QR/donauamqr.png',
      tech: ['React', 'Node.js', 'OpenAI', 'MongoDB'],
      gradient: 'from-purple-600 to-pink-600'
    },
    {
      name: 'PerfilUAM',
      description: 'Plataforma de perfiles académicos y proyectos terminales para la comunidad universitaria',
      github: 'https://github.com/maxitodev/PerfilUAM',
      website: 'https://perfiluam.maxitodev.com',
      qr: '/QR/perfiluamqr.png',
      tech: ['Next.js', 'TypeScript', 'Tailwind', 'GSAP'],
      gradient: 'from-orange-600 to-amber-600'
    },
    {
      name: 'MaxitoDev',
      description: 'Mi sitio web personal y portafolio donde comparto mis proyectos y experiencias',
      github: 'https://maxitodev.com/',
      website: 'https://maxitodev.com',
      qr: '/QR/maxitodevqr.png',
      tech: ['React', 'JavaScript', 'CSS', 'Design'],
      gradient: 'from-indigo-600 to-purple-600'
    }
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 overflow-x-hidden">
      {/* Sidebar */}
      <Sidebar currentPage="/sobremi" onToggle={setSidebarOpen} />
      
      {/* Dynamic Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-blue-500/30 to-purple-500/30 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-indigo-500/30 to-pink-500/30 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/3 left-1/3 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-ping" />
        
        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-20 w-4 h-4 bg-blue-400/60 rotate-45 animate-float" />
        <div className="absolute top-40 right-32 w-6 h-6 bg-purple-400/40 rounded-full animate-float-delayed" />
        <div className="absolute bottom-40 left-1/4 w-3 h-8 bg-indigo-400/50 animate-float" />
        <div className="absolute bottom-20 right-20 w-5 h-5 bg-pink-400/60 rotate-12 animate-float-delayed" />
      </div>

      {/* Main Content */}
      <div className={`relative z-10 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} ${sidebarOpen ? 'lg:pr-80' : ''}`}>
        
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-12">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            
            {/* Left Column - Text Content */}
            <div className="space-y-6 sm:space-y-8 order-2 lg:order-1">
              <div className="space-y-4 sm:space-y-6">
                <div className="inline-block">
                  <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm border border-blue-400/30 rounded-full px-4 sm:px-6 py-2 sm:py-3">
                    <span className="text-blue-300 font-medium text-sm sm:text-base">¡Gracias por tu atención! 🎉</span>
                  </div>
                </div>
                
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight">
                  <span className="block text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text font-['Montserrat',_'system-ui',_sans-serif]">
                    Max Sánchez
                  </span>
                  <span className="block text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-blue-300 font-normal mt-2 font-['Inter',_'system-ui',_sans-serif]">
                    @maxitodev
                  </span>
                </h1>
                
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/80 leading-relaxed max-w-2xl font-['Inter',_'system-ui',_sans-serif]">
                  <span className="font-semibold text-blue-300">Desarrollador Full Stack</span> especializado en 
                  tecnologías modernas. Creador de DonaUAM y PerfilUAM, proyectos enfocados en 
                  <span className="font-semibold text-purple-300"> mejorar la experiencia universitaria</span> a través de la tecnología.
                </p>
                
                <div className="flex flex-wrap gap-3 sm:gap-4">
                  <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm border border-blue-400/30 rounded-lg sm:rounded-xl px-3 sm:px-4 py-2">
                    <span className="text-blue-300 font-medium text-sm sm:text-base">🎓 Universidad Autónoma Metropolitana</span>
                  </div>
                  <div className="bg-gradient-to-r from-purple-600/20 to-indigo-600/20 backdrop-blur-sm border border-purple-400/30 rounded-lg sm:rounded-xl px-3 sm:px-4 py-2">
                    <span className="text-purple-300 font-medium text-sm sm:text-base">💻 Ingeniería en Computación</span>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="space-y-3 sm:space-y-4">
                <h3 className="text-lg sm:text-xl font-semibold text-white">Encuéntrame en:</h3>
                <div className="flex flex-wrap gap-3 sm:gap-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group flex items-center space-x-2 sm:space-x-3 bg-gradient-to-r ${social.color} hover:scale-105 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl backdrop-blur-sm text-sm sm:text-base`}
                      style={{ color: 'white !important' }}
                    >
                      <div className="text-white social-icon" style={{ color: 'white !important' }}>
                        <div className="w-4 h-4 sm:w-5 sm:h-5 text-white fill-white social-icon [&>svg]:text-white [&>svg]:fill-white [&>svg>*]:fill-white" style={{ color: 'white !important' }}>
                          {social.icon}
                        </div>
                      </div>
                      <span className="font-medium text-white">{social.name}</span>
                    </a>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="pt-4">
                <p className="text-base sm:text-lg text-white/90 mb-4 sm:mb-6">
                  <span className="font-bold text-blue-300">¿Te interesa el proyecto o quieres contribuir?</span>
                </p>
                <a
                  href="https://maxitodev.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 sm:space-x-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl font-semibold text-base sm:text-lg group"
                  style={{ color: 'white !important' }}
                >
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="white" viewBox="0 0 24 24" style={{ color: 'white !important' }}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  <span className="text-white">Visitar maxitodev.com</span>
                </a>
              </div>
            </div>

            {/* Right Column - Profile Image */}
            <div className="flex justify-center lg:justify-end order-1 lg:order-2">
              <div className="relative group">
                {/* Glowing background effect */}
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/50 via-purple-600/50 to-indigo-600/50 rounded-2xl blur-2xl opacity-50 group-hover:opacity-75 transition-opacity duration-300" />
                
                {/* Image container */}
                <div className="relative bg-gradient-to-br from-blue-900/50 to-purple-900/50 backdrop-blur-sm border border-white/20 rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-2xl">
                  <img 
                    src="/UAM/yo.png" 
                    alt="Max Sánchez - maxitodev"
                    className="w-full max-w-xs sm:max-w-sm h-auto object-cover rounded-lg sm:rounded-xl shadow-xl transition-transform duration-300 group-hover:scale-105"
                  />
                  
                  {/* Status indicator */}
                  <div className="absolute -top-2 -right-2 bg-green-500 w-4 h-4 sm:w-6 sm:h-6 rounded-full border-2 sm:border-4 border-white shadow-lg animate-pulse" />
                  
                  {/* Floating badges */}
                  <div className="absolute -bottom-3 sm:-bottom-4 -left-3 sm:-left-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 sm:px-4 py-1 sm:py-2 rounded-full shadow-lg backdrop-blur-sm border border-white/20">
                    <span className="text-xs sm:text-sm font-medium text-white">Available for projects</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text mb-4 sm:mb-6 font-['Montserrat',_'system-ui',_sans-serif]">
                Mis Proyectos
              </h2>
              <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto">
                Explora mis últimos trabajos y contribuciones al mundo del desarrollo
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {projects.map((project) => (
                <div 
                  key={project.name}
                  className="group relative bg-black/40 backdrop-blur-lg rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105 hover:shadow-2xl flex flex-col h-full"
                >
                  {/* Project header */}
                  <div className="mb-4 sm:mb-6 flex-grow">
                    <div className={`inline-block bg-gradient-to-r ${project.gradient} text-white px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-medium mb-3 sm:mb-4`}>
                      <span className="text-white">Proyecto Destacado</span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                      {project.name}
                    </h3>
                    <p className="text-white/70 leading-relaxed text-sm sm:text-base">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech stack */}
                  <div className="mb-4 sm:mb-6">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span key={tech} className="bg-white/10 text-white/80 px-2 sm:px-3 py-1 rounded-full text-xs font-medium">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* QR Code */}
                  <div className="mb-4 sm:mb-6 text-center">
                    <div className="bg-white p-3 sm:p-4 rounded-lg sm:rounded-xl inline-block shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <img 
                        src={project.qr} 
                        alt={`QR Code ${project.name}`}
                        className="w-16 h-16 sm:w-20 sm:h-20 object-contain"
                      />
                    </div>
                  </div>

                  {/* Action buttons */}
                  <div className="space-y-2 sm:space-y-3 mt-auto">
                    <a
                      href={project.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-full flex items-center justify-center space-x-2 bg-gradient-to-r ${project.gradient} hover:opacity-90 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl transition-all duration-300 hover:scale-105 font-medium group text-sm sm:text-base`}
                      style={{ color: 'white !important' }}
                    >
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="white" viewBox="0 0 24 24" style={{ color: 'white !important' }}>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      <span className="text-white">Ver Proyecto</span>
                    </a>
                    
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center space-x-2 bg-white/10 hover:bg-white/20 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl transition-all duration-300 hover:scale-105 font-medium border border-white/20 text-sm sm:text-base"
                      style={{ color: 'white !important' }}
                    >
                      <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="white" viewBox="0 0 24 24" style={{ color: 'white !important' }}>
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      <span className="text-white">Ver Código</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Navigation Section */}
        <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-black/40 backdrop-blur-lg rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-white/10">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">
                Explora la presentación
              </h3>
              
              <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4">
                <button 
                  onClick={() => navigate('/')}
                  className="flex items-center justify-center space-x-2 sm:space-x-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl font-medium text-sm sm:text-base"
                  style={{ color: 'white !important' }}
                >
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="white" viewBox="0 0 24 24" style={{ color: 'white !important' }}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                  <span className="text-white">Página Principal</span>
                </button>

                <button
                  onClick={() => navigate('/donauam')}
                  className="flex items-center justify-center space-x-2 sm:space-x-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-medium transition-all duration-300 hover:scale-105 shadow-lg text-sm sm:text-base"
                  style={{ color: 'white !important' }}
                >
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="white" viewBox="0 0 24 24" style={{ color: 'white !important' }}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-white">Ver DonaUAM</span>
                </button>
                
                <button
                  onClick={() => navigate('/perfiluam')}
                  className="flex items-center justify-center space-x-2 sm:space-x-3 bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-medium transition-all duration-300 hover:scale-105 shadow-lg text-sm sm:text-base"
                  style={{ color: 'white !important' }}
                >
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="white" viewBox="0 0 24 24" style={{ color: 'white !important' }}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <span className="text-white">Ver PerfilUAM</span>
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/30 rounded-full animate-ping"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default SobreMi;
