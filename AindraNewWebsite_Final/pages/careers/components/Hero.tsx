
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="bg-white">
      <div className="px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 pt-10 md:pt-12 pb-6">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-gray-900 mb-2">Careers</h1>
        <p className="text-base md:text-lg text-gray-700 font-normal">Precision Staining Seamlessly Scaled</p>
      </div>
      
      <div className="px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
        <hr className="border-gray-200 border-t-[1.5px] mb-8" />
      </div>

      <div className="px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 pb-12">
        <div className="relative w-full aspect-[16/8] overflow-hidden rounded-sm">
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2000" 
            alt="Aindra team collaborating and high-fiving" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
