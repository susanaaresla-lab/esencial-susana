import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Check, Bell, Mail } from 'lucide-react';

export default function GraciasListaEsperaPage() {
  const navigate = useNavigate();

  return (
    <div style={{ minHeight: '100vh', background: 'var(--white)', fontFamily: 'var(--sans)', display: 'flex', flexDirection: 'column' }}>

      <Helmet>
        <title>¡Ya estás en la lista! | Esencial Susana Ares</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      {/* ── HEADER mínimo ── */}
      <div style={{ textAlign: 'center', padding: '2rem 1.5rem 0' }}>
        <div style={{ fontFamily: 'var(--serif)', fontSize: '1.4rem', letterSpacing: '0.2em', color: 'var(--black)', lineHeight: 1 }}>ESENCIAL</div>
        <div style={{ fontFamily: 'var(--sans)', fontWeight: 600, fontSize: '0.65rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--coral)', marginTop: 2 }}>Susana Ares</div>
      </div>

      {/* ── CONTENIDO ── */}
      <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '3rem 1.5rem' }}>
        <div style={{ maxWidth: 520, width: '100%', textAlign: 'center' }}>

          {/* Icono */}
          <div style={{ width: 72, height: 72, borderRadius: '50%', background: 'rgba(232,115,90,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 2rem' }}>
            <Check size={32} style={{ color: 'var(--coral)' }} />
          </div>

          <div className="t-label" style={{ color: 'var(--coral)', marginBottom: '0.75rem' }}>Método Esencial Madre · Actívate</div>
          <h1 className="t-serif" style={{ fontSize: 'clamp(1.75rem, 5vw, 2.75rem)', color: 'var(--black)', fontWeight: 400, lineHeight: 1.2, marginBottom: '1.25rem' }}>
            ¡Ya estás en la lista!
          </h1>
          <p style={{ fontSize: '1.05rem', color: 'rgba(26,26,26,0.75)', lineHeight: 1.75, marginBottom: '2.5rem' }}>
            Serás la primera en saber cuándo abre la próxima edición — con acceso prioritario y precio especial. Y mientras tanto, te iré contando más sobre el programa.
          </p>

          {/* Dos bloques */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2.5rem' }}>
            <div style={{ background: 'var(--peach)', borderRadius: 8, padding: '1.25rem 1.5rem', display: 'flex', alignItems: 'flex-start', gap: '1rem', textAlign: 'left' }}>
              <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'var(--coral)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Bell size={18} color="white" />
              </div>
              <div>
                <p style={{ fontWeight: 600, fontSize: '0.95rem', color: 'var(--black)', marginBottom: '0.25rem' }}>Acceso prioritario garantizado</p>
                <p style={{ fontSize: '0.875rem', color: 'rgba(26,26,26,0.7)', lineHeight: 1.6 }}>
                  Cuando abra la próxima edición, serás la primera en saberlo — con precio especial exclusivo para la lista de espera.
                </p>
              </div>
            </div>
            <div style={{ background: 'var(--beige)', borderRadius: 8, padding: '1.25rem 1.5rem', display: 'flex', alignItems: 'flex-start', gap: '1rem', textAlign: 'left' }}>
              <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'var(--coral)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Mail size={18} color="white" />
              </div>
              <div>
                <p style={{ fontWeight: 600, fontSize: '0.95rem', color: 'var(--black)', marginBottom: '0.25rem' }}>Revisa tu email</p>
                <p style={{ fontSize: '0.875rem', color: 'rgba(26,26,26,0.7)', lineHeight: 1.6 }}>
                  Te he enviado una confirmación. Si no lo ves, revisa la carpeta de spam o escríbeme a <a href="mailto:info@esencialsusanaares.com" style={{ color: 'var(--coral)', fontWeight: 600 }}>info@esencialsusanaares.com</a>
                </p>
              </div>
            </div>
          </div>

          <p className="t-serif-italic" style={{ fontSize: '1.2rem', color: 'rgba(26,26,26,0.7)', lineHeight: 1.65, marginBottom: '2.5rem' }}>
            "Tu momento está cerca. Estoy aquí para acompañarte."
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
