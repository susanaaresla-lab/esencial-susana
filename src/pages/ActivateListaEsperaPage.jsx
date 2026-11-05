import { ArrowLeft, Check, X, ChevronDown, ShieldCheck, Play } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

const DEADLINE = new Date('2026-11-07T23:59:00+01:00');
const CHECKOUT_URL = 'https://pay.hotmart.com/M106127773H?checkoutMode=10';

const goComprar = () => {
  try {
    localStorage.setItem('activate_purchase_price', '97');
    localStorage.setItem('activate_purchase_product', 'Método Actívate');
  } catch (e) { /* sin almacenamiento: seguimos igual */ }
  window.open(CHECKOUT_URL, '_blank');
};

/* ───────────── CONTENIDO ───────────── */

const SIN_LIST = [
  'Sin experiencia previa haciendo ejercicio',
  'Sin material ni equipamiento',
  'Sin horarios fijos',
  'Sin ejercicios de impacto',
  'Sin ir a un gimnasio',
  'Sin rutinas de una hora',
  'Sin importar si fue hace meses o años',
  'Sin que tu cuerpo tenga que "estar preparado"',
];

const BENEFITS = [
  { t: 'Reconectar con tu abdomen y tu cicatriz', d: 'sin miedo, empezando desde cero y sin forzar.' },
  { t: 'Activar abdomen y suelo pélvico', d: 'con rutinas sin impacto de 15–30 minutos.' },
  { t: 'Saber exactamente qué hacer cada semana', d: 'con un plan progresivo: Conexión, Activación, Fortalecimiento y Consolidación.' },
  { t: 'Seguir recuperando tu abdomen en tu día a día', d: 'incluso los días que no entrenas (bonus).' },
  { t: 'Volver a confiar en ti y en tu cuerpo', d: 'con el módulo de mente: vídeo y audio de motivación para cambiar cómo te hablas.' },
  { t: 'Hacerlo encajar en tu vida de madre', d: 'vídeos grabados que haces cuando puedas, sin presión.' },
  { t: 'Empezar desde donde estás', d: 'tras cesárea, parto vaginal o histerectomía, aunque hayan pasado años.' },
  { t: 'Ir a tu ritmo, sin prisas', d: 'con 12 meses de acceso completo.' },
];

const INCLUDES = [
  { t: '12 rutinas grabadas', d: '3 por semana, de 15–30 min, sin impacto. Específicas para no dañar tu cuerpo después de ser madre.' },
  { t: 'Módulo de mente', d: 'Vídeo de motivación y confianza + audio de motivación.' },
  { t: 'Comunidad privada Actívate', d: 'Donde comparto yo personalmente píldoras de motivación para que no lo dejes.' },
  { t: 'BONUS: Recupera tu abdomen en tu día a día', d: 'Hábitos reales para mamás con poco tiempo.' },
  { t: '12 meses de acceso', d: 'Desde el móvil o el ordenador, a tu ritmo.' },
];

const CREDS = [
  'Mamá de 3 hijos',
  'Pasé por una cesárea',
  'Instructora de pilates terapéutico',
  'Formada en fortaleza mental',
  '+3.000 mamás acompañadas',
];

const FOR_YES = [
  'Han pasado más de 40 días tras parto vaginal o 2 meses tras cesárea',
  'Quieres hacer ejercicio a tu ritmo, cuando puedas',
  'Tu cicatriz de cesárea te genera inseguridad',
  'Quieres recuperar tu cuerpo y también tu confianza',
  'No sabes por dónde empezar',
];

const FOR_NO = [
  'Buscas entrenamientos de alta intensidad',
  'No puedes dedicar 15–30 min algunos días',
  'Prefieres ir a un gimnasio presencial',
  'Tu médico te ha recomendado no hacer ejercicio todavía',
];

