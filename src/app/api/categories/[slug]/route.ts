import { NextResponse } from 'next/server';

export function GET(
  _req: Request,
  { params }: { params: { slug: string } }
) {
  const { slug } = params;       
  return NextResponse.json({  category: `User ${slug}` });
}
