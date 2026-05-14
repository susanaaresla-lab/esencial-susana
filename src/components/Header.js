import { useState, useEffect } from 'react';
import { X, Menu } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const currentPage = location.pathname;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const goHome = (e) => {
    e.preventDefault();
    navigate('/');
    setMenuOpen(false);
    window.scrollTo(0, 0);
  };

  const goPrograma = (e) => {
    e.preventDefault();
    navigate('/programa-4-semanas');
    setMenuOpen(false);
    window.scrollTo(0, 0);
  };

  const scrollTo = (e, id) => {
    e.preventDefault();
    setMenuOpen(false);
    if (currentPage !== '/') {
      navigate('/');
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }, 120);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`header${scrolled ? ' scrolled' : ''}`}>
      <div className="header-inner">
        <a href="/" onClick={goHome} className="logo">
          <span className="logo-main">ESENCIAL</span>
          <span className="logo-sub">Susana Ares</span>
        </a>

        <nav className="nav-desktop">
          <a href="/" onClick={goHome}>Inicio</a>
          <a href="/programa-4-semanas" onClick={goPrograma} style={{ color: currentPage === '/programa-4-semanas' ? 'var(--coral)' : '' }}>Programa 4 semanas</a>
          <a href="#ejercicios" onClick={(e) => scrollTo(e, 'ejercicios')}>Ejercicios gratis</a>
          <a href="#testimonios" onClick={(e) => scrollTo(e, 'testimonios')}>Testimonios</a>
          <a href="#programa-integral" onClick={(e) => scrollTo(e, 'programa-integral')}>Programa Integral</a>
          <a href="#quien-soy" onClick={(e) => scrollTo(e, 'quien-soy')}>Quién soy</a>
        </nav>

        <button className="nav-mobile-btn" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={18} /> : <Menu size={18} />}
          <span>{menuOpen ? 'Cerrar' : 'Menú'}</span>
        </button>
      </div>

      {menuOpen && (
        <div className="nav-mobile-menu">
          <a href="/" onClick={goHome}>Inicio</a>
          <a href="/programa-4-semanas" onClick={goPrograma} style={{ color: currentPage === '/programa-4-semanas' ? 'var(--coral)' : '' }}>Programa 4 semanas</a>
          <a href="#ejercicios" onClick={(e) => scrollTo(e, 'ejercicios')}>Ejercicios gratis</a>
          <a href="#testimonios" onClick={(e) => scrollTo(e, 'testimonios')}>Testimonios</a>
          <a href="#programa-integral" onClick={(e) => scrollTo(e, 'programa-integral')}>Programa Integral</a>
          <a href="#quien-soy" onClick={(e) => scrollTo(e, 'quien-soy')}>Quién soy</a>
        </div>
      )}
    </header>
  );
}