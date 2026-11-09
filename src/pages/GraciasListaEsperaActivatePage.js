import { Helmet } from 'react-helmet-async';
import { Countdown } from './ListaEsperaActivatePage';

const WHATSAPP_URL = 'https://chat.whatsapp.com/F8TtukhhJS0BSlvAguplXS?mode=gi_t';

export default function GraciasListaEsperaActivatePage() {
  return (
    <div style={{ minHeight: '100vh', background: 'var(--black)', color: 'white', display: 'flex', flexDirection: 'column' }}>
      <Helmet>
        <title>¡Ya estás en la lista! | Esencial Susana Ares</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      {/* ── Barra superior con cuenta atrás ── */}
      <div style={{ borderBottom: '1px solid rgba(255,255,255,0.12)', padding: '0.7rem 1rem', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', gap: '0.5rem 1.75rem' }}>
        <p style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase' }}>Abrimos el 3 de diciembre · Hora España</p>
        <Countdown />
      </div>

      {/* ── Contenido ── */}
      <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '4rem 1.5rem' }}>
        <div style={{ maxWidth: 560, width: '100%', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.25rem' }}>
          <p style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: '1.6rem', color: 'var(--coral)' }}>¡Gracias por apuntarte!</p>
          <h1 style={{ fontFamily: 'var(--serif)', fontWeight: 600, fontSize: 'clamp(2.4rem, 7vw, 3.6rem)', lineHeight: 1.08, textWrap: 'balance' }}>
            Ya estás en la <em style={{ color: 'var(--coral)' }}>lista de espera</em> de Actívate.
          </h1>
          <p style={{ fontSize: '1.05rem', lineHeight: 1.7, color: 'rgba(255,255,255,0.8)' }}>
            Sabemos que muchas veces los correos se pierden. Para que no te pierdas nada de la apertura del <strong style={{ color: 'white' }}>3 de diciembre</strong>, también vamos a compartir toda la información en nuestro grupo de WhatsApp.
          </p>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-coral" style={{ textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 700, marginTop: '0.75rem' }}>
            Entrar al grupo de WhatsApp
          </a>
          <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.6)' }}>Ahí te avisamos de todo primero.</p>
        </div>
      </div>
    </div>
  );
}