const FAQS = [
  { q: '¿Cuándo puedo empezar después de la cesárea?', a: 'Puedes empezar desde los 2 meses después de una cesárea. Los ejercicios de las primeras semanas son especialmente suaves y están pensados para respetar tu cicatriz y tu recuperación.' },
  { q: '¿Cuándo puedo empezar después de un parto vaginal?', a: 'Puedes empezar desde los 40 días después de un parto vaginal. Si tienes dudas, consulta antes con tu médico o matrona.' },
  { q: '¿Puedo hacerlo si nunca he hecho ejercicio o llevo años sin hacer nada?', a: 'Sí, especialmente. Este método está diseñado para empezar desde cero, sin importar tu nivel previo. Las rutinas son sin impacto y progresivas para que tu cuerpo se adapte poco a poco.' },
  { q: '¿El método está adaptado para cesárea?', a: 'Sí, especialmente. Está diseñado teniendo muy en cuenta las particularidades de la recuperación postcesárea: la cicatriz, la diástasis, el suelo pélvico y la reconexión con el abdomen.' },
  { q: '¿Cuánto tiempo necesito al día?', a: 'Las rutinas duran entre 15 y 30 minutos. Son vídeos grabados que puedes hacer cuando quieras — si un día no puedes, lo haces al día siguiente. A tu ritmo.' },
  { q: '¿Y si no soy constante?', a: 'Por eso existe la comunidad privada Actívate: comparto personalmente píldoras de motivación para que no lo dejes. Además, el plan te dice qué hacer cada semana y si un día fallas, sigues al siguiente sin culpa.' },
  { q: '¿Cuánto tiempo tengo acceso al programa?', a: '12 meses de acceso completo para que puedas empezar cuando tu cuerpo esté listo, sin prisas y sin presión.' },
  { q: '¿Qué pasa si un día no puedo hacer la rutina?', a: 'Absolutamente nada. Los vídeos son grabados y tienes 12 meses de acceso. Si un lunes no puedes, lo haces el martes. Si una semana no puedes, la recuperas la siguiente.' },
  { q: '¿Necesito material o equipamiento?', a: 'No. Todas las rutinas son sin impacto y se hacen con el peso de tu propio cuerpo, desde casa.' },
  { q: '¿Es un único pago?', a: 'Sí. Pagas una sola vez y tienes 12 meses de acceso completo. Sin suscripciones.' },
  { q: '¿Cómo accedo al programa después de comprarlo?', a: 'Recibirás un email con tu acceso inmediatamente después de la compra, con un enlace directo para empezar.' },
  { q: '¿Este método solo trabaja el cuerpo o también la mente?', a: 'Incluye un módulo de mente con vídeo y audio de motivación para trabajar la confianza en ti misma y en tu cuerpo.' },
];

/* ───────────── ESTILOS COMPARTIDOS ───────────── */

const ACCENT_DARK = '#B5482F'; // coral oscuro: texto blanco legible encima

const label = (color) => ({
  fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.14em',
  textTransform: 'uppercase', color: color || 'var(--coral)', marginBottom: '0.75rem',
});

const h2Style = (color) => ({
  fontSize: 'clamp(2rem, 4.5vw, 2.75rem)', lineHeight: 1.15, color: color || 'var(--black)', margin: 0,
});

const btnStyle = (variant = 'coral') => ({
  display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
  minHeight: 56, padding: '0 2.25rem', borderRadius: 999, border: 'none', cursor: 'pointer',
  fontWeight: 700, letterSpacing: '0.04em', fontSize: '1rem', textTransform: 'uppercase',
  background: variant === 'white' ? 'var(--white)' : ACCENT_DARK,
  color: variant === 'white' ? 'var(--black)' : '#FFFFFF',
});

const sectionPad = { padding: '4.5rem 1.5rem' };

/* CSS responsive (listas en 2 / 4 columnas, tarjetas centradas) */
const RESPONSIVE_CSS = `
  .act-l2 { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .act-l4 { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 1rem; }
  .act-inc { flex: 0 1 calc(33.333% - 11px); box-sizing: border-box; }
  @media (max-width: 900px) {
    .act-l4 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
    .act-inc { flex-basis: calc(50% - 8px); }
  }
  @media (max-width: 640px) {
    .act-l2 { grid-template-columns: minmax(0, 1fr); }
    .act-inc { flex-basis: 100%; }
  }
  @media (max-width: 420px) { .act-l4 { gap: 0.6rem; } }
`;

/* ───────────── COMPONENTES ───────────── */

