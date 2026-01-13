// ProfilePage.jsx
import React, { useState } from "react";
import {
  User,
  Package,
  MapPin,
  Settings,
  LogOut,
  Edit,
  ChevronRight,
} from "lucide-react";

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState("overview");

  // Demo user data
  const user = {
    name: "Rahim Khan",
    email: "rahim@example.com",
    phone: "+880 1712-345678",
    joinDate: "Joined January 2024",
    avatar:
      "https://media.istockphoto.com/id/2156807988/vector/simple-gray-avatar-icons-representing-male-and-female-profiles-vector-minimalist-design-with.jpg?s=612x612&w=0&k=20&c=xi7g5_9VBSWgntTZ-OQNS74d0oOvUnDGxjxUL_LdJUM=",
  };

  const orders = [
    { id: "ORD-7842", date: "12 Jan 2026", status: "Delivered", total: 168.24 },
    { id: "ORD-6519", date: "05 Dec 2025", status: "Processing", total: 89.5 },
  ];

  const tabs = [
    { id: "overview", label: "Overview", icon: User },
    { id: "orders", label: "Orders", icon: Package },
    { id: "addresses", label: "Addresses", icon: MapPin },
    { id: "settings", label: "Settings", icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-gray py-6 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        {/* Profile Header */}
        <div className="bg-white rounded-xl shadow-sm border border-[var(--color-gray)] overflow-hidden mb-8">
          <div className="p-6 sm:p-8 flex flex-col sm:flex-row items-center sm:items-start gap-6">
            <div className="relative">
              <img
                src={user.avatar}
                alt={user.name}
                className="w-24 h-24 sm:w-32 sm:h-32 rounded-full object-cover border-4 border-white shadow-md"
              />
              <button className="absolute bottom-0 right-0 bg-[var(--color-red)] text-white p-2 rounded-full shadow">
                <Edit size={16} />
              </button>
            </div>

            <div className="text-center sm:text-left">
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
                {user.name}
              </h1>
              <p className="text-gray-600 mt-1">{user.email}</p>
              <p className="text-sm text-gray-500 mt-1">{user.phone}</p>
              <p className="text-sm text-gray-500 mt-2">{user.joinDate}</p>
            </div>

            <div className="sm:ml-auto mt-4 sm:mt-0">
              <button className="flex items-center gap-2 px-5 py-2.5 bg-[var(--color-red)] text-white rounded-lg hover:bg-red-800 transition shadow-sm">
                <LogOut size={18} />
                Sign Out
              </button>
            </div>
          </div>
        </div>

        {/* Tabs Navigation */}
        <div className="bg-white rounded-xl shadow-sm border border-[var(--color-gray)] overflow-hidden">
          {/* Mobile Tabs */}
          <div className="lg:hidden border-b border-[var(--color-gray)]">
            <div className="flex overflow-x-auto">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-5 py-4 whitespace-nowrap font-medium transition-colors ${
                    activeTab === tab.id
                      ? "text-[var(--color-red)] border-b-2 border-[var(--color-red)]"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  <tab.icon size={18} />
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <div className="flex min-h-[500px]">
            {/* Desktop Sidebar */}
            <div className="hidden lg:block w-64 border-r border-[var(--color-gray)] bg-gray-50 p-4">
              <nav className="space-y-1">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition ${
                      activeTab === tab.id
                        ? "bg-white text-[var(--color-red)] shadow-sm font-medium"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    <tab.icon size={20} />
                    {tab.label}
                  </button>
                ))}
              </nav>
            </div>

            {/* Content Area */}
            <div className="flex-1 p-6 sm:p-8">
              {activeTab === "overview" && (
                <div className="space-y-8">
                  <h2 className="text-2xl font-semibold text-gray-900">
                    Account Overview
                  </h2>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="bg-gray-50 p-6 rounded-xl border border-[var(--color-gray)]">
                      <div className="text-sm text-gray-500">Total Orders</div>
                      <div className="text-3xl font-bold text-[var(--color-red)] mt-1">
                        12
                      </div>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-xl border border-[var(--color-gray)]">
                      <div className="text-sm text-gray-500">
                        Wishlist Items
                      </div>
                      <div className="text-3xl font-bold text-[var(--color-red)] mt-1">
                        8
                      </div>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-xl border border-[var(--color-gray)]">
                      <div className="text-sm text-gray-500">
                        Saved Addresses
                      </div>
                      <div className="text-3xl font-bold text-[var(--color-red)] mt-1">
                        3
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-medium mb-4">Recent Orders</h3>
                    <div className="space-y-4">
                      {orders.map((order) => (
                        <div
                          key={order.id}
                          className="flex justify-between items-center p-4 bg-white border border-[var(--color-gray)] rounded-lg hover:border-[var(--color-red)] transition"
                        >
                          <div>
                            <p className="font-medium">{order.id}</p>
                            <p className="text-sm text-gray-500">
                              {order.date}
                            </p>
                          </div>
                          <div className="text-right">
                            <p className="font-medium">
                              €{order.total.toFixed(2)}
                            </p>
                            <p className="text-sm text-green-600">
                              {order.status}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "orders" && (
                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                    My Orders
                  </h2>
                  <div className="space-y-5">
                    {orders.map((order) => (
                      <div
                        key={order.id}
                        className="p-5 border border-[var(--color-gray)] rounded-lg hover:border-[var(--color-red)] transition"
                      >
                        <div className="flex justify-between items-start">
                          <div>
                            <p className="font-medium text-lg">{order.id}</p>
                            <p className="text-sm text-gray-500 mt-1">
                              {order.date}
                            </p>
                          </div>
                          <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                            {order.status}
                          </span>
                        </div>
                        <div className="mt-4 flex justify-between items-center">
                          <span className="text-lg font-semibold text-[var(--color-red)]">
                            €{order.total.toFixed(2)}
                          </span>
                          <button className="text-[var(--color-red)] hover:underline text-sm font-medium flex items-center gap-1">
                            View Details <ChevronRight size={16} />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === "addresses" && (
                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                    My Addresses
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 border border-[var(--color-gray)] rounded-xl hover:border-[var(--color-red)] transition">
                      <div className="flex justify-between items-start">
                        <h3 className="font-medium text-lg">
                          Default Shipping Address
                        </h3>
                        <span className="px-3 py-1 bg-[var(--color-red)] text-white text-xs rounded-full">
                          DEFAULT
                        </span>
                      </div>
                      <p className="mt-3 text-gray-700">
                        Rahim Khan
                        <br />
                        House 12, Road 5, Dhanmondi
                        <br />
                        Dhaka 1205, Bangladesh
                      </p>
                      <p className="mt-2 text-sm text-gray-500">
                        +880 1712-345678
                      </p>
                    </div>

                    <div className="p-6 border border-dashed border-[var(--color-gray)] rounded-xl hover:border-[var(--color-red)] transition text-center flex flex-col items-center justify-center min-h-[180px]">
                      <button className="text-[var(--color-red)] hover:text-red-800 font-medium">
                        + Add New Address
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "settings" && (
                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                    Account Settings
                  </h2>
                  <div className="space-y-8">
                    <div>
                      <h3 className="text-lg font-medium mb-4">
                        Personal Information
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Full Name
                          </label>
                          <input
                            type="text"
                            defaultValue={user.name}
                            className="w-full px-4 py-3 border border-[var(--color-gray)] rounded-lg focus:ring-2 focus:ring-[var(--color-red)] focus:border-[var(--color-red)] outline-none"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Email
                          </label>
                          <input
                            type="email"
                            defaultValue={user.email}
                            className="w-full px-4 py-3 border border-[var(--color-gray)] rounded-lg focus:ring-2 focus:ring-[var(--color-red)] focus:border-[var(--color-red)] outline-none"
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-medium mb-4">
                        Change Password
                      </h3>
                      <div className="space-y-4 max-w-md">
                        <input
                          type="password"
                          placeholder="Current Password"
                          className="w-full px-4 py-3 border border-[var(--color-gray)] rounded-lg focus:ring-2 focus:ring-[var(--color-red)] focus:border-[var(--color-red)] outline-none"
                        />
                        <input
                          type="password"
                          placeholder="New Password"
                          className="w-full px-4 py-3 border border-[var(--color-gray)] rounded-lg focus:ring-2 focus:ring-[var(--color-red)] focus:border-[var(--color-red)] outline-none"
                        />
                        <button className="w-full bg-[var(--color-red)] text-white py-3 rounded-lg font-medium hover:bg-red-800 transition">
                          Update Password
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
