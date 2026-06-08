import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Clock, Users, Check, Shield, Brain, Heart, Zap } from 'lucide-react';
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
        <meta name="description" content="Apúntate a la lista de espera del Método Esencial Madre: Avanza. El siguiente nivel — 8 semanas para seguir transformando tu cuerpo y tu mente después de ser madre." />
        <meta property="og:title" content="Método Esencial Madre: Avanza — Lista de espera" />
        <meta property="og:description" content="El siguiente nivel. 8 semanas para fortalecer tu cuerpo, reducir la diástasis y construir tu mejor versión siendo madre." />
        <meta property="og:image" content="https://esencialsusanaares.com/images/susana-og.jpg" />
        <meta property="og:url" content="https://esencialsusanaares.com/lista-espera-avanza" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://esencialsusanaares.com/images/susana-og.jpg" />
      </Helmet>

      {/* ── HERO ── */}
      <section style={{ position: 'relative', minHeight: '90vh', display: 'flex', flexDirection: 'column' }}>
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <img
            src="/images/susana-listaespera.JPG"
            alt="Susana Ares"
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 35%' }}
          />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(26,26,26,0.25) 0%, rgba(26,26,26,0.6) 55%, rgba(26,26,26,0.92) 100%)' }} />
        </div>

        <div style={{ position: 'relative', zIndex: 1, padding: '1.5rem 1.5rem 0' }}>
          <button className="btn-back" style={{ color: 'rgba(255,255,255,0.85)' }} onClick={() => { navigate('/'); window.scrollTo(0,0); }}>
            <ArrowLeft size={15} /> Volver al inicio
          </button>
        </div>

        <div style={{ position: 'relative', zIndex: 1, flex: 1, display: 'flex', alignItems: 'flex-end', padding: '0 1.5rem 4rem' }}>
          <div style={{ maxWidth: 680, margin: '0 auto', width: '100%', textAlign: 'center' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'var(--coral)', color: 'white', fontWeight: 700, fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', padding: '0.4rem 1rem', borderRadius: 999, marginBottom: '1.25rem' }}>
              ✦ Próximamente · Octubre 2026
            </div>
            <div className="t-label" style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '0.5rem' }}>El siguiente nivel</div>
            <h1 className="t-serif" style={{ fontSize: 'clamp(2rem, 5vw, 3.75rem)', lineHeight: 1.1, color: 'white', marginBottom: '1rem', fontWeight: 400 }}>
              Método Esencial Madre: Avanza
            </h1>
            <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.88)', lineHeight: 1.75, maxWidth: 560, margin: '0 auto 1.5rem' }}>
              8 semanas para subir el nivel. Más fuerza, más confianza, más tú. Porque después de reconectar con tu cuerpo, es hora de transformarlo.
            </p>
            <div className="flex justify-center flex-wrap gap-3" style={{ marginBottom: '2rem' }}>
              <span className="pill" style={{ background: 'rgba(255,255,255,0.15)', color: 'white', backdropFilter: 'blur(8px)' }}><Clock />8 semanas · Online</span>
              <span className="pill" style={{ background: 'rgba(255,255,255,0.15)', color: 'white', backdropFilter: 'blur(8px)' }}><Zap />Con y sin impacto</span>
              <span className="pill" style={{ background: 'rgba(255,255,255,0.15)', color: 'white', backdropFilter: 'blur(8px)' }}><Users />Cuerpo + Mente</span>
            </div>
            <button
              className="btn-coral"
              style={{ fontSize: '1.05rem', padding: '1.1rem 2.5rem' }}
              onClick={() => document.getElementById('formulario')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Apúntame a la lista de espera
            </button>
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
                <strong>Acceso prioritario</strong> — serás la primera en ser avisada cuando abra la inscripción en octubre, con precio especial para la lista de espera.
              </p>
            </div>
            <div style={{ background: 'rgba(232,115,90,0.1)', border: '1px solid rgba(232,115,90,0.3)', borderRadius: 6, padding: '1rem 1.25rem', display: 'flex', alignItems: 'flex-start', gap: '0.75rem', textAlign: 'left' }}>
              <span style={{ fontSize: '1.25rem', flexShrink: 0 }}>✦</span>
              <p style={{ fontSize: '0.95rem', color: 'var(--black)', lineHeight: 1.55, margin: 0 }}>
                <strong>Ideal si ya hiciste Actívate</strong> — o si llevas tiempo recuperándote y estás lista para dar el siguiente paso.
              </p>
            </div>
          </div>

          <div style={{ background: 'var(--white)', borderRadius: 8, padding: '2rem', boxShadow: '0 4px 32px rgba(0,0,0,0.08)' }}>
            <h2 className="t-serif" style={{ fontSize: '1.75rem', color: 'var(--black)', marginBottom: '0.4rem', fontWeight: 400 }}>Reserva tu sitio</h2>
            <p style={{ fontSize: '0.95rem', color: 'rgba(26,26,26,0.6)', marginBottom: '1.25rem', lineHeight: 1.6 }}>
              Disponible en octubre. Apúntate ahora y sé la primera en saberlo.
            </p>
            <div id="eo-form-avanza" />
            <p style={{ fontSize: '0.8rem', color: 'rgba(26,26,26,0.4)', marginTop: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem' }}>
              <Shield size={12} /> Sin spam. Solo te avisaremos cuando abra la inscripción.
            </p>
          </div>
        </div>
      </section>

      {/* ── QUÉ ES AVANZA ── */}
      <section className="section" style={{ background: 'var(--white)' }}>
        <div style={{ maxWidth: 700, margin: '0 auto', padding: '0 1.5rem' }}>
          <div className="text-center" style={{ marginBottom: '2.5rem' }}>
            <div className="t-label text-muted" style={{ marginBottom: '0.5rem' }}>El siguiente nivel</div>
            <h2 className="t-serif" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', color: 'var(--black)', marginBottom: '1rem' }}>
              Después de reconectar, es hora de transformar
            </h2>
            <p style={{ fontSize: '1.05rem', color: 'rgba(26,26,26,0.75)', lineHeight: 1.75, maxWidth: 580, margin: '0 auto' }}>
              El Método Esencial Madre: Actívate te devolvió la conexión con tu cuerpo. Avanza va más lejos: 8 semanas para fortalecer, tonificar y construir la mejor versión de ti siendo madre — por dentro y por fuera.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem' }}>
            {[
              { emoji: '💪', title: 'Ejercicios con y sin impacto', desc: 'Subimos el nivel de forma progresiva y segura. Tu cuerpo ya está listo para más.' },
              { emoji: '🎯', title: 'Abdomen, core y diástasis', desc: 'Trabajo específico y profundo para reducir la diástasis y fortalecer el núcleo de tu cuerpo.' },
              { emoji: '🌸', title: 'Suelo pélvico avanzado', desc: 'Continuamos el trabajo pélvico con ejercicios de mayor intensidad y precisión.' },
              { emoji: '🧠', title: 'Módulos de mente ampliados', desc: 'Trabajamos la culpa, la frustración y todo lo que quedó sin procesar después de la maternidad y la cesárea.' },
              { emoji: '✨', title: 'Tu mejor versión siendo madre', desc: 'Construimos seguridad, confianza y una mente fuerte. No volvemos a ser las de antes — somos más.' },
              { emoji: '📅', title: '8 semanas · Online', desc: 'Vídeos on-demand para hacer cuando puedas, con acceso completo durante 6 meses.' }
            ].map((item, i) => (
              <div key={i} style={{ background: 'var(--beige)', borderRadius: 6, padding: '1.5rem', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <span style={{ fontSize: '1.75rem', flexShrink: 0 }}>{item.emoji}</span>
                <div>
                  <h4 style={{ fontWeight: 600, fontSize: '1rem', marginBottom: '0.35rem' }}>{item.title}</h4>
                  <p style={{ fontSize: '0.875rem', color: 'rgba(26,26,26,0.7)', lineHeight: 1.6 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DIFERENCIADOR MENTE ── */}
      <section className="section" style={{ background: 'var(--coral)' }}>
        <div style={{ maxWidth: 680, margin: '0 auto', padding: '0 1.5rem', textAlign: 'center' }}>
          <div style={{ fontSize: '0.85rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.75)', marginBottom: '0.75rem' }}>Lo que hace único este método</div>
          <h2 className="t-serif" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', color: 'white', marginBottom: '1.25rem', lineHeight: 1.2, fontWeight: 400 }}>
            No es solo ponerse en forma.<br />Es convertirte en quien ya eres.
          </h2>
          <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.9)', lineHeight: 1.75, marginBottom: '2.5rem' }}>
            Avanza incluye módulos exclusivos para trabajar todo lo que la maternidad deja por dentro: la culpa, la frustración, la identidad perdida. Porque el cuerpo y la mente van juntos siempre.
          </p>
          <div className="grid-2" style={{ gap: '1rem' }}>
            <div style={{ background: 'rgba(255,255,255,0.15)', borderRadius: 4, padding: '1.75rem', textAlign: 'left' }}>
              <Brain size={22} color="white" style={{ marginBottom: '0.75rem' }} />
              <h3 style={{ fontWeight: 600, fontSize: '1.05rem', color: 'white', marginBottom: '0.5rem' }}>Procesa y suelta</h3>
              <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.85)', lineHeight: 1.7 }}>
                Trabajamos la culpa, la cesárea no deseada, la frustración y todo lo que todavía pesa. Para que puedas avanzar de verdad.
              </p>
            </div>
            <div style={{ background: 'rgba(255,255,255,0.15)', borderRadius: 4, padding: '1.75rem', textAlign: 'left' }}>
              <Heart size={22} color="white" style={{ marginBottom: '0.75rem' }} />
              <h3 style={{ fontWeight: 600, fontSize: '1.05rem', color: 'white', marginBottom: '0.5rem' }}>Construye tu mejor versión</h3>
              <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.85)', lineHeight: 1.7 }}>
                Seguridad, confianza y una mente fuerte. No para volver a ser la de antes — para descubrir que ahora eres más.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── LAS 8 SEMANAS ── */}
      <section className="section" style={{ background: 'var(--beige)' }}>
        <div style={{ maxWidth: 800, margin: '0 auto', padding: '0 1.5rem' }}>
          <div className="text-center" style={{ marginBottom: '2.5rem' }}>
            <div className="t-label text-muted" style={{ marginBottom: '0.5rem' }}>El programa</div>
            <h2 className="t-serif" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.25rem)', color: 'var(--black)' }}>8 semanas de transformación</h2>
            <p style={{ fontSize: '1rem', color: 'rgba(26,26,26,0.6)', marginTop: '0.75rem' }}>
              Progresivo, seguro y adaptado a tu cuerpo de madre.
            </p>
          </div>
          <div className="week-steps">
            {[
              { week: 'Semanas 1-2', title: 'Activación profunda', desc: 'Retomamos la conexión con el cuerpo y subimos la intensidad de forma segura. Abdomen y suelo pélvico como base.', highlight: false },
              { week: 'Semanas 3-4', title: 'Fortalecimiento + Mente', desc: 'Introducimos ejercicios de mayor impacto. Módulo de mente: procesamos la culpa y la frustración postcesárea.', highlight: true },
              { week: 'Semanas 5-6', title: 'Potencia y tonificación', desc: 'Trabajamos todo el cuerpo con mayor intensidad. Reducción de diástasis y fortalecimiento del core.', highlight: false },
              { week: 'Semanas 7-8', title: 'Tu mejor versión', desc: 'Consolidamos la fuerza física y mental. Construimos seguridad, confianza y la mejor versión de ti siendo madre.', highlight: true }
            ].map((item, i) => (
              <div key={i} className="week-step" style={item.highlight ? { border: '2px solid var(--coral)', borderRadius: 4, position: 'relative' } : {}}>
                {item.highlight && (
                  <div style={{ position: 'absolute', top: -12, left: '50%', transform: 'translateX(-50%)', background: 'var(--coral)', color: 'white', fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.1em', padding: '0.2rem 0.65rem', borderRadius: 20, whiteSpace: 'nowrap' }}>
                    CUERPO + MENTE
                  </div>
                )}
                <div className="week-number">{i + 1}</div>
                <div style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--coral)', marginBottom: '0.4rem' }}>{item.week}</div>
                <div style={{ fontWeight: 600, fontSize: '1rem', marginBottom: '0.4rem' }}>{item.title}</div>
                <p style={{ fontSize: '0.9rem', color: 'rgba(26,26,26,0.65)', lineHeight: 1.6 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PARA QUIÉN ── */}
      <section className="section" style={{ background: 'var(--white)' }}>
        <div style={{ maxWidth: 680, margin: '0 auto', padding: '0 1.5rem' }}>
          <h2 className="t-serif text-center" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.25rem)', marginBottom: '0.75rem' }}>Avanza es para ti si…</h2>
          <p style={{ textAlign: 'center', fontSize: '1rem', color: 'rgba(26,26,26,0.6)', marginBottom: '2.5rem' }}>
            Ya has dado el primer paso. Ahora es el momento de ir más lejos.
          </p>
          <ul className="check-list" style={{ maxWidth: 540, margin: '0 auto' }}>
            {[
              'Ya completaste el Método Esencial Madre: Actívate o llevas tiempo recuperándote',
              'Quieres subir el nivel de tus rutinas de forma segura y progresiva',
              'Sientes que todavía tienes diástasis o que tu core no está del todo fuerte',
              'Quieres trabajar el suelo pélvico a un nivel más profundo',
              'Tienes cosas pendientes de procesar emocionalmente después de la maternidad o la cesárea',
              'Estás lista para construir tu mejor versión — cuerpo y mente juntos'
            ].map((t, i) => (
              <li key={i} style={{ fontSize: '1rem', paddingBottom: '0.5rem' }}><Check size={16} />{t}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── SOBRE SUSANA ── */}
      <section className="section" style={{ background: 'var(--beige)' }}>
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
                <p>Soy <strong style={{ color: 'var(--black)' }}>especialista en recuperación postcesárea y postparto</strong>, instructora de pilates terapéutico, y he trabajado profundamente la fortaleza mental para acompañarte desde dentro.</p>
                <p>He acompañado a más de <strong style={{ color: 'var(--coral)' }}>3.000 mamás</strong> a recuperarse y transformarse. Avanza es el siguiente capítulo de ese camino.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ── */}
      <div className="cta-band">
        <div className="container-narrow text-center">
          <h2>¿Lista para el siguiente nivel?</h2>
          <p>Método Esencial Madre: Avanza — disponible en octubre. Apúntate ahora y sé la primera en saberlo.</p>
          <button className="btn-white" onClick={() => document.getElementById('formulario')?.scrollIntoView({ behavior: 'smooth' })}>
            Apúntame a la lista de espera
          </button>
        </div>
      </div>

    </div>
  );
}
