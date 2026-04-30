
import React, { useState } from 'react';
import hospitalImage from '../assets/Why_choose_us/Hospital.png';
import diagnosticLabImage from '../assets/Why_choose_us/Diagnostic Lab.png';
import clinicsImage from '../assets/Why_choose_us/Clinics.png';
import medEdImage from '../assets/Why_choose_us/Med Ed.png';
import { SectionEyebrow } from './SectionEyebrow';
import { sectionContainer, sectionShell } from './layout';

export const WhyChooseUsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Hospitals');
  const tabs = ['Hospitals', 'Diagnostic Labs', 'Clinics', 'MedEd'];
  const tabImages: Record<string, string> = {
    Hospitals: hospitalImage,
    'Diagnostic Labs': diagnosticLabImage,
    Clinics: clinicsImage,
    MedEd: medEdImage,
  };

  return (
    <section className={`relative py-10 md:py-12 lg:py-14 ${sectionShell} bg-white overflow-hidden`}>
      <div className={sectionContainer}>
        
        {/* Top Header Row */}
        <div className="grid grid-cols-12 gap-6 md:gap-8 items-start mb-8 md:mb-12">
          <div className="col-span-12 lg:col-span-3 pt-2">
            <SectionEyebrow label="Why Choose Us" />
          </div>
          <div className="col-span-12 lg:col-span-9">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-medium text-slate-900 leading-[1.15] md:leading-[1.1] max-w-4xl tracking-tight text-balance">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-8 lg:gap-24 items-center">
          
          {/* Left Column: Vertical Interactive Tabs */}
          <div className="col-span-12 lg:col-span-5 flex flex-col justify-center h-full order-2 lg:order-1">
            <div className="flex flex-col w-full">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`group relative flex items-center justify-between w-full py-4 md:py-6 border-b border-slate-200 transition-all duration-300 text-left`}
                >
                  <span className={`text-xl md:text-2xl font-semibold transition-all duration-300 ${activeTab === tab ? 'text-[#00a3ff]' : 'text-slate-300 group-hover:text-slate-500'}`}>
                    {tab}
                  </span>
                  
                  <div className={`flex items-center justify-center w-8 h-8 rounded-full transition-all duration-300 ${activeTab === tab ? 'bg-[#00a3ff] text-white' : 'bg-slate-200 text-white group-hover:bg-slate-300'}`}>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Right Column: Tab-specific visual */}
          <div className="col-span-12 lg:col-span-7 flex items-center justify-center lg:justify-end py-2 md:py-4 order-1 lg:order-2">
            <img
              src={tabImages[activeTab]}
              alt={`${activeTab} visual`}
              className="w-full max-w-[620px] h-auto object-contain"
            />
          </div>

        </div>
      </div>
    </section>
  );
};
