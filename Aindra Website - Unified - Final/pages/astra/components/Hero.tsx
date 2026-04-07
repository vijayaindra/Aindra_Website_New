import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 pt-4 pb-12">
      <div className="mb-6">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-gray-900 mb-2">Astra</h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-600 font-medium">Precision Staining Seamlessly Scaled</p>
      </div>
      
      <div className="relative w-full aspect-[21/9] overflow-hidden rounded-sm shadow-xl mt-8">
        <img 
          src="https://picsum.photos/id/111/1600/600" 
          alt="Histopathology cell staining" 
          className="w-full h-full object-cover grayscale-[0.2] contrast-125"
          style={{ filter: 'hue-rotate(300deg) saturate(1.5)' }} 
        />
        <div className="absolute inset-0 bg-pink-500/10 mix-blend-multiply pointer-events-none"></div>
      </div>
    </section>
  );
};

export default Hero;
