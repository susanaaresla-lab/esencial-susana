import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Clock, Video, Users, Check, Heart, Target, Gift, Shield, Brain, Headphones, PlayCircle, Sun } from 'lucide-react';
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
        <title>Lista de espera · Recupera tu cuerpo desde cero | Esencial Susana Ares</title>
        <meta name="description" content="Programa online de 4 semanas adaptado a parto y cesárea. Inscripciones abiertas el 1 de octubre. Apúntate y recibe gratis una semana de ejercicios." />
        <meta property="og:title" content="Recupera tu cuerpo después de cesárea — y también tu confianza" />
        <meta property="og:description" content="Programa online de 4 semanas adaptado a parto y cesárea. Inscripciones el 1 de octubre. Apúntate y recibe gratis una semana de ejercicios." />
        <meta property="og:image" content="https://esencialsusanaares.com/images/susana-og.jpg" />
        <meta property="og:url" content="https://esencialsusanaares.com/lista-espera" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Recupera tu cuerpo después de cesárea — y también tu confianza" />
        <meta name="twitter:description" content="Programa online de 4 semanas adaptado a parto y cesárea. Inscripciones el 1 de octubre." />
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
            <div className="t-label" style={{ color: 'rgba(255,255,255,0.8)', marginBottom: '0.75rem' }}>Inscripciones abiertas el 1 de octubre de 2026</div>
            <h1 className="t-serif" style={{ fontSize: 'clamp(2rem, 5vw, 3.75rem)', lineHeight: 1.1, color: 'white', marginBottom: '1rem', fontWeight: 400 }}>
              Recupera tu cuerpo después de cesárea — y también tu confianza
            </h1>
            <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.88)', lineHeight: 1.75, maxWidth: 560, margin: '0 auto 1.5rem' }}>
              Programa online de 4 semanas con ejercicios exclusivos adaptados a cesárea: abdomen, suelo pélvico y trabajo de mente. Apúntate y sé la primera en saberlo.
            </p>
            <div className="flex justify-center flex-wrap gap-3" style={{ marginBottom: '2rem' }}>
              <span className="pill" style={{ background: 'rgba(255,255,255,0.15)', color: 'white', backdropFilter: 'blur(8px)' }}><Clock />4 semanas</span>
              <span className="pill" style={{ background: 'rgba(255,255,255,0.15)', color: 'white', backdropFilter: 'blur(8px)' }}><Video />Parto y cesárea</span>
              <span className="pill" style={{ background: 'rgba(255,255,255,0.15)', color: 'white', backdropFilter: 'blur(8px)' }}><Users />+3.000 mamás</span>
            </div>
            <button
              className="btn-coral"
              style={{ fontSize: '1.05rem', padding: '1.1rem 2.5rem' }}
              onClick={() => document.getElementById('formulario')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Quiero apuntarme
            </button>
          </div>
        </div>
      </section>

      {/* ── FORMULARIO ── */}
      <section id="formulario" style={{ background: 'var(--peach)', padding: '4rem 1.5rem' }}>
        <div style={{ maxWidth: 520, margin: '0 auto', textAlign: 'center' }}>
          <div style={{ background: 'rgba(232,115,90,0.1)', border: '1px solid rgba(232,115,90,0.3)', borderRadius: 6, padding: '1rem 1.25rem', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '0.75rem', textAlign: 'left' }}>
            <span style={{ fontSize: '1.5rem' }}>🎁</span>
            <p style={{ fontSize: '0.95rem', color: 'var(--black)', lineHeight: 1.55, margin: 0 }}>
              <strong>Al apuntarte recibirás gratis</strong> un calendario de 1 semana de ejercicios adaptados para empezar ya — tanto si tuviste parto como cesárea.
            </p>
          </div>
          <div style={{ background: 'var(--white)', borderRadius: 8, padding: '2rem', boxShadow: '0 4px 32px rgba(0,0,0,0.08)' }}>
            <h2 className="t-serif" style={{ fontSize: '1.75rem', color: 'var(--black)', marginBottom: '0.4rem', fontWeight: 400 }}>Reserva tu plaza</h2>
            <p style={{ fontSize: '0.95rem', color: 'rgba(26,26,26,0.6)', marginBottom: '1.25rem', lineHeight: 1.6 }}>
              Las personas en lista de espera tienen acceso prioritario y precio especial exclusivo cuando abran las inscripciones el 1 de octubre.
            </p>
            <div id="eo-form-container" />
            <p style={{ fontSize: '0.8rem', color: 'rgba(26,26,26,0.4)', marginTop: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem' }}>
              <Shield size={12} /> Sin spam. Solo te avisaré cuando abran las inscripciones el 1 de octubre.
            </p>
          </div>
        </div>
      </section>

      {/* ── CÓMO ES UNA SEMANA ── */}
      <section style={{ background: 'var(--white)', padding: '3rem 1.5rem' }}>
        <div style={{ maxWidth: 680, margin: '0 auto' }}>
          <div className="text-center" style={{ marginBottom: '2rem' }}>
            <div className="t-label text-muted" style={{ marginBottom: '0.5rem' }}>Una pregunta frecuente</div>
            <h2 className="t-serif" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', color: 'var(--black)', fontWeight: 400 }}>¿Cómo es una semana típica del programa?</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1rem' }}>
            <div style={{ background: 'var(--beige)', borderRadius: 4, padding: '1.5rem', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
              <div style={{ width: 44, height: 44, borderRadius: '50%', background: 'rgba(232,115,90,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <PlayCircle size={20} style={{ color: 'var(--coral)' }} />
              </div>
              <div>
                <h4 style={{ fontWeight: 600, fontSize: '1rem', marginBottom: '0.4rem' }}>3 rutinas de ejercicio</h4>
                <p style={{ fontSize: '0.875rem', color: 'rgba(26,26,26,0.7)', lineHeight: 1.6 }}>
                  De 15 a 30 minutos cada una. Adaptadas a tu semana de recuperación, progresivas y seguras para cesárea y parto vaginal.
                </p>
              </div>
            </div>
            <div style={{ background: 'rgba(232,115,90,0.08)', borderRadius: 4, padding: '1.5rem', display: 'flex', gap: '1rem', alignItems: 'flex-start', border: '1px solid rgba(232,115,90,0.2)' }}>
              <div style={{ width: 44, height: 44, borderRadius: '50%', background: 'rgba(232,115,90,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Sun size={20} style={{ color: 'var(--coral)' }} />
              </div>
              <div>
                <h4 style={{ fontWeight: 600, fontSize: '1rem', marginBottom: '0.4rem' }}>1 vídeo cada domingo</h4>
                <p style={{ fontSize: '0.875rem', color: 'rgba(26,26,26,0.7)', lineHeight: 1.6 }}>
                  Para trabajar tu mente o acelerar tu recuperación física. Exclusivo, no lo encontrarás en YouTube.
                </p>
              </div>
            </div>
          </div>
          <p style={{ textAlign: 'center', fontSize: '0.875rem', color: 'rgba(26,26,26,0.5)', marginTop: '1.25rem' }}>
            Todo on-demand. Lo haces cuando puedes, a tu ritmo, sin presión.
          </p>
        </div>
      </section>

      {/* ── QUÉ INCLUYE ── */}
      <section className="section" style={{ background: 'var(--beige)', paddingTop: '2rem' }}>
        <div style={{ maxWidth: 800, margin: '0 auto', padding: '0 1.5rem' }}>
          <div className="text-center" style={{ marginBottom: '3rem' }}>
            <div className="t-label text-muted" style={{ marginBottom: '0.75rem' }}>Lo que conseguirás</div>
            <h2 className="t-serif" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', color: 'var(--black)' }}>Todo lo que incluye el programa</h2>
            <p style={{ fontSize: '1rem', color: 'rgba(26,26,26,0.6)', marginTop: '0.75rem', maxWidth: 520, margin: '0.75rem auto 0' }}>
              Especialmente diseñado para cesárea — y también para parto vaginal.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem', marginBottom: '1.5rem' }}>
            {[
              { Icon: Target, title: 'Tonificación del abdomen', desc: 'Ejercicios exclusivos adaptados a la recuperación postcesárea y postparto. Progresivos y seguros desde el principio.', highlight: false },
              { Icon: Heart, title: 'Suelo pélvico', desc: 'Trabajo adaptado a cesárea y parto vaginal para recuperar y fortalecer correctamente.', highlight: false },
              { Icon: Video, title: 'Videos on-demand', desc: 'Accede cuando quieras, desde casa, sin horarios. Rutinas de 15-30 minutos.', highlight: false },
              { Icon: Clock, title: '4 semanas guiadas', desc: 'Un plan progresivo semana a semana: conexión, activación, fortalecimiento y consolidación.', highlight: false },
              { Icon: Brain, title: '🧠 Vídeo de motivación y confianza', desc: 'Semana 2 · Exclusivo. Para trabajar la confianza en ti misma y en tu cuerpo después de la cesárea. Porque creer que puedes es el primer paso.', highlight: true },
              { Icon: Headphones, title: '🎧 Audio de creencias', desc: 'Semana 2 · Exclusivo. Para reforzar que eres merecedora y válida para recuperarte y conseguir todo lo que te propones.', highlight: true },
              { Icon: Gift, title: 'Bonus incluido', desc: 'Consejos prácticos para integrar en tu día a día como madre y seguir recuperándote sin hacer ejercicio.', highlight: false },
              { Icon: Users, title: '+3.000 mamás recuperadas', desc: 'Una comunidad real de mujeres que ya han pasado por lo mismo que tú — muchas de ellas con cesárea.', highlight: false }
            ].map(({ Icon, title, desc, highlight }, i) => (
              <div key={i} style={{
                background: highlight ? 'rgba(232,115,90,0.08)' : 'var(--white)',
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
              ✦ El único programa que trabaja <strong style={{ color: 'var(--coral)' }}>cuerpo y mente</strong> — el vídeo y el audio son contenidos exclusivos, no disponibles en ningún otro sitio ni en mis vídeos de YouTube.
            </p>
          </div>
        </div>
      </section>

      {/* ── PARA QUIÉN ── */}
      <section className="section" style={{ background: 'var(--white)' }}>
        <div style={{ maxWidth: 680, margin: '0 auto', padding: '0 1.5rem' }}>
          <h2 className="t-serif text-center" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.25rem)', marginBottom: '0.75rem' }}>Este programa es para ti si…</h2>
          <p style={{ textAlign: 'center', fontSize: '1rem', color: 'rgba(26,26,26,0.6)', marginBottom: '2.5rem' }}>
            Especialmente si tuviste cesárea — aunque también funciona para parto vaginal.
          </p>
          <ul className="check-list" style={{ maxWidth: 520, margin: '0 auto' }}>
            {[
              'Tuviste cesárea y no sabes cómo empezar a recuperarte sin hacerte daño',
              'Tu cicatriz de cesárea te genera inseguridad o no sabes cómo trabajarla',
              'Tuviste parto vaginal y quieres ejercicios seguros y adaptados',
              'Tu bebé tiene meses o años y todavía no te has recuperado del todo',
              'Buscas rutinas cortas que puedas hacer desde casa, sin equipamiento',
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
          <h2>¿Lista para el 1 de octubre?</h2>
          <p>Apúntate ahora, recibe gratis tu primera semana de ejercicios y sé la primera en saber cuándo abren las inscripciones.</p>
          <button className="btn-white" onClick={() => document.getElementById('formulario')?.scrollIntoView({ behavior: 'smooth' })}>
            Apuntarme a la lista de espera
          </button>
        </div>
      </div>

    </div>
  );
}