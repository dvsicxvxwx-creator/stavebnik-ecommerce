'use client';

import { FormEvent, useState } from 'react';
import Header from '@/components/header';
import Footer from '@/components/footer';
import Link from 'next/link';

export default function CheckoutPage() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);

    const form = new FormData(event.currentTarget);
    const payload = {
      name: form.get('name'),
      email: form.get('email'),
      phone: form.get('phone'),
      cart: JSON.parse(localStorage.getItem('stavebnik-cart') || '[]'),
    };

    const response = await fetch('/api/checkout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    const result = await response.json();
    setLoading(false);
    setMessage(result.message || 'Objednávka byla vytvořena.');

    if (response.ok) {
      localStorage.removeItem('stavebnik-cart');
      event.currentTarget.reset();
    }
  }

  return (
    <>
      <Header />
      <main className="page-shell container section">
        <div className="section-head left">
          <span className="eyebrow">Objednávka</span>
          <h2>Dokončit nákup</h2>
        </div>

        <div className="checkout-layout">
          <form className="checkout-form" onSubmit={handleSubmit}>
            <div className="field-grid">
              <label>
                Jméno a příjmení
                <input name="name" required />
              </label>
              <label>
                E-mail
                <input name="email" type="email" required />
              </label>
              <label>
                Telefon
                <input name="phone" required />
              </label>
              <label>
                Adresa
                <input name="address" required />
              </label>
            </div>

            <button className="btn btn-primary" disabled={loading} type="submit">
              {loading ? 'Odesílám...' : 'Závazně objednat'}
            </button>
            {message && <p className="success-message">{message}</p>}
          </form>

          <aside className="summary-box">
            <h3>Doprava a platba</h3>
            <div className="summary-row">
              <span>Doprava</span>
              <strong>ZDARMA</strong>
            </div>
            <div className="summary-row">
              <span>Platba</span>
              <strong>Online kartou</strong>
            </div>
            <Link href="/products" className="btn btn-secondary full-width">Pokračovat v nákupu</Link>
          </aside>
        </div>
      </main>
      <Footer />
    </>
  );
}
