 // ShopPage.jsx
import React, { useState } from "react";

const ProductPage = () => {
  const [activeFilters, setActiveFilters] = useState({
    price: [200, 1200],
    colors: [],
    sizes: [],
    sort: "newest",
  });

  const [showMobileFilters, setShowMobileFilters] = useState(false);

  // Sample products
  const products = [
    {
      id: 1,
      name: "Danish Flag Polo T-Shirt",
      price: 799,
      oldPrice: 999,
      image:
        "https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=400",
      discount: 20,
    },
    {
      id: 2,
      name: "Nyhavn Skyline Hoodie",
      price: 1299,
      image: "https://images.unsplash.com/photo-1552374196-1ab2a1c0f3e0?w=400",
    },
    {
      id: 3,
      name: "Little Mermaid Keyring",
      price: 89,
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400",
    },
    {
      id: 4,
      name: "Copenhagen Souvenir Mug",
      price: 199,
      image:
        "https://images.unsplash.com/photo-1572449043410-1d2a9d7f1a5a?w=400",
    },
  ];

  const toggleColor = (color) => {
    setActiveFilters((prev) => ({
      ...prev,
      colors: prev.colors.includes(color)
        ? prev.colors.filter((c) => c !== color)
        : [...prev.colors, color],
    }));
  };

  const toggleSize = (size) => {
    setActiveFilters((prev) => ({
      ...prev,
      sizes: prev.sizes.includes(size)
        ? prev.sizes.filter((s) => s !== size)
        : [...prev.sizes, size],
    }));
  };

  const removeFilter = (type, value) => {
    setActiveFilters((prev) => ({
      ...prev,
      [type]: prev[type].filter((v) => v !== value),
    }));
  };

  const clearAllFilters = () =>
    setActiveFilters({
      price: [200, 1200],
      colors: [],
      sizes: [],
      sort: "newest",
    });

  return (
    <div className="min-h-screen  ">
      <div className="container px-4 sm:px-6 lg:px-8 py-6 md:py-10">
        {/* ==================== HERO ==================== */}
        <div className="mb-8 md:mb-12">
          <div className="relative rounded-2xl overflow-hidden h-48 md:h-64 bg-gradient-to-r from-[var(--color-red)] to-red-800">
            <div className="absolute inset-0 bg-black/30" />
            <div className="relative h-full flex items-center justify-center text-center text-white px-6">
              <div>
                <h1 className="text-3xl md:text-5xl font-bold mb-3">
                  Danish Souvenirs
                </h1>
                <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
                  Authentic gifts, apparel & accessories from Denmark
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ==================== FILTER & SORT BAR ==================== */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
          <div className="flex items-center gap-4">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900">
              All Products
            </h2>
            <span className="text-gray-600">({products.length} items)</span>
          </div>

          <div className="flex items-center gap-4 w-full md:w-auto">
            <select
              value={activeFilters.sort}
              onChange={(e) =>
                setActiveFilters((prev) => ({ ...prev, sort: e.target.value }))
              }
              className="border border-[var(--color-gray)] rounded-lg px-4 py-2 bg-white text-gray-700 text-sm md:text-base"
            >
              <option value="newest">Newest First</option>
              <option value="price-low">Price: Low → High</option>
              <option value="price-high">Price: High → Low</option>
              <option value="popular">Most Popular</option>
            </select>

            <button
              onClick={() => setShowMobileFilters(true)}
              className="md:hidden bg-white border border-gray px-5 py-2 rounded-lg font-medium"
            >
              Filters
            </button>
          </div>
        </div>

        {/* Active Filters */}
        {(activeFilters.colors.length > 0 ||
          activeFilters.sizes.length > 0) && (
          <div className="flex flex-wrap gap-2 mb-6">
            {activeFilters.colors.map((color) => (
              <div
                key={color}
                className="bg-red-50 text-[var(--color-red)] px-4 py-1.5 rounded-full text-sm flex items-center gap-2"
              >
                {color}
                <button
                  onClick={() => removeFilter("colors", color)}
                  className="font-bold text-lg leading-none"
                >
                  ×
                </button>
              </div>
            ))}
            {activeFilters.sizes.map((size) => (
              <div
                key={size}
                className="bg-red-50 text-[var(--color-red)] px-4 py-1.5 rounded-full text-sm flex items-center gap-2"
              >
                Size {size}
                <button
                  onClick={() => removeFilter("sizes", size)}
                  className="font-bold text-lg leading-none"
                >
                  ×
                </button>
              </div>
            ))}
            <button
              onClick={clearAllFilters}
              className="text-gray-600 hover:text-[var(--color-red)] text-sm underline ml-2"
            >
              Clear all
            </button>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Desktop Sidebar */}
          <aside className="hidden lg:block lg:col-span-3">
            <div className="bg-white p-6 rounded-xl border border-[var(--color-gray)] sticky top-6">
              <h3 className="text-lg font-bold mb-6">Filters</h3>

              {/* Colors - Multi Select */}
              {/* Price Range */}
              <div className="mb-8">
                <h4 className="font-medium mb-4">Price Range</h4>
                <div className="space-y-2">
                  <input type="range" min="0" max="2000" className="w-full" />
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>DKK 0</span>
                    <span>DKK 2000+</span>
                  </div>
                </div>
              </div>
              <div className="mb-8">
                <h4 className="font-medium mb-4">Colors</h4>
                <div className="flex flex-wrap gap-3">
                  {["Red", "White", "Black", "Navy", "Green"].map((c) => (
                    <button
                      key={c}
                      onClick={() => toggleColor(c)}
                      className={`w-10 h-10 rounded-full border-2 transition-all ${
                        activeFilters.colors.includes(c)
                          ? "border-[var(--color-red)] scale-110 shadow-md"
                          : "border-gray-300 hover:border-gray-400"
                      }`}
                      style={{
                        backgroundColor:
                          c.toLowerCase() === "red"
                            ? "#A60A07"
                            : c.toLowerCase(),
                      }}
                      title={c}
                    />
                  ))}
                </div>
              </div>

              {/* Sizes - Multi Select */}
              <div>
                <h4 className="font-medium mb-4">Sizes</h4>
                <div className="grid grid-cols-5 gap-2">
                  {["S", "M", "L", "XL", "XXL"].map((s) => (
                    <button
                      key={s}
                      onClick={() => toggleSize(s)}
                      className={`border rounded-md py-2 text-sm font-medium transition-all ${
                        activeFilters.sizes.includes(s)
                          ? "border-[var(--color-red)] bg-red-50 text-[var(--color-red)]"
                          : "border-[var(--color-gray)] hover:border-[var(--color-red)]"
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Products Grid */}
          <main className="lg:col-span-9">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-6">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="group bg-white rounded-xl overflow-hidden border border-[var(--color-gray)] shadow-sm hover:shadow-lg transition-all duration-300"
                >
                  <div className="relative aspect-square">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {product.discount && (
                      <div className="absolute top-3 left-3 bg-[var(--color-red)] text-white text-xs font-bold px-2.5 py-1 rounded-full">
                        -{product.discount}%
                      </div>
                    )}
                  </div>

                  <div className="p-4">
                    <h3 className="font-medium text-gray-900 line-clamp-2 min-h-[2.8rem]">
                      {product.name}
                    </h3>

                    <div className="mt-2 flex items-center gap-3">
                      <span className="text-lg font-bold text-[var(--color-red)]">
                        DKK {product.price}
                      </span>
                      {product.oldPrice && (
                        <span className="text-sm text-gray-500 line-through">
                          DKK {product.oldPrice}
                        </span>
                      )}
                    </div>

                    <button
                      className="
                        mt-4 w-full bg-gray-100 hover:bg-[var(--color-red)] 
                        hover:text-white text-gray-800 py-2.5 rounded-lg 
                        text-sm font-medium transition-colors
                      "
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <button
                className="
                  bg-[var(--color-red)] text-white px-10 py-3.5 
                  rounded-lg font-medium hover:bg-red-800 transition-colors
                "
              >
                Load More Products
              </button>
            </div>
          </main>
        </div>

        {/* ==================== MOBILE FILTER MODAL/BOTTOM SHEET ==================== */}
        {showMobileFilters && (
          <div className="fixed inset-0 bg-black/50 z-50 flex items-end md:hidden">
            <div className="bg-white w-full rounded-t-2xl max-h-[85vh] overflow-y-auto">
              <div className="p-5 border-b border-[var(--color-gray)] flex justify-between items-center">
                <h3 className="text-xl font-bold">Filters</h3>
                <button
                  onClick={() => setShowMobileFilters(false)}
                  className="text-2xl font-bold"
                >
                  ×
                </button>
              </div>

              <div className="p-5 space-y-8">
                {/* Colors */}
                <div>
                  <h4 className="font-medium mb-4">Colors</h4>
                  <div className="flex flex-wrap gap-3">
                    {["Red", "White", "Black", "Navy", "Green"].map((c) => (
                      <button
                        key={c}
                        onClick={() => toggleColor(c)}
                        className={`w-12 h-12 rounded-full border-2 transition-all ${
                          activeFilters.colors.includes(c)
                            ? "border-[var(--color-red)] scale-110 shadow-md"
                            : "border-gray-300 hover:border-gray-400"
                        }`}
                        style={{
                          backgroundColor:
                            c.toLowerCase() === "red"
                              ? "#A60A07"
                              : c.toLowerCase(),
                        }}
                      />
                    ))}
                  </div>
                </div>

                {/* Sizes */}
                <div>
                  <h4 className="font-medium mb-4">Sizes</h4>
                  <div className="grid grid-cols-5 gap-3">
                    {["S", "M", "L", "XL", "XXL"].map((s) => (
                      <button
                        key={s}
                        onClick={() => toggleSize(s)}
                        className={`border rounded-md py-3 text-base font-medium transition-all ${
                          activeFilters.sizes.includes(s)
                            ? "border-[var(--color-red)] bg-red-50 text-[var(--color-red)]"
                            : "border-[var(--color-gray)] hover:border-[var(--color-red)]"
                        }`}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-5 border-t border-[var(--color-gray)] flex gap-4">
                <button
                  onClick={clearAllFilters}
                  className="flex-1 border border-gray-400 py-3 rounded-lg font-medium"
                >
                  Clear
                </button>
                <button
                  onClick={() => setShowMobileFilters(false)}
                  className="flex-1 bg-[var(--color-red)] text-white py-3 rounded-lg font-medium"
                >
                  Apply Filters
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Trust Badges */}
        <div className="mt-16 pt-12 border-t border-[var(--color-gray)]">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl mb-3">🚚</div>
              <p className="font-medium">Free Shipping</p>
              <p className="text-sm text-gray-600">Over DKK 499</p>
            </div>
            <div>
              <div className="text-4xl mb-3">↩️</div>
              <p className="font-medium">30 Days Return</p>
              <p className="text-sm text-gray-600">Hassle-free</p>
            </div>
            <div>
              <div className="text-4xl mb-3">🔒</div>
              <p className="font-medium">Secure Payment</p>
              <p className="text-sm text-gray-600">Protected checkout</p>
            </div>
            <div>
              <div className="text-4xl mb-3">⭐</div>
              <p className="font-medium">4.8+ Rating</p>
              <p className="text-sm text-gray-600">From 5000+ customers</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;