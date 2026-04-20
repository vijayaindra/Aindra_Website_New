
import React from 'react';
import sakraLogo from '../assets/TrustedByLogo/sakra.png';
import imagesJpegLogo from '../assets/TrustedByLogo/images.jpeg';
import drMuftiLogo from '../assets/TrustedByLogo/dr-mufti.png';
import { sectionContainer, sectionShell } from './layout';

export const TrustedInstitutionsSection: React.FC = () => {
  const partnerLogos = [
    { name: 'Sakra', src: sakraLogo },
    { name: 'Partner Logo', src: imagesJpegLogo },
    { name: 'Dr Mufti', src: drMuftiLogo }
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
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {partnerLogos.map((item, i) => (
            <div 
              key={i} 
              className="h-20 sm:h-24 md:h-28 lg:h-32 flex items-center justify-center p-2"
            >
              <img
                src={item.src}
                alt={item.name}
                className={`w-auto object-contain ${
                  item.name === 'Dr Mufti'
                    ? 'max-h-24 sm:max-h-24 md:max-h-32 lg:max-h-36'
                    : 'max-h-14 sm:max-h-16 md:max-h-20 lg:max-h-24'
                }`}
                loading="lazy"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
