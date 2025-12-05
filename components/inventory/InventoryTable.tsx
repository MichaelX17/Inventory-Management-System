"use client";

import { Trash2 } from "lucide-react";
import { useState } from "react";

interface Product {
  id: number;
  code: string;
  name: string;
  category: string;
  price: number;
  stock: number;
  lowStockThreshold: number;
}

interface InventoryTableProps {
  products: Product[];
}

export default function InventoryTable({ products }: InventoryTableProps) {
  const [productList, setProductList] = useState<Product[]>(products);

  const handleDelete = (id: number) => {
    if (window.confirm("¿Eliminar esta pieza de la colección?")) {
      setProductList(productList.filter(product => product.id !== id));
    }
  };

  if (productList.length === 0) {
    return (
      <div className="text-center py-12">
        <i className="fa-regular fa-gem text-gray-300 text-5xl mb-4"></i>
        <p className="text-gray-500 text-lg">No hay productos registrados.</p>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto rounded-xl border border-gray-200">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-800">
          <tr>
            <th scope="col" className="px-6 py-4 text-left text-xs font-serif font-medium text-indigo-300 uppercase tracking-wider">
              CÓDIGO
            </th>
            <th scope="col" className="px-6 py-4 text-left text-xs font-serif font-medium text-indigo-300 uppercase tracking-wider">
              PIEZA
            </th>
            <th scope="col" className="px-6 py-4 text-left text-xs font-serif font-medium text-indigo-300 uppercase tracking-wider">
              CATEGORÍA
            </th>
            <th scope="col" className="px-6 py-4 text-left text-xs font-serif font-medium text-indigo-300 uppercase tracking-wider">
              PRECIO
            </th>
            <th scope="col" className="px-6 py-4 text-left text-xs font-serif font-medium text-indigo-300 uppercase tracking-wider">
              STOCK
            </th>
            <th scope="col" className="px-6 py-4 text-left text-xs font-serif font-medium text-indigo-300 uppercase tracking-wider">
              ACCIÓN
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {productList.map((product) => (
            <tr 
              key={product.id} 
              className="hover:bg-indigo-50/50 transition-colors duration-200"
            >
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="text-sm text-gray-500 font-mono">{product.code}</span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="font-medium text-gray-900">{product.name}</span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800 border border-gray-200">
                  {product.category}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="font-semibold text-gray-900">
                  ${product.price.toFixed(2)}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-center">
                {product.stock < product.lowStockThreshold ? (
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-red-100 text-red-800 border border-red-200 animate-pulse">
                    ¡Solo {product.stock}!
                  </span>
                ) : (
                  <span className="font-medium text-gray-700">{product.stock}</span>
                )}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-center">
                <button
                  onClick={() => handleDelete(product.id)}
                  className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-red-200 text-red-500 hover:bg-red-500 hover:text-white hover:border-red-500 transition-all duration-200"
                  title="Eliminar Pieza"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}