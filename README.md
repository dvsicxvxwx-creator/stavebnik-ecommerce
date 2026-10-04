export type Product = {
  id: string;
  slug: string;
  name: string;
  category: string;
  price: number;
  unit: string;
  icon: string;
  description: string;
  featured: boolean;
  stock: number;
  rating: number;
};

export const products: Product[] = [
  {
    id: '1',
    slug: 'porotherm-30-profi',
    name: 'Porotherm 30 Profi',
    category: 'zdivo',
    price: 38.9,
    unit: 'ks',
    icon: '🧱',
    description: 'Zdící cihla pro vnější i vnitřní zdivo.',
    featured: true,
    stock: 120,
    rating: 4.9,
  },
  {
    id: '2',
    slug: 'cement-cem-i-42-5r',
    name: 'Cement CEM I 42,5R',
    category: 'zdivo',
    price: 145,
    unit: '25 kg',
    icon: '🪨',
    description: 'Vysoce kvalitní cement pro betony a malty.',
    featured: true,
    stock: 90,
    rating: 4.8,
  },
  {
    id: '3',
    slug: 'eps-100-fasada',
    name: 'EPS 100 Fasáda',
    category: 'izolace',
    price: 120,
    unit: 'm²',
    icon: '🟦',
    description: 'Izolace pro fasády a teplé stěny.',
    featured: true,
    stock: 130,
    rating: 4.7,
  },
  {
    id: '4',
    slug: 'makita-hp1631',
    name: 'Makita HP1631',
    category: 'nářadí',
    price: 2890,
    unit: 'ks',
    icon: '🔧',
    description: 'Příklepová vrtačka pro náročné zakázky.',
    featured: true,
    stock: 25,
    rating: 4.9,
  },
  {
    id: '5',
    slug: 'primalex-plus',
    name: 'Primalex Plus',
    category: 'barvy',
    price: 385,
    unit: '4 kg',
    icon: '🎨',
    description: 'Profesionální barva pro vnitřní i vnější povrchy.',
    featured: true,
    stock: 80,
    rating: 4.7,
  },
  {
    id: '6',
    slug: 'mineralni-vlna-100',
    name: 'Minerální vlna 100',
    category: 'izolace',
    price: 98,
    unit: 'm²',
    icon: '🏠',
    description: 'Tepelně izolační vlna pro střechy a stěny.',
    featured: false,
    stock: 55,
    rating: 4.6,
  },
  {
    id: '7',
    slug: 'wera-sada-nastroju',
    name: 'Wera sada nástrojů',
    category: 'nářadí',
    price: 1290,
    unit: 'sada',
    icon: '🛠️',
    description: 'Profesionální sada nástrojů pro řemeslníka.',
    featured: false,
    stock: 18,
    rating: 4.8,
  },
  {
    id: '8',
    slug: 'fasadni-barva-15l',
    name: 'Fasádní barva 15L',
    category: 'barvy',
    price: 1350,
    unit: '15 l',
    icon: '🖌️',
    description: 'Barva s vysokou odolností proti povětrnostním vlivům.',
    featured: false,
    stock: 40,
    rating: 4.6,
  },
];
