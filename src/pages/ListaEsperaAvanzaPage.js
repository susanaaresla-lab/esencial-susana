
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Clock, Users, Check, X, ChevronDown, Zap, ShieldCheck, Star } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { useState } from 'react';

const CHECKOUT_URL = 'https://pay.hotmart.com/B106868973I?off=sc34hatr';
// const CHECKOUT_URL_1TO1 = 'https://pay.hotmart.com/B106868973I?off=2qrh0bwb';

const FAQS = [
  { q: '¿Necesito haber hecho Actívate para poder hacer Avanza?', a: 'Sí, Avanza está diseñado como continuación de Actívate. Necesitas tener la base de recuperación postparto antes de introducir rutinas de impacto.' },
  { q: '¿Desde cuándo puedo empezar?', a: 'Desde los 5 meses postparto. Avanza tiene mayor intensidad con rutinas de impacto, por lo que tu cuerpo necesita esa base previa.' },
  { q: '¿Cuándo puedo empezar después de terminar Actívate?', a: 'Puedes empezar justo al terminar Actívate, siempre que hayas cumplido los 5 meses postparto. Es modelo evergreen — sin esperar a una cohorte.' },
  { q: '¿En qué se diferencia de Actívate?', a: 'El contenido es 100% diferente. Actívate es sin impacto, para empezar desde cero. Avanza introduce rutinas de impacto progresivo, mayor intensidad y trabajo de mente más profundo. Sin contenido duplicado.' },
  { q: '¿Puedo pagar a plazos?', a: 'Sí. Al hacer clic en el botón puedes elegir entre pago único o pago a plazos según lo que mejor se adapte a ti.' },
  { q: '¿Qué es el Domingo de Mente?', a: 'Una sesión semanal de trabajo mental — identifica tus limitaciones, procesa lo que pesa y construye tu mejor versión. Es el diferencial único de Avanza.' },
  { q: '¿Hay directos en vivo?', a: 'Sí, 1 directo mensual con calendario fijo. Siempre se graba y se añade a una biblioteca de replays para que no te pierdas nada.' },
  { q: '¿Las asesorías 1:1 están incluidas?', a: 'Las 2 asesorías 1:1 son opcionales — disponibles en el paquete de €699. El programa base es €499 sin asesorías.' },
];

