import { ArrowLeft, Clock, Video, Users, Check, X, Gift, ChevronDown, Brain, Heart, ShieldCheck, Zap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

// ── EDITA ESTA FECHA CUANDO SEA NECESARIO ──────────────────
// const FECHA_CIERRE = '2 de septiembre a las 23:59h';
// ───────────────────────────────────────────────────────────

const CHECKOUT_URL = 'https://pay.hotmart.com/M106127773H?off=4ngusnje&src=masterclass-junio';

const FAQS = [
  { q: '¿Cuándo puedo empezar después de la cesárea?', a: 'Puedes empezar desde los 2 meses después de una cesárea. Los ejercicios de las primeras semanas son especialmente suaves y están pensados para respetar tu cicatriz y tu recuperación.' },
  { q: '¿Cuándo puedo empezar después de un parto vaginal?', a: 'Puedes empezar desde los 40 días después de un parto vaginal. Si tienes dudas, consulta antes con tu médico o matrona.' },
  { q: '¿Puedo hacerlo si nunca he hecho ejercicio o llevo años sin hacer nada?', a: 'Sí, especialmente. Este método está diseñado para empezar desde cero, sin importar tu nivel previo. Las rutinas son sin impacto y progresivas para que tu cuerpo se adapte poco a poco.' },
  { q: '¿El método está adaptado para cesárea?', a: 'Sí, especialmente. Está diseñado teniendo muy en cuenta las particularidades de la recuperación postcesárea: la cicatriz, la diástasis, el suelo pélvico y la reconexión con el abdomen.' },
  { q: '¿Cuánto tiempo necesito al día?', a: 'Las rutinas duran entre 15 y 30 minutos. Están pensadas para hacerse desde casa y encajar en el día a día de una madre con poco tiempo.' },
  { q: '¿Cuánto tiempo tengo acceso al programa?', a: '4 meses de acceso completo para que puedas empezar cuando tu cuerpo esté listo, sin prisas y sin presión.' },
  { q: '¿Qué pasa si un día no puedo hacer la rutina?', a: 'No pasa nada. Los vídeos son on-demand y tienes 4 meses de acceso, así que puedes seguir tu propio ritmo sin presión.' },
  { q: '¿Necesito material o equipamiento?', a: 'No. Todas las rutinas son sin impacto y se hacen con el peso de tu propio cuerpo, desde casa.' },
  { q: '¿Cómo accedo al programa después de comprarlo?', a: 'Nada más comprar recibirás un email con el enlace a tu área privada donde encontrarás todos los vídeos organizados.' },
  { q: '¿Cuándo empezaré a notar resultados?', a: 'La mayoría de las mamás notan los primeros cambios durante las primeras 2 semanas. Los resultados más visibles llegan al completar las 4 semanas.' },
  { q: '¿Este método solo trabaja el cuerpo o también la mente?', a: 'Incluye un módulo completo de fortaleza mental con vídeo de motivación y confianza, y audio de creencias — contenidos exclusivos que no encontrarás en YouTube.' },
  { q: '¿En qué se diferencia de otros programas?', a: 'Especial foco en cesárea, módulo de fortaleza mental incluido, vídeo exclusivo de "Siguientes pasos" al terminar y 4 meses de acceso para que empieces cuando tu cuerpo esté listo.' }
];

const label = (color) => ({
  fontSize: '0.9rem',
  fontWeight: 700,
  letterSpacing: '0.15em',
  textTransform: 'uppercase',
  color: color || 'rgba(26,26,26,0.5)',
  marginBottom: '0.75rem'
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

// ── FECHA FIJA DE EXPIRACIÓN DEL DESCUENTO ─────────────────
// 2 de septiembre a las 23:59h hora España (UTC+2 en verano)
const EXPIRY_DATE = new Date('2026-09-02T23:59:00+02:00');
// ───────────────────────────────────────────────────────────

function Countdown() {
  const calcTimeLeft = () => {
    const diff = EXPIRY_DATE - Date.now();
    if (diff <= 0) return null;
    return {
      h: Math.floor(diff / 3600000),
      m: Math.floor((diff % 3600000) / 60000),
      s: Math.floor((diff % 60000) / 1000)
    };
  };

  const [timeLeft, setTimeLeft] = useState(calcTimeLeft);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calcTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  if (!timeLeft) return (
    <div style={{ background: 'rgba(26,26,26,0.08)', borderRadius: 6, padding: '0.75rem 1.25rem', textAlign: 'center' }}>
      <p style={{ fontSize: '0.9rem', color: 'rgba(26,26,26,0.5)', margin: 0 }}>El precio especial ha expirado.</p>
    </div>
  );

  const pad = (n) => String(n).padStart(2, '0');

  return (
    <div style={{ background: 'var(--black)', borderRadius: 8, padding: '1.25rem 1.5rem', textAlign: 'center' }}>
      <p style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.55)', marginBottom: '0.75rem' }}>
        ⚡ Precio especial lista prioritaria caduca en
      </p>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', alignItems: 'center' }}>
        {[{ val: pad(timeLeft.h), label: 'horas' }, { val: pad(timeLeft.m), label: 'min' }, { val: pad(timeLeft.s), label: 'seg' }].map((item, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontFamily: 'var(--serif)', fontSize: '2.5rem', color: 'var(--coral)', lineHeight: 1, fontWeight: 600 }}>{item.val}</div>
              <div style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.4)', letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: '0.2rem' }}>{item.label}</div>
            </div>
            {i < 2 && <span style={{ fontSize: '2rem', color: 'var(--coral)', fontWeight: 700, lineHeight: 1, marginBottom: 16 }}>:</span>}
          </div>
        ))}
      </div>
      <p style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.35)', marginTop: '0.75rem' }}>Hasta el 2 de septiembre a las 23:59h</p>
    </div>
  );
}

