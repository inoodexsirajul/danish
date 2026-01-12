// BlogDetailPage.jsx
import React from "react";
import { Link } from "react-router";  

const BlogDetailPage = () => { 
  const post = {
    id: 1,
    title: "The Story Behind Our Danish Flag Polo",
    date: "January 10, 2026",
    author: "Mette Larsen",
    category: "Fashion",
    readTime: "6 min read",
    image:
      "https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=1600",
    content: `
      <p>The Danish flag polo t-shirt wasn't born from a marketing meeting or a trend forecast. It came from a very simple, very Danish moment: a summer evening in Copenhagen where friends gathered by the harbor, wearing whatever felt comfortable and quietly proud.</p>
      
      <p>That quiet pride — the red and white cross that has flown over Denmark for over 800 years — became the heart of this design. We didn't want loud logos or flashy graphics. We wanted something that felt like it had always been there, like it belonged in a wardrobe the way smørrebrød belongs on a lunch table.</p>
      
      <h2>The Design Process</h2>
      <p>We worked with local textile artists in Aarhus who still use traditional screen-printing techniques. Every shirt is printed by hand, which means no two are exactly alike. The red isn't just any red — it's matched to the official Danish flag color (Pantone 186 C), a deep, warm crimson that feels alive in sunlight.</p>
      
      <blockquote>
        "We wanted people to feel the flag on their skin the way they feel it when it waves over the city — subtle, but unmistakable."
        <footer>— Mette Larsen, Designer</footer>
      </blockquote>
      
      <p>The fabric is a soft organic cotton blend that breathes in Copenhagen's unpredictable summer weather. It's cut slightly relaxed, perfect for layering under a light jacket or wearing alone on those rare perfect days.</p>
      
      <h2>Why It Matters</h2>
      <p>In a world full of fast fashion and temporary trends, this polo is meant to be timeless. Something you reach for year after year, summer after summer. A small, everyday way to carry a piece of Danish identity with you.</p>
    `,
  };

  // Related / next & previous posts
  const relatedPosts = [
    {
      id: 2,
      title: "Top 10 Souvenirs to Bring Home from Copenhagen",
      slug: "top-10-souvenirs",
    },
    {
      id: 3,
      title: "Hygge at Home: Danish Living Philosophy",
      slug: "hygge-at-home",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Article Header */}
      <div className="bg-linear-to-b from-red/10 to-transparent">
        <div className="container mx-auto px-4 pt-10 pb-12 md:pt-16 md:pb-20">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap items-center gap-3 text-sm text-gray-600 mb-6">
              <Link
                to="/blog"
                className="hover:text-[var(--color-red)] transition-colors"
              >
                ← Back to Blog
              </Link>
              <span className="text-[var(--color-gray)]">/</span>
              <span className="bg-white px-3 py-1 rounded-full border border-[var(--color-gray)]">
                {post.category}
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-gray-600">
              <time dateTime="2026-01-10">{post.date}</time>
              <span>•</span>
              <span>{post.author}</span>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-10 md:py-16">
        <div className="max-w-4xl mx-auto">
          {/* Featured Image */}
          <div className="rounded-2xl overflow-hidden shadow-lg mb-10 md:mb-16">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-auto object-cover aspect-[16/9] md:aspect-[4/3] lg:aspect-[16/9]"
            />
          </div>

          {/* Article Body */}
          <div className="prose prose-lg max-w-none prose-red lg:prose-xl">
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>

          {/* Author Bio */}
          <div className="mt-16 p-6 md:p-8 bg-white rounded-2xl border border-[var(--color-gray)] flex flex-col md:flex-row gap-6 items-start">
            <div className="w-20 h-20 rounded-full bg-[var(--color-red)]/10 flex items-center justify-center text-2xl font-bold text-[var(--color-red)] flex-shrink-0">
              ML
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Mette Larsen
              </h3>
              <p className="text-gray-600 mb-3">
                Textile designer and creative director at Danish Souvenirs.
                Passionate about timeless design and sustainable craftsmanship.
              </p>
              <Link
                to="#"
                className="text-[var(--color-red)] hover:text-red-800 font-medium transition-colors"
              >
                View all posts by Mette →
              </Link>
            </div>
          </div>

          {/* Pagination / Next & Previous */}
          <div className="mt-16 pt-10 border-t border-[var(--color-gray)]">
            <div className="grid md:grid-cols-2 gap-6">
              {relatedPosts.map((related, index) => (
                <Link
                  key={related.id}
                  to={`/blog/${related.slug}`}
                  className={`group p-6 rounded-xl border border-[var(--color-gray)] hover:border-[var(--color-red)] transition-colors ${
                    index === 0 ? "text-left" : "text-right md:text-right"
                  }`}
                >
                  <div className="text-sm text-gray-500 mb-2">
                    {index === 0 ? "Previous Post" : "Next Post"}
                  </div>
                  <h4 className="font-medium text-gray-900 group-hover:text-[var(--color-red)] transition-colors">
                    {related.title}
                  </h4>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Related Posts / Newsletter */}
      <div className="bg-white border-t border-gray">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Enjoyed this post?</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Subscribe to get new stories about Danish design, culture, and
              lifestyle straight to your inbox
            </p>

            <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-5 py-3 border border-[var(--color-gray)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-red)]/30"
              />
              <button className="bg-[var(--color-red)] text-white px-8 py-3 rounded-lg font-medium hover:bg-red-800 transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailPage;
