import React from "react";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Studio Description */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Tripp.art</h3>
            <p className="text-gray-400">
              I take pride in my extensive expertise in digital art creation,
              including illustration, video, stickers, memes, GIFs, banners,
              logos, animation, and collections.
            </p>
          </div>

          {/* 9FSTUDIO Services */}
          <div>
            {/* <h3 className="text-2xl font-bold mb-4">9FSTUDIO Services</h3> */}
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white">
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/stories"
                  className="text-gray-400 hover:text-white"
                >
                  Stories
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-white"
                >
                  Contact us
                </Link>
              </li>
            </ul>
          </div>

          {/* Connects Section */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Connects</h3>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Tripp. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
