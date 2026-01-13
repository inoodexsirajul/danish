// NotFoundPage.jsx
import React from "react";
import { Home, ArrowLeft, Search } from "lucide-react";
import { Link } from "react-router"; // or your router's Link component

const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Main Content */}
      <main className="flex-grow flex items-center justify-center px-4 py-16 sm:py-24">
        <div className="text-center max-w-3xl">
          {/* Big 404 */}
          <h1 className="text-8xl sm:text-9xl md:text-[12rem] lg:text-[14rem] font-black text-[var(--color-red)] leading-none tracking-tight opacity-90">
            404
          </h1>

          {/* Subtitle */}
          <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
            Page not found
          </h2>

          <p className="mt-5 text-lg sm:text-xl text-gray-600 max-w-xl mx-auto">
            Sorry, we couldn't find the page you're looking for. It might have
            been moved, renamed, or doesn't exist.
          </p>

          {/* Search suggestion */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <div className="relative w-full max-w-md">
              <input
                type="text"
                placeholder="Search our site..."
                className="w-full pl-12 pr-5 py-4 border-2 border-[var(--color-gray)] rounded-full focus:outline-none focus:border-[var(--color-red)] focus:ring-2 focus:ring-[var(--color-red)]/30 transition"
              />
              <Search
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                size={22}
              />
            </div>

            <button className="w-full sm:w-auto px-8 py-4 bg-[var(--color-red)] text-white font-medium rounded-full hover:bg-red-800 transition shadow-md flex items-center justify-center gap-2 whitespace-nowrap">
              Search
            </button>
          </div>

          {/* Action buttons */}
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-5">
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white border-2 border-[var(--color-red)] text-[var(--color-red)] font-medium rounded-full hover:bg-[var(--color-red)] hover:text-white transition group"
            >
              <Home
                size={20}
                className="group-hover:scale-110 transition-transform"
              />
              Back to Home
            </Link>

            <Link
              to="/products"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gray-800 text-white font-medium rounded-full hover:bg-gray-900 transition"
            >
              <ArrowLeft size={20} />
              Browse Products
            </Link>
          </div>

          {/* Fun / friendly message */}
          <p className="mt-16 text-gray-500 text-sm sm:text-base">
            Lost in Copenhagen? Don't worry — our Danish souvenirs are still
            waiting for you! 🛍️🇩🇰
          </p>
        </div>
      </main>

      {/* Optional subtle footer-like element */}
      <div className="py-8 text-center text-gray-500 text-sm border-t border-[var(--color-gray)]">
        <p>© {new Date().getFullYear()} Danish Souvenirs & Design</p>
      </div>
    </div>
  );
};

export default NotFoundPage;
