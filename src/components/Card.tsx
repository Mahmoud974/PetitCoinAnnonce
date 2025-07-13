import React from 'react'
import Image from 'next/image'
import {   MapPin, Clock, Eye, HeartIcon, Trash2, SquarePen } from 'lucide-react'

export default function Card() {
  return (
    <div className="group max-w-xs rounded-2xl border-none text-white shadow-xl  hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-gray-200">
    
      <div className="relative overflow-hidden">
        <Image
          src="/1.jpg"
          alt="Pièce seat ibiza"
          width={400}
          height={300}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
       
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
 
         <div className="absolute top-3 left-3 flex space-x-2">
           <button className="p-2 bg-red-500 hover:bg-white rounded-full shadow-md transition-all duration-200 hover:scale-110">
             <Trash2 className="w-5 h-5 text-white hover:text-red-500 transition-colors duration-200" />
           </button>
           <button className="p-2 bg-orange-500 hover:bg-white rounded-full shadow-md transition-all duration-200 hover:scale-110">
             <SquarePen className="w-5 h-5 text-white hover:text-red-500 transition-colors duration-200" />
           </button>
         </div>
      </div>

      {/* Content */}
      <div className="p-4 space-y-3">
        {/* User info */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-green-400 to-green-600 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-md">
              D
            </div>
            <div>
              <p className="font-semibold text-white text-sm">Baba62</p>
              <div className="flex items-center text-xs text-white">
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
          <h3 className="font-bold text-lg text-white group-hover:text-red-600 transition-colors duration-200">
            Pièce seat ibiza
          </h3>
          <p className="text-sm text-white  mt-1">
            Pièce d&apos;origine en excellent état...
          </p>
        </div>

        
        <div className="flex items-center justify-between pt-2 border-t border-gray-100">
          <div className="flex items-center space-x-4">
            <div className="flex items-center text-xs text-white">
              <Clock className="w-3 h-3 mr-1 text-white" />
              <span>Publier il y a 2h</span>
            </div>
            <div className="flex items-center text-xs text-white">
              <Eye className="w-3 h-3 mr-1" />
              <span className='text-white'>24 vues</span>
            </div>
            <div className="flex items-center text-xs text-white">
              <HeartIcon className="w-3 h-3 mr-1" />
              <span className='text-white'>14 {`j'aimes`}</span>
            </div>
          </div>
        
        </div>

        
        <div className="flex space-x-2 pt-2">
          <button className="flex-1 bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-lg font-semibold transition-colors duration-200 text-sm">
            Mettre en pause
          </button>
         
        </div>
      </div>
    </div>
  )
}
