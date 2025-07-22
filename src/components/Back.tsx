import React from 'react'
import { useRouter } from 'next/navigation';
import { MoveLeft } from 'lucide-react';
export default function Back() {
    const router = useRouter();
  return (
    <button
    onClick={() => router.back()}
    className="flex border p-2 rounded-lg gap-2 mb-4 "
  >
    <MoveLeft />
    <p>Retour à la liste</p>
  </button>
  )
}
