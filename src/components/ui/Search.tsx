'use client';

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export function InputWithButton() {
  return (
    <form className="flex items-center bg-white/10 rounded-md px-3 py-1 max-w-sm border border-white/20 focus-within:ring-2 focus-within:ring-white">
      <Input
        type="search"
        placeholder="Rechercher une annonce..."
        className="bg-transparent text-white placeholder:text-red-300 border-none ring-0 outline-none focus:ring-0 focus-visible:ring-0 focus:outline-none shadow-none flex-1"
      />
      <Button type="submit" size="icon" className="ml-2 bg-red-600 hover:bg-red-700 text-white">
        <Search className="w-5 h-5" />
      </Button>
    </form>
  );
}
