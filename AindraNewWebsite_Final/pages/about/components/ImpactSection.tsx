
import React from 'react';
import { sectionContainer, sectionShell } from '../../../components/layout';
import worldMap from '../../../assets/Aindra_team/WorldMap.png';
import { SectionEyebrow } from '../../../components/SectionEyebrow';

const stats = [
  {
    value: "10+",
    label: "Healthcare institutions",
    subLabel: "served"
  },
  {
    value: "100+",
    label: "Pathology slides",
    subLabel: "processed"
  },
  {
    value: "5+",
    label: "Cities",
    subLabel: "deployed"
  },
  {
    value: "12+",
    label: "Public health",
    subLabel: "programs supported"
  }
];

const ImpactSection: React.FC = () => {
  return (
    <section className={`${sectionShell} w-full bg-white py-16 md:py-20 lg:py-24 overflow-hidden`}>
      <div className={sectionContainer}>
        {/* Header Section */}
        <div className="flex flex-col md:flex-row items-start mb-16 w-full">
          {/* Section Label */}
          <div className="w-[120px] md:w-[160px] shrink-0 mr-6 md:mr-10 mb-8 md:mb-0">
            <SectionEyebrow label="Our Impact" />
          </div>
          
          {/* Headline */}
          <div className="flex-1 md:pl-10">
            <h2 className="text-[28px] md:text-[34px] lg:text-[40px] font-extrabold text-[#111827] leading-[1.2] tracking-[-0.015em] max-w-[1000px]">
              Democratizing healthcare by making precision diagnostics accessible globally.
            </h2>
          </div>
        </div>

        {/* Map Visualization */}
        <div className="w-full mb-24">
          <div className="mx-auto w-full max-w-[1520px]">
            <img
              src={worldMap}
              alt="Global impact map"
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Stats Grid */}
        <div className="w-full border-t border-gray-100">
          <div className="mx-auto w-full max-w-[1520px] py-16">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="flex flex-col items-center text-center relative">
                  {/* Vertical Divider for desktop */}
                  {index !== 0 && (
                    <div className="hidden lg:block absolute left-[-40px] top-0 bottom-0 w-[1px] bg-gray-200"></div>
                  )}
                  
                  <div className="flex items-baseline justify-center space-x-1 mb-2">
                    <span className="text-[48px] md:text-[56px] font-bold text-[#00AEEF] tracking-tighter leading-none">
                      {stat.value}
                    </span>
                  </div>
                  
                  <div className="flex flex-col items-center">
                    <span className="text-[14px] md:text-[16px] font-semibold text-gray-900 leading-tight">
                      {stat.label}
                    </span>
                    <span className="text-[14px] md:text-[16px] font-normal text-gray-500">
                      {stat.subLabel}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
