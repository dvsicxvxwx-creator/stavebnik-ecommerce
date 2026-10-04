import './globals.css';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { products } from '@/lib/sample-products';
import Link from 'next/link';

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  const product = products.find((item) => item.slug === params.slug);

  if (!product) {
    return (
      <>
        <Header />
        <main className="page-shell container section">
          <div className="not-found-box">
            <h2>Produkt nebyl nalezen</h2>
            <Link href="/products" className="btn btn-primary">Zpět do katalogu</Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main className="page-shell container section">
        <div className="product-detail">
          <div className="product-detail-visual">{product.icon}</div>
          <div className="product-detail-info">
            <span className="tag">{product.category}</span>
            <h1>{product.name}</h1>
            <p>{product.description}</p>
            <div className="price-row">
              <div>
                <strong>{product.price.toLocaleString('cs-CZ')} Kč</strong>
                <small>{product.unit}</small>
              </div>
              <span className="stock">{product.stock > 0 ? 'Skladem' : 'Nedostupné'}</span>
            </div>
            <div className="detail-actions">
              <button className="btn btn-primary" type="button">Přidat do košíku</button>
              <Link href="/products" className="btn btn-secondary">Zpět</Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
