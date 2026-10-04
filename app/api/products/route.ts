import { products } from '@/lib/sample-products';

export async function GET() {
  return Response.json({ products });
}
