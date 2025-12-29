"use client"
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <main className="max-h-screen bg-neutral-950">
     

      {/* SECTION BEIGE */}
      <section className="bg-red-600 ">
        <div className="mx-auto max-w-5xl px-6 py-14 lg:px-8 lg:py-16">
        <h2 className="text-center text-white text-3xl font-extrabold tracking-tight sm:text-4xl">
  Votre prochaine bonne affaire commence ici
</h2>

<p className="mx-auto mt-5 max-w-3xl text-center text-base leading-relaxed text-white sm:text-lg">
  Publiez, recherchez et échangez en toute simplicité depuis votre téléphone.
  Une application pensée pour aller droit au but, où que vous soyez.
</p>


          {/* Divider */}
          <div className="mx-auto mt-10 h-px w-56 bg-neutral-900/25" />

          <p className="mt-10 text-center text-lg text-white font-medium ">
            Pour télécharger l’appli, scannez{" "}
            <span className="font-extrabold">ce QR Code</span> avec votre téléphone :
          </p>

          {/* QR area */}
          <div className="mt-8 flex justify-center">
            <div className="  bg-white p-4 shadow-sm ring-1 ring-black/10">
             
              <Image
                src="https://api.qrserver.com/v1/create-qr-code/?size=240x240&data=https%3A%2F%2Fexample.com"
                alt="QR Code"
                width={240}
                height={240}
                className="h-[220px] w-[220px] sm:h-[240px] sm:w-[240px]"
              />
            </div>
          </div>

          {/* Optional: store badges again */}
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Link
              href="#"
              className="inline-flex items-center justify-center  border border-black/15 bg-white/60 px-5 py-3 text-sm font-semibold  hover:bg-white transition"
            >
              App Store
            </Link>
            <Link
              href="#"
              className="inline-flex items-center justify-center  border border-black/15 bg-white/60 px-5 py-3 text-sm font-semibold  hover:bg-white transition"
            >
              Google Play
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}