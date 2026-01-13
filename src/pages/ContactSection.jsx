// ContactPage.tsx
import React from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react"; // lucide-react icons (npm install lucide-react)

const ContactSection = () => {
  return (
    <div className="relative min-h-screen bg-gray-50    pt-25 pb-20 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4" style={{ color: "#283e77" }}>
            Get In Touch
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We’d love to hear from you! Whether you have a question about our
            education expo or need assistance with your study abroad journey,
            we’re here to help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left - Contact Info Cards */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-white flex gap-4 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <MapPin size={28} style={{ color: "#283e77" }} />
              </div>
              <div>
                <h3
                  className="text-2xl font-semibold mb-3"
                  style={{ color: "#283e77" }}
                >
                  Visit Us
                </h3>
                <p className="text-gray-600">
                  The Westin Dhaka
                  <br />
                  Plot-01, Road-45, Gulshan-2
                  <br />
                  Dhaka-1212, Bangladesh
                </p>
              </div>
            </div>

            <div className="bg-white flex gap-4 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <Phone size={28} style={{ color: "#283e77" }} />
              </div>
              <div>
                <h3
                  className="text-2xl font-semibold mb-3"
                  style={{ color: "#283e77" }}
                >
                  Call Us
                </h3>
                <p className="text-gray-600">
                  +880 1711-222333
                  <br />
                  +880 9613-800800
                  <br />
                  Mon - Fri: 10:00 AM - 6:00 PM
                </p>
              </div>
            </div>

            <div className="bg-white flex gap-4 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <Mail size={28} style={{ color: "#283e77" }} />
              </div>
              <div>
                <h3
                  className="text-2xl font-semibold mb-3"
                  style={{ color: "#283e77" }}
                >
                  Email Us
                </h3>
                <p className="text-gray-600">
                  info@insaf.com
                  <br />
                  australia@insaf.com
                </p>
              </div>
            </div>
          </div>

          {/* Right - Contact Form */}
          <div className="lg:col-span-2">
            <form className="bg-white p-8 rounded-2xl shadow-2xl border border-gray-100">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>

              <div className="mb-8">
                <label className="block text-gray-700 font-medium mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                  placeholder="+880 1XXXXXXXXX"
                />
              </div>

              <div className="mb-8">
                <label className="block text-gray-700 font-medium mb-2">
                  Your Message
                </label>
                <textarea
                  rows={5}
                  className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                  placeholder="Tell us how we can help you..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full md:w-auto px-10 py-4 bg-[#283e77] text-white font-semibold rounded-lg hover:bg-[#1e2f5a] transition flex items-center justify-center gap-2 shadow-lg"
              >
                <Send size={20} />
                Send Message
              </button>

              {/* Gold accent line */}
              <div className="mt-6 h-1 w-32 bg-[#c3a25d] mx-auto rounded-full"></div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