const label = (color) => ({
  fontSize: '0.9rem', fontWeight: 700, letterSpacing: '0.15em',
  textTransform: 'uppercase', color: color || 'rgba(26,26,26,0.5)', marginBottom: '0.75rem'
});

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div onClick={() => setOpen(!open)} style={{ borderBottom: '1px solid rgba(26,26,26,0.1)', cursor: 'pointer', padding: '1.25rem 0' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem' }}>
        <p style={{ fontWeight: 600, fontSize: '1.05rem', color: 'var(--black)', lineHeight: 1.4 }}>{q}</p>
        <ChevronDown size={18} style={{ color: 'var(--coral)', flexShrink: 0, transform: open ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s ease' }} />
      </div>
      {open && <p style={{ fontSize: '1rem', color: 'rgba(26,26,26,0.75)', lineHeight: 1.75, marginTop: '0.75rem' }}>{a}</p>}
    </div>
  );
}

export default function ListaEsperaAvanzaPage() {
  const navigate = useNavigate();

  const goComprar = () => {
    localStorage.setItem('avanza_purchase_price', '499');
    localStorage.setItem('avanza_purchase_product', 'Método Esencial Madre: Avanza');
    window.open(CHECKOUT_URL, '_blank');
  };

  return (
    <div style={{ paddingTop: 80 }}>

      <Helmet>
        <title>Método Esencial Madre: Avanza | El siguiente nivel | Esencial Susana Ares</title>
        <meta name="description" content="Programa de 3 meses para madres que completaron Actívate. Rutinas de impacto progresivo, Domingo de Mente semanal y modelo evergreen. €499 o €699 con asesorías 1:1." />
        <meta property="og:title" content="Método Esencial Madre: Avanza — El siguiente nivel" />
        <meta property="og:description" content="3 meses para transformar tu cuerpo y tu mente. La continuación de Actívate con rutinas de impacto y trabajo de mente profundo." />
        <meta property="og:image" content="https://esencialsusanaares.com/images/susana-og-new.jpg" />
        <meta property="og:url" content="https://esencialsusanaares.com/lista-espera-avanza" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://esencialsusanaares.com/images/susana-og-new.jpg" />
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
              ✦ El siguiente nivel · Continuación de Actívate
            </div>
            <div className="t-label" style={{ color: 'var(--coral)', marginBottom: '0.5rem' }}>Método Esencial Madre</div>
            <h1 className="t-serif" style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', lineHeight: 1.05, color: 'var(--black)', marginBottom: '1.25rem', fontWeight: 400 }}>
              Avanza
            </h1>
            <p style={{ fontSize: '1.2rem', color: 'rgba(26,26,26,0.8)', lineHeight: 1.7, marginBottom: '0.75rem', fontStyle: 'italic' }}>
              "Porque reconectar fue el inicio. Ahora es el momento de transformarte."
            </p>
            <p style={{ fontSize: '1rem', color: 'rgba(26,26,26,0.7)', lineHeight: 1.7, marginBottom: '1.5rem' }}>
              3 meses de programa online con rutinas de impacto progresivo y trabajo de mente semanal. Contenido 100% diferente a Actívate. Empieza justo al terminar — sin esperas.
            </p>
            <div className="flex flex-wrap gap-3" style={{ marginBottom: '1.25rem' }}>
              <span className="pill"><Clock />3 meses · Online</span>
              <span className="pill"><Zap />Con impacto</span>
              <span className="pill"><Users />Desde 5 meses postparto</span>
            </div>
            <p style={{ fontSize: '0.85rem', color: 'rgba(26,26,26,0.5)', marginBottom: '1.75rem', lineHeight: 1.6 }}>
              Especializado en cesárea y parto vaginal · Contenido 100% diferente a Actívate 
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
              <span style={{ fontSize: '1rem', color: 'rgba(26,26,26,0.35)', textDecoration: 'line-through' }}>≈ €1.650</span>
              <span style={{ fontFamily: 'var(--serif)', fontSize: '2.5rem', color: 'var(--coral)', fontWeight: 600, lineHeight: 1 }}>€499</span>
              <span style={{ fontSize: '0.85rem', background: 'rgba(232,115,90,0.12)', color: 'var(--coral)', fontWeight: 700, padding: '0.3rem 0.7rem', borderRadius: 4 }}>-70%</span>
            </div>
              
            </div>
            <p style={{ fontSize: '0.85rem', color: 'rgba(26,26,26,0.5)', marginBottom: '1.5rem' }}>Pago único o a plazos</p>
            <button className="btn-coral" style={{ fontSize: '1.1rem', padding: '1.1rem 2.5rem' }} onClick={goComprar}>
              Quiero empezar Avanza
            </button>
            <p style={{ fontSize: '0.875rem', color: 'rgba(26,26,26,0.6)', marginTop: '0.75rem' }}>
              ✅ Pago único o a plazos · ✅ Acceso inmediato
            </p>
          </div>
        </div>
      </section>

      {/* ── PUENTE ACTÍVATE → AVANZA ── */}
      <section style={{ background: 'var(--black)', padding: '3rem 1.5rem' }}>
        <div style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
            <div style={{ background: 'rgba(255,255,255,0.08)', borderRadius: 6, padding: '1rem 1.75rem', textAlign: 'center' }}>
              <p style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.45)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.3rem' }}>Paso 1 · 4 semanas</p>
              <p style={{ fontWeight: 600, color: 'rgba(255,255,255,0.75)', fontSize: '0.95rem' }}>Actívate ✓</p>
              <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.4)', marginTop: '0.2rem' }}>Base sin impacto</p>
            </div>
            <span style={{ color: 'var(--coral)', fontSize: '1.5rem', fontWeight: 700 }}>→</span>
            <div style={{ background: 'var(--coral)', borderRadius: 6, padding: '1rem 1.75rem', textAlign: 'center' }}>
              <p style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.85)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.3rem' }}>Paso 2 · 3 meses</p>
              <p style={{ fontWeight: 700, color: 'white', fontSize: '0.95rem' }}>Avanza</p>
              <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.85)', marginTop: '0.2rem' }}>Impacto + transformación</p>
            </div>
          </div>
          <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.7 }}>
            La continuación natural de Actívate. Empieza cuando termines.
          </p>
        </div>
      </section>

      {/* ── POR QUÉ AVANZA ── */}
      <section className="section" style={{ background: 'var(--beige)' }}>
        <div className="container-narrow">
          <div className="text-center" style={{ marginBottom: '2.5rem' }}>
            <div style={label()}>¿Por qué Avanza?</div>
            <h2 className="t-serif" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', lineHeight: 1.2 }}>
              Completaste Actívate. <em className="text-coral">Ahora quieres más.</em>
            </h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {[
              { emoji: '💪', title: 'Quieres subir la intensidad de forma segura', desc: 'Ya tienes la base. Avanza introduce rutinas de impacto progresivo para que tu cuerpo siga evolucionando sin riesgo.' },
              { emoji: '🧠', title: 'Hay trabajo de mente pendiente', desc: 'Hay cosas que el cuerpo no puede sanar solo. El Domingo de Mente te acompaña cada semana durante los 3 meses.' },
              { emoji: '🔄', title: 'No quieres esperar meses para empezar', desc: 'Avanza es evergreen — empiezas justo cuando terminas Actívate y cumples el requisito de los 5 meses postparto.' },
              { emoji: '🎯', title: 'Quieres contenido nuevo, no repetir lo mismo', desc: 'El contenido de Avanza es 100% diferente al de Actívate. Diseñado a propósito para que sigas progresando.' },
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '1.25rem', background: 'var(--white)', borderRadius: 6, padding: '1.25rem 1.5rem', boxShadow: '0 1px 6px rgba(0,0,0,0.06)' }}>
                <div style={{ fontSize: '1.75rem', lineHeight: 1, flexShrink: 0 }}>{item.emoji}</div>
                <div>
                  <h4 style={{ fontSize: '1.05rem', fontWeight: 600, color: 'var(--black)', marginBottom: '0.4rem' }}>{item.title}</h4>
                  <p style={{ fontSize: '0.95rem', color: 'rgba(26,26,26,0.7)', lineHeight: 1.7, margin: 0 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LOS 3 MESES ── */}
      <section className="section" style={{ background: 'var(--white)' }}>
        <div className="container-mid">
          <div className="text-center" style={{ marginBottom: '2.5rem' }}>
            <div style={label()}>El programa</div>
            <h2 className="t-serif" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.25rem)' }}>3 meses de progresión real</h2>
            <p style={{ fontSize: '1rem', color: 'rgba(26,26,26,0.6)', marginTop: '0.75rem', maxWidth: 520, margin: '0.75rem auto 0' }}>
              Cada mes tiene un objetivo claro. Más intensidad, más profundidad, más transformación.
            </p>
          </div>

          {/* Bloques físico */}
          <div style={{ marginBottom: '2rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <div style={{ width: 36, height: 2, background: 'var(--coral)' }} />
              <p style={{ fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--coral)' }}>Trabajo físico · 3-4 sesiones semanales</p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
              {[
                { mes: 'Mes 1', color: '#22c55e', title: 'Base', desc: 'Más intenso que Actívate. Core profundo, suelo pélvico, respiración y fuerza funcional sin impacto.' },
                { mes: 'Mes 2', color: '#f59e0b', title: 'Evolución', desc: 'Introducción progresiva del impacto. Control corporal, coordinación y resistencia.' },
                { mes: 'Mes 3', color: '#E8735A', title: 'Transformación', desc: 'Impacto integrado, fuerza y resistencia. Mayor intensidad para ver y sentir la diferencia.' },
              ].map((item, i) => (
                <div key={i} style={{ background: 'var(--beige)', borderRadius: 8, padding: '1.5rem', borderTop: `4px solid ${item.color}` }}>
                  <div style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: item.color, marginBottom: '0.4rem' }}>{item.mes}</div>
                  <h3 style={{ fontWeight: 700, fontSize: '1.1rem', color: 'var(--black)', marginBottom: '0.5rem' }}>{item.title}</h3>
                  <p style={{ fontSize: '0.875rem', color: 'rgba(26,26,26,0.7)', lineHeight: 1.6 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Domingo de Mente */}
          <div style={{ marginBottom: '2rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <div style={{ width: 36, height: 2, background: 'var(--coral)' }} />
              <p style={{ fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--coral)' }}>Domingo de Mente · 1 sesión semanal</p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
              {[
                { emoji: '🔍', title: 'Fase 1 · Identifica', desc: 'Qué miedos y limitaciones se han quedado en ti como madre, mujer y persona.' },
                { emoji: '🧠', title: 'Fase 2 · Procesa y suelta', desc: 'La culpa, la frustración, todo lo que tu parto o cesárea dejó dentro.' },
                { emoji: '✨', title: 'Fase 3 · Construye', desc: 'Seguridad, confianza y tu mejor versión. No para volver a ser la de antes.' },
              ].map((item, i) => (
                <div key={i} style={{ background: 'rgba(232,115,90,0.06)', border: '1px solid rgba(232,115,90,0.2)', borderRadius: 8, padding: '1.5rem' }}>
                  <span style={{ fontSize: '1.5rem', display: 'block', marginBottom: '0.75rem' }}>{item.emoji}</span>
                  <h4 style={{ fontWeight: 600, fontSize: '1rem', marginBottom: '0.4rem', color: 'var(--coral)' }}>{item.title}</h4>
                  <p style={{ fontSize: '0.875rem', color: 'rgba(26,26,26,0.7)', lineHeight: 1.6 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Acompañamiento */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <div style={{ width: 36, height: 2, background: 'var(--coral)' }} />
              <p style={{ fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--coral)' }}>Acompañamiento</p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
              {[
                { emoji: '🎙️', title: '1 directo mensual', desc: 'Calendario fijo, abierto a todas las alumnas activas. Siempre grabado con biblioteca de replays.' },
                { emoji: '👥', title: 'Comunidad privada', desc: 'Un espacio de apoyo entre madres durante los 3 meses del programa.' },
                { emoji: '🎁', title: '3 bonus integrados', desc: 'Integrados en los domingos del programa para que no sean contenido extra sino parte del camino.' },
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
            <div style={{ background: 'var(--black)', borderRadius: 10, padding: '2rem', border: '2px solid var(--coral)', position: 'relative', overflow: 'hidden', marginTop: '1rem' }}>
              <div style={{ position: 'absolute', top: 0, right: 0, background: 'var(--coral)', color: 'white', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', padding: '0.35rem 1rem', borderBottomLeftRadius: 8 }}>
                Opcional
              </div>
              <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start', flexWrap: 'wrap' }}>
                <div style={{ width: 52, height: 52, borderRadius: '50%', background: 'rgba(232,115,90,0.2)', border: '1px solid rgba(232,115,90,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontSize: '1.5rem' }}>🌟</div>
                <div style={{ flex: 1, minWidth: 220 }}>
                  <h4 style={{ fontWeight: 700, fontSize: '1.1rem', color: 'white', marginBottom: '0.5rem' }}>2 asesorías 1:1 con Susana (+€200)</h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                    <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                      <span style={{ color: 'var(--coral)', fontWeight: 700, flexShrink: 0 }}>①</span>
                      <p style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.6, margin: 0 }}><strong style={{ color: 'white' }}>Sesión de inicio</strong> — para personalizar el programa a tu situación concreta.</p>
                    </div>
                    <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                      <span style={{ color: 'var(--coral)', fontWeight: 700, flexShrink: 0 }}>②</span>
                      <p style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.6, margin: 0 }}><strong style={{ color: 'white' }}>Sesión de seguimiento</strong> — a mitad del programa para revisar tu progreso y ajustar.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── MENTE + CUERPO ── */}
      <section style={{ background: 'var(--black)', padding: '4rem 1.5rem' }}>
        <div style={{ maxWidth: 700, margin: '0 auto', textAlign: 'center' }}>
          <div style={{ fontSize: '0.85rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--coral)', marginBottom: '0.75rem' }}>El diferencial de Avanza</div>
          <h2 className="t-serif" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', color: 'white', marginBottom: '1.25rem', fontWeight: 400 }}>
            El cuerpo y la mente<br />van siempre juntos.
          </h2>
          <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.75)', lineHeight: 1.8 }}>
            La mayoría de programas trabajan solo el físico. Avanza va más allá: porque después de ser madre — sea cual sea tu experiencia de parto o cesárea — hay cosas que el cuerpo no puede sanar solo.
          </p>
        </div>
      </section>

      {/* ── PARA QUIÉN ── */}
      <section className="section" style={{ background: 'var(--beige)' }}>
        <div className="container-narrow">
          <h2 className="t-serif text-center" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.25rem)', marginBottom: '2.5rem' }}>Avanza es para ti si…</h2>
          <div className="grid-2">
            <div style={{ background: 'rgba(242,237,230,0.5)', borderRadius: 2, padding: '1.5rem' }}>
              <h4 style={{ fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', fontSize: '1.05rem' }}>
                <Check size={18} style={{ color: 'var(--coral)' }} /> ES para ti si…
              </h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.95rem', color: 'rgba(26,26,26,0.8)' }}>
                <li>• Ya completaste el Método Esencial Madre: Actívate</li>
                <li>• Llevas al menos 5 meses desde tu parto o cesárea</li>
                <li>• Quieres subir la intensidad con rutinas de impacto</li>
                <li>• Hay experiencias de tu parto o cesárea sin procesar</li>
                <li>• Estás lista para comprometerte 3 meses contigo</li>
              </ul>
            </div>
            <div style={{ background: 'rgba(232,226,220,0.3)', borderRadius: 2, padding: '1.5rem' }}>
              <h4 style={{ fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', fontSize: '1.05rem' }}>
                <X size={18} style={{ color: 'rgba(26,26,26,0.4)' }} /> NO es para ti si…
              </h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.95rem', color: 'rgba(26,26,26,0.6)' }}>
                <li>• No has hecho Actívate todavía</li>
                <li>• Llevas menos de 5 meses desde el parto</li>
                <li>• Tu médico te ha recomendado no hacer impacto</li>
                <li>• Buscas un programa sin compromiso de 3 meses</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── SOBRE SUSANA ── */}
      <section className="section" style={{ background: 'var(--white)' }}>
        <div style={{ maxWidth: 680, margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start', flexWrap: 'wrap' }}>
            <img src="/images/susana-cercana.JPG" alt="Susana Ares" style={{ width: 140, height: 140, borderRadius: '50%', objectFit: 'cover', objectPosition: 'top', boxShadow: '0 4px 20px rgba(0,0,0,0.1)', flexShrink: 0 }} />
            <div style={{ flex: 1, minWidth: 240 }}>
              <div className="t-label text-muted" style={{ marginBottom: '0.4rem' }}>Tu instructora</div>
              <h3 className="t-serif" style={{ fontSize: 'clamp(1.4rem, 3vw, 1.75rem)', color: 'var(--black)', fontWeight: 400, marginBottom: '1rem' }}>Susana Ares</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.95rem', color: 'rgba(26,26,26,0.8)', lineHeight: 1.7 }}>
                <p>Mamá de tres hijos. Tuve una cesárea y me recuperé de tres embarazos y dos partos. No soy una entrenadora más — soy una madre que lo vivió y que después se formó como especialista en recuperación postcesárea.</p>
                <p>Avanza está construido desde la cesárea hacia afuera. He acompañado a más de <strong style={{ color: 'var(--coral)' }}>3.000 mamás</strong>. Este es el siguiente capítulo.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section id="comprar" className="section" style={{ background: 'var(--beige)' }}>
        <div className="container-narrow">
          <div className="text-center" style={{ marginBottom: '2rem' }}>
            <div style={label('var(--coral)')}>Empieza Avanza</div>
            <h2 className="t-serif" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.25rem)' }}>Elige tu opción</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
            <div className="card" style={{ padding: '2rem' }}>
              <div style={label()}>Programa completo</div>
              <h3 className="t-serif" style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Avanza</h3>
              <p style={{ fontSize: '0.85rem', color: 'rgba(26,26,26,0.35)', textDecoration: 'line-through', marginBottom: '0.15rem' }}>Valor real ≈ €1.650</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.25rem' }}>
                <span style={{ fontFamily: 'var(--serif)', fontSize: '3rem', color: 'var(--coral)', fontWeight: 600, lineHeight: 1 }}>€499</span>
                <span style={{ fontSize: '0.85rem', background: 'rgba(232,115,90,0.12)', color: 'var(--coral)', fontWeight: 700, padding: '0.3rem 0.7rem', borderRadius: 4 }}>-70%</span>
              </div>
              <p style={{ fontSize: '0.9rem', color: 'rgba(26,26,26,0.5)', marginBottom: '1.5rem' }}>Pago único o a plazos</p>
              <ul className="check-list" style={{ marginBottom: '1.5rem', flexGrow: 1 }}>
                {['3 meses de programa completo', '3-4 sesiones semanales grabadas', 'Domingo de Mente semanal', '1 directo mensual + replays', 'Comunidad privada', '3 bonus integrados'].map((t, i) => (
                  <li key={i} style={{ fontSize: '0.9rem' }}><Check size={14} />{t}</li>
                ))}
              </ul>
              <button className="btn-coral" style={{ width: '100%', fontSize: '1rem', padding: '1rem' }} onClick={goComprar}>
                Quiero empezar Avanza
              </button>
            </div>
            <div className="card" style={{ padding: '2rem', border: '2px solid var(--coral)', position: 'relative' }}>
              <div style={{ position: 'absolute', top: -14, left: '50%', transform: 'translateX(-50%)', background: 'var(--coral)', color: 'white', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.1em', padding: '0.3rem 1rem', borderRadius: 20, whiteSpace: 'nowrap' }}>
                MÁS PERSONALIZADO
              </div>
              <div style={label('var(--coral)')}>Con asesorías 1:1</div>
              <h3 className="t-serif" style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Avanza + Asesorías</h3>
              <p style={{ fontSize: '0.85rem', color: 'rgba(26,26,26,0.35)', textDecoration: 'line-through', marginBottom: '0.15rem' }}>Valor real ≈ €1.850</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.25rem' }}>
                <span style={{ fontFamily: 'var(--serif)', fontSize: '3rem', color: 'var(--coral)', fontWeight: 600, lineHeight: 1 }}>€699</span>
                <span style={{ fontSize: '0.85rem', background: 'rgba(232,115,90,0.12)', color: 'var(--coral)', fontWeight: 700, padding: '0.3rem 0.7rem', borderRadius: 4 }}>-62%</span>
              </div>
              <p style={{ fontSize: '0.9rem', color: 'rgba(26,26,26,0.5)', marginBottom: '1.5rem' }}>Pago único o a plazos</p>
              <ul className="check-list" style={{ marginBottom: '1.5rem', flexGrow: 1 }}>
                {['Todo lo incluido en Avanza', '2 asesorías 1:1 con Susana', 'Sesión de inicio personalizada', 'Sesión de seguimiento a mitad'].map((t, i) => (
                  <li key={i} style={{ fontSize: '0.9rem' }}><Check size={14} />{t}</li>
                ))}
              </ul>
              <button className="btn-coral" style={{ width: '100%', fontSize: '1rem', padding: '1rem' }} onClick={() => { localStorage.setItem('avanza_purchase_price', '699'); window.open('https://pay.hotmart.com/B106868973I?off=2qrh0bwb', '_blank'); }}>
                Quiero Avanza + Asesorías
              </button>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', background: 'rgba(232,115,90,0.06)', border: '1px solid rgba(232,115,90,0.2)', borderRadius: 4, padding: '1rem' }}>
            <ShieldCheck size={20} style={{ color: 'var(--coral)', flexShrink: 0, marginTop: 2 }} />
            <p style={{ fontSize: '0.9rem', color: 'rgba(26,26,26,0.65)', lineHeight: 1.65 }}>
              <strong style={{ color: 'var(--coral)' }}>Requisito:</strong> haber completado Actívate y llevar al menos 5 meses desde el parto. Si tienes dudas, escríbeme a <a href="mailto:info@esencialsusanaares.com" style={{ color: 'var(--coral)' }}>info@esencialsusanaares.com</a> antes de comprar.
            </p>
          </div>
        </div>
      </section>

      {/* ── FAQs ── */}
      <section className="section" style={{ background: 'var(--white)' }}>
        <div className="container-narrow">
          <div className="text-center" style={{ marginBottom: '2.5rem' }}>
            <div style={label()}>Resolvemos tus dudas</div>
            <h2 className="t-serif" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.25rem)' }}>Preguntas frecuentes</h2>
          </div>
          <div>{FAQS.map((faq, i) => <FaqItem key={i} q={faq.q} a={faq.a} />)}</div>
          <div className="text-center" style={{ marginTop: '2.5rem' }}>
            <p style={{ fontSize: '0.95rem', color: 'rgba(26,26,26,0.6)', marginBottom: '0.75rem' }}>¿Tienes alguna pregunta más?</p>
            <a href="mailto:info@esencialsusanaares.com" style={{ color: 'var(--coral)', fontWeight: 600, fontSize: '1rem' }}>info@esencialsusanaares.com</a>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <div className="cta-band">
        <div className="container-narrow text-center">
          <Star size={28} style={{ color: 'white', margin: '0 auto 1rem', display: 'block', opacity: 0.8 }} />
          <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)' }}>¿Lista para el siguiente nivel?</h2>
          <p style={{ fontSize: '1.15rem', marginBottom: '2rem', opacity: 0.9 }}>Empieza Avanza justo al terminar Actívate. Sin esperas, a tu ritmo.</p>
          <button className="btn-white" style={{ fontSize: '1.05rem', padding: '1.1rem 2.5rem' }} onClick={goComprar}>
            Quiero empezar Avanza
          </button>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem', marginTop: '0.75rem' }}>
            ✅ Pago único o a plazos · ✅ Acceso inmediato · ✅ 3 meses de transformación
          </p>
        </div>
      </div>

    </div>
  );
}
