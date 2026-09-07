import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Check, Mail, Clock, ShieldCheck, Zap } from 'lucide-react';

const VIDEO_ID = 'q0hSQVz4z8o';

// Comparte el mismo countdown de 48h que la página de acceso prioritario:
// si ya lo empezó aquí, sigue corriendo igual al llegar a /acceso-prioritario.
const COUNTDOWN_HOURS = 48;
const COUNTDOWN_STORAGE_KEY = 'ap_countdown_deadline';

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

function CountdownInline() {
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
    <div style={{ background: 'var(--black)', borderRadius: 8, padding: '0.85rem 1.25rem', display: 'inline-flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.25rem' }}>
      <Clock size={16} style={{ color: 'var(--coral)', flexShrink: 0 }} />
      <span style={{ fontSize: '0.85rem', color: 'white', fontWeight: 600 }}>
        Tu descuento caduca en {pad(timeLeft.h)}h : {pad(timeLeft.m)}m : {pad(timeLeft.s)}s
      </span>
    </div>
  );
}

export default function GraciasMasterclassPage() {
  const navigate = useNavigate();
  const goAccesoPrioritario = () => { navigate('/acceso-prioritario'); window.scrollTo(0, 0); };

  return (
    <div style={{ minHeight: '100vh', background: 'var(--white)', fontFamily: 'var(--sans)' }}>

      <Helmet>
        <title>¡Ya estás registrada! | Esencial Susana Ares</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      {/* ── HEADER mínimo ── */}
      <div style={{ textAlign: 'center', padding: '1.75rem 1.5rem 0' }}>
        <div style={{ fontFamily: 'var(--serif)', fontSize: '1.4rem', letterSpacing: '0.2em', color: 'var(--black)', lineHeight: 1 }}>ESENCIAL</div>
        <div style={{ fontFamily: 'var(--sans)', fontWeight: 600, fontSize: '0.65rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--coral)', marginTop: 2 }}>Susana Ares</div>
      </div>

      {/* ── VÍDEO + CTA (arriba del todo) ── */}
      <section style={{ padding: '1.5rem 1.5rem 2.5rem' }}>
        <div style={{ maxWidth: 720, margin: '0 auto', textAlign: 'center' }}>

          <div className="t-label" style={{ color: 'var(--coral)', marginBottom: '0.5rem' }}>Masterclass gratuita</div>
          <h1 className="t-serif" style={{ fontSize: 'clamp(1.5rem, 4vw, 2.25rem)', color: 'var(--black)', fontWeight: 400, lineHeight: 1.2, marginBottom: '0.5rem' }}>
            Ya puedes ver tu masterclass
          </h1>
          <p style={{ fontSize: '0.95rem', color: 'rgba(26,26,26,0.6)', marginBottom: '1.5rem' }}>
            Haz clic en el vídeo para verla
          </p>

          {/* Vídeo incrustado */}
          <div style={{ position: 'relative', width: '100%', paddingBottom: '56.25%', borderRadius: 8, overflow: 'hidden', boxShadow: '0 4px 24px rgba(0,0,0,0.12)', marginBottom: '1.75rem' }}>
            <iframe
              src={`https://www.youtube.com/embed/${VIDEO_ID}`}
              title="Masterclass - Susana Ares"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
            />
          </div>

          {/* CTA principal justo debajo del vídeo */}
          <div>
            <CountdownInline />
          </div>
          <div>
            <button
              className="btn-coral"
              style={{ fontSize: '1.1rem', padding: '1.1rem 2.5rem', width: '100%', maxWidth: 460 }}
              onClick={goAccesoPrioritario}
            >
              Quiero mi acceso prioritario — desde 97€
            </button>
            <p style={{ fontSize: '0.85rem', color: 'rgba(26,26,26,0.55)', marginTop: '0.75rem' }}>
              ✅ Acceso prioritario 48h · ✅ Ahorras 50€ · ✅ Pago único
            </p>
          </div>
        </div>
      </section>

      {/* ── POR QUÉ EMPEZAR AHORA ── */}
      <section className="section" style={{ background: 'var(--beige)', paddingTop: '2.5rem', paddingBottom: '2.5rem' }}>
        <div className="container-narrow">
          <div className="text-center" style={{ marginBottom: '1.75rem' }}>
            <h2 className="t-serif" style={{ fontSize: 'clamp(1.4rem, 3vw, 1.85rem)', color: 'var(--black)', fontWeight: 400 }}>
              Lo que acabas de descubrir en la masterclass, ahora puedes empezar a aplicarlo
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1rem' }}>
            {[
              { t: 'Construye la base real', d: 'No más tejado sin cimientos: Actívate trabaja respiración, activación y suelo pélvico desde la semana 1.' },
              { t: 'Adaptado a tu cuerpo', d: 'Específico para cesárea y parto vaginal, sin importar si fue hace meses o años.' },
              { t: 'A tu ritmo, desde casa', d: '4 semanas de vídeos grabados, sin equipamiento, 12 meses de acceso.' },
              { t: 'Cuerpo + mente', d: 'Incluye trabajo de fortaleza mental para recuperar también la confianza en ti misma.' },
            ].map((item, i) => (
              <div key={i} style={{ background: 'var(--white)', borderRadius: 6, padding: '1.25rem 1.5rem', boxShadow: '0 1px 6px rgba(0,0,0,0.05)', textAlign: 'left' }}>
                <Check size={16} style={{ color: 'var(--coral)', marginBottom: '0.5rem' }} />
                <p style={{ fontWeight: 600, fontSize: '0.95rem', color: 'var(--black)', marginBottom: '0.35rem' }}>{item.t}</p>
                <p style={{ fontSize: '0.875rem', color: 'rgba(26,26,26,0.7)', lineHeight: 1.6, margin: 0 }}>{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRECIO / URGENCIA ── */}
      <section style={{ background: 'var(--black)', padding: '2.5rem 1.5rem', textAlign: 'center' }}>
        <div style={{ maxWidth: 480, margin: '0 auto' }}>
          <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.6)', marginBottom: '0.75rem', letterSpacing: '0.05em', textTransform: 'uppercase', fontWeight: 600 }}>
            Solo por haber asistido a la masterclass
          </p>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', marginBottom: '1.25rem' }}>
            <span style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.4)', textDecoration: 'line-through' }}>147€</span>
            <span style={{ fontFamily: 'var(--serif)', fontSize: '2.75rem', color: 'var(--coral)', fontWeight: 600, lineHeight: 1 }}>97€</span>
          </div>
          <button
            className="btn-coral"
            style={{ fontSize: '1.05rem', padding: '1.1rem 2.5rem', width: '100%' }}
            onClick={goAccesoPrioritario}
          >
            Empezar Actívate ahora
          </button>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1.25rem', marginTop: '1.25rem', flexWrap: 'wrap' }}>
            <span style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)', display: 'flex', alignItems: 'center', gap: '0.3rem' }}><ShieldCheck size={13} /> Pago seguro</span>
            <span style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)', display: 'flex', alignItems: 'center', gap: '0.3rem' }}><Zap size={13} /> Acceso inmediato</span>
          </div>
        </div>
      </section>

      {/* ── EMAIL + CIERRE ── */}
      <section className="section" style={{ background: 'var(--white)' }}>
        <div style={{ maxWidth: 520, margin: '0 auto', textAlign: 'center' }}>

          <div style={{ background: 'var(--peach)', borderRadius: 8, padding: '1.5rem', marginBottom: '2.5rem', display: 'flex', alignItems: 'flex-start', gap: '1rem', textAlign: 'left' }}>
            <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'var(--coral)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <Mail size={18} color="white" />
            </div>
            <div>
              <p style={{ fontWeight: 600, fontSize: '0.95rem', color: 'var(--black)', marginBottom: '0.25rem' }}>Revisa tu email</p>
              <p style={{ fontSize: '0.875rem', color: 'rgba(26,26,26,0.7)', lineHeight: 1.6 }}>
                Te hemos enviado el enlace de acceso por si prefieres ver la masterclass más tarde. Si no lo ves en los próximos minutos, revisa la carpeta de spam o escríbeme a <a href="mailto:info@esencialsusanaares.com" style={{ color: 'var(--coral)', fontWeight: 600 }}>info@esencialsusanaares.com</a>
              </p>
            </div>
          </div>

          <p className="t-serif-italic" style={{ fontSize: '1.2rem', color: 'rgba(26,26,26,0.7)', lineHeight: 1.65, marginBottom: '2rem' }}>
            "Nos vemos dentro. Esto es solo el principio."
          </p>

          <button
            className="btn-coral"
            style={{ fontSize: '1rem', padding: '0.9rem 2rem' }}
            onClick={goAccesoPrioritario}
          >
            Quiero mi acceso prioritario
          </button>
        </div>
      </section>
    </div>
  );
}