export default function ActivateListaEsperaPage() {
  const navigate = useNavigate();
  const goBack = () => { navigate('/'); window.scrollTo(0, 0); };
  const goComprar = () => window.open(CHECKOUT_URL, '_blank');

  return (
    <div style={{ paddingTop: 80 }}>

      <Helmet>
        <title>Acceso prioritario lista espera | Método Esencial Madre: Actívate</title>
        <meta name="description" content="Acceso prioritario exclusivo para madres de la lista de espera de Actívate. Método Esencial Madre: Actívate." />
        <meta name="robots" content="noindex, nofollow" />
        <meta property="og:url" content="https://esencialsusanaares.com/activate-lista-espera" />
      </Helmet>

      {/* ── BARRA ACCESO PRIORITARIO ── */}
      <div style={{ background: 'var(--black)', borderTop: '4px solid var(--coral)', padding: '1.25rem 1.5rem' }}>
        <div style={{ maxWidth: 700, margin: '0 auto', textAlign: 'center' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'var(--coral)', color: 'white', fontWeight: 700, fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', padding: '0.35rem 1rem', borderRadius: 999, marginBottom: '0.75rem' }}>
            ✦ Acceso prioritario · Lista de espera Actívate
          </div>
          <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.9)', lineHeight: 1.7, margin: 0 }}>
            Por haberte apuntado a la lista prioritaria de Actívate, tienes acceso a <strong style={{ color: 'var(--coral)' }}>€97</strong> en lugar de €147 — solo hasta el 2 de septiembre a las 23:59h.
          </p>
        </div>
      </div>

      {/* ── HERO ── */}
      <section style={{ background: 'linear-gradient(to bottom, var(--peach) 0%, var(--white) 100%)', position: 'relative', overflow: 'hidden' }}>
        <div className="hero-photo-bleed">
          <img src="/images/susana-hero.JPG" alt="Susana Ares — Método Esencial Madre Actívate" />
        </div>
        <div className="container-mid" style={{ position: 'relative', zIndex: 2, paddingTop: '2rem', paddingBottom: '4rem' }}>
          <div className="hero-text-wrap">
            <button className="btn-back" style={{ marginBottom: '2rem' }} onClick={goBack}>
              <ArrowLeft size={15} /> Volver al inicio
            </button>
            <div style={label('var(--coral)')}>Método Esencial Madre · Actívate</div>
            <h1 className="t-serif" style={{ fontSize: 'clamp(2.25rem, 5vw, 4rem)', lineHeight: 1.1, marginBottom: '1rem' }}>
              Las primeras rutinas adaptadas a tu cuerpo de madre
            </h1>
            <p style={{ fontSize: '1.15rem', color: 'rgba(26,26,26,0.75)', maxWidth: 520, marginBottom: '0.75rem', lineHeight: 1.7, fontStyle: 'italic' }}>
              "Para volver a reconocerte, sentirte fuerte y empezar desde donde estás"
            </p>
            <p style={{ fontSize: '1.05rem', color: 'rgba(26,26,26,0.8)', maxWidth: 520, marginBottom: '2rem', lineHeight: 1.7 }}>
              Programa online de 4 semanas con ejercicios específicos adaptados a cesárea y parto vaginal para empezar a trabajar tu cuerpo — y también tu confianza y motivación.
            </p>
            <div className="flex flex-wrap gap-3" style={{ marginBottom: '2rem' }}>
              <span className="pill" style={{ fontSize: '0.95rem', padding: '0.5rem 1rem' }}><Video />4 semanas · Online</span>
              <span className="pill" style={{ fontSize: '0.95rem', padding: '0.5rem 1rem' }}><Clock />Sin impacto</span>
              <span className="pill" style={{ fontSize: '0.95rem', padding: '0.5rem 1rem' }}><Users />+3.000 mamás</span>
            </div>

            {/* Contador hero */}
            <div style={{ maxWidth: 420, marginBottom: '1.5rem' }}>
              <Countdown />
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.5rem' }}>
              <span style={{ fontSize: '1.1rem', color: 'rgba(26,26,26,0.35)', textDecoration: 'line-through' }}>€147</span>
              <span style={{ fontFamily: 'var(--serif)', fontSize: '2.5rem', color: 'var(--coral)', fontWeight: 600, lineHeight: 1 }}>€97</span>
              <span style={{ fontSize: '0.8rem', background: 'rgba(232,115,90,0.12)', color: 'var(--coral)', fontWeight: 700, padding: '0.3rem 0.7rem', borderRadius: 4 }}>-34%</span>
            </div>
            <p style={{ fontSize: '0.85rem', color: 'rgba(26,26,26,0.5)', marginBottom: '1.5rem' }}>Precio especial lista prioritaria · Hasta el 2 de septiembre</p>
            <button className="btn-coral" style={{ fontSize: '1.1rem', padding: '1.1rem 2.5rem' }} onClick={goComprar}>
              Quiero empezar mi recuperación — €97
            </button>
            <p style={{ fontSize: '0.85rem', color: 'rgba(26,26,26,0.45)', marginTop: '0.75rem' }}>
              Sin equipamiento · Desde casa · 4 meses de acceso
            </p>
          </div>
        </div>
      </section>

      {/* ── PAIN POINTS ── */}
      <section className="section" style={{ background: 'var(--beige)' }}>
        <div className="container-narrow">
          <div className="text-center" style={{ marginBottom: '2.5rem' }}>
            <div style={label()}>¿Te sientes identificada?</div>
            <h2 className="t-serif" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', lineHeight: 1.2 }}>
              Sé que estás aquí porque <em className="text-coral">algo ha cambiado</em>
            </h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {[
              { emoji: '🪞', title: 'Tu cuerpo no es el mismo desde la cesárea o el parto', desc: 'Tu abdomen, tu cicatriz, tu suelo pélvico, tu postura... todo ha cambiado. Y sientes que has perdido la conexión con tu cuerpo.' },
              { emoji: '⚠️', title: 'No sabes cómo empezar sin hacerte daño', desc: 'Tienes miedo de hacer ejercicios que no sean seguros para tu cicatriz, tu diástasis o tu suelo pélvico.' },
              { emoji: '⏰', title: 'No tienes tiempo, pero necesitas cuidarte', desc: 'Entre el bebé, el trabajo y la casa, apenas tienes un momento para ti. Pero sabes que necesitas hacer algo por tu cuerpo.' },
              { emoji: '💔', title: 'No te reconoces en el espejo', desc: 'Sabes que mereces recuperarte, pero no sabes por dónde empezar de forma segura.' },
              { emoji: '🎯', title: 'Necesitas una guía clara y adaptada', desc: 'Diseñada específicamente para tu tipo de cuerpo, tu tipo de parto y tu momento vital.' }
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '1.25rem', background: 'var(--white)', borderRadius: 6, padding: '1.25rem 1.5rem', boxShadow: '0 1px 6px rgba(0,0,0,0.06)' }}>
                <div style={{ fontSize: '1.75rem', lineHeight: 1, flexShrink: 0, marginTop: '0.1rem' }}>{item.emoji}</div>
                <div>
                  <h4 style={{ fontSize: '1.05rem', fontWeight: 600, color: 'var(--black)', marginBottom: '0.4rem', lineHeight: 1.3 }}>{item.title}</h4>
                  <p style={{ fontSize: '0.95rem', color: 'rgba(26,26,26,0.7)', lineHeight: 1.7, margin: 0 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOTO + SOLUCIÓN ── */}
      <section className="section" style={{ background: 'var(--white)' }}>
        <div className="container-mid">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3.5rem', alignItems: 'center' }}>
            <div>
              <img src="/images/susana-ejercicio.JPG" alt="Susana Ares" style={{ width: '100%', maxHeight: 500, objectFit: 'cover', objectPosition: 'top', borderRadius: 4, boxShadow: '0 4px 24px rgba(0,0,0,0.1)' }} />
            </div>
            <div>
              <div style={label('var(--coral)')}>La solución</div>
              <h2 className="t-serif" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.25rem)', marginBottom: '1.25rem', lineHeight: 1.2 }}>
                Diseñado para empezar desde donde estás
              </h2>
              <ul className="check-list" style={{ marginBottom: '2rem' }}>
                {[
                  '4 semanas · Online · Sin equipamiento',
                  'Ejercicios específicos para cesárea y parto vaginal',
                  'Desde los 40 días (parto vaginal) o 2 meses (cesárea)',
                  'Perfecto si nunca has hecho ejercicio',
                  'Trabaja tu cuerpo, tu confianza y tu motivación',
                  '4 meses de acceso para empezar cuando estés lista'
                ].map((t, i) => (
                  <li key={i} style={{ fontSize: '1rem' }}><Check size={15} />{t}</li>
                ))}
              </ul>
              <button className="btn-coral" onClick={goComprar}>Quiero empezar — €97</button>
            </div>
          </div>
        </div>
      </section>

      {/* ── DIFERENCIADOR ── */}
      <section className="section" style={{ background: 'var(--coral)' }}>
        <div className="container-mid text-center">
          <div style={{ ...label('rgba(255,255,255,0.75)') }}>Lo que hace único este método</div>
          <h2 className="t-serif" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', color: 'white', marginBottom: '1.25rem', lineHeight: 1.2 }}>
            No es solo recuperar el cuerpo.<br />Es recuperarte a ti.
          </h2>
          <div className="grid-2" style={{ gap: '1rem' }}>
            <div style={{ background: 'rgba(255,255,255,0.15)', borderRadius: 4, padding: '1.75rem', textAlign: 'left' }}>
              <Brain size={20} color="white" style={{ marginBottom: '0.75rem' }} />
              <h3 style={{ fontWeight: 600, fontSize: '1.1rem', color: 'white', marginBottom: '0.6rem' }}>Vídeo de motivación y confianza</h3>
              <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.85)', lineHeight: 1.7 }}>Exclusivo. Para trabajar la confianza en ti misma y en tu cuerpo.</p>
            </div>
            <div style={{ background: 'rgba(255,255,255,0.15)', borderRadius: 4, padding: '1.75rem', textAlign: 'left' }}>
              <Heart size={20} color="white" style={{ marginBottom: '0.75rem' }} />
              <h3 style={{ fontWeight: 600, fontSize: '1.1rem', color: 'white', marginBottom: '0.6rem' }}>Audio de creencias</h3>
              <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.85)', lineHeight: 1.7 }}>Exclusivo. Para reforzar que eres merecedora y válida para recuperarte.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── LAS 4 SEMANAS ── */}
      <section className="section" style={{ background: 'var(--beige)' }}>
        <div className="container-mid">
          <div className="text-center" style={{ marginBottom: '2.5rem' }}>
            <div style={label()}>Las 4 semanas</div>
            <h2 className="t-serif" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.25rem)' }}>Un plan progresivo semana a semana</h2>
          </div>
          <div className="week-steps">
            {[
              { week: 'Semana 1', title: 'Conexión', desc: 'Reconecta con tu cuerpo y tu cicatriz. Rutinas muy suaves para empezar desde donde estás.', highlight: false },
              { week: 'Semana 2', title: 'Activación + Mente', desc: 'Activa abdomen y suelo pélvico. Incluye módulo de fortaleza mental exclusivo.', highlight: true },
              { week: 'Semana 3', title: 'Fortalecimiento', desc: 'Aumenta la intensidad respetando tu recuperación. Empiezas a notar los cambios.', highlight: false },
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

      {/* ── BONUS ── */}
      <section className="section" style={{ background: 'var(--peach)' }}>
        <div className="container-narrow">
          <div className="card" style={{ padding: '2rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.25rem' }}>
              <div style={{ width: 48, height: 48, borderRadius: '50%', background: 'var(--coral)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Gift size={22} color="white" />
              </div>
              <div>
                <div style={{ ...label('var(--coral)'), marginBottom: '0.15rem' }}>Bonus especial incluido</div>
                <h3 className="t-serif" style={{ fontSize: '1.3rem' }}>Recupera tu abdomen en tu día a día</h3>
              </div>
            </div>
            <ul className="check-list">
              {['Hábitos para integrar en tu día a día como madre', 'Pequeñas acciones que marcan la diferencia', 'Pensado para mamás reales con poco tiempo'].map((t, i) => (
                <li key={i} style={{ fontSize: '0.95rem' }}><Check size={14} />{t}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIOS FOTOS ── */}
      <section className="section" style={{ background: 'var(--white)' }}>
        <div className="container-mid">
          <div className="text-center" style={{ marginBottom: '2rem' }}>
            <div style={label()}>Lo que dicen las mamás</div>
            <h2 className="t-serif" style={{ fontSize: 'clamp(1.65rem, 3vw, 2.25rem)', color: 'var(--black)' }}>Mensajes reales de clientas reales</h2>
            <p style={{ fontSize: '1.05rem', color: 'rgba(26,26,26,0.6)', marginTop: '0.5rem' }}>+3.000 mamás ya han completado el método</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '0.75rem' }}>
            {[1,2,3,4,5,6,7,8].map((n) => (
              <div key={n} style={{ borderRadius: 6, overflow: 'hidden', boxShadow: '0 2px 10px rgba(0,0,0,0.08)' }}>
                <img src={`/images/testimonial-${n}.jpg`} alt={`Testimonio clienta ${n}`} style={{ width: '100%', display: 'block' }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PARA QUIÉN ── */}
      <section className="section" style={{ background: 'var(--beige)' }}>
        <div className="container-narrow">
          <div className="grid-2">
            <div style={{ background: 'rgba(242,237,230,0.5)', borderRadius: 2, padding: '1.5rem' }}>
              <h4 style={{ fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', fontSize: '1.05rem' }}>
                <Check size={18} style={{ color: 'var(--coral)' }} /> ES para ti si…
              </h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.95rem', color: 'rgba(26,26,26,0.8)' }}>
                <li>• Tienes más de 40 días tras parto vaginal</li>
                <li>• Tienes más de 2 meses tras cesárea</li>
                <li>• Nunca has hecho ejercicio o llevas años sin hacer nada</li>
                <li>• Tu cicatriz de cesárea te genera inseguridad</li>
                <li>• Quieres recuperar tu cuerpo y también tu confianza</li>
              </ul>
            </div>
            <div style={{ background: 'rgba(232,226,220,0.3)', borderRadius: 2, padding: '1.5rem' }}>
              <h4 style={{ fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', fontSize: '1.05rem' }}>
                <X size={18} style={{ color: 'rgba(26,26,26,0.4)' }} /> NO es para ti si…
              </h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.95rem', color: 'rgba(26,26,26,0.6)' }}>
                <li>• Buscas entrenamientos de alta intensidad</li>
                <li>• No estás dispuesta a dedicar 15-30 min algunos días</li>
                <li>• Prefieres ir a un gimnasio presencial</li>
                <li>• Tu médico te ha recomendado no hacer ejercicio todavía</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── PRICING CTA ── */}
      <section id="comprar" className="section" style={{ background: 'var(--white)' }}>
        <div className="container-narrow">
          <div className="text-center" style={{ marginBottom: '2rem' }}>
            <div style={label('var(--coral)')}>Acceso prioritario lista de espera</div>
            <h2 className="t-serif" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.25rem)' }}>Consigue tu plaza ahora</h2>
          </div>
          <div className="card" style={{ padding: '2.5rem' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '110px 1fr', gap: '1.5rem', alignItems: 'center', background: 'var(--beige)', borderRadius: 4, padding: '1.5rem', marginBottom: '2rem' }}>
              <img src="/images/susana-cercana.JPG" alt="Susana Ares" style={{ width: 110, height: 110, borderRadius: '50%', objectFit: 'cover', objectPosition: 'top', boxShadow: '0 2px 12px rgba(0,0,0,0.12)' }} />
              <p className="t-serif-italic" style={{ fontSize: '1.2rem', color: 'rgba(26,26,26,0.85)', lineHeight: 1.7 }}>
                "He acompañado a más de 3.000 mamás a recuperarse. Sé que tú también puedes."
                <span style={{ display: 'block', fontStyle: 'normal', fontWeight: 700, fontSize: '1rem', marginTop: '0.5rem', color: 'var(--coral)' }}>— Susana Ares</span>
              </p>
            </div>
            <ul className="check-list" style={{ marginBottom: '2rem' }}>
              {[
                'Programa online de 4 semanas · Ejercicios para cesárea y parto',
                '4 vídeos por semana: 3 rutinas + 1 vídeo para tu mejor versión',
                '🧠 Módulo de fortaleza mental: vídeo de motivación y confianza',
                '🎧 Audio de creencias: somos merecedoras',
                '🎙️ Vídeo "Siguientes pasos" con tus dudas más comunes resueltas',
                'Sin equipamiento, desde casa, a tu ritmo',
                '4 meses de acceso completo',
                'BONUS: Recupera tu abdomen en tu día a día'
              ].map((t, i) => (
                <li key={i} style={{ fontSize: '1rem', paddingBottom: '0.3rem' }}><Check size={16} />{t}</li>
              ))}
            </ul>

            {/* Contador en pricing */}
            <div style={{ marginBottom: '2rem' }}>
              <Countdown />
            </div>

            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', background: 'rgba(26,26,26,0.04)', border: '1px solid rgba(26,26,26,0.12)', borderRadius: 4, padding: '1rem', marginBottom: '2rem' }}>
              <ShieldCheck size={20} style={{ color: 'var(--coral)', flexShrink: 0, marginTop: 2 }} />
              <div>
                <p style={{ fontWeight: 600, fontSize: '0.95rem', color: 'var(--coral)', marginBottom: '0.25rem' }}>Precio especial exclusivo para la lista prioritaria de Actívate</p>
                <p style={{ fontSize: '0.9rem', color: 'rgba(26,26,26,0.65)', lineHeight: 1.65 }}>Este precio de €97 es exclusivo para madres de la lista prioritaria y caduca el 2 de septiembre a las 23:59h. Del 3 al 6 de septiembre el programa estará disponible al precio general de €147.</p>
              </div>
            </div>

            <div className="text-center" style={{ borderTop: '1px solid var(--pearl)', paddingTop: '2rem' }}>
              <div style={{ marginBottom: '1.5rem' }}>
                <span style={{ fontSize: '1.1rem', color: 'rgba(26,26,26,0.35)', textDecoration: 'line-through' }}>€147</span>
                <div style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(3rem, 8vw, 4rem)', color: 'var(--coral)', fontWeight: 600, lineHeight: 1, marginTop: '0.25rem' }}>€97</div>
                <p style={{ fontSize: '0.9rem', color: 'rgba(26,26,26,0.45)', marginTop: '0.4rem' }}>Pago único · 4 meses de acceso · Sin suscripción</p>
                <p style={{ fontSize: '0.9rem', color: 'var(--coral)', fontWeight: 600, marginTop: '0.4rem' }}>⚡ Precio especial lista prioritaria · Hasta el 2 de septiembre</p>
              </div>
              <button className="btn-coral" style={{ fontSize: '1.1rem', padding: '1.2rem 3rem', width: '100%', maxWidth: 420 }} onClick={goComprar}>
                Quiero empezar mi recuperación — €97
              </button>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', marginTop: '1rem', flexWrap: 'wrap' }}>
                <span style={{ fontSize: '0.8rem', color: 'rgba(26,26,26,0.45)', display: 'flex', alignItems: 'center', gap: '0.3rem' }}><ShieldCheck size={13} /> Pago seguro</span>
                <span style={{ fontSize: '0.8rem', color: 'rgba(26,26,26,0.45)', display: 'flex', alignItems: 'center', gap: '0.3rem' }}><Zap size={13} /> Acceso inmediato</span>
                <span style={{ fontSize: '0.8rem', color: 'rgba(26,26,26,0.45)', display: 'flex', alignItems: 'center', gap: '0.3rem' }}><Users size={13} /> +3.000 mamás</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQs ── */}
      <section className="section" style={{ background: 'var(--beige)' }}>
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
          <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)' }}>¿Lista para empezar?</h2>
          <p style={{ fontSize: '1.15rem', marginBottom: '1.5rem', opacity: 0.9 }}>Tu precio especial de lista prioritaria caduca el 2 de septiembre a las 23:59h.</p>
          <div style={{ maxWidth: 380, margin: '0 auto 1.5rem' }}>
            <Countdown />
          </div>
          <div style={{ fontFamily: 'var(--sans)', fontWeight: 700, fontSize: '2rem', color: 'white', marginBottom: '0.25rem' }}>€97</div>
          <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.875rem', marginBottom: '1.5rem', textDecoration: 'line-through' }}>Antes €147</p>
          <button className="btn-white" style={{ fontSize: '1.05rem', padding: '1.1rem 2.5rem' }} onClick={goComprar}>
            Quiero empezar mi recuperación
          </button>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem', marginTop: '0.75rem' }}>
            Sin equipamiento · Desde casa · 4 meses de acceso
          </p>
        </div>
      </div>

    </div>
  );
}