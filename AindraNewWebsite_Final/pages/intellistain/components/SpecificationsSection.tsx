
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

interface SpecItem {
  label: string;
  value: string;
}

interface CategorySpecs {
  title: 'Physical & Environmental' | 'Staining Performance & Cost' | 'Versatility & Features';
  rows: SpecItem[];
}

const specificationData: Record<IntellistainVariant, CategorySpecs[]> = {
  IS15: [
    {
      title: 'Physical & Environmental',
      rows: [
        { label: 'Footprint', value: '44 x 50 cm' },
        { label: 'Working Space', value: 'Compact tabletop footprint designed to save laboratory space' },
        { label: 'Weight', value: 'Approx. 12.5 kg' },
        { label: 'System Type', value: 'Open system automated stainer' },
        { label: 'Operating Temperature', value: '5°C to 45°C' },
        { label: 'Relative Humidity', value: 'Max. 80%, non-condensing' },
        { label: 'Power Requirement', value: '100–240 V AC, 50–60 Hz, 250 VA' },
      ],
    },
    {
      title: 'Staining Performance & Cost',
      rows: [
        { label: 'Quality', value: 'High-quality staining with state-of-the-art mechatronics and software' },
        { label: 'Reagent Usage', value: 'Optimized reagent usage for lower consumption' },
        { label: 'Operational Costs', value: 'Designed to reduce reagent waste through optimal usage' },
        { label: 'Staining Consistency', value: 'Consistent and reliable staining for diagnostic laboratory workflows' },
      ],
    },
    {
      title: 'Versatility & Features',
      rows: [
        { label: 'Slide Compatibility', value: 'Stains biological samples mounted on glass slides' },
        { label: 'Software Control', value: 'Touch screen HMI with up to 100 programs' },
        { label: 'Design Type', value: 'Compact tabletop autostainer built for minimal lab space' },
        { label: 'Capacity', value: '15 slides' },
        { label: 'Stations', value: '20 total stations' },
        { label: 'Load/Unload Stations', value: '1' },
        { label: 'Reagent Cuvette Volume', value: '180 ml (80 + 100 ml)' },
      ],
    },
  ],
  IS30: [
    {
      title: 'Physical & Environmental',
      rows: [
        { label: 'Footprint', value: '55 x 59 cm' },
        { label: 'Working Space', value: 'Compact tabletop footprint designed to save laboratory space' },
        { label: 'Weight', value: 'Approx. 16 kg' },
        { label: 'System Type', value: 'Open system automated stainer' },
        { label: 'Operating Temperature', value: '5°C to 45°C' },
        { label: 'Relative Humidity', value: 'Max. 80%, non-condensing' },
        { label: 'Power Requirement', value: '100–240 V AC, 50–60 Hz, 250 VA' },
      ],
    },
    {
      title: 'Staining Performance & Cost',
      rows: [
        { label: 'Quality', value: 'High-quality staining with state-of-the-art mechatronics and software' },
        { label: 'Reagent Usage', value: 'Optimized reagent usage for lower consumption' },
        { label: 'Operational Costs', value: 'Designed to reduce reagent waste through optimal usage' },
        { label: 'Staining Consistency', value: 'Consistent and reliable staining for diagnostic laboratory workflows' },
      ],
    },
    {
      title: 'Versatility & Features',
      rows: [
        { label: 'Slide Compatibility', value: 'Stains biological samples mounted on glass slides' },
        { label: 'Software Control', value: 'Touch screen HMI with up to 100 programs' },
        { label: 'Design Type', value: 'Compact tabletop autostainer built for minimal lab space' },
        { label: 'Capacity', value: '30 slides' },
        { label: 'Stations', value: '20 total stations' },
        { label: 'Load/Unload Stations', value: '1' },
        { label: 'Reagent Cuvette Volume', value: '320 ml (140 + 180 ml)' },
      ],
    },
  ],
};

const SpecificationsSection: React.FC<SpecificationsSectionProps> = ({ activeVariant = 'IS15' }) => {
  const specificationImage = variantImageMap[activeVariant] ?? variantImageMap.IS15;
  const specs = specificationData[activeVariant] ?? specificationData.IS15;
  const physicalEnvironmental = specs[0];
  const stainingPerformance = specs[1];
  const versatilityFeatures = specs[2];

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
        <SectionHeader title={physicalEnvironmental.title} />
        <div className="flex-1 flex flex-col items-center">
          <div className="relative w-full max-w-[500px] mb-12 flex justify-center">
            <div className="relative w-full aspect-square border border-gray-200 rounded-lg bg-gray-50/30 overflow-hidden">
              <img
                src={specificationImage}
                alt={`Intellistain ${activeVariant} Device Diagram`}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="pointer-events-none absolute -right-12 top-1/2 hidden -translate-y-1/2 md:flex flex-col items-center">
              <div className="relative h-44 w-3 md:h-52">
                <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gray-400" />
                <div className="absolute -top-[1px] left-1/2 h-0 w-0 -translate-x-1/2 border-x-[3px] border-b-[6px] border-x-transparent border-b-gray-400" />
                <div className="absolute -bottom-[1px] left-1/2 h-0 w-0 -translate-x-1/2 border-x-[3px] border-t-[6px] border-x-transparent border-t-gray-400" />
              </div>
              <span className="mt-2 inline-block whitespace-nowrap text-[12px] leading-none text-gray-400 [writing-mode:vertical-rl]">
                1.5ft
              </span>
            </div>
            <div className="pointer-events-none absolute -bottom-9 left-1/2 hidden -translate-x-1/2 md:flex items-center">
              <div className="relative h-3 w-44 md:w-52">
                <div className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-gray-400" />
                <div className="absolute left-0 top-1/2 h-0 w-0 -translate-y-1/2 border-y-[3px] border-r-[6px] border-y-transparent border-r-gray-400" />
                <div className="absolute right-0 top-1/2 h-0 w-0 -translate-y-1/2 border-y-[3px] border-l-[6px] border-y-transparent border-l-gray-400" />
              </div>
              <span className="ml-2 whitespace-nowrap text-[12px] text-gray-400">1.5ft</span>
            </div>
          </div>

          <div className="w-full">
            {physicalEnvironmental.rows.map((item) => (
              <SpecRow key={item.label} label={item.label} value={item.value} />
            ))}
            <div className="border-t border-gray-200"></div>
          </div>
        </div>
      </div>

      {/* Staining Performance & Cost */}
      <div className="flex flex-col md:flex-row mb-24 gap-8">
        <SectionHeader title={stainingPerformance.title} />
        <div className="flex-1">
          {stainingPerformance.rows.map((item) => (
            <SpecRow key={item.label} label={item.label} value={item.value} />
          ))}
          <div className="border-t border-gray-200"></div>
        </div>
      </div>

      {/* Versatility & Features */}
      <div className="flex flex-col md:flex-row gap-8">
        <SectionHeader title={versatilityFeatures.title} />
        <div className="flex-1">
          {versatilityFeatures.rows.map((item) => (
            <SpecRow key={item.label} label={item.label} value={item.value} />
          ))}
          <div className="border-t border-gray-200"></div>
        </div>
      </div>
    </section>
  );
};

export default SpecificationsSection;
