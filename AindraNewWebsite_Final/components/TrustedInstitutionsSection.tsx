
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
    { name: 'Sakra', src: sakraLogo, imgClass: 'max-h-[90%] scale-[1.22]' },
    { name: 'ACTREC', src: imagesJpegLogo, imgClass: 'max-h-[74%] scale-[1.45]' },
    { name: 'Dr Mufti', src: drMuftiLogo, imgClass: 'max-h-[78%] scale-[1.32]' },
    { name: 'Homi Bhabha', src: homiBabaLogo, imgClass: 'max-h-[82%] scale-[1.18]' },
    { name: 'KLE', src: kleLogo, imgClass: 'max-h-[82%] scale-[1.18]' },
    { name: 'NCI Jhajjar', src: nciJhajjharLogo, imgClass: 'max-h-[82%] scale-[1.16]' },
    { name: 'MSMF', src: msmfLogo, imgClass: 'max-h-[82%] scale-[1.16]' }
  ];

  return (
    <section className={`relative pt-12 pb-20 md:pb-24 ${sectionShell} bg-white overflow-hidden`}>
      <div className={sectionContainer}>
        
        {/* Header Area */}
        <div className="grid grid-cols-12 gap-4 md:gap-8 items-start mb-10 md:mb-12">
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
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-8 md:gap-x-12 gap-y-8 max-w-6xl">
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
