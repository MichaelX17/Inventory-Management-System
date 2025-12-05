// components/dashboard/DashboardNavbar.tsx
import { Gem, LogOut } from "lucide-react";

export default function DashboardNavbar() {
  return (
    <nav className="bg-white/80 backdrop-blur-md shadow-sm py-4 px-6 border-b border-gray-100">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full p-2 shadow-md">
            <Gem className="h-5 w-5 text-white" />
          </div>
          <span className="font-playfair font-bold text-xl text-indigo-600 tracking-tight">
            Luce Dorata
          </span>
        </div>

        <div className="flex items-center gap-4">
          <span className="text-gray-600 hidden md:inline text-sm">
            Hello, <b className="text-indigo-600">Admin</b>
          </span>
          <a
            href="/"
            className="flex items-center gap-2 text-gray-600 hover:text-indigo-600 border border-gray-300 hover:border-indigo-400 rounded-full px-4 py-2 text-sm transition-all duration-200 hover:shadow-sm"
          >
            <LogOut className="h-4 w-4" />
            <span className="hidden sm:inline">Logout</span>
          </a>
        </div>
      </div>
    </nav>
  );
}