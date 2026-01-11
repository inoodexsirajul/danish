// Header.jsx
import React, { useState } from "react";
import {
  ChevronDown,
  ChevronRight,
  Menu,
  X,
  Home,
  ShoppingBag,
  Gift,
  Gem,
  Calendar,
} from "lucide-react";
import { Link } from "react-router";
import TopHeader from "./TopHeader"; // assuming you have this component

const Header = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null); // for desktop hover
  const [openMobileMenus, setOpenMobileMenus] = useState({}); // for mobile accordion

  const navItems = [
    { label: "HOME", path: "/", icon: Home },
    {
      label: "PRODUCTS",
      path: "/products",
      hasMegaMenu: true,
      icon: ShoppingBag,
      categories: [
        {
          title: "Danish Design",
          icon: Gift,
          items: ["Furniture", "Lighting", "Textiles", "Decor", "Chairs"],
        },
        {
          title: "Souvenirs",
          icon: Gift,
          items: [
            {
              name: "Classic",
              sub: [
                "Little Mermaid",
                "Troll Figures",
                "Viking Items",
                "Hans Christian Andersen",
              ],
            },
            { name: "Modern" },
            {
              name: "Food Related",
              sub: ["Butter Cookies Tin", "Smørrebrød Tools"],
            },
          ],
        },
        {
          title: "Jewelry",
          icon: Gem,
          items: [
            "Silver",
            "Amber",
            "Danish Design Jewelry",
            "Necklaces",
            "Rings",
          ],
        },
        {
          title: "Seasonal",
          icon: Calendar,
          items: ["Christmas Collection", "New Arrivals", "Easter", "Summer"],
        },
      ],
    },
    { label: "CAMPAIGN", path: "/campaign", icon: null },
    { label: "BLOG", path: "/blog", icon: null },
    { label: "LOCATE STORE", path: "/stores", icon: null },
  ];

  const hotline = "+45 55 37 13 518";

  const toggleMobileMenu = (key) => {
    setOpenMobileMenus((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b">
      <TopHeader />

      <nav className="bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* ====================== */}
          {/*     DESKTOP VERSION     */}
          {/* ====================== */}
          <div className="hidden lg:flex items-center justify-between h-16">
            <div className="flex items-center space-x-10">
              {navItems.map((item, index) => (
                <div
                  key={index}
                  className="relative group"
                  onMouseEnter={() => {
                    if (item.hasMegaMenu) {
                      setActiveCategory(item.categories[0]?.title || null);
                    }
                  }}
                  onMouseLeave={() => setActiveCategory(null)}
                >
                  <Link
                    to={item.path || "#"}
                    className={`
                      flex items-center gap-2 py-2 text-gray-800 font-medium text-sm uppercase tracking-wide
                      ${
                        item.hasMegaMenu
                          ? "cursor-default"
                          : "hover:text-red-600"
                      }
                    `}
                  >
                    {item.icon && <item.icon size={18} />}
                    {item.label}
                    {item.hasMegaMenu && (
                      <ChevronDown
                        size={16}
                        className="transition-transform group-hover:rotate-180"
                      />
                    )}
                  </Link>

                  {/* Mega Menu */}
                  {item.hasMegaMenu && activeCategory && (
                    <div
                      className="
                        absolute top-full left-0 z-50 
                        w-[900px] bg-white shadow-2xl border-t border-gray-200 rounded-b-lg
                        grid grid-cols-12 gap-0 overflow-hidden
                      "
                    >
                      {/* Left - Categories list */}
                      <div className="col-span-4 bg-gray-50 py-6 px-4">
                        {item.categories.map((cat) => (
                          <div
                            key={cat.title}
                            className={`
                              flex items-center gap-3 py-3 px-4 cursor-pointer rounded-md transition-colors
                              ${
                                activeCategory === cat.title
                                  ? "bg-white text-red-600 font-medium shadow-sm"
                                  : "hover:bg-white text-gray-700"
                              }
                            `}
                            onMouseEnter={() => setActiveCategory(cat.title)}
                          >
                            {cat.icon && <cat.icon size={18} />}
                            {cat.title}
                          </div>
                        ))}
                      </div>

                      {/* Right - Subcategories & Children */}
                      <div className="col-span-8 py-6 px-8">
                        {item.categories.find((c) => c.title === activeCategory)
                          ?.items && (
                          <div className="grid grid-cols-2 gap-6">
                            {item.categories
                              .find((c) => c.title === activeCategory)
                              .items.map((subItem, idx) => (
                                <div key={idx}>
                                  {typeof subItem === "string" ? (
                                    <Link
                                      to="#"
                                      className="block py-2 text-gray-700 hover:text-red-600 transition-colors"
                                    >
                                      {subItem}
                                    </Link>
                                  ) : (
                                    <>
                                      <div className="font-medium text-gray-900 mb-2">
                                        {subItem.name}
                                      </div>
                                      {subItem.sub?.map((child, childIdx) => (
                                        <Link
                                          key={childIdx}
                                          to="#"
                                          className="block py-1.5 text-gray-600 hover:text-red-600 text-sm pl-3"
                                        >
                                          {child}
                                        </Link>
                                      ))}
                                    </>
                                  )}
                                </div>
                              ))}
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Hotline */}
            <div className="text-sm font-medium">
              HOTLINE:{" "}
              <span className="text-red-600 font-semibold">{hotline}</span>
            </div>
          </div>

          {/* ====================== */}
          {/*      MOBILE VERSION     */}
          {/* ====================== */}
          <div className="lg:hidden flex items-center justify-between h-14">
            <div className="font-bold text-xl tracking-tight">
              DANISH SOUVENIRS
            </div>
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="p-2 rounded-md hover:bg-gray-100"
            >
              {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Mega Menu / Accordion */}
        {isMobileOpen && (
          <div className="lg:hidden bg-white border-t max-h-[75vh] overflow-y-auto">
            <div className="px-4 py-3 space-y-1">
              {navItems.map((item, index) => (
                <div
                  key={index}
                  className="border-b border-gray-100 last:border-b-0"
                >
                  {item.hasMegaMenu ? (
                    <>
                      {/* Main Products button */}
                      <button
                        onClick={() => toggleMobileMenu(`main-${index}`)}
                        className="w-full flex items-center justify-between py-4 px-3 text-gray-800 font-medium hover:bg-gray-50 rounded-md"
                      >
                        <div className="flex items-center gap-3">
                          {item.icon && <item.icon size={20} />}
                          <span>{item.label}</span>
                        </div>
                        <ChevronDown
                          size={18}
                          className={`transition-transform ${
                            openMobileMenus[`main-${index}`] ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {/* Categories Accordion */}
                      {openMobileMenus[`main-${index}`] && (
                        <div className="bg-gray-50 rounded-md mb-2">
                          {item.categories.map((cat, catIndex) => (
                            <div
                              key={cat.title}
                              className="border-t border-gray-200 first:border-t-0"
                            >
                              <button
                                onClick={() =>
                                  toggleMobileMenu(`cat-${index}-${catIndex}`)
                                }
                                className="w-full flex items-center justify-between py-3 px-6 text-gray-700 hover:bg-gray-100"
                              >
                                <div className="flex items-center gap-3">
                                  {cat.icon && <cat.icon size={18} />}
                                  <span className="font-medium">
                                    {cat.title}
                                  </span>
                                </div>
                                <ChevronRight
                                  size={16}
                                  className={`transition-transform ${
                                    openMobileMenus[`cat-${index}-${catIndex}`]
                                      ? "rotate-90"
                                      : ""
                                  }`}
                                />
                              </button>

                              {/* Sub items */}
                              {openMobileMenus[`cat-${index}-${catIndex}`] && (
                                <div className="bg-white py-2 px-10">
                                  {cat.items.map((subItem, subIdx) => (
                                    <div key={subIdx}>
                                      {typeof subItem === "string" ? (
                                        <Link
                                          to="#"
                                          className="block py-2 text-gray-600 hover:text-red-600"
                                          onClick={() => setIsMobileOpen(false)}
                                        >
                                          {subItem}
                                        </Link>
                                      ) : (
                                        <>
                                          <div className="font-medium text-gray-800 py-2">
                                            {subItem.name}
                                          </div>
                                          {subItem.sub?.map(
                                            (child, childIdx) => (
                                              <Link
                                                key={childIdx}
                                                to="#"
                                                className="block py-1.5 pl-4 text-gray-600 hover:text-red-600 text-sm"
                                                onClick={() =>
                                                  setIsMobileOpen(false)
                                                }
                                              >
                                                {child}
                                              </Link>
                                            )
                                          )}
                                        </>
                                      )}
                                    </div>
                                  ))}
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      to={item.path || "#"}
                      className="flex items-center gap-3 py-4 px-3 text-gray-800 font-medium hover:bg-gray-50 rounded-md"
                      onClick={() => setIsMobileOpen(false)}
                    >
                      {item.icon && <item.icon size={20} />}
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}

              {/* Hotline */}
              <div className="mt-6 pt-4 border-t border-gray-200 text-center py-3">
                <p className="text-sm text-gray-600">
                  HOTLINE:{" "}
                  <span className="font-semibold text-red-600">{hotline}</span>
                </p>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
