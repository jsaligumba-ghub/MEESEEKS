import React, { useState } from 'react';

const Buyy = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('0000000000000000000000000000000000000000');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative w-full min-h-auto text-teal-900 bg-gradient-to-b from-cyan-500 to-cyan-300">
      <div className="flex flex-col items-center w-full h-auto py-10">
        {/* Header Section */}
        <div className="flex flex-col items-center max-w-6xl w-full mb-10">
          <h1 className="text-6xl font-black text-center md:text-8xl text-white">BUY $MEESEEKS!</h1>
        </div>

        {/* Content Section */}
        <div className="flex flex-col gap-6 md:grid-cols-2 max-w-6xl w-full">
          {/* Card 1 */}
          <div className="flex items-center p-6 bg-white border-2 border-cyan-600 rounded-2xl shadow-lg transform transition-transform duration-300 hover:scale-105">
            <h1 className="text-4xl font-bold text-black md:text-6xl">1.</h1>
            <p className="ml-4 text-sm font-semibold text-black md:text-base">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt, recusandae numquam? Accusantium odit, earum enim deserunt voluptatem deleniti mollitia vitae ad incidunt quaerat nulla.
            </p>
          </div>

          {/* Card 2 */}
          <div className="flex items-center p-6 bg-white border-2 border-cyan-600 rounded-2xl shadow-lg transform transition-transform duration-300 hover:scale-105">
            <h1 className="text-4xl font-bold text-black md:text-6xl">2.</h1>
            <p className="ml-4 text-sm font-semibold text-black md:text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit sunt cum voluptatum. Magnam cumque consectetur nam perferendis, repellat officiis necessitatibus quis quaerat sit totam.
            </p>
          </div>

          {/* Card 3 */}
          <div className="flex items-center p-6 bg-white border-2 border-cyan-600 rounded-2xl shadow-lg transform transition-transform duration-300 hover:scale-105">
            <h1 className="text-4xl font-bold text-black md:text-6xl">3.</h1>
            <p className="ml-4 text-sm font-semibold text-black md:text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur sequi aliquid, assumenda nisi distinctio deserunt sapiente ea eos officia.
            </p>
          </div>

          {/* Card 4 */}
          <div className="flex items-center p-6 bg-white border-2 border-cyan-600 rounded-2xl shadow-lg transform transition-transform duration-300 hover:scale-105">
            <h1 className="text-4xl font-bold text-black md:text-6xl">4.</h1>
            <p className="ml-4 text-sm font-semibold text-black md:text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, rem fugit explicabo cupiditate nulla, pariatur inventore id ullam repudiandae nisi commodi.
            </p>
          </div>
          <div className="flex items-center p-6 bg-white border-2 border-cyan-600 rounded-2xl shadow-lg transform transition-transform duration-300 hover:scale-105 m-auto">
            <h1 className="text-4xl font-bold text-black md:text-6xl">5.</h1>
            <p className="ml-4 text-sm font-semibold text-black md:text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, rem fugit explicabo cupiditate nulla, pariatur inventore id ullam repudiandae nisi commodi.
            </p>
          </div>
        </div>
        </div>
    </section>
  );
};

export default Buyy;
