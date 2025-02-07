"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // For the hamburger and close icons

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-100 p-4 shadow-sm fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center">
          <Image
            src="/images/logo.png"
            alt="9F Studio Logo"
            width={72}
            height={72}
          />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex flex-grow justify-center space-x-10 text-gray-700 text-lg font-medium">
          <Link
            href="#clients"
            className="hover:text-black transition-colors duration-200 transform hover:scale-105"
          >
            Clients
          </Link>

          <Link
            href="#gallery"
            className="hover:text-black transition-colors duration-200 transform hover:scale-105"
          >
            Gallery
          </Link>
          <Link
            href="#about"
            className="hover:text-black transition-colors duration-200 transform hover:scale-105"
          >
            About Us
          </Link>
          <Link
            href="#story"
            className="hover:text-black transition-colors duration-200 transform hover:scale-105"
          >
            Story
          </Link>
          <Link
            href="#contact"
            className="hover:text-black transition-colors duration-200 transform hover:scale-105"
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-gray-700 focus:outline-none"
        >
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Navigation Dropdown */}
      <div
        className={`md:hidden bg-gray-100 p-4 space-y-4 text-lg font-medium shadow-md transition-all duration-300 ease-in-out ${
          isOpen ? "opacity-100 max-h-96" : "opacity-0 max-h-0 overflow-hidden"
        }`}
      >
        <Link
          href="#clients"
          className="block hover:text-black transform hover:translate-x-2 transition-transform duration-200"
          onClick={toggleMenu}
        >
          Clients
        </Link>

        <Link
          href="#gallery"
          className="block hover:text-black transform hover:translate-x-2 transition-transform duration-200"
          onClick={toggleMenu}
        >
          Gallery
        </Link>
        <Link
          href="#about"
          className="block hover:text-black transform hover:translate-x-2 transition-transform duration-200"
          onClick={toggleMenu}
        >
          About Us
        </Link>
        <Link
          href="#story"
          className="block hover:text-black transform hover:translate-x-2 transition-transform duration-200"
          onClick={toggleMenu}
        >
          Story
        </Link>
        <Link
          href="#contact"
          className="block hover:text-black transform hover:translate-x-2 transition-transform duration-200"
          onClick={toggleMenu}
        >
          Contact Us
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
