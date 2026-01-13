// CampaignPage.jsx
import React, { useState } from "react";
import { products } from "../data/data";
import ProductCard from "../components/ProductCard";

const CampaignPage = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 7,
    hours: 14,
    minutes: 59,
    seconds: 42,
  });

  // Fake countdown timer effect (for demo)
  React.useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { days, hours, minutes, seconds } = prev;

        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          seconds = 59;
          minutes--;
        } else if (hours > 0) {
          minutes = 59;
          hours--;
        } else if (days > 0) {
          hours = 23;
          days--;
        }

        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

 

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Banner */}
      <div className="bg-linear-to-br from-red via-red-700 to-red-900 text-white">
        <div className="container mx-auto px-4 py-16 md:py-24 lg:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-white/20 backdrop-blur-sm px-6 py-2 rounded-full mb-6 text-lg font-medium">
              LIMITED TIME OFFER • ENDS IN {timeLeft.days}d {timeLeft.hours}h{" "}
              {timeLeft.minutes}m
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6  ">
              Winter Hygge Sale
            </h1>

            <p className="text-xl md:text-2xl mb-10 opacity-90 max-w-3xl mx-auto">
              Up to <span className="font-bold text-white">40% OFF</span> on
              authentic Danish apparel, gifts & souvenirs
            </p>

            <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-12">
              <div className="bg-white/25 backdrop-blur-sm px-8 py-4 rounded-xl text-center min-w-25">
                <div className="text-3xl font-bold">{timeLeft.days}</div>
                <div className="text-sm uppercase tracking-wider">Days</div>
              </div>
              <div className="bg-white/25 backdrop-blur-sm px-8 py-4 rounded-xl text-center min-w-25">
                <div className="text-3xl font-bold">
                  {timeLeft.hours.toString().padStart(2, "0")}
                </div>
                <div className="text-sm uppercase tracking-wider">Hours</div>
              </div>
              <div className="bg-white/25 backdrop-blur-sm px-8 py-4 rounded-xl text-center min-w-25">
                <div className="text-3xl font-bold">
                  {timeLeft.minutes.toString().padStart(2, "0")}
                </div>
                <div className="text-sm uppercase tracking-wider">Minutes</div>
              </div>
            </div>

            <a
              href="#products"
              className="inline-block bg-white text-red font-bold text-lg px-10 py-5 rounded-full hover:bg-gray-100 transform hover:scale-105 transition-all shadow-xl"
            >
              Shop the Sale Now →
            </a>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        {/* Trust Signals */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 text-center">
          <div>
            <div className="text-4xl mb-3">🚚</div>
            <p className="font-bold">Free Shipping</p>
            <p className="text-sm text-gray-600">on orders over 499 DKK</p>
          </div>
          <div>
            <div className="text-4xl mb-3">↩️</div>
            <p className="font-bold">30 Days Return</p>
            <p className="text-sm text-gray-600">Hassle-free</p>
          </div>
          <div>
            <div className="text-4xl mb-3">🔒</div>
            <p className="font-bold">Secure Payment</p>
            <p className="text-sm text-gray-600">Protected checkout</p>
          </div>
          <div>
            <div className="text-4xl mb-3">⭐</div>
            <p className="font-bold">4.8+ Rating</p>
            <p className="text-sm text-gray-600">From 5000+ customers</p>
          </div>
        </div>

        {/* Products Section */}
        <div id="products" className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Campaign Highlights
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 md:gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="bg-linear-to-r from-red-50 to-red-100 rounded-3xl p-10 md:p-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Don't Miss Out!
          </h2>
          <p className="text-xl text-gray-700 mb-10 max-w-3xl mx-auto">
            All campaign prices end when the timer reaches zero. Stock is
            limited — shop now!
          </p>

          <a
            href="#"
            className="inline-block bg-[var(--color-red)] text-white font-bold text-lg px-12 py-6 rounded-full hover:bg-red-800 transform hover:scale-105 transition-all shadow-lg"
          >
            Shop All Campaign Products →
          </a>

          <p className="mt-8 text-sm text-gray-600">
            Offer valid until January 19, 2026 or while stocks last
          </p>
        </div>
      </div>
    </div>
  );
};

export default CampaignPage;
