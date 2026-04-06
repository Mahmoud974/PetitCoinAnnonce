import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const annonces = await prisma.annonce.findMany({
      include: {
        utilisateur: true,  
      },
      orderBy: {
        dateCreation: 'asc'
      }
    })
    
    return NextResponse.json(annonces)
  } catch (error) {
    console.error('Erreur lors de la récupération des annonces:', error)
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 })
  }
}