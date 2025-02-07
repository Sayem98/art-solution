import React from "react";

const AboutUs: React.FC = () => {
  return (
    <section id="about" className="py-12 px-4 sm:px-6 lg:px-8 bg-[#eff3f9]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          About Us
        </h2>

        <div className="flex flex-col lg:flex-row items-stretch gap-8">
          {/* Mission Section */}
          <div className=" p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex-1">
            <h3 className="text-2xl font-semibold text-gray-700 mb-4">
              Mission of 9FStudio
            </h3>
            <p className="text-gray-600 leading-relaxed">
              We build your brand through custom art and video, with the motto:{" "}
              <strong className="text-gray-800">
                {`Your brand's success is our success.`}
              </strong>
            </p>
          </div>

          {/* Vision Section */}
          <div className=" p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex-1">
            <h3 className="text-2xl font-semibold text-gray-700 mb-4">
              Vision of 9FStudio
            </h3>
            <p className="text-gray-600 leading-relaxed">
              To become the leading studio in developing and implementing
              digital art in the Web3 space. We take pride in our extensive
              expertise in digital art creation, including illustration, video,
              stickers, memes, GIFs, banners, logos, animation, and collections.
            </p>
          </div>

          {/* Quote Section */}
          <div className=" p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 lg:max-w-xs w-full flex items-center justify-center">
            <p className="text-gray-700 italic text-center text-lg">
              {`"Your brand's success is our success."`}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
