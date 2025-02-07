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
          {/* <p className="text-gray-600 leading-relaxed text-justify mt-4">
            In 2023, with the support of founders, KOLs, and friends in the Web3
            community, I had the opportunity to expand my work. This led to the
            official establishment of SFStudio. Now, in 2024, SFStudio has grown
            to a team of about <strong>50 artists</strong>. We’ve evolved from
            focusing solely on illustrations and collections to providing OIFs,
            animations, and much more. Let’s see where we’ll be by 2030! Every
            opportunity to collaborate with you contributes to the growth of
            SFStudio. Thank you so much.
          </p> */}
        </div>
      </div>
    </section>
  );
};

export default StorySection;
