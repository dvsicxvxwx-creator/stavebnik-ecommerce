export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <h4>Stavebník</h4>
          <p>Moderní nákupní platforma pro stavební materiály, nářadí a technická řešení.</p>
        </div>
        <div>
          <h4>Menu</h4>
          <ul>
            <li><a href="/">Domů</a></li>
            <li><a href="/products">Katalog</a></li>
            <li><a href="/cart">Košík</a></li>
          </ul>
        </div>
        <div>
          <h4>Podpora</h4>
          <ul>
            <li><a href="mailto:info@stavebnik.cz">info@stavebnik.cz</a></li>
            <li><a href="tel:+420123456789">+420 123 456 789</a></li>
          </ul>
        </div>
        <div>
          <h4>Kontakt</h4>
          <ul>
            <li>Praha, ČR</li>
            <li>Po–Ne 8:00–18:00</li>
          </ul>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© 2026 Stavebník.cz</span>
        <span>Vytvořeno pro moderní stavebnictví.</span>
      </div>
    </footer>
  );
}
