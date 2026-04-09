import React from 'react';

interface SpecRowProps {
  label: string;
  value: string | React.ReactNode;
}

const SpecRow: React.FC<SpecRowProps> = ({ label, value }) => (
  <div className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr] py-6 border-t border-gray-200">
    <div className="text-[15px] font-semibold text-gray-900 mb-1 md:mb-0">
      {label}
    </div>
    <div className="text-[15px] text-gray-600 font-normal">
      {value}
    </div>
  </div>
);

const SectionHeader: React.FC<{ title: string }> = ({ title }) => (
  <div className="w-full md:w-1/3 shrink-0 py-6">
    <h3 className="text-[16px] font-bold text-gray-900 tracking-tight">
      {title}
    </h3>
  </div>
);

const SpecificationsSection: React.FC = () => {
  return (
    <section className="w-full bg-white px-4 md:px-6 lg:px-8 py-20 max-w-[1280px] mx-auto animate-in fade-in duration-700">
      {/* Top Heading */}
      <div className="mb-20">
        <h2 className="text-[28px] md:text-[34px] lg:text-[40px] font-extrabold leading-[1.2] text-[#111827] tracking-[-0.015em] max-w-[1000px]">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.
        </h2>
      </div>

      {/* Physical & Environmental */}
      <div className="flex flex-col md:flex-row mb-24 gap-8">
        <SectionHeader title="Physical & Environmental" />
        <div className="flex-1 flex flex-col items-center">
          {/* Device Diagram Placeholder */}
          <div className="relative w-full max-w-[500px] mb-12 flex justify-center">
            <div className="relative border border-gray-200 rounded-lg p-10 bg-gray-50/30">
               <img 
                src="https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&q=80&w=600" 
                alt="VisionX Device Diagram" 
                className="w-full h-auto mix-blend-multiply opacity-80"
              />
              {/* Dimension indicators */}
              <div className="absolute left-full top-1/2 -translate-y-1/2 ml-4 flex flex-col items-center">
                <div className="h-32 w-[1px] bg-gray-400 relative">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-[1px] bg-gray-400"></div>
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-[1px] bg-gray-400"></div>
                </div>
                <span className="text-[12px] text-gray-400 mt-2 rotate-90">50 cm</span>
              </div>
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 flex flex-row items-center">
                 <div className="w-32 h-[1px] bg-gray-400 relative">
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 h-2 w-[1px] bg-gray-400"></div>
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 h-2 w-[1px] bg-gray-400"></div>
                </div>
                <span className="text-[12px] text-gray-400 ml-2">50 cm</span>
              </div>
            </div>
          </div>

          <div className="w-full">
            <SpecRow label="Footprint" value="42cm × 37cm × 41cm" />
            <SpecRow label="Weight" value="19 Kg" />
            <SpecRow label="Power Supply" value="Standard AC input" />
            <SpecRow label="Durability" value="Sealed optics to withstand dust and humidity" />
            <div className="border-t border-gray-200"></div>
          </div>
        </div>
      </div>

      {/* Optical & Imaging Performance */}
      <div className="flex flex-col md:flex-row mb-24 gap-8">
        <SectionHeader title="Optical & Imaging Performance" />
        <div className="flex-1">
          <SpecRow label="Resolution" value="0.5 µm/pixel" />
          <SpecRow label="Magnification" value="20x / 40x Digital Zoom equivalent." />
          <SpecRow label="Scanning Mode" value="Whole Slide Imaging (WSI) with auto-focus." />
          <SpecRow label="Objective Lens" value="High-numerical aperture optics for crystal-clear cytology & histology clarity." />
          <SpecRow label="Image Type" value="Brightfield." />
          <div className="border-t border-gray-200"></div>
        </div>
      </div>

      {/* Speed & Throughput */}
      <div className="flex flex-col md:flex-row gap-8">
        <SectionHeader title="Speed & Throughput" />
        <div className="flex-1">
          <SpecRow label="Scan Time" value="~15 Minutes" />
          <SpecRow label="Slide Capacity" value="Single Slide Feed" />
          <SpecRow label="Operation" value="Fully Automated" />
          <SpecRow label="Duty Cycle" value="Designed for continuous 24/7 operation in remote settings." />
          <div className="border-t border-gray-200"></div>
        </div>
      </div>
    </section>
  );
};

export default SpecificationsSection;