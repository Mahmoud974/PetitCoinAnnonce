import Image from "next/image";

export default function ImgProfil() {
  return (
    <div className="max-w-sm bg-[#131416] max-h-max   text-white rounded-xl p-4 shadow-lg">
      {/* Conteneur de l'image avec position sticky */}
      <div className=" sticky top-0 z-10">
        <Image
          src="/kellian.jpg"
          alt="Kellian"
          width={350}
          height={250}
          className="rounded-lg"
        />
        <span className="absolute top-3 right-3 bg-red-700 shadow-lg text-white text-sm px-3 py-1 rounded-full">
          5000 €
        </span>
      </div>
      <div className="mt-4">
        <h2 className="text-xl font-bold">Kellian</h2>
        <p className="text-gray-400">Déménageur</p>
      </div>
      <div className="flex items-center justify-between bg-gray-800 p-3 mt-4 rounded-lg">
        <div className="text-center">
          <p className="text-white text-lg font-semibold">231</p>
          <p className="text-gray-400 text-sm">Évaluations</p>
        </div>
        <div className="text-center">
          <p className="text-white text-lg font-semibold">5,0 ★</p>
          <p className="text-gray-400 text-sm">Note sur 5</p>
        </div>
        <div className="text-center">
          <p className="text-white text-lg font-semibold">4</p>
          <p className="text-gray-400 text-sm">ans chez Yoojo</p>
        </div>
      </div>
      <button className="mt-4 w-full bg-red-700 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition">
        Prendre contact
      </button>
    </div>
  );
}
