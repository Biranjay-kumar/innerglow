import React, { useState, useEffect } from "react";
import LogoutButton from "./Logout";

const Navbar = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Check if token exists in localStorage
    const token = localStorage.getItem("authToken");
    setIsAuthenticated(!!token);
  }, []);

  // Toggle mobile menu
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const handleLogout = () => {
    // Clear user session (e.g., remove token from local storage)
    localStorage.removeItem("authToken");

    // Redirect to login or homepage
    window.location.href = "/signin";
  };

  return (
    <nav className="bg-gradient-to-r from-violet-600 to-indigo-600 text-white py-4 px-6 flex justify-between items-center sticky top-0 z-10">
      {/* Logo */}
      <div className="text-2xl font-bold">
        <span className="text-white">Inner</span>
        <span className="text-soft-coral">Glow</span>
      </div>

      {/* Desktop Navigation Links */}
      <div className="hidden md:flex space-x-6">
        <a href="/" className="hover:text-soft-coral">
          Home
        </a>
        <a href="/about" className="hover:text-soft-coral">
          About
        </a>
        <a href="/classes" className="hover:text-soft-coral">
          Classes
        </a>
        <a href="/contact" className="hover:text-soft-coral">
          Contact
        </a>
      </div>

      {/* Authentication Buttons (Desktop) */}
      <div className="hidden md:flex space-x-4">
        {isAuthenticated ? (
          <>
            <a
              href="/dashboard"
              className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition"
            >
              Pay
            </a>
            <a
              href="/profile"
              className="text-white py-2 px-4 rounded-lg border border-white hover:bg-white hover:text-violet-600 transition"
            >
              Profile
            </a>
            <LogoutButton onLogout={handleLogout} />
          </>
        ) : (
          <>
            <a
              href="/signin"
              className="text-white py-2 px-4 rounded-lg border border-white hover:bg-white hover:text-violet-600 transition"
            >
              Sign In
            </a>
            <a
              href="/signup"
              className="bg-soft-coral text-white py-2 px-4 rounded-lg hover:bg-soft-violet transition"
            >
              Sign Up
            </a>
          </>
        )}
      </div>

      {/* Mobile Hamburger Icon */}
      <div className="md:hidden">
        <button onClick={toggleMobileMenu} className="text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-20">
          <div className="flex justify-end p-6">
            <button onClick={toggleMobileMenu} className="text-white text-3xl">
              X
            </button>
          </div>
          <div className="flex flex-col items-center space-y-4 py-10">
            <a
              href="/"
              className="text-white text-xl hover:text-soft-coral"
              onClick={toggleMobileMenu}
            >
              Home
            </a>
            <a
              href="/about"
              className="text-white text-xl hover:text-soft-coral"
              onClick={toggleMobileMenu}
            >
              About
            </a>
            <a
              href="/classes"
              className="text-white text-xl hover:text-soft-coral"
              onClick={toggleMobileMenu}
            >
              Classes
            </a>
            <a
              href="/contact"
              className="text-white text-xl hover:text-soft-coral"
              onClick={toggleMobileMenu}
            >
              Contact
            </a>

            {isAuthenticated ? (
              <>
                <a
                  href="/pay"
                  className="text-white text-xl hover:text-soft-coral"
                  onClick={toggleMobileMenu}
                >
                  Pay
                </a>
                <a
                  href="/profile"
                  className="text-white text-xl hover:text-soft-coral"
                  onClick={toggleMobileMenu}
                >
                  Profile
                </a>
                <LogoutButton onLogout={handleLogout} />
              </>
            ) : (
              <>
                <a
                  href="/signin"
                  className="text-white text-xl hover:text-soft-coral"
                  onClick={toggleMobileMenu}
                >
                  Sign In
                </a>
                <a
                  href="/signup"
                  className="text-white text-xl hover:text-soft-coral"
                  onClick={toggleMobileMenu}
                >
                  Sign Up
                </a>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
