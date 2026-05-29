import { Clock, Users, Calendar, Video, Target, Heart, Gift, Play, Check } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const HERO_IMG     = '/images/susana-hero.JPG';
const EXERCISE_IMG = '/images/susana-ejercicio.JPG';
const ABOUT_IMG    = '/images/susana-cercana.JPG';

const TESTIMONIALS = [
  { name: 'Patricia A.', image: 'https://customer-assets.emergentagent.com/job_esencial-program/artifacts/3b654wji_IMG_6348.jpg', text: 'Llegué a Susana en un momento donde no sabía por dónde empezar aunque tenía claro que quería recuperarme sin lastimarme. Sus rutinas me dieron claridad, seguridad y estructura. Son sesiones cortas, completas y fáciles de integrar en el día a día.' },
  { name: 'Estefanía L.', image: 'https://customer-assets.emergentagent.com/job_esencial-program/artifacts/s5uvh4hj_IMG_6351.jpg', text: 'No fue solo recuperar fuerza… fue volver a confiar en mí, en mi cuerpo y en lo que es capaz de hacer. Empezar poco a poco, con ejercicios adaptados a mi cesárea, marcó la diferencia. No fue hacerlo perfecto, fue simplemente empezar.' },
  { name: 'Gema S.', image: 'https://customer-assets.emergentagent.com/job_esencial-program/artifacts/zo6pxrl6_Captura%20de%20pantalla%202026-04-14%20a%20las%2015.07.46.png', text: 'Hacer el calendario y encontrar a Susana ha sido un regalo. Los ejercicios son sencillos y según pasan los días el grado de dificultad aumenta. Hacerlo en grupo con mujeres en circunstancias parecidas te motiva. Lo recomiendo 100%.' },
  { name: 'María J.', image: 'https://customer-assets.emergentagent.com/job_esencial-program/artifacts/91n2qzq9_Captura%20de%20pantalla%202026-04-14%20a%20las%2015.11.47.png', text: 'El calendario está genial porque tienes días intercalados que hacen que el músculo descanse. He notado mucho cambio al vestirme. Son pequeños logros pero es así como se consiguen las metas. Merece la pena.' }
];

const VIDEOS = [
  { id: '1', title: 'Ejercicios suaves', thumbnail_url: 'https://img.youtube.com/vi/NewT_IjwqII/maxresdefault.jpg', video_url: 'https://www.youtube.com/embed/NewT_IjwqII', duration: '25:00', description: 'Rutina suave para las primeras semanas' },
  { id: '2', title: 'Recuperación abdominal', thumbnail_url: 'https://img.youtube.com/vi/Azq1TqC39sw/maxresdefault.jpg', video_url: 'https://www.youtube.com/embed/Azq1TqC39sw', duration: '15:00', description: 'Ejercicios para fortalecer el core' },
  { id: '3', title: 'Pelvis y suelo', thumbnail_url: 'https://img.youtube.com/vi/RSV-nvu0IWo/maxresdefault.jpg', video_url: 'https://www.youtube.com/embed/RSV-nvu0IWo', duration: '20:00', description: 'Fortalecimiento del suelo pélvico' },
  { id: '4', title: 'Respiración y conexión', thumbnail_url: 'https://img.youtube.com/vi/50OqkXDKiXY/maxresdefault.jpg', video_url: 'https://www.youtube.com/embed/50OqkXDKiXY', duration: '18:00', description: 'Técnicas de respiración consciente' }
];

