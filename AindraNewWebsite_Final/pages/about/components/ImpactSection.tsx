
import React from 'react';
import { sectionContainer, sectionShell } from '../../../components/layout';
import imageDesign from '../../../assets/image_design.png';

const stats = [
  {
    value: "100+",
    label: "Healthcare institutions",
    subLabel: "served"
  },
  {
    value: "10M+",
    label: "Pathology slides",
    subLabel: "processed"
  },
  {
    value: "25+",
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
          <div className="w-full md:w-[25%] lg:w-[20%] shrink-0 mb-8 md:mb-0">
            <div className="flex flex-col w-full">
              <span className="text-[11px] font-bold tracking-[0.2em] text-[#00AEEF] uppercase mb-2 pl-6 md:pl-10">
                OUR IMPACT
              </span>
              <div className="flex items-center w-full">
                <div className="flex-1 h-[1px] bg-gray-200"></div>
                <div className="w-[10px] h-[10px] rounded-full border border-gray-300 bg-white mr-2"></div>
              </div>
            </div>
          </div>
          
          {/* Headline */}
          <div className="flex-1 px-6 md:px-12 lg:pr-24 md:pl-8">
            <h2 className="text-[22px] md:text-[30px] lg:text-[38px] font-bold text-[#111827] leading-[1.2] tracking-tight max-w-[900px]">
              Democratizing healthcare by making precision diagnostics accessible globally.
            </h2>
          </div>
        </div>

        {/* Map Visualization */}
        <div className="w-full mb-24">
          <div className="relative mx-auto w-full max-w-[1520px] group">
            <img
              src={imageDesign}
              alt="Global impact map"
              className="w-full h-auto opacity-20 grayscale transition-opacity duration-700 group-hover:opacity-30"
            />
            {/* Custom SVG Overlay for the highlighted effect from the image */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-full h-full bg-blue-500/5 mix-blend-multiply rounded-3xl"></div>
              <p className="absolute bottom-4 left-4 text-[10px] text-gray-400 font-medium tracking-widest uppercase">
                Aindra Global Deployment Network v4.2
              </p>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="w-full border-t border-gray-100">
          <div className="mx-auto w-full max-w-[1520px] py-16">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="flex flex-col items-start relative">
                  {/* Vertical Divider for desktop */}
                  {index !== 0 && (
                    <div className="hidden lg:block absolute left-[-40px] top-0 bottom-0 w-[1px] bg-gray-200"></div>
                  )}
                  
                  <div className="flex items-baseline space-x-1 mb-2">
                    <span className="text-[48px] md:text-[56px] font-bold text-[#00AEEF] tracking-tighter leading-none">
                      {stat.value}
                    </span>
                  </div>
                  
                  <div className="flex flex-col">
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
