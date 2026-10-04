'use client';

import ProductCard from '@/components/product-card';
import { Product } from '@/lib/sample-products';

export default function ProductGrid({ products }: { products: Product[] }) {
  return (
    <div className="product-grid">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