function CTA({ children = 'Quiero empezar Actívate', variant = 'coral', note }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.6rem' }}>
      <button style={btnStyle(variant)} onClick={goComprar}>{children}</button>
      {note && <span style={{ fontSize: '0.85rem', opacity: 0.7, textAlign: 'center' }}>{note}</span>}
    </div>
  );
}

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ borderBottom: '1px solid rgba(26,26,26,0.1)' }}>
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        style={{ width: '100%', background: 'none', border: 'none', cursor: 'pointer', padding: '1.25rem 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem', textAlign: 'left' }}
      >
        <span style={{ fontWeight: 600, fontSize: '1.05rem', color: 'var(--black)', lineHeight: 1.4 }}>{q}</span>
        <ChevronDown size={18} style={{ color: 'var(--coral)', flexShrink: 0, transform: open ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s ease' }} />
      </button>
      {open && <p style={{ fontSize: '1rem', color: 'rgba(26,26,26,0.75)', lineHeight: 1.75, margin: '0 0 1.25rem' }}>{a}</p>}
    </div>
  );
}

function calcTimeLeft() {
  const diff = DEADLINE - Date.now();
  if (diff <= 0) return null;
  return {
    d: Math.floor(diff / 86400000),
    h: Math.floor((diff % 86400000) / 3600000),
    m: Math.floor((diff % 3600000) / 60000),
    s: Math.floor((diff % 60000) / 1000),
  };
}

function CountdownBar() {
  const [timeLeft, setTimeLeft] = useState(calcTimeLeft);
  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(calcTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);
  if (!timeLeft) return null;
  const pad = (n) => String(n).padStart(2, '0');
  return (
    <span style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.9)', textAlign: 'center', lineHeight: 1.4 }}>
      97€ solo hasta el <strong>7 de noviembre a las 23:59</strong> · Quedan{' '}
      <strong>{timeLeft.d}d : {pad(timeLeft.h)}h : {pad(timeLeft.m)}m : {pad(timeLeft.s)}s</strong>
    </span>
  );
}

/* ───────────── PÁGINA ───────────── */

