import { ArrowLeft, Clock, Video, Users, Check, X, Target, Gift } from 'lucide-react';

export default function ProgramaPage({ setCurrentPage }) {
  const goBack = () => { setCurrentPage('home'); window.scrollTo(0,0); };
  const goConfirm = () => { setCurrentPage('confirmacion'); window.scrollTo(0,0); };

  return (
    <div style={{ paddingTop: 80 }}>

      {/* ── HERO ── */}
      <section className="section" style={{ background: 'linear-gradient(to bottom, var(--peach) 0%, var(--white) 100%)' }}>
        <div className="container-mid text-center">
          <button className="btn-back mb-4" style={{ marginBottom: '2rem' }} onClick={goBack}>
            <ArrowLeft size={15} /> Volver al inicio
          </button>
          <div className="t-label text-coral mb-2" style={{ color: 'var(--coral)', marginBottom: '0.75rem' }}>Programa de 4 semanas</div>
          <h1 className="t-serif mb-3" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', lineHeight: 1.15, marginBottom: '1.25rem' }}>
            Recupera tu cuerpo desde cero
          </h1>
          <p style={{ fontSize: '1.1rem', color: 'rgba(26,26,26,0.8)', maxWidth: 600, margin: '0 auto 2rem', lineHeight: 1.65 }}>
            El programa paso a paso para empezar a tonificar tu cuerpo después de ser madre, desde casa, con rutinas cortas y sencillas.
          </p>
          <div className="flex justify-center flex-wrap gap-3 mb-4" style={{ marginBottom: '2.5rem' }}>
            <span className="pill"><Clock />4 semanas</span>
            <span className="pill"><Video />Videos on-demand</span>
            <span className="pill"><Users />+3.000 mamás</span>
          </div>
          <button className="btn-coral" onClick={goConfirm}>Quiero empezar mi recuperación</button>
        </div>
      </section>

      {/* ── PAIN POINTS ── */}
      <section className="section" style={{ background: 'var(--white)' }}>
        <div className="container-narrow">
          <div className="text-center" style={{ marginBottom: '3rem' }}>
            <div className="t-label text-muted mb-2">¿Te sientes identificada?</div>
            <h2 className="t-serif" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.25rem)', lineHeight: 1.2 }}>
              Sé que estás aquí porque <em className="text-coral">algo ha cambiado</em>
            </h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {[
              { title: 'Tu cuerpo ya no es el mismo después de ser madre', desc: 'Da igual si tuviste a tu bebé hace meses o hace años. Tu cuerpo ha cambiado y sientes que has perdido la conexión con él.' },
              { title: 'No sabes por dónde empezar sin hacerte daño', desc: 'Quieres recuperarte, pero tienes miedo de hacer ejercicios que no sean adecuados para tu situación (parto vaginal, cesárea, diástasis...).' },
              { title: 'No tienes tiempo, pero necesitas cuidarte', desc: 'Entre el bebé, el trabajo y la casa, apenas tienes un momento para ti. Pero sabes que necesitas hacer algo por tu cuerpo.' },
              { title: 'Te miras al espejo y no te reconoces', desc: 'Tu abdomen, tu suelo pélvico, tu postura... todo ha cambiado. Y sientes que has perdido parte de ti misma.' },
              { title: 'Quieres resultados pero no sabes cómo conseguirlos', desc: 'Has probado cosas, pero nada parece funcionar. Necesitas una guía clara, paso a paso, que te diga exactamente qué hacer.' }
            ].map((item, i) => (
              <div key={i} className="pain-card">
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="t-serif-italic text-center mt-6" style={{ marginTop: '3rem', fontSize: '1.3rem', color: 'rgba(26,26,26,0.85)', lineHeight: 1.55 }}>
            "Si te has sentido identificada con algo de esto, este programa es para ti."
          </p>
        </div>
      </section>

      {/* ── SOLUTION ── */}
      <section className="section" style={{ background: 'var(--beige)' }}>
        <div className="container-mid">
          <div className="text-center" style={{ marginBottom: '3rem' }}>
            <div className="t-label text-coral mb-2" style={{ color: 'var(--coral)', marginBottom: '0.5rem' }}>La solución</div>
            <h2 className="t-serif mb-3" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.25rem)', marginBottom: '1rem' }}>Un programa diseñado para ti, mamá</h2>
            <p style={{ fontSize: '1rem', color: 'rgba(26,26,26,0.8)', maxWidth: 560, margin: '0 auto', lineHeight: 1.65 }}>
              "Recupera tu cuerpo desde cero" es un programa de 4 semanas con rutinas cortas, sencillas y guiadas, diseñadas específicamente para el cuerpo de madre.
            </p>
          </div>
          <div className="grid-2">
            <div className="card">
              <div style={{ width: 52, height: 52, borderRadius: '50%', background: 'rgba(232,115,90,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                <Target size={24} style={{ color: 'var(--coral)' }} />
              </div>
              <h3 style={{ fontWeight: 600, fontSize: '1.05rem', marginBottom: '1rem' }}>Ejercicios específicos para madres</h3>
              <ul className="check-list">
                {['Tonificación del abdomen de forma progresiva y segura','Trabajo del suelo pélvico adaptado','Rutinas para todo el cuerpo pensando en tus cambios','Ejercicios para lo que se ve y lo que no se ve'].map((t,i) => (
                  <li key={i}><Check size={16} />{t}</li>
                ))}
              </ul>
            </div>
            <div className="card">
              <div style={{ width: 52, height: 52, borderRadius: '50%', background: 'rgba(232,115,90,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                <Video size={24} style={{ color: 'var(--coral)' }} />
              </div>
              <h3 style={{ fontWeight: 600, fontSize: '1.05rem', marginBottom: '1rem' }}>Videos guiados paso a paso</h3>
              <ul className="check-list">
                {['Explicaciones sencillas que cualquiera puede seguir','Rutinas cortas que caben en tu día a día','Acceso exclusivo semanal a nuevos videos','On-demand: hazlos cuando puedas, desde casa'].map((t,i) => (
                  <li key={i}><Check size={16} />{t}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="section" style={{ background: 'var(--white)' }}>
        <div className="container-mid">
          <div className="text-center" style={{ marginBottom: '3rem' }}>
            <div className="t-label text-muted mb-2">Cómo funciona</div>
            <h2 className="t-serif" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.25rem)' }}>4 semanas para empezar a notar resultados</h2>
          </div>
          <div className="week-steps">
            {[
              { week: 'Semana 1', title: 'Conexión', desc: 'Reconecta con tu cuerpo y aprende las bases de los ejercicios' },
              { week: 'Semana 2', title: 'Activación', desc: 'Empieza a activar tu abdomen y suelo pélvico de forma suave' },
              { week: 'Semana 3', title: 'Fortalecimiento', desc: 'Aumenta la intensidad y empieza a tonificar' },
              { week: 'Semana 4', title: 'Consolidación', desc: 'Integra todo lo aprendido y nota los primeros resultados' }
            ].map((item, i) => (
              <div key={i} className="week-step">
                <div className="week-number">{i + 1}</div>
                <div className="t-label text-coral" style={{ color: 'var(--coral)', marginBottom: '0.4rem', fontSize: '0.6rem' }}>{item.week}</div>
                <div style={{ fontWeight: 600, fontSize: '1rem', marginBottom: '0.4rem' }}>{item.title}</div>
                <p style={{ fontSize: '0.825rem', color: 'rgba(26,26,26,0.65)', lineHeight: 1.5 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BONUS ── */}
      <section className="section" style={{ background: 'var(--peach)' }}>
        <div className="container-narrow">
          <div className="card" style={{ padding: '2.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
              <div style={{ width: 52, height: 52, borderRadius: '50%', background: 'var(--coral)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Gift size={24} color="white" />
              </div>
              <div>
                <div className="t-label text-coral" style={{ color: 'var(--coral)', marginBottom: '0.2rem' }}>Bonus especial incluido</div>
                <h3 className="t-serif" style={{ fontSize: '1.35rem' }}>Recupera tu abdomen en tu día a día</h3>
              </div>
            </div>
            <p style={{ fontSize: '0.925rem', color: 'rgba(26,26,26,0.8)', lineHeight: 1.7, marginBottom: '1.25rem' }}>
              Además del programa, recibirás un bonus especial con <strong>consejos realistas para tu día a día como madre</strong>. Son pequeñas acciones que puedes integrar en tu rutina diaria para seguir tonificando y recuperando tu abdomen, <strong>incluso cuando no estés haciendo las rutinas de ejercicio</strong>.
            </p>
            <ul className="check-list">
              {['Consejos prácticos para aplicar mientras cuidas a tu bebé','Hábitos sencillos que marcan la diferencia','Pensado para mamás reales con poco tiempo'].map((t,i)=>(
                <li key={i}><Check size={15} />{t}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── WHO IS IT FOR ── */}
      <section className="section" style={{ background: 'var(--white)' }}>
        <div className="container-narrow">
          <h2 className="t-serif text-center mb-4" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.25rem)', marginBottom: '2.5rem' }}>¿Para quién es este programa?</h2>
          <div className="grid-2">
            <div style={{ background: 'rgba(242,237,230,0.5)', borderRadius: 2, padding: '1.5rem' }}>
              <h4 style={{ fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                <Check size={18} style={{ color: 'var(--coral)' }} /> Este programa ES para ti si…
              </h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.4rem', fontSize: '0.875rem', color: 'rgba(26,26,26,0.8)' }}>
                <li>• Tuviste a tu bebé hace pocos meses y quieres empezar a recuperarte</li>
                <li>• Tuviste a tus hijos hace años pero nunca te recuperaste del todo</li>
                <li>• Quieres ejercicios seguros adaptados a tu cuerpo de madre</li>
                <li>• Buscas rutinas cortas que puedas hacer desde casa</li>
                <li>• Necesitas una guía clara, paso a paso</li>
              </ul>
            </div>
            <div style={{ background: 'rgba(232,226,220,0.3)', borderRadius: 2, padding: '1.5rem' }}>
              <h4 style={{ fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                <X size={18} style={{ color: 'rgba(26,26,26,0.4)' }} /> Este programa NO es para ti si…
              </h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.4rem', fontSize: '0.875rem', color: 'rgba(26,26,26,0.6)' }}>
                <li>• Buscas entrenamientos de alta intensidad</li>
                <li>• No estás dispuesta a dedicar 15-30 min algunos días</li>
                <li>• Prefieres ir a un gimnasio presencial</li>
                <li>• Tu médico te ha recomendado no hacer ejercicio todavía</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── PRICING / BUY ── */}
      <section id="comprar" className="section" style={{ background: 'var(--beige)' }}>
        <div className="container-narrow">
          <div className="text-center" style={{ marginBottom: '2rem' }}>
            <div className="t-label text-coral mb-2" style={{ color: 'var(--coral)', marginBottom: '0.5rem' }}>Todo lo que incluye</div>
            <h2 className="t-serif" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.25rem)' }}>Programa "Recupera tu cuerpo desde cero"</h2>
          </div>
          <div className="card" style={{ padding: '2.5rem' }}>
            <ul className="check-list" style={{ marginBottom: '2rem' }}>
              {[
                '4 semanas de programa con videos nuevos cada semana',
                'Rutinas cortas y sencillas para hacer desde casa',
                'Ejercicios de tonificación del abdomen',
                'Ejercicios de suelo pélvico',
                'Ejercicios para todo el cuerpo adaptados a madres',
                'Videos on-demand: accede cuando quieras',
                'Explicaciones claras y guiadas paso a paso',
                'BONUS: Recupera tu abdomen en tu día a día',
                'Acceso de por vida al contenido'
              ].map((t,i)=>(
                <li key={i} style={{ fontSize: '1rem', paddingBottom: '0.25rem' }}><Check size={18} />{t}</li>
              ))}
            </ul>
            <div className="text-center" style={{ borderTop: '1px solid var(--pearl)', paddingTop: '2rem' }}>
              <div style={{ marginBottom: '1.5rem' }}>
                <span style={{ fontSize: '1.1rem', color: 'rgba(26,26,26,0.4)', textDecoration: 'line-through' }}>97€</span>
                <div style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(3rem, 8vw, 4rem)', color: 'var(--coral)', fontWeight: 600, lineHeight: 1, marginTop: '0.25rem' }}>57€</div>
                <p className="text-sm text-muted mt-1">Pago único · Acceso de por vida</p>
              </div>
              <button className="btn-coral" style={{ fontSize: '1.1rem', padding: '1.25rem 3rem' }} onClick={goConfirm}>
                Comprar programa por 57€
              </button>
              <p className="text-sm text-muted mt-2" style={{ marginTop: '1rem' }}>Más de 3.000 mamás ya se han recuperado con este programa</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <div className="cta-band">
        <div className="container-narrow">
          <h2>¿Lista para empezar?</h2>
          <p>En 4 semanas empezarás a notar los primeros resultados. ¿Te animas?</p>
          <div style={{ fontFamily: 'var(--sans)', fontWeight: 700, fontSize: '2.5rem', color: 'white', marginBottom: '1.5rem' }}>57€</div>
          <button className="btn-white" onClick={goConfirm}>Sí, quiero empezar ahora</button>
        </div>
      </div>
    </div>
  );
}
