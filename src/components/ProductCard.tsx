import Image from "next/image";
import { Heart, Share, Printer, Pin, CalendarFold } from "lucide-react";
import Criteria from "./ProductCard/Criteria";
import Description from "./ProductCard/Description";
import Pages from "./Pages";

export default function ProductCard() {
  return (
    <div className="flex flex-col">
      <Pages />
      <div className="mt-5 ">
        <h2 className="text-3xl font-bold uppercase">
          Chaise haute pliable Chicot
        </h2>
        <div className="flex gap-3">
          <div className="flex my-2">
            <Pin className="text-red-500" />{" "}
            <p className="ml-1">64110 Mazères-Lezons</p>
          </div>
          <div className="flex my-2">
            <CalendarFold className="text-red-500" />{" "}
            <p className="ml-1">Publié le 16/02/2025</p>
          </div>
        </div>
      </div>
      <div className="max-w-md  rounded-xl   overflow-hidden md:max-w-2xl">
        <div className="grid grid-cols-3 gap-2  pt-5">
          <Image
            src="/1.webp"
            alt="Chaise haute Chicco"
            width={800}
            height={800}
            className="rounded-lg"
          />
          <Image
            src="/3.webp"
            alt="Chaise haute Chicco"
            width={800}
            height={800}
            className="rounded-lg"
          />
          <div className="relative">
            <Image
              src="/2.webp"
              alt="Chaise haute Chicco avec plateau"
              width={800}
              height={800}
              className="rounded-lg"
            />
          </div>
        </div>
        <ul className="flex my-4 gap-4 items-center  ">
          <li className="flex items-center">
            <div className="flex border p-1 rounded-lg border-red-500">
              <p className="mr-1 font-bold text-red-500">967</p>
              <Heart className="text-red-500" />{" "}
            </div>
          </li>
          <li className="flex">
            <Share className="text-red-500" />{" "}
            <p className="ml-1">{`Partager l'annonce`}</p>
          </li>
          <li className="flex">
            <Printer className="text-red-500" />{" "}
            <p className="ml-1">{`Partager l'annonce`}</p>
          </li>
          <li className="flex">
            <p className="text-2xl font-bold bg-red-500 px-3 text-gray-900">
              50€
            </p>
          </li>
        </ul>
        <Criteria />
        <Description />
      </div>
    </div>
  );
}
