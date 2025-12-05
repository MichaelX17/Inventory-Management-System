import InventoryTable from "@/components/inventory/InventoryTable";
import InventorySummary from "@/components/inventory/InventorySummary";
import SearchBar from "@/components/inventory/SearchBar";
import BackButton from "@/components/shared/BackButton";

// Sample data - will be replaced by JSON later
const mockProducts = [
  {
    id: 1,
    code: "JD001",
    name: "Elegant Pearl Necklace",
    category: "Necklaces",
    price: 89.99,
    stock: 15,
    lowStockThreshold: 5
  },
  {
    id: 2,
    code: "JD002",
    name: "Silver Ring with Sapphire",
    category: "Rings",
    price: 125.50,
    stock: 3,
    lowStockThreshold: 5
  },
  {
    id: 3,
    code: "JD003",
    name: "Diamond Earrings",
    category: "Earrings",
    price: 199.99,
    stock: 8,
    lowStockThreshold: 5
  },
  {
    id: 4,
    code: "JD004",
    name: "18k Gold Bracelet",
    category: "Bracelets",
    price: 299.99,
    stock: 12,
    lowStockThreshold: 5
  },
  {
    id: 5,
    code: "JD005",
    name: "Silver Anklet",
    category: "Anklets",
    price: 45.75,
    stock: 2,
    lowStockThreshold: 5
  },
  {
    id: 6,
    code: "JD006",
    name: "Butterfly Brooch",
    category: "Brooches",
    price: 65.25,
    stock: 20,
    lowStockThreshold: 5
  }
];

export default function InventoryPage() {
  // Calculate totals
  const totalPhysicalStock = mockProducts.reduce((sum, product) => sum + product.stock, 0);
  const totalInventoryValue = mockProducts.reduce((sum, product) => sum + (product.price * product.stock), 0);

  return (
    <div className="min-h-screen pb-12">
      {/* Header with small logo */}
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
        {/* Top bar with back button and title */}
        <div className="flex justify-between items-center mb-8">
          <BackButton href="/dashboard" />
          <h1 className="text-3xl font-playfair font-bold text-gray-800 text-center">
            Jewelry Collection
          </h1>
          <div className="w-20"></div> {/* Spacer to center the title */}
        </div>

        {/* Main container */}
        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-gray-100">
          {/* Search bar */}
          <SearchBar />

          {/* Products table */}
          <InventoryTable products={mockProducts} />

          {/* Totals summary */}
          <InventorySummary 
            totalPhysicalStock={totalPhysicalStock}
            totalInventoryValue={totalInventoryValue}
          />
        </div>
      </div>
    </div>
  );
}