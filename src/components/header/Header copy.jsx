// Header.jsx
import React, { useState } from "react";
import { ChevronDown, ChevronRight, Menu, X } from "lucide-react";
import { Link } from "react-router";
import TopHeader from "./TopHeader";
const Header = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
 const [openMenus, setOpenMenus] = useState({});
 const [showMegaMenu, setShowMegaMenu] = useState(false);

  const navItems = [
    { label: "HOME", path: "/" },
    {
      label: "PRODUCTS",
      path: "/products",
      hasMegaMenu: true,
      categories: [
        {
          title: "Danish Design",
          items: ["Furniture", "Lighting", "Textiles", "Decor", "Chairs"],
        },
        {
          title: "Souvenirs",
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
          items: ["Christmas Collection", "New Arrivals", "Easter", "Summer"],
        },
      ],
    },
    { label: "CAMPAIGN", path: "/campaign" },
    { label: "BLOG", path: "/blog" },
    { label: "LOCATE STORE", path: "/stores" },
  ];

  const hotline = "+45 55 37 13 518";

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b">
      {/* Top Header - you can create separate component if needed */}
      <TopHeader />

      <nav className="bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* DESKTOP NAVIGATION */}
          <div className="hidden lg:flex items-center justify-between h-16">
            <div className="flex items-center space-x-10">
              {navItems.map((item, index) => (
                <div
                  key={index}
                  className="relative"
                  onMouseEnter={() => item.hasMegaMenu && setShowMegaMenu(true)}
                  onMouseLeave={() => setShowMegaMenu(false)}
                >
                  <Link
                    to={item.path || "#"}
                    className={`
                      flex items-center gap-1 py-2 text-gray-800 font-medium text-sm uppercase tracking-wide
                      ${
                        item.hasMegaMenu
                          ? "cursor-default"
                          : "hover:text-red-600"
                      }
                    `}
                  >
                    {item.label}
                    {item.hasMegaMenu && (
                      <ChevronDown
                        size={16}
                        className={`transition-transform ${
                          showMegaMenu ? "rotate-180" : ""
                        }`}
                      />
                    )}
                  </Link>

                  {/* Mega Menu - শুধু ক্যাটাগরির নাম */}
                  {item.hasMegaMenu && showMegaMenu && (
                    <div
                      className="
                        absolute top-full left-0 z-50 
                        w-72 bg-white shadow-xl border-t border-gray-200 rounded-b-lg
                        py-6 px-6
                      "
                    >
                      <div className="grid grid-cols-1 gap-3">
                        {item.categories.map((cat, catIdx) => (
                          <Link
                            key={catIdx}
                            to={`/products?category=${encodeURIComponent(
                              cat.title
                            )}`}
                            className="
                              block py-2 px-3 text-gray-700 
                              hover:bg-red-50 hover:text-red-700 
                              rounded-md transition-colors
                            "
                          >
                            {cat.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Hotline - Desktop right side */}
            <div className="text-sm font-medium">
              HOTLINE:{" "}
              <span className="text-red-600 font-semibold">{hotline}</span>
            </div>
          </div>

          {/* MOBILE HEADER BAR */}
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

        {/* MOBILE ACCORDION MENU */}
        {isMobileOpen && (
          <div className="lg:hidden bg-white border-t max-h-[70vh] overflow-y-auto">
            <div className="px-4 py-3 space-y-1">
              {navItems.map((item, index) => (
                <div
                  key={index}
                  className="border-b border-gray-100 last:border-b-0"
                >
                  {item.hasMegaMenu ? (
                    <>
                      <button
                        onClick={() => toggleMenu(`main-${index}`)}
                        className="w-full flex items-center justify-between py-4 px-3 text-gray-800 font-medium hover:bg-gray-50 rounded-md"
                      >
                        <span>{item.label}</span>
                        <ChevronDown
                          size={18}
                          className={`transition-transform ${
                            openMenus[`main-${index}`] ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {openMenus[`main-${index}`] && (
                        <div className="bg-gray-50 rounded-md mb-2">
                          {item.categories.map((cat, catIndex) => (
                            <div
                              key={catIndex}
                              className="border-t border-gray-200 first:border-t-0"
                            >
                              {cat.items.some(
                                (i) => typeof i === "object" && i.sub
                              ) ? (
                                <>
                                  <button
                                    onClick={() =>
                                      toggleMenu(`cat-${index}-${catIndex}`)
                                    }
                                    className="w-full flex items-center justify-between py-3 px-6 text-gray-700 hover:bg-gray-100"
                                  >
                                    <span className="font-medium">
                                      {cat.title}
                                    </span>
                                    <ChevronRight
                                      size={16}
                                      className={`transition-transform ${
                                        openMenus[`cat-${index}-${catIndex}`]
                                          ? "rotate-90"
                                          : ""
                                      }`}
                                    />
                                  </button>

                                  {openMenus[`cat-${index}-${catIndex}`] && (
                                    <div className="bg-white py-2 px-10">
                                      {cat.items.map((subItem, subIdx) => (
                                        <div key={subIdx}>
                                          {typeof subItem === "string" ? (
                                            <Link
                                              to="#"
                                              className="block py-2 text-gray-600 hover:text-red-600"
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
                                </>
                              ) : (
                                <Link
                                  to="#"
                                  className="block py-3 px-6 text-gray-700 hover:bg-gray-100 hover:text-red-600"
                                >
                                  {cat.title}
                                </Link>
                              )}
                            </div>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      to={item.path}
                      className="block py-4 px-3 text-gray-800 font-medium hover:bg-gray-50 rounded-md"
                      onClick={() => setIsMobileOpen(false)}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}

              {/* Hotline in mobile menu */}
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
