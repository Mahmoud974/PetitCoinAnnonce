import Link from "next/link";

export default function NotFound() {
  return (
    <main
      className="relative flex min-h-screen flex-col items-center justify-center bg-[#1b3226] px-5 text-center overflow-hidden"
      style={{ fontFamily: "'Syne', sans-serif" }}
    >
      {/* Cercles décoratifs arrière-plan */}
      <div className="absolute top-[-120px] right-[-120px] w-[500px] h-[500px] rounded-full border border-white/5 pointer-events-none" />
      <div className="absolute bottom-[-160px] left-[-80px] w-[600px] h-[600px] rounded-full border border-white/5 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-white/[0.03] pointer-events-none" />

      {/* 404 massif */}
      <h1
        className="relative font-extrabold leading-none tracking-tighter select-none"
        style={{
          fontSize: "clamp(140px, 30vw, 340px)",
          color: "transparent",
          WebkitTextStroke: "2px rgba(212, 232, 74, 0.15)",
        }}
      >
        404
        {/* Chiffre jaune décalé pour effet de profondeur */}
        <span
          className="absolute inset-0 flex items-center justify-center text-[#D4E84A]"
          style={{
            fontSize: "clamp(140px, 30vw, 340px)",
            WebkitTextStroke: "0px",
            opacity: 0.08,
            transform: "translate(6px, 6px)",
          }}
          aria-hidden
        >
          404
        </span>
      </h1>

      {/* Badge */}
      <div className="mb-6 -mt-8 inline-flex items-center gap-2 bg-[#D4E84A]/10 border border-[#D4E84A]/20 rounded-full px-5 py-2">
        <span className="w-2 h-2 rounded-full bg-[#D4E84A] animate-pulse" />
        <span className="text-[#D4E84A] text-xs font-bold tracking-[0.25em] uppercase">
          Page introuvable
        </span>
      </div>

      {/* Texte */}
      <p className="mb-3 text-2xl md:text-3xl font-bold text-white leading-snug">
        Oops, vous vous êtes{" "}
        <span className="italic font-light text-[#D4E84A]">perdu en chemin.</span>
      </p>

      <p className="mb-10 max-w-sm text-sm text-white/50 leading-relaxed">
        Le lien est peut-être incorrect ou la page a été supprimée. Retournez sur l'île.
      </p>

      {/* CTA */}
      <Link
        href="/"
        className="group inline-flex items-center gap-3 bg-[#D4E84A] px-8 py-4 text-sm font-extrabold text-[#1b3226] rounded-full transition hover:bg-[#D4E84A]/90 active:scale-[0.97] uppercase tracking-widest"
      >
        Retour à l'accueil
        <span className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-0.5">
          ↗
        </span>
      </Link>

      {/* Vague décorative en bas */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] opacity-10">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-[60px]">
          <path d="M0,0 C300,120 900,120 1200,0 L1200,120 L0,120 Z" fill="#D4E84A" />
        </svg>
      </div>
    </main>
  );
}