'use client';

import Link from 'next/link';
import { Product } from '@/lib/sample-products';

export default function ProductCard({ product }: { product: Product }) {
  function addToCart() {
    const raw = localStorage.getItem('stavebnik-cart');
    const cart = raw ? JSON.parse(raw) : [];
    const found = cart.find((item: any) => item.slug === product.slug);

    if (found) {
      found.quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem('stavebnik-cart', JSON.stringify(cart));
    window.dispatchEvent(new Event('stavebnik-cart-updated'));
  }

  return (
    <article className="product-card">
      <div className="product-visual">
        <div className="product-art">{product.icon}</div>
      </div>
      <div className="product-content">
        <span className="tag">{product.category}</span>
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <div className="product-footer">
          <div>
            <strong>{product.price.toLocaleString('cs-CZ')} Kč</strong>
            <small>{product.unit}</small>
          </div>
          <div className="product-actions">
            <Link href={`/products/${product.slug}`} className="btn btn-secondary btn-small">Detail</Link>
            <button type="button" className="btn btn-primary btn-small" onClick={addToCart}>Do košíku</button>
          </div>
        </div>
      </div>
    </article>
  );
}
