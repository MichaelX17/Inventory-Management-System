import { Package, DollarSign } from "lucide-react";

interface InventorySummaryProps {
  totalPhysicalStock: number;
  totalInventoryValue: number;
}

export default function InventorySummary({ 
  totalPhysicalStock, 
  totalInventoryValue 
}: InventorySummaryProps) {
  return (
    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Total de piezas */}
      <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 border border-gray-200">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-1">
              Total Piezas (Físico)
            </p>
            <p className="text-3xl font-serif font-bold text-gray-900">
              {totalPhysicalStock.toLocaleString()}
            </p>
          </div>
          <div className="bg-gray-800 p-3 rounded-full">
            <Package className="h-6 w-6 text-white" />
          </div>
        </div>
        <p className="text-xs text-gray-500 mt-3">
          Suma total de todas las unidades en inventario
        </p>
      </div>

      {/* Valor total del inventario */}
      <div className="bg-gradient-to-br from-indigo-50 to-purple-100 rounded-xl p-6 border border-indigo-200">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-1">
              Valor Total Colección
            </p>
            <p className="text-3xl font-serif font-bold text-indigo-700">
              ${totalInventoryValue.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </p>
          </div>
          <div className="bg-indigo-600 p-3 rounded-full">
            <DollarSign className="h-6 w-6 text-white" />
          </div>
        </div>
        <p className="text-xs text-gray-500 mt-3">
          Valor total calculado (precio × stock)
        </p>
      </div>
    </div>
  );
}