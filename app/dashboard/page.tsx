export default function DashboardPage() {
  const menuItems = [
    {
      title: "My Jewelry",
      description: "Consult and manage available pieces.",
      icon: "fa-gem",
      href: "/dashboard/inventory",
      buttonText: "View Collection"
    },
    {
      title: "New Piece",
      description: "Register a new jewelry entry.",
      icon: "fa-circle-plus",
      href: "/dashboard/register-product",
      buttonText: "Add"
    },
    {
      title: "Movements",
      description: "Record sales or stock replenishment.",
      icon: "fa-rotate",
      href: "/dashboard/movements",
      buttonText: "Update"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Navbar */}
      <nav className="bg-white/80 backdrop-blur-md shadow-sm py-4 px-6">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full p-2">
              <i className="fa-regular fa-gem text-white text-sm"></i>
            </div>
            <span className="font-bold text-xl text-indigo-600">
              Luce Dorata
            </span>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-gray-600 hidden md:inline text-sm">
              Hello, <b className="text-indigo-600">Administrator</b>
            </span>
            <a
              href="/"
              className="text-gray-600 hover:text-indigo-600 border border-gray-300 rounded-full px-4 py-2 text-sm"
            >
              <i className="fa-solid fa-right-from-bracket mr-2"></i>
              <span className="hidden sm:inline">Logout</span>
            </a>
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="container mx-auto px-4 py-8">
        {/* Logo */}
        <div className="text-center mb-12">
          <div className="w-48 h-48 mx-auto mb-6 rounded-full border-4 border-white shadow-lg bg-gradient-to-br from-indigo-100 to-purple-50 flex items-center justify-center">
            <i className="fa-solid fa-gem text-indigo-500 text-6xl"></i>
          </div>
          <h1 className="text-4xl text-gray-700 mb-2 font-serif">
            Inventory Management
          </h1>
          <p className="text-gray-500 text-lg">
            Exclusive and elegant administration
          </p>
        </div>

        {/* Options grid */}
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {menuItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="block group bg-white rounded-xl shadow-lg p-8 text-center cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-xl h-full border border-gray-100 flex flex-col"
              >
                <div className="mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full text-white text-3xl">
                    <i className={`fa-solid ${item.icon} text-2xl`}></i>
                  </div>
                </div>
                
                <h3 className="font-semibold text-gray-800 text-lg mb-3">
                  {item.title}
                </h3>
                
                <p className="text-gray-500 text-sm mb-8 flex-grow">
                  {item.description}
                </p>
                
                <div className="bg-gray-800 text-white rounded-full text-sm font-medium transition-colors group-hover:bg-indigo-600 py-3 w-full text-center">
                  {item.buttonText}
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}