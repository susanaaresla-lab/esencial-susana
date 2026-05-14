import { ArrowLeft, Clock, Video, Users, Check, X, Gift, Calendar, ChevronDown, Brain, Heart, ShieldCheck, Zap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Helmet } from 'react-helmet-async';

const CHECKOUT_URL = 'https://pay.hotmart.com/G105828362U';

const FAQS = [
  { q: '¿Cuándo puedo empezar después del parto?', a: 'Puedes empezar desde las 6 semanas después de un parto vaginal, o desde las 8 semanas tras una cesárea. Si tienes dudas, consulta antes con tu médico o matrona.' },
  { q: '¿Funciona si tuve cesárea?', a: 'Sí. El programa está diseñado específicamente para adaptarse tanto a partos vaginales como a cesáreas. Los ejercicios de las primeras semanas son especialmente suaves y progresivos.' },
  { q: '¿Cuánto tiempo necesito al día?', a: 'Las rutinas duran entre 15 y 30 minutos. Están pensadas para hacerse desde casa y encajar en el día a día de una madre con poco tiempo.' },
  { q: '¿Puedo hacerlo si mi bebé ya tiene meses o años?', a: 'Sí. Nunca es tarde para recuperarte. Muchas de las más de 3.000 mamás que han hecho el programa empezaron meses o años después de su parto.' },
  { q: '¿Qué pasa si un día no puedo hacer la rutina?', a: 'No pasa nada. El acceso es de por vida y los vídeos son on-demand, así que puedes seguir tu propio ritmo sin presión.' },
  { q: '¿Necesito material o equipamiento?', a: 'No necesitas ningún material. Todos los ejercicios se hacen con el peso de tu propio cuerpo, desde casa.' },
  { q: '¿Cuándo empezaré a notar resultados?', a: 'La mayoría de las mamás notan los primeros cambios durante las primeras 2 semanas. Los resultados más visibles llegan al completar las 4 semanas.' },
  { q: '¿Cómo accedo al programa después de comprarlo?', a: 'Nada más comprar recibirás un email con el enlace a tu área privada donde encontrarás todos los vídeos organizados por semanas.' },
  { q: '¿Este programa solo trabaja el cuerpo o también la mente?', a: 'Es uno de los grandes diferenciadores de este programa. Además de los ejercicios físicos, la Semana 2 incluye un vídeo de motivación para trabajar la confianza en ti misma y en el proceso, y un audio especial de creencias para afianzar que mereces y puedes conseguir lo que te propones.' },
  { q: '¿En qué se diferencia de otros programas de recuperación postparto?', a: 'La mayoría de programas solo trabajan el cuerpo. Este programa va más allá: incluye trabajo mental y emocional con vídeo de motivación y audio de creencias, porque sabemos que recuperar la confianza en ti misma es tan importante como recuperar el abdomen.' }
];

const label = (color) => ({
  fontSize: '0.9rem',
  fontWeight: 700,
  letterSpacing: '0.15em',
  textTransform: 'uppercase',
  color: color || 'rgba(26,26,26,0.5)',
  marginBottom: '0.75rem'
});

// ── BANNER DE DISPONIBILIDAD LIMITADA ──
function AvailabilityBanner() {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '0.6rem',
      background: 'linear-gradient(135deg, #1a1a1a 0%, #2d1f1f 100%)',
      border: '1px solid rgba(230, 100, 80, 0.4)',
      borderRadius: 6,
      padding: '0.9rem 1.25rem',
      marginTop: '1rem',
    }}>
      <Calendar size={16} style={{ color: 'var(--coral)', flexShrink: 0 }} />
      <p style={{ margin: 0, fontSize: '0.9rem', color: 'white', lineHeight: 1.4, textAlign: 'center' }}>
        <strong style={{ color: 'var(--coral)' }}>Disponible solo del 15 al 17 de mayo.</strong>{' '}
        <span style={{ color: 'rgba(255,255,255,0.8)' }}>Después de esa fecha, el programa cerrará sus puertas.</span>
      </p>
    </div>
  );
}

// ── AVISO COMPACTO (para usar junto a los botones de compra) ──
function UrgencyNote() {
  return (
    <p style={{
      fontSize: '0.85rem',
      color: 'var(--coral)',
      fontWeight: 600,
      marginTop: '0.75rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '0.4rem',
    }}>
      <Calendar size={13} />
      Solo disponible del 15 al 17 de mayo
    </p>
  );
}

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

