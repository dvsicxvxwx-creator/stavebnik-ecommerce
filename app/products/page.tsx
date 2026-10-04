import './globals.css';
import Header from '@/components/header';
import Footer from '@/components/footer';
import ProductGrid from '@/components/product-grid';
import { products } from '@/lib/sample-products';

export default function ProductsPage() {
  return (
    <>
      <Header />
      <main className="page-shell">
        <section className="section container">
          <div className="section-head left">
            <span className="eyebrow">Katalog</span>
            <h2>Všechny produkty</h2>
            <p>Vyberte vhodnou kategorii a porovnejte nabídky i ceny z několika dodavatelů.</p>
          </div>
          <ProductGrid products={products} />
        </section>
      </main>
      <Footer />
    </>
  );
}
