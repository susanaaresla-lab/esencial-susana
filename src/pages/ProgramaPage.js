import { ArrowLeft, Clock, Video, Users, Check, X, Gift, Calendar, ChevronDown, Brain, Heart, ShieldCheck, Zap, PlayCircle, Sun } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Helmet } from 'react-helmet-async';

const FAQS = [
  { q: '¿Cuándo puedo empezar después de la cesárea?', a: 'Puedes empezar desde los 2 meses después de una cesárea. Los ejercicios de las primeras semanas son especialmente suaves y están pensados para respetar tu cicatriz y tu recuperación.' },
  { q: '¿Cuándo puedo empezar después de un parto vaginal?', a: 'Puedes empezar desde los 40 días después de un parto vaginal. Si tienes dudas, consulta antes con tu médico o matrona.' },
  { q: '¿Puedo hacerlo si nunca he hecho ejercicio o llevo años sin hacer nada?', a: 'Sí, especialmente. Este método está diseñado para empezar desde cero, sin importar tu nivel previo. Las rutinas son sin impacto y progresivas para que tu cuerpo se adapte poco a poco.' },
  { q: '¿El método está adaptado para cesárea?', a: 'Sí, especialmente. Está diseñado teniendo muy en cuenta las particularidades de la recuperación postcesárea: la cicatriz, la diástasis, el suelo pélvico y la reconexión con el abdomen. Muchas de las más de 3.000 mamás que lo han hecho tuvieron cesárea.' },
  { q: '¿Cuánto tiempo necesito al día?', a: 'Las rutinas duran entre 15 y 30 minutos. Están pensadas para hacerse desde casa y encajar en el día a día de una madre con poco tiempo.' },
  { q: '¿Cuánto tiempo tengo acceso al programa?', a: '4 meses de acceso completo para que puedas empezar cuando tu cuerpo esté listo, sin prisas y sin presión.' },
  { q: '¿Qué pasa si un día no puedo hacer la rutina?', a: 'No pasa nada. Los vídeos son on-demand y tienes 4 meses de acceso, así que puedes seguir tu propio ritmo sin presión.' },
  { q: '¿Necesito material o equipamiento?', a: 'No. Todas las rutinas son sin impacto y se hacen con el peso de tu propio cuerpo, desde casa.' },
  { q: '¿Cómo accedo al programa después de comprarlo?', a: 'Nada más comprar recibirás un email con el enlace a tu área privada donde encontrarás todos los vídeos organizados.' },
  { q: '¿Cuándo empezaré a notar resultados?', a: 'La mayoría de las mamás notan los primeros cambios durante las primeras 2 semanas. Los resultados más visibles llegan al completar las 4 semanas.' },
  { q: '¿Este método solo trabaja el cuerpo o también la mente?', a: 'Es el gran diferenciador. Incluye un módulo completo de fortaleza mental con vídeo de motivación y confianza, y audio de creencias — contenidos exclusivos que no encontrarás en YouTube.' },
  { q: '¿En qué se diferencia de otros programas?', a: 'Primero, especial foco en cesárea y madres que empiezan desde cero. Segundo, módulo de fortaleza mental incluido. Tercero, 1 directo mensual en vivo para resolver dudas. Y cuarto, 4 meses de acceso para que empieces cuando tu cuerpo esté listo.' }
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

export default function ProgramaPage() {
  const navigate = useNavigate();
  const goBack = () => { navigate('/'); window.scrollTo(0, 0); };
  const goComprar = () => window.open('https://pay.hotmart.com/G105828362U', '_blank');

  return (
    <div style={{ paddingTop: 80 }}>

      <Helmet>
        <title>Método Esencial Madre: Actívate | Recupera tu cuerpo siendo madre</title>
        <meta name="description" content="Método Esencial Madre: Actívate. Las primeras rutinas adaptadas a tu cuerpo de madre para volver a reconocerte y sentirte fuerte. €97. Acceso 4 meses." />
        <meta name="keywords" content="recuperación postcesárea, ejercicios después cesárea, recuperación postparto, rutinas madres sin experiencia, método esencial madre" />
        <link rel="canonical" href="https://esencialsusanaares.com/programa-4-semanas" />
        <meta property="og:title" content="Método Esencial Madre: Actívate | Recupera tu cuerpo siendo madre" />
        <meta property="og:description" content="Las primeras rutinas adaptadas a tu cuerpo de madre para volver a reconocerte y sentirte fuerte. €97. Acceso 4 meses." />
        <meta property="og:url" content="https://esencialsusanaares.com/programa-4-semanas" />
        <meta property="og:type" content="product" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Método Esencial Madre: Actívate | Recupera tu cuerpo siendo madre" />
        <meta name="twitter:description" content="Las primeras rutinas adaptadas a tu cuerpo de madre para volver a reconocerte y sentirte fuerte. €97. Acceso 4 meses." />
      </Helmet>

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
              Especialmente diseñado para cesárea — y también para parto vaginal. Perfecto aunque nunca hayas hecho ejercicio antes.
            </p>
            <div className="flex flex-wrap gap-3" style={{ marginBottom: '2rem' }}>
              <span className="pill" style={{ fontSize: '0.95rem', padding: '0.5rem 1rem' }}><Clock />4 meses de acceso</span>
              <span className="pill" style={{ fontSize: '0.95rem', padding: '0.5rem 1rem' }}><Video />Sin impacto</span>
              <span className="pill" style={{ fontSize: '0.95rem', padding: '0.5rem 1rem' }}><Users />+3.000 mamás</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
              <span style={{ fontSize: '1.1rem', color: 'rgba(26,26,26,0.35)', textDecoration: 'line-through' }}>€147</span>
              <span style={{ fontFamily: 'var(--serif)', fontSize: '2.5rem', color: 'var(--coral)', fontWeight: 600, lineHeight: 1 }}>€97</span>
            </div>
            <button className="btn-coral" style={{ fontSize: '1.1rem', padding: '1.1rem 2.5rem' }} onClick={goComprar}>
              Quiero empezar mi recuperación — €97
            </button>
            <p style={{ fontSize: '0.85rem', color: 'rgba(26,26,26,0.45)', marginTop: '0.75rem' }}>
              4 meses de acceso · Sin equipamiento · Desde casa
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
              { emoji: '⚠️', title: 'No sabes cómo empezar sin hacerte daño', desc: 'Tienes miedo de hacer ejercicios que no sean seguros para tu cicatriz, tu diástasis o tu suelo pélvico. O simplemente nunca has hecho ejercicio y no sabes por dónde empezar.' },
              { emoji: '⏰', title: 'No tienes tiempo, pero necesitas cuidarte', desc: 'Entre el bebé, el trabajo y la casa, apenas tienes un momento para ti. Pero sabes que necesitas hacer algo por tu cuerpo.' },
              { emoji: '💔', title: 'No te reconoces en el espejo', desc: 'Llevas meses o años sintiéndote así. Sabes que mereces recuperarte, pero no sabes por dónde empezar de forma segura.' },
              { emoji: '🎯', title: 'Has probado cosas pero nada funciona', desc: 'Necesitas una guía clara, paso a paso, diseñada específicamente para tu tipo de cuerpo, tu tipo de parto y tu momento vital.' }
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
            "Si te has sentido identificada con algo de esto, este método es para ti."
          </p>
        </div>
      </section>

      {/* ── FOTO + SOLUCIÓN ── */}
      <section className="section" style={{ background: 'var(--white)' }}>
        <div className="container-mid">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3.5rem', alignItems: 'center' }}>
            <div>
              <img src="/images/susana-ejercicio.JPG" alt="Susana Ares - Método Esencial Madre" style={{ width: '100%', maxHeight: 500, objectFit: 'cover', objectPosition: 'top', borderRadius: 4, boxShadow: '0 4px 24px rgba(0,0,0,0.1)' }} />
            </div>
            <div>
              <div style={label('var(--coral)')}>La solución</div>
              <h2 className="t-serif" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.25rem)', marginBottom: '1.25rem', lineHeight: 1.2 }}>
                Diseñado para empezar desde donde estás
              </h2>
              <p style={{ fontSize: '1.1rem', color: 'rgba(26,26,26,0.8)', lineHeight: 1.75, marginBottom: '1.75rem' }}>
                Rutinas sin impacto, adaptadas a cesárea y parto vaginal, pensadas para madres que empiezan desde cero — aunque nunca hayas hecho ejercicio antes.
              </p>
              <ul className="check-list" style={{ marginBottom: '2rem' }}>
                {[
                  'Rutinas sin impacto adaptadas al cuerpo de madre',
                  'Desde los 40 días (parto vaginal) o 2 meses (cesárea)',
                  'Perfecto si nunca has hecho ejercicio o llevas años sin hacer nada',
                  'Vídeos on-demand, hazlos cuando puedas',
                  '4 meses de acceso para empezar cuando estés lista',
                  'Sin equipamiento, desde casa'
                ].map((t, i) => (
                  <li key={i} style={{ fontSize: '1rem' }}><Check size={15} />{t}</li>
                ))}
              </ul>
              <button className="btn-coral" onClick={goComprar}>Quiero este método — €97</button>
            </div>
          </div>
        </div>
      </section>

      {/* ── DIFERENCIADOR CUERPO + MENTE ── */}
      <section className="section" style={{ background: 'var(--coral)' }}>
        <div className="container-mid text-center">
          <div style={{ ...label('rgba(255,255,255,0.75)') }}>Lo que hace único este método</div>
          <h2 className="t-serif" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', color: 'white', marginBottom: '1.25rem', lineHeight: 1.2 }}>
            No es solo recuperar el cuerpo.<br />Es recuperarte a ti.
          </h2>
          <p style={{ fontSize: '1.15rem', color: 'rgba(255,255,255,0.9)', maxWidth: 560, margin: '0 auto 2.5rem', lineHeight: 1.75 }}>
            La mayoría de programas trabajan solo el físico. Este va más allá: incluye un módulo completo de fortaleza mental porque después de una cesárea o un parto, recuperar la confianza en tu cuerpo es tan importante como recuperar el abdomen.
          </p>
          <div className="grid-2" style={{ gap: '1rem' }}>
            <div style={{ background: 'rgba(255,255,255,0.15)', borderRadius: 4, padding: '1.75rem', textAlign: 'left' }}>
              <div style={{ width: 44, height: 44, borderRadius: '50%', background: 'rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                <Brain size={20} color="white" />
              </div>
              <h3 style={{ fontWeight: 600, fontSize: '1.1rem', color: 'white', marginBottom: '0.6rem' }}>Vídeo de motivación y confianza</h3>
              <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.85)', lineHeight: 1.7 }}>
                Exclusivo. Para trabajar la confianza en ti misma y en tu cuerpo. Porque el primer paso es creer que lo mereces — y que puedes.
              </p>
            </div>
            <div style={{ background: 'rgba(255,255,255,0.15)', borderRadius: 4, padding: '1.75rem', textAlign: 'left' }}>
              <div style={{ width: 44, height: 44, borderRadius: '50%', background: 'rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                <Heart size={20} color="white" />
              </div>
              <h3 style={{ fontWeight: 600, fontSize: '1.1rem', color: 'white', marginBottom: '0.6rem' }}>Audio de creencias</h3>
              <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.85)', lineHeight: 1.7 }}>
                Exclusivo. Para reforzar que eres merecedora y válida para recuperarte y conseguir todo lo que te propones.
              </p>
            </div>
          </div>
          <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.7)', marginTop: '1.5rem' }}>
            ✦ Contenidos exclusivos — no disponibles en YouTube ni en ningún otro sitio.
          </p>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="section" style={{ background: 'var(--beige)' }}>
        <div className="container-mid">
          <div className="text-center" style={{ marginBottom: '2.5rem' }}>
            <div style={label()}>Cómo funciona</div>
            <h2 className="t-serif" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.25rem)' }}>Una semana típica del método</h2>
            <p style={{ fontSize: '1.1rem', color: 'rgba(26,26,26,0.7)', maxWidth: 480, margin: '0.75rem auto 0', lineHeight: 1.7 }}>
              Diseñado para encajar en tu vida de madre, sin agobios ni presión.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
            {[
              { emoji: '💪', title: '3 rutinas semanales', desc: 'Grabadas, sin impacto, adaptadas al cuerpo de madre. De 15 a 30 minutos.' },
              { emoji: '🌅', title: '1 vídeo cada domingo', desc: 'Estiramientos y hábitos de recuperación para tu día a día.' },
              { emoji: '🧠', title: 'Módulo de fortaleza mental', desc: 'Vídeo de motivación + audio de creencias. El diferencial único.' },
              { emoji: '🎙️', title: '1 directo mensual', desc: 'En vivo con Susana para resolver tus dudas personalmente.' }
            ].map((item, i) => (
              <div key={i} style={{ background: 'var(--white)', borderRadius: 4, padding: '1.5rem', textAlign: 'center' }}>
                <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>{item.emoji}</div>
                <h4 style={{ fontWeight: 600, fontSize: '1rem', marginBottom: '0.4rem' }}>{item.title}</h4>
                <p style={{ fontSize: '0.875rem', color: 'rgba(26,26,26,0.7)', lineHeight: 1.6 }}>{item.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ background: 'var(--black)', borderRadius: 4, padding: '1.25rem 1.5rem', textAlign: 'center' }}>
            <p style={{ fontSize: '0.95rem', color: 'white', lineHeight: 1.65, margin: 0 }}>
              ✦ <strong style={{ color: 'var(--coral)' }}>4 meses de acceso completo</strong> para que puedas empezar cuando tu cuerpo esté listo, sin prisas y sin presión.
            </p>
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
              Consejos realistas adaptados a la vida postcesárea y postparto para seguir recuperando tu abdomen <strong>incluso cuando no estés haciendo las rutinas de ejercicio</strong>.
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

      {/* ── VÍDEO ── */}
      <section style={{ background: 'var(--white)', padding: '3.5rem 1.5rem' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <div className="text-center" style={{ marginBottom: '1.75rem' }}>
            <div style={label()}>Ellas te lo cuentan</div>
            <h2 className="t-serif" style={{ fontSize: 'clamp(1.65rem, 3vw, 2.25rem)', color: 'var(--black)' }}>Lo que dicen las mamás que ya lo han hecho</h2>
          </div>
          <div style={{ position: 'relative', width: '100%', paddingBottom: '56.25%', borderRadius: 6, overflow: 'hidden', boxShadow: '0 6px 28px rgba(0,0,0,0.12)' }}>
            <iframe src="https://www.youtube.com/embed/Ni7HROuAIq8" title="Testimonios del programa" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} />
          </div>
        </div>
      </section>

      {/* ── TESTIMONIOS ── */}
      <section className="section" style={{ background: 'var(--white)' }}>
        <div className="container-mid">
          <div className="text-center" style={{ marginBottom: '2rem' }}>
            <div style={label()}>Lo que dicen las mamás</div>
            <h2 className="t-serif" style={{ fontSize: 'clamp(1.65rem, 3vw, 2.25rem)', color: 'var(--black)' }}>Mensajes reales de clientas reales</h2>
            <p style={{ fontSize: '1.05rem', color: 'rgba(26,26,26,0.6)', marginTop: '0.5rem' }}>+3.000 mamás ya han completado el método — muchas de ellas con cesárea o sin experiencia previa</p>
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
          <h2 className="t-serif text-center" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.25rem)', marginBottom: '0.75rem' }}>¿Para quién es este método?</h2>
          <p style={{ textAlign: 'center', fontSize: '1rem', color: 'rgba(26,26,26,0.6)', marginBottom: '2.5rem' }}>Para madres que quieren empezar desde donde están, sin importar su punto de partida.</p>
          <div className="grid-2">
            <div style={{ background: 'rgba(242,237,230,0.5)', borderRadius: 2, padding: '1.5rem' }}>
              <h4 style={{ fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', fontSize: '1.05rem' }}>
                <Check size={18} style={{ color: 'var(--coral)' }} /> Este método ES para ti si…
              </h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.95rem', color: 'rgba(26,26,26,0.8)' }}>
                <li>• Tienes más de 40 días tras parto vaginal</li>
                <li>• Tienes más de 2 meses tras cesárea</li>
                <li>• <strong>Nunca has hecho ejercicio o llevas años sin hacer nada</strong></li>
                <li>• Tu cicatriz de cesárea te genera inseguridad</li>
                <li>• Buscas rutinas cortas desde casa, sin equipamiento</li>
                <li>• Quieres recuperar tu cuerpo y también tu confianza</li>
              </ul>
            </div>
            <div style={{ background: 'rgba(232,226,220,0.3)', borderRadius: 2, padding: '1.5rem' }}>
              <h4 style={{ fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', fontSize: '1.05rem' }}>
                <X size={18} style={{ color: 'rgba(26,26,26,0.4)' }} /> Este método NO es para ti si…
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
            <div style={label('var(--coral)')}>Método Esencial Madre: Actívate</div>
            <h2 className="t-serif" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.25rem)' }}>Todo lo que incluye</h2>
          </div>
          <div className="card" style={{ padding: '2.5rem' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '110px 1fr', gap: '1.5rem', alignItems: 'center', background: 'var(--beige)', borderRadius: 4, padding: '1.5rem', marginBottom: '2rem' }}>
              <img src="/images/susana-cercana.JPG" alt="Susana Ares" style={{ width: 110, height: 110, borderRadius: '50%', objectFit: 'cover', objectPosition: 'top', boxShadow: '0 2px 12px rgba(0,0,0,0.12)' }} />
              <p className="t-serif-italic" style={{ fontSize: '1.2rem', color: 'rgba(26,26,26,0.85)', lineHeight: 1.7 }}>
                "He acompañado a más de 3.000 mamás a recuperarse. Sé que tú también puedes, aunque nunca hayas hecho ejercicio antes."
                <span style={{ display: 'block', fontStyle: 'normal', fontWeight: 700, fontSize: '1rem', marginTop: '0.5rem', color: 'var(--coral)' }}>— Susana Ares</span>
              </p>
            </div>
            <ul className="check-list" style={{ marginBottom: '2rem' }}>
              {[
                '3 rutinas semanales sin impacto, adaptadas al cuerpo de madre',
                'Vídeo dominical de estiramientos y hábitos de recuperación',
                '🧠 Módulo de fortaleza mental: vídeo de motivación y confianza',
                '🎧 Audio de creencias: somos merecedoras',
                '🎙️ 1 directo mensual en vivo de resolución de dudas',
                'Válido desde los 40 días (parto vaginal) o 2 meses (cesárea)',
                'Perfecto para madres que nunca han hecho ejercicio',
                'Sin equipamiento, desde casa, a tu ritmo',
                '4 meses de acceso completo',
                'BONUS: Recupera tu abdomen en tu día a día'
              ].map((t, i) => (
                <li key={i} style={{ fontSize: '1rem', paddingBottom: '0.3rem' }}><Check size={16} />{t}</li>
              ))}
            </ul>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', background: 'rgba(232,115,90,0.06)', border: '1px solid rgba(232,115,90,0.2)', borderRadius: 4, padding: '1rem', marginBottom: '2rem' }}>
              <ShieldCheck size={20} style={{ color: 'var(--coral)', flexShrink: 0, marginTop: 2 }} />
              <div>
                <p style={{ fontWeight: 600, fontSize: '0.95rem', color: 'var(--coral)', marginBottom: '0.25rem' }}>4 meses de acceso completo</p>
                <p style={{ fontSize: '0.9rem', color: 'rgba(26,26,26,0.65)', lineHeight: 1.65 }}>Para que puedas empezar cuando tu cuerpo esté listo, sin prisas y sin presión.</p>
              </div>
            </div>
            <div className="text-center" style={{ borderTop: '1px solid var(--pearl)', paddingTop: '2rem' }}>
              <div style={{ marginBottom: '1.5rem' }}>
                <span style={{ fontSize: '1.1rem', color: 'rgba(26,26,26,0.35)', textDecoration: 'line-through' }}>€147</span>
                <div style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(3rem, 8vw, 4rem)', color: 'var(--coral)', fontWeight: 600, lineHeight: 1, marginTop: '0.25rem' }}>€97</div>
                <p style={{ fontSize: '0.9rem', color: 'rgba(26,26,26,0.45)', marginTop: '0.4rem' }}>Pago único · 4 meses de acceso · Sin suscripción</p>
              </div>
              <button className="btn-coral" style={{ fontSize: '1.1rem', padding: '1.2rem 3rem', width: '100%', maxWidth: 420 }} onClick={goComprar}>
                Quiero empezar mi recuperación — €97
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
          <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)' }}>¿Lista para empezar desde donde estás?</h2>
          <p style={{ fontSize: '1.15rem', marginBottom: '1rem', opacity: 0.9 }}>Da tu primer paso hoy. Tu cuerpo te lo agradecerá.</p>
          <div style={{ fontFamily: 'var(--sans)', fontWeight: 700, fontSize: '2rem', color: 'white', marginBottom: '0.25rem' }}>€97</div>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.875rem', marginBottom: '1.5rem', textDecoration: 'line-through' }}>Antes €147</p>
          <button className="btn-white" style={{ fontSize: '1.05rem', padding: '1.1rem 2.5rem' }} onClick={goComprar}>
            Quiero empezar mi recuperación
          </button>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem', marginTop: '0.75rem' }}>
            4 meses de acceso · Sin equipamiento · Desde casa
          </p>
        </div>
      </div>

    </div>
  );
}