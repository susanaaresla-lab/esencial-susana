import { useEffect } from 'react';
import { Calendar, Clock, Check, Users } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

// ── EDITA ESTOS DATOS EN CADA LANZAMIENTO ──────────────────
const MASTERCLASS_TITULO = 'Los errores invisibles que están frenando tu recuperación postcesárea';
const MASTERCLASS_SUBTITULO = 'Te explico qué está pasando y cómo empezar de la forma correcta';
const MASTERCLASS_FECHA  = 'Lunes 31 de agosto a las 21:00h (hora España)';
const MASTERCLASS_URL    = 'https://esencialsusanaares.com/masterclass-septiembre';
// ───────────────────────────────────────────────────────────

export default function MasterclassSeptiembrePage() {

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://eocampaign1.com/form/dd3fa57e-8d0c-11f1-a151-b3814c2745b8.js';
    script.setAttribute('data-form', 'dd3fa57e-8d0c-11f1-a151-b3814c2745b8');
    script.async = true;
    document.getElementById('eo-form-masterclass-sep')?.appendChild(script);
    return () => {
      const container = document.getElementById('eo-form-masterclass-sep');
      if (container) container.innerHTML = '';
    };
  }, []);

  return (
    <div style={{ minHeight: '100vh', background: 'var(--white)', fontFamily: 'var(--sans)' }}>

      <Helmet>
        <title>{MASTERCLASS_TITULO} | Esencial Susana Ares</title>
        <meta name="description" content={`Masterclass gratuita en directo — ${MASTERCLASS_FECHA}. Descubre los errores que frenan tu recuperación postcesárea y cómo construir la base correcta.`} />
        <meta property="og:title" content={MASTERCLASS_TITULO} />
        <meta property="og:description" content={`Masterclass gratuita — ${MASTERCLASS_FECHA}`} />
        <meta property="og:image" content="https://esencialsusanaares.com/images/susana-og-new.jpg" />
        <meta property="og:url" content={MASTERCLASS_URL} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://esencialsusanaares.com/images/susana-og-new.jpg" />
      </Helmet>

      {/* ── HEADER mínimo ── */}
      <div style={{ textAlign: 'center', padding: '2rem 1.5rem 0' }}>
        <div style={{ fontFamily: 'var(--serif)', fontSize: '1.4rem', letterSpacing: '0.2em', color: 'var(--black)', lineHeight: 1 }}>ESENCIAL</div>
        <div style={{ fontFamily: 'var(--sans)', fontWeight: 600, fontSize: '0.65rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--coral)', marginTop: 2 }}>Susana Ares</div>
      </div>

      {/* ── HERO ── */}
      <section style={{ background: 'linear-gradient(to bottom, var(--peach) 0%, var(--white) 100%)', padding: '3rem 1.5rem 3.5rem' }}>
        <div style={{ maxWidth: 720, margin: '0 auto', textAlign: 'center' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'var(--coral)', color: 'white', fontWeight: 700, fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', padding: '0.45rem 1.1rem', borderRadius: 999, marginBottom: '1.5rem' }}>
            ✦ Masterclass gratuita en directo
          </div>
          <h1 className="t-serif" style={{ fontSize: 'clamp(1.75rem, 4.5vw, 2.75rem)', lineHeight: 1.15, color: 'var(--black)', fontWeight: 400, marginBottom: '1rem' }}>
            {MASTERCLASS_TITULO}
          </h1>
          <p style={{ fontSize: '1.15rem', color: 'rgba(26,26,26,0.65)', lineHeight: 1.6, marginBottom: '1.5rem', fontStyle: 'italic' }}>
            {MASTERCLASS_SUBTITULO}
          </p>
          <p style={{ fontSize: '1.1rem', color: 'var(--coral)', fontWeight: 600, marginBottom: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
            <Calendar size={17} /> {MASTERCLASS_FECHA}
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.6rem', marginBottom: '2.5rem' }}>
            <span className="pill"><Clock size={14} />En directo · Online</span>
            <span className="pill">Gratuita</span>
            <span className="pill"><Users size={14} />Para madres postcesárea</span>
          </div>
          <button
            className="btn-coral"
            style={{ fontSize: '1.1rem', padding: '1.1rem 2.5rem' }}
            onClick={() => document.getElementById('registro')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Quiero mi plaza gratuita
          </button>
        </div>
      </section>

      {/* ── FOTO + PREGUNTA POTENTE ── */}
      <section style={{ background: 'var(--white)', padding: '3rem 1.5rem' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3rem', alignItems: 'center' }}>
            <div>
              <img
                src="/images/susana-ejercicio.JPG"
                alt="Susana Ares"
                style={{ width: '100%', maxHeight: 480, objectFit: 'cover', objectPosition: 'top', borderRadius: 8, boxShadow: '0 8px 32px rgba(0,0,0,0.12)' }}
              />
            </div>
            <div>
              <div className="t-label text-muted" style={{ marginBottom: '0.75rem' }}>La pregunta que lo cambia todo</div>
              <h2 className="t-serif" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', color: 'var(--black)', lineHeight: 1.2, marginBottom: '1.25rem', fontWeight: 400 }}>
                ¿Por qué algunas madres se recuperan y otras no?
              </h2>
              <p style={{ fontSize: '1rem', color: 'rgba(26,26,26,0.8)', lineHeight: 1.8, marginBottom: '1.25rem' }}>
                Después de acompañar a más de <strong>3.000 mamás</strong> en su recuperación postcesárea, descubrí algo que nadie habla: <strong style={{ color: 'var(--coral)' }}>no estás estancada porque tu cuerpo no pueda. Estás estancada porque nadie te enseñó a construir la base.</strong>
              </p>
              <p style={{ fontSize: '1rem', color: 'rgba(26,26,26,0.8)', lineHeight: 1.8 }}>
                En esta masterclass te voy a revelar los errores invisibles que están frenando tu recuperación — y el método exacto para empezar de la forma correcta.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── TE IDENTIFICAS? ── */}
      <section style={{ background: 'var(--beige)', padding: '3.5rem 1.5rem' }}>
        <div style={{ maxWidth: 680, margin: '0 auto' }}>
          <div className="text-center" style={{ marginBottom: '2.5rem' }}>
            <div className="t-label text-muted" style={{ marginBottom: '0.5rem' }}>Antes de seguir</div>
            <h2 className="t-serif" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', color: 'var(--black)', fontWeight: 400 }}>
              ¿Con cuál de estas frases te identificas?
            </h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
            {[
              { emoji: '😰', text: '"Me da miedo hacer ejercicio. ¿Y si me hago daño? ¿Y si empeoro la diástasis?"' },
              { emoji: '😔', text: '"Lo intento, pero sigo igual. He probado vídeos, rutinas… y nada."' },
              { emoji: '💔', text: '"Creo que ya es tarde. Han pasado meses o años y he perdido la esperanza."' },
              { emoji: '🪞', text: '"No me reconozco. No me siento yo. He dejado de priorizarme."' }
            ].map((item, i) => (
              <div key={i} style={{ background: 'var(--white)', borderRadius: 8, padding: '1.25rem 1.5rem', display: 'flex', gap: '1rem', alignItems: 'flex-start', boxShadow: '0 1px 6px rgba(0,0,0,0.06)' }}>
                <span style={{ fontSize: '1.5rem', flexShrink: 0 }}>{item.emoji}</span>
                <p style={{ fontSize: '0.975rem', color: 'rgba(26,26,26,0.85)', lineHeight: 1.65, fontStyle: 'italic', margin: 0 }}>{item.text}</p>
              </div>
            ))}
          </div>
          <div style={{ background: 'var(--coral)', borderRadius: 8, padding: '1.25rem 1.5rem', textAlign: 'center' }}>
            <p style={{ fontSize: '0.95rem', color: 'white', lineHeight: 1.65, margin: 0, fontWeight: 500 }}>
              ✦ Al final de la masterclass entenderás por qué todas estas frases tienen algo en común — y qué hacer al respecto.
            </p>
          </div>
        </div>
      </section>

      {/* ── FORMULARIO ── */}
      <section id="registro" style={{ background: 'var(--peach)', padding: '4rem 1.5rem' }}>
        <div style={{ maxWidth: 500, margin: '0 auto', textAlign: 'center' }}>
          <p style={{ fontSize: '0.85rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--coral)', marginBottom: '0.5rem' }}>Masterclass gratuita en directo</p>
          <h2 className="t-serif" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', color: 'var(--black)', fontWeight: 400, marginBottom: '0.5rem' }}>
            Reserva tu plaza
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'rgba(26,26,26,0.6)', marginBottom: '2rem', lineHeight: 1.6 }}>
            {MASTERCLASS_FECHA}
          </p>
          <div style={{ background: 'var(--white)', borderRadius: 8, padding: '2rem', boxShadow: '0 4px 32px rgba(0,0,0,0.08)' }}>
            <div id="eo-form-masterclass-sep" />
            <p style={{ fontSize: '0.8rem', color: 'rgba(26,26,26,0.4)', marginTop: '1rem' }}>
              Sin spam. Solo te enviaremos el enlace de acceso a la masterclass.
            </p>
          </div>
        </div>
      </section>

      {/* ── QUÉ VAS A APRENDER ── */}
      <section style={{ background: 'var(--white)', padding: '3.5rem 1.5rem' }}>
        <div style={{ maxWidth: 680, margin: '0 auto' }}>
          <div className="text-center" style={{ marginBottom: '2.5rem' }}>
            <div className="t-label text-muted" style={{ marginBottom: '0.5rem' }}>Lo que vas a descubrir</div>
            <h2 className="t-serif" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', color: 'var(--black)', fontWeight: 400 }}>
              Esto es lo que vas a aprender
            </h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {[
              { n: '01', text: 'Qué significa realmente recuperarse — y por qué la mayoría de madres lo están haciendo al revés' },
              { n: '02', text: 'La metáfora que lo cambia todo: por qué intentar fortalecer el abdomen sin construir la base es como levantar el tejado sin cimientos' },
              { n: '03', text: 'Los 5 errores invisibles que frenan la recuperación — y que nadie te ha explicado hasta ahora' },
              { n: '04', text: 'Las cinco bases que tu cuerpo necesita construir antes de cualquier ejercicio' },
              { n: '05', text: 'El paso que te falta — y que convierte la recuperación en algo posible, ahora, independientemente de cuánto tiempo lleves' }
            ].map((item) => (
              <div key={item.n} style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start', background: 'var(--beige)', borderRadius: 6, padding: '1.25rem 1.5rem' }}>
                <span style={{ fontFamily: 'var(--serif)', fontSize: '1.75rem', color: 'var(--coral)', fontWeight: 600, lineHeight: 1, flexShrink: 0, minWidth: 36 }}>{item.n}</span>
                <p style={{ fontSize: '0.975rem', color: 'rgba(26,26,26,0.85)', lineHeight: 1.65, margin: 0 }}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LA METÁFORA ── */}
      <section style={{ background: 'var(--black)', padding: '3.5rem 1.5rem' }}>
        <div style={{ maxWidth: 620, margin: '0 auto', textAlign: 'center' }}>
          <div style={{ fontSize: '0.85rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--coral)', marginBottom: '1rem' }}>La idea que lo cambia todo</div>
          <h2 className="t-serif" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', color: 'white', fontWeight: 400, lineHeight: 1.3, marginBottom: '1.5rem' }}>
            "No importa si hace dos meses o cinco años que tuviste la cesárea."
          </h2>
          <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.8)', lineHeight: 1.8 }}>
            Lo importante no es el tiempo que ha pasado. Lo importante es si alguna vez has construido la base que tu cuerpo necesita para recuperarse de verdad.
          </p>
        </div>
      </section>

      {/* ── PARA QUIÉN ── */}
      <section style={{ background: 'var(--beige)', padding: '3.5rem 1.5rem' }}>
        <div style={{ maxWidth: 620, margin: '0 auto' }}>
          <h2 className="t-serif" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', textAlign: 'center', color: 'var(--black)', fontWeight: 400, marginBottom: '2.5rem' }}>
            Esta masterclass es para ti si…
          </h2>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
            {[
              'Tuviste una cesárea y no sabes por dónde empezar a recuperarte sin miedo',
              'Has intentado hacer ejercicio pero sientes que no avanzas o que algo no va bien',
              'Han pasado meses o años y crees que ya es tarde — (spoiler: no lo es)',
              'No te reconoces en el espejo y quieres volver a sentirte fuerte y tú misma',
              'Quieres entender cómo funciona realmente la recuperación antes de empezar'
            ].map((t, i) => (
              <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', fontSize: '1rem', color: 'rgba(26,26,26,0.85)', lineHeight: 1.6 }}>
                <Check size={18} style={{ color: 'var(--coral)', flexShrink: 0, marginTop: 2 }} />
                {t}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── FOTO SUSANA + SOBRE ELLA ── */}
      <section style={{ background: 'var(--white)', padding: '3.5rem 1.5rem' }}>
        <div style={{ maxWidth: 720, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '3rem', alignItems: 'center' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', textAlign: 'center' }}>
              <img
                src="/images/susana-cercana.JPG"
                alt="Susana Ares"
                style={{ width: 180, height: 180, borderRadius: '50%', objectFit: 'cover', objectPosition: 'top', boxShadow: '0 4px 24px rgba(0,0,0,0.12)' }}
              />
              <div>
                <p style={{ fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(26,26,26,0.45)', marginBottom: '0.3rem' }}>Tu instructora</p>
                <h3 className="t-serif" style={{ fontSize: '1.6rem', color: 'var(--black)', fontWeight: 400 }}>Susana Ares</h3>
              </div>
            </div>
            <div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.95rem', color: 'rgba(26,26,26,0.8)', lineHeight: 1.75 }}>
                <p>Soy mamá de tres hijos. Pasé por la cesárea, el postparto y ese momento en el que te miras al espejo y no te reconoces.</p>
                <p>No soy una entrenadora más. Soy una madre real que vivió exactamente lo que tú estás viviendo — y que después se formó como <strong style={{ color: 'var(--black)' }}>especialista en recuperación postcesárea y postparto</strong> e instructora de pilates terapéutico.</p>
                <p>He acompañado a más de <strong style={{ color: 'var(--coral)' }}>3.000 mamás</strong> a construir la base que su cuerpo necesitaba para recuperarse de verdad. En esta masterclass comparto contigo lo más importante que he aprendido.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ── */}
      <section style={{ background: 'var(--coral)', padding: '3.5rem 1.5rem', textAlign: 'center' }}>
        <div style={{ maxWidth: 520, margin: '0 auto' }}>
          <h2 className="t-serif" style={{ fontSize: 'clamp(1.5rem, 4vw, 2rem)', color: 'white', fontWeight: 400, marginBottom: '0.75rem' }}>
            ¿Te apuntas?
          </h2>
          <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.85)', marginBottom: '0.75rem', lineHeight: 1.65 }}>
            Es gratuita. En directo. El 31 de agosto a las 21:00h.
          </p>
          <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.7)', marginBottom: '2rem' }}>
            Solo necesitas reservar tu plaza.
          </p>
          <button
            style={{ background: 'white', color: 'var(--coral)', fontFamily: 'var(--sans)', fontWeight: 700, fontSize: '1.05rem', padding: '1.1rem 2.5rem', borderRadius: 4, border: 'none', cursor: 'pointer' }}
            onClick={() => document.getElementById('registro')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Quiero mi plaza gratuita
          </button>
          <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.65)', marginTop: '1rem' }}>
            {MASTERCLASS_FECHA}
          </p>
        </div>
      </section>

    </div>
  );
}