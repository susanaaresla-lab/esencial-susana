import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Clock, Video, Users, Check, Heart, Target, Gift, Shield, Brain, Headphones } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function ListaEsperaPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://eocampaign1.com/form/bbfaed1a-513e-11f1-bf07-67defba4d3c4.js';
    script.setAttribute('data-form', 'bbfaed1a-513e-11f1-bf07-67defba4d3c4');
    script.async = true;
    document.getElementById('eo-form-container')?.appendChild(script);
    return () => {
      const container = document.getElementById('eo-form-container');
      if (container) container.innerHTML = '';
    };
  }, []);

  const testimonios = [
    { name: 'Patricia A.', text: 'Sus rutinas me dieron claridad, seguridad y estructura. Son sesiones cortas, completas y fáciles de integrar en el día a día.' },
    { name: 'Estefanía L.', text: 'No fue solo recuperar fuerza… fue volver a confiar en mí, en mi cuerpo y en lo que es capaz de hacer. Empezar poco a poco, con ejercicios adaptados a mi cesárea, marcó la diferencia.' },
    { name: 'Gema S.', text: 'Hacer el calendario y encontrar a Susana ha sido un regalo. Los ejercicios son sencillos y según pasan los días el grado de dificultad aumenta. Lo recomiendo 100%.' },
    { name: 'María J.', text: 'He notado mucho cambio al vestirme. Son pequeños logros pero es así como se consiguen las metas. Merece la pena.' },
    { name: 'Laura M.', text: 'Nunca pensé que en solo 4 semanas notaría tanto cambio tras mi cesárea. Las rutinas son cortas pero muy efectivas. Me enganché desde el primer día.' },
    { name: 'Ana B.', text: 'Lo que más me gustó es que está todo pensado para madres reales, con cesárea o parto vaginal. Sin excusas, sin equipamiento, desde casa. Repito seguro.' }
  ];

  return (
    <div style={{ paddingTop: 80 }}>

      <Helmet>
        <title>Acceso prioritario | Método Esencial Madre | Esencial Susana Ares</title>
        <meta name="description" content="Regístrate para tener acceso prioritario a la próxima edición del Método Esencial Madre: Actívate — disponible solo del 11 al 14 de junio. Recibe gratis una semana de ejercicios adaptados." />
        <meta property="og:title" content="Acceso prioritario — Método Esencial Madre: Actívate" />
        <meta property="og:description" content="Próxima edición disponible solo del 11 al 14 de junio. Regístrate para acceso prioritario y recibe gratis una semana de ejercicios adaptados a cesárea y parto." />
        <meta property="og:image" content="https://esencialsusanaares.com/images/susana-og.jpg" />
        <meta property="og:url" content="https://esencialsusanaares.com/lista-espera" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Acceso prioritario — Método Esencial Madre: Actívate" />
        <meta name="twitter:description" content="Próxima edición disponible solo del 11 al 14 de junio." />
        <meta name="twitter:image" content="https://esencialsusanaares.com/images/susana-og.jpg" />
      </Helmet>

      {/* ── HERO imagen completa ── */}
      <section style={{ position: 'relative', minHeight: '90vh', display: 'flex', flexDirection: 'column' }}>
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <img
            src="/images/susana-listaespera.JPG"
            alt="Susana Ares"
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 35%' }}
          />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(26,26,26,0.25) 0%, rgba(26,26,26,0.6) 55%, rgba(26,26,26,0.88) 100%)' }} />
        </div>

        <div style={{ position: 'relative', zIndex: 1, padding: '1.5rem 1.5rem 0' }}>
          <button className="btn-back" style={{ color: 'rgba(255,255,255,0.85)' }} onClick={() => { navigate('/'); window.scrollTo(0,0); }}>
            <ArrowLeft size={15} /> Volver al inicio
          </button>
        </div>

        <div style={{ position: 'relative', zIndex: 1, flex: 1, display: 'flex', alignItems: 'flex-end', padding: '0 1.5rem 4rem' }}>
          <div style={{ maxWidth: 680, margin: '0 auto', width: '100%', textAlign: 'center' }}>
            <div className="t-label" style={{ color: 'rgba(255,255,255,0.8)', marginBottom: '0.75rem' }}>Próxima edición · Solo del 11 al 14 de junio</div>
            <h1 className="t-serif" style={{ fontSize: 'clamp(2rem, 5vw, 3.75rem)', lineHeight: 1.1, color: 'white', marginBottom: '1rem', fontWeight: 400 }}>
              Sé la primera en acceder al Método Esencial Madre: Actívate
            </h1>
            <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.88)', lineHeight: 1.75, maxWidth: 560, margin: '0 auto 1.5rem' }}>
              Programa online de 4 semanas con ejercicios específicos adaptados a cesárea y parto vaginal para trabajar tu cuerpo, tu confianza y tu motivación. La próxima edición estará disponible <strong style={{ color: 'white' }}>solo del 11 al 14 de junio</strong>. Regístrate ahora para tener acceso prioritario y recibir gratis una semana de ejercicios para empezar ya.
            </p>
            <div className="flex justify-center flex-wrap gap-3" style={{ marginBottom: '2rem' }}>
              <span className="pill" style={{ background: 'rgba(255,255,255,0.15)', color: 'white', backdropFilter: 'blur(8px)' }}><Clock />4 semanas · Online</span>
              <span className="pill" style={{ background: 'rgba(255,255,255,0.15)', color: 'white', backdropFilter: 'blur(8px)' }}><Video />Parto y cesárea</span>
              <span className="pill" style={{ background: 'rgba(255,255,255,0.15)', color: 'white', backdropFilter: 'blur(8px)' }}><Users />+3.000 mamás</span>
            </div>
            <button
              className="btn-coral"
              style={{ fontSize: '1.05rem', padding: '1.1rem 2.5rem' }}
              onClick={() => document.getElementById('formulario')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Quiero acceso prioritario
            </button>
          </div>
        </div>
      </section>

      {/* ── FORMULARIO ── */}
      <section id="formulario" style={{ background: 'var(--peach)', padding: '4rem 1.5rem' }}>
        <div style={{ maxWidth: 520, margin: '0 auto', textAlign: 'center' }}>

          {/* Qué consigues al registrarte */}
          <div style={{ marginBottom: '2rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <div style={{ background: 'rgba(232,115,90,0.1)', border: '1px solid rgba(232,115,90,0.3)', borderRadius: 6, padding: '1rem 1.25rem', display: 'flex', alignItems: 'flex-start', gap: '0.75rem', textAlign: 'left' }}>
              <span style={{ fontSize: '1.25rem', flexShrink: 0 }}>🔔</span>
              <p style={{ fontSize: '0.95rem', color: 'var(--black)', lineHeight: 1.55, margin: 0 }}>
                <strong>Acceso prioritario</strong> — serás la primera en ser avisada cuando abra la próxima edición, disponible solo del 11 al 14 de junio.
              </p>
            </div>
            <div style={{ background: 'rgba(232,115,90,0.1)', border: '1px solid rgba(232,115,90,0.3)', borderRadius: 6, padding: '1rem 1.25rem', display: 'flex', alignItems: 'flex-start', gap: '0.75rem', textAlign: 'left' }}>
              <span style={{ fontSize: '1.25rem', flexShrink: 0 }}>🎁</span>
              <p style={{ fontSize: '0.95rem', color: 'var(--black)', lineHeight: 1.55, margin: 0 }}>
                <strong>Una semana de ejercicios gratis</strong> — rutinas de mis vídeos de YouTube adaptadas a cesárea y parto para que pruebes mi metodología y empieces a moverte ya.
              </p>
            </div>
          </div>

          <div style={{ background: 'var(--white)', borderRadius: 8, padding: '2rem', boxShadow: '0 4px 32px rgba(0,0,0,0.08)' }}>
            <h2 className="t-serif" style={{ fontSize: '1.75rem', color: 'var(--black)', marginBottom: '0.4rem', fontWeight: 400 }}>Reserva tu acceso prioritario</h2>
            <p style={{ fontSize: '0.95rem', color: 'rgba(26,26,26,0.6)', marginBottom: '1.25rem', lineHeight: 1.6 }}>
              Al registrarte serás la primera en saber cuándo abre — solo del 11 al 14 de junio.
            </p>
            <div id="eo-form-container" />
            <p style={{ fontSize: '0.8rem', color: 'rgba(26,26,26,0.4)', marginTop: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem' }}>
              <Shield size={12} /> Sin spam. Solo te avisaremos cuando abra la próxima edición del 11 al 14 de junio.
            </p>
          </div>
        </div>
      </section>

      {/* ── LAS 4 SEMANAS ── */}
      <section className="section" style={{ background: 'var(--beige)' }}>
        <div style={{ maxWidth: 800, margin: '0 auto', padding: '0 1.5rem' }}>
          <div className="text-center" style={{ marginBottom: '2.5rem' }}>
            <div className="t-label text-muted" style={{ marginBottom: '0.75rem' }}>Cómo está construido el método</div>
            <h2 className="t-serif" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', color: 'var(--black)' }}>Un plan progresivo semana a semana</h2>
            <p style={{ fontSize: '1rem', color: 'rgba(26,26,26,0.6)', marginTop: '0.75rem', maxWidth: 520, margin: '0.75rem auto 0' }}>
              Cada semana tiene un objetivo claro. Sin saltar pasos, sin agobios.
            </p>
          </div>
          <div className="week-steps">
            {[
              { week: 'Semana 1', title: 'Conexión', desc: 'Reconecta con tu cuerpo y tu cicatriz. Rutinas muy suaves para empezar desde donde estás, sin forzar nada.', highlight: false },
              { week: 'Semana 2', title: 'Activación + Mente', desc: 'Activa abdomen y suelo pélvico de forma progresiva. Incluye el módulo de fortaleza mental exclusivo: vídeo de motivación y audio de creencias.', highlight: true },
              { week: 'Semana 3', title: 'Fortalecimiento', desc: 'Aumenta la intensidad respetando tu recuperación. Empiezas a notar los cambios en tu cuerpo.', highlight: false },
              { week: 'Semana 4', title: 'Consolidación', desc: 'Integra todo lo aprendido y celebra los resultados en tu cuerpo y tu confianza.', highlight: false }
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

      {/* ── QUÉ INCLUYE EL MÉTODO COMPLETO ── */}
      <section className="section" style={{ background: 'var(--white)', paddingTop: '2rem' }}>
        <div style={{ maxWidth: 800, margin: '0 auto', padding: '0 1.5rem' }}>
          <div className="text-center" style={{ marginBottom: '3rem' }}>
            <div className="t-label text-muted" style={{ marginBottom: '0.75rem' }}>El método completo</div>
            <h2 className="t-serif" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', color: 'var(--black)' }}>Todo lo que incluye</h2>
            <p style={{ fontSize: '1rem', color: 'rgba(26,26,26,0.6)', marginTop: '0.75rem', maxWidth: 520, margin: '0.75rem auto 0' }}>
              Especialmente diseñado para cesárea y para madres que empiezan desde cero.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem', marginBottom: '1.5rem' }}>
            {[
              { Icon: Target, title: '3 rutinas semanales sin impacto', desc: 'Grabadas, adaptadas al cuerpo de madre. Seguras desde los 40 días (parto) o 2 meses (cesárea).', highlight: false },
              { Icon: Heart, title: 'Suelo pélvico y abdomen', desc: 'Trabajo específico para recuperar y fortalecer de forma correcta y segura.', highlight: false },
              { Icon: Video, title: '1 vídeo semanal para tu mejor versión', desc: 'Estiramientos y hábitos de recuperación para integrar en tu día a día.', highlight: false },
              { Icon: Clock, title: '4 meses de acceso', desc: 'Para empezar cuando tu cuerpo esté listo, sin prisas ni presión.', highlight: false },
              { Icon: Brain, title: '🧠 Módulo de fortaleza mental', desc: 'Exclusivo. Vídeo de motivación y confianza para trabajar la seguridad en ti misma. No está en YouTube.', highlight: true },
              { Icon: Headphones, title: '🎧 Audio de creencias', desc: 'Exclusivo. Para reforzar que eres merecedora y válida para recuperarte y conseguir lo que te propones.', highlight: true },
              { Icon: Gift, title: 'Bonus incluido', desc: 'Consejos prácticos para seguir recuperándote en tu día a día como madre.', highlight: false },
              { Icon: Users, title: '1 directo mensual en vivo', desc: 'Con Susana para resolver tus dudas personalmente cada mes.', highlight: false }
            ].map(({ Icon, title, desc, highlight }, i) => (
              <div key={i} style={{
                background: highlight ? 'rgba(232,115,90,0.08)' : 'var(--beige)',
                borderRadius: 4,
                padding: '1.5rem',
                border: highlight ? '1px solid rgba(232,115,90,0.3)' : 'none'
              }}>
                <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'rgba(232,115,90,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                  <Icon size={18} style={{ color: 'var(--coral)' }} />
                </div>
                <h4 style={{ fontWeight: 600, fontSize: '1rem', marginBottom: '0.4rem' }}>{title}</h4>
                <p style={{ fontSize: '0.875rem', color: 'rgba(26,26,26,0.7)', lineHeight: 1.6 }}>{desc}</p>
              </div>
            ))}
          </div>
          <div style={{ background: 'var(--black)', borderRadius: 4, padding: '1.25rem 1.5rem', textAlign: 'center' }}>
            <p style={{ fontSize: '0.95rem', color: 'white', lineHeight: 1.65, margin: 0 }}>
              ✦ El único método que trabaja <strong style={{ color: 'var(--coral)' }}>cuerpo y mente</strong> — exclusivo, no disponible en YouTube.
            </p>
          </div>
        </div>
      </section>

      {/* ── PARA QUIÉN ── */}
      <section className="section" style={{ background: 'var(--beige)' }}>
        <div style={{ maxWidth: 680, margin: '0 auto', padding: '0 1.5rem' }}>
          <h2 className="t-serif text-center" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.25rem)', marginBottom: '0.75rem' }}>Este método es para ti si…</h2>
          <p style={{ textAlign: 'center', fontSize: '1rem', color: 'rgba(26,26,26,0.6)', marginBottom: '2.5rem' }}>
            Para madres que quieren empezar desde donde están, sin importar su punto de partida.
          </p>
          <ul className="check-list" style={{ maxWidth: 520, margin: '0 auto' }}>
            {[
              'Tuviste cesárea y no sabes cómo empezar a recuperarte sin hacerte daño',
              'Tu cicatriz de cesárea te genera inseguridad o no sabes cómo trabajarla',
              'Tuviste parto vaginal y quieres ejercicios seguros y adaptados',
              'Nunca has hecho ejercicio o llevas años sin hacer nada',
              'Tu bebé tiene meses o años y todavía no te has recuperado del todo',
              'Quieres recuperar tu cuerpo y también tu confianza'
            ].map((t, i) => (
              <li key={i} style={{ fontSize: '1rem', paddingBottom: '0.5rem' }}><Check size={16} />{t}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── TESTIMONIOS ── */}
      <section className="section" style={{ background: 'var(--peach)' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>
          <div className="text-center" style={{ marginBottom: '2.5rem' }}>
            <div className="t-label text-muted" style={{ marginBottom: '0.75rem' }}>Lo que dicen ellas</div>
            <h2 className="t-serif" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.25rem)', color: 'var(--black)' }}>Más de 3.000 mamás ya lo han hecho</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem' }}>
            {testimonios.map((t, i) => (
              <div key={i} className="testimonial-card">
                <p style={{ fontSize: '0.9rem', color: 'rgba(26,26,26,0.8)', lineHeight: 1.7, marginBottom: '1rem', fontStyle: 'italic' }}>"{t.text}"</p>
                <span style={{ fontWeight: 600, fontSize: '0.9rem', color: 'var(--coral)' }}>— {t.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ── */}
      <div className="cta-band">
        <div className="container-narrow text-center">
          <h2>¿Lista para la próxima edición?</h2>
          <p>Disponible solo del 11 al 14 de junio. Regístrate ahora para acceso prioritario y recibe gratis tu semana de ejercicios.</p>
          <button className="btn-white" onClick={() => document.getElementById('formulario')?.scrollIntoView({ behavior: 'smooth' })}>
            Quiero acceso prioritario
          </button>
        </div>
      </div>

    </div>
  );
}