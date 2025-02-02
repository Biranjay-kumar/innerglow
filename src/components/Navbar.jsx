// Navbar.jsx
import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-violet-600 to-indigo-600 text-white py-4 px-6 flex justify-between items-center sticky top-0 z-10">
      {/* Logo */}
      <div className="text-2xl font-bold">
        <span className="text-white">Inner</span>
        <span className="text-soft-coral">Glow</span>
      </div>

      {/* Navigation Links */}
      <div className="hidden md:flex space-x-6">
        <a href="/" className="hover:text-soft-coral">Home</a>
        <a href="/about" className="hover:text-soft-coral">About</a>
        <a href="/classes" className="hover:text-soft-coral">Classes</a>
        <a href="/contact" className="hover:text-soft-coral">Contact</a>
      </div>

      {/* Authentication Buttons */}
      <div className="hidden md:flex space-x-4">
        <a href="/signin" className="text-white py-2 px-4 rounded-lg border border-white hover:bg-white hover:text-violet-600 transition">Sign In</a>
        <a href="/signup" className="bg-soft-coral text-white py-2 px-4 rounded-lg hover:bg-soft-violet transition">Sign Up</a>
      </div>

      {/* Mobile Hamburger */}
      <div className="md:hidden">
        <button className="text-white">
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
    </nav>
  );
};

export default Navbar;
