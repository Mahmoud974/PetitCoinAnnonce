import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export function InputWithButton() {
  return (
    <div className="flex w-full max-w-sm items-center space-x-2 ">
      <Input
        type="search"
        placeholder="Search"
        className="border-black text-black"
      />
      <Button type="submit">
        <Search />
      </Button>
    </div>
  );
}
