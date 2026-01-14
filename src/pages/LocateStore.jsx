 
import React from "react";
import { MapPin,  ArrowRight, Mail, Phone } from "lucide-react";

const LocateStore = () => { 
  const shops = [
    {
      name: "Copenhagen Souvenir & Design",
      address: "Østergade 11, 1100 København",
      email: "hyggecotton2025@gmail.com",
      phone: "+4553713518",
      image: "/products/3.png",
    },
    {
      name: "Copenhagen Souvenir & Design",
      address: "Kronprinsensgade 2, 1306 København",
      email: "hyggecotton2025@gmail.com",
      phone: "+4553713518",
      image: "/products/4.png",
    },
    {
      name: "Copenhagen Souvenir & Design",
      address: "Frederiksborggade 7, 1360 København",
      email: "hyggecotton2025@gmail.com",
      phone: "+4553713518",
      image: "/products/5.png",
    },
    {
      name: "Copenhagen Souvenir & Design",
      address: "Frederiksborggade 23, 1459 København",
      email: "hyggecotton2025@gmail.com",
      phone: "+4553713518",
      image: "/products/3.png",
    },
    {
      name: "Copenhagen Souvenir & Design",
      address: "Frederiksborggade 11A, 1459 København",
      email: "hyggecotton2025@gmail.com",
      phone: "+4553713518",
      image: " /products/4.png",
    }, 
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
              You are here: Home Find shop
            </p>
            <h1 className="text-4xl   lg:text-6xl font-bold mb-6 leading-tight">
              Visit one of our 19 shops in Copenhagen
            </h1>
            <p className="text-xl md:text-2xl font-light italic mb-10">
              Find the shop closest to you
            </p>

            <a
              href="#shops"
              className="inline-flex items-center gap-3 bg-red text-white px-8 py-4 rounded-lg font-medium text-lg hover:bg-red-800 transition shadow-lg"
            >
              Find the shops
              <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Shops List */}
      <div id="shops" className="container   px-4 py-16 md:py-20">
        <div className=" ">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {shops.map((shop, index) => (
              <div
                key={index}
                className="grid sm:grid-cols-2 gap-8 lg:gap-12 items-center bg-white rounded-xl shadow-sm border border-gray overflow-hidden hover:shadow-md transition-shadow"
              >
                {/* Image */}
                <div className="w-full h-auto ">
                  <img
                    src={shop.image}
                    alt={shop.name}
                    className="w-75 h-full object-cover"
                  />
                </div>

                {/* Info */}
                <div className="p-8 lg:p-2 pl-0! lg:py-4">
                  <h2 className="text-2xl md:text-xl font-bold text-gray-900 mb-4">
                    {shop.name}
                  </h2>

                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <MapPin size={20} className="text-red mt-1 shrink-0" />
                      <div>
                        <p className="font-medium text-gray-800 text-sm">
                          {shop.address}
                        </p>
                        <p className="text-gray-600 mt-1 text-sm">
                          København, Denmark
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Mail size={20} className="text-red mt-1 shrink-0" />

                      <div>
                        <p className="font-medium text-gray-800 text-sm">
                          Email
                        </p>
                        <p className="text-gray-600  text-sm">{shop.email}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
 
                      <Phone size={20} className="text-red mt-1 shrink-0" />
                      <div>
                        <p className="font-medium text-gray-800 text-sm">
                          Phone
                        </p>
                        <p className="text-gray-600 text-sm">{shop.phone}</p>
                      </div>
                    </div>

                    <div className="pt-2">
                      <a
                        href="#"
                        className="inline-flex items-center gap-2 text-red hover:text-red-800 font-medium transition"
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

      
        </div>
      </div>
    </div>
  );
};

export default LocateStore;
