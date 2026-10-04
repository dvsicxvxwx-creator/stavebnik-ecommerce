import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const customer = {
      name: body.name,
      email: body.email,
      phone: body.phone,
      address: body.address,
    };

    const cart = Array.isArray(body.cart) ? body.cart : [];
    const total = cart.reduce((sum: number, item: any) => sum + Number(item.price) * Number(item.quantity), 0);

    return NextResponse.json({
      status: 'success',
      message: `Objednávka byla vytvořena pro ${customer.name}. Celková částka: ${total.toLocaleString('cs-CZ')} Kč.`,
      orderId: `ST-${Date.now()}`,
      total,
    });
  } catch (error) {
    return NextResponse.json({ message: 'Objednávka se nezdařila.', error }, { status: 500 });
  }
}
