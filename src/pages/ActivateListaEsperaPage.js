import { ArrowLeft, Users, Check, X, Gift, ChevronDown, Brain, ShieldCheck, Zap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

const COUNTDOWN_HOURS = 48;
const COUNTDOWN_STORAGE_KEY = 'ap_countdown_deadline';
const CHECKOUT_URL = 'https://pay.hotmart.com/M106127773H?off=4ngusnje&bid=1781083829312&src=acceso-prioritario';

const FAQS = [
  { q: '¿Cuándo puedo empezar después de la cesárea?', a: 'Puedes empezar desde los 2 meses después de una cesárea. Los ejercicios de las primeras semanas son especialmente suaves y están pensados para respetar tu cicatriz y tu recuperación.' },
  { q: '¿Cuándo puedo empezar después de un parto vaginal?', a: 'Puedes empezar desde los 40 días después de un parto vaginal. Si tienes dudas, consulta antes con tu médico o matrona.' },
  { q: '¿Puedo hacerlo si nunca he hecho ejercicio o llevo años sin hacer nada?', a: 'Sí, especialmente. Este método está diseñado para empezar desde cero, sin importar tu nivel previo. Las rutinas son sin impacto y progresivas para que tu cuerpo se adapte poco a poco.' },
  { q: '¿El método está adaptado para cesárea?', a: 'Sí, especialmente. Está diseñado teniendo muy en cuenta las particularidades de la recuperación postcesárea: la cicatriz, la diástasis, el suelo pélvico y la reconexión con el abdomen.' },
  { q: '¿Cuánto tiempo necesito al día?', a: 'Las rutinas duran entre 15 y 30 minutos. Son vídeos grabados que puedes hacer cuando quieras — si un día no puedes, lo haces al día siguiente. A tu ritmo.' },
  { q: '¿Cuánto tiempo tengo acceso al programa?', a: '12 meses de acceso completo para que puedas empezar cuando tu cuerpo esté listo, sin prisas y sin presión.' },
  { q: '¿Qué pasa si un día no puedo hacer la rutina?', a: 'Absolutamente nada. Los vídeos son grabados y tienes 12 meses de acceso. Si un lunes no puedes, lo haces el martes. Si una semana no puedes, la recuperas la siguiente.' },
  { q: '¿Necesito material o equipamiento?', a: 'No. Todas las rutinas son sin impacto y se hacen con el peso de tu propio cuerpo, desde casa.' },
  { q: '¿Cómo accedo al programa después de comprarlo?', a: 'Nada más comprar recibirás un email con el enlace a tu área privada donde encontrarás todos los vídeos organizados.' },
  { q: '¿Cuándo empezaré a notar resultados?', a: 'La mayoría de las mamás notan los primeros cambios durante las primeras 2 semanas. Los resultados más visibles llegan al completar las 4 semanas.' },
  { q: '¿Este método solo trabaja el cuerpo o también la mente?', a: 'Incluye un módulo completo de fortaleza mental con vídeo de motivación y confianza, y audio de creencias — contenidos exclusivos que no encontrarás en YouTube.' },
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

function getVisitorDeadline() {
  try {
    const stored = localStorage.getItem(COUNTDOWN_STORAGE_KEY);
    if (stored) {
      const deadline = parseInt(stored, 10);
      if (!isNaN(deadline)) return deadline;
    }
    const newDeadline = Date.now() + COUNTDOWN_HOURS * 3600000;
    localStorage.setItem(COUNTDOWN_STORAGE_KEY, String(newDeadline));
    return newDeadline;
  } catch (e) {
    // Si localStorage no está disponible, usar cuenta atrás fija de sesión
    return Date.now() + COUNTDOWN_HOURS * 3600000;
  }
}

function CountdownBar() {
  const [deadline] = useState(getVisitorDeadline);
  const calcTimeLeft = () => {
    const diff = deadline - Date.now();
    if (diff <= 0) return null;
    return {
      h: Math.floor(diff / 3600000),
      m: Math.floor((diff % 3600000) / 60000),
      s: Math.floor((diff % 60000) / 1000)
    };
  };
  const [timeLeft, setTimeLeft] = useState(calcTimeLeft);
  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(calcTimeLeft()), 1000);
    return () => clearInterval(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [deadline]);
  if (!timeLeft) return null;
  const pad = (n) => String(n).padStart(2, '0');
  return (
    <span style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.85)' }}>
      ⚡ Precio especial caduca en {pad(timeLeft.h)} horas : {pad(timeLeft.m)} min : {pad(timeLeft.s)} seg
    </span>
  );
}

