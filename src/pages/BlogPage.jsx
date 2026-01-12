// BlogPage.jsx
import React, { useState } from "react";
import { Link } from "react-router";

const BlogPage = () => {
  const [currentPage, setCurrentPage] = useState(1);

  // Sample blog data
  const blogPosts = [
    {
      id: 1,
      title: "The Story Behind Our Danish Flag Polo",
      excerpt:
        "How a simple t-shirt became a symbol of Danish pride and summer vibes in Copenhagen...",
      date: "January 10, 2026",
      author: "Mette Larsen",
      image:
        "https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=800",
      category: "Fashion",
    },
    {
      id: 2,
      title: "Top 10 Souvenirs to Bring Home from Copenhagen",
      excerpt:
        "From Little Mermaid figurines to proper Danish design items - what you really should buy...",
      date: "December 28, 2025",
      author: "Jonas Petersen",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800",
      category: "Travel Tips",
    },
    {
      id: 3,
      title: "Hygge at Home: Danish Living Philosophy",
      excerpt:
        "Learn how to bring that cozy Danish feeling into your own home with simple changes...",
      date: "November 15, 2025",
      author: "Freja Nielsen",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800",
      category: "Lifestyle",
    },
    {
      id: 4,
      title: "The Art of Danish Pastry: A Brief History",
      excerpt:
        "From wienerbrød origins to modern interpretations - the sweet story of Danish baking...",
      date: "October 3, 2025",
      author: "Lars Madsen",
      image:
        "https://images.unsplash.com/photo-1558327768566-2a655c5d6a8f?w=800",
      category: "Food & Culture",
    },
    {
      id: 5,
      title: "Sustainable Fashion: Our Journey So Far",
      excerpt:
        "How we work with responsible materials and ethical production in 2026...",
      date: "September 20, 2025",
      author: "Mette Larsen",
      image: "https://images.unsplash.com/photo-1552374196-1ab2a1c0f3e0?w=800",
      category: "Sustainability",
    },
  ];

  const postsPerPage = 6;
  const totalPages = Math.ceil(blogPosts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const currentPosts = blogPosts.slice(startIndex, startIndex + postsPerPage);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header / Hero */}
      <div className="bg-linear-to-r from-red to-red-800 text-white">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Danish Stories & Inspiration
          </h1>
          <p className="text-lg md:text-xl text-center opacity-90 max-w-3xl mx-auto">
            Discover the culture, design, food, and lifestyle behind our
            authentic Danish products
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {currentPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col h-full"
            >
              <div className="relative aspect-4/3 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-red text-white text-xs font-medium px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <time className="text-sm text-gray-500 mb-2 block">
                  {post.date} • {post.author}
                </time>

                <Link to="/blog-details">
                  <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {post.title}
                  </h2>
                </Link>

                <p className="text-gray-600 mb-6 line-clamp-3 flex-grow">
                  {post.excerpt}
                </p>

                <a
                  href="#"
                  className="inline-flex items-center text-red font-medium hover:text-red-800 transition-colors"
                >
                  Read more
                  <span className="ml-2">→</span>
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-12 flex justify-center items-center gap-3">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 rounded-lg border border-gray bg-white hover:bg-gray-50 disabled:opacity-40 disabled:hover:bg-white transition-colors"
            >
              Previous
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`w-10 h-10 rounded-lg font-medium transition-colors ${
                  currentPage === page
                    ? "bg-red text-white"
                    : "border border-gray hover:bg-gray-50"
                }`}
              >
                {page}
              </button>
            ))}

            <button
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              disabled={currentPage === totalPages}
              className="px-4 py-2 rounded-lg border border-gray bg-white hover:bg-gray-50 disabled:opacity-40 disabled:hover:bg-white transition-colors"
            >
              Next
            </button>
          </div>
        )}
 
      </div>
    </div>
  );
};

export default BlogPage;
