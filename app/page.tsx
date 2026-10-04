import './globals.css';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { products } from '@/lib/sample-products';
import ProductGrid from '@/components/product-grid';

export default function HomePage() {
  const featured = products.filter((product) => product.featured);

  return (
    <>
      <Header />
      <main>
        <section className="hero">
          <div className="container hero-grid">
            <div className="hero-copy">
              <span className="eyebrow">Premium stavebniny</span>
              <h1>Nakupuj stavebniny inteligentně.</h1>
              <p>
                Porovnávejte ceny, sledujte zlevnění, kalkulujte materiál a vytvořte objednávku
                v několika kliknutích.
              </p>
              <div className="hero-actions">
                <a href="#products" className="btn btn-primary">Nakoupit</a>
                <a href="/products" className="btn btn-secondary">Katalog</a>
              </div>
              <div className="metrics">
                <div>
                  <strong>2.8k+</strong>
                  <span>produktů</span>
                </div>
                <div>
                  <strong>30%</strong>
                  <span>průměrná úspora</span>
                </div>
                <div>
                  <strong>24/7</strong>
                  <span>online sledování</span>
                </div>
              </div>
            </div>

            <div className="hero-panel">
              <div className="panel-card">
                <span className="live-pill">Live nabídky</span>
                <div className="mini-product">
                  <div className="mini-icon">🧱</div>
                  <div>
                    <strong>Porotherm 30 Profi</strong>
                    <small>Zdící cihla · 30 ks</small>
                  </div>
                  <div className="mini-price">
                    <b>38,90 Kč</b>
                    <span>/- ks</span>
                  </div>
                </div>
                <div className="mini-product">
                  <div className="mini-icon">🪨</div>
                  <div>
                    <strong>Cement 42,5R</strong>
                    <small>25 kg pytel</small>
                  </div>
                  <div className="mini-price">
                    <b>145 Kč</b>
                    <span>/ pytel</span>
                  </div>
                </div>
                <div className="mini-product">
                  <div className="mini-icon">🔧</div>
                  <div>
                    <strong>Makita HP1631</strong>
                    <small>Příklepová vrtačka</small>
                  </div>
                  <div className="mini-price">
                    <b>2 890 Kč</b>
                    <span>−18%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="brands-strip">
          <div className="container brands">
            <span>Hornbach</span>
            <span>OBI</span>
            <span>Bauhaus</span>
            <span>DEK</span>
            <span>ProDoma</span>
            <span>Stavmat</span>
          </div>
        </section>

        <section className="section" id="products">
          <div className="container">
            <div className="section-head">
              <span className="eyebrow">Top produkty</span>
              <h2>Nejprodávanější výrobky</h2>
            </div>
            <ProductGrid products={featured} />
          </div>
        </section>

        <section className="section alt-section">
          <div className="container">
            <div className="section-head">
              <span className="eyebrow">Výhody</span>
              <h2>Proč nakupovat u nás</h2>
            </div>
            <div className="feature-grid">
              <article className="feature-card">
                <div className="feature-icon">📐</div>
                <h3>Kalkulačka projektu</h3>
                <p>Vypočítejte množství jednotlivých materiálů pro zeď, střechu, podlahu nebo bazén.</p>
              </article>
              <article className="feature-card">
                <div className="feature-icon">📊</div>
                <h3>Porovnání cen</h3>
                <p>Všechny nabídky na jednom místě a v reálném čase.</p>
              </article>
              <article className="feature-card">
                <div className="feature-icon">🚚</div>
                <h3>Rychlá expedice</h3>
                <p>Expedujeme materiály a nářadí do celého Česka v krátké lhůtě.</p>
              </article>
              <article className="feature-card">
                <div className="feature-icon">🧾</div>
                <h3>B2B objednávky</h3>
                <p>Fakturace, obj. XML a velkoobchodní slevy pro firmy a řemeslníky.</p>
              </article>
              <article className="feature-card">
                <div className="feature-icon">🤖</div>
                <h3>AI doporučení</h3>
                <p>Navrhneme levnější ekvivalent nebo nejvýhodnější nákupní variantu.</p>
              </article>
              <article className="feature-card">
                <div className="feature-icon">🔔</div>
                <h3>Notifikace</h3>
                <p>Upozorníme vás hned po poklesu ceny, pokud budete sledovat produkt.</p>
              </article>
            </div>
          </div>
        </section>
      </div>
    </main>
    <Footer />
    </>
  );
}
