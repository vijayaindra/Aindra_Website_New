
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
    <section className="w-full bg-white px-6 md:px-16 py-20 max-w-[1440px] mx-auto animate-in fade-in duration-700">
      {/* Top Heading */}
      <div className="mb-20">
        <h2 className="text-[28px] md:text-[34px] lg:text-[40px] font-extrabold leading-[1.2] text-[#111827] tracking-[-0.015em] max-w-[1000px]">
          Intellistain: A Class Apart. Precision mechatronics and intelligent design for the modern diagnostic laboratory.
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
                alt="Intellistain Device Diagram" 
                className="w-full h-auto mix-blend-multiply opacity-80"
              />
              {/* Dimension indicators matching brochure Page 4 */}
              <div className="absolute left-full top-1/2 -translate-y-1/2 ml-4 flex flex-col items-center">
                <div className="h-32 w-[1px] bg-gray-400 relative">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-[1px] bg-gray-400"></div>
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-[1px] bg-gray-400"></div>
                </div>
                <span className="text-[12px] text-gray-400 mt-2 rotate-90">1.5 ft</span>
              </div>
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 flex flex-row items-center">
                 <div className="w-32 h-[1px] bg-gray-400 relative">
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 h-2 w-[1px] bg-gray-400"></div>
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 h-2 w-[1px] bg-gray-400"></div>
                </div>
                <span className="text-[12px] text-gray-400 ml-2">1.5 ft</span>
              </div>
            </div>
          </div>

          <div className="w-full">
            <SpecRow label="Footprint" value="18 inches × 18 inches" />
            <SpecRow label="Working Space" value="1.5ft × 1.5ft average" />
            <SpecRow label="Weight" value="10 - 14 kg" />
            <SpecRow label="System Type" value="Open System" />
            <div className="border-t border-gray-200"></div>
          </div>
        </div>
      </div>

      {/* Staining Performance & Cost */}
      <div className="flex flex-col md:flex-row mb-24 gap-8">
        <SectionHeader title="Staining Performance & Cost" />
        <div className="flex-1">
          <SpecRow label="Quality" value="Good (Diagnostic Grade)" />
          <SpecRow label="Reagent Usage" value="180 - 240 ml (Optimized Efficiency)" />
          <SpecRow label="Muck free Staining" value="No" />
          <SpecRow label="Operational Costs" value="Optimized through intelligent trough design; troughs can be filled to half capacity for smaller slide loads." />
          <SpecRow label="Slide Agitation" value="Special mechatronics enable periodic agitation of slides in reagents for unparalleled staining clarity." />
          <div className="border-t border-gray-200"></div>
        </div>
      </div>

      {/* Versatility & Features */}
      <div className="flex flex-col md:flex-row gap-8">
        <SectionHeader title="Versatility & Features" />
        <div className="flex-1">
          <SpecRow label="Slide Compatibility" value="Stains all Histology and Cytology slides." />
          <SpecRow label="Software Control" value="User-friendly software via touch screen; allows creating any number of custom staining programs." />
          <SpecRow label="Design Type" value="Small tabletop autostainer designed to occupy minimal lab space compared to bulky incumbent systems." />
          <SpecRow label="Pricing" value="Affordable and flexible pricing packages to support the Digital Pathology revolution." />
          <div className="border-t border-gray-200"></div>
        </div>
      </div>
    </section>
  );
};

export default SpecificationsSection;
