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
            In November 2021, I entered the Web3 space as a fanart artist,
            aiming to earn whitelist (WL) spots from various projects at that
            time. Through my fanart, I successfully secured WL in most of the
            projects I participated in, including Azuki, Invisible Friends,
            Moonbirds, Memeland, Hape Prime, PXN, Gangster All Star, VeeFriends,
            and more. By the end of 2022, I started receiving invitations to
            join projects as an official artist. This marked a turning point,
            signaling my full entry into the Web3 space.
          </p>
          <p className="text-gray-600 leading-relaxed text-justify mt-4">
            In 2023, with the support of founders, KOLs, and friends in the Web3
            community, I had the opportunity to expand my work. This led to the
            official establishment of SFStudio. Now, in 2024, SFStudio has grown
            to a team of about <strong>50 artists</strong>. We’ve evolved from
            focusing solely on illustrations and collections to providing OIFs,
            animations, and much more. Let’s see where we’ll be by 2030! Every
            opportunity to collaborate with you contributes to the growth of
            SFStudio. Thank you so much.
          </p>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
