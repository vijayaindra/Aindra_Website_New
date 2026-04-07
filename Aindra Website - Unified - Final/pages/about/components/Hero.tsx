
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 pt-4 pb-14 md:pb-20">
      <div className="mb-6">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-gray-900 mb-2">About us</h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-600 font-medium mb-6">Precision Staining Seamlessly Scaled</p>
        <hr className="border-gray-200" />
      </div>
      
      <div className="relative w-full aspect-[21/9] overflow-hidden rounded-sm shadow-lg mt-8 mb-24">
        <img 
          src="https://images.unsplash.com/photo-1579154234431-da711f1ae5f1?auto=format&fit=crop&q=80&w=1600" 
          alt="Scientific research team in lab" 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="w-full text-center px-0 md:px-2 mb-16 md:mb-20">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="text-[22px] md:text-[30px] lg:text-[38px] font-bold text-[#00AEEF] leading-[1.3] mb-12 tracking-tight">
            "Our mission is to democratize healthcare by making medical imaging accessible to everyone around the world."
          </h2>
          <div className="flex flex-col items-end pr-4 md:pr-10">
            <p className="text-gray-600 text-lg md:text-xl font-semibold">
              — Adarsh Natrajan
            </p>
            <p className="text-gray-400 text-base md:text-lg">
              Founder, Aindra Systems
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
