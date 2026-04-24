
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
    { name: 'Sakra', src: sakraLogo, fit: 'standard' },
    { name: 'ACTREC', src: imagesJpegLogo, fit: 'wide' },
    { name: 'Dr Mufti', src: drMuftiLogo, fit: 'wide' },
    { name: 'Homi Bhabha', src: homiBabaLogo, fit: 'round' },
    { name: 'KLE', src: kleLogo, fit: 'tall' },
    { name: 'NCI Jhajjar', src: nciJhajjharLogo, fit: 'wide' },
    { name: 'MSMF', src: msmfLogo, fit: 'wide' }
  ];
  const firstRow = partnerLogos.slice(0, 4);
  const secondRow = partnerLogos.slice(4);

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

        {/* Mobile/Tablet Grid */}
        <div className="grid grid-cols-2 gap-4 sm:gap-5 md:gap-6 max-w-[1280px] mx-auto lg:hidden">
          {partnerLogos.map((item, i) => (
            <div key={i} className="h-32 sm:h-36 md:h-40 p-2 flex items-center justify-center overflow-hidden">
              <img
                src={item.src}
                alt={item.name}
                className={`w-full h-full object-contain object-center ${
                  item.fit === 'tall'
                    ? 'max-h-[96%] max-w-[68%]'
                    : item.fit === 'round'
                      ? 'max-h-[90%] max-w-[86%]'
                      : item.fit === 'wide'
                        ? 'max-h-[74%] max-w-[96%]'
                        : 'max-h-[82%] max-w-[86%]'
                }`}
                loading="lazy"
              />
            </div>
          ))}
        </div>

        {/* Desktop: 4 + 3 rows with aligned gap */}
        <div className="hidden lg:block max-w-[1280px] mx-auto">
          <div className="grid grid-cols-4 gap-6 xl:gap-8">
            {firstRow.map((item) => (
              <div key={item.name} className="h-44 p-2 flex items-center justify-center overflow-hidden">
                <img
                  src={item.src}
                  alt={item.name}
                  className={`w-full h-full object-contain object-center ${
                    item.fit === 'round'
                      ? 'max-h-[90%] max-w-[88%]'
                      : item.fit === 'wide'
                        ? 'max-h-[74%] max-w-[96%]'
                        : 'max-h-[82%] max-w-[86%]'
                  }`}
                  loading="lazy"
                />
              </div>
            ))}
          </div>

          <div className="mt-6 grid grid-cols-3 gap-6 xl:gap-8 w-3/4 mx-auto">
            {secondRow.map((item) => (
              <div key={item.name} className="h-44 p-2 flex items-center justify-center overflow-hidden">
                <img
                  src={item.src}
                  alt={item.name}
                  className={`w-full h-full object-contain object-center ${
                    item.fit === 'tall'
                      ? 'max-h-[96%] max-w-[68%]'
                      : item.fit === 'wide'
                        ? 'max-h-[74%] max-w-[96%]'
                        : 'max-h-[82%] max-w-[86%]'
                  }`}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
