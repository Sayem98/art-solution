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
            <h3 className="text-2xl font-bold mb-4">STUDIO</h3>
            <p className="text-gray-400">
              We take pride in our extensive expertise in digital art creation,
              including illustration, video, stickers, memes, GIFs, banners,
              logos, animation, and collections.
            </p>
          </div>

          {/* 9FSTUDIO Services */}
          <div>
            <h3 className="text-2xl font-bold mb-4">9FSTUDIO Services</h3>
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
              <li>
                <Link
                  href="/animation"
                  className="text-gray-400 hover:text-white"
                >
                  Animation
                </Link>
              </li>
              <li>
                <Link
                  href="/illustration"
                  className="text-gray-400 hover:text-white"
                >
                  Illustration
                </Link>
              </li>
              <li>
                <Link href="/comic" className="text-gray-400 hover:text-white">
                  Comic
                </Link>
              </li>
            </ul>
          </div>

          {/* Connects Section */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Connects</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/meme" className="text-gray-400 hover:text-white">
                  Meme
                </Link>
              </li>
              <li>
                <Link href="/gif" className="text-gray-400 hover:text-white">
                  GIF
                </Link>
              </li>

              <li>
                <Link
                  href="/gm-post"
                  className="text-gray-400 hover:text-white"
                >
                  GM Post
                </Link>
              </li>
              <li>
                <Link
                  href="/sticker"
                  className="text-gray-400 hover:text-white"
                >
                  Sticker
                </Link>
              </li>
              <li>
                <Link href="/banner" className="text-gray-400 hover:text-white">
                  Banner
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} 9FSTUDIO. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