export default function ActivateListaEsperaPage() {
  const navigate = useNavigate();
  const goBack = () => { navigate('/'); window.scrollTo(0, 0); };

  return (
    <div style={{ background: 'var(--white)', color: 'var(--black)' }}>
      <Helmet>
        <title>Lista de Acceso Prioritario | Método Esencial Madre: Actívate</title>
        <meta name="description" content="Vuelve a sentirte tú. Recupera tu abdomen y tu suelo pélvico después de ser madre. Acceso prioritario a 97€ hasta el 7 de noviembre." />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <style>{RESPONSIVE_CSS}</style>

      {/* ── 1 · BARRA TOP (fija) ── */}
      <div style={{ background: 'var(--black)', borderTop: '3px solid var(--coral)', padding: '0.6rem 1rem', position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100, display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: '0.5rem 1rem' }}>
        <span style={{ background: ACCENT_DARK, color: 'white', fontWeight: 700, fontSize: '0.72rem', letterSpacing: '0.08em', textTransform: 'uppercase', padding: '0.3rem 0.9rem', borderRadius: 999 }}>
          Lista de acceso prioritario
        </span>
        <CountdownBar />
      </div>
      <div style={{ height: 54 }} />

      {/* ── 2 · HERO ── */}
      <section style={{ background: 'var(--peach)', padding: '3rem 1.5rem 4.5rem' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '1.25rem' }}>
          <button className="btn-back" style={{ alignSelf: 'flex-start' }} onClick={goBack}>
            <ArrowLeft size={15} /> Volver al inicio
          </button>
          <div style={{ ...label(), marginBottom: 0 }}>Método Actívate</div>
          <h1 className="t-serif" style={{ fontSize: 'clamp(2.75rem, 7vw, 4.25rem)', lineHeight: 1.05, margin: 0 }}>
            Vuelve a sentirte tú
          </h1>
          <p style={{ fontSize: 'clamp(1.1rem, 2.2vw, 1.3rem)', maxWidth: 760, color: 'rgba(26,26,26,0.8)', margin: 0 }}>
            Recupera tu abdomen y tu suelo pélvico desde dentro después de ser madre, con rutinas completas de <strong>15–30 minutos</strong>, desde casa.
          </p>
          <img
            src="/images/hero-venta-activate.png"
            alt="Todo lo que incluye Actívate: rutinas en vídeo, audio, comunidad y plataforma del programa"
            style={{ width: '100%', maxWidth: 920, height: 'auto', display: 'block', marginTop: '0.5rem' }}
          />
          <p style={{ maxWidth: 720, margin: 0, lineHeight: 1.7 }}>
            Un programa online paso a paso, adaptado a <strong>cesárea o parto</strong>, aunque haya pasado mucho tiempo. Sin gimnasio, sin horarios y sin sentir que vas tarde.
          </p>
          <CTA note="+3.000 mamás ya lo han hecho · Un único pago · Acceso inmediato · 12 meses" />
        </div>
      </section>

      {/* ── 3 · HISTORIA PERSONAL ── */}
      <section style={{ ...sectionPad, background: 'var(--black)', color: 'white' }}>
        <div style={{ maxWidth: 760, margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '1.1rem' }}>
          <img
            src="/images/susana-antes-despues-2.jpg"
            alt="Susana antes y después de su recuperación postcesárea"
            style={{ width: '100%', maxWidth: 420, height: 'auto', borderRadius: 16, display: 'block' }}
          />
          <p style={{ margin: '0 0 0.5rem', fontSize: '0.95rem', color: '#F2A08D', fontWeight: 700, letterSpacing: '0.04em' }}>
            SUSANA ARES · Mamá de 3 · Instructora de pilates terapéutico
          </p>
          <h2 className="t-serif" style={h2Style('white')}>Si llevas meses (o años) sin saber por dónde empezar, no es culpa tuya</h2>
          <p style={{ margin: 0, color: 'rgba(255,255,255,0.88)', lineHeight: 1.75 }}>
            Soy Susana Ares y yo también me miré al espejo después de mi cesárea y no me reconocí. Con este mismo método me recuperé y he acompañado a <strong style={{ color: '#F2A08D' }}>más de 3.000 mamás</strong>, muchas sin haber hecho ejercicio nunca.
          </p>
          <p style={{ margin: 0, color: 'rgba(255,255,255,0.88)' }}>Sin gimnasio, sin material, sin rutinas de una hora y sin tener que "estar preparada".</p>
          <p className="t-serif" style={{ margin: '0.5rem 0 0', fontSize: '1.75rem', color: '#F2A08D', lineHeight: 1.3 }}>
            Tu cuerpo no está roto. Solo necesitaba un método pensado para tu cuerpo de madre.
          </p>
        </div>
      </section>

      {/* ── 4 · LISTA "SIN…" + PRECIO ── */}
      <section style={sectionPad}>
        <div style={{ maxWidth: 960, margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.75rem' }}>
          <h2 className="t-serif" style={{ ...h2Style(), textAlign: 'center' }}>Mi método es sencillo y se adapta a cualquier momento de tu maternidad</h2>
          <div className="act-l2" style={{ gap: '0 2.5rem', width: '100%', maxWidth: 820 }}>
            {SIN_LIST.map((t) => (
              <div key={t} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', padding: '0.9rem 0', borderBottom: '1px solid #EEE6E2' }}>
                <X size={20} strokeWidth={2.6} style={{ color: ACCENT_DARK, flexShrink: 0, marginTop: 3 }} />
                <span>{t}</span>
              </div>
            ))}
          </div>
          <p style={{ margin: 0, fontWeight: 700, textAlign: 'center' }}>Con Actívate vas a recuperarte sin necesitar nada de esto</p>
          <div id="precio" style={{ width: '100%', maxWidth: 520, border: '2px solid var(--black)', borderRadius: 20, padding: '2rem 1.5rem', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.6rem', textAlign: 'center' }}>
            <span style={{ ...label(ACCENT_DARK), marginBottom: 0 }}>Solo hasta el 7 de noviembre</span>
            <div className="t-serif" style={{ fontSize: '4.5rem', fontWeight: 700, lineHeight: 1 }}>97€</div>
            <span style={{ color: '#555' }}>Precio regular: <s>147€</s></span>
            <div style={{ marginTop: '0.5rem' }}>
              <CTA note="Un único pago · Acceso inmediato · Pago seguro · 12 meses">Quiero mi acceso prioritario</CTA>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5 · LO QUE VAS A CONSEGUIR ── */}
      <section style={{ ...sectionPad, background: 'var(--peach)' }}>
        <div style={{ maxWidth: 1040, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <h2 className="t-serif" style={{ ...h2Style(), textAlign: 'center' }}>Lo que vas a conseguir con Actívate</h2>
          <div className="act-l2" style={{ gap: '1rem' }}>
            {BENEFITS.map((b) => (
              <div key={b.t} style={{ display: 'flex', gap: '0.9rem', alignItems: 'flex-start', background: 'var(--white)', borderRadius: 14, padding: '1.1rem 1.25rem' }}>
                <Check size={22} strokeWidth={2.6} style={{ color: ACCENT_DARK, flexShrink: 0, marginTop: 2 }} />
                <span><strong>{b.t}</strong> {b.d}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6 · QUÉ INCLUYE ── */}
      <section style={sectionPad}>
        <div style={{ maxWidth: 960, margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.75rem' }}>
          <h2 className="t-serif" style={h2Style()}>¿Qué incluye?</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem', width: '100%' }}>
            {INCLUDES.map((inc) => (
              <div key={inc.t} className="act-inc" style={{ border: '1px solid #E5DAD5', borderRadius: 16, padding: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                <span style={{ fontWeight: 700, fontSize: '1.1rem' }}>{inc.t}</span>
                <span style={{ color: '#4A4A4A', fontSize: '0.95rem', lineHeight: 1.6 }}>{inc.d}</span>
              </div>
            ))}
          </div>
          <p style={{ margin: 0, textAlign: 'center' }}>
            Valor total: <s>527€</s> · Precio normal: <s>147€</s> · <strong>Hoy: 97€</strong>
          </p>
          <CTA>Estoy lista para empezar</CTA>
        </div>
      </section>

      {/* ── 7 · REENCUADRE ── */}
      <section style={{ ...sectionPad, background: 'var(--black)', color: 'white' }}>
        <div style={{ maxWidth: 760, margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '1.1rem' }}>
          <h2 className="t-serif" style={h2Style('white')}>Cada semana que esperas es una semana más sintiéndote lejos de tu cuerpo</h2>
          <p style={{ margin: 0, color: 'rgba(255,255,255,0.88)', lineHeight: 1.75 }}>
            Con Actívate <strong>NO</strong> tienes que pensar qué ejercicio hacer, <strong>NO</strong> tienes que buscar vídeos sueltos en YouTube y <strong>NO</strong> tienes que sacar una hora libre. Abres el vídeo del día, le das al play y listo.
          </p>
          <p style={{ margin: 0, color: '#F2A08D', fontSize: '1.2rem', fontWeight: 700 }}>
            Tu recuperación no necesita más fuerza de voluntad. Necesita el método correcto.
          </p>
          <div style={{ marginTop: '0.5rem' }}><CTA variant="white">Quiero empezar</CTA></div>
        </div>
      </section>

      {/* ── 8 · TESTIMONIOS ── */}
      <section style={sectionPad}>
        <div style={{ maxWidth: 1080, margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.75rem' }}>
          <h2 className="t-serif" style={{ ...h2Style(), textAlign: 'center' }}>Mis alumnas lo confirman</h2>
          <div className="act-l4" style={{ width: '100%' }}>
            {[1, 2, 3, 4].map((n) => (
              <img key={n} src={`/images/antes-despues-${n}.png`} alt="Antes y después de una alumna de Actívate" loading="lazy"
                style={{ width: '100%', aspectRatio: '1 / 1', objectFit: 'cover', borderRadius: 16, display: 'block' }} />
            ))}
          </div>
          <p style={{ margin: 0, fontWeight: 700, textAlign: 'center' }}>Y lo que me escriben cuando terminan:</p>
          <div className="act-l4" style={{ width: '100%' }}>
            {[1, 2, 3, 4].map((n) => (
              <img key={n} src={`/images/testimonio-${n}.jpg`} alt="Mensaje de una alumna de Actívate" loading="lazy"
                style={{ width: '100%', aspectRatio: '4 / 5', objectFit: 'cover', borderRadius: 16, display: 'block' }} />
            ))}
          </div>
          <CTA>Yo también lo necesito</CTA>
        </div>
      </section>

      {/* ── 9 · BONUS ── */}
      <section style={{ padding: '0 1.5rem 4.5rem' }}>
        <div style={{ maxWidth: 880, margin: '0 auto', borderRadius: 24, background: '#FBE9E4', padding: '3rem 2rem', boxSizing: 'border-box', display: 'flex', flexWrap: 'wrap', gap: '2rem', alignItems: 'center' }}>
          {/* Portada tipo miniatura de vídeo */}
          <div style={{ flex: '1 1 260px', minWidth: 0, height: 340, borderRadius: 16, overflow: 'hidden', position: 'relative', background: 'var(--black)', boxShadow: '0 12px 30px rgba(20,20,20,0.18)' }}>
            <img src="/images/susana-cercana.JPG" alt="Portada del vídeo bonus con Susana Ares"
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: '40% 15%', display: 'block' }} />
            <div style={{ position: 'absolute', top: 14, left: 14, background: ACCENT_DARK, color: 'white', fontWeight: 700, fontSize: '0.75rem', letterSpacing: '0.1em', padding: '0.35rem 0.75rem', borderRadius: 999 }}>
              BONUS · VÍDEO
            </div>
            <div style={{ position: 'absolute', top: '58%', left: '50%', transform: 'translate(-50%, -50%)', width: 72, height: 72, borderRadius: 999, background: 'var(--coral)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 6px 18px rgba(0,0,0,0.25)' }}>
              <Play size={30} fill="white" color="white" style={{ marginLeft: 4 }} />
            </div>
            <div style={{ position: 'absolute', left: 0, right: 0, bottom: 0, background: 'var(--black)', color: 'white', padding: '0.9rem 1rem' }}>
              <div className="t-serif" style={{ fontSize: '1.5rem', fontWeight: 600, lineHeight: 1.1 }}>Recupera tu abdomen en tu día a día</div>
              <div style={{ fontSize: '0.8rem', color: '#F2A08D', marginTop: 4 }}>Hábitos reales para mamás con poco tiempo</div>
            </div>
          </div>
          <div style={{ flex: '2 1 340px', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <span style={{ ...label(ACCENT_DARK), marginBottom: 0 }}>Bonus solo hasta el 7 de noviembre</span>
            <h3 className="t-serif" style={{ margin: 0, fontSize: '2.25rem', lineHeight: 1.1 }}>Recupera tu abdomen en tu día a día</h3>
            <span style={{ fontSize: '1.4rem' }}><s style={{ color: '#555' }}>27€</s> <strong>GRATIS</strong></span>
            <p style={{ margin: 0, lineHeight: 1.7 }}>
              Si entras antes del cierre, te llevas los hábitos y pequeñas acciones que uso para seguir recuperando el abdomen incluso los días que no entrenas. Pensado para mamás reales con poco tiempo.
            </p>
            <div style={{ alignSelf: 'flex-start' }}><CTA>¡Quiero entrar ya!</CTA></div>
          </div>
        </div>
      </section>

      {/* ── 10 · SOBRE MÍ ── */}
      <section style={sectionPad}>
        <div style={{ maxWidth: 1000, margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: '2.5rem', alignItems: 'center' }}>
          <img src="/images/susana-ejercicio.JPG" alt="Susana Ares, instructora de pilates terapéutico y mamá de tres"
            style={{ flex: '1 1 280px', minWidth: 0, maxWidth: 420, height: 480, objectFit: 'cover', objectPosition: 'center top', borderRadius: 20, display: 'block' }} />
          <div style={{ flex: '1.4 1 320px', display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
            <span style={{ ...label(), marginBottom: 0 }}>Sobre mí</span>
            <h2 className="t-serif" style={h2Style()}>Hola, soy Susana Ares</h2>
            <p style={{ margin: 0, lineHeight: 1.75 }}>Tengo 40 años y soy mamá de tres hijos. Pasé por la cesárea, el postparto y ese momento en el que te miras al espejo y no te reconoces. Sé exactamente cómo se siente porque yo también lo viví.</p>
            <p style={{ margin: 0, lineHeight: 1.75 }}>Me formé como <strong>instructora de pilates terapéutico</strong> y trabajé a fondo la <strong>fortaleza mental</strong>, no para darte teoría, sino para acompañarte desde dentro.</p>
            <p style={{ margin: 0, lineHeight: 1.75 }}>Mi misión es que no vuelvas a ser "la de antes", sino que descubras que ahora eres más: con un acompañamiento cálido y real, ni de gimnasio ni de terapia.</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '0.25rem' }}>
              {CREDS.map((c) => (
                <span key={c} style={{ border: '1px solid #E5DAD5', background: 'var(--peach)', borderRadius: 999, padding: '0.35rem 0.9rem', fontSize: '0.875rem', fontWeight: 500 }}>{c}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 11 · PARA QUIÉN ES ── */}
      <section style={{ ...sectionPad, background: 'var(--peach)' }}>
        <div style={{ maxWidth: 960, margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: '1.25rem' }}>
          {[{ title: 'Es para ti si…', items: FOR_YES, yes: true }, { title: 'No es para ti si…', items: FOR_NO, yes: false }].map((col) => (
            <div key={col.title} style={{ flex: '1 1 300px', background: 'var(--white)', borderRadius: 16, padding: '1.75rem 1.5rem', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <h3 style={{ margin: '0 0 0.4rem', fontSize: '1.25rem' }}>{col.title}</h3>
              {col.items.map((t) => (
                <div key={t} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
                  {col.yes
                    ? <Check size={20} strokeWidth={2.6} style={{ color: ACCENT_DARK, flexShrink: 0, marginTop: 3 }} />
                    : <X size={20} strokeWidth={2.6} style={{ color: '#6B6B6B', flexShrink: 0, marginTop: 3 }} />}
                  <span>{t}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* ── 12 · CIERRE + FAQ ── */}
      <section id="comprar" style={sectionPad}>
        <div style={{ maxWidth: 760, margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.75rem' }}>
          <div style={{ width: '100%', borderRadius: 24, background: 'var(--black)', color: 'white', padding: '2.5rem 1.75rem', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.6rem', textAlign: 'center' }}>
            <span style={{ ...label('#F2A08D'), marginBottom: 0 }}>Cierra el 7 de noviembre a las 23:59</span>
            <h2 className="t-serif" style={h2Style('white')}>¿Lista para volver a sentirte tú?</h2>
            <div className="t-serif" style={{ fontSize: '4.5rem', fontWeight: 700, lineHeight: 1 }}>97€</div>
            <span style={{ color: 'rgba(255,255,255,0.75)' }}>Después sube a <s>147€</s> · Incluye el bonus</span>
            <div style={{ marginTop: '0.5rem' }}>
              <CTA variant="white" note="Un único pago · Acceso inmediato · Pago seguro · 12 meses de acceso">Quiero mi acceso prioritario</CTA>
            </div>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.8rem', color: 'rgba(255,255,255,0.6)' }}>
              <ShieldCheck size={14} /> Pago seguro con Hotmart
            </span>
          </div>

          <h2 className="t-serif" style={{ ...h2Style(), fontSize: 'clamp(1.75rem, 4vw, 2.25rem)', marginTop: '1rem' }}>Preguntas frecuentes</h2>
          <div style={{ width: '100%' }}>
            {FAQS.map((f) => <FaqItem key={f.q} q={f.q} a={f.a} />)}
          </div>
          <p style={{ margin: 0, fontSize: '0.95rem', color: 'rgba(26,26,26,0.6)', textAlign: 'center' }}>
            ¿Más dudas? <a href="mailto:info@esencialsusanaares.com" style={{ color: ACCENT_DARK, fontWeight: 600 }}>info@esencialsusanaares.com</a>
          </p>
        </div>
      </section>
    </div>
  );
}
