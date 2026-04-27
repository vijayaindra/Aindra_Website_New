
import React from 'react';
import { sectionContainer, sectionShell } from '../../../components/layout';

const values = [
  {
    id: "01",
    title: "Good design means great business.",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
  },
  {
    id: "02",
    title: "Longterm positive brand image.",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
  },
  {
    id: "03",
    title: "Always top of mind for your customers.",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
  }
];

const BenefitsSection: React.FC = () => {
  return (
    <section className={`${sectionShell} w-full bg-white py-16 md:py-20 lg:py-24`}>
      <div className={sectionContainer}>
        {/* Header Section */}
        <div className="flex flex-col md:flex-row items-start mb-20 w-full">
          {/* Section Label: "OUR VALUES" positioned to the absolute left */}
          <div className="w-full md:w-[20%] shrink-0 mb-8 md:mb-0">
            <div className="flex flex-col w-full">
                <span className="text-[11px] font-bold tracking-[0.2em] text-[#00AEEF] uppercase mb-2">
                OUR VALUES
              </span>
              <div className="flex items-center w-full">
                <div className="flex-1 h-[1px] bg-gray-200"></div>
                <div className="w-[10px] h-[10px] rounded-full border border-gray-300 bg-white mr-2"></div>
              </div>
            </div>
          </div>
          
          {/* Headline */}
          <div className="flex-1 md:pl-10">
            <h2 className="text-[22px] md:text-[30px] lg:text-[38px] font-bold text-[#111827] leading-[1.2] tracking-tight max-w-[900px]">
              By partnering with great companies and brands, we create beautiful products
            </h2>
          </div>
        </div>

        {/* Values List: IDs align with "OUR VALUES" text above */}
        <div className="w-full border-t border-gray-200">
          {values.map((value) => (
            <div 
              key={value.id} 
              className="flex flex-col md:flex-row border-b border-gray-200 group hover:bg-gray-50/50 transition-colors"
            >
              {/* ID Column - Aligning with the "OUR VALUES" column */}
              <div className="w-full md:w-[20%] shrink-0 py-10 md:py-14 border-r border-gray-100/50">
                <span className="text-[16px] md:text-[20px] font-semibold text-gray-900">
                  {value.id}
                </span>
              </div>

              {/* Content Column */}
              <div className="flex-1 py-10 md:py-14 md:pl-10">
                <h3 className="text-[20px] md:text-[24px] font-bold text-gray-900 mb-5 tracking-tight">
                  {value.title}
                </h3>
                <p className="text-[14px] md:text-[15px] leading-[1.8] text-gray-500 max-w-[850px] font-normal">
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
