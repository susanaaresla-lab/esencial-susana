import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Check, Mail, Play } from 'lucide-react';

export default function GraciasAvanzaCompraPage() {
  const navigate = useNavigate();

  return (
    <div style={{ minHeight: '100vh', background: 'var(--white)', fontFamily: 'var(--sans)', display: 'flex', flexDirection: 'column' }}>

      <Helmet>
        <title>¡Bienvenida a Avanza! | Esencial Susana Ares</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      {/* ── HEADER mínimo ── */}
      <div style={{ textAlign: 'center', padding: '2rem 1.5rem 0' }}>
        <div style={{ fontFamily: 'var(--serif)', fontSize: '1.4rem', letterSpacing: '0.2em', color: 'var(--black)', lineHeight: 1 }}>ESENCIAL</div>
        <div style={{ fontFamily: 'var(--sans)', fontWeight: 600, fontSize: '0.65rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--coral)', marginTop: 2 }}>Susana Ares</div>
      </div>

      {/* ── CONTENIDO ── */}
      <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '3rem 1.5rem' }}>
        <div style={{ maxWidth: 560, width: '100%', textAlign: 'center' }}>

          {/* Icono */}
          <div style={{ width: 80, height: 80, borderRadius: '50%', background: 'rgba(232,115,90,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 2rem' }}>
            <Check size={36} style={{ color: 'var(--coral)' }} />
          </div>

          <div className="t-label" style={{ color: 'var(--coral)', marginBottom: '0.75rem' }}>Método Esencial Madre · Avanza</div>
          <h1 className="t-serif" style={{ fontSize: 'clamp(1.75rem, 5vw, 2.75rem)', color: 'var(--black)', fontWeight: 400, lineHeight: 1.2, marginBottom: '1.25rem' }}>
            ¡Bienvenida a Avanza!
          </h1>
          <p style={{ fontSize: '1.05rem', color: 'rgba(26,26,26,0.75)', lineHeight: 1.75, marginBottom: '2.5rem' }}>
            Has dado el paso más importante. Las próximas 12 semanas van a transformarte — tu cuerpo y tu mente juntos. Este es el programa que de verdad te va a convertir en tu mejor versión siendo madre.
          </p>

          {/* Bloques */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2.5rem' }}>

            <div style={{ background: 'var(--peach)', borderRadius: 8, padding: '1.5rem', display: 'flex', alignItems: 'flex-start', gap: '1rem', textAlign: 'left' }}>
              <div style={{ width: 42, height: 42, borderRadius: '50%', background: 'var(--coral)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Mail size={18} color="white" />
              </div>
              <div>
                <p style={{ fontWeight: 700, fontSize: '1rem', color: 'var(--black)', marginBottom: '0.35rem' }}>Revisa tu email</p>
                <p style={{ fontSize: '0.875rem', color: 'rgba(26,26,26,0.7)', lineHeight: 1.65 }}>
                  Recibirás un email de confirmación de Hotmart con el acceso al programa. Si no lo ves, revisa la carpeta de spam o escríbeme a{' '}
                  <a href="mailto:info@esencialsusanaares.com" style={{ color: 'var(--coral)', fontWeight: 600 }}>info@esencialsusanaares.com</a>
                </p>
              </div>
            </div>

            <div style={{ background: 'var(--beige)', borderRadius: 8, padding: '1.5rem', display: 'flex', alignItems: 'flex-start', gap: '1rem', textAlign: 'left' }}>
              <div style={{ width: 42, height: 42, borderRadius: '50%', background: 'var(--coral)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Play size={18} color="white" />
              </div>
              <div>
                <p style={{ fontWeight: 700, fontSize: '1rem', color: 'var(--black)', marginBottom: '0.35rem' }}>Accede ya al vídeo de bienvenida</p>
                <p style={{ fontSize: '0.875rem', color: 'rgba(26,26,26,0.7)', lineHeight: 1.65 }}>
                  El programa comienza el <strong style={{ color: 'var(--black)' }}>5 de octubre</strong>, pero ya puedes acceder a tu área y ver el vídeo de bienvenida. Úsalo para prepararte y llegar al inicio con todo listo.
                </p>
              </div>
            </div>

          </div>

          <p className="t-serif-italic" style={{ fontSize: '1.2rem', color: 'rgba(26,26,26,0.7)', lineHeight: 1.65, marginBottom: '2.5rem' }}>
            "Nos vemos el 5 de octubre. Esto va a ser transformador."
            <span style={{ display: 'block', fontStyle: 'normal', fontWeight: 700, fontSize: '0.95rem', marginTop: '0.5rem', color: 'var(--coral)' }}>— Susana</span>
          </p>

          <button
            className="btn-coral"
            style={{ fontSize: '1rem', padding: '0.9rem 2rem' }}
            onClick={() => { navigate('/'); window.scrollTo(0, 0); }}
          >
            Volver al inicio
          </button>
        </div>
      </div>
    </div>
  );
}
