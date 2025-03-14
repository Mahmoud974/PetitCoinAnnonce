import Image from "next/image";
import { FaStar, FaClock, FaCommentDots, FaShieldAlt } from "react-icons/fa";

export default function ProfileCard() {
  return (
    <div className="h-auto p-6 text-white border rounded-2xl shadow-md space-y-4">
      <div className="flex items-center space-x-4">
        <Image
          src="/profile.jpg"
          alt="Soline"
          width={60}
          height={60}
          className="rounded-full border-2 border-gray-300"
        />
        <div>
          <h2 className="text-xl font-bold  ">Soline</h2>
          <p className="flex items-center text-sm ">
            <FaStar className="text-yellow-500 mr-1" /> 5 (3) • 4 annonces
          </p>
        </div>
      </div>
      <div className="text-sm   space-y-1">
        <p className="flex items-center">
          <FaClock className="mr-2 text-gray-500" /> Dernière activité il y a 1
          jour
        </p>
        <p className="flex items-center">
          <FaCommentDots className="mr-2 text-gray-500" /> Répond à 100 % des
          messages
        </p>
        <p className="flex items-center">
          <FaClock className="mr-2 text-gray-500" /> Répond en moyenne en 10
          minutes
        </p>
      </div>
      <div className="flex space-x-2">
        <button className="flex-1 px-4 py-2 text-white bg-orange-500 rounded-lg shadow hover:bg-orange-600 transition">
          Réserver
        </button>
        <button className="flex-1 px-4 py-2 text-white bg-blue-800 rounded-lg shadow hover:bg-blue-900 transition">
          Message
        </button>
      </div>
      <div className="flex items-center justify-between text-sm text-gray-500">
        <p className="flex items-center">
          <FaShieldAlt className="mr-2 text-gray-500" /> Paiement sécurisé
        </p>
        <div className="flex space-x-2">
          <Image src="/visa.png" alt="Visa" width={30} height={20} />
          <Image
            src="/mastercard.png"
            alt="MasterCard"
            width={30}
            height={20}
          />
        </div>
      </div>
    </div>
  );
}
