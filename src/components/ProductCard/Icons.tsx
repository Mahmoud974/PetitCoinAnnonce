import { mdiCarShiftPattern, mdiCarDoor, mdiSeatReclineExtra } from "@mdi/js";
import { Car, Calendar, Rabbit, Zap, Palette, Joystick } from "lucide-react";
import React from "react";
import Icon from "@mdi/react";

export default function Icons() {
  return (
    <div className="flex  justify-between">
      <div>
        <h2 className="text-xl font-bold mb-2">Informations clé</h2>
        <ul className="gap-9 grid grid-cols-4  ">
          <li>
            <div className="flex items-start">
              <Car />{" "}
              <div className="flex flex-col ml-2">
                <p className=" font-bold">Version</p>
                <p className="text-xs text-gray-300">
                  NOTE ENTREPRISE 1.5 DCI 90 <br /> CH EURO V FAP LIFE +
                </p>
              </div>
            </div>
          </li>
          <li>
            <div className="flex items-start">
              <Calendar />{" "}
              <div className="flex flex-col ml-2">
                <p className=" font-bold">Année</p>
                <p className="text-xs text-gray-300">juin 2012</p>
              </div>
            </div>
          </li>
          <li>
            <div className="flex items-start">
              <Rabbit />{" "}
              <div className="flex flex-col ml-2">
                <p className=" font-bold">Kilométrage</p>
                <p className="text-xs text-gray-300">224 000 km</p>
              </div>
            </div>
          </li>
          <li>
            <div className="flex items-start">
              <Zap />
              <div className="flex flex-col ml-2">
                <p className=" font-bold">Energie</p>
                <p className="text-xs text-gray-300">Diesel</p>
              </div>
            </div>
          </li>
          <li>
            <div className="flex items-start">
              <Palette />
              <div className="flex flex-col ml-2">
                <p className=" font-bold">Couleur</p>
                <p className="text-xs text-gray-300">Jaune</p>
              </div>
            </div>
          </li>
          <li>
            <div className="flex items-start">
              <Icon path={mdiCarShiftPattern} size={1} />
              <div className="flex flex-col ml-2">
                <p className=" font-bold">Transmission</p>
                <p className="text-xs text-gray-300">Manuelle</p>
              </div>
            </div>
          </li>
          <li>
            <div className="flex items-start">
              <Icon path={mdiCarDoor} size={1} />
              <div className="flex flex-col ml-2">
                <p className=" font-bold">Door</p>
                <p className="text-xs text-gray-300">4 portes</p>
              </div>
            </div>
          </li>
          <li>
            <div className="flex items-start">
              <Icon path={mdiCarDoor} size={1} />
              <div className="flex flex-col ml-2">
                <p className=" font-bold">Consom.</p>
                <p className="text-xs text-gray-300">4.2 litres / 100 km</p>
              </div>
            </div>
          </li>
          <li>
            <div className="flex items-start">
              <Joystick />
              <div className="flex flex-col ml-2">
                <p className=" font-bold">Puissance</p>
                <p className="text-xs text-gray-300">6 CV</p>
              </div>
            </div>
          </li>
          <li>
            <div className="flex items-start">
              <Icon path={mdiSeatReclineExtra} size={1} />
              <div className="flex flex-col ml-2">
                <p className=" font-bold">Nbre de places</p>
                <p className="text-xs text-gray-300">2 places</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
