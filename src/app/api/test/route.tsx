 
import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function GET() {
    const category = await prisma.articles.findMany()
    const filterCategory = category.filter(item => "Cars" === item.category)
    console.log(filterCategory);
    
    
  return NextResponse.json(filterCategory);
}
