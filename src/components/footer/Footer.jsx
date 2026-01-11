 
import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-red text-white">
      <div className="container px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8">
          
          {/* Column 1 - Brand & Contact */}
          <div>
            <h3 className="text-xl md:text-2xl font-bold mb-4 tracking-wide">
              DANISH SOUVENIRS
            </h3>
            <p className="text-red-100/90 mb-5 text-sm md:text-base leading-relaxed">
              Your premier destination for quality Bags and T-shirts. We deliver excellence in every product.
            </p>

            <div className="space-y-3 text-sm">
              <p className="flex items-center gap-2">
                <span>📞</span> +108 8974 773223
              </p>
              <p className="flex items-center gap-2">
                <span>📧</span> info@clicshop.com
              </p>
              <p className="flex items-center gap-2">
                <span>📱</span> +108 8974 773567
              </p>
            </div>

            <div className="mt-6">
              <p className="text-sm mb-3">Follow US</p>
              <div className="flex gap-4">
                <a href="#" className="hover:text-red-200 transition-colors">FB</a>
                <a href="#" className="hover:text-red-200 transition-colors">X</a>
                <a href="#" className="hover:text-red-200 transition-colors">IG</a>
                <a href="#" className="hover:text-red-200 transition-colors">TikTok</a>
              </div>
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-5">Quick Links</h4>
            <ul className="space-y-2.5 text-red-100/90 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Shop</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Special Offers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Track Order</a></li>
            </ul>
          </div>

          {/* Column 3 - Categories */}
          <div>
            <h4 className="text-lg font-semibold mb-5">Categories</h4>
            <ul className="space-y-2.5 text-red-100/90 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Handbags</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Office / Laptop Bags</a></li>
              <li><a href="#" className="hover:text-white transition-colors">School Bags</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Polo T-Shirts</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Women's T-Shirts</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Men's Casual Bags</a></li>
            </ul>
          </div>

          {/* Column 4 - Customer Service + Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-5">Customer Service</h4>
            <ul className="space-y-2.5 text-red-100/90 text-sm mb-8">
              <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Shipping Info</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Returns & Refunds</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Support Center</a></li>
            </ul>

            <div>
              <h5 className="text-base font-medium mb-3">Newsletter</h5>
              <form className="flex">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="
                    flex-1 px-4 py-2.5 rounded-l-lg bg-gray text-black 
                    focus:outline-none focus:ring-2 focus:ring-white/30
                  "
                />
                <button
                  type="submit"
                  className="
                    bg-white text-red px-5 rounded-r-lg 
                    font-medium hover:bg-gray-100 transition-colors
                  "
                >
                  →
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Bar - Payment Methods */}
        <div className="mt-12 pt-8 border-t border-red-600/40 text-center md:text-right text-sm text-red-100/80">
          <div className="flex flex-col md:flex-row justify-center md:justify-end items-center gap-6">
            <div>PayPal • Payoneer • VISA • MasterCard</div>
          </div>
        </div>
      </div>
    </footer>
  );
}