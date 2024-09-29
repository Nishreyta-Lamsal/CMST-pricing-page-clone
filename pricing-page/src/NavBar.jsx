import React, { useState } from "react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="relative flex items-center py-2 px-6 bg-white border-b border-gray-200 justify-between md:justify-around">
      {/* Left: Logo and CMST */}
      <div className="flex items-center">
        <img
          src="data:image/png;base64,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"
          alt="CMST Logo"
          className="h-8 w-8"
        />
        <span className="ml-2 text-xl font-bold text-black">CMST</span>
      </div>

      {/* Hamburger Icon (Visible on Mobile) */}
      <button
        className="block md:hidden text-gray-600 focus:outline-none"
        onClick={toggleMenu}
      >
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
            strokeWidth={2}
            d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
          />
        </svg>
      </button>

      {/* Right: Links, Input fields, and Buttons (Visible on desktop) */}
      <div className="hidden md:flex items-center space-x-6">
        {/* Navigation Links */}
        <div className="flex space-x-6 text-sm">
          <a href="#" className="text-gray-600 hover:text-green-500">
            Home
          </a>
          <a href="#" className="text-gray-600 hover:text-green-500">
            Features
          </a>
          <a href="#" className="text-gray-600 hover:text-green-500">
            Pricing
          </a>
          <a href="#" className="text-gray-600 hover:text-green-500">
            Blog
          </a>
          <a href="#" className="text-gray-600 hover:text-green-500">
            Contact
          </a>
        </div>

        {/* Input Fields */}
        <div className="flex items-center space-x-2">
          {/* Email Input */}
          <div className="flex flex-col">
            <input
              type="email"
              placeholder="Email"
              className="px-3 py-2 bg-green-50 text-sm text-gray-600 border border-green-200 rounded focus:outline-none"
            />
          </div>

          {/* Password Input */}
          <div className="flex flex-col mt-[17px]">
            <div className="relative">
              <input
                type="password"
                placeholder="Password"
                className="px-3 py-2 bg-green-50 text-sm text-gray-600 border border-green-200 rounded focus:outline-none"
              />
              <button className="absolute right-2 top-2 text-gray-600">
                <i className="fas fa-eye"></i>
              </button>
            </div>
            <a
              href="#"
              className="text-xs text-blue-500 hover:underline mt-1 text-center"
            >
              Forgot password?
            </a>
          </div>
        </div>

        {/* Login and Register Buttons */}
        <button className="px-4 py-2 bg-green-500 text-white text-sm font-semibold rounded">
          Login
        </button>
        <button className="px-4 py-2 border border-blue-500 text-blue-500 text-sm font-semibold rounded">
          Register
        </button>
      </div>

      {/* Hamburger Menu Links (Visible only on mobile) */}
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } absolute top-full left-0 w-full bg-white z-50 border-t border-gray-200 shadow-lg`}
      >
        <div className="flex flex-col items-center space-y-4 py-4 text-sm">
          <a href="#" className="text-gray-600 hover:text-green-500">
            Home
          </a>
          <a href="#" className="text-gray-600 hover:text-green-500">
            Features
          </a>
          <a href="#" className="text-gray-600 hover:text-green-500">
            Pricing
          </a>
          <a href="#" className="text-gray-600 hover:text-green-500">
            Blog
          </a>
          <a href="#" className="text-gray-600 hover:text-green-500">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
