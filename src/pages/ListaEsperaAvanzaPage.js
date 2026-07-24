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
        <meta name="description" content="Programa de transformación postparto de 12 semanas. Única edición 2026. Solo 10 plazas. Precio especial de lanzamiento que no se repetirá." />
        <meta property="og:title" content="Método Esencial Madre: Avanza — 10 plazas · 5 octubre 2026" />
        <meta property="og:description" content="12 semanas para transformar tu cuerpo y tu mente siendo madre. Única edición 2026. Solo 10 plazas. Precio especial de lanzamiento." />
        <meta property="og:image" content="https://esencialsusanaares.com/images/susana-og.jpg" />
        <meta property="og:url" content="https://esencialsusanaares.com/lista-espera-avanza" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://esencialsusanaares.com/images/susana-og.jpg" />
      </Helmet>

      {/* ── HERO ── */}
      <section style={{ background: 'var(--beige)', position: 'relative', overflow: 'hidden', minHeight: '85vh', display: 'flex', alignItems: 'center' }}>
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
              ✦ 5 de octubre 2026 · Solo 10 plazas
            </div>
            <div className="t-label" style={{ color: 'var(--coral)', marginBottom: '0.5rem' }}>Método Esencial Madre</div>
            <h1 className="t-serif" style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', lineHeight: 1.05, color: 'var(--black)', marginBottom: '1.25rem', fontWeight: 400 }}>
              Avanza
            </h1>
            <p style={{ fontSize: '1.2rem', color: 'rgba(26,26,26,0.8)', lineHeight: 1.7, marginBottom: '0.75rem', fontStyle: 'italic' }}>
              "Porque reconectar fue el inicio. Ahora es el momento de transformarte."
            </p>
            <p style={{ fontSize: '1rem', color: 'rgba(26,26,26,0.7)', lineHeight: 1.7, marginBottom: '2rem' }}>
              12 semanas de transformación profunda — cuerpo y mente juntos. <strong style={{ color: 'var(--black)' }}>Especialmente diseñado para recuperación postcesárea</strong>, aunque también para parto vaginal. Para la madre que ya sabe que puede, y quiere más. <strong>Única edición de 2026. Solo 10 plazas. Precio especial de lanzamiento que no se repetirá.</strong>
            </p>
            <div className="flex flex-wrap gap-3" style={{ marginBottom: '1.25rem' }}>
              <span className="pill"><Clock />12 semanas · Online</span>
              <span className="pill"><Zap />Cuerpo + Mente</span>
              <span className="pill"><Users />Solo 10 plazas</span>
            </div>
            <p style={{ fontSize: '0.85rem', color: 'rgba(26,26,26,0.5)', marginBottom: '1.75rem', lineHeight: 1.6 }}>
              ⏱ 3-4 sesiones por semana · Especializado en cesárea · Desde 5 meses postcesárea · Desde 2 meses parto vaginal
            </p>
            <button
              className="btn-coral"
              style={{ fontSize: '1.1rem', padding: '1.1rem 2.5rem' }}
              onClick={() => document.getElementById('formulario')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Solicitar mi plaza
            </button>
            <p style={{ fontSize: '0.85rem', color: 'rgba(26,26,26,0.5)', marginTop: '0.75rem' }}>
              Comienza el 5 de octubre · Solo 10 plazas · Única edición 2026
            </p>
          </div>
        </div>
      </section>

      {/* ── PUENTE ENTRE PROGRAMAS ── */}
      <section style={{ background: 'var(--black)', padding: '3rem 1.5rem' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
            <div style={{ background: 'rgba(255,255,255,0.08)', borderRadius: 6, padding: '1rem 1.75rem', textAlign: 'center' }}>
              <p style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.45)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.3rem' }}>Paso 1 · 4 semanas</p>
              <p style={{ fontWeight: 600, color: 'rgba(255,255,255,0.75)', fontSize: '0.95rem' }}>Actívate</p>
              <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.4)', marginTop: '0.2rem' }}>Reconecta con tu cuerpo</p>
            </div>
            <ArrowRight size={22} style={{ color: 'var(--coral)', flexShrink: 0 }} />
            <div style={{ background: 'var(--coral)', borderRadius: 6, padding: '1rem 1.75rem', textAlign: 'center' }}>
              <p style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.85)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.3rem' }}>Paso 2 · 12 semanas</p>
              <p style={{ fontWeight: 700, color: 'white', fontSize: '0.95rem' }}>Avanza</p>
              <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.85)', marginTop: '0.2rem' }}>Transforma tu cuerpo y tu mente</p>
            </div>
          </div>

          <div style={{ background: 'rgba(255,255,255,0.05)', borderRadius: 8, padding: '2rem', border: '1px solid rgba(255,255,255,0.08)', textAlign: 'center' }}>
            <p style={{ fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--coral)', marginBottom: '0.75rem' }}>Qué es Avanza</p>
            <p style={{ fontSize: '1.1rem', color: 'white', lineHeight: 1.75, maxWidth: 580, margin: '0 auto 1.25rem', fontWeight: 400 }}>
              Un programa online de <strong style={{ color: 'var(--coral)' }}>12 semanas</strong> con 3-4 sesiones por semana — entrenamientos guiados progresivos y trabajo de mente semanal — para madres que quieren transformarse de verdad, por dentro y por fuera.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.75rem' }}>
              {['12 semanas · Online', 'Especializado en cesárea', 'Con y sin impacto', 'Abdomen y core', 'Suelo pélvico', 'Domingo de Mente', 'Sesiones Avanza en directo', 'Solo 10 plazas'].map((tag, i) => (
                <span key={i} style={{ background: 'rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.75)', fontSize: '0.8rem', padding: '0.35rem 0.85rem', borderRadius: 999, border: '1px solid rgba(255,255,255,0.12)' }}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── EXCLUSIVIDAD ── */}
      <section className="section" style={{ background: 'var(--white)' }}>
        <div style={{ maxWidth: 680, margin: '0 auto', padding: '0 1.5rem', textAlign: 'center' }}>
          <div className="t-label text-muted" style={{ marginBottom: '0.75rem' }}>Por qué solo 10 plazas</div>
          <h2 className="t-serif" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', color: 'var(--black)', marginBottom: '1.25rem' }}>
            Un programa exclusivo.<br />No es para todo el mundo.
          </h2>
          <p style={{ fontSize: '1.05rem', color: 'rgba(26,26,26,0.75)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
            Avanza es la única edición de 2026 y arranca el 5 de octubre. Solo habrá 10 plazas — para garantizar la atención y el acompañamiento que cada madre merece. Las inscripciones requieren una selección previa para asegurarnos de que es el momento adecuado para ti.
          </p>
          <div style={{ background: 'rgba(232,115,90,0.08)', border: '1px solid rgba(232,115,90,0.2)', borderRadius: 6, padding: '0.75rem 1.25rem', display: 'inline-block', marginBottom: '2rem' }}>
            <p style={{ fontSize: '0.875rem', color: 'var(--coral)', fontWeight: 600, margin: 0 }}>
              ✦ El único programa online que trabaja la recuperación postcesárea desde dentro — cuerpo y mente juntos durante 12 semanas
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
            {[
              { emoji: '🎯', title: 'Solo 10 plazas', desc: 'Para garantizar la calidad del acompañamiento y la comunidad.' },
              { emoji: '✅', title: 'Selección previa', desc: 'Una conversación breve para asegurarnos de que Avanza es lo que necesitas ahora.' },
              { emoji: '🌟', title: 'Acompañamiento real', desc: '6 Sesiones Avanza en directo, email semanal y comunidad privada durante 12 semanas.' }
            ].map((item, i) => (
              <div key={i} style={{ background: 'var(--beige)', borderRadius: 8, padding: '1.75rem', textAlign: 'center' }}>
                <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>{item.emoji}</div>
                <h4 style={{ fontWeight: 600, fontSize: '1rem', marginBottom: '0.5rem' }}>{item.title}</h4>
                <p style={{ fontSize: '0.875rem', color: 'rgba(26,26,26,0.65)', lineHeight: 1.6 }}>{item.desc}</p>
              </div>
            ))}
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
                <strong>Acceso prioritario</strong> — serás la primera en ser informada cuando abran las solicitudes, con el <strong style={{ color: 'var(--coral)' }}>precio especial de lanzamiento que nunca se repetirá</strong>.
              </p>
            </div>
            <div style={{ background: 'rgba(232,115,90,0.1)', border: '1px solid rgba(232,115,90,0.3)', borderRadius: 6, padding: '1rem 1.25rem', display: 'flex', alignItems: 'flex-start', gap: '0.75rem', textAlign: 'left' }}>
              <span style={{ fontSize: '1.25rem', flexShrink: 0 }}>📅</span>
              <p style={{ fontSize: '0.95rem', color: 'var(--black)', lineHeight: 1.55, margin: 0 }}>
                <strong>Única edición de 2026</strong> — el programa comienza el lunes 5 de octubre. Solo 10 plazas con selección previa.
              </p>
            </div>
          </div>

          <div style={{ background: 'var(--white)', borderRadius: 8, padding: '2rem', boxShadow: '0 4px 32px rgba(0,0,0,0.08)' }}>
            <h2 className="t-serif" style={{ fontSize: '1.75rem', color: 'var(--black)', marginBottom: '0.4rem', fontWeight: 400 }}>Quiero acceso prioritario</h2>
            <p style={{ fontSize: '0.95rem', color: 'rgba(26,26,26,0.6)', marginBottom: '1.25rem', lineHeight: 1.6 }}>
              Comienza el 5 de octubre. Solo 10 plazas.
            </p>
            <div id="eo-form-avanza" />
            <p style={{ fontSize: '0.8rem', color: 'rgba(26,26,26,0.4)', marginTop: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem' }}>
              <Shield size={12} /> Sin spam. Solo te contactaremos cuando abran las solicitudes.
            </p>
          </div>
        </div>
      </section>

      {/* ── QUÉ INCLUYE ── */}
      <section className="section" style={{ background: 'var(--white)' }}>
        <div style={{ maxWidth: 860, margin: '0 auto', padding: '0 1.5rem' }}>
          <div className="text-center" style={{ marginBottom: '3rem' }}>
            <div className="t-label text-muted" style={{ marginBottom: '0.5rem' }}>Todo lo que incluye</div>
            <h2 className="t-serif" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', color: 'var(--black)', marginBottom: '1rem' }}>
              No es más de lo mismo.<br />Es ir más profundo.
            </h2>
            <p style={{ fontSize: '1.05rem', color: 'rgba(26,26,26,0.7)', lineHeight: 1.75, maxWidth: 560, margin: '0 auto' }}>
              Actívate fue el primer paso. Avanza es donde ocurre la transformación real — 12 semanas con ejercicios específicamente adaptados a la recuperación postcesárea, que también funcionan para parto vaginal.
            </p>
          </div>

          {/* Bloque cuerpo */}
          <div style={{ marginBottom: '2rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <div style={{ width: 36, height: 2, background: 'var(--coral)' }} />
              <p style={{ fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--coral)' }}>Trabajo físico · 3 entrenamientos semanales</p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
              {[
                { emoji: '🟢', title: 'Mes 1 · Base', desc: 'Core profundo, suelo pélvico, respiración, fuerza funcional sin impacto e hipopresivos.' },
                { emoji: '🟡', title: 'Mes 2 · Evolución', desc: 'Impacto progresivo, control corporal y coordinación. Tu cuerpo ya está preparada.' },
                { emoji: '🔴', title: 'Mes 3 · Transformación', desc: 'Impacto integrado, fuerza y resistencia. Mayor intensidad funcional para ver y sentir la diferencia.' }
              ].map((item, i) => (
                <div key={i} style={{ background: 'var(--beige)', borderRadius: 8, padding: '1.5rem', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <span style={{ fontSize: '1.25rem', flexShrink: 0, lineHeight: 1, marginTop: 2 }}>{item.emoji}</span>
                  <div>
                    <h4 style={{ fontWeight: 600, fontSize: '1rem', marginBottom: '0.4rem', color: 'var(--black)' }}>{item.title}</h4>
                    <p style={{ fontSize: '0.875rem', color: 'rgba(26,26,26,0.7)', lineHeight: 1.6 }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bloque mente */}
          <div style={{ marginBottom: '2rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <div style={{ width: 36, height: 2, background: 'var(--coral)' }} />
              <p style={{ fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--coral)' }}>Domingo de Mente · 1 sesión semanal</p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
              {[
                { emoji: '🔍', title: 'Fase 1 · Identifica', desc: 'Quién soy ahora, creencias, miedos y conexión con mi cuerpo siendo madre.' },
                { emoji: '🧠', title: 'Fase 2 · Procesa y suelta', desc: 'La culpa, la autoexigencia, la comparación. Todo lo que tu parto o cesárea dejó dentro.' },
                { emoji: '✨', title: 'Fase 3 · Construye', desc: 'Confianza, hábitos, energía y la mejor versión de ti siendo madre.' }
              ].map((item, i) => (
                <div key={i} style={{ background: 'rgba(232,115,90,0.06)', border: '1px solid rgba(232,115,90,0.2)', borderRadius: 8, padding: '1.5rem' }}>
                  <span style={{ fontSize: '1.5rem', display: 'block', marginBottom: '0.75rem' }}>{item.emoji}</span>
                  <h4 style={{ fontWeight: 600, fontSize: '1rem', marginBottom: '0.4rem', color: 'var(--coral)' }}>{item.title}</h4>
                  <p style={{ fontSize: '0.875rem', color: 'rgba(26,26,26,0.7)', lineHeight: 1.6 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Bloque acompañamiento */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <div style={{ width: 36, height: 2, background: 'var(--coral)' }} />
              <p style={{ fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--coral)' }}>Acompañamiento</p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem', marginBottom: '1.5rem' }}>
              {[
                { emoji: '🎙️', title: '6 Sesiones Avanza en directo', desc: 'Cada 2 semanas — formación, dudas y check-in de progreso integrado.' },
                { emoji: '👥', title: 'Comunidad privada', desc: 'Un espacio de apoyo entre madres durante las 12 semanas del programa.' },
                { emoji: '🎁', title: '3 Bonus incluidos', desc: 'Alimentación postparto, autoevaluación de diástasis y suelo pélvico en movimiento.' }
              ].map((item, i) => (
                <div key={i} style={{ background: 'var(--beige)', borderRadius: 8, padding: '1.5rem', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <span style={{ fontSize: '1.5rem', flexShrink: 0, lineHeight: 1 }}>{item.emoji}</span>
                  <div>
                    <h4 style={{ fontWeight: 600, fontSize: '1rem', marginBottom: '0.4rem' }}>{item.title}</h4>
                    <p style={{ fontSize: '0.875rem', color: 'rgba(26,26,26,0.7)', lineHeight: 1.6 }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Bloque 1:1 opcional */}
            <div style={{ background: 'var(--black)', borderRadius: 10, padding: '2rem', border: '2px solid var(--coral)', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: 0, right: 0, background: 'var(--coral)', color: 'white', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', padding: '0.35rem 1rem', borderBottomLeftRadius: 8 }}>
                Opcional
              </div>
              <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start', flexWrap: 'wrap' }}>
                <div style={{ width: 52, height: 52, borderRadius: '50%', background: 'rgba(232,115,90,0.2)', border: '1px solid rgba(232,115,90,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontSize: '1.5rem' }}>
                  🌟
                </div>
                <div style={{ flex: 1, minWidth: 220 }}>
                  <h4 style={{ fontWeight: 700, fontSize: '1.1rem', color: 'white', marginBottom: '0.5rem' }}>2 sesiones personalizadas 1:1 con Susana</h4>
                  <p style={{ fontSize: '0.925rem', color: 'rgba(255,255,255,0.75)', lineHeight: 1.7, marginBottom: '1rem' }}>
                    Para las madres que quieren ir aún más lejos y personalizar el programa a su situación concreta.
                  </p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                    <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                      <span style={{ color: 'var(--coral)', fontWeight: 700, flexShrink: 0, marginTop: 1 }}>①</span>
                      <p style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.6, margin: 0 }}>
                        <strong style={{ color: 'white' }}>Sesión de inicio</strong> — para conocer tu situación, adaptar el programa a ti y empezar con un plan 100% personalizado.
                      </p>
                    </div>
                    <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                      <span style={{ color: 'var(--coral)', fontWeight: 700, flexShrink: 0, marginTop: 1 }}>②</span>
                      <p style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.6, margin: 0 }}>
                        <strong style={{ color: 'white' }}>Sesión de seguimiento</strong> — durante el programa para revisar tu progreso, ajustar y asegurarnos de que vas en la dirección correcta.
                      </p>
                    </div>
                  </div>
                  <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.4)', marginTop: '1rem', fontStyle: 'italic' }}>
                    ✦ Esta opción se comentará durante la entrevista de selección.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── DIFERENCIADOR MENTE ── */}
      <section className="section" style={{ background: 'var(--black)' }}>
        <div style={{ maxWidth: 700, margin: '0 auto', padding: '0 1.5rem', textAlign: 'center' }}>
          <div style={{ fontSize: '0.85rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--coral)', marginBottom: '0.75rem' }}>El diferencial de Avanza</div>
          <h2 className="t-serif" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', color: 'white', marginBottom: '1.25rem', lineHeight: 1.2, fontWeight: 400 }}>
            El cuerpo y la mente<br />van siempre juntos.
          </h2>
          <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.75)', lineHeight: 1.8, marginBottom: '3rem' }}>
            La mayoría de programas trabajan solo el físico. Avanza va más allá: porque después de ser madre — sea cual sea tu experiencia de parto o cesárea — hay cosas que el cuerpo no puede sanar solo.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', textAlign: 'left' }}>
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
                La culpa, la frustración, todo lo que tu parto o tu cesárea dejó dentro. Para que puedas soltarlo y avanzar libre.
              </p>
            </div>
            <div style={{ background: 'rgba(232,115,90,0.15)', borderRadius: 8, padding: '1.75rem', border: '1px solid rgba(232,115,90,0.3)' }}>
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
              'Ya completaste el Método Esencial Madre: Actívate',
              'Han pasado al menos 5 meses desde tu cesárea, o 2 meses desde un parto vaginal',
              'Quieres subir la intensidad con rutinas progresivas de forma segura',
              'Sientes que todavía tienes diástasis o que tu core necesita más trabajo',
              'Hay experiencias de tu parto o cesárea que todavía no has procesado del todo',
              'Quieres trabajar la confianza, la seguridad y construir tu mejor versión',
              'Estás lista para comprometerte 12 semanas contigo misma'
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
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.95rem', color: 'rgba(26,26,26,0.8)', lineHeight: 1.7 }}>
                <p>Soy mamá de tres hijos. Tuve una cesárea y me he recuperado de tres embarazos y dos partos. Sé exactamente lo que sientes — no como experta desde un escenario, sino como madre que lo ha vivido desde dentro.</p>
                <p>Eso es lo que me hace diferente. <strong style={{ color: 'var(--black)' }}>No soy una entrenadora más.</strong> Soy una madre que pasó por la cesárea, que tardó en reconocerse en el espejo, que tuvo que aprender a recuperarse — y que después se formó como especialista en recuperación postcesárea y postparto e instructora de pilates terapéutico para poder acompañar a otras madres desde ese mismo lugar.</p>
                <p>Por eso Avanza está construido desde la cesárea hacia afuera — no como un programa genérico al que se le añade una nota sobre cicatrices, sino como un método específico que entiende tu cuerpo de madre desde la primera semana.</p>
                <p>He acompañado a más de <strong style={{ color: 'var(--coral)' }}>3.000 mamás</strong> a recuperarse. Avanza es el programa donde voy más lejos contigo.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ── */}
      <div className="cta-band">
        <div className="container-narrow text-center">
          <h2>Tu transformación no ha terminado.<br />Acaba de empezar.</h2>
          <p style={{ marginBottom: '2rem', opacity: 0.9 }}>Método Esencial Madre: Avanza — comienza el 5 de octubre. Solo 10 plazas. Precio especial de lanzamiento que no se repetirá. Solicita la tuya ahora.</p>
          <button className="btn-white" onClick={() => document.getElementById('formulario')?.scrollIntoView({ behavior: 'smooth' })}>
            Solicitar mi plaza
          </button>
        </div>
      </div>

    </div>
  );
}