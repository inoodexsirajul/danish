// CheckoutPage.jsx
import React, { useState } from 'react';
import { ArrowLeft, CreditCard, Truck, CheckCircle } from 'lucide-react';

const CheckoutPage = () => {
  // Demo cart items (same as your cart)
  const cartItems = [
    {
      id: 1,
      name: 'Danish Butter Cookies Tin - Classic',
      price: 42.99,
      quantity: 2,
      image: 'https://images.unsplash.com/photo-1589114470366-943cd707b0a0?w=400',
      variant: '500g Tin',
    },
    {
      id: 2,
      name: 'Little Mermaid Silver Necklace',
      price: 89.50,
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400',
      variant: '18" Chain',
    },
    {
      id: 3,
      name: 'Hygge Candle - Sandalwood & Amber',
      price: 34.75,
      quantity: 3,
      image: 'https://images.unsplash.com/photo-1603006905886-9f9b0c2a4103?w=400',
      variant: 'Medium 220g',
    },
  ];

 

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = subtotal > 100 ? 0 : 12.90;
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen bg-gray py-8 px-4 sm:px-6 lg:px-8">
      <div className="container">
        {/* Header */}
        <div className="mb-8">
          <a
            href="/cart"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-[var(--color-red)] transition mb-4"
          >
            <ArrowLeft size={18} />
            Back to Cart
          </a>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">Checkout</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 xl:gap-12">
          {/* Left - Forms */}
          <div className="lg:col-span-8 space-y-10">
            {/* Contact & Shipping */}
            <section className="bg-white rounded-xl shadow-sm border border-[var(--color-gray)] p-6 sm:p-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-3">
                <Truck size={22} className="text-[var(--color-red)]" />
                Shipping Information
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-[var(--color-gray)] rounded-lg focus:ring-2 focus:ring-[var(--color-red)] focus:border-[var(--color-red)] outline-none transition"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-[var(--color-gray)] rounded-lg focus:ring-2 focus:ring-[var(--color-red)] focus:border-[var(--color-red)] outline-none transition"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div className="mt-6">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-[var(--color-gray)] rounded-lg focus:ring-2 focus:ring-[var(--color-red)] focus:border-[var(--color-red)] outline-none transition"
                  placeholder="your@email.com"
                />
              </div>

              <div className="mt-6">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 border border-[var(--color-gray)] rounded-lg focus:ring-2 focus:ring-[var(--color-red)] focus:border-[var(--color-red)] outline-none transition"
                  placeholder="+45 12 34 56 78"
                />
              </div>

              <div className="mt-8 border-t border-[var(--color-gray)] pt-6">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Shipping Address</h3>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Street Address
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-[var(--color-gray)] rounded-lg focus:ring-2 focus:ring-[var(--color-red)] focus:border-[var(--color-red)] outline-none transition"
                      placeholder="123 Main Street"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    <div className="sm:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        City
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border border-[var(--color-gray)] rounded-lg focus:ring-2 focus:ring-[var(--color-red)] focus:border-[var(--color-red)] outline-none transition"
                        placeholder="Copenhagen"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        ZIP / Postal
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border border-[var(--color-gray)] rounded-lg focus:ring-2 focus:ring-[var(--color-red)] focus:border-[var(--color-red)] outline-none transition"
                        placeholder="1050"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Country
                    </label>
                    <select className="w-full px-4 py-3 border border-[var(--color-gray)] rounded-lg focus:ring-2 focus:ring-[var(--color-red)] focus:border-[var(--color-red)] outline-none transition bg-white">
                      <option>Denmark</option>
                      <option>Sweden</option>
                      <option>Norway</option>
                      <option>Germany</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>
              </div>
            </section>

            {/* Payment */}
            <section className="bg-white rounded-xl shadow-sm border border-[var(--color-gray)] p-6 sm:p-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-3">
                <CreditCard size={22} className="text-[var(--color-red)]" />
                Payment Method
              </h2>

              <div className="space-y-4">
                <label className="flex items-center gap-3 p-4 border border-[var(--color-gray)] rounded-lg cursor-pointer hover:border-[var(--color-red)] transition">
                  <input type="radio" name="payment" defaultChecked className="w-5 h-5 text-[var(--color-red)]" />
                  <div>
                    <div className="font-medium">Credit / Debit Card</div>
                    <div className="text-sm text-gray-500">Visa, Mastercard, Maestro</div>
                  </div>
                </label>

                <label className="flex items-center gap-3 p-4 border border-[var(--color-gray)] rounded-lg cursor-pointer hover:border-[var(--color-red)] transition">
                  <input type="radio" name="payment" className="w-5 h-5 text-[var(--color-red)]" />
                  <div>
                    <div className="font-medium">MobilePay</div>
                    <div className="text-sm text-gray-500">Pay instantly via app</div>
                  </div>
                </label>

                <label className="flex items-center gap-3 p-4 border border-[var(--color-gray)] rounded-lg cursor-pointer hover:border-[var(--color-red)] transition">
                  <input type="radio" name="payment" className="w-5 h-5 text-[var(--color-red)]" />
                  <div className="font-medium">PayPal</div>
                </label>
              </div>
            </section>
          </div>

          {/* Right - Order Summary */}
          <div className="lg:col-span-4">
            <div className="bg-white rounded-xl shadow-sm border border-[var(--color-gray)] p-6 sm:p-8 sticky top-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Order Summary</h2>

              <div className="space-y-5 mb-8">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex gap-4">
                    <div className="w-16 h-16 flex-shrink-0 rounded-md overflow-hidden border border-[var(--color-gray)]">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-gray-900 line-clamp-2">{item.name}</p>
                      <p className="text-sm text-gray-500 mt-0.5">{item.variant} × {item.quantity}</p>
                      <p className="text-sm font-medium text-[var(--color-red)] mt-1">
                        €{(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-4 border-t border-[var(--color-gray)] pt-6">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span>€{subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Shipping</span>
                  <span className={shipping === 0 ? "text-green-600 font-medium" : ""}>
                    {shipping === 0 ? 'FREE' : `€${shipping.toFixed(2)}`}
                  </span>
                </div>
                <div className="flex justify-between text-lg font-bold text-gray-900 border-t border-[var(--color-gray)] pt-4">
                  <span>Total</span>
                  <span>€{total.toFixed(2)}</span>
                </div>
              </div>

              <button className="w-full mt-8 bg-[var(--color-red)] text-white py-4 rounded-lg font-medium text-lg hover:bg-red-800 transition duration-200 shadow-md flex items-center justify-center gap-2">
                <CheckCircle size={20} />
                Place Order
              </button>

              <p className="text-center text-sm text-gray-500 mt-6">
                Secure payment • 30-day returns • Encrypted checkout
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;