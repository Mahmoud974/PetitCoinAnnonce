'use client';

import Image from 'next/image';
import { Heart,  ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

interface Post {
  id: number; title: string; price: number; category: string;
  images: string[]; likes: number; description: string;
  date: string | Date; createdAt: string;
}

export default function CardModern({ posts }: { posts: Post }) {
  const { id, title, price, category } = posts;

  return (
 
    <div className="group relative w-full max-w-[320px] h-[420px] overflow-hidden rounded-[1rem] bg-[#1a2c23] shadow-2xl">
      <Link href={`/item/${id}/${category}`} className="block h-full w-full">
        
        {/* Image de fond */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/2.jpg"
            alt={title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
            priority
          />
        
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d1a14] via-[#0d1a14]/40 to-transparent" />
        </div>

        
        <button 
          onClick={(e) => e.preventDefault()}
          className="absolute top-4 right-4 z-20 p-3 backdrop-blur-md bg-white/10 rounded-full border border-white/10 hover:bg-[#D4E84A] transition-all group/heart"
        >
          <Heart className="w-5 h-5 text-white group-hover/heart:text-[#0d1a14] transition-colors" />
        </button>

      
        <div className="absolute top-4 left-4 z-20">
          <span className="px-3 py-1 bg-[#D4E84A] text-[#0d1a14] text-[10px] font-bold rounded-lg uppercase tracking-tighter">
            {category || "Premium"}
          </span>
        </div>

        {/* Contenu en bas */}
        <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
          <div className="flex justify-between items-end">
            <div className="space-y-1 flex-1">
             
              
              {/* Titre */}
              <h3 className="text-white font-semibold text-lg leading-tight line-clamp-2 pr-4">
                {title}
              </h3>
              
              
         
              <div className="flex items-center gap-2 pt-1">
                <span className="text-2xl font-black text-[#D4E84A]">
                  {price.toLocaleString()}€
                </span>
                
              </div>
              <small className='text-white/50 text-xs'>Claveyson 26240  • 18/03/2026</small>
            </div>

         
            <div className="mb-1 p-3 bg-[#D4E84A] rounded-xl shadow-[0_0_15px_rgba(217,249,157,0.3)] group-hover:scale-110 transition-transform duration-300">
              <ArrowUpRight className="w-5 h-5 text-[#0d1a14]" />
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}