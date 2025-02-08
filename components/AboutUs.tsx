import React from "react";

const AboutUs: React.FC = () => {
  return (
    <section id="about" className="py-12 px-4 sm:px-6 lg:px-8 bg-[#eff3f9]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          About Me
        </h2>

        <div className="flex flex-col lg:flex-row items-stretch gap-8">
          {/* Mission Section */}
          <div className=" p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex-1">
            <h3 className="text-2xl font-semibold text-gray-700 mb-4">
              Vision
            </h3>
            <p className="text-gray-600 leading-relaxed">
              I’m a digital artist specializing in Web3, with expertise in
              illustrations, videos, GIFs, stickers, logos, animation, and more.
              My goal is to become a leading figure in the space, collaborating
              with major brands to expand my reach and continue innovating in
              digital art.{" "}
              <strong className="text-gray-800">
                {`Your brand's success is our success.`}
              </strong>
            </p>
          </div>

          {/* Vision Section */}
          <div className=" p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex-1">
            <h3 className="text-2xl font-semibold text-gray-700 mb-4">
              Mission
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Your vision, my creation—together, we craft the future of art
            </p>
          </div>

          {/* Quote Section */}
          <div className=" p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 lg:max-w-xs w-full flex items-center justify-center">
            <p className="text-gray-700 italic text-center text-lg">
              {`"To elevate your brand through unique, impactful digital art that resonates with your audience."`}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
