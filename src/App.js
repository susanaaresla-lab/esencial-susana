import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import VideoModal from './components/VideoModal';
import ConfirmacionPage from './pages/ConfirmacionPage';
import HomePage from './pages/HomePage';
import ProgramaPage from './pages/ProgramaPage';
import ListaEsperaPage from './pages/ListaEsperaPage';

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

  const currentPage = location.pathname === '/programa-4-semanas' ? 'programa'
    : location.pathname === '/confirmacion' ? 'confirmacion'
    : location.pathname === '/lista-espera' ? 'lista-espera'
    : 'home';

  return (
    <div style={{ width: '100%', minHeight: '100vh', background: 'var(--white)', color: 'var(--black)', overflowX: 'hidden' }}>
      <ScrollToTop />
      <Header currentPage={currentPage} />

      <main>
        <Routes>
          <Route path="/" element={<HomePage onVideoClick={setSelectedVideo} />} />
          <Route path="/programa-4-semanas" element={<ProgramaPage />} />
          <Route path="/confirmacion" element={<ConfirmacionPage />} />
          <Route path="/lista-espera" element={<ListaEsperaPage />} />
        </Routes>
      </main>

      <Footer />

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