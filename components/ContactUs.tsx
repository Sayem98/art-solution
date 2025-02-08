import React from "react";
import { FaTwitter } from "react-icons/fa"; // Import icons

const ContactUs: React.FC = () => {
  return (
    <section id="contact" className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-4">
          Are you a brand approching me? Contact me
        </h2>

        {/* Description */}
        <p className="text-gray-600 text-center mb-8">
          Got questions? Ideas? Fill out the form below to get our proposal.
        </p>

        {/* Social Links with Icons */}
        <div className="flex justify-center space-x-6 mb-8">
          <a
            href="https://x.com/Trippsoul_NFT"
            className="text-gray-600 hover:text-gray-800 transition-colors duration-200"
          >
            <FaTwitter size={24} /> {/* Twitter/X Icon */}
          </a>
        </div>

        {/* Contact Form */}
        <form className="bg-white p-6 sm:p-8 rounded-lg shadow-md">
          {/* Message Field */}
          <div className="mb-6">
            <label htmlFor="message" className="block text-gray-700 mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
              placeholder="Your message..."
              required
            />
          </div>

          {/* Name Field */}
          <div className="mb-6">
            <label htmlFor="name" className="block text-gray-700 mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
              placeholder="Your name"
              required
            />
          </div>

          {/* Email Field */}
          <div className="mb-6">
            <label htmlFor="email" className="block text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
              placeholder="name@example.com"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-gray-800 text-white py-3 px-6 rounded-lg hover:bg-gray-700 transition-colors duration-200"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
