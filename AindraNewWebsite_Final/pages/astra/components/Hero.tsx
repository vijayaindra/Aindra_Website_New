import React from 'react';
import astraImage from '../../../assets/ProductImages/Astra.png';
import { sectionContainerWide, sectionShell } from '../../../components/layout';

const Hero: React.FC = () => {
  return (
    <section className={`${sectionShell} pt-4 pb-12`}>
      <div className={sectionContainerWide}>
        <div className="mb-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-gray-900 mb-2">Astra</h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 font-medium">Precision Staining Seamlessly Scaled</p>
        </div>
        
        <div className="relative w-full overflow-hidden rounded-sm shadow-xl mt-8">
          <img 
            src={astraImage}
            alt="Histopathology cell staining" 
            className="w-full h-auto object-contain object-center"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
