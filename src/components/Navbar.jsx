import { useState } from "react";
import { Link } from "react-router";

export default function Navbar() {

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50 w-full">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="text-gray-700 hover:text-indigo-600">
              Home
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-indigo-600">
              About Me
            </Link>
            <Link to="/projects" className="text-gray-700 hover:text-indigo-600">
              Projects
            </Link>
            <Link to="/resume" className="text-gray-700 hover:text-indigo-600">
              Resume
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
