// CategoryPage.jsx
import React, { useState } from "react";
import { SlidersHorizontal, ChevronDown, Star, Heart } from "lucide-react";
import { Link } from "react-router"; // assuming react-router
import { products } from "../data/data";
import ProductCard from "../components/ProductCard";

const CategoryPage = () => { 
  const [sortBy, setSortBy] = useState("newest");

 

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb + Title */}
      <div className="bg-white border-b border-gray">
        <div className="container mx-auto px-4 py-4 sm:py-6">
          <nav className="text-sm text-gray-500 mb-3">
            <Link to="/" className="hover:text-red">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900 font-medium">Jewelry</span>
          </nav>

          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
                Jewelry
              </h1>
              <p className="mt-2 text-gray-600 max-w-2xl">
                Discover timeless Danish silver, beautiful amber pieces, and
                modern minimalist designs — perfect souvenirs from Copenhagen.
              </p>
            </div>

            <div className="flex items-center gap-4">
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none bg-white border border-gray rounded-lg px-4 py-2.5 pr-10 focus:outline-none focus:ring-1 focus:ring-red"
                >
                  <option value="newest">Newest first</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="popular">Most Popular</option>
                </select>
                <ChevronDown
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                  size={18}
                />
              </div> 
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 lg:py-12">
        <div className="">
       
          {/* Products Grid */}
          <div className=" ">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-6 gap-6">
              {products.map((product, index) => (
                <ProductCard key={index} product={product}/>
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-12 flex justify-center items-center gap-3">
              <button
                className="px-4 py-2 border border-gray rounded-lg hover:border-red transition disabled:opacity-50"
                disabled
              >
                Previous
              </button>
              <button className="px-4 py-2 bg-red text-white rounded-lg">
                1
              </button>
              <button className="px-4 py-2 border border-gray rounded-lg hover:border-red transition">
                2
              </button>
              <button className="px-4 py-2 border border-gray rounded-lg hover:border-red transition">
                3
              </button>
              <button className="px-4 py-2 border border-gray rounded-lg hover:border-red transition">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>

 
    </div>
  );
};

export default CategoryPage;
