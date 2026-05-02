import { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import VideoModal from './components/VideoModal';
import HomePage from './pages/HomePage';
import ProgramaPage from './pages/ProgramaPage';
import ConfirmacionPage from './pages/ConfirmacionPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    if (selectedVideo) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [selectedVideo]);

  return (
    <div style={{ width: '100%', minHeight: '100vh', background: 'var(--white)', color: 'var(--black)', overflowX: 'hidden' }}>
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />

      <main>
        {currentPage === 'home' && (
          <HomePage setCurrentPage={setCurrentPage} onVideoClick={setSelectedVideo} />
        )}
        {currentPage === 'programa' && (
          <ProgramaPage setCurrentPage={setCurrentPage} />
        )}
        {currentPage === 'confirmacion' && (
          <ConfirmacionPage setCurrentPage={setCurrentPage} />
        )}
      </main>

      <Footer />

      {selectedVideo && (
        <VideoModal video={selectedVideo} onClose={() => setSelectedVideo(null)} />
      )}
    </div>
  );
}
