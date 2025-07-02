import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import DonaUAM from './pages/donauam.tsx'
import PerfilUAM from './pages/PerfilUAM.tsx'
import Diapositiva2 from './components/DonaUAM/diapositiva2.tsx'
import Diapositiva3 from './components/DonaUAM/diapositiva3.tsx'
import PerfilUAMDiapositiva2 from './components/PerfilUAM/diapositiva2.tsx'
import PerfilUAMDiapositiva3 from './components/PerfilUAM/diapositiva3.tsx'
import SobreMi from './pages/sobremi.tsx'
import ScrollToTop from './components/ScrollToTop.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/donauam" element={<DonaUAM />} />
        <Route path="/donauam/comparacion" element={<Diapositiva2 />} />
        <Route path="/donauam/tecnologias" element={<Diapositiva3 />} />
        <Route path="/perfiluam" element={<PerfilUAM />} />
        <Route path="/perfiluam/funcionamiento" element={<PerfilUAMDiapositiva2 />} />
        <Route path="/perfiluam/tecnologias" element={<PerfilUAMDiapositiva3 />} />
        <Route path="/sobremi" element={<SobreMi />} />
      </Routes>
    </Router>
  </StrictMode>,
)
