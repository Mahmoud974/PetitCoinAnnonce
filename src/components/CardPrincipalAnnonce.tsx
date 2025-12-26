import React from 'react'
import Image from 'next/image'
import { MapPin, Clock, HeartIcon,  CircleX } from 'lucide-react';
import Link from 'next/link';

export default function CardPrincipalAnnonce() {
  return (
    <div className="group max-w-xs  rounded-2xl border-none text-black shadow-xl  hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-gray-200">
     
      <div className="relative overflow-hidden">
        <Image
          src="/1.jpg"
          alt="Pièce seat ibiza"
          width={400}
          height={300}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
       
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
 
         <div className="absolute top-3 right-3 flex space-x-2">
           <button className="p-2 flex items-center bg-red-500  hover:bg-white rounded-full shadow-md transition-all duration-200 hover:scale-110">
           <CircleX  className="w-5 h-5  hover:text-red-500 transition-colors duration-200" onClick={()=> confirm(`Voulez-vous supprimer l'annonces`)}/>
           
           </button>
        
         </div>
      </div>

     
      <div className="p-4 space-y-3">
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-green-400 to-green-600 w-8 h-8 rounded-full flex items-center justify-center   font-bold text-sm shadow-md">
              D
            </div>
            <div>
              <p className="font-semibold  text-sm">Baba62</p>
              <div className="flex items-center text-xs ">
                <MapPin className="w-3 h-3 mr-1" />
                <span>Paris, France</span>
              </div>
            </div>
          </div>
          <div className="text-right">
            <p className="text-3xl font-bold text-red-600">10€</p>
             
          </div>
        </div>

        
        <div>
          <h3 className="font-bold text-lg  group-hover:text-red-600 transition-colors duration-200">
            Pièce seat ibiza
          </h3>
        <Link href="/lists/immobilier">
        <p className="text-sm  mt-1 hover:text-red-600">
            Immobilier
          </p>
        </Link>
        </div>

        
        <div className="flex items-center justify-between pt-2 border-t border-gray-100">
          <div className="flex items-center  space-x-4">
            <div className="flex items-center text-xs ">
              <Clock className="w-3 h-3 mr-1 " />
              <span>Publier il y a 2h</span>
            </div>
             
            <div className="flex items-center text-xs ">
              <HeartIcon className="w-3 h-3 mr-1" />
              <span className=''>14 {`j'aimes`}</span>
            </div>
          </div>
        
        </div>

        
        <div className="flex space-x-2 pt-2">
          <button className="flex-1 bg-orange-600 hover:bg-red-700  py-2 px-4 rounded-lg font-semibold transition-colors duration-200 text-sm">
           Modifier
          </button>
         
        </div>
      </div>
   
    </div>
  )
}
