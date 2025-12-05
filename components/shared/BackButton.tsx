import { ArrowLeft } from "lucide-react";
import Link from "next/link";

interface BackButtonProps {
  href: string;
}

export default function BackButton({ href }: BackButtonProps) {
  return (
    <Link
      href={href}
      className="flex items-center text-gray-600 hover:text-indigo-600 font-medium transition-colors group"
    >
      <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
      Back
    </Link>
  );
}