
import React from 'react';
import clustrImage from '../../../assets/ProductImages/Clustr.jpg';
import { sectionContainerWide, sectionShell } from '../../../components/layout';

const Hero: React.FC = () => {
  return (
    <section className={`${sectionShell} pt-4 pb-12`}>
      <div className={sectionContainerWide}>
        <div className="mb-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-gray-900 mb-2">Clustr</h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 font-medium">Precision Staining Seamlessly Scaled</p>
        </div>
        
        <div className="relative w-full aspect-[21/9] overflow-hidden rounded-sm shadow-xl mt-8">
          <img 
            src={clustrImage}
            alt="Histopathology cell staining" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
