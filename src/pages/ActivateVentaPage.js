import { useState, useEffect } from 'react';
import { Check, ChevronDown, ShieldCheck, Zap, Users } from 'lucide-react';

const CHECKOUT_URL = 'https://pay.hotmart.com/M106127773H?off=4ngusnje&bid=1781083829312&src=venta-activate';

// Comparte el mismo countdown de 48h que /acceso-prioritario y /gracias-masterclass
const COUNTDOWN_HOURS = 48;
const COUNTDOWN_STORAGE_KEY = 'ap_countdown_deadline_v2';

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
    <span style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.9)', fontWeight: 600 }}>
      Precio especial caduca en {pad(timeLeft.h)} horas : {pad(timeLeft.m)} min : {pad(timeLeft.s)} seg
    </span>
  );
}

function BigCTA({ onClick, small = false }) {
  return (
    <button
      onClick={onClick}
      style={{
        display: 'block', width: '100%', maxWidth: 480, margin: '0 auto',
        background: 'var(--coral)', color: 'white', fontFamily: 'var(--sans)',
        fontWeight: 800, fontSize: small ? '1.05rem' : '1.25rem', lineHeight: 1.3,
        padding: small ? '1.1rem 1.5rem' : '1.4rem 1.75rem', borderRadius: 8, border: 'none',
        cursor: 'pointer', boxShadow: '0 6px 24px rgba(232,115,90,0.35)', letterSpacing: '0.01em'
      }}
    >
      Quiero empezar mi recuperación
    </button>
  );
}

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

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div onClick={() => setOpen(!open)} style={{ borderBottom: '1px solid rgba(26,26,26,0.1)', cursor: 'pointer', padding: '1.25rem 0' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem' }}>
        <p style={{ fontWeight: 700, fontSize: '1.1rem', color: 'var(--black)', lineHeight: 1.4 }}>{q}</p>
        <ChevronDown size={20} style={{ color: 'var(--coral)', flexShrink: 0, transform: open ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s ease' }} />
      </div>
      {open && <p style={{ fontSize: '1.05rem', color: 'rgba(26,26,26,0.75)', lineHeight: 1.8, marginTop: '0.75rem' }}>{a}</p>}
    </div>
  );
}

export default function ActivateVentaPage() {
  const goComprar = () => {
    localStorage.setItem('activate_purchase_price', '97');
    localStorage.setItem('activate_purchase_product', 'Método Actívate - Página de Venta');
    window.open(CHECKOUT_URL, '_blank');
  };

  return (
    <div style={{ fontFamily: 'var(--sans)' }}>

      {/* ── 1. BARRA SUPERIOR (fija) ── */}
      <div style={{ background: 'var(--black)', borderTop: '3px solid var(--coral)', padding: '0.65rem 1.25rem', textAlign: 'center', position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100, display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'var(--coral)', color: 'white', fontWeight: 800, fontSize: '0.8rem', letterSpacing: '0.08em', textTransform: 'uppercase', padding: '0.35rem 1rem', borderRadius: 999 }}>
          ✦ Acceso Prioritario
        </span>
        <CountdownBar />
      </div>
      <div style={{ height: '56px' }} />

      {/* ── 2. HOOK DE DOLOR (sin CTA) ── */}
      <section style={{ background: 'var(--black)', padding: '2.5rem 1.5rem 2rem', textAlign: 'center' }}>
        <p style={{ maxWidth: 620, margin: '0 auto', fontSize: 'clamp(1.35rem, 4.5vw, 1.85rem)', color: 'white', fontWeight: 700, lineHeight: 1.35 }}>
          Sin rutinas imposibles, sin esperar a "estar lista", sin depender de tener tiempo libre
        </p>
      </section>

      {/* ── 3. IMAGEN DEL PRODUCTO ── */}
      <section style={{ background: 'var(--peach)', padding: '2rem 1.25rem' }}>
        <img
          src="/hero-venta-activate.png"
          alt="Todo lo que incluye Método Actívate"
          style={{ display: 'block', width: '100%', maxWidth: 560, margin: '0 auto', borderRadius: 8, boxShadow: '0 8px 32px rgba(0,0,0,0.15)' }}
        />
      </section>

      {/* ── 4. PROMESA PRINCIPAL + CTA ── */}
      <section style={{ background: 'var(--peach)', padding: '1rem 1.5rem 2.5rem', textAlign: 'center' }}>
        <div style={{ maxWidth: 560, margin: '0 auto' }}>
          <h1 className="t-serif" style={{ fontSize: 'clamp(2rem, 7vw, 3.25rem)', lineHeight: 1.1, color: 'var(--black)', marginBottom: '1rem' }}>
            Vuelve a sentirte tú, después de ser madre
          </h1>
          <p style={{ fontSize: '1.15rem', color: 'rgba(26,26,26,0.8)', lineHeight: 1.65, marginBottom: '1.25rem' }}>
            Programa online de <strong>4 semanas</strong> para madres. Ejercicios adaptados a cesárea y parto vaginal; sin importar si fue hace meses o años. Desde casa, a tu ritmo.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}>
            <span className="pill" style={{ fontSize: '1rem', padding: '0.55rem 1.1rem' }}><Users size={16} />+3.000 mamás</span>
          </div>
          <BigCTA onClick={goComprar} />
        </div>
      </section>

      {/* ── 5. LO QUE CONSEGUIRÁS + CTA ── */}
      <section style={{ background: 'var(--white)', padding: '3rem 1.5rem' }}>
        <div style={{ maxWidth: 560, margin: '0 auto' }}>
          <h2 className="t-serif" style={{ fontSize: 'clamp(1.6rem, 5vw, 2.1rem)', color: 'var(--black)', textAlign: 'center', marginBottom: '2rem' }}>
            Esto es lo que vas a conseguir
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem', marginBottom: '2rem' }}>
            {[
              'Reconectar con tu cuerpo y tu cicatriz, sin forzar',
              'Activar abdomen y suelo pélvico de forma segura',
              'Trabajar tu confianza y fortaleza mental, no solo el físico',
              'Un plan progresivo que respeta tu recuperación real',
            ].map((t, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.85rem' }}>
                <Check size={24} style={{ color: 'var(--coral)', flexShrink: 0, marginTop: 2 }} />
                <p style={{ fontSize: '1.15rem', color: 'var(--black)', fontWeight: 600, lineHeight: 1.5, margin: 0 }}>{t}</p>
              </div>
            ))}
          </div>
          <BigCTA onClick={goComprar} />
        </div>
      </section>

      {/* ── 6. LAS 4 SEMANAS + CTA ── */}
      <section style={{ background: 'var(--beige)', padding: '3rem 1.5rem' }}>
        <div style={{ maxWidth: 620, margin: '0 auto' }}>
          <h2 className="t-serif" style={{ fontSize: 'clamp(1.6rem, 5vw, 2.1rem)', color: 'var(--black)', textAlign: 'center', marginBottom: '0.6rem' }}>
            Un plan progresivo semana a semana
          </h2>
          <p style={{ fontSize: '1.05rem', color: 'rgba(26,26,26,0.65)', textAlign: 'center', marginBottom: '2rem', lineHeight: 1.6 }}>
            4 vídeos por semana — 3 rutinas grabadas + 1 vídeo para tu mejor versión. Hazlos cuando puedas, sin presión.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '1.5rem' }}>
            {[
              { n: '1', t: 'Conexión', d: 'Reconecta con tu cuerpo y tu cicatriz. Rutinas muy suaves para empezar desde donde estás.' },
              { n: '2', t: 'Activación + Mente', d: 'Activa abdomen y suelo pélvico. Incluye módulo de fortaleza mental con vídeo de motivación y audio de creencias.' },
              { n: '3', t: 'Fortalecimiento', d: 'Aumenta la intensidad respetando tu recuperación. Empiezas a notar cambios.' },
              { n: '4', t: 'Consolidación', d: 'Integra todo lo aprendido y celebra los resultados en tu cuerpo y tu confianza.' },
            ].map((item) => (
              <div key={item.n} style={{ background: 'var(--white)', borderRadius: 8, padding: '1.5rem', display: 'flex', gap: '1.25rem', alignItems: 'flex-start', boxShadow: '0 1px 8px rgba(0,0,0,0.05)' }}>
                <span style={{ fontFamily: 'var(--serif)', fontSize: '2.25rem', color: 'var(--coral)', fontWeight: 700, lineHeight: 1, flexShrink: 0, minWidth: 40 }}>{item.n}</span>
                <div>
                  <p style={{ fontWeight: 700, fontSize: '1.1rem', color: 'var(--black)', marginBottom: '0.3rem' }}>{item.t}</p>
                  <p style={{ fontSize: '0.975rem', color: 'rgba(26,26,26,0.7)', lineHeight: 1.6, margin: 0 }}>{item.d}</p>
                </div>
              </div>
            ))}
          </div>
          <div style={{ background: 'var(--black)', borderRadius: 6, padding: '1.1rem 1.4rem', textAlign: 'center', marginBottom: '2rem' }}>
            <p style={{ fontSize: '1rem', color: 'white', lineHeight: 1.6, margin: 0 }}>
              ✦ Todos los vídeos son <strong style={{ color: 'var(--coral)' }}>grabados y on-demand</strong> — si un día no puedes, lo haces al día siguiente.
            </p>
          </div>
          <BigCTA onClick={goComprar} />
        </div>
      </section>

      {/* ── 7. PRUEBA SOCIAL EN NÚMEROS + CTA ── */}
      <section style={{ background: 'var(--coral)', padding: '3rem 1.5rem', textAlign: 'center' }}>
        <div style={{ maxWidth: 480, margin: '0 auto' }}>
          <p style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(2.5rem, 10vw, 3.75rem)', color: 'white', fontWeight: 700, lineHeight: 1, marginBottom: '0.5rem' }}>
            +3.000
          </p>
          <p style={{ fontSize: '1.3rem', color: 'white', fontWeight: 700, marginBottom: '2rem' }}>
            mamás recuperadas
          </p>
          <button
            onClick={goComprar}
            style={{ display: 'block', width: '100%', maxWidth: 480, margin: '0 auto', background: 'white', color: 'var(--coral)', fontFamily: 'var(--sans)', fontWeight: 800, fontSize: '1.25rem', padding: '1.4rem 1.75rem', borderRadius: 8, border: 'none', cursor: 'pointer', boxShadow: '0 6px 24px rgba(0,0,0,0.15)' }}
          >
            Quiero empezar mi recuperación
          </button>
        </div>
      </section>

      {/* ── 8. OBJECIÓN / AGITACIÓN + CTA ── */}
      <section style={{ background: 'var(--white)', padding: '3rem 1.5rem' }}>
        <div style={{ maxWidth: 560, margin: '0 auto', textAlign: 'center' }}>
          <h2 className="t-serif" style={{ fontSize: 'clamp(1.5rem, 5vw, 2rem)', color: 'var(--black)', fontWeight: 400, marginBottom: '1.25rem' }}>
            "Ya lo intenté antes y no funcionó."
          </h2>
          <p style={{ fontSize: '1.1rem', color: 'rgba(26,26,26,0.8)', lineHeight: 1.75, marginBottom: '1.25rem' }}>
            Si lo intentaste antes y no funcionó, no es porque tú hayas fallado. Es porque el método no estaba adaptado a tu cuerpo de madre. <strong style={{ color: 'var(--black)' }}>Este sí lo está.</strong>
          </p>
          <p style={{ fontSize: '1.1rem', color: 'rgba(26,26,26,0.8)', lineHeight: 1.75, marginBottom: '2rem' }}>
            Rutinas sin impacto, desde cero, pensadas para cesárea y parto vaginal. Para madres sin experiencia previa. Para madres con poco tiempo. Para madres que están hartas de no saber por dónde empezar.
          </p>
          <BigCTA onClick={goComprar} />
        </div>
      </section>

      {/* ── 9. LO QUE NO NECESITAS + CTA ── */}
      <section style={{ background: 'var(--beige)', padding: '3rem 1.5rem' }}>
        <div style={{ maxWidth: 560, margin: '0 auto', textAlign: 'center' }}>
          <h2 className="t-serif" style={{ fontSize: 'clamp(1.5rem, 5vw, 2rem)', color: 'var(--black)', fontWeight: 400, marginBottom: '2rem' }}>
            No necesitas ninguna de estas cosas para empezar
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0.85rem', marginBottom: '1.75rem' }}>
            {[
              '❌ Experiencia previa haciendo ejercicio',
              '❌ Equipamiento o materiales',
              '❌ Que tu cuerpo esté "preparado"',
              '❌ Horas fijas en el día',
            ].map((t, i) => (
              <div key={i} style={{ background: 'var(--white)', borderRadius: 8, padding: '1.1rem 1.4rem', fontSize: '1.05rem', color: 'rgba(26,26,26,0.85)', fontWeight: 600 }}>
                {t}
              </div>
            ))}
          </div>
          <p style={{ fontSize: '1.2rem', color: 'var(--black)', fontWeight: 700, marginBottom: '2rem' }}>
            Solo necesitas querer empezar. El método hace el resto.
          </p>
          <BigCTA onClick={goComprar} />
        </div>
      </section>

      {/* ── 10. OFERTA COMPLETA — CIERRE ── */}
      <section id="oferta" style={{ background: 'var(--black)', padding: '3.5rem 1.5rem' }}>
        <div style={{ maxWidth: 560, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <p style={{ fontSize: '0.9rem', fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--coral)', marginBottom: '0.5rem' }}>Acceso Prioritario</p>
            <h2 className="t-serif" style={{ fontSize: 'clamp(1.75rem, 6vw, 2.5rem)', color: 'white', fontWeight: 400 }}>
              Consigue tu plaza ahora
            </h2>
          </div>

          <div style={{ background: 'white', borderRadius: 12, padding: '2rem 1.5rem' }}>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.85rem', marginBottom: '1.75rem' }}>
              {[
                'Programa online de 4 semanas · Vídeos grabados, a tu ritmo',
                '3 rutinas semanales grabadas de 15-30 min, sin impacto',
                '1 vídeo semanal para tu mejor versión',
                '🧠 Módulo de fortaleza mental: vídeo de motivación y confianza',
                '🎧 Audio de creencias: somos merecedoras',
                '12 meses de acceso completo',
                'BONUS: Recupera tu abdomen en tu día a día',
              ].map((t, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.7rem', fontSize: '1.05rem', color: 'var(--black)', fontWeight: 500, lineHeight: 1.5 }}>
                  <Check size={20} style={{ color: 'var(--coral)', flexShrink: 0, marginTop: 2 }} />
                  {t}
                </li>
              ))}
            </ul>

            <div style={{ textAlign: 'center', marginBottom: '1.75rem' }}>
              <p style={{ fontSize: '1rem', color: 'rgba(26,26,26,0.55)' }}>El valor total de todo lo que incluye es de <strong style={{ textDecoration: 'line-through' }}>€527</strong></p>
              <p style={{ fontSize: '1.1rem', color: 'rgba(26,26,26,0.4)', textDecoration: 'line-through', marginTop: '0.3rem' }}>€147</p>
              <p style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(3rem, 12vw, 4.5rem)', color: 'var(--coral)', fontWeight: 700, lineHeight: 1, marginTop: '0.25rem' }}>€97</p>
              <p style={{ fontSize: '0.95rem', color: 'rgba(26,26,26,0.5)', marginTop: '0.4rem' }}>Tu precio de acceso prioritario</p>
            </div>

            <div style={{ background: 'var(--peach)', borderRadius: 8, padding: '1.25rem 1.5rem', marginBottom: '1.75rem', textAlign: 'center' }}>
              <p style={{ fontWeight: 800, fontSize: '1.05rem', color: 'var(--black)', marginBottom: '0.35rem' }}>🛡 Tu recuperación, sin riesgo</p>
              <p style={{ fontSize: '0.95rem', color: 'rgba(26,26,26,0.75)', lineHeight: 1.6, margin: 0 }}>
                Pruébalo 15 días. Si sientes que no es para ti, te devolvemos el 100% de tu dinero. Sin preguntas, sin letra pequeña.
              </p>
            </div>

            <BigCTA onClick={goComprar} />

            <p style={{ fontSize: '0.85rem', color: 'rgba(26,26,26,0.5)', textAlign: 'center', marginTop: '1rem' }}>
              ✅ Pago único · ✅ 12 meses de acceso · ✅ Sin suscripción · ✅ Garantía 15 días
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '1.25rem', marginTop: '1rem', flexWrap: 'wrap' }}>
              <span style={{ fontSize: '0.8rem', color: 'rgba(26,26,26,0.5)', display: 'flex', alignItems: 'center', gap: '0.3rem' }}><ShieldCheck size={13} /> Pago seguro</span>
              <span style={{ fontSize: '0.8rem', color: 'rgba(26,26,26,0.5)', display: 'flex', alignItems: 'center', gap: '0.3rem' }}><Zap size={13} /> Acceso inmediato</span>
              <span style={{ fontSize: '0.8rem', color: 'rgba(26,26,26,0.5)', display: 'flex', alignItems: 'center', gap: '0.3rem' }}><Users size={13} /> +3.000 mamás</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── 11. TESTIMONIOS ── */}
      <section style={{ background: 'var(--white)', padding: '3rem 1.5rem' }}>
        <div style={{ maxWidth: 720, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <h2 className="t-serif" style={{ fontSize: 'clamp(1.6rem, 5vw, 2.1rem)', color: 'var(--black)' }}>Así se transforman las mamás con el método</h2>
            <p style={{ fontSize: '1.05rem', color: 'rgba(26,26,26,0.6)', marginTop: '0.5rem' }}>+3.000 mamás ya han completado el método</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.75rem', marginBottom: '0.75rem' }}>
            {[1, 2, 3, 4].map((n) => (
              <div key={n} style={{ borderRadius: 8, overflow: 'hidden', boxShadow: '0 2px 10px rgba(0,0,0,0.08)' }}>
                <img src={`/images/antes-despues-${n}.png`} alt={`Resultado ${n}`} style={{ width: '100%', display: 'block' }} />
              </div>
            ))}
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.75rem' }}>
            {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
              <div key={n} style={{ borderRadius: 8, overflow: 'hidden', boxShadow: '0 2px 10px rgba(0,0,0,0.08)' }}>
                <img src={`/images/testimonial-${n}.jpg`} alt={`Testimonio ${n}`} style={{ width: '100%', display: 'block' }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 12. ES PARA TI SI / NO ES PARA TI ── */}
      <section style={{ background: 'var(--beige)', padding: '3rem 1.5rem' }}>
        <div style={{ maxWidth: 640, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1rem' }}>
          <div style={{ background: 'var(--white)', borderRadius: 10, padding: '1.75rem' }}>
            <h3 style={{ fontWeight: 800, fontSize: '1.15rem', display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
              <Check size={20} style={{ color: 'var(--coral)' }} /> ES para ti si…
            </h3>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '1rem', color: 'rgba(26,26,26,0.8)', lineHeight: 1.5 }}>
              <li>• Tienes más de 40 días tras parto vaginal</li>
              <li>• Tienes más de 2 meses tras cesárea</li>
              <li>• Quieres hacer ejercicio a tu ritmo, cuando puedas</li>
              <li>• Tu cicatriz de cesárea te genera inseguridad</li>
              <li>• Quieres recuperar tu cuerpo y también tu confianza</li>
            </ul>
          </div>
          <div style={{ background: 'var(--white)', borderRadius: 10, padding: '1.75rem' }}>
            <h3 style={{ fontWeight: 800, fontSize: '1.15rem', display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
              <span style={{ color: 'rgba(26,26,26,0.4)' }}>✕</span> NO es para ti si…
            </h3>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '1rem', color: 'rgba(26,26,26,0.6)', lineHeight: 1.5 }}>
              <li>• Buscas entrenamientos de alta intensidad</li>
              <li>• No estás dispuesta a dedicar 15-30 min algunos días</li>
              <li>• Prefieres ir a un gimnasio presencial</li>
              <li>• Tu médico te ha recomendado no hacer ejercicio todavía</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ── 13. SOBRE MÍ (versión corta) ── */}
      <section style={{ background: 'var(--white)', padding: '3rem 1.5rem' }}>
        <div style={{ maxWidth: 480, margin: '0 auto', textAlign: 'center' }}>
          <img
            src="/images/susana-cercana.JPG"
            alt="Susana Ares"
            style={{ width: 120, height: 120, borderRadius: '50%', objectFit: 'cover', objectPosition: 'top', boxShadow: '0 4px 20px rgba(0,0,0,0.12)', margin: '0 auto 1.25rem' }}
          />
          <h2 className="t-serif" style={{ fontSize: 'clamp(1.5rem, 5vw, 1.9rem)', color: 'var(--black)', marginBottom: '1rem' }}>Soy Susana Ares</h2>
          <p style={{ fontSize: '1.05rem', color: 'rgba(26,26,26,0.8)', lineHeight: 1.75, marginBottom: '1rem' }}>
            Mamá de tres hijos. Pasé por la cesárea, el postparto y ese momento en el que te miras al espejo y no te reconoces. Sé exactamente cómo se siente porque yo también lo viví.
          </p>
          <p style={{ fontSize: '1.05rem', color: 'rgba(26,26,26,0.8)', lineHeight: 1.75 }}>
            He acompañado a más de <strong style={{ color: 'var(--coral)' }}>3.000 mamás</strong> a recuperarse — muchas de ellas sin experiencia previa en ejercicio y tras una cesárea.
          </p>
        </div>
      </section>

      {/* ── 14. FAQ + CTA FINAL ── */}
      <section style={{ background: 'var(--beige)', padding: '3rem 1.5rem' }}>
        <div style={{ maxWidth: 640, margin: '0 auto' }}>
          <h2 className="t-serif" style={{ fontSize: 'clamp(1.6rem, 5vw, 2.1rem)', color: 'var(--black)', textAlign: 'center', marginBottom: '2rem' }}>
            Preguntas frecuentes
          </h2>
          <div style={{ background: 'var(--white)', borderRadius: 10, padding: '0.5rem 1.5rem', marginBottom: '2.5rem' }}>
            {FAQS.map((faq, i) => <FaqItem key={i} q={faq.q} a={faq.a} />)}
          </div>
          <p style={{ textAlign: 'center', fontSize: '0.975rem', color: 'rgba(26,26,26,0.6)', marginBottom: '2.5rem' }}>
            ¿Tienes alguna pregunta más? <a href="mailto:info@esencialsusanaares.com" style={{ color: 'var(--coral)', fontWeight: 700 }}>info@esencialsusanaares.com</a>
          </p>

          <div style={{ textAlign: 'center' }}>
            <h2 className="t-serif" style={{ fontSize: 'clamp(1.6rem, 6vw, 2.25rem)', color: 'var(--black)', marginBottom: '0.5rem' }}>¿Lista para empezar?</h2>
            <p style={{ fontSize: '1.05rem', color: 'rgba(26,26,26,0.65)', marginBottom: '1rem' }}>Precio especial de acceso prioritario.</p>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.85rem', marginBottom: '1.5rem' }}>
              <span style={{ fontSize: '1.1rem', color: 'rgba(26,26,26,0.4)', textDecoration: 'line-through' }}>€147</span>
              <span style={{ fontFamily: 'var(--serif)', fontSize: '2.25rem', color: 'var(--coral)', fontWeight: 700 }}>€97</span>
              <span style={{ fontSize: '0.8rem', background: 'var(--coral)', color: 'white', fontWeight: 800, padding: '0.3rem 0.7rem', borderRadius: 4 }}>Ahorras €50</span>
            </div>
            <p style={{ fontSize: '0.9rem', color: 'rgba(26,26,26,0.55)', marginBottom: '1.5rem' }}>
              ✅ Pago único · ✅ 12 meses · ✅ Sin suscripción · ✅ Garantía 15 días
            </p>
            <BigCTA onClick={goComprar} />
          </div>
        </div>
      </section>

    </div>
  );
}
