'use client';

import { useEffect, useState } from 'react';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { products } from '@/lib/sample-products';

export default function AdminPage() {
  const [items, setItems] = useState(products);
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('zdivo');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newProduct = {
      id: Date.now().toString(),
      slug: name.toLowerCase().replace(/\s+/g, '-'),
      name,
      price: Number(price),
      category,
      description: 'Přidáno z admin panelu',
      unit: 'ks',
      icon: '🧱',
      featured: true,
      stock: 42,
      rating: 4.8,
    };

    setItems((prev) => [newProduct, ...prev]);
    setName('');
    setPrice('');
  };

  return (
    <>
      <Header />
      <main className="page-shell container section">
        <div className="section-head left">
          <span className="eyebrow">Admin</span>
          <h2>Správa katalogu</h2>
        </div>

        <div className="admin-grid">
          <form className="admin-form" onSubmit={handleSubmit}>
            <label>
              Název produktu
              <input value={name} onChange={(e) => setName(e.target.value)} required />
            </label>
            <label>
              Cena
              <input value={price} type="number" onChange={(e) => setPrice(e.target.value)} required />
            </label>
            <label>
              Kategorie
              <select value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value="zdivo">Zdivo</option>
                <option value="izolace">Izolace</option>
                <option value="nářadí">Nářadí</option>
                <option value="barvy">Barvy</option>
              </select>
            </label>
            <button className="btn btn-primary" type="submit">Přidat produkt</button>
          </form>

          <div className="admin-list">
            {items.slice(0, 6).map((item) => (
              <div key={item.id} className="admin-item">
                <div className="admin-icon">{item.icon}</div>
                <div>
                  <strong>{item.name}</strong>
                  <small>{item.category}</small>
                </div>
                <span>{item.price.toLocaleString('cs-CZ')} Kč</span>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