export default function HomePage({ onVideoClick }) {
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>Esencial Susana Ares | Recuperación postcesárea y postparto desde casa</title>
        <meta name="description" content="Método Esencial Madre: Actívate. Las primeras rutinas adaptadas a tu cuerpo de madre para recuperarte después de la cesárea o el parto. Desde casa, sin experiencia previa. +3.000 mamás." />
        <meta name="keywords" content="recuperación postcesárea, ejercicios después cesárea, recuperación postparto, rutinas madres sin experiencia, método esencial madre" />
        <link rel="canonical" href="https://esencialsusanaares.com/" />
        <meta property="og:title" content="Esencial Susana Ares | Recuperación postcesárea y postparto desde casa" />
        <meta property="og:description" content="Método Esencial Madre: Actívate. Las primeras rutinas adaptadas a tu cuerpo de madre para recuperarte después de la cesárea o el parto." />
        <meta property="og:url" content="https://esencialsusanaares.com/" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Esencial Susana Ares | Recuperación postcesárea y postparto desde casa" />
        <meta name="twitter:description" content="Método Esencial Madre: Actívate. Las primeras rutinas adaptadas a tu cuerpo de madre para recuperarte después de la cesárea o el parto." />
      </Helmet>

      {/* ── HERO ── */}
      <section className="hero">
        <div className="hero-image">
          <img src={HERO_IMG} alt="Susana Ares - Recuperación postcesárea y postparto" />
          <div className="hero-image-fade-mobile" />
          <div className="hero-image-fade-desktop" />
        </div>
        <div className="hero-content">
          <div style={{ maxWidth: 480 }}>
            <div style={{ fontFamily: 'var(--serif)', fontSize: '1.5rem', letterSpacing: '0.2em', color: 'var(--black)', lineHeight: 1, marginBottom: 4 }}>ESENCIAL</div>
            <div style={{ fontFamily: 'var(--sans)', fontWeight: 600, fontSize: '0.7rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--coral)', marginBottom: '2rem' }}>Susana Ares</div>
            <div className="t-label text-muted" style={{ marginBottom: '0.75rem' }}>Método Esencial Madre · Actívate</div>
            <h1 className="t-serif" style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', fontWeight: 400, lineHeight: 1.1, marginBottom: '1.25rem', color: 'var(--black)' }}>
              Recupera tu cuerpo después de la cesárea, y tu confianza
            </h1>
            <p style={{ fontSize: '1.05rem', color: 'rgba(26,26,26,0.78)', lineHeight: 1.65, marginBottom: '1.75rem' }}>
              Las primeras rutinas adaptadas a tu cuerpo de madre para volver a reconocerte, sentirte fuerte y empezar desde donde estás. Aunque nunca hayas hecho ejercicio antes.
            </p>
            <div className="flex flex-wrap gap-3" style={{ marginBottom: '2rem' }}>
              <span className="pill"><Clock />4 meses de acceso</span>
              <span className="pill"><Users />+3.000 mamás</span>
            </div>
            <button className="btn-coral" onClick={() => navigate('/programa-4-semanas')}>
              Quiero empezar mi recuperación
            </button>
            <p className="text-sm text-muted" style={{ marginTop: '1rem' }}>Especialmente diseñado para cesárea — y también para parto vaginal</p>
          </div>
        </div>
      </section>

      {/* ── PROBLEM ── */}
      <section className="section" style={{ background: 'var(--white)' }}>
        <div className="container-narrow text-center">
          <div className="t-label text-muted" style={{ marginBottom: '0.75rem' }}>Si estás aquí es porque…</div>
          <h2 className="t-serif" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', lineHeight: 1.2, color: 'var(--black)', marginBottom: '3rem' }}>
            Una parte de ti sabe que <em className="text-coral">mereces recuperarte</em>
          </h2>
          <div className="grid-2">
            {[
              'Tuviste cesárea y no sabes cómo empezar a recuperarte sin hacerte daño',
              'Tu cicatriz te genera inseguridad y no sabes cómo trabajarla',
              'Nunca has hecho ejercicio o llevas años sin hacer nada y quieres empezar',
              'No tienes tiempo, pero sabes que necesitas cuidarte',
              'Te miras al espejo y no te reconoces',
              'Necesitas una guía clara, paso a paso, adaptada a tu momento'
            ].map((item, i) => (
              <div key={i} className="pain-card" style={{ textAlign: 'left', display: 'flex', alignItems: 'flex-start', gap: '0.65rem' }}>
                <Check size={16} style={{ color: 'var(--coral)', flexShrink: 0, marginTop: 3 }} />
                <p style={{ fontSize: '0.9rem', color: 'rgba(26,26,26,0.8)', lineHeight: 1.5 }}>{item}</p>
              </div>
            ))}
          </div>
          <p className="t-serif-italic" style={{ marginTop: '3rem', fontSize: '1.35rem', color: 'rgba(26,26,26,0.85)', lineHeight: 1.55 }}>
            "No se trata de volver a ser la de antes, sino de descubrir la mejor versión que ya habita en ti."
          </p>
        </div>
      </section>

      {/* ── PROGRAM PREVIEW ── */}
      <section id="programa" className="section" style={{ background: 'var(--beige)' }}>
        <div className="container-mid">
          <div className="text-center" style={{ marginBottom: '2.5rem' }}>
            <div className="t-label" style={{ color: 'var(--coral)', marginBottom: '0.5rem' }}>El Método</div>
            <h2 className="t-serif" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', color: 'var(--black)', marginBottom: '1rem' }}>Método Esencial Madre: Actívate</h2>
            <p style={{ fontSize: '1.05rem', color: 'rgba(26,26,26,0.78)', maxWidth: 540, margin: '0 auto' }}>
              Las primeras rutinas adaptadas a tu cuerpo de madre — especialmente diseñado para cesárea, también para parto vaginal, y perfecto si nunca has hecho ejercicio antes.
            </p>
          </div>
          <div className="grid-2" style={{ marginBottom: '2.5rem' }}>
            {[
              { Icon: Calendar, text: '4 meses de acceso completo' },
              { Icon: Video,    text: 'Rutinas sin impacto on-demand' },
              { Icon: Target,   text: 'Abdomen postcesárea y postparto' },
              { Icon: Heart,    text: 'Suelo pélvico adaptado' },
              { Icon: Clock,    text: 'Desde 40 días (parto) o 2 meses (cesárea)' },
              { Icon: Gift,     text: 'Módulo de fortaleza mental incluido' }
            ].map(({ Icon, text }, i) => (
              <div key={i} className="feature-item"><Icon size={18} />{text}</div>
            ))}
          </div>
          <div className="text-center">
            <button className="btn-coral" onClick={() => navigate('/programa-4-semanas')}>
              Ver el método completo — €97
            </button>
            <p className="text-sm text-muted" style={{ marginTop: '0.75rem' }}>
              <span style={{ textDecoration: 'line-through', marginRight: '0.5rem' }}>€147</span>€97 · 4 meses de acceso · Sin equipamiento
            </p>
          </div>
        </div>
      </section>

      {/* ── FREE EXERCISES ── */}
      <section id="ejercicios" className="section" style={{ background: 'var(--white)' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: '3rem' }}>
            <div className="t-label text-muted" style={{ marginBottom: '0.75rem' }}>Empieza gratis</div>
            <h2 className="t-serif" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', color: 'var(--black)', marginBottom: '1rem' }}>Prueba el método antes de comprar</h2>
            <p style={{ fontSize: '1.05rem', color: 'rgba(26,26,26,0.7)', maxWidth: 500, margin: '0 auto' }}>
              Estas rutinas gratuitas son una muestra de cómo trabajo. Adaptadas a cesárea y parto vaginal, para todos los niveles.
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'row', gap: '3rem', alignItems: 'flex-start', flexWrap: 'wrap' }}>
            <div style={{ flex: '0 0 420px', maxWidth: 420 }}>
              <img src={EXERCISE_IMG} alt="Susana Ares" style={{ width: '100%', aspectRatio: '4/5', objectFit: 'cover', objectPosition: 'top', borderRadius: 2, boxShadow: '0 2px 16px rgba(0,0,0,0.08)' }} />
            </div>
            <div style={{ flex: 1, minWidth: 280 }}>
              <p style={{ fontSize: '0.95rem', color: 'rgba(26,26,26,0.8)', lineHeight: 1.65, marginBottom: '1.5rem' }}>
                Antes de dar el paso al método completo, te invito a probar estas rutinas gratuitas. Así podrás ver cómo trabajo y si conectas con mi forma de enseñar.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
                {VIDEOS.map((v) => (
                  <div key={v.id} className="video-thumb" onClick={() => onVideoClick(v)}>
                    <img src={v.thumbnail_url} alt={v.title} />
                    <div className="video-thumb-overlay">
                      <div className="video-play-btn">
                        <Play size={18} color="white" fill="white" style={{ marginLeft: 2 }} />
                      </div>
                    </div>
                    <span className="video-duration">{v.duration}</span>
                  </div>
                ))}
              </div>
              <p className="text-sm text-muted">¿Te han gustado? El método completo tiene muchas más rutinas adaptadas a tu situación.</p>
              <div style={{ marginTop: '1.25rem' }}>
                <button className="btn-coral" style={{ fontSize: '0.95rem', padding: '0.9rem 2rem' }} onClick={() => navigate('/lista-espera')}>
                  Recibe una semana gratis
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section id="testimonios" className="section" style={{ background: 'var(--peach)' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: '3rem' }}>
            <div className="t-label text-muted" style={{ marginBottom: '0.75rem' }}>+3.000 mamás ya se han recuperado</div>
            <h2 className="t-serif" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', color: 'var(--black)' }}>Ellas ya lo han conseguido</h2>
          </div>
          <div className="grid-2">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="testimonial-card">
                <div className="flex items-center gap-3" style={{ marginBottom: '1rem' }}>
                  <img src={t.image} alt={t.name} className="testimonial-avatar" />
                  <span style={{ fontWeight: 600, fontSize: '1rem' }}>{t.name}</span>
                </div>
                <p style={{ fontSize: '0.875rem', color: 'rgba(26,26,26,0.8)', lineHeight: 1.65 }}>{t.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRESS ── */}
      <section className="section-sm" style={{ background: 'var(--white)' }}>
        <div className="container-narrow text-center">
          <div className="t-label text-muted" style={{ marginBottom: '1.5rem' }}>Me has visto en</div>
          <div className="flex justify-center gap-4 flex-wrap">
            {[
              { name: 'MujerHoy', style: { fontFamily: 'var(--serif)', fontSize: '1.5rem', fontWeight: 600 } },
              { name: 'Telemadrid', style: { fontFamily: 'var(--sans)', fontSize: '1.15rem', fontWeight: 700, letterSpacing: '0.05em' } }
            ].map((logo, i) => (
              <a key={i} href="https://www.elcorteingles.es/moda-mujer/ya-es-primavera-ccmoda2/" target="_blank" rel="noopener noreferrer" className="press-logo">
                <span style={{ ...logo.style, color: 'rgba(26,26,26,0.75)' }}>{logo.name}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="quien-soy" className="section" style={{ background: 'var(--white)' }}>
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'row', gap: '3rem', alignItems: 'flex-start', flexWrap: 'wrap' }}>
            <div style={{ flex: '0 0 400px', maxWidth: 400 }}>
              <img src={ABOUT_IMG} alt="Susana Ares" style={{ width: '100%', borderRadius: 2, boxShadow: '0 4px 24px rgba(0,0,0,0.1)', objectFit: 'cover' }} />
            </div>
            <div style={{ flex: 1, minWidth: 280 }}>
              <div className="t-label text-muted" style={{ marginBottom: '0.5rem' }}>Sobre mí</div>
              <h2 className="t-serif" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', color: 'var(--black)', marginBottom: '1.25rem' }}>Soy Susana Ares</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.925rem', color: 'rgba(26,26,26,0.8)', lineHeight: 1.7 }}>
                <p>Mamá de tres hijos, y sé de primera mano los desafíos del postparto y la recuperación postcesárea. He vivido personalmente lo que supone recuperar tu cuerpo, tu energía y tu confianza.</p>
                <p>Soy <strong style={{ color: 'var(--black)' }}>especialista en recuperación postcesárea y postparto</strong>, instructora de pilates terapéutico y me he formado para poder ayudarte desde un enfoque profesional.</p>
                <p>He acompañado a más de <strong style={{ color: 'var(--coral)' }}>3.000 mamás</strong> a recuperarse — muchas de ellas sin experiencia previa en ejercicio y tras una cesárea.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── INTEGRAL PROGRAM ── */}
      <section id="programa-integral" className="section" style={{ background: 'var(--beige)' }}>
        <div className="container-mid">
          <div className="text-center" style={{ marginBottom: '3rem' }}>
            <div className="t-label" style={{ color: 'var(--coral)', marginBottom: '0.5rem' }}>Próximamente</div>
            <h2 className="t-serif" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', color: 'var(--black)', marginBottom: '0.75rem' }}>Programa Integral ESENCIAL</h2>
            <p style={{ fontSize: '1.05rem', color: 'rgba(26,26,26,0.78)' }}>Acompañamiento completo: cuerpo + mente + motivación</p>
          </div>
          <div className="grid-2" style={{ marginBottom: '2.5rem' }}>
            <div className="card">
              <h4 style={{ fontWeight: 600, fontSize: '1.05rem', marginBottom: '1rem' }}>Módulo del Cuerpo</h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.4rem', fontSize: '0.875rem', color: 'rgba(26,26,26,0.8)' }}>
                <li>• Videos On-Demand Online</li>
                <li>• Calendario adaptado a tu parto/cesárea</li>
                <li>• Curso de motivación para madres</li>
                <li>• Curso de organización</li>
              </ul>
            </div>
            <div className="card">
              <h4 style={{ fontWeight: 600, fontSize: '1.05rem', marginBottom: '1rem' }}>Módulo de la Mente</h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.4rem', fontSize: '0.875rem', color: 'rgba(26,26,26,0.8)' }}>
                <li>• Sanación de Madre</li>
                <li>• Conecta con tu nueva versión</li>
                <li>• Sesiones en Directo</li>
                <li>• Comunidad privada de mamás</li>
              </ul>
            </div>
          </div>
          <div className="text-center">
            <span style={{ display: 'inline-block', background: 'rgba(232,115,90,0.12)', color: 'var(--coral)', fontWeight: 600, fontSize: '0.875rem', padding: '0.6rem 1.5rem', borderRadius: 4 }}>
              ✦ Próximamente disponible
            </span>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <div className="cta-band">
        <div className="container-narrow">
          <h2>¿Lista para empezar tu recuperación?</h2>
          <p>Empieza desde donde estás — con cesárea, parto vaginal, o aunque nunca hayas hecho ejercicio antes.</p>
          <button className="btn-white" onClick={() => navigate('/programa-4-semanas')}>
            Quiero empezar ahora — €97
          </button>
          <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.85rem', marginTop: '0.75rem', textDecoration: 'line-through' }}>Antes €147</p>
        </div>
      </div>
    </>
  );
}