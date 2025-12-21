import { Search, Building2, BriefcaseBusiness, Car, Shirt, Dog, HandPlatter, Caravan, ChevronDown } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const categories = [
  { slug: "all", label: "Toutes catégories", icon: null },
  { slug: "immobiliers", label: "Immobilier", icon: <Building2 size={18} /> },
  { slug: "emplois", label: "Emploi", icon: <BriefcaseBusiness size={18} /> },
  { slug: "cars", label: "Locomotion", icon: <Car size={18} /> },
  { slug: "cloths", label: "Seconde main", icon: <Shirt size={18} /> },
  { slug: "animals", label: "Animaux", icon: <Dog size={18} /> },
  { slug: "services", label: "Services", icon: <HandPlatter size={18} /> },
  { slug: "vacances", label: "Vacances", icon: <Caravan size={18} /> },
];

export default function SearchWithCategories() {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Search:", searchQuery, "Category:", selectedCategory.slug);
  };

  return (
    <div className="w-full max-w-2xl p-8">
      <div className="flex items-stretch bg-white rounded-lg shadow-lg overflow-hidden">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button 
              variant="outline" 
              className="h-full px-4 py-3 bg-gray-50 hover:bg-gray-100 border-r border-gray-200 rounded-none border-0 flex items-center gap-2 text-gray-700 font-medium min-w-[200px] justify-between"
            >
              <div className="flex items-center gap-2">
                {selectedCategory.icon && (
                  <span className="text-gray-500">{selectedCategory.icon}</span>
                )}
                <span>{selectedCategory.label}</span>
              </div>
              <ChevronDown size={16} className="text-gray-500" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-[200px]" align="start">
            {categories.map((category) => (
              <DropdownMenuItem
                key={category.slug}
                onClick={() => setSelectedCategory(category)}
                className={`flex items-center gap-3 cursor-pointer ${
                  selectedCategory.slug === category.slug ? 'bg-blue-50 text-blue-600' : ''
                }`}
              >
                {category.icon && (
                  <span className={selectedCategory.slug === category.slug ? 'text-blue-600' : 'text-gray-500'}>
                    {category.icon}
                  </span>
                )}
                <span className="text-sm font-medium">{category.label}</span>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        <input
          type="search"
          placeholder="Que recherchez-vous ?"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              handleSubmit(e);
            }
          }}
          className="flex-1 px-4 py-3 text-gray-700 placeholder-gray-400 outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset"
        />

        <button
          type="button"
          onClick={handleSubmit}
          className="px-6 bg-black   text-white transition-colors flex items-center justify-center"
        >
          <Search size={20} />
        </button>
      </div>
    </div>
  );
}