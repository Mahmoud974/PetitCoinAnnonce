import Image from "next/image";

export default function ImgProfil() {
  return (
    <div className="max-w-sm">
      {/* Conteneur sticky qui restera en haut */}
      <div className="sticky top-4 bg-[#131416] text-white rounded-xl p-4 shadow-lg">
        <div className="relative">
          <Image
            src="/kellian.jpg"
            alt="Kellian"
            width={350}
            height={250}
            className="rounded-lg"
          />
          <div className="absolute top-1  right-2 bg-red-700 shadow-lg text-white  px-3 py-1  ">
            <p className="text-3xl">5000 €</p>
            <small>2400 000KMF</small>
          </div>
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
    </div>
  );
}
