import { ArrowLeft, Check, Mail, CheckCircle, PartyPopper } from 'lucide-react';

export default function ConfirmacionPage({ setCurrentPage }) {
  return (
    <div style={{ paddingTop: 80, minHeight: '100vh', background: 'linear-gradient(to bottom, var(--peach) 0%, var(--white) 30%)' }}>

      {/* ── SUCCESS HERO ── */}
      <section className="section text-center">
        <div className="container-narrow">
          <div className="confirm-icon">
            <CheckCircle size={52} style={{ color: '#22c55e' }} />
          </div>
          <h1 className="t-serif mb-2" style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', marginBottom: '0.75rem' }}>¡Felicidades!</h1>
          <p style={{ fontSize: '1.1rem', color: 'rgba(26,26,26,0.8)', marginBottom: '0.4rem' }}>Tu compra se ha realizado con éxito</p>
          <p style={{ fontWeight: 600, color: 'var(--coral)' }}>Programa "Recupera tu cuerpo desde cero"</p>
        </div>
      </section>

      {/* ── NEXT STEPS ── */}
      <section className="section" style={{ background: 'var(--white)', paddingTop: '2rem' }}>
        <div className="container-narrow">
          <h2 className="t-serif text-center mb-4" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', marginBottom: '2.5rem' }}>¿Qué pasa ahora?</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {[
              { n: 1, title: 'Revisa tu email', desc: 'En los próximos minutos recibirás un email de confirmación con todos los detalles de tu compra y las instrucciones para acceder al programa.' },
              { n: 2, title: 'Accede al contenido', desc: 'En el email encontrarás el enlace para acceder a tu área privada donde estarán todos los videos del programa organizados por semanas.' },
              { n: 3, title: 'Empieza tu recuperación', desc: 'Comienza con los ejercicios de la Semana 1 y sigue el calendario. Recuerda: lo importante es empezar, no hacerlo perfecto.' }
            ].map(({ n, title, desc }) => (
              <div key={n} style={{ display: 'flex', gap: '1rem', background: 'rgba(242,237,230,0.5)', borderRadius: 2, padding: '1.5rem' }}>
                <div style={{ width: 44, height: 44, borderRadius: '50%', background: 'var(--coral)', color: 'white', fontWeight: 700, fontSize: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{n}</div>
                <div>
                  <h3 style={{ fontWeight: 600, fontSize: '1rem', marginBottom: '0.4rem' }}>{title}</h3>
                  <p style={{ fontSize: '0.875rem', color: 'rgba(26,26,26,0.7)', lineHeight: 1.65 }}>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT YOU GOT ── */}
      <section className="section" style={{ background: 'var(--beige)', paddingTop: '2rem' }}>
        <div className="container-narrow">
          <h2 className="t-serif text-center mb-4" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', marginBottom: '2rem' }}>Lo que has conseguido</h2>
          <div className="card">
            <ul className="check-list">
              {[
                '4 semanas de programa con videos nuevos cada semana',
                'Rutinas cortas y sencillas para hacer desde casa',
                'Ejercicios de tonificación del abdomen',
                'Ejercicios de suelo pélvico',
                'Ejercicios para todo el cuerpo adaptados a madres',
                'Videos on-demand: accede cuando quieras',
                'BONUS: Recupera tu abdomen en tu día a día',
                'Acceso de por vida al contenido'
              ].map((t, i) => (
                <li key={i}><Check size={16} style={{ color: '#22c55e' }} />{t}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── SUPPORT ── */}
      <section className="section" style={{ background: 'var(--white)', paddingTop: '2rem' }}>
        <div className="container-narrow text-center">
          <div style={{ background: 'rgba(247,232,224,0.5)', borderRadius: 2, padding: '2.5rem' }}>
            <Mail size={36} style={{ color: 'var(--coral)', margin: '0 auto 1rem', display: 'block' }} />
            <h3 style={{ fontWeight: 600, fontSize: '1.1rem', marginBottom: '0.75rem' }}>¿Tienes alguna duda?</h3>
            <p style={{ fontSize: '0.9rem', color: 'rgba(26,26,26,0.7)', marginBottom: '1.25rem', lineHeight: 1.65 }}>
              Si tienes cualquier problema para acceder al contenido o necesitas ayuda, escríbeme y te responderé lo antes posible.
            </p>
            <a href="mailto:info@esencialsusanaares.com" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: 'var(--coral)', fontWeight: 600, textDecoration: 'none', fontSize: '0.925rem' }}>
              <Mail size={15} /> info@esencialsusanaares.com
            </a>
          </div>
          <div style={{ marginTop: '2rem' }}>
            <button className="btn-back" onClick={() => { setCurrentPage('home'); window.scrollTo(0,0); }}>
              <ArrowLeft size={15} /> Volver al inicio
            </button>
          </div>
        </div>
      </section>

      {/* ── MOTIVATIONAL FOOTER ── */}
      <div style={{ background: 'var(--coral)', padding: '3rem 0', textAlign: 'center' }}>
        <div className="container-narrow">
          <PartyPopper size={32} style={{ color: 'white', margin: '0 auto 1rem', display: 'block' }} />
          <p className="t-serif-italic" style={{ fontSize: '1.35rem', color: 'white', lineHeight: 1.55 }}>
            "El primer paso ya lo has dado. Ahora empieza tu transformación."
          </p>
          <p style={{ fontWeight: 600, color: 'rgba(255,255,255,0.8)', marginTop: '0.75rem', fontSize: '0.875rem' }}>— Susana Ares</p>
        </div>
      </div>
    </div>
  );
}
