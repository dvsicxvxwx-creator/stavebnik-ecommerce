import { NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', {
  apiVersion: '2024-06-20',
});

export async function POST(req: Request) {
  try {
    const body = await req.json();

    if (!body?.cart || !Array.isArray(body.cart)) {
      return NextResponse.json({ message: 'Chyba v košíku.' }, { status: 400 });
    }

    const total = body.cart.reduce((sum: number, item: any) => sum + Number(item.price) * Number(item.quantity), 0);

    if (!process.env.STRIPE_SECRET_KEY) {
      return NextResponse.json({
        message: 'Objednávka byla úspěšně zaznamenána v demo režimu.',
        orderId: `demo-${Date.now()}`,
        total,
        status: 'demo',
      });
    }

    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      line_items: body.cart.map((item: any) => ({
        price_data: {
          currency: 'czk',
          product_data: { name: item.name },
          unit_amount: Math.round(Number(item.price) * 100),
        },
        quantity: Number(item.quantity),
      })),
      success_url: `${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}/checkout?success=1`,
      cancel_url: `${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}/cart?cancel=1`,
      metadata: {
        customer: body.email || 'guest',
      },
    });

    return NextResponse.json({ sessionUrl: session.url, orderId: session.id, total, status: 'stripe' });
  } catch (error) {
    return NextResponse.json({ message: 'Chyba při zpracování platby.', error }, { status: 500 });
  }
}
