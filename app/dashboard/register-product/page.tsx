import BackButton from "@/components/shared/BackButton";

export default function RegisterProductPage() {
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

        {/* Main form container */}
        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 max-w-4xl mx-auto border border-gray-100">
          <h1 className="text-3xl font-playfair font-bold text-gray-800 text-center mb-8">
            Register New Piece
          </h1>

          {/* Form */}
          <ProductForm />
        </div>
      </div>
    </div>
  );
}

// Form component (we could move it to a separate file later)
function ProductForm() {
  // For now it's just visual, without submission logic
  return (
    <>
      {/* Success message (hidden by default) */}
      <div className="hidden bg-green-50 border border-green-200 text-green-800 rounded-xl p-4 mb-6">
        <div className="flex items-center">
          <i className="fa-solid fa-check-circle mr-3 text-green-600"></i>
          <span>Piece registered successfully!</span>
        </div>
      </div>

      <form>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* Reference Code */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Reference Code
            </label>
            <input
              type="text"
              name="code"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-200 outline-none transition-all bg-gray-50 focus:bg-white"
              placeholder="Ex: COL-001"
              required
            />
          </div>

          {/* Piece Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Piece Name
            </label>
            <input
              type="text"
              name="name"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-200 outline-none transition-all bg-gray-50 focus:bg-white"
              placeholder="Ex: River Pearl Necklace"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
          {/* Category */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Category
            </label>
            <select
              name="category"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-200 outline-none transition-all bg-gray-50 focus:bg-white"
            >
              <option value="Necklace">Necklace</option>
              <option value="Bracelet">Bracelet</option>
              <option value="Ring">Ring</option>
              <option value="Earrings">Earrings</option>
              <option value="Full Set">Full Set</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* Price */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Price ($)
            </label>
            <input
              type="number"
              step="0.01"
              name="price"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-200 outline-none transition-all bg-gray-50 focus:bg-white"
              placeholder="0.00"
              required
            />
          </div>

          {/* Initial Stock */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Initial Stock
            </label>
            <input
              type="number"
              name="quantity"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-200 outline-none transition-all bg-gray-50 focus:bg-white"
              placeholder="0"
              required
            />
          </div>
        </div>

        {/* Description */}
        <div className="mb-8">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Description / Details
          </label>
          <textarea
            name="description"
            rows={3}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-200 outline-none transition-all bg-gray-50 focus:bg-white resize-none"
            placeholder="Materials, colors, details..."
          />
        </div>

        {/* Submit button */}
        <button
          type="submit"
          className="w-full bg-gray-800 hover:bg-indigo-600 text-white font-semibold py-4 px-6 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/30 flex items-center justify-center gap-3"
        >
          <i className="fa-solid fa-save"></i>
          Save to Inventory
        </button>
      </form>
    </>
  );
}