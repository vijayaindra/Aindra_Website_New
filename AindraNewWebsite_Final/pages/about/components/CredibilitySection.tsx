
import React from 'react';

const credibilityItems = [
  { title: "CERTIFICATIONS", description: "Our processes meet rigorous international healthcare standards including ISO 13485.", size: "large" },
  { title: "IP, PATENTS, TRADEMARKS", description: "Protected by 15+ global patents in micro-fluidics and AI diagnostic algorithms.", size: "large" },
  { title: "PUBLICATIONS", description: "Peer-reviewed research published in leading oncology and pathology journals.", size: "small" },
  { title: "CASE STUDIES", description: "Real-world impact reports from our partner healthcare institutions.", size: "small" },
  { title: "AWARDS", description: "Recognized globally for innovation in medical technology and biotech.", size: "small" }
];

const CredibilitySection: React.FC = () => {
  return (
    <section className="w-full bg-[#f0f7ff] pb-24 overflow-hidden">
      <div className="max-w-[1280px] mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row items-start mb-16 w-full px-6 md:px-10">
          {/* Section Label */}
          <div className="w-full md:w-[25%] lg:w-[20%] shrink-0 mb-6 md:mb-0">
            <div className="flex flex-col w-full">
              <span className="text-[11px] font-bold tracking-[0.2em] text-[#00AEEF] uppercase mb-2">
                CREDIBILITY
              </span>
              <div className="flex items-center w-full">
                <div className="flex-1 h-[1px] bg-gray-300"></div>
                <div className="w-[10px] h-[10px] rounded-full border border-gray-400 bg-white mr-2"></div>
              </div>
            </div>
          </div>
          
          {/* Headline */}
          <div className="flex-1 md:pl-12 lg:pr-24">
            <h2 className="text-[24px] md:text-[34px] lg:text-[42px] font-bold text-[#111827] leading-[1.2] tracking-tight">
              Our Foundation of Trust.
            </h2>
          </div>
        </div>

        {/* Grid Area */}
        <div className="px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
            {/* Top Row: 2 Large Cards */}
            {credibilityItems.filter(item => item.size === 'large').map((item, idx) => (
              <div key={idx} className="md:col-span-3 bg-white rounded-2xl p-8 md:p-10 min-h-[280px] md:min-h-[380px] shadow-sm border border-blue-50/50 flex flex-col justify-between group hover:shadow-xl transition-all duration-500">
                <div>
                  <h3 className="text-[11px] font-bold tracking-widest text-gray-400 mb-6">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-[15px] md:text-[16px] leading-relaxed max-w-sm">
                    {item.description}
                  </p>
                </div>
                <div className="flex justify-end">
                  <button className="flex items-center space-x-2 bg-[#00AEEF] hover:bg-[#0090c5] text-white px-5 py-2.5 rounded-full text-[13px] font-bold transition-all transform group-hover:translate-x-1">
                    <span>Learn more</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}

            {/* Bottom Row: 3 Smaller Cards */}
            {credibilityItems.filter(item => item.size === 'small').map((item, idx) => (
              <div key={idx} className="md:col-span-2 bg-white rounded-2xl p-8 min-h-[260px] shadow-sm border border-blue-50/50 flex flex-col justify-between group hover:shadow-xl transition-all duration-500">
                <div>
                  <h3 className="text-[11px] font-bold tracking-widest text-gray-400 mb-6">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-[14px] leading-relaxed">
                    {item.description}
                  </p>
                </div>
                <div className="flex justify-end">
                  <button className="flex items-center space-x-2 bg-[#00AEEF] hover:bg-[#0090c5] text-white px-4 py-2 rounded-full text-[12px] font-bold transition-all transform group-hover:translate-x-1">
                    <span>Learn more</span>
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CredibilitySection;
