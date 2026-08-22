import { useEffect } from 'react';
import { Clock, Check } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

// ── EDITA ESTE DATO EN CADA LANZAMIENTO ──────────────────
const MASTERCLASS_TITULO = 'Cesárea: lo que tu cuerpo necesita para recuperarse y cómo empezar desde casa';
const MASTERCLASS_URL    = 'https://esencialsusanaares.com/masterclass';
// ───────────────────────────────────────────────────────────

export default function MasterclassPage() {

    useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://eocampaign1.com/form/d20aeb38-5bfb-11f1-8f8b-d988b9c04363.js";
    script.setAttribute("data-form", "d20aeb38-5bfb-11f1-8f8b-d988b9c04363");
    script.async = true;
    document.getElementById("eo-form-masterclass")?.appendChild(script);
    return () => {
      const container = document.getElementById("eo-form-masterclass");
      if (container) container.innerHTML = "";
    };
  }, []);

  return (
    <div style={{ minHeight: '100vh', background: 'var(--white)', fontFamily: 'var(--sans)' }}>

      <Helmet>
        <title>{MASTERCLASS_TITULO} | Esencial Susana Ares</title>
        <meta name="description" content="Masterclass gratuita. Aprende cómo empezar a recuperarte de la cesárea desde casa con Susana Ares." />
        <meta property="og:title" content={MASTERCLASS_TITULO} />
        <meta property="og:description" content="Masterclass gratuita. Aprende cómo empezar a recuperarte de la cesárea desde casa." />
        <meta property="og:image" content="https://esencialsusanaares.com/images/susana-og.jpg" />
        <meta property="og:url" content={MASTERCLASS_URL} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://esencialsusanaares.com/images/susana-og.jpg" />
      </Helmet>

      {/* ── HEADER mínimo sin navegación ── */}
      <div style={{ textAlign: 'center', padding: '2rem 1.5rem 0' }}>
        <div style={{ fontFamily: 'var(--serif)', fontSize: '1.4rem', letterSpacing: '0.2em', color: 'var(--black)', lineHeight: 1 }}>ESENCIAL</div>
        <div style={{ fontFamily: 'var(--sans)', fontWeight: 600, fontSize: '0.65rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--coral)', marginTop: 2 }}>Susana Ares</div>
      </div>

      {/* ── HERO ── */}
      <section style={{ background: 'linear-gradient(to bottom, var(--peach) 0%, var(--white) 100%)', padding: '3rem 1.5rem 3.5rem' }}>
        <div style={{ maxWidth: 660, margin: '0 auto', textAlign: 'center' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'var(--coral)', color: 'white', fontWeight: 700, fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', padding: '0.45rem 1.1rem', borderRadius: 999, marginBottom: '1.5rem' }}>
            <span>✦</span> Masterclass gratuita
          </div>
          <h1 className="t-serif" style={{ fontSize: 'clamp(1.75rem, 5vw, 3rem)', lineHeight: 1.15, color: 'var(--black)', fontWeight: 400, marginBottom: '1.25rem' }}>
            {MASTERCLASS_TITULO}
          </h1>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.6rem', marginBottom: '2.5rem' }}>
            <span className="pill"><Clock size={14} />Online · Grabada</span>
            <span className="pill">Gratuita</span>
            <span className="pill">Adaptada a cesárea</span>
          </div>
          <button
            className="btn-coral"
            style={{ fontSize: '1.1rem', padding: '1.1rem 2.5rem' }}
            onClick={() => document.getElementById('registro')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Quiero acceder gratis
          </button>
        </div>
      </section>

      {/* ── FORMULARIO DE REGISTRO ── */}
      <section id="registro" style={{ background: 'var(--peach)', padding: '4rem 1.5rem' }}>
        <div style={{ maxWidth: 480, margin: '0 auto', textAlign: 'center' }}>
          <p style={{ fontSize: '0.85rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--coral)', marginBottom: '0.5rem' }}>Masterclass gratuita</p>
          <h2 className="t-serif" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', color: 'var(--black)', fontWeight: 400, marginBottom: '0.5rem' }}>
            Accede gratis ahora
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'rgba(26,26,26,0.6)', marginBottom: '2rem', lineHeight: 1.6 }}>
            Déjame tu email y te envío el acceso inmediatamente.
          </p>
          <div style={{ background: 'var(--white)', borderRadius: 8, padding: '2rem', boxShadow: '0 4px 32px rgba(0,0,0,0.08)' }}>
            <div id="eo-form-masterclass" />
            <p style={{ fontSize: '0.8rem', color: 'rgba(26,26,26,0.4)', marginTop: '1rem' }}>
              Sin spam. Solo te enviaremos el enlace de acceso a la masterclass.
            </p>
          </div>
        </div>
      </section>

      {/* ── VÍDEO ── */}
      <section style={{ background: 'var(--white)', padding: '3rem 1.5rem' }}>
        <div style={{ maxWidth: 660, margin: '0 auto' }}>
          <p style={{ textAlign: 'center', fontSize: '0.9rem', color: 'rgba(26,26,26,0.5)', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600 }}>Susana te lo explica</p>
          <div style={{ position: 'relative', width: '100%', paddingBottom: '56.25%', borderRadius: 8, overflow: 'hidden', boxShadow: '0 4px 24px rgba(0,0,0,0.12)' }}>
            <iframe
              src="https://www.youtube.com/embed/iaCe76RE2e4"
              title="Susana Ares - Masterclass cesárea"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
            />
          </div>
          <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
            <button
              className="btn-coral"
              style={{ fontSize: '1.05rem', padding: '1rem 2.5rem' }}
              onClick={() => document.getElementById('registro')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Apúntate aquí — es gratuita
            </button>
          </div>
        </div>
      </section>

      {/* ── QUÉ VAS A APRENDER ── */}
      <section style={{ background: 'var(--beige)', padding: '3.5rem 1.5rem' }}>
        <div style={{ maxWidth: 620, margin: '0 auto' }}>
          <p style={{ textAlign: 'center', fontSize: '0.85rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(26,26,26,0.45)', marginBottom: '0.6rem' }}>En esta masterclass</p>
          <h2 className="t-serif" style={{ fontSize: 'clamp(1.5rem, 4vw, 2.25rem)', textAlign: 'center', color: 'var(--black)', fontWeight: 400, marginBottom: '2.5rem' }}>
            Esto es lo que vas a aprender
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {[
              { n: '01', text: 'Qué le ha pasado exactamente a tu cuerpo después de la cesárea y por qué necesita una recuperación diferente' },
              { n: '02', text: 'Los primeros pasos seguros que puedes dar desde casa para empezar a recuperarte sin miedo' },
              { n: '03', text: 'Qué ejercicios puedes hacer y cuáles debes evitar según el momento en el que estés' },
              { n: '04', text: 'Cómo crear una rutina real que puedas mantener siendo madre' }
            ].map((item) => (
              <div key={item.n} style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start', background: 'var(--white)', borderRadius: 6, padding: '1.25rem 1.5rem', boxShadow: '0 1px 6px rgba(0,0,0,0.05)' }}>
                <span style={{ fontFamily: 'var(--serif)', fontSize: '1.75rem', color: 'var(--coral)', fontWeight: 600, lineHeight: 1, flexShrink: 0, minWidth: 36 }}>{item.n}</span>
                <p style={{ fontSize: '0.975rem', color: 'rgba(26,26,26,0.85)', lineHeight: 1.65, margin: 0 }}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PARA QUIÉN ES ── */}
      <section style={{ background: 'var(--white)', padding: '3.5rem 1.5rem' }}>
        <div style={{ maxWidth: 580, margin: '0 auto' }}>
          <h2 className="t-serif" style={{ fontSize: 'clamp(1.5rem, 4vw, 2rem)', textAlign: 'center', color: 'var(--black)', fontWeight: 400, marginBottom: '2.5rem' }}>
            Esta masterclass es para ti si…
          </h2>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
            {[
              'Has tenido una cesárea y no sabes por dónde empezar a recuperarte',
              'Te han dado el alta pero nadie te ha explicado qué puede hacer tu cuerpo ahora',
              'Tienes miedo de hacer ejercicios que te puedan dañar',
              'Llevas semanas o meses queriendo empezar pero no sabes cómo hacerlo de forma segura',
              'Quieres volver a sentirte fuerte y reconocerte siendo madre'
            ].map((t, i) => (
              <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', fontSize: '1rem', color: 'rgba(26,26,26,0.85)', lineHeight: 1.6 }}>
                <Check size={18} style={{ color: 'var(--coral)', flexShrink: 0, marginTop: 2 }} />
                {t}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── SOBRE SUSANA ── */}
      <section style={{ background: 'var(--beige)', padding: '3.5rem 1.5rem' }}>
        <div style={{ maxWidth: 580, margin: '0 auto' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem', textAlign: 'center' }}>
            <img
              src="/images/susana-cercana.JPG"
              alt="Susana Ares"
              style={{ width: 140, height: 140, borderRadius: '50%', objectFit: 'cover', objectPosition: 'top', boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}
            />
            <div>
              <p style={{ fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(26,26,26,0.45)', marginBottom: '0.4rem' }}>Tu instructora</p>
              <h3 className="t-serif" style={{ fontSize: 'clamp(1.4rem, 3vw, 1.75rem)', color: 'var(--black)', fontWeight: 400, marginBottom: '1rem' }}>Susana Ares</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.95rem', color: 'rgba(26,26,26,0.8)', lineHeight: 1.7, maxWidth: 460, margin: '0 auto' }}>
                <p>Mamá de tres hijos y especialista en recuperación postcesárea y postparto. Instructora de pilates terapéutico.</p>
                <p>Ha acompañado a más de <strong style={{ color: 'var(--coral)' }}>3.000 mamás</strong> a recuperar su cuerpo y su confianza después del parto y la cesárea.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ── */}
      <section style={{ background: 'var(--coral)', padding: '3.5rem 1.5rem', textAlign: 'center' }}>
        <div style={{ maxWidth: 520, margin: '0 auto' }}>
          <h2 className="t-serif" style={{ fontSize: 'clamp(1.5rem, 4vw, 2rem)', color: 'white', fontWeight: 400, marginBottom: '0.75rem' }}>
            ¿Lista para empezar?
          </h2>
          <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.85)', marginBottom: '2rem', lineHeight: 1.65 }}>
            Es gratuita. Accede ahora mismo.
          </p>
          <button
            style={{ background: 'white', color: 'var(--coral)', fontFamily: 'var(--sans)', fontWeight: 700, fontSize: '1.05rem', padding: '1.1rem 2.5rem', borderRadius: 4, border: 'none', cursor: 'pointer' }}
            onClick={() => document.getElementById('registro')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Quiero acceder gratis
          </button>
        </div>
      </section>

    </div>
  );
}
