import { LucidDreamBackground } from '@/components/auth/LucidDreamBackground';

export default function LoginPage() {
  return (
    <div className="bg-black min-h-screen relative">
      <LucidDreamBackground />
      <div className="relative z-20 min-h-screen flex items-center justify-center p-4">
        <div className="bg-gray-500/60 backdrop-blur-sm rounded-2xl shadow-2xl p-8 w-full max-w-md">
          <div className="flex justify-center mb-6">
            <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full p-5">
              <i className="fa-solid fa-gem text-white text-4xl"></i>
            </div>
          </div>

          <h1 className="text-2xl font-bold text-center text-white mb-2">
            Welcome
          </h1>
          <p className="text-gray-200 text-center text-sm mb-8">
            Jewelry Management System
          </p>

          {/* FORM with action to dashboard */}
          <form action="/dashboard">
            <div className="mb-6">
              <div className="flex items-center bg-gray-50 rounded-full px-4 py-4">
                <i className="fa-solid fa-user text-gray-400 mr-3"></i>
                <input
                  type="text"
                  name="username"
                  className="w-full bg-transparent outline-none"
                  placeholder="Username"
                  required
                />
              </div>
            </div>

            <div className="mb-8">
              <div className="flex items-center bg-gray-50 rounded-full px-4 py-4">
                <i className="fa-solid fa-lock text-gray-400 mr-3"></i>
                <input
                  type="password"
                  name="password"
                  className="w-full bg-transparent outline-none"
                  placeholder="Password"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold py-4 rounded-full mb-6 hover:shadow-lg hover:shadow-indigo-500/30 transition-all"
            >
              LOG IN
            </button>

            <div className="text-center text-white/70 text-xs">
              &copy; 2025 City - State
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}