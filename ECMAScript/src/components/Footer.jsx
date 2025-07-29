// src/components/Footer.jsx
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-center text-gray-600 py-4 mt-10 shadow-inner">
      <div className="max-w-7xl mx-auto px-4">
        <p>&copy; {new Date().getFullYear()} TaskManager. All rights reserved.</p>
        <p className="text-sm">Made by <a href="#" className="text-blue-500 hover:underline">YourName</a></p>
      </div>
    </footer>
  );
};

export default Footer;
