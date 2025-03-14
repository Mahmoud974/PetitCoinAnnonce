import Image from "next/image";

export default function AppPromo() {
  return (
    <div className="bg-red-600 mb-12 text-white p-6 rounded-lg flex items-center justify-between  mx-auto shadow-lg">
      <div>
        <h2 className="text-2xl font-bold">Plus simple avec l’application</h2>
        <p className="mt-2">
          Effectuez, modifiez ou annulez vos réservations partout, en toute
          simplicité.
        </p>
        <div className="flex gap-4 mt-4">
          <Image
            src="/googleplay.png"
            alt="Soline"
            width={200}
            height={200}
            className=""
          />
          <Image
            src="/apple.png"
            alt="Soline"
            width={200}
            height={200}
            className=""
          />
        </div>
      </div>
      <div className="bg-white p-4 rounded-lg shadow-md">
        <Image src="/logo.png" width={60} height={60} alt="Yoojo Logo" />
      </div>
    </div>
  );
}
