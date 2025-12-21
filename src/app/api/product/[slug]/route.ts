import { prisma } from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

interface RouteContext {
  params: {
    slug: string;
  };
}

//http://localhost:3000/api/product/ok
export async function GET(request: NextRequest, { params }: RouteContext) {
    try{
        const { slug } = params;
        const searchParams = request.nextUrl.searchParams;
        const query = searchParams.get('query');
        
        const category = await prisma.articles.findMany();
        
       
        const filterCategory = query 
            ? category.filter(item => query === item.category)
            : category.filter(item => slug === item.category);
        
       
        const transformedData = filterCategory.map(item => ({
            ...item,
            date: item.createdAt instanceof Date ? item.createdAt.toISOString() : item.createdAt, 
            createdAt: item.createdAt instanceof Date ? item.createdAt.toISOString() : String(item.createdAt),  
            informations: item.informations || {
                version: '',
                annee: '',
                kilometrage: '',
                energie: '',
                couleur: '',
                transmission: '',
                portes: '',
                consommation: '',
                puissance: '',
                nombre_de_places: '',
            },
        }));
        
        console.log(transformedData);
        
        return NextResponse.json(transformedData);
    } catch(err) {
        console.log(err);
        return NextResponse.json(
            { error: 'Erreur lors de la récupération des données' },
            { status: 500 }
        );
    }
}
