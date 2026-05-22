import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Clock, Video, Users, Check, Heart, Target, Gift, Shield, Brain, Headphones } from 'lucide-react';

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
    { name: 'Estefanía L.', text: 'No fue solo recuperar fuerza… fue volver a confiar en mí, en mi cuerpo y en lo que es capaz de hacer.' },
    { name: 'Gema S.', text: 'Hacer el calendario y encontrar a Susana ha sido un regalo. Lo recomiendo 100%.' },
    { name: 'María J.', text: 'He notado mucho cambio al vestirme. Son pequeños logros pero es así como se consiguen las metas.' },
    { name: 'Laura M.', text: 'Nunca pensé que en solo 4 semanas notaría tanto cambio. Las rutinas son cortas pero muy efectivas. Me enganché desde el primer día.' },
    { name: 'Ana B.', text: 'Lo que más me gustó es que está todo pensado para madres reales. Sin excusas, sin equipamiento, desde casa. Repito seguro.' }
  ];

  return (
    <div style={{ paddingTop: 80 }}>

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
            <div className="t-label" style={{ color: 'rgba(255,255,255,0.8)', marginBottom: '0.75rem' }}>Próxima edición · Octubre 2026</div>
            <h1 className="t-serif" style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', lineHeight: 1.05, color: 'white', marginBottom: '1rem', fontWeight: 400 }}>
              Apúntate a la lista de espera
            </h1>
            <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.88)', lineHeight: 1.75, maxWidth: 520, margin: '0 auto 1.5rem' }}>
              El programa <strong style={{ color: 'white' }}>"Recupera tu cuerpo desde cero"</strong> abrirá de nuevo sus puertas a principios de octubre. Sé la primera en saberlo — con acceso prioritario y precio especial exclusivo.
            </p>
            <div className="flex justify-center flex-wrap gap-3" style={{ marginBottom: '2rem' }}>
              <span className="pill" style={{ background: 'rgba(255,255,255,0.15)', color: 'white', backdropFilter: 'blur(8px)' }}><Clock />4 semanas</span>
              <span className="pill" style={{ background: 'rgba(255,255,255,0.15)', color: 'white', backdropFilter: 'blur(8px)' }}><Video />Videos on-demand</span>
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
              <strong>Al apuntarte recibirás gratis</strong> un calendario de 1 semana de ejercicios para empezar ya.
            </p>
          </div>
          <div style={{ background: 'var(--white)', borderRadius: 8, padding: '2rem', boxShadow: '0 4px 32px rgba(0,0,0,0.08)' }}>
            <h2 className="t-serif" style={{ fontSize: '1.75rem', color: 'var(--black)', marginBottom: '0.4rem', fontWeight: 400 }}>Reserva tu plaza</h2>
            <p style={{ fontSize: '0.95rem', color: 'rgba(26,26,26,0.6)', marginBottom: '1.25rem', lineHeight: 1.6 }}>
              Al apuntarte recibirás gratis un calendario de 1 semana de ejercicios para empezar ya.
            </p>
            <div id="eo-form-container" />
            <p style={{ fontSize: '0.8rem', color: 'rgba(26,26,26,0.4)', marginTop: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem' }}>
              <Shield size={12} /> Sin spam. Solo te avisaré cuando abra la próxima edición — con precio especial exclusivo.
            </p>
          </div>
        </div>
      </section>

      {/* ── QUÉ INCLUYE ── */}
      <section className="section" style={{ background: 'var(--white)' }}>
        <div style={{ maxWidth: 800, margin: '0 auto', padding: '0 1.5rem' }}>
          <div className="text-center" style={{ marginBottom: '3rem' }}>
            <div className="t-label text-muted" style={{ marginBottom: '0.75rem' }}>Lo que conseguirás</div>
            <h2 className="t-serif" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', color: 'var(--black)' }}>Todo lo que incluye el programa</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem', marginBottom: '1.5rem' }}>
            {[
              { Icon: Target, title: 'Tonificación del abdomen', desc: 'Ejercicios exclusivos y progresivos diseñados específicamente para el abdomen postparto.' },
              { Icon: Heart, title: 'Suelo pélvico', desc: 'Trabajo adaptado para recuperar y fortalecer el suelo pélvico de forma correcta.' },
              { Icon: Video, title: 'Videos on-demand', desc: 'Accede cuando quieras, desde casa, sin horarios. Rutinas de 15-30 minutos.' },
              { Icon: Clock, title: '4 semanas guiadas', desc: 'Un plan claro semana a semana: conexión, activación, fortalecimiento y consolidación.' },
              { Icon: Brain, title: '🧠 Vídeo de motivación y confianza', desc: 'Semana 2 · Exclusivo. Para trabajar la confianza en ti misma y creer que lo mereces — y que puedes.' },
              { Icon: Headphones, title: '🎧 Audio de creencias', desc: 'Semana 2 · Exclusivo. Para reforzar que eres merecedora y válida para conseguir todo lo que te propones.' },
              { Icon: Gift, title: 'Bonus incluido', desc: 'Consejos prácticos para seguir recuperándote en tu día a día como madre.' },
              { Icon: Users, title: 'Comunidad', desc: 'Más de 3.000 mamás ya se han recuperado con este programa.' }
            ].map(({ Icon, title, desc }, i) => (
              <div key={i} style={{ background: i === 4 || i === 5 ? 'rgba(232,115,90,0.08)' : 'var(--beige)', borderRadius: 4, padding: '1.5rem', border: i === 4 || i === 5 ? '1px solid rgba(232,115,90,0.25)' : 'none' }}>
                <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'rgba(232,115,90,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                  <Icon size={18} style={{ color: 'var(--coral)' }} />
                </div>
                <h4 style={{ fontWeight: 600, fontSize: '1rem', marginBottom: '0.4rem' }}>{title}</h4>
                <p style={{ fontSize: '0.875rem', color: 'rgba(26,26,26,0.7)', lineHeight: 1.6 }}>{desc}</p>
              </div>
            ))}
          </div>

          {/* Nota diferenciadora */}
          <div style={{ background: 'var(--black)', borderRadius: 4, padding: '1.25rem 1.5rem', textAlign: 'center' }}>
            <p style={{ fontSize: '0.95rem', color: 'white', lineHeight: 1.65, margin: 0 }}>
              ✦ El único programa que trabaja <strong style={{ color: 'var(--coral)' }}>cuerpo y mente</strong> — el vídeo y el audio son contenidos exclusivos, no disponibles en ningún otro sitio ni en mis vídeos de YouTube.
            </p>
          </div>
        </div>
      </section>

      {/* ── PARA QUIÉN ── */}
      <section className="section" style={{ background: 'var(--beige)' }}>
        <div style={{ maxWidth: 680, margin: '0 auto', padding: '0 1.5rem' }}>
          <h2 className="t-serif text-center" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.25rem)', marginBottom: '2.5rem' }}>Este programa es para ti si…</h2>
          <ul className="check-list" style={{ maxWidth: 520, margin: '0 auto' }}>
            {[
              'Tuviste a tu bebé hace pocos meses y quieres empezar a recuperarte',
              'Tuviste a tus hijos hace años pero nunca te recuperaste del todo',
              'Quieres ejercicios seguros adaptados a tu cuerpo de madre',
              'Buscas rutinas cortas que puedas hacer desde casa',
              'Necesitas una guía clara, paso a paso, sin agobios',
              'Quieres volver a sentirte tú misma'
            ].map((t, i) => (
              <li key={i} style={{ fontSize: '1rem', paddingBottom: '0.5rem' }}><Check size={16} />{t}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── TESTIMONIOS ── */}
      <section className="section" style={{ background: 'var(--white)' }}>
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
          <p>Apúntate ahora y te avisamos antes que nadie — con precio especial.</p>
          <button className="btn-white" onClick={() => document.getElementById('formulario')?.scrollIntoView({ behavior: 'smooth' })}>
            Apuntarme a la lista de espera
          </button>
        </div>
      </div>

    </div>
  );
}