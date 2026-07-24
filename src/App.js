import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import VideoModal from './components/VideoModal';
import ConfirmacionPage from './pages/ConfirmacionPage';
import HomePage from './pages/HomePage';
import ProgramaPage from './pages/ProgramaPage';
import ListaEsperaPage from './pages/ListaEsperaPage';
import MasterclassPage from './pages/MasterclassPage';
import ActivateMasterclassPage from './pages/ActivateMasterclassPage';
import ListaEsperaAvanzaPage from './pages/ListaEsperaAvanzaPage';
import ActivateListaEsperaPage from './pages/ActivateListaEsperaPage';
import GraciasMasterclassPage from './pages/GraciasMasterclassPage';
import GraciasListaEsperaPage from './pages/GraciasListaEsperaPage';
import GraciasAvanzaPage from './pages/GraciasAvanzaPage';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function AppContent() {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const location = useLocation();

  useEffect(() => {
    document.body.style.overflow = selectedVideo ? 'hidden' : '';
  }, [selectedVideo]);

  const noHeaderFooter = ['/masterclass', '/gracias-masterclass', '/gracias-lista-espera', '/gracias-avanza', '/activate-lista-espera'].includes(location.pathname);

  const currentPage = location.pathname === '/programa-4-semanas' ? 'programa'
    : location.pathname === '/confirmacion' ? 'confirmacion'
    : location.pathname === '/lista-espera' ? 'lista-espera'
    : 'home';

  return (
    <div style={{ width: '100%', minHeight: '100vh', background: 'var(--white)', color: 'var(--black)', overflowX: 'hidden' }}>
      <ScrollToTop />
      {!noHeaderFooter && <Header currentPage={currentPage} />}

      <main>
        <Routes>
          <Route path="/" element={<HomePage onVideoClick={setSelectedVideo} />} />
          <Route path="/programa-4-semanas" element={<ProgramaPage />} />
          <Route path="/confirmacion" element={<ConfirmacionPage />} />
          <Route path="/lista-espera" element={<ListaEsperaPage />} />
          <Route path="/masterclass" element={<MasterclassPage />} />
          <Route path="/activate-masterclass" element={<ActivateMasterclassPage />} />
          <Route path="/activate-lista-espera" element={<ActivateListaEsperaPage />} />
          <Route path="/lista-espera-avanza" element={<ListaEsperaAvanzaPage />} />
          <Route path="/gracias-masterclass" element={<GraciasMasterclassPage />} />
          <Route path="/gracias-lista-espera" element={<GraciasListaEsperaPage />} />
          <Route path="/gracias-avanza" element={<GraciasAvanzaPage />} />
        </Routes>
      </main>

      {!noHeaderFooter && <Footer />}

      {selectedVideo && (
        <VideoModal video={selectedVideo} onClose={() => setSelectedVideo(null)} />
      )}
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}
