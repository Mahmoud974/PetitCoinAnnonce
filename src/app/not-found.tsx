import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-red-600 px-5 text-center">
     
     <h1 className="mb-6 text-[120px] font-extrabold leading-none tracking-tight text-white sm:text-[180px] md:text-[220px] lg:text-[260px]">
  404
</h1>   
      <p className="mb-2 text-xl font-semibold text-white sm:text-2xl">
        Oops, cette page est introuvable !
      </p>

      
      <p className="mb-8 max-w-md text-sm text-white/80 sm:text-base">
        Le lien est peut-être incorrect ou la page a été supprimée.
      </p>

   
      <Link
        href="/"
        className="  bg-white px-6 py-3 text-sm font-extrabold text-red-600 shadow-lg transition hover:bg-white/90 active:scale-[0.97]"
      >
        RETOUR À L’ACCUEIL
      </Link>
    </main>
  );
}
