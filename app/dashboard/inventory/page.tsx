import InventoryTable from "@/components/inventory/InventoryTable";
import InventorySummary from "@/components/inventory/InventorySummary";
import SearchBar from "@/components/inventory/SearchBar";
import BackButton from "@/components/shared/BackButton";

// Datos de ejemplo - luego serán reemplazados por JSON
const mockProducts = [
  {
    id: 1,
    code: "JD001",
    name: "Collar de Perlas Elegante",
    category: "Collares",
    price: 89.99,
    stock: 15,
    lowStockThreshold: 5
  },
  {
    id: 2,
    code: "JD002",
    name: "Anillo de Plata con Zafiro",
    category: "Anillos",
    price: 125.50,
    stock: 3,
    lowStockThreshold: 5
  },
  {
    id: 3,
    code: "JD003",
    name: "Pendientes de Diamante",
    category: "Pendientes",
    price: 199.99,
    stock: 8,
    lowStockThreshold: 5
  },
  {
    id: 4,
    code: "JD004",
    name: "Pulsera de Oro 18k",
    category: "Pulseras",
    price: 299.99,
    stock: 12,
    lowStockThreshold: 5
  },
  {
    id: 5,
    code: "JD005",
    name: "Tobillera de Plata",
    category: "Tobilleras",
    price: 45.75,
    stock: 2,
    lowStockThreshold: 5
  },
  {
    id: 6,
    code: "JD006",
    name: "Broche de Mariposa",
    category: "Broches",
    price: 65.25,
    stock: 20,
    lowStockThreshold: 5
  }
];

export default function InventoryPage() {
  // Calcular totales
  const totalPhysicalStock = mockProducts.reduce((sum, product) => sum + product.stock, 0);
  const totalInventoryValue = mockProducts.reduce((sum, product) => sum + (product.price * product.stock), 0);

  return (
    <div className="min-h-screen pb-12">
      {/* Header con logo pequeño */}
      <div className="pt-6 pb-4">
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <div className="w-16 h-16 rounded-full border-2 border-white shadow-lg bg-gradient-to-br from-indigo-100 to-purple-50 flex items-center justify-center">
              <i className="fa-solid fa-gem text-indigo-500 text-2xl"></i>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4">
        {/* Barra superior con botón de volver y título */}
        <div className="flex justify-between items-center mb-8">
          <BackButton href="/dashboard" />
          <h1 className="text-3xl font-playfair font-bold text-gray-800 text-center">
            Colección de Joyas
          </h1>
          <div className="w-20"></div> {/* Espaciador para centrar el título */}
        </div>

        {/* Contenedor principal */}
        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-gray-100">
          {/* Buscador */}
          <SearchBar />

          {/* Tabla de productos */}
          <InventoryTable products={mockProducts} />

          {/* Resumen de totales */}
          <InventorySummary 
            totalPhysicalStock={totalPhysicalStock}
            totalInventoryValue={totalInventoryValue}
          />
        </div>
      </div>
    </div>
  );
}