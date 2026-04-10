
import React from 'react';

const ProcessFlow: React.FC = () => {
  return (
    <section className="w-full bg-[#0052CC] py-16 md:py-20 px-4 md:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        <h2 className="text-[22px] md:text-[26px] text-white font-normal mb-12 md:mb-16 tracking-tight opacity-95">
          Which step does this fall into?
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-center">
          {/* Step 1: Staining */}
          <div className="flex items-center shrink-0">
            <div className="w-24 h-24 md:w-36 md:h-36 rounded-full border border-white/40 flex items-center justify-center text-white text-[14px] md:text-[16px] font-medium transition-all duration-500 hover:border-white/70">
              Staining
            </div>
            <div className="hidden md:block w-8 lg:w-12">
              <svg width="100%" height="10" viewBox="0 0 60 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 6H58M58 6L52 1M58 6L52 11" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-40"/>
              </svg>
            </div>
          </div>

          {/* Step 2: Scanning */}
          <div className="flex items-center shrink-0">
            <div className="w-24 h-24 md:w-36 md:h-36 rounded-full border border-white/40 flex items-center justify-center text-white text-[14px] md:text-[16px] font-medium transition-all duration-500 hover:border-white/70">
              Scanning
            </div>
            <div className="hidden md:block w-8 lg:w-12">
              <svg width="100%" height="10" viewBox="0 0 60 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 6H58M58 6L52 1M58 6L52 11" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-40"/>
              </svg>
            </div>
          </div>

          {/* Step 3: Analysis (Now Standard) */}
          <div className="flex items-center shrink-0">
            <div className="w-24 h-24 md:w-36 md:h-36 rounded-full border border-white/40 flex items-center justify-center text-white text-[14px] md:text-[16px] font-medium transition-all duration-500 hover:border-white/70">
              Analysis
            </div>
            <div className="hidden md:block w-8 lg:w-12">
              <svg width="100%" height="10" viewBox="0 0 60 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 6H58M58 6L52 1M58 6L52 11" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-60"/>
              </svg>
            </div>
          </div>

          {/* Step 4: Sharing (Now Highlighted) */}
          <div className="flex items-center shrink-0">
            <div className="relative">
              {/* Pulsing glow background effect */}
              <div className="absolute inset-0 rounded-full bg-white/20 blur-3xl animate-pulse"></div>
              <div className="relative w-44 h-44 md:w-[280px] md:h-[280px] rounded-full border border-white flex items-center justify-center text-white text-[24px] md:text-[40px] font-bold z-10 bg-[#0052CC] shadow-[0_0_60px_-15px_rgba(255,255,255,0.3)] transition-transform duration-700 hover:scale-[1.02]">
                Sharing
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessFlow;
