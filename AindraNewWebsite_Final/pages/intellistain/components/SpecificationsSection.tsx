
import React from 'react';
import intellistain15Image from '../../../assets/ProductImages/IS-15.png';
import intellistain30Image from '../../../assets/ProductImages/IS-30.png';
import type { IntellistainVariant } from './Hero';

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

interface SpecificationsSectionProps {
  activeVariant?: IntellistainVariant;
}

const variantImageMap: Record<IntellistainVariant, string> = {
  IS15: intellistain15Image,
  IS30: intellistain30Image,
};

const SpecificationsSection: React.FC<SpecificationsSectionProps> = ({ activeVariant = 'IS15' }) => {
  const specificationImage = variantImageMap[activeVariant] ?? variantImageMap.IS15;

  return (
    <section className="w-full bg-white px-4 md:px-6 lg:px-8 py-20 max-w-[1400px] mx-auto animate-in fade-in duration-700">
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
          <div className="relative w-full max-w-[500px] mb-12 flex justify-center">
            <div className="relative w-full aspect-square border border-gray-200 rounded-lg bg-gray-50/30 overflow-hidden">
              <img
                src={specificationImage}
                alt={`Intellistain ${activeVariant} Device Diagram`}
                className="w-full h-full object-contain"
              />
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
