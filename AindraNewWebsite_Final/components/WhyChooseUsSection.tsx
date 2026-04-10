
import React, { useState } from 'react';
import imageDesign from '../assets/image_design.png';

export const WhyChooseUsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Hospitals');
  const tabs = ['Hospitals', 'Diagnostic Labs', 'Clinics', 'MedEd'];

  return (
    <section className="relative py-16 md:py-24 lg:py-28 px-4 sm:px-5 md:px-6 lg:px-6 xl:px-8 bg-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Top Header Row */}
        <div className="grid grid-cols-12 gap-6 md:gap-8 items-start mb-12 md:mb-24">
          <div className="col-span-12 lg:col-span-3 pt-2">
            <div className="flex items-center space-x-2">
               <div className="w-8 h-px bg-slate-200"></div>
               <span className="text-[10px] font-bold tracking-[0.2em] text-[#00a3ff] uppercase">Why choose us</span>
               <div className="w-2 h-2 rounded-full border border-slate-200"></div>
            </div>
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

          {/* Right Column: Exact provided image design */}
          <div className="col-span-12 lg:col-span-7 flex items-center justify-center lg:justify-end py-8 md:py-12 order-1 lg:order-2">
            <img
              src={imageDesign}
              alt="Why choose us visual design"
              className="w-full max-w-[620px] h-auto object-contain"
            />
          </div>

        </div>
      </div>
    </section>
  );
};
