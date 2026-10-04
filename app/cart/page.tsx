'use client';

import { useEffect, useState } from 'react';
import Header from '@/components/header';
import Footer from '@/components/footer';
import Link from 'next/link';

export default function CartPage() {
  const [items, setItems] = useState<any[]>([]);

  useEffect(() => {
    const raw = localStorage.getItem('stavebnik-cart');
    setItems(raw ? JSON.parse(raw) : []);
  }, []);

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <>
      <Header />
      <main className="page-shell container section">
        <div className="section-head left">
          <span className="eyebrow">Košík</span>
          <h2>Vaše objednávka</h2>
        </div>

        {items.length === 0 ? (
          <div className="not-found-box">
            <h3>Košík je prázdný</h3>
            <Link href="/products" className="btn btn-primary">Nakoupit</Link>
          </div>
        ) : (
          <div className="cart-layout">
            <div className="cart-items">
              {items.map((item) => (
                <div key={item.slug} className="cart-item">
                  <div className="cart-item-visual">{item.icon}</div>
                  <div className="cart-item-copy">
                    <strong>{item.name}</strong>
                    <small>{item.unit}</small>
                  </div>
                  <div className="cart-item-qty">{item.quantity} ks</div>
                  <div className="cart-item-price">{(item.price * item.quantity).toLocaleString('cs-CZ')} Kč</div>
                </div>
              ))}
            </div>

            <aside className="summary-box">
              <h3>Souhrn</h3>
              <div className="summary-row">
                <span>Celkem</span>
                <strong>{total.toLocaleString('cs-CZ')} Kč</strong>
              </div>
              <Link href="/checkout" className="btn btn-primary full-width">Přejít k objednávce</Link>
            </aside>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}
