import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

const LAUNCH_DATE = new Date('2026-11-05T00:00:00+01:00');
const EO_FORM_ID = 'bbfaed1a-513e-11f1-bf07-67defba4d3c4';

const serif = { fontFamily: 'var(--serif)' };
const eyebrow = { fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase' };
const strike = { ...serif, fontSize: '1.9rem', lineHeight: 1.2, textDecoration: 'line-through', textDecorationColor: 'var(--coral)', textDecorationThickness: 3 };

function calcTimeLeft() {
  const diff = Math.max(0, LAUNCH_DATE - Date.now());
  return {
    d: Math.floor(diff / 86400000),
    h: Math.floor((diff % 86400000) / 3600000),
    m: Math.floor((diff % 3600000) / 60000),
    s: Math.floor((diff % 60000) / 1000),
  };
}

export function Countdown() {
  const [t, setT] = useState(calcTimeLeft);
  useEffect(() => {
    const timer = setInterval(() => setT(calcTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);
  const pad = (n) => String(n).padStart(2, '0');
  const units = [[t.d, 'Días'], [t.h, 'Hrs'], [t.m, 'Min'], [t.s, 'Seg']];
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontVariantNumeric: 'tabular-nums' }} aria-label="Cuenta atrás hasta la apertura">
      {units.map(([v, l], i) => (
        <div key={l} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
          {i > 0 && <span style={{ color: 'var(--coral)', fontSize: '1.3rem' }} aria-hidden="true">:</span>}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: 40 }}>
            <span style={{ ...serif, fontSize: '1.8rem', lineHeight: 1.05, color: 'var(--coral)', fontWeight: 600 }}>{pad(v)}</span>
            <span style={{ fontSize: '0.6rem', letterSpacing: '0.14em', textTransform: 'uppercase' }}>{l}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

function EOForm() {
  const containerId = 'eo-form-container-activate-espera';
  useEffect(() => {
    const container = document.getElementById(containerId);
    if (!container) return;
    const script = document.createElement('script');
    script.src = `https://eocampaign1.com/form/${EO_FORM_ID}.js`;
    script.setAttribute('data-form', EO_FORM_ID);
    script.async = true;
    container.appendChild(script);
    return () => { container.innerHTML = ''; };
  }, []);
  return <div id={containerId} />;
}

const scrollToForm = (e) => {
  e.preventDefault();
  document.getElementById('lista')?.scrollIntoView({ behavior: 'smooth' });
};

const testimonios = ['/images/testimonio-1.jpg', '/images/testimonio-2.jpg', '/images/testimonio-3.jpg', '/images/testimonio-4.jpg'];

export default function ListaEsperaActivatePage() {
  return (
    <div style={{ fontSize: '1.1rem', lineHeight: 1.6 }}>
      <Helmet>
        <title>Lista de espera Actívate | Esencial Susana Ares</title>
        <meta name="description" content="Únete a la lista de espera de Actívate. Las inscripciones abren el 5 de noviembre." />
        <meta property="og:title" content="Lista de espera Actívate" />
        <meta property="og:url" content="https://esencialsusanaares.com/lista-espera-activate" />
      </Helmet>

      {/* ── Barra superior fija con cuenta atrás ── */}
      <div style={{ background: 'var(--black)', color: 'white', position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100, padding: '0.7rem 1rem', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', gap: '0.5rem 1.75rem' }}>
        <p style={{ ...eyebrow, fontSize: '0.75rem' }}>Abrimos el 5 de noviembre · Hora España</p>
        <Countdown />
      </div>
      <div className="lea-spacer" style={{ height: 76 }} />

      {/* ── Hero + formulario ── */}
      <section style={{ background: 'white' }}>
        <div className="container" style={{ paddingTop: '4.5rem', paddingBottom: '5rem', display: 'flex', flexWrap: 'wrap', gap: '3rem', alignItems: 'center' }}>
          <div style={{ flex: '999 1 480px', minWidth: 0, display: 'flex', flexDirection: 'column', gap: '1.3rem' }}>
            <p style={{ ...serif, fontStyle: 'italic', fontSize: '1.5rem', color: 'var(--coral)' }}>Actívate está a punto de abrir sus puertas…</p>
            <h1 style={{ ...serif, fontWeight: 600, fontSize: 'clamp(2.4rem, 6vw, 3.9rem)', lineHeight: 1.05, textWrap: 'balance' }}>Reconstruye la base de tu cuerpo después de la cesárea.</h1>
            <p style={{ maxWidth: '34em', color: 'rgba(26,26,26,0.78)' }}>Sin dietas ni bebidas milagro. Con rutinas cortas, de 15 a 30 minutos, adaptadas a tu proceso y grabadas para que las hagas a tu ritmo, cuando puedas, como necesita una madre. Estamos preparando la nueva apertura de Actívate: 4 semanas para volver a confiar en tu cuerpo, paso a paso.</p>
            <p style={{ fontWeight: 700 }}>Las inscripciones abren el 5 de noviembre.</p>
          </div>
          <div id="lista" style={{ flex: '1 1 340px', minWidth: 0, background: 'white', borderRadius: 8, padding: '2rem 1.75rem', boxShadow: '0 4px 32px rgba(0,0,0,0.1)', borderTop: '4px solid var(--coral)', scrollMarginTop: 100 }}>
            <p style={{ ...eyebrow, color: 'var(--coral)', marginBottom: '1rem' }}>Únete a la lista de espera</p>
            <EOForm />
          </div>
        </div>
      </section>

      {/* ── No es un programa de ejercicios ── */}
      <section style={{ background: 'var(--beige)' }}>
        <div className="container" style={{ paddingTop: '5rem', paddingBottom: '5rem', display: 'flex', flexWrap: 'wrap', gap: '3rem' }}>
          <div style={{ flex: '999 1 480px', minWidth: 0, display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
            <h2 style={{ ...serif, fontWeight: 600, fontSize: 'clamp(2rem, 4.5vw, 3rem)', lineHeight: 1.1, textWrap: 'balance' }}>No es un programa de ejercicios. Es la base que nadie te enseñó a construir.</h2>
            <p style={{ maxWidth: '34em', color: 'rgba(26,26,26,0.78)' }}>Muchas madres intentan construir el tejado (abdominales, correr, HIIT) cuando todavía no existen los cimientos.</p>
            <p style={{ maxWidth: '34em', color: 'rgba(26,26,26,0.78)' }}>Los cimientos son respiración, activación, control, progresión y confianza. Eso es lo que trabajamos en Actívate.</p>
          </div>
          <div style={{ flex: '1 1 280px', minWidth: 0, display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
            <p style={eyebrow}>Sin necesidad de</p>
            <p style={strike}>Dietas restrictivas</p>
            <p style={strike}>Bebidas milagro</p>
            <p style={strike}>Entrenamientos de una hora</p>
          </div>
        </div>
      </section>

      {/* ── De madre a madre ── */}
      <section style={{ background: 'var(--black)', color: 'white' }}>
        <div className="container-narrow" style={{ paddingTop: '5rem', paddingBottom: '5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.3rem', textAlign: 'center' }}>
          <p style={{ ...eyebrow, color: 'var(--coral)' }}>Lo que nos hace diferentes</p>
          <h2 style={{ ...serif, fontWeight: 600, fontSize: 'clamp(2.2rem, 5vw, 3.4rem)', lineHeight: 1.08, textWrap: 'balance' }}>Un programa real, de madre a madre.</h2>
          <p style={{ maxWidth: '34em', color: 'rgba(255,255,255,0.8)' }}>Un programa que se adapta a ti y a tu vida como madre, y no al revés.</p>
          <p style={{ ...serif, fontStyle: 'italic', fontSize: 'clamp(1.6rem, 3.5vw, 2.1rem)', lineHeight: 1.3, color: 'var(--coral)' }}>El objetivo es que vuelvas a sentirte tú. Reconectar contigo.</p>
        </div>
      </section>

      {/* ── Historia ── */}
      <section style={{ background: 'white' }}>
        <div className="container" style={{ paddingTop: '5.5rem', paddingBottom: '5.5rem', display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
          <p style={{ ...serif, fontStyle: 'italic', fontSize: 'clamp(2.4rem, 6vw, 3.6rem)', lineHeight: 1.1, color: 'var(--coral)' }}>mi familia, lo más importante.</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '3rem', alignItems: 'center' }}>
            <div style={{ flex: '1 1 320px', minWidth: 0, maxWidth: 520, display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
                <p style={eyebrow}>Antes</p>
                <p style={{ ...eyebrow, color: 'var(--coral)' }}>Después</p>
              </div>
              <img src="/images/susana-antes-despues-2.jpg" alt="Susana antes y después de su recuperación" style={{ display: 'block', width: '100%', height: 'auto', borderRadius: 6 }} />
            </div>
            <div style={{ flex: '999 1 400px', minWidth: 0, maxWidth: 600, display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
              <h2 style={{ ...serif, fontWeight: 600, fontSize: 'clamp(2rem, 4vw, 2.6rem)', lineHeight: 1.15 }}>Soy madre de tres.</h2>
              <p style={{ color: 'rgba(26,26,26,0.78)' }}>Dos partos vaginales y una cesárea. Viví la recuperación en mi propio cuerpo, y sé que no se parece a lo que te cuentan.</p>
              <p style={{ color: 'rgba(26,26,26,0.78)' }}>Después de ayudar a más de 3.000 madres a recuperarse, lo tengo claro: no estás estancada porque tu cuerpo no pueda. Estás estancada porque nadie te enseñó a construir la base.</p>
              <p style={{ color: 'rgba(26,26,26,0.78)' }}>Por eso creé Actívate. Para reconstruir esa base, por fuera y por dentro: respiración, suelo pélvico, core y movimiento progresivo. Y también volver a confiar en ti, priorizarte y sentirte capaz.</p>
              <p style={{ ...serif, fontSize: '1.7rem', lineHeight: 1.3 }}>No se trata de volver a ser la mujer de antes. Se trata de construir una versión más fuerte, más consciente y más conectada con tu cuerpo.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Prueba social ── */}
      <section style={{ background: 'var(--beige)' }}>
        <div className="container" style={{ paddingTop: '5rem', paddingBottom: '5rem', display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
          <div>
            <p style={{ ...serif, fontWeight: 600, fontSize: 'clamp(3.5rem, 9vw, 5rem)', lineHeight: 1, color: 'var(--coral)' }}>+3.000</p>
            <h2 style={{ ...serif, fontWeight: 600, fontSize: 'clamp(2rem, 4vw, 2.6rem)', lineHeight: 1.15 }}>mamás que se han recuperado conmigo.</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem', alignItems: 'start' }}>
            {testimonios.map((src) => (
              <img key={src} src={src} alt="Testimonio de una alumna de Actívate" style={{ display: 'block', width: '100%', height: 'auto', borderRadius: 6 }} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Cierre ── */}
      <section style={{ background: 'var(--black)', color: 'white' }}>
        <div className="container-narrow" style={{ paddingTop: '5.5rem', paddingBottom: '5.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.4rem', textAlign: 'center' }}>
          <h2 style={{ ...serif, fontWeight: 600, fontSize: 'clamp(2.2rem, 5vw, 3.4rem)', lineHeight: 1.08, textWrap: 'balance' }}>No importa si hace dos meses o cinco años de tu cesárea.</h2>
          <p style={{ maxWidth: '34em', color: 'rgba(255,255,255,0.8)' }}>Lo importante es si alguna vez has construido la base que tu cuerpo necesita para recuperarse.</p>
          <a href="#lista" onClick={scrollToForm} className="btn-coral" style={{ textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 700 }}>Quiero entrar a la lista de espera</a>
        </div>
      </section>

      {/* ── Pie ── */}
      <section style={{ background: 'white', padding: '3rem 1rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.3rem', textAlign: 'center' }}>
        <p style={{ fontWeight: 700 }}>Abrimos el 5 de noviembre de 2026</p>
        <p style={{ fontSize: '0.9rem', color: 'rgba(26,26,26,0.6)' }}>Hora España</p>
        <p style={{ ...serif, fontStyle: 'italic', fontSize: '1.4rem', marginTop: '1rem' }}>Con cariño, Susana</p>
        <p style={{ ...eyebrow, fontSize: '0.75rem', color: 'rgba(26,26,26,0.6)' }}>Esencial Susana Ares</p>
      </section>
    </div>
  );
}
