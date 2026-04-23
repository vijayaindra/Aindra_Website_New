
import React from 'react';
import sakraLogo from '../assets/TrustedByLogo/sakra.png';
import imagesJpegLogo from '../assets/TrustedByLogo/images.jpeg';
import drMuftiLogo from '../assets/TrustedByLogo/dr-mufti.png';
import homiBabaLogo from '../assets/TrustedByLogo/Homi Baba.png';
import kleLogo from '../assets/TrustedByLogo/KLE.jpg';
import nciJhajjharLogo from '../assets/TrustedByLogo/NCI Jhajjhar.jpeg';
import msmfLogo from '../assets/TrustedByLogo/msmf.jpg';
import { sectionContainer, sectionShell } from './layout';
import { SectionEyebrow } from './SectionEyebrow';

export const TrustedInstitutionsSection: React.FC = () => {
  const partnerLogos = [
    { name: 'Sakra', src: sakraLogo },
    { name: 'ACTREC', src: imagesJpegLogo },
    { name: 'Dr Mufti', src: drMuftiLogo },
    { name: 'Homi Bhabha', src: homiBabaLogo },
    { name: 'KLE', src: kleLogo },
    { name: 'NCI Jhajjar', src: nciJhajjharLogo },
    { name: 'MSMF', src: msmfLogo }
  ];

  return (
    <section className={`relative py-14 md:py-20 ${sectionShell} bg-white overflow-hidden`}>
      <div className={sectionContainer}>
        
        {/* Header Area */}
        <div className="grid grid-cols-12 gap-4 md:gap-8 items-start mb-10 md:mb-14">
          <div className="col-span-12 lg:col-span-3 pt-1">
            <SectionEyebrow label="Partners" />
          </div>
          <div className="col-span-12 lg:col-span-9">
            <h2 className="text-2xl md:text-4xl font-medium text-slate-900 tracking-tight">
            Trusted by leading healthcare institutions
            </h2>
          </div>
        </div>

        {/* Institutions Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6 max-w-[1280px] mx-auto">
          {partnerLogos.map((item, i) => (
            <div 
              key={i} 
              className="h-32 sm:h-36 md:h-40 lg:h-44 p-1 sm:p-2 md:p-2 flex items-center justify-center overflow-hidden"
            >
              <img
                src={item.src}
                alt={item.name}
                className="w-[94%] h-[94%] object-contain object-center scale-[1.22]"
                loading="lazy"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
