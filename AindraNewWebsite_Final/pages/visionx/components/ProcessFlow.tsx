import React from 'react';

const ProcessFlow: React.FC = () => {
  return (
    <section className="w-full bg-[#0052CC] py-16 md:py-20 px-4 md:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        <h2 className="text-[22px] md:text-[26px] text-white font-normal mb-12 md:mb-16 tracking-tight opacity-95">
          Which step does this fall into?
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-center">
          {/* Staining Step */}
          <div className="flex items-center shrink-0">
            <div className="w-24 h-24 md:w-36 md:h-36 rounded-full border border-white/40 flex items-center justify-center text-white text-[14px] md:text-[16px] font-medium transition-all duration-500">
              Staining
            </div>
            <div className="hidden md:block w-8 lg:w-12">
              <svg width="100%" height="10" viewBox="0 0 60 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 6H58M58 6L52 1M58 6L52 11" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>

          {/* Scanning Step - HIGHLIGHTED */}
          <div className="flex items-center shrink-0">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-white/10 blur-3xl animate-pulse"></div>
              <div className="relative w-44 h-44 md:w-[280px] md:h-[280px] rounded-full border border-white flex items-center justify-center text-white text-[24px] md:text-[40px] font-bold z-10 bg-[#0052CC] transition-all duration-500 scale-105 md:scale-100">
                Scanning
              </div>
            </div>
            <div className="hidden md:block w-8 lg:w-12">
              <svg width="100%" height="10" viewBox="0 0 60 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 6H58M58 6L52 1M58 6L52 11" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>

          {/* Analysis Step - STANDARD */}
          <div className="flex items-center shrink-0">
            <div className="w-24 h-24 md:w-36 md:h-36 rounded-full border border-white/40 flex items-center justify-center text-white text-[14px] md:text-[16px] font-medium transition-all duration-500">
              Analysis
            </div>
            <div className="hidden md:block w-8 lg:w-12">
              <svg width="100%" height="10" viewBox="0 0 60 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 6H58M58 6L52 1M58 6L52 11" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>

          {/* Sharing Step */}
          <div className="flex items-center shrink-0">
            <div className="w-24 h-24 md:w-36 md:h-36 rounded-full border border-white/40 flex items-center justify-center text-white text-[14px] md:text-[16px] font-medium transition-all duration-500">
              Sharing
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessFlow;