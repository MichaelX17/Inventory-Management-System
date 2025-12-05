import BackButton from "@/components/shared/BackButton";

export default function RegisterProductPage() {
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
        {/* Botón de volver */}
        <div className="mb-6">
          <BackButton href="/dashboard" />
        </div>

        {/* Contenedor principal del formulario */}
        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 max-w-4xl mx-auto border border-gray-100">
          <h1 className="text-3xl font-playfair font-bold text-gray-800 text-center mb-8">
            Registrar Nueva Pieza
          </h1>

          {/* Formulario */}
          <ProductForm />
        </div>
      </div>
    </div>
  );
}

// Componente del formulario (podríamos moverlo a un archivo separado después)
function ProductForm() {
  // Por ahora solo es visual, sin lógica de envío
  return (
    <>
      {/* Mensaje de éxito (oculto por defecto) */}
      <div className="hidden bg-green-50 border border-green-200 text-green-800 rounded-xl p-4 mb-6">
        <div className="flex items-center">
          <i className="fa-solid fa-check-circle mr-3 text-green-600"></i>
          <span>¡Pieza registrada con éxito!</span>
        </div>
      </div>

      <form>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* Código de Referencia */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Código de Referencia
            </label>
            <input
              type="text"
              name="code"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-200 outline-none transition-all bg-gray-50 focus:bg-white"
              placeholder="Ej: COL-001"
              required
            />
          </div>

          {/* Nombre de la Pieza */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Nombre de la Pieza
            </label>
            <input
              type="text"
              name="name"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-200 outline-none transition-all bg-gray-50 focus:bg-white"
              placeholder="Ej: Collar Perlas de Río"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
          {/* Categoría */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Categoría
            </label>
            <select
              name="category"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-200 outline-none transition-all bg-gray-50 focus:bg-white"
            >
              <option value="Collar">Collar</option>
              <option value="Pulsera">Pulsera</option>
              <option value="Anillo">Anillo</option>
              <option value="Zarcillos">Zarcillos</option>
              <option value="Juego Completo">Juego Completo</option>
              <option value="Otro">Otro</option>
            </select>
          </div>

          {/* Precio */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Precio ($)
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

          {/* Stock Inicial */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Stock Inicial
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

        {/* Descripción */}
        <div className="mb-8">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Descripción / Detalles
          </label>
          <textarea
            name="description"
            rows={3}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-200 outline-none transition-all bg-gray-50 focus:bg-white resize-none"
            placeholder="Materiales, colores, detalles..."
          />
        </div>

        {/* Botón de envío */}
        <button
          type="submit"
          className="w-full bg-gray-800 hover:bg-indigo-600 text-white font-semibold py-4 px-6 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/30 flex items-center justify-center gap-3"
        >
          <i className="fa-solid fa-save"></i>
          Guardar en Inventario
        </button>
      </form>
    </>
  );
}