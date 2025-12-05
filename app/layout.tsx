import type { Metadata } from "next";
import { Poppins, Playfair_Display } from "next/font/google";
import "./globals.css";

const poppins = Poppins({ 
  weight: ['300', '400', '500', '600'],
  subsets: ["latin"],
});

const playfair = Playfair_Display({ 
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Luce Dorata - Inventory Management",
  description: "Inventory management system for jewelry",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link 
          rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" 
        />
      </head>
      <body className={`${poppins.className} antialiased bg-main-gradient`}>
        {children}
      </body>
    </html>
  );
}