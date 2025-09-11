import React, { useState } from "react";

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavClick = (page: string, e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate(page);
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <button
                onClick={(e) => handleNavClick("home", e)}
                className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent hover:from-blue-700 hover:to-indigo-700 transition-all duration-200"
              >
                MyBlog
              </button>
            </div>
          </div>

          <nav className="hidden md:flex space-x-8">
            <button
              onClick={(e) => handleNavClick("home", e)}
              className={`transition-colors duration-200 font-medium relative group ${
                currentPage === "home"
                  ? "text-blue-600"
                  : "text-gray-600 hover:text-blue-600"
              }`}
            >
              Home
              <span
                className={`absolute -bottom-1 left-0 h-0.5 bg-blue-600 transition-all duration-200 ${
                  currentPage === "home" ? "w-full" : "w-0 group-hover:w-full"
                }`}
              ></span>
            </button>
            <button
              onClick={(e) => handleNavClick("about", e)}
              className={`transition-colors duration-200 font-medium relative group ${
                currentPage === "about"
                  ? "text-blue-600"
                  : "text-gray-600 hover:text-blue-600"
              }`}
            >
              About
              <span
                className={`absolute -bottom-1 left-0 h-0.5 bg-blue-600 transition-all duration-200 ${
                  currentPage === "about" ? "w-full" : "w-0 group-hover:w-full"
                }`}
              ></span>
            </button>
            <button
              onClick={(e) => handleNavClick("categories", e)}
              className={`transition-colors duration-200 font-medium relative group ${
                currentPage === "categories"
                  ? "text-blue-600"
                  : "text-gray-600 hover:text-blue-600"
              }`}
            >
              Categories
              <span
                className={`absolute -bottom-1 left-0 h-0.5 bg-blue-600 transition-all duration-200 ${
                  currentPage === "categories"
                    ? "w-full"
                    : "w-0 group-hover:w-full"
                }`}
              ></span>
            </button>
            <button
              onClick={(e) => handleNavClick("contact", e)}
              className={`transition-colors duration-200 font-medium relative group ${
                currentPage === "contact"
                  ? "text-blue-600"
                  : "text-gray-600 hover:text-blue-600"
              }`}
            >
              Contact
              <span
                className={`absolute -bottom-1 left-0 h-0.5 bg-blue-600 transition-all duration-200 ${
                  currentPage === "contact"
                    ? "w-full"
                    : "w-0 group-hover:w-full"
                }`}
              ></span>
            </button>
          </nav>

          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 rounded-lg text-gray-600 hover:text-blue-600 hover:bg-gray-100 transition-colors duration-200"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button
                onClick={(e) => handleNavClick("home", e)}
                className={`block w-full text-left px-3 py-2 rounded-md transition-colors duration-200 font-medium ${
                  currentPage === "home"
                    ? "text-blue-600 bg-blue-50"
                    : "text-gray-600 hover:text-blue-600 hover:bg-blue-50"
                }`}
              >
                Home
              </button>
              <button
                onClick={(e) => handleNavClick("about", e)}
                className={`block w-full text-left px-3 py-2 rounded-md transition-colors duration-200 font-medium ${
                  currentPage === "about"
                    ? "text-blue-600 bg-blue-50"
                    : "text-gray-600 hover:text-blue-600 hover:bg-blue-50"
                }`}
              >
                About
              </button>
              <button
                onClick={(e) => handleNavClick("categories", e)}
                className={`block w-full text-left px-3 py-2 rounded-md transition-colors duration-200 font-medium ${
                  currentPage === "categories"
                    ? "text-blue-600 bg-blue-50"
                    : "text-gray-600 hover:text-blue-600 hover:bg-blue-50"
                }`}
              >
                Categories
              </button>
              <button
                onClick={(e) => handleNavClick("contact", e)}
                className={`block w-full text-left px-3 py-2 rounded-md transition-colors duration-200 font-medium ${
                  currentPage === "contact"
                    ? "text-blue-600 bg-blue-50"
                    : "text-gray-600 hover:text-blue-600 hover:bg-blue-50"
                }`}
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
