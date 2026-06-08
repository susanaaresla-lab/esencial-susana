import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Clock, Users, Check, Shield, Brain, Heart, Zap, ArrowRight } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function ListaEsperaAvanzaPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://eocampaign1.com/form/a5cac8e0-631c-11f1-9540-43fc2d9c895b.js';
    script.setAttribute('data-form', 'a5cac8e0-631c-11f1-9540-43fc2d9c895b');
    script.async = true;
    document.getElementById('eo-form-avanza')?.appendChild(script);
    return () => {
      const container = document.getElementById('eo-form-avanza');
      if (container) container.innerHTML = '';
    };
  }, []);

  return (
    <div style={{ paddingTop: 80 }}>

      <Helmet>
        <title>Lista de espera | Método Esencial Madre: Avanza | Esencial Susana Ares</title>
        <meta name="description" content="El siguiente nivel después de Actívate. 8 semanas para transformar tu cuerpo y tu mente siendo madre. Apúntate a la lista de espera." />
        <meta property="og:title" content="Método Esencial Madre: Avanza — Lista de espera" />
        <meta property="og:description" content="El siguiente nivel. Más fuerza, más profundidad, más tú. La continuación natural de Actívate." />
        <meta property="og:image" content="https://esencialsusanaares.com/images/susana-og.jpg" />
        <meta property="og:url" content="https://esencialsusanaares.com/lista-espera-avanza" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://esencialsusanaares.com/images/susana-og.jpg" />
      </Helmet>

      {/* ── HERO ── */}
      <section style={{ background: 'var(--beige)', position: 'relative', overflow: 'hidden', minHeight: '85vh', display: 'flex', alignItems: 'center' }}>
        {/* Imagen a la derecha */}
        <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '50%', zIndex: 0 }}>
          <img
            src="/images/susana-ejercicio.JPG"
            alt="Susana Ares — Método Esencial Madre Avanza"
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }}
          />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, var(--beige) 0%, transparent 40%)' }} />
        </div>

        <div style={{ position: 'relative', zIndex: 1, padding: '3rem 1.5rem', maxWidth: 1100, margin: '0 auto', width: '100%' }}>
          <button className="btn-back" style={{ marginBottom: '2rem' }} onClick={() => { navigate('/'); window.scrollTo(0,0); }}>
            <ArrowLeft size={15} /> Volver al inicio
          </button>

          <div style={{ maxWidth: 520 }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'var(--black)', color: 'white', fontWeight: 700, fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', padding: '0.4rem 1rem', borderRadius: 999, marginBottom: '1.25rem' }}>
              ✦ Octubre 2026 · El siguiente nivel
            </div>
            <div className="t-label" style={{ color: 'var(--coral)', marginBottom: '0.5rem' }}>Método Esencial Madre</div>
            <h1 className="t-serif" style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', lineHeight: 1.05, color: 'var(--black)', marginBottom: '1.25rem', fontWeight: 400 }}>
              Avanza
            </h1>
            <p style={{ fontSize: '1.2rem', color: 'rgba(26,26,26,0.8)', lineHeight: 1.7, marginBottom: '0.75rem', fontStyle: 'italic' }}>
              "Porque reconectar fue el inicio. Ahora es el momento de transformarte."
            </p>
            <p style={{ fontSize: '1rem', color: 'rgba(26,26,26,0.7)', lineHeight: 1.7, marginBottom: '2rem' }}>
              La continuación natural de Actívate. Más profundidad, más fuerza, más trabajo de mente. Para la madre que ya sabe que puede — y quiere más.
            </p>
            <div className="flex flex-wrap gap-3" style={{ marginBottom: '1.25rem' }}>
              <span className="pill"><Clock />8 semanas · Online</span>
              <span className="pill"><Zap />Con y sin impacto</span>
              <span className="pill"><Users />Nivel medio</span>
            </div>
            <div style={{ background: 'rgba(232,115,90,0.1)', border: '1px solid rgba(232,115,90,0.25)', borderRadius: 6, padding: '0.75rem 1rem', marginBottom: '1.75rem', display: 'inline-block' }}>
              <p style={{ fontSize: '0.85rem', color: 'rgba(26,26,26,0.7)', margin: 0 }}>
                ⏱ Rutinas de 15-30 min · Desde 6 meses tras cesárea · Desde 3 meses tras parto vaginal
              </p>
            </div>
            <div style={{ display: 'block' }}>
              <button
                className="btn-coral"
                style={{ fontSize: '1.1rem', padding: '1.1rem 2.5rem' }}
                onClick={() => document.getElementById('formulario')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Apúntame a la lista de espera
              </button>
            </div>
            <p style={{ fontSize: '0.85rem', color: 'rgba(26,26,26,0.5)', marginTop: '0.75rem' }}>
              Disponible en octubre · Precio especial para la lista de espera
            </p>
          </div>
        </div>
      </section>

      {/* ── PUENTE ENTRE PROGRAMAS ── */}
      <section style={{ background: 'var(--black)', padding: '3rem 1.5rem' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          {/* Flecha de continuación */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
            <div style={{ background: 'rgba(255,255,255,0.08)', borderRadius: 6, padding: '1rem 1.75rem', textAlign: 'center' }}>
              <p style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.45)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.3rem' }}>Paso 1 · 4 semanas</p>
              <p style={{ fontWeight: 600, color: 'rgba(255,255,255,0.75)', fontSize: '0.95rem' }}>Actívate</p>
              <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.4)', marginTop: '0.2rem' }}>Reconecta con tu cuerpo</p>
            </div>
            <ArrowRight size={22} style={{ color: 'var(--coral)', flexShrink: 0 }} />
            <div style={{ background: 'var(--coral)', borderRadius: 6, padding: '1rem 1.75rem', textAlign: 'center' }}>
              <p style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.85)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.3rem' }}>Paso 2 · 8 semanas</p>
              <p style={{ fontWeight: 700, color: 'white', fontSize: '0.95rem' }}>Avanza</p>
              <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.85)', marginTop: '0.2rem' }}>Transforma tu cuerpo y tu mente</p>
            </div>
          </div>

          {/* Descripción del programa */}
          <div style={{ background: 'rgba(255,255,255,0.05)', borderRadius: 8, padding: '2rem', border: '1px solid rgba(255,255,255,0.08)', textAlign: 'center' }}>
            <p style={{ fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--coral)', marginBottom: '0.75rem' }}>Qué es Avanza</p>
            <p style={{ fontSize: '1.1rem', color: 'white', lineHeight: 1.75, maxWidth: 580, margin: '0 auto 1.25rem', fontWeight: 400 }}>
              Un programa online de <strong style={{ color: 'var(--coral)' }}>8 semanas</strong> para madres con poco tiempo que quieren transformarse — con rutinas cortas de 15-30 min, ejercicios con impacto, trabajo profundo de mente, y todo guiado paso a paso desde casa.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.75rem' }}>
              {['8 semanas · Online', 'Rutinas con impacto', 'Abdomen y core', 'Suelo pélvico avanzado', 'Módulos de mente', 'Tu mejor versión'].map((tag, i) => (
                <span key={i} style={{ background: 'rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.75)', fontSize: '0.8rem', padding: '0.35rem 0.85rem', borderRadius: 999, border: '1px solid rgba(255,255,255,0.12)' }}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FORMULARIO ── */}
      <section id="formulario" style={{ background: 'var(--peach)', padding: '4rem 1.5rem' }}>
        <div style={{ maxWidth: 520, margin: '0 auto', textAlign: 'center' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2rem' }}>
            <div style={{ background: 'rgba(232,115,90,0.1)', border: '1px solid rgba(232,115,90,0.3)', borderRadius: 6, padding: '1rem 1.25rem', display: 'flex', alignItems: 'flex-start', gap: '0.75rem', textAlign: 'left' }}>
              <span style={{ fontSize: '1.25rem', flexShrink: 0 }}>🔔</span>
              <p style={{ fontSize: '0.95rem', color: 'var(--black)', lineHeight: 1.55, margin: 0 }}>
                <strong>Acceso prioritario</strong> — serás la primera en ser avisada cuando abra la inscripción, con precio especial exclusivo para la lista de espera.
              </p>
            </div>
            <div style={{ background: 'rgba(232,115,90,0.1)', border: '1px solid rgba(232,115,90,0.3)', borderRadius: 6, padding: '1rem 1.25rem', display: 'flex', alignItems: 'flex-start', gap: '0.75rem', textAlign: 'left' }}>
              <span style={{ fontSize: '1.25rem', flexShrink: 0 }}>✦</span>
              <p style={{ fontSize: '0.95rem', color: 'var(--black)', lineHeight: 1.55, margin: 0 }}>
                <strong>Diseñado para ti</strong> — si ya hiciste Actívate o llevas tiempo en tu recuperación y estás lista para ir más lejos.
              </p>
            </div>
          </div>

          <div style={{ background: 'var(--white)', borderRadius: 8, padding: '2rem', boxShadow: '0 4px 32px rgba(0,0,0,0.08)' }}>
            <h2 className="t-serif" style={{ fontSize: '1.75rem', color: 'var(--black)', marginBottom: '0.4rem', fontWeight: 400 }}>Reserva tu sitio</h2>
            <p style={{ fontSize: '0.95rem', color: 'rgba(26,26,26,0.6)', marginBottom: '1.25rem', lineHeight: 1.6 }}>
              Disponible en octubre. Apúntate y sé la primera en saberlo.
            </p>
            <div id="eo-form-avanza" />
            <p style={{ fontSize: '0.8rem', color: 'rgba(26,26,26,0.4)', marginTop: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem' }}>
              <Shield size={12} /> Sin spam. Solo te avisaremos cuando abra la inscripción.
            </p>
          </div>
        </div>
      </section>

      {/* ── QUÉ INCLUYE AVANZA ── */}
      <section className="section" style={{ background: 'var(--white)' }}>
        <div style={{ maxWidth: 860, margin: '0 auto', padding: '0 1.5rem' }}>
          <div className="text-center" style={{ marginBottom: '3rem' }}>
            <div className="t-label text-muted" style={{ marginBottom: '0.5rem' }}>Todo lo que incluye</div>
            <h2 className="t-serif" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', color: 'var(--black)', marginBottom: '1rem' }}>
              No es más de lo mismo.<br />Es ir más profundo.
            </h2>
            <p style={{ fontSize: '1.05rem', color: 'rgba(26,26,26,0.7)', lineHeight: 1.75, maxWidth: 560, margin: '0 auto' }}>
              Actívate fue el primer paso. Avanza es donde ocurre la transformación real — en el cuerpo y en la mente.
            </p>
          </div>

          {/* Bloque cuerpo */}
          <div style={{ marginBottom: '1.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <div style={{ width: 36, height: 2, background: 'var(--coral)' }} />
              <p style={{ fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--coral)' }}>Trabajo físico</p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1rem' }}>
              {[
                { emoji: '💪', title: 'Rutinas con y sin impacto', desc: 'Sesiones cortas de 15-30 minutos, guiadas y fáciles de seguir. Más intensas que Actívate, pero sin ser extremas — pensadas para madres reales con poco tiempo.' },
                { emoji: '🎯', title: 'Abdomen profundo y diástasis', desc: 'Trabajo específico para reducir la diástasis y construir un core verdaderamente fuerte.' },
                { emoji: '🌸', title: 'Suelo pélvico avanzado', desc: 'Ejercicios más precisos y profundos para un suelo pélvico fuerte y funcional.' }
              ].map((item, i) => (
                <div key={i} style={{ background: 'var(--beige)', borderRadius: 8, padding: '1.5rem', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <span style={{ fontSize: '1.75rem', flexShrink: 0, lineHeight: 1 }}>{item.emoji}</span>
                  <div>
                    <h4 style={{ fontWeight: 600, fontSize: '1rem', marginBottom: '0.4rem', color: 'var(--black)' }}>{item.title}</h4>
                    <p style={{ fontSize: '0.875rem', color: 'rgba(26,26,26,0.7)', lineHeight: 1.6 }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bloque mente */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <div style={{ width: 36, height: 2, background: 'var(--coral)' }} />
              <p style={{ fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--coral)' }}>Trabajo mental</p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1rem' }}>
              {[
                { emoji: '🔍', title: 'Fase 1 · Identifica', desc: 'Descubre qué miedos, limitaciones y bloqueos se han quedado contigo — en tu parto, en tu maternidad, en ti como mujer. El primer paso para cambiar algo es verlo.' },
                { emoji: '🧠', title: 'Fase 2 · Procesa y suelta', desc: 'La culpa, la frustración, todo lo que tu parto o tu cesárea dejó dentro sin que lo vieras venir. Módulos exclusivos para trabajar lo que pesa y soltarlo de verdad.' },
                { emoji: '✨', title: 'Fase 3 · Construye tu mejor versión', desc: 'Seguridad, confianza y una mente fuerte. No para volver a ser la de antes — para descubrir que siendo madre eres más de lo que creías.' }
              ].map((item, i) => (
                <div key={i} style={{ background: 'rgba(232,115,90,0.06)', border: '1px solid rgba(232,115,90,0.2)', borderRadius: 8, padding: '1.5rem', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <span style={{ fontSize: '1.75rem', flexShrink: 0, lineHeight: 1 }}>{item.emoji}</span>
                  <div>
                    <h4 style={{ fontWeight: 600, fontSize: '1rem', marginBottom: '0.4rem', color: 'var(--coral)' }}>{item.title}</h4>
                    <p style={{ fontSize: '0.875rem', color: 'rgba(26,26,26,0.7)', lineHeight: 1.6 }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TRANSFORMACIÓN MENTE ── */}
      <section className="section" style={{ background: 'var(--black)' }}>
        <div style={{ maxWidth: 700, margin: '0 auto', padding: '0 1.5rem', textAlign: 'center' }}>
          <div style={{ fontSize: '0.85rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--coral)', marginBottom: '0.75rem' }}>El diferencial de Avanza</div>
          <h2 className="t-serif" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', color: 'white', marginBottom: '1.25rem', lineHeight: 1.2, fontWeight: 400 }}>
            El cuerpo y la mente<br />van siempre juntos.
          </h2>
          <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.75)', lineHeight: 1.8, marginBottom: '3rem' }}>
            La mayoría de programas trabajan solo el físico. Avanza va más allá: porque después de ser madre — sea cual sea tu experiencia de parto o cesárea — hay cosas que el cuerpo no puede sanar solo.
          </p>
          <div className="grid-2" style={{ gap: '1rem', textAlign: 'left' }}>
            <div style={{ background: 'rgba(255,255,255,0.06)', borderRadius: 8, padding: '1.75rem', border: '1px solid rgba(255,255,255,0.1)' }}>
              <div style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: '0.5rem' }}>Fase 1</div>
              <Brain size={22} style={{ color: 'var(--coral)', marginBottom: '0.75rem' }} />
              <h3 style={{ fontWeight: 600, fontSize: '1.05rem', color: 'white', marginBottom: '0.5rem' }}>Identifica</h3>
              <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.7 }}>
                Qué miedos y limitaciones se han quedado en ti como madre, como mujer, como persona. No puedes soltar lo que no has visto.
              </p>
            </div>
            <div style={{ background: 'rgba(255,255,255,0.06)', borderRadius: 8, padding: '1.75rem', border: '1px solid rgba(255,255,255,0.1)' }}>
              <div style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: '0.5rem' }}>Fase 2</div>
              <Brain size={22} style={{ color: 'var(--coral)', marginBottom: '0.75rem' }} />
              <h3 style={{ fontWeight: 600, fontSize: '1.05rem', color: 'white', marginBottom: '0.5rem' }}>Procesa y suelta</h3>
              <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.7 }}>
                La culpa, la frustración, todo lo que tu parto o tu cesárea dejó dentro. Aquí lo trabajamos para que puedas soltarlo y avanzar libre.
              </p>
            </div>
            <div style={{ background: 'rgba(232,115,90,0.15)', borderRadius: 8, padding: '1.75rem', border: '1px solid rgba(232,115,90,0.3)', gridColumn: 'span 1' }}>
              <div style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: '0.5rem' }}>Fase 3</div>
              <Heart size={22} style={{ color: 'var(--coral)', marginBottom: '0.75rem' }} />
              <h3 style={{ fontWeight: 600, fontSize: '1.05rem', color: 'white', marginBottom: '0.5rem' }}>Construye tu mejor versión</h3>
              <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.7 }}>
                Seguridad, confianza y una mente fuerte. No para volver a ser la de antes — para descubrir que siendo madre eres más de lo que creías.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── PARA QUIÉN ── */}
      <section className="section" style={{ background: 'var(--beige)' }}>
        <div style={{ maxWidth: 680, margin: '0 auto', padding: '0 1.5rem' }}>
          <h2 className="t-serif text-center" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.25rem)', marginBottom: '0.75rem' }}>Avanza es para ti si…</h2>
          <p style={{ textAlign: 'center', fontSize: '1rem', color: 'rgba(26,26,26,0.6)', marginBottom: '2.5rem' }}>
            Ya diste el primer paso. Este es el siguiente.
          </p>
          <ul className="check-list" style={{ maxWidth: 540, margin: '0 auto' }}>
            {[
              'Ya completaste el Método Esencial Madre: Actívate o llevas tiempo recuperándote',
              'Han pasado al menos 6 meses desde tu cesárea, o 3 meses desde un parto vaginal',
              'Quieres subir la intensidad con rutinas de impacto de forma segura y progresiva',
              'Sientes que todavía tienes diástasis o que tu core no está del todo fuerte',
              'Hay experiencias de tu parto o cesárea que todavía no has procesado del todo',
              'Estás lista para ir más profundo — en el cuerpo y en la mente'
            ].map((t, i) => (
              <li key={i} style={{ fontSize: '1rem', paddingBottom: '0.5rem' }}><Check size={16} />{t}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── SOBRE SUSANA ── */}
      <section className="section" style={{ background: 'var(--white)' }}>
        <div style={{ maxWidth: 680, margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start', flexWrap: 'wrap' }}>
            <img
              src="/images/susana-cercana.JPG"
              alt="Susana Ares"
              style={{ width: 140, height: 140, borderRadius: '50%', objectFit: 'cover', objectPosition: 'top', boxShadow: '0 4px 20px rgba(0,0,0,0.1)', flexShrink: 0 }}
            />
            <div style={{ flex: 1, minWidth: 240 }}>
              <div className="t-label text-muted" style={{ marginBottom: '0.4rem' }}>Tu instructora</div>
              <h3 className="t-serif" style={{ fontSize: 'clamp(1.4rem, 3vw, 1.75rem)', color: 'var(--black)', fontWeight: 400, marginBottom: '1rem' }}>Susana Ares</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.95rem', color: 'rgba(26,26,26,0.8)', lineHeight: 1.7 }}>
                <p>Mamá de tres hijos. Pasé por la cesárea, el postparto y ese momento en el que te miras al espejo y no te reconoces. Sé exactamente cómo se siente porque yo también lo viví.</p>
                <p>Avanza nace de ese camino: de saber que recuperarse no es solo volver a moverte, sino transformarte. Trabajar el cuerpo y la mente juntos, con profundidad y con cariño.</p>
                <p>He acompañado a más de <strong style={{ color: 'var(--coral)' }}>3.000 mamás</strong>. Avanza es el siguiente capítulo de ese camino.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ── */}
      <div className="cta-band">
        <div className="container-narrow text-center">
          <h2>Tu transformación no ha terminado.<br />Acaba de empezar.</h2>
          <p style={{ marginBottom: '2rem', opacity: 0.9 }}>Método Esencial Madre: Avanza — disponible en octubre. Apúntate ahora y sé la primera en saberlo.</p>
          <button className="btn-white" onClick={() => document.getElementById('formulario')?.scrollIntoView({ behavior: 'smooth' })}>
            Apúntame a la lista de espera
          </button>
        </div>
      </div>

    </div>
  );
}