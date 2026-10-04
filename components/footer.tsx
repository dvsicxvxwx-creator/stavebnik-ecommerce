'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Header() {
  const [count, setCount] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const raw = localStorage.getItem('stavebnik-cart');
    const cart = raw ? JSON.parse(raw) : [];
    setCount(cart.reduce((sum: number, item: any) => sum + Number(item.quantity), 0));
  }, []);

  return (
    <header className="header">
      <div className="container header-inner">
        <Link href="/" className="brand">
          <span className="brand-mark">🏗️</span>
          <span>
            Stavebník
            <small>Premium stavby</small>
          </span>
        </Link>

        <nav className={menuOpen ? 'nav open' : 'nav'}>
          <Link href="/">Domů</Link>
          <Link href="/products">Katalog</Link>
          <Link href="/cart">Košík</Link>
          <Link href="/checkout">Objednávka</Link>
          <Link href="/admin">Admin</Link>
        </nav>

        <div className="header-actions">
          <button className="icon-btn" type="button" aria-label="Vyhledání">🔍</button>
          <Link href="/cart" className="cart-pill" aria-label="Košík">
            🛒 <span>{count}</span>
          </Link>
          <button className="icon-btn mobile-menu" type="button" aria-label="Otevřít menu" onClick={() => setMenuOpen((open) => !open)}>
            ☰
          </button>
        </div>
      </div>
    </header>
  );
}
