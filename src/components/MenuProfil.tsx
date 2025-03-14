import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Bell,
  CircleUserRound,
  Heart,
  UserRound,
  UserRoundPlus,
} from "lucide-react";

export default function MenuProfil() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <CircleUserRound />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="cursor-pointer">
          <Bell />
          Mes alertes
        </DropdownMenuItem>

        <DropdownMenuItem className="cursor-pointer">
          <Heart />
          Mes favorites
        </DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer">
          <UserRound />
          Se connecter
        </DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer">
          <UserRoundPlus />
          Créer un compte
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