export default function ProgramaPage() {
  const navigate = useNavigate();
  const goBack = () => { navigate('/'); window.scrollTo(0, 0); };
  const goCheckout = () => window.open(CHECKOUT_URL, '_blank');

  return (
    <div style={{ paddingTop: 80 }}>

      <Helmet>
        <title>Programa Recupera tu cuerpo desde cero | Esencial Susana Ares</title>
        <meta name="description" content="4 semanas de rutinas cortas y guiadas para recuperar tu cuerpo después de ser madre. Ejercicios de abdomen, suelo pélvico y trabajo de mente. 58€ · Acceso de por vida · +3.000 mamás." />
        <meta name="keywords" content="programa recuperación postparto, ejercicios postparto online, recuperar abdomen después del parto, suelo pélvico postparto, rutinas postparto en casa" />
        <link rel="canonical" href="https://esencialsusanaares.com/programa-4-semanas" />
        <meta property="og:title" content="Programa Recupera tu cuerpo desde cero | Esencial Susana Ares" />
        <meta property="og:description" content="4 semanas de rutinas cortas y guiadas para recuperar tu cuerpo después de ser madre. Ejercicios de abdomen, suelo pélvico y trabajo de mente. 58€ · Acceso de por vida." />
        <meta property="og:url" content="https://esencialsusanaares.com/programa-4-semanas" />
        <meta property="og:type" content="product" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Programa Recupera tu cuerpo desde cero | Esencial Susana Ares" />
        <meta name="twitter:description" content="4 semanas de rutinas cortas y guiadas para recuperar tu cuerpo después de ser madre. Ejercicios de abdomen, suelo pélvico y trabajo de mente. 58€ · Acceso de por vida." />
      </Helmet>

      {/* ── HERO ── */}
      <section style={{ background: 'linear-gradient(to bottom, var(--peach) 0%, var(--white) 100%)', position: 'relative', overflow: 'hidden' }}>
        <div className="hero-photo-bleed">
          <img
            src="/images/susana-hero.jpg"
            alt="Susana Ares — Programa Recupera tu cuerpo desde cero"
          />
        </div>

        <div className="container-mid" style={{ position: 'relative', zIndex: 2, paddingTop: '2rem', paddingBottom: '4rem' }}>
          <div className="hero-text-wrap">
            <button className="btn-back" style={{ marginBottom: '2rem' }} onClick={goBack}>
              <ArrowLeft size={15} /> Volver al inicio
            </button>
            <div style={label('var(--coral)')}>Programa de 4 semanas</div>
            <h1 className="t-serif" style={{ fontSize: 'clamp(2.25rem, 5vw, 4rem)', lineHeight: 1.1, marginBottom: '1.5rem' }}>
              Recupera tu cuerpo desde cero
            </h1>
            <p style={{ fontSize: '1.2rem', color: 'rgba(26,26,26,0.8)', maxWidth: 520, marginBottom: '2rem', lineHeight: 1.7 }}>
              El programa paso a paso para tonificar tu cuerpo después de ser madre, desde casa, con rutinas cortas y sencillas. Con un enfoque único que trabaja <strong>cuerpo y mente</strong>.
            </p>
            <div className="flex flex-wrap gap-3" style={{ marginBottom: '2.5rem' }}>
              <span className="pill" style={{ fontSize: '0.95rem', padding: '0.5rem 1rem' }}><Clock />4 semanas</span>
              <span className="pill" style={{ fontSize: '0.95rem', padding: '0.5rem 1rem' }}><Video />Videos on-demand</span>
              <span className="pill" style={{ fontSize: '0.95rem', padding: '0.5rem 1rem' }}><Users />+3.000 mamás</span>
            </div>
            <button className="btn-coral" style={{ fontSize: '1.1rem', padding: '1.1rem 2.5rem' }} onClick={goCheckout}>
              Quiero empezar mi recuperación — 58€
            </button>
            <p style={{ fontSize: '0.85rem', color: 'rgba(26,26,26,0.45)', marginTop: '0.75rem' }}>
              Precio de lanzamiento · Antes 97€ · Acceso de por vida
            </p>
            {/* ── AVISO DISPONIBILIDAD HERO ── */}
            <AvailabilityBanner />
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
              { emoji: '🪞', title: 'Tu cuerpo ya no es el mismo después de ser madre', desc: 'Da igual si tuviste a tu bebé hace meses o hace años. Tu cuerpo ha cambiado y sientes que has perdido la conexión con él.' },
              { emoji: '⚠️', title: 'No sabes por dónde empezar sin hacerte daño', desc: 'Quieres recuperarte, pero tienes miedo de hacer ejercicios que no sean adecuados para tu situación (parto vaginal, cesárea, diástasis...).' },
              { emoji: '⏰', title: 'No tienes tiempo, pero necesitas cuidarte', desc: 'Entre el bebé, el trabajo y la casa, apenas tienes un momento para ti. Pero sabes que necesitas hacer algo por tu cuerpo.' },
              { emoji: '💔', title: 'Te miras al espejo y no te reconoces', desc: 'Tu abdomen, tu suelo pélvico, tu postura... todo ha cambiado. Y sientes que has perdido parte de ti misma.' },
              { emoji: '🎯', title: 'Quieres resultados pero no sabes cómo conseguirlos', desc: 'Has probado cosas, pero nada parece funcionar. Necesitas una guía clara, paso a paso, que te diga exactamente qué hacer.' }
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
          <p className="t-serif-italic text-center" style={{ marginTop: '2.5rem', fontSize: '1.3rem', color: 'rgba(26,26,26,0.85)', lineHeight: 1.55 }}>
            "Si te has sentido identificada con algo de esto, este programa es para ti."
          </p>
        </div>
      </section>

      {/* ── FOTO + SOLUCIÓN lado a lado ── */}
      <section className="section" style={{ background: 'var(--white)' }}>
        <div className="container-mid">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3.5rem', alignItems: 'center' }}>
            <div>
              <img
                src="/images/susana-ejercicio.jpg"
                alt="Susana Ares - Ejercicios postparto"
                style={{ width: '100%', maxHeight: 500, objectFit: 'cover', objectPosition: 'top', borderRadius: 4, boxShadow: '0 4px 24px rgba(0,0,0,0.1)' }}
              />
            </div>
            <div>
              <div style={label('var(--coral)')}>La solución</div>
              <h2 className="t-serif" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.25rem)', marginBottom: '1.25rem', lineHeight: 1.2 }}>
                Un programa diseñado para ti, mamá
              </h2>
              <p style={{ fontSize: '1.1rem', color: 'rgba(26,26,26,0.8)', lineHeight: 1.75, marginBottom: '1.75rem' }}>
                4 semanas con rutinas cortas, sencillas y guiadas, diseñadas específicamente para el cuerpo de madre. Sin gimnasio, sin equipamiento, sin excusas.
              </p>
              <ul className="check-list" style={{ marginBottom: '2rem' }}>
                {[
                  'Tonificación del abdomen de forma progresiva y segura',
                  'Trabajo del suelo pélvico adaptado',
                  'Rutinas para todo el cuerpo de madre',
                  'Vídeos on-demand, hazlos cuando puedas',
                  'Explicaciones claras paso a paso',
                  'Acceso de por vida al contenido'
                ].map((t, i) => (
                  <li key={i} style={{ fontSize: '1rem' }}><Check size={15} />{t}</li>
                ))}
              </ul>
              <button className="btn-coral" onClick={goCheckout}>Quiero este programa — 58€</button>
              {/* ── AVISO DISPONIBILIDAD ── */}
              <UrgencyNote />
            </div>
          </div>
        </div>
      </section>

      {/* ── DIFERENCIADOR CUERPO + MENTE ── */}
      <section className="section" style={{ background: 'var(--coral)' }}>
        <div className="container-mid text-center">
          <div style={{ ...label('rgba(255,255,255,0.75)') }}>Lo que nos hace diferentes</div>
          <h2 className="t-serif" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', color: 'white', marginBottom: '1.25rem', lineHeight: 1.2 }}>
            No es solo recuperar el cuerpo.<br />Es recuperarte a ti.
          </h2>
          <p style={{ fontSize: '1.15rem', color: 'rgba(255,255,255,0.9)', maxWidth: 560, margin: '0 auto 2.5rem', lineHeight: 1.75 }}>
            La mayoría de programas trabajan solo el físico. Este va más allá: la Semana 2 incluye trabajo emocional y mental porque recuperar la confianza en ti misma es tan importante como recuperar el abdomen.
          </p>
          <div className="grid-2" style={{ gap: '1rem' }}>
            <div style={{ background: 'rgba(255,255,255,0.15)', borderRadius: 4, padding: '1.75rem', textAlign: 'left' }}>
              <div style={{ width: 44, height: 44, borderRadius: '50%', background: 'rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                <Brain size={20} color="white" />
              </div>
              <h3 style={{ fontWeight: 600, fontSize: '1.1rem', color: 'white', marginBottom: '0.6rem' }}>Vídeo de motivación y confianza</h3>
              <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.85)', lineHeight: 1.7 }}>
                Para trabajar la confianza en ti misma y en tu cuerpo. Porque el primer paso es creer que lo mereces.
              </p>
            </div>
            <div style={{ background: 'rgba(255,255,255,0.15)', borderRadius: 4, padding: '1.75rem', textAlign: 'left' }}>
              <div style={{ width: 44, height: 44, borderRadius: '50%', background: 'rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                <Heart size={20} color="white" />
              </div>
              <h3 style={{ fontWeight: 600, fontSize: '1.1rem', color: 'white', marginBottom: '0.6rem' }}>Audio de creencias</h3>
              <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.85)', lineHeight: 1.7 }}>
                Para reforzar que somos merecedoras y válidas para crear y perseguir todo lo que queremos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="section" style={{ background: 'var(--beige)' }}>
        <div className="container-mid">
          <div className="text-center" style={{ marginBottom: '2.5rem' }}>
            <div style={label()}>Cómo funciona</div>
            <h2 className="t-serif" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.25rem)' }}>4 semanas para empezar a notar resultados</h2>
            <p style={{ fontSize: '1.1rem', color: 'rgba(26,26,26,0.7)', maxWidth: 480, margin: '0.75rem auto 0', lineHeight: 1.7 }}>
              Cada semana tiene un objetivo claro y progresivo. Sin agobios, sin saltar pasos.
            </p>
          </div>
          <div className="week-steps">
            {[
              { week: 'Semana 1', title: 'Conexión', desc: 'Reconecta con tu cuerpo y aprende las bases. Rutinas suaves para empezar desde donde estás.', highlight: false },
              { week: 'Semana 2', title: 'Activación + Mente', desc: 'Activa abdomen y suelo pélvico. Incluye vídeo de motivación y audio de creencias para trabajar la confianza.', highlight: true },
              { week: 'Semana 3', title: 'Fortalecimiento', desc: 'Aumenta la intensidad de forma progresiva. Empiezas a notar los cambios.', highlight: false },
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
            <p style={{ fontSize: '1rem', color: 'rgba(26,26,26,0.8)', lineHeight: 1.75, marginBottom: '1rem' }}>
              Consejos realistas para integrar en tu rutina diaria y seguir recuperando tu abdomen <strong>incluso cuando no estés haciendo las rutinas de ejercicio</strong>.
            </p>
            <ul className="check-list">
              {['Consejos prácticos para aplicar mientras cuidas a tu bebé', 'Hábitos sencillos que marcan la diferencia', 'Pensado para mamás reales con poco tiempo'].map((t, i) => (
                <li key={i} style={{ fontSize: '0.95rem' }}><Check size={14} />{t}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── VÍDEO ── */}
      <section style={{ background: 'var(--white)', padding: '3.5rem 1.5rem' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <div className="text-center" style={{ marginBottom: '1.75rem' }}>
            <div style={label()}>Ellas te lo cuentan</div>
            <h2 className="t-serif" style={{ fontSize: 'clamp(1.65rem, 3vw, 2.25rem)', color: 'var(--black)' }}>
              Lo que dicen las mamás que ya lo han hecho
            </h2>
          </div>
          <div style={{ position: 'relative', width: '100%', paddingBottom: '56.25%', borderRadius: 6, overflow: 'hidden', boxShadow: '0 6px 28px rgba(0,0,0,0.12)' }}>
            <iframe
              src="https://www.youtube.com/embed/Ni7HROuAIq8"
              title="Testimonios del programa"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
            />
          </div>
        </div>
      </section>

      {/* ── TESTIMONIOS WHATSAPP ── */}
      <section className="section" style={{ background: 'var(--white)' }}>
        <div className="container-mid">
          <div className="text-center" style={{ marginBottom: '2rem' }}>
            <div style={label()}>Lo que dicen las mamás</div>
            <h2 className="t-serif" style={{ fontSize: 'clamp(1.65rem, 3vw, 2.25rem)', color: 'var(--black)' }}>Mensajes reales de clientas reales</h2>
            <p style={{ fontSize: '1.05rem', color: 'rgba(26,26,26,0.6)', marginTop: '0.5rem' }}>+3.000 mamás ya han completado el programa</p>
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

      {/* ── WHO IS IT FOR ── */}
      <section className="section" style={{ background: 'var(--beige)' }}>
        <div className="container-narrow">
          <h2 className="t-serif text-center" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.25rem)', marginBottom: '2.5rem' }}>¿Para quién es este programa?</h2>
          <div className="grid-2">
            <div style={{ background: 'rgba(242,237,230,0.5)', borderRadius: 2, padding: '1.5rem' }}>
              <h4 style={{ fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', fontSize: '1.05rem' }}>
                <Check size={18} style={{ color: 'var(--coral)' }} /> Este programa ES para ti si…
              </h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.95rem', color: 'rgba(26,26,26,0.8)' }}>
                <li>• Tuviste a tu bebé hace pocos meses y quieres empezar a recuperarte</li>
                <li>• Tuviste a tus hijos hace años pero nunca te recuperaste del todo</li>
                <li>• Quieres ejercicios seguros adaptados a tu cuerpo de madre</li>
                <li>• Buscas rutinas cortas que puedas hacer desde casa</li>
                <li>• Quieres trabajar también la confianza y la parte emocional</li>
                <li>• Necesitas una guía clara, paso a paso</li>
              </ul>
            </div>
            <div style={{ background: 'rgba(232,226,220,0.3)', borderRadius: 2, padding: '1.5rem' }}>
              <h4 style={{ fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', fontSize: '1.05rem' }}>
                <X size={18} style={{ color: 'rgba(26,26,26,0.4)' }} /> Este programa NO es para ti si…
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

      {/* ── PRICING ── */}
      <section id="comprar" className="section" style={{ background: 'var(--white)' }}>
        <div className="container-narrow">
          <div className="text-center" style={{ marginBottom: '2rem' }}>
            <div style={label('var(--coral)')}>Todo lo que incluye</div>
            <h2 className="t-serif" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.25rem)' }}>Programa "Recupera tu cuerpo desde cero"</h2>
          </div>
          <div className="card" style={{ padding: '2.5rem' }}>

            {/* Foto + cita */}
            <div style={{ display: 'grid', gridTemplateColumns: '110px 1fr', gap: '1.5rem', alignItems: 'center', background: 'var(--beige)', borderRadius: 4, padding: '1.5rem', marginBottom: '2rem' }}>
              <img src="/images/susana-cercana.jpg" alt="Susana Ares" style={{ width: 110, height: 110, borderRadius: '50%', objectFit: 'cover', objectPosition: 'top', boxShadow: '0 2px 12px rgba(0,0,0,0.12)' }} />
              <p className="t-serif-italic" style={{ fontSize: '1.2rem', color: 'rgba(26,26,26,0.85)', lineHeight: 1.7 }}>
                "He acompañado a más de 3.000 mamás a recuperarse. Sé que tú también puedes."
                <span style={{ display: 'block', fontStyle: 'normal', fontWeight: 700, fontSize: '1rem', marginTop: '0.5rem', color: 'var(--coral)' }}>— Susana Ares</span>
              </p>
            </div>

            <ul className="check-list" style={{ marginBottom: '2rem' }}>
              {[
                '4 semanas de programa con videos nuevos cada semana',
                'Rutinas cortas y sencillas para hacer desde casa',
                'Ejercicios de tonificación del abdomen',
                'Ejercicios de suelo pélvico',
                'Ejercicios para todo el cuerpo adaptados a madres',
                'Videos on-demand: accede cuando quieras',
                'Explicaciones claras y guiadas paso a paso',
                '🧠 Vídeo de motivación y confianza (Semana 2)',
                '🎧 Audio de creencias: somos merecedoras (Semana 2)',
                '💬 Sesión grupal en directo para resolver dudas y ver los siguientes pasos',
                'BONUS: Recupera tu abdomen en tu día a día',
                'Acceso de por vida al contenido'
              ].map((t, i) => (
                <li key={i} style={{ fontSize: '1rem', paddingBottom: '0.3rem' }}><Check size={16} />{t}</li>
              ))}
            </ul>

            {/* Garantía */}
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', background: 'rgba(34,197,94,0.08)', border: '1px solid rgba(34,197,94,0.2)', borderRadius: 4, padding: '1rem', marginBottom: '2rem' }}>
              <ShieldCheck size={20} style={{ color: '#16a34a', flexShrink: 0, marginTop: 2 }} />
              <div>
                <p style={{ fontWeight: 600, fontSize: '0.95rem', color: '#16a34a', marginBottom: '0.25rem' }}>Garantía de satisfacción 7 días</p>
                <p style={{ fontSize: '0.9rem', color: 'rgba(26,26,26,0.65)', lineHeight: 1.65 }}>Si en los primeros 7 días no estás satisfecha, te devolvemos el dinero. Sin preguntas.</p>
              </div>
            </div>

            {/* Precio */}
            <div className="text-center" style={{ borderTop: '1px solid var(--pearl)', paddingTop: '2rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1.5rem', marginBottom: '1rem' }}>
                <div>
                  <p style={{ fontSize: '0.8rem', color: 'rgba(26,26,26,0.4)', marginBottom: '0.1rem' }}>Precio normal</p>
                  <p style={{ fontSize: '1.35rem', color: 'rgba(26,26,26,0.3)', textDecoration: 'line-through' }}>97€</p>
                </div>
                <div style={{ width: 1, height: 44, background: 'rgba(26,26,26,0.1)' }} />
                <div>
                  <p style={{ fontSize: '0.8rem', color: 'var(--coral)', fontWeight: 700, marginBottom: '0.1rem' }}>🎉 Precio de lanzamiento</p>
                  <p style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(2.5rem, 7vw, 3.5rem)', color: 'var(--coral)', fontWeight: 600, lineHeight: 1 }}>58€</p>
                </div>
              </div>
              <p style={{ fontSize: '0.9rem', color: 'rgba(26,26,26,0.45)', marginBottom: '1.5rem' }}>Pago único · Acceso de por vida · Sin suscripción</p>

              {/* ── AVISO DISPONIBILIDAD PRICING ── */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                background: 'rgba(230, 100, 80, 0.06)',
                border: '1px solid rgba(230, 100, 80, 0.25)',
                borderRadius: 4,
                padding: '0.75rem 1rem',
                marginBottom: '1.5rem',
              }}>
                <Calendar size={15} style={{ color: 'var(--coral)', flexShrink: 0 }} />
                <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--coral)', fontWeight: 600 }}>
                  Disponible para comprar solo del 15 al 17 de mayo
                </p>
              </div>

              <button className="btn-coral" style={{ fontSize: '1.1rem', padding: '1.2rem 3rem', width: '100%', maxWidth: 420 }} onClick={goCheckout}>
                Sí, quiero empezar mi recuperación
              </button>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', marginTop: '1rem', flexWrap: 'wrap' }}>
                <span style={{ fontSize: '0.8rem', color: 'rgba(26,26,26,0.45)', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                  <ShieldCheck size={13} /> Pago seguro
                </span>
                <span style={{ fontSize: '0.8rem', color: 'rgba(26,26,26,0.45)', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                  <Zap size={13} /> Acceso inmediato
                </span>
                <span style={{ fontSize: '0.8rem', color: 'rgba(26,26,26,0.45)', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                  <Users size={13} /> +3.000 mamás
                </span>
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
          <div>
            {FAQS.map((faq, i) => (
              <FaqItem key={i} q={faq.q} a={faq.a} />
            ))}
          </div>
          <div className="text-center" style={{ marginTop: '2.5rem' }}>
            <p style={{ fontSize: '0.95rem', color: 'rgba(26,26,26,0.6)', marginBottom: '0.75rem' }}>¿Tienes alguna pregunta más?</p>
            <a href="mailto:info@esencialsusanaares.com" style={{ color: 'var(--coral)', fontWeight: 600, fontSize: '1rem' }}>
              info@esencialsusanaares.com
            </a>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <div className="cta-band">
        <div className="container-narrow text-center">
          <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)' }}>¿Lista para empezar?</h2>
          <p style={{ fontSize: '1.15rem', marginBottom: '1.5rem', opacity: 0.9 }}>En 4 semanas empezarás a notar los primeros resultados.</p>
          <div style={{ fontFamily: 'var(--sans)', fontWeight: 700, fontSize: '2.25rem', color: 'white', marginBottom: '0.25rem' }}>58€</div>
          <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.9rem', marginBottom: '0.75rem', textDecoration: 'line-through' }}>Antes 97€</p>
          {/* ── AVISO DISPONIBILIDAD FINAL CTA ── */}
          <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '0.9rem', fontWeight: 600, marginBottom: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem' }}>
            <Calendar size={14} />
            Solo disponible del 15 al 17 de mayo
          </p>
          <button className="btn-white" style={{ fontSize: '1.05rem', padding: '1.1rem 2.5rem' }} onClick={goCheckout}>
            Sí, quiero empezar ahora
          </button>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem', marginTop: '0.75rem' }}>
            Garantía de devolución 7 días · Acceso inmediato
          </p>
        </div>
      </div>

    </div>
  );
}
