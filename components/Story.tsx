import React from "react";

const StorySection: React.FC = () => {
  return (
    <section id="story" className="py-12 px-4 sm:px-6 lg:px-8 ">
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-8">
          Tripp Story
        </h2>

        {/* Content */}
        <div className=" p-6 sm:p-8 rounded-lg">
          <p className="text-gray-600 leading-relaxed text-justify">
            {`Hi, I'm Trippsoul_NFT on X, diving into the vibrant world of digital art with a focus on NFTs. I've been creating unique pieces, like my first 1/1 @y00tsNFT, and love collaborating with other artists in the space, such as@Callahan_dks and @DeadKingSociety. The community's support, like from @cryptobynight, keeps me motivated, though I've had my share of frustrations with the luck based nature of mints and the political landscape of Web3 platforms. I'm active across various blockchains, notably Solana, always looking to push the boundaries of what's possible with NFTs.`}
          </p>
          {`Outside Web3, I have worked with brands are Costa Coffe, Cola Cola, Fox Kids for their advertisment needs and new product beta designs`}
        </div>
      </div>
    </section>
  );
};

export default StorySection;