function PriceCTA({ goComprar, dark = false }) {
  return (
    <div style={{ textAlign: 'center', padding: '2rem 1.5rem', background: dark ? 'var(--black)' : 'var(--peach)' }}>
      <div style={{ maxWidth: 420, margin: '0 auto' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', marginBottom: '0.75rem' }}>
          <span style={{ fontSize: '1rem', color: dark ? 'rgba(255,255,255,0.3)' : 'rgba(26,26,26,0.35)', textDecoration: 'line-through' }}>€147</span>
          <span style={{ fontFamily: 'var(--serif)', fontSize: '2.25rem', color: 'var(--coral)', fontWeight: 600, lineHeight: 1 }}>€97</span>
          <span style={{ fontSize: '0.8rem', background: 'var(--coral)', color: 'white', fontWeight: 700, padding: '0.25rem 0.6rem', borderRadius: 4 }}>Ahorras €50</span>
        </div>
        <button className="btn-coral" style={{ fontSize: '1.05rem', padding: '1rem 2.5rem', width: '100%' }} onClick={goComprar}>
          Quiero empezar mi recuperación
        </button>
        <p style={{ fontSize: '0.8rem', color: dark ? 'rgba(255,255,255,0.4)' : 'rgba(26,26,26,0.5)', marginTop: '0.75rem' }}>
          ✅ Pago único · ✅ 12 meses de acceso · ✅ Sin suscripción
        </p>
      </div>
    </div>
  );
}

export default function ActivateListaEsperaPage() {
  const navigate = useNavigate();
  const goBack = () => { navigate('/'); window.scrollTo(0, 0); };
  const goComprar = () => {
    localStorage.setItem('activate_purchase_price', '97');
    localStorage.setItem('activate_purchase_product', 'Método Esencial Madre: Actívate - Acceso Prioritario');
    window.open(CHECKOUT_URL, '_blank');
  };

  return (
    <div>

      <Helmet>
        <title>Acceso Prioritario | Método Esencial Madre: Actívate</title>
        <meta name="description" content="Precio especial de acceso prioritario para el Método Esencial Madre: Actívate. €97 en lugar de €147." />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      {/* ── BARRA TOP (fija) ── */}
      <div style={{ background: 'var(--black)', borderTop: '3px solid var(--coral)', padding: '0.6rem 1.5rem', textAlign: 'center', position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100, display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'var(--coral)', color: 'white', fontWeight: 700, fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', padding: '0.3rem 0.9rem', borderRadius: 999, marginRight: '0.75rem' }}>
          ✦ Acceso prioritario
        </span>
        <CountdownBar />
      </div>
      {/* Espaciador para compensar la barra fija */}
      <div style={{ height: '54px' }} />

      {/* ── HERO ── */}
      <section style={{ background: 'linear-gradient(to bottom, var(--peach) 0%, var(--white) 100%)', position: 'relative', overflow: 'hidden' }}>
        <div className="hero-photo-bleed">
          <img src="/images/susana-hero.JPG" alt="Susana Ares — Método Esencial Madre Actívate" />
        </div>
        <div className="container-mid" style={{ position: 'relative', zIndex: 2, paddingTop: '1.25rem', paddingBottom: '1.25rem' }}>
          <div className="hero-text-wrap">
            <button className="btn-back" style={{ marginBottom: '2rem' }} onClick={goBack}>
              <ArrowLeft size={15} /> Volver al inicio
            </button>
            <div style={label('var(--coral)')}>Método Actívate</div>
            <h1 className="t-serif" style={{ fontSize: 'clamp(2.25rem, 5vw, 4rem)', lineHeight: 1.1, marginBottom: '0.75rem' }}>
              Rutinas adaptadas a tu cuerpo de madre
            </h1>
            <p style={{ fontSize: '1.05rem', color: 'rgba(26,26,26,0.8)', maxWidth: 520, marginBottom: '1.25rem', lineHeight: 1.65 }}>
              Programa online de <strong>4 semanas</strong> para madres. Ejercicios adaptados a cesárea y parto vaginal; sin importar si fue hace meses o años. Desde casa, a tu ritmo.
            </p>
            <div className="flex flex-wrap gap-3" style={{ marginBottom: '2rem' }}>
              <span className="pill" style={{ fontSize: '0.95rem', padding: '0.5rem 1rem' }}><Users />+3.000 mamás</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.5rem' }}>
              <span style={{ fontSize: '1.1rem', color: 'rgba(26,26,26,0.35)', textDecoration: 'line-through' }}>€147</span>
              <span style={{ fontFamily: 'var(--serif)', fontSize: '2.5rem', color: 'var(--coral)', fontWeight: 600, lineHeight: 1 }}>€97</span>
              <span style={{ fontSize: '0.8rem', background: 'rgba(232,115,90,0.12)', color: 'var(--coral)', fontWeight: 700, padding: '0.3rem 0.7rem', borderRadius: 4 }}>Ahorras €50</span>
            </div>
            <p style={{ fontSize: '0.85rem', color: 'rgba(26,26,26,0.5)', marginBottom: '1.5rem' }}>Precio especial de acceso prioritario</p>
            <button className="btn-coral" style={{ fontSize: '1.1rem', padding: '1.1rem 2.5rem' }} onClick={goComprar}>
              Quiero empezar mi recuperación
            </button>
            <p style={{ fontSize: '0.875rem', color: 'rgba(26,26,26,0.6)', marginTop: '0.75rem' }}>
              ✅ Pago único · ✅ 12 meses de acceso · ✅ Sin suscripción
            </p>
          </div>
        </div>
      </section>

      {/* ── OBJECIONES ELIMINADAS ── */}
      <section className="section" style={{ background: 'var(--white)', paddingTop: '2rem' }}>
        <div className="container-narrow">
          <div className="text-center" style={{ marginBottom: '2rem' }}>
            <h2 className="t-serif" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', color: 'var(--black)', fontWeight: 400 }}>
              No necesitas ninguna de estas cosas para empezar
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '0.75rem', marginBottom: '1.5rem' }}>
            {[
              '❌ Experiencia previa haciendo ejercicio',
              '❌ Equipamiento o materiales',
              '❌ Que tu cuerpo esté "preparado"',
              '❌ Horas fijas en el día',
            ].map((t, i) => (
              <div key={i} style={{ background: 'var(--beige)', borderRadius: 6, padding: '0.9rem 1.25rem', fontSize: '0.95rem', color: 'rgba(26,26,26,0.8)', fontWeight: 500 }}>
                {t}
              </div>
            ))}
          </div>
          <div style={{ background: 'var(--black)', borderRadius: 8, padding: '1.25rem 1.5rem', textAlign: 'center' }}>
            <p style={{ fontSize: '1rem', color: 'white', fontWeight: 600, margin: 0 }}>
              Solo necesitas querer empezar. El método hace el resto.
            </p>
          </div>
          <p className="t-serif-italic" style={{ fontSize: '1.15rem', color: 'rgba(26,26,26,0.7)', textAlign: 'center', marginTop: '1.5rem', lineHeight: 1.6 }}>
            Vuelve a sentirte tú, después de ser madre.
          </p>
        </div>
      </section>

      {/* ── CTA INTERMEDIO 1 ── */}
      <PriceCTA goComprar={goComprar} />

      {/* ── FOTO + SOLUCIÓN ── */}
      <section className="section" style={{ background: 'var(--white)' }}>
        <div className="container-mid">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3.5rem', alignItems: 'center' }}>
            <div>
              <img src="/images/susana-ejercicio.JPG" alt="Susana Ares" style={{ width: '100%', maxHeight: 500, objectFit: 'cover', objectPosition: 'top', borderRadius: 4, boxShadow: '0 4px 24px rgba(0,0,0,0.1)' }} />
            </div>
            <div>
              <div style={label('var(--coral)')}>Diseñado para empezar desde donde estás</div>
              <h2 className="t-serif" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.25rem)', marginBottom: '1.25rem', lineHeight: 1.2 }}>
                Especializado en cesárea y parto vaginal
              </h2>
              <ul className="check-list" style={{ marginBottom: '2rem' }}>
                {[
                  'Desde los 40 días tras parto vaginal',
                  'Desde los 2 meses tras cesárea — aunque haya pasado más tiempo, nunca es tarde',
                  'Sin equipamiento — solo tu cuerpo y un sitio en casa',
                  'Vídeos grabados — hazlos cuando puedas, a tu ritmo',
                  '4 vídeos por semana: 3 rutinas + 1 vídeo para tu mejor versión',
                  'Trabaja tu cuerpo, tu confianza y tu motivación',
                  '12 meses de acceso — sin prisas, a tu ritmo'
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
          <div style={{ maxWidth: 420, margin: '0 auto' }}>
            <div style={{ background: 'rgba(255,255,255,0.15)', borderRadius: 4, padding: '1.75rem', textAlign: 'left' }}>
              <Brain size={20} color="white" style={{ marginBottom: '0.75rem' }} />
              <h3 style={{ fontWeight: 600, fontSize: '1.1rem', color: 'white', marginBottom: '0.6rem' }}>Vídeo de motivación y confianza</h3>
              <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.85)', lineHeight: 1.7 }}>Exclusivo. Para trabajar la confianza en ti misma y en tu cuerpo.</p>
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
            <p style={{ fontSize: '1rem', color: 'rgba(26,26,26,0.6)', marginTop: '0.75rem', maxWidth: 520, margin: '0.75rem auto 0' }}>
              4 vídeos por semana — 3 rutinas grabadas + 1 vídeo para tu mejor versión. Hazlos cuando puedas, sin presión.
            </p>
          </div>
          <div className="week-steps">
            {[
              { week: 'Semana 1', title: 'Conexión', desc: 'Reconecta con tu cuerpo y tu cicatriz. Rutinas muy suaves grabadas para empezar desde donde estás, sin forzar.', highlight: false },
              { week: 'Semana 2', title: 'Activación + Mente', desc: 'Activa abdomen y suelo pélvico. Incluye módulo de fortaleza mental exclusivo con vídeo de motivación y audio de creencias.', highlight: true },
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
          <div style={{ background: 'var(--black)', borderRadius: 4, padding: '1.25rem 1.5rem', textAlign: 'center', marginTop: '1.5rem' }}>
            <p style={{ fontSize: '0.95rem', color: 'white', lineHeight: 1.65, margin: 0 }}>
              ✦ Todos los vídeos son <strong style={{ color: 'var(--coral)' }}>grabados y on-demand</strong> — si un día no puedes, lo haces al día siguiente. <strong style={{ color: 'var(--coral)' }}>12 meses de acceso</strong>, sin presión.
            </p>
          </div>
        </div>
      </section>

      {/* ── CTA INTERMEDIO 2 ── */}
      <PriceCTA goComprar={goComprar} dark={true} />

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
            <p style={{ fontSize: '1rem', color: 'rgba(26,26,26,0.8)', lineHeight: 1.75, marginBottom: '1rem' }}>
              Consejos realistas adaptados a la vida postcesárea y postparto para seguir recuperando tu abdomen incluso cuando no estés haciendo las rutinas de ejercicio.
            </p>
            <ul className="check-list">
              {[
                'Hábitos para integrar en tu día a día como madre',
                'Pequeñas acciones que marcan la diferencia en tu recuperación',
                'Pensado para mamás reales con poco tiempo'
              ].map((t, i) => (
                <li key={i} style={{ fontSize: '0.95rem' }}><Check size={14} />{t}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── VALOR DEL PROGRAMA ── */}
      <section style={{ background: 'var(--black)', padding: '2rem 1.5rem', textAlign: 'center' }}>
        <div style={{ maxWidth: 620, margin: '0 auto' }}>
          <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.6)', marginBottom: '0.75rem', letterSpacing: '0.05em', textTransform: 'uppercase', fontWeight: 600 }}>El valor de este programa</p>
          <p style={{ fontSize: '1.15rem', color: 'white', lineHeight: 1.8, margin: 0 }}>
            El valor total de todo lo que incluye es de{' '}
            <strong style={{ color: 'rgba(255,255,255,0.45)', textDecoration: 'line-through' }}>€527</strong>.
            {' '}El precio de venta al público es{' '}
            <strong style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'line-through' }}>€147</strong>.
            {' '}Tu precio de acceso prioritario:{' '}
            <strong style={{ color: 'var(--coral)', fontSize: '1.4rem' }}>€97</strong>.
          </p>
        </div>
      </section>

      {/* ── RESULTADOS + TESTIMONIOS ── */}
      <section className="section" style={{ background: 'var(--white)' }}>
        <div className="container-mid">
          <div className="text-center" style={{ marginBottom: '2rem' }}>
            <div style={label()}>Resultados reales</div>
            <h2 className="t-serif" style={{ fontSize: 'clamp(1.65rem, 3vw, 2.25rem)', color: 'var(--black)' }}>Así se transforman las mamás con el método</h2>
            <p style={{ fontSize: '1.05rem', color: 'rgba(26,26,26,0.6)', marginTop: '0.5rem' }}>+3.000 mamás ya han completado el método</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0.75rem', marginBottom: '0.75rem' }}>
            {[1,2,3,4].map((n) => (
              <div key={n} style={{ borderRadius: 6, overflow: 'hidden', boxShadow: '0 2px 10px rgba(0,0,0,0.08)' }}>
                <img src={`/images/antes-despues-${n}.png`} alt={`Resultado ${n}`} style={{ width: '100%', display: 'block' }} />
              </div>
            ))}
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '0.75rem' }}>
            {[1,2,3,4,5,6,7,8].map((n) => (
              <div key={n} style={{ borderRadius: 6, overflow: 'hidden', boxShadow: '0 2px 10px rgba(0,0,0,0.08)' }}>
                <img src={`/images/testimonial-${n}.jpg`} alt={`Testimonio ${n}`} style={{ width: '100%', display: 'block' }} />
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
                <li>• Quieres hacer ejercicio a tu ritmo, cuando puedas</li>
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

      {/* ── SOBRE MÍ ── */}
      <section className="section" style={{ background: 'var(--white)', paddingBottom: '2rem' }}>
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'row', gap: '3rem', alignItems: 'flex-start', flexWrap: 'wrap' }}>
            <div style={{ flex: '0 0 400px', maxWidth: 400 }}>
              <img src="/images/susana-cercana.JPG" alt="Susana Ares" style={{ width: '100%', borderRadius: 2, boxShadow: '0 4px 24px rgba(0,0,0,0.1)', objectFit: 'cover' }} />
            </div>
            <div style={{ flex: 1, minWidth: 280 }}>
              <div className="t-label text-muted" style={{ marginBottom: '0.5rem' }}>Sobre mí</div>
              <h2 className="t-serif" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', color: 'var(--black)', marginBottom: '1.25rem' }}>Soy Susana Ares</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.925rem', color: 'rgba(26,26,26,0.8)', lineHeight: 1.7 }}>
                <p>Mamá de tres hijos. Pasé por la cesárea, el postparto y ese momento en el que te miras al espejo y no te reconoces. Sé exactamente cómo se siente porque yo también lo viví.</p>
                <p>No soy solo una instructora. Soy una madre real que se transformó, que se formó como <strong style={{ color: 'var(--black)' }}>instructora de pilates terapéutico</strong> y que ha trabajado profundamente la fortaleza mental — no para darte teoría, sino para acompañarte desde dentro.</p>
                <p>Mi forma de trabajar no es la de un gimnasio ni la de una psicóloga. Es algo diferente: un acompañamiento cálido, real, adaptado a ti, donde el objetivo no es que seas la de antes sino que descubras que ahora eres más.</p>
                <p>He acompañado a más de <strong style={{ color: 'var(--coral)' }}>3.000 mamás</strong> a recuperarse — muchas de ellas sin experiencia previa en ejercicio y tras una cesárea.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PRICING CTA ── */}
      <section id="comprar" className="section" style={{ background: 'var(--beige)', paddingTop: '2rem' }}>
        <div className="container-narrow">
          <div className="text-center" style={{ marginBottom: '2rem' }}>
            <div style={label('var(--coral)')}>Acceso prioritario</div>
            <h2 className="t-serif" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.25rem)' }}>Consigue tu plaza ahora</h2>
          </div>
          <div className="card" style={{ padding: '2.5rem' }}>
            <ul className="check-list" style={{ marginBottom: '2rem' }}>
              {[
                'Programa online de 4 semanas · Vídeos grabados, a tu ritmo',
                '3 rutinas semanales grabadas de 15-30 min sin impacto',
                '1 vídeo semanal para tu mejor versión',
                '🧠 Módulo de fortaleza mental: vídeo de motivación y confianza',
                '🎧 Audio de creencias: somos merecedoras',
                '🎬 Vídeo "Siguientes Pasos" al finalizar el programa',
                'Sin equipamiento, desde casa, cuando puedas',
                '12 meses de acceso completo',
                'BONUS: Recupera tu abdomen en tu día a día'
              ].map((t, i) => (
                <li key={i} style={{ fontSize: '1rem', paddingBottom: '0.3rem' }}><Check size={16} />{t}</li>
              ))}
            </ul>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', background: 'rgba(26,26,26,0.04)', border: '1px solid rgba(26,26,26,0.12)', borderRadius: 4, padding: '1rem', marginBottom: '2rem' }}>
              <ShieldCheck size={20} style={{ color: 'var(--coral)', flexShrink: 0, marginTop: 2 }} />
              <div>
                <p style={{ fontWeight: 600, fontSize: '0.95rem', color: 'var(--coral)', marginBottom: '0.25rem' }}>Precio especial de acceso prioritario</p>
                <p style={{ fontSize: '0.9rem', color: 'rgba(26,26,26,0.65)', lineHeight: 1.65 }}>Precio especial exclusivo para la lista prioritaria.</p>
              </div>
            </div>
            <div className="text-center" style={{ borderTop: '1px solid var(--pearl)', paddingTop: '2rem' }}>
              <div style={{ marginBottom: '1.5rem' }}>
                <span style={{ fontSize: '1.1rem', color: 'rgba(26,26,26,0.35)', textDecoration: 'line-through' }}>€147</span>
                <div style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(3rem, 8vw, 4rem)', color: 'var(--coral)', fontWeight: 600, lineHeight: 1, marginTop: '0.25rem' }}>€97</div>
                <p style={{ fontSize: '0.9rem', color: 'rgba(26,26,26,0.45)', marginTop: '0.4rem' }}>✅ Pago único · ✅ 12 meses de acceso · ✅ Sin suscripción</p>
              </div>
              <button className="btn-coral" style={{ fontSize: '1.1rem', padding: '1.2rem 3rem', width: '100%', maxWidth: 420 }} onClick={goComprar}>
                Quiero empezar mi recuperación
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

      {/* ── CIERRE DE OBJECIÓN ── */}
      <section style={{ background: 'var(--white)', padding: '3rem 1.5rem' }}>
        <div style={{ maxWidth: 580, margin: '0 auto', textAlign: 'center' }}>
          <h2 className="t-serif" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', color: 'var(--black)', fontWeight: 400, marginBottom: '1.25rem' }}>
            "Ya lo intenté antes y no funcionó."
          </h2>
          <p style={{ fontSize: '1.05rem', color: 'rgba(26,26,26,0.75)', lineHeight: 1.8, marginBottom: '1.25rem' }}>
            Si lo intentaste antes y no funcionó, no es porque tú hayas fallado. Es porque el método no estaba adaptado a tu cuerpo de madre. <strong style={{ color: 'var(--black)' }}>Este sí lo está.</strong>
          </p>
          <p style={{ fontSize: '1.05rem', color: 'rgba(26,26,26,0.75)', lineHeight: 1.8 }}>
            Rutinas sin impacto, desde cero, pensadas para cesárea y parto vaginal. Para madres sin experiencia previa. Para madres con poco tiempo. Para madres que están hartas de no saber por dónde empezar.
          </p>
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
          <p style={{ fontSize: '1.15rem', marginBottom: '1.5rem', opacity: 0.9 }}>Precio especial de acceso prioritario.</p>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', marginBottom: '0.5rem' }}>
            <span style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.4)', textDecoration: 'line-through' }}>€147</span>
            <span style={{ fontFamily: 'var(--sans)', fontWeight: 700, fontSize: '2rem', color: 'white' }}>€97</span>
            <span style={{ fontSize: '0.8rem', background: 'white', color: 'var(--coral)', fontWeight: 700, padding: '0.25rem 0.6rem', borderRadius: 4 }}>Ahorras €50</span>
          </div>
          <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.875rem', marginBottom: '1.5rem' }}>✅ Pago único · ✅ 12 meses · ✅ Sin suscripción</p>
          <button className="btn-white" style={{ fontSize: '1.05rem', padding: '1.1rem 2.5rem' }} onClick={goComprar}>
            Quiero empezar mi recuperación
          </button>
        </div>
      </div>

    </div>
  );
}
