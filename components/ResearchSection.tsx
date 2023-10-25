// components/ResearchSection.tsx

import React from 'react';

const ResearchSection: React.FC = () => {
  return (
    <section id="research">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          Research
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Solana Blockchain
            </h1>
            <p>
                I am currently working on a project that aims to create a decentralized
                social media platform on the Solana blockchain. The project is still in its early stages
                but I am excited to see where it goes!
            </p>
            <br />
            {/* Additional content can go here */}
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">Technologies Used</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
                <p
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                >
                    Solana
                </p>
                <p
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                >
                    Rust
                </p>
                <p
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                >
                    Web3.js
                </p>
                <p
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                >
                    React.js
                </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ResearchSection;
