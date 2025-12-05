// components/dashboard/MenuCard.tsx
// REMOVER "use client" - Este será un Server Component
import { LucideIcon } from "lucide-react";
import Link from "next/link";

interface MenuCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
  buttonText: string;
}

export default function MenuCard({
  title,
  description,
  icon: Icon,
  href,
  buttonText
}: MenuCardProps) {
  return (
    <Link href={href} className="block">
      <div className="group bg-white rounded-xl shadow-lg p-8 text-center cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-xl h-full border border-gray-100 hover:border-indigo-200">
        <div className="mb-6">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full text-white text-3xl">
            <Icon className="h-8 w-8" />
          </div>
        </div>
        
        <h3 className="font-semibold text-gray-800 text-lg mb-3">
          {title}
        </h3>
        
        <p className="text-gray-500 text-sm mb-6">
          {description}
        </p>
        
        <div className="bg-gray-800 text-white rounded-full px-6 py-2 text-sm font-medium transition-colors group-hover:bg-indigo-600 inline-block">
          {buttonText}
        </div>
      </div>
    </Link>
  );
}