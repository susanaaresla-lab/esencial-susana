export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-top">
          <div>
            <div style={{ fontFamily: 'var(--serif)', fontSize: '1.4rem', letterSpacing: '0.2em', color: 'var(--black)', lineHeight: 1 }}>ESENCIAL</div>
            <div style={{ fontFamily: 'var(--sans)', fontWeight: 600, fontSize: '0.6rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'rgba(26,26,26,0.6)', marginTop: 4 }}>Susana Ares</div>
          </div>
          <nav className="footer-links">
            <a href="#programa">Programa</a>
            <a href="#ejercicios">Ejercicios</a>
            <a href="#quien-soy">Quién soy</a>
            <a href="mailto:info@esencialsusanaares.com">Contacto</a>
          </nav>
        </div>
        <div className="footer-bottom">
          <p style={{ fontSize: '0.7rem', color: 'rgba(26,26,26,0.4)' }}>© 2024 ESENCIAL Susana Ares. Todos los derechos reservados.</p>
          <div className="footer-legal">
            <a href="#privacidad">Política de Privacidad</a>
            <a href="#terminos">Términos y Condiciones</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
