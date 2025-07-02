import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface SidebarProps {
  currentPage?: string;
  onToggle?: (isOpen: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ currentPage = '', onToggle }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  // Notify parent component when sidebar state changes
  useEffect(() => {
    if (onToggle) {
      onToggle(isOpen);
    }
  }, [isOpen, onToggle]);

  // Determine theme based on current page
  const getTheme = () => {
    if (currentPage.includes('/donauam')) {
      return {
        gradient: 'from-purple-900/90 via-violet-900/90 to-pink-900/90',
        border: 'border-purple-400/30',
        button: 'from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700',
        accent: 'from-purple-400 to-pink-400',
        activeGradient: 'from-purple-600/50 to-pink-600/50',
        activeBorder: 'border-purple-400/30'
      };
    } else if (currentPage.includes('/perfiluam')) {
      return {
        gradient: 'from-orange-900/90 via-amber-900/90 to-yellow-900/90',
        border: 'border-orange-400/30',
        button: 'from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700',
        accent: 'from-orange-400 to-amber-400',
        activeGradient: 'from-orange-600/50 to-amber-600/50',
        activeBorder: 'border-orange-400/30'
      };
    } else if (currentPage.includes('/sobremi')) {
      return {
        gradient: 'from-blue-900/90 via-indigo-900/90 to-cyan-900/90',
        border: 'border-blue-400/30',
        button: 'from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700',
        accent: 'from-blue-400 to-indigo-400',
        activeGradient: 'from-blue-600/50 to-indigo-600/50',
        activeBorder: 'border-blue-400/30'
      };
    } else {
      // Default theme for home page
      return {
        gradient: 'from-slate-900/90 via-gray-900/90 to-zinc-900/90',
        border: 'border-gray-400/30',
        button: 'from-gray-600 to-slate-600 hover:from-gray-700 hover:to-slate-700',
        accent: 'from-gray-400 to-slate-400',
        activeGradient: 'from-gray-600/50 to-slate-600/50',
        activeBorder: 'border-gray-400/30'
      };
    }
  };

  const theme = getTheme();

  const menuItems = [
    {
      name: 'INICIO',
      path: '/',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      )
    },
    {
      name: 'DonaUAM',
      path: '/donauam',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      name: 'PerfilUAM',
      path: '/perfiluam',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      )
    },
    {
      name: 'Sobre Mí',
      path: '/sobremi',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ];

  const handleNavigation = (path: string) => {
    navigate(path);
    setIsOpen(false);
  };

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[9990]"
          onClick={() => setIsOpen(false)}
          style={{ zIndex: 9990 }}
        />
      )}

      {/* Menu Hamburger Button - Single unified button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-3 right-3 z-[9999] bg-white/10 backdrop-blur-md text-white p-1.5 rounded-md border border-white/30 transition-all duration-300 transform hover:scale-105 hover:bg-white/20"
        style={{ 
          zIndex: 9999,
          color: '#ffffff',
          backgroundColor: 'rgba(255, 255, 255, 0.1)'
        }}
      >
        <svg 
          className="w-4 h-4 transition-all duration-300 text-white" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
          strokeWidth={2.5}
          style={{ color: '#ffffff' }}
        >
          {isOpen ? (
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              d="M6 18L18 6M6 6l12 12"
              className="animate-in fade-in duration-200"
            />
          ) : (
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              d="M4 6h16M4 12h16M4 18h16"
              className="animate-in fade-in duration-200"
            />
          )}
        </svg>
      </button>

      {/* Sidebar */}
      <div 
        className={`
          fixed top-0 right-0 h-screen w-80 
          bg-gradient-to-b ${theme.gradient} 
          backdrop-blur-xl border-l-4 ${theme.border} shadow-2xl
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}
          text-white
        `}
        style={{ 
          zIndex: 9997,
          position: 'fixed',
          top: 0,
          right: 0,
          height: '100vh',
          width: '320px',
          display: 'block',
          visibility: 'visible',
          color: '#ffffff'
        }}
      >
        {/* Header */}
        <div className={`p-6 sm:p-8 border-b ${theme.border}`}>
          <div className="flex items-center">
            <h2 className={`text-xl sm:text-2xl font-bold text-transparent bg-gradient-to-r ${theme.accent} bg-clip-text font-['Montserrat',_'system-ui',_sans-serif]`}>
              Navegación
            </h2>
          </div>
          
          {/* Decorative line */}
          <div className={`w-12 sm:w-16 h-1 bg-gradient-to-r ${theme.accent} rounded-full mt-3 sm:mt-4`} />
        </div>

        {/* Menu Items */}
        <nav className="flex-1 p-6">
          <ul className="space-y-4">
            {menuItems.map((item, index) => {
              const isActive = currentPage === item.path || 
                             (currentPage === '/donauam' && item.name === 'DonaUAM') ||
                             (currentPage === '/' && item.name === 'INICIO');
              
              return (
                <li key={index}>
                  <button
                    onClick={() => handleNavigation(item.path)}
                    className={`
                      w-full flex items-center space-x-4 p-4 rounded-xl transition-all duration-300
                      font-medium text-left group
                      ${isActive 
                        ? `bg-gradient-to-r ${theme.activeGradient} text-white border ${theme.activeBorder} shadow-lg` 
                        : `text-white/80 hover:text-white hover:bg-white/10 border border-transparent hover:border-white/20`
                      }
                    `}
                    style={{
                      color: isActive ? '#ffffff' : 'rgba(255, 255, 255, 0.8)',
                      backgroundColor: isActive ? undefined : 'transparent'
                    }}
                  >
                    <div className={`
                      flex-shrink-0 transition-all duration-300
                      ${isActive 
                        ? 'text-white' 
                        : 'text-white/70 group-hover:text-white'
                      }
                    `}
                    style={{
                      color: isActive ? '#ffffff' : 'rgba(255, 255, 255, 0.7)'
                    }}>
                      {item.icon}
                    </div>
                    
                    <span className={`
                      font-['Inter',_'system-ui',_sans-serif] text-lg
                      ${isActive ? 'text-white font-semibold' : 'text-white'}
                    `}
                    style={{
                      color: '#ffffff'
                    }}>
                      {item.name}
                    </span>

                    {/* Active indicator */}
                    {isActive && (
                      <div className={`ml-auto w-2 h-2 bg-gradient-to-r ${theme.accent} rounded-full animate-pulse`} />
                    )}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
