import BackButton from "@/components/shared/BackButton";

export default function MovementsPage() {
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
        {/* Back button */}
        <div className="mb-6">
          <BackButton href="/dashboard" />
        </div>

        {/* Main container */}
        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 max-w-4xl mx-auto border border-gray-100">
          <h1 className="text-3xl font-playfair font-bold text-gray-800 text-center mb-2">
            Update Stock
          </h1>
          <p className="text-gray-500 text-center mb-8">
            Record supplier entries or sales outputs.
          </p>

          {/* Movements form */}
          <MovementForm />

          {/* Recent movements table */}
          <MovementHistory />
        </div>
      </div>
    </div>
  );
}

// Movements form component
function MovementForm() {
  // Sample data for products
  const mockProducts = [
    { id: 1, name: "Elegant Pearl Necklace", code: "JD001" },
    { id: 2, name: "Silver Ring with Sapphire", code: "JD002" },
    { id: 3, name: "Diamond Earrings", code: "JD003" },
    { id: 4, name: "18k Gold Bracelet", code: "JD004" },
    { id: 5, name: "Silver Anklet", code: "JD005" },
  ];

  // Success message (hidden by default)
  const showSuccessMessage = false;

  return (
    <>
      {/* Success message (conditional) */}
      {showSuccessMessage && (
        <div className="bg-green-50 border border-green-200 text-green-800 rounded-xl p-4 mb-6">
          <div className="flex items-center">
            <i className="fa-solid fa-check-circle mr-3 text-green-600"></i>
            <div>
              <p>Success: 5 units were added.</p>
              <p className="font-semibold mt-1">New System Balance: 20</p>
            </div>
          </div>
        </div>
      )}

      {/* Form */}
      <form>
        {/* Product selection */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Select Jewel
          </label>
          <select
            name="product_id"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-200 outline-none transition-all bg-gray-50 focus:bg-white"
            required
          >
            <option value="">-- Search in list --</option>
            {mockProducts.map((product) => (
              <option key={product.id} value={product.id}>
                {product.name} (Ref: {product.code})
              </option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* Movement type */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Movement Type
            </label>
            <select
              name="movement_type"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-200 outline-none transition-all bg-gray-50 focus:bg-white"
            >
              <option value="entry">📥 Entry (Purchase)</option>
              <option value="sale">📤 Exit (Sale)</option>
            </select>
          </div>

          {/* Quantity */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Quantity
            </label>
            <input
              type="number"
              name="quantity"
              min="1"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-200 outline-none transition-all bg-gray-50 focus:bg-white"
              placeholder="Ex: 5"
              required
            />
          </div>
        </div>

        {/* Observation */}
        <div className="mb-8">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Observation / Reason
          </label>
          <input
            type="text"
            name="observation"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-200 outline-none transition-all bg-gray-50 focus:bg-white"
            placeholder="Ex: Invoice #1024 or Sale to customer X"
            required
          />
        </div>

        {/* Submit button */}
        <button
          type="submit"
          className="w-full bg-gray-800 hover:bg-indigo-600 text-white font-semibold py-4 px-6 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/30"
        >
          Record Movement
        </button>
      </form>
    </>
  );
}

// Movement history component
function MovementHistory() {
  // Sample data for movements
  const mockMovements = [
    {
      id: 1,
      productName: "Elegant Pearl Necklace",
      type: "entry",
      quantity: 10,
      date: "2024-01-15 14:30",
      observation: "Supplier purchase"
    },
    {
      id: 2,
      productName: "Silver Ring with Sapphire",
      type: "sale",
      quantity: 2,
      date: "2024-01-15 11:15",
      observation: "Sale to customer Maria"
    },
    {
      id: 3,
      productName: "Diamond Earrings",
      type: "entry",
      quantity: 5,
      date: "2024-01-14 16:45",
      observation: "Stock replenishment"
    },
    {
      id: 4,
      productName: "18k Gold Bracelet",
      type: "sale",
      quantity: 1,
      date: "2024-01-14 10:20",
      observation: "Sale to customer Juan"
    },
    {
      id: 5,
      productName: "Silver Anklet",
      type: "entry",
      quantity: 8,
      date: "2024-01-13 09:10",
      observation: "Wholesale purchase"
    },
  ];

  return (
    <div className="mt-10 pt-8 border-t border-gray-200">
      <h2 className="text-xl font-semibold text-gray-800 text-center mb-6">
        Recent Movements Recorded
      </h2>

      <div className="overflow-x-auto rounded-lg border border-gray-200">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Jewel
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Type
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Qty.
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Date
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {mockMovements.length > 0 ? (
              mockMovements.map((movement) => (
                <tr key={movement.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-4 py-3 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">
                      {movement.productName}
                    </div>
                    <div className="text-xs text-gray-500">
                      {movement.observation}
                    </div>
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap">
                    <span
                      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                        movement.type === "entry"
                          ? "bg-green-100 text-green-800 border border-green-200"
                          : "bg-red-100 text-red-800 border-red-200"
                      }`}
                    >
                      {movement.type === "entry" ? "📥 Entry" : "📤 Exit"}
                    </span>
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap">
                    <span className="text-sm font-medium text-gray-900">
                      {movement.quantity}
                    </span>
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                    {formatDate(movement.date)}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={4} className="px-4 py-8 text-center text-gray-500">
                  No recent movements.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// Helper function to format dates
function formatDate(dateString: string): string {
  const date = new Date(dateString);
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");
  return `${day}/${month} ${hours}:${minutes}`;
}