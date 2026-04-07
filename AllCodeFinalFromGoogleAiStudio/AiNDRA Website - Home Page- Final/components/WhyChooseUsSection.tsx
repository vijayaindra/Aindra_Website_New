
import React, { useState } from 'react';

export const WhyChooseUsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Hospitals');
  const tabs = ['Hospitals', 'Diagnostic Labs', 'Clinics', 'MedEd'];

  return (
    <section className="relative py-16 md:py-32 px-6 md:px-12 lg:px-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
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

          {/* Right Column: The Circle Grid Visualization with Responsive Scaling */}
          <div className="col-span-12 lg:col-span-7 flex items-center justify-center lg:justify-end py-8 md:py-12 order-1 lg:order-2 overflow-visible">
            <div className="relative transform origin-center scale-[0.6] sm:scale-[0.8] md:scale-90 lg:scale-100">
              <div className="grid grid-cols-4 grid-rows-4 gap-4 w-[500px]">
                
                {/* Row 1 */}
                <div className="col-span-2 row-span-1 bg-[#005bc4] rounded-full h-28 flex items-center px-6 text-white space-x-4 shadow-xl">
                   <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center">
                     <svg className="w-8 h-8" fill="white" viewBox="0 0 24 24">
                       <path d="M4 6h16V4H4v2zm0 14h16v-2H4v2zm0-4h16v-2H4v2zm0-4h16V8H4v2z" />
                       <circle cx="12" cy="12" r="3" fill="#005bc4" stroke="white" strokeWidth="2" />
                     </svg>
                   </div>
                   <span className="text-[11px] leading-tight font-medium uppercase tracking-wider">with existing LIS/HIS systems</span>
                </div>
                <div className="w-28 h-28 rounded-full border-2 border-blue-500/40"></div>
                <div className="w-28 h-28 rounded-full border-2 border-blue-500/40"></div>

                {/* Row 2 */}
                <div className="w-28 h-28 rounded-full bg-[#005bc4] flex items-center justify-center shadow-xl">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    <rect x="5" y="5" width="14" height="14" rx="1" strokeWidth="2" />
                  </svg>
                </div>
                <div className="w-28 h-28 rounded-full border-2 border-blue-500/40"></div>
                <div className="col-span-2 row-span-1 bg-[#005bc4] rounded-full h-28 flex items-center px-6 text-white space-x-4 shadow-xl">
                   <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center">
                     <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                     </svg>
                   </div>
                   <span className="text-[11px] leading-tight font-medium uppercase tracking-wider">cancer screening programs</span>
                </div>

                {/* Row 3 */}
                <div className="w-28 h-28 rounded-full border-2 border-blue-500/40"></div>
                <div className="w-28 h-28 rounded-full bg-[#005bc4] flex items-center justify-center text-center p-4 shadow-xl">
                  <span className="text-[10px] text-white leading-tight font-medium uppercase tracking-wider">Through validated algorithms</span>
                </div>
                <div className="w-28 h-28 rounded-full border-2 border-blue-500/40"></div>
                <div className="row-span-2 col-start-4 bg-[#005bc4] rounded-full w-28 h-[240px] flex flex-col items-center justify-between py-10 text-white text-center shadow-xl -mt-4">
                   <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                   </svg>
                   <span className="text-[11px] leading-tight font-medium uppercase tracking-wider px-2">Improves pathologist efficiency</span>
                </div>

                {/* Row 4 */}
                <div className="col-span-2 row-span-1 bg-[#005bc4] rounded-full h-28 flex items-center px-6 text-white space-x-4 shadow-xl">
                   <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center">
                     <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                       <circle cx="12" cy="12" r="9" strokeWidth="2" />
                       <path d="M12 7v5l3 3" strokeWidth="2" strokeLinecap="round" />
                     </svg>
                   </div>
                   <span className="text-[11px] leading-tight font-medium uppercase tracking-wider">AI assisted diagnosis</span>
                </div>
                <div className="w-28 h-28 rounded-full border-2 border-blue-500/40"></div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
