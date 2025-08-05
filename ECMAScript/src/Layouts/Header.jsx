import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <header className="bg-white shadow">
      <nav className="max-w-screen-xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            alt="Logo"
            className="h-8"
          />
          <span className="text-xl font-bold text-blue-700">MyApp</span>
        </Link>

        {/* Menu */}
        <ul className="hidden md:flex space-x-8 font-medium text-gray-700">
          <li>
            <Link
              to="/"
              className="hover:text-blue-700 transition-colors duration-200"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/products"
              className="hover:text-blue-700 transition-colors duration-200"
            >
              List Product
            </Link>
          </li>
          <li>
            <Link
              to="/create-product"
              className="hover:text-blue-700 transition-colors duration-200"
            >
              Create Product
            </Link>
          </li>
        </ul>

        {/* Auth buttons */}
        <div className="flex items-center space-x-3">
          {!token ? (
            <>
              <Link
                to="/login"
                className="text-gray-700 hover:text-blue-700 px-4 py-2 text-sm font-medium rounded transition"
              >
                Log in
              </Link>
              <Link
                to="/register"
                className="text-gray-700 hover:text-blue-700 px-4 py-2 text-sm font-medium rounded transition"
              >
                Register
              </Link>
            </>
          ) : (
            <button
              onClick={handleLogout}
              className="bg-red-600 text-white px-4 py-2 text-sm font-medium rounded hover:bg-red-700 transition"
            >
              Logout
            </button>
          )}
        </div>
      </nav>

      {/* Mobile menu (optional, responsive) */}
      {/* You can use a mobile drawer or burger menu if needed */}
    </header>
  );
};

export default Header;
