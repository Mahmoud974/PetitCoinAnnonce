import React from "react";

import {
  Calendar,
  Rabbit,
  Zap,
  Palette,
  Joystick,
  Hexagon,
} from "lucide-react";
import Icon from "@mdi/react";
import { mdiCarShiftPattern, mdiCarDoor, mdiSeatReclineExtra } from "@mdi/js";

export interface InfoItem {
  icon: React.ReactNode;
  label: string;
  value: string;
}

export const vehicule: InfoItem[] = [
  {
    icon: <Hexagon />,
    label: "Version",
    value: "NOTE ENTREPRISE 1.5 DCI 90\nCH EURO V FAP LIFE +",
  },
  {
    icon: <Calendar />,
    label: "Année",
    value: "juin 2012",
  },
  {
    icon: <Rabbit />,
    label: "Kilométrage",
    value: "224 000 km",
  },
  {
    icon: <Zap />,
    label: "Énergie",
    value: "Diesel",
  },
  {
    icon: <Palette />,
    label: "Couleur",
    value: "Jaune",
  },
  {
    icon: <Icon path={mdiCarShiftPattern} size={1} />,
    label: "Transmission",
    value: "Manuelle",
  },
  {
    icon: <Icon path={mdiCarDoor} size={1} />,
    label: "Portes",
    value: "4 portes",
  },
  {
    icon: <Icon path={mdiCarDoor} size={1} />,
    label: "Consom.",
    value: "4.2 L / 100 km",
  },
  {
    icon: <Joystick />,
    label: "Puissance",
    value: "6 CV",
  },
  {
    icon: <Icon path={mdiSeatReclineExtra} size={1} />,
    label: "Nbre de places",
    value: "2 places",
  },
];

export const immobilier: InfoItem[] = [
  {
    icon: <Hexagon />,
    label: "Version",
    value: "NOTE ENTREPRISE 1.5 DCI 90\nCH EURO V FAP LIFE +",
  },
  {
    icon: <Calendar />,
    label: "Année",
    value: "juin 2012",
  },
  {
    icon: <Rabbit />,
    label: "Kilométrage",
    value: "224 000 km",
  },
  {
    icon: <Zap />,
    label: "Énergie",
    value: "Diesel",
  },
  {
    icon: <Palette />,
    label: "Couleur",
    value: "Jaune",
  },
  {
    icon: <Icon path={mdiCarShiftPattern} size={1} />,
    label: "Transmission",
    value: "Manuelle",
  },
  {
    icon: <Icon path={mdiCarDoor} size={1} />,
    label: "Portes",
    value: "4 portes",
  },
  {
    icon: <Icon path={mdiCarDoor} size={1} />,
    label: "Consom.",
    value: "4.2 L / 100 km",
  },
  {
    icon: <Joystick />,
    label: "Puissance",
    value: "6 CV",
  },
  {
    icon: <Icon path={mdiSeatReclineExtra} size={1} />,
    label: "Nbre de places",
    value: "2 places",
  },
];
