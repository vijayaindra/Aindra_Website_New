
import React from 'react';
import sakraLogo from '../assets/TrustedByLogo/sakra.png';
import imagesJpegLogo from '../assets/TrustedByLogo/images.jpeg';
import drMuftiLogo from '../assets/TrustedByLogo/dr-mufti.png';
import { sectionContainer, sectionShell } from './layout';

export const TrustedInstitutionsSection: React.FC = () => {
  const partnerLogos = [
    { name: 'Sakra', src: sakraLogo, imgClass: 'max-h-[90%] scale-[1.22]' },
    { name: 'ACTREC', src: imagesJpegLogo, imgClass: 'max-h-[74%] scale-[1.45]' },
    { name: 'Dr Mufti', src: drMuftiLogo, imgClass: 'max-h-[78%] scale-[1.32]' }
  ];

  return (
    <section className={`relative pt-12 pb-20 md:pb-24 ${sectionShell} bg-white overflow-hidden`}>
      <div className={sectionContainer}>
        
        {/* Header Area - Reduced margin and height */}
        <div className="flex flex-col md:flex-row md:items-center space-y-3 md:space-y-0 md:space-x-12 mb-10">
          <div className="flex items-center space-x-2">
             <div className="w-8 h-px bg-slate-200"></div>
             <span className="text-[10px] font-bold tracking-[0.2em] text-[#00a3ff] uppercase whitespace-nowrap">Partners</span>
             <div className="w-2 h-2 rounded-full border border-slate-200"></div>
          </div>
          
          <h2 className="text-2xl md:text-4xl font-medium text-slate-900 tracking-tight">
            Trusted by leading healthcare institutions
          </h2>
        </div>

        {/* Institutions Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-y-8 sm:gap-y-0 sm:gap-x-16 md:gap-x-24 lg:gap-x-32 max-w-6xl">
          {partnerLogos.map((item, i) => (
            <div 
              key={i} 
              className="h-28 sm:h-32 md:h-36 lg:h-40 flex items-center justify-center px-2"
            >
              <img
                src={item.src}
                alt={item.name}
                className={`w-auto h-auto object-contain transition-transform duration-300 ${item.imgClass}`}
                loading="lazy"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
