// FindShopsPage.jsx
import React from "react";
import { MapPin, Clock, Luggage, ArrowRight } from "lucide-react";

const LocateStore = () => {
  // Demo data based on the provided page structure
  // In real app, this would come from API or CMS
  const shops = [
    {
      name: "Copenhagen Souvenir & Design",
      address: "Østergade 11, 1100 København",
      hours:
        "Monday to Thursday: 10:00 - 18:00 | Friday to Sunday: 09:00 - 22:00",
      luggage:
        "Luggage storage Monday to Thursday: 10:00-18:00 | Friday till Sunday: 09:00-22:00",
      image:
        "/products/3.png",
    },
    {
      name: "Copenhagen Souvenir & Design",
      address: "Kronprinsensgade 2, 1306 København",
      hours: "10:00 - 18:00",
      luggage: "Luggage storage available",
      image:
        "/products/4.png",
    },
    {
      name: "Copenhagen Souvenir & Design",
      address: "Frederiksborggade 7, 1360 København",
      hours: "09:00 - 22:00",
      luggage: "Luggage storage available",
      image:
        "/products/5.png",
    },
    {
      name: "Copenhagen Souvenir & Design",
      address: "Frederiksborggade 23, 1459 København",
      hours:
        "Monday to Thursday: 10:00 - 18:00 | Friday till Sunday: 10:00 - 19:00",
      luggage: "Luggage storage available",
      image:
        "/products/3.png",
    },
    {
      name: "Copenhagen Souvenir & Design",
      address: "Frederiksborggade 11A, 1459 København",
      hours: "10:00 - 22:00",
      luggage: "Luggage storage 09:00 - 22:00",
      image:
        " /products/4.png",
    },
    // You can add more shops up to 19 as mentioned
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[40vh] min-h-125 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=1600&q=80"
          alt="Copenhagen colorful buildings"
          className="absolute inset-0 w-full h-full object-cover brightness-75"
        />
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-black/30 to-black/60" />

        <div className="relative h-full container mx-auto px-4 flex flex-col justify-center items-center text-center text-white">
          <div className="max-w-4xl">
            <p className="text-lg font-light tracking-wide uppercase mb-4">
              You are here: Home  Find shop
            </p>
            <h1 className="text-4xl   lg:text-6xl font-bold mb-6 leading-tight">
              Visit one of our 19 shops in
              Copenhagen
            </h1>
            <p className="text-xl md:text-2xl font-light italic mb-10">
              Find the shop closest to you
            </p>

            <a
              href="#shops"
              className="inline-flex items-center gap-3 bg-[var(--color-red)] text-white px-8 py-4 rounded-lg font-medium text-lg hover:bg-red-800 transition shadow-lg"
            >
              Find the shops
              <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Shops List */}
      <div id="shops" className="container   px-4 py-16 md:py-20">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-16 md:space-y-20">
            {shops.map((shop, index) => (
              <div
                key={index}
                className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center bg-white rounded-xl shadow-sm border border-gray overflow-hidden hover:shadow-md transition-shadow"
              >
                {/* Image */}
                <div className="h-64 md:h-full">
                  <img
                    src={shop.image}
                    alt={shop.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Info */}
                <div className="p-8 lg:p-10">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                    {shop.name}
                  </h2>

                  <div className="space-y-6">
                    <div className="flex items-start gap-3">
                      <MapPin
                        size={24}
                        className="text-red mt-1 shrink-0"
                      />
                      <div>
                        <p className="font-medium text-gray-800">
                          {shop.address}
                        </p>
                        <p className="text-gray-600 mt-1">København, Denmark</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Clock
                        size={24}
                        className="text-[var(--color-red)] mt-1 flex-shrink-0"
                      />
                      <div>
                        <p className="font-medium text-gray-800">
                          Opening hours
                        </p>
                        <p className="text-gray-600 mt-1">{shop.hours}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Luggage
                        size={24}
                        className="text-[var(--color-red)] mt-1 flex-shrink-0"
                      />
                      <div>
                        <p className="font-medium text-gray-800">
                          Luggage storage
                        </p>
                        <p className="text-gray-600 mt-1">{shop.luggage}</p>
                      </div>
                    </div>

                    <div className="pt-4">
                      <a
                        href="#"
                        className="inline-flex items-center gap-2 text-[var(--color-red)] hover:text-red-800 font-medium transition"
                      >
                        Find shop on map
                        <ArrowRight size={18} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* More shops note */}
          <div className="text-center mt-16 text-gray-600">
            <p className="text-lg">
              ...and {19 - shops.length} more locations across Copenhagen
            </p>
            <a
              href="#"
              className="mt-4 inline-block text-[var(--color-red)] hover:text-red-800 font-medium"
            >
              Show all 19 shops →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocateStore;
