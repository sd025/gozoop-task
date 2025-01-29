import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link to='/'>
          <div className="flex items-center">
            <img
              src={"https://adhiraj.co.in/wp-content/uploads/2021/08/Asset-4.png"}
              alt="Adhiraj Logo"
              loading="lazy"
              className="w-20 h-12"
            />
          </div>
        </Link>
        <nav className="hidden md:block">
          <ul className="flex space-x-8 text-sm font-light text-gray-400 uppercase">
            <li>
              <div className="hover:text-red-500 transition duration-300">
                New-Age Consumer
              </div>
            </li>
            <li>
              <div className="hover:text-red-500 transition duration-300">
                New-Age District
              </div>
            </li>
            <li>
              <div className="hover:text-red-500 transition duration-300">
                Ecosystem
              </div>
            </li>
            <li>
              <div className="hover:text-red-500 transition duration-300">
                Location
              </div>
            </li>
            <li>
              <div  className="hover:text-red-500 transition duration-300">
                Contact Us
              </div>
            </li>
          </ul>
        </nav>

        <button
          className="md:hidden text-black"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <ul className="flex flex-col text-black text-sm uppercase">
            <li>
              <div
                
                className="block px-4 py-2 hover:bg-red-500 hover:text-white transition duration-300"
              >
                New-Age Consumer
              </div>
            </li>
            <li>
              <div
                
                className="block px-4 py-2 hover:bg-red-500 hover:text-white transition duration-300"
              >
                New-Age District
              </div>
            </li>
            <li>
              <div
                
                className="block px-4 py-2 hover:bg-red-500 hover:text-white transition duration-300"
              >
                Ecosystem
              </div>
            </li>
            <li>
              <div
                
                className="block px-4 py-2 hover:bg-red-500 hover:text-white transition duration-300"
              >
                Location
              </div>
            </li>
            <li>
              <div
                
                className="block px-4 py-2 hover:bg-red-500 hover:text-white transition duration-300"
              >
                Contact Us
              </div>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;