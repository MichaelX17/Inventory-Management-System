"use client";

import { Search } from "lucide-react";
import { useState } from "react";

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Buscando:", searchTerm);
    // Aquí implementarás la búsqueda cuando tengas la base de datos
  };

  return (
    <div className="mb-8">
      <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-3 justify-center items-center">
        <div className="relative flex-1 max-w-md">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Buscar joya por nombre, categoría o código..."
            className="w-full pl-12 pr-4 py-3 rounded-full border border-gray-300 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-200 outline-none transition-all"
          />
          <Search className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
        </div>
        <button
          type="submit"
          className="bg-gray-800 hover:bg-indigo-600 text-white font-medium py-3 px-6 rounded-full transition-colors flex items-center gap-2"
        >
          <Search className="h-4 w-4" />
          Buscar
        </button>
        <button
          type="button"
          onClick={() => setSearchTerm("")}
          className="border border-gray-300 hover:border-gray-400 text-gray-700 hover:text-gray-800 font-medium py-3 px-6 rounded-full transition-colors"
        >
          Ver todo
        </button>
      </form>
    </div>
  );
}