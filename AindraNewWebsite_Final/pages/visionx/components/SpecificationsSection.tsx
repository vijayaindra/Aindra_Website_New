import React from 'react';
import visionX1Image from '../../../assets/ProductImages/VisionX2 (1).png';
import visionX6Image from '../../../assets/ProductImages/VX6.png';
import visionXFImage from '../../../assets/ProductImages/FWSI.jpg';
import type { VisionXVariant } from './Hero';

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
  activeVariant?: VisionXVariant;
}

const variantImageMap: Record<VisionXVariant, { src: string; softenBackground: boolean }> = {
  VX1: { src: visionX1Image, softenBackground: false },
  VX6: { src: visionX6Image, softenBackground: false },
  'VX mini': { src: visionX1Image, softenBackground: false },
  VXF: { src: visionXFImage, softenBackground: true },
};

const variantFeetDimensions: Record<VisionXVariant, { width: string; height: string }> = {
  VX1: { width: '1.38 ft', height: '1.21 ft' },
  VX6: { width: '2.03 ft', height: '1.18 ft' },
  'VX mini': { width: '1.38 ft', height: '1.21 ft' },
  VXF: { width: '1.44 ft', height: '1.64 ft' },
};

interface SpecCategory {
  title: string;
  rows: Array<{ label: string; value: string }>;
}

const specificationsByVariant: Record<VisionXVariant, SpecCategory[]> = {
  VX1: [
    {
      title: 'Physical & Environmental',
      rows: [
        { label: 'Footprint', value: '42 x 37 x 41 cm' },
        { label: 'Working Space', value: 'Compact benchtop footprint for laboratory settings' },
        { label: 'Weight', value: '22 kg' },
        { label: 'Power Supply', value: 'Standard AC input' },
        { label: 'Durability', value: 'Sealed optics designed to withstand dust and humidity' },
      ],
    },
    {
      title: 'Optical & Imaging Performance',
      rows: [
        { label: 'Resolution', value: '0.26 µm/pixel' },
        { label: 'Magnification', value: '60X equivalent' },
        { label: 'Scanning Mode', value: 'Whole Slide Imaging with high-precision autofocus' },
        { label: 'Objective Lens', value: 'Plan Apochromat optics for clear pathology imaging' },
        { label: 'Image Type', value: 'Brightfield' },
        { label: 'Scanning Time', value: '~150 seconds for 15 x 15 mm standard mode' },
        { label: 'Z-Stacking', value: 'Automated Z-stacking, 25 layers' },
      ],
    },
    {
      title: 'Speed & Throughput',
      rows: [
        { label: 'Slide Capacity', value: 'Single slide feed' },
        { label: 'Operation', value: 'Fully automated' },
        { label: 'Duty Cycle', value: 'Designed for continuous 24/7 operation in remote settings' },
      ],
    },
    {
      title: 'Software & Connectivity',
      rows: [
        {
          label: 'Software',
          value: 'Proprietary scanning software, WSI download software, remote support software',
        },
        { label: 'Connectivity', value: 'LAN, Wi-Fi, USB 3.0' },
        {
          label: 'Storage',
          value: 'On-device storage for up to 7,500 scans; cloud storage support available',
        },
        { label: 'Security', value: 'Cloud-backed security with enterprise-grade certifications' },
        { label: 'HMI', value: '10-inch touch screen' },
      ],
    },
  ],
  VX6: [
    {
      title: 'Physical & Environmental',
      rows: [
        { label: 'Footprint', value: '62 x 36 x 38 cm' },
        { label: 'Working Space', value: 'Compact benchtop footprint for laboratory settings' },
        { label: 'Weight', value: '28 kg' },
        { label: 'Power Supply', value: 'Standard AC input' },
        { label: 'Durability', value: 'Sealed optics designed to withstand dust and humidity' },
      ],
    },
    {
      title: 'Optical & Imaging Performance',
      rows: [
        { label: 'Resolution', value: '0.17 µm/pixel' },
        { label: 'Magnification', value: '60X equivalent' },
        { label: 'Scanning Mode', value: 'Whole Slide Imaging with high-precision autofocus' },
        { label: 'Objective Lens', value: 'Plan Apochromat optics for clear pathology imaging' },
        { label: 'Image Type', value: 'Brightfield' },
        { label: 'Scanning Time', value: '~150 seconds for 15 x 15 mm standard mode' },
        { label: 'Z-Stacking', value: 'Automated Z-stacking, 25 layers' },
      ],
    },
    {
      title: 'Speed & Throughput',
      rows: [
        { label: 'Slide Capacity', value: '6-slide tray' },
        { label: 'Operation', value: 'Fully automated' },
        { label: 'Duty Cycle', value: 'Designed for continuous 24/7 operation in remote settings' },
      ],
    },
    {
      title: 'Software & Connectivity',
      rows: [
        {
          label: 'Software',
          value: 'Proprietary scanning software, WSI download software, remote support software',
        },
        { label: 'Connectivity', value: 'LAN, Wi-Fi, USB 3.0' },
        {
          label: 'Storage',
          value: 'On-device storage for up to 7,500 scans; cloud storage support available',
        },
        { label: 'Security', value: 'Cloud-backed security with enterprise-grade certifications' },
        { label: 'HMI', value: '13.3-inch touch screen' },
      ],
    },
  ],
  'VX mini': [
    {
      title: 'Physical & Environmental',
      rows: [
        { label: 'Footprint', value: '42 x 37 x 41 cm' },
        { label: 'Working Space', value: 'Compact benchtop footprint for laboratory settings' },
        { label: 'Weight', value: '22 kg' },
        { label: 'Power Supply', value: 'Standard AC input' },
        { label: 'Durability', value: 'Sealed optics designed to withstand dust and humidity' },
      ],
    },
    {
      title: 'Optical & Imaging Performance',
      rows: [
        { label: 'Resolution', value: '0.26 µm/pixel' },
        { label: 'Magnification', value: '60X equivalent' },
        { label: 'Scanning Mode', value: 'Whole Slide Imaging with high-precision autofocus' },
        { label: 'Objective Lens', value: 'Plan Apochromat optics for clear pathology imaging' },
        { label: 'Image Type', value: 'Brightfield' },
        { label: 'Scanning Time', value: '~150 seconds for 15 x 15 mm standard mode' },
        { label: 'Z-Stacking', value: 'Automated Z-stacking, 25 layers' },
      ],
    },
    {
      title: 'Speed & Throughput',
      rows: [
        { label: 'Slide Capacity', value: 'Single slide feed' },
        { label: 'Operation', value: 'Fully automated' },
        { label: 'Duty Cycle', value: 'Designed for continuous 24/7 operation in remote settings' },
      ],
    },
    {
      title: 'Software & Connectivity',
      rows: [
        {
          label: 'Software',
          value: 'Proprietary scanning software, WSI download software, remote support software',
        },
        { label: 'Connectivity', value: 'LAN, Wi-Fi, USB 3.0' },
        {
          label: 'Storage',
          value: 'On-device storage for up to 7,500 scans; cloud storage support available',
        },
        { label: 'Security', value: 'Cloud-backed security with enterprise-grade certifications' },
        { label: 'HMI', value: '10-inch touch screen' },
      ],
    },
  ],
  VXF: [
    {
      title: 'Physical & Environmental',
      rows: [
        { label: 'Footprint', value: '440 x 567 x 460 mm' },
        { label: 'Working Space', value: 'Compact benchtop footprint for laboratory use' },
        { label: 'Weight', value: '25 kg' },
        { label: 'System Type', value: 'Single-slide fluorescent scanner' },
      ],
    },
    {
      title: 'Fluorescent Imaging Performance',
      rows: [
        { label: 'Imaging Channels', value: '3 channels: DAPI, FITC, TRITC' },
        { label: 'Objective', value: 'CFI Plan Fluor 20X / Nikon' },
        { label: 'Scanning Mode', value: 'Field of view scanning, not whole-slide imaging' },
        { label: 'Field of View', value: 'Configurable based on application requirements' },
        { label: 'Scan Time', value: 'Varies depending on configured field of view' },
      ],
    },
    {
      title: 'Software & Connectivity',
      rows: [
        {
          label: 'Software',
          value: 'Proprietary scanning software, WSI download software, remote support software',
        },
        { label: 'Connectivity', value: 'LAN, Wi‑Fi, USB 3.0' },
        {
          label: 'Storage',
          value: 'On-device storage for up to 7,500 scans; cloud storage support available',
        },
        { label: 'Security', value: 'Cloud-backed security with enterprise-grade certifications' },
      ],
    },
    {
      title: 'Speed & Throughput',
      rows: [
        { label: 'Slide Capacity', value: 'Single-slide feed' },
        { label: 'Scan Mode', value: 'Field of view scanning' },
        { label: 'Field of View', value: 'Configurable based on application' },
        { label: 'Scan Time', value: 'Varies depending on configured field of view' },
        { label: 'Operation', value: 'Fully automated' },
        { label: 'Workflow', value: 'Designed for rapid fluorescent imaging of targeted regions' },
        { label: 'Use Case', value: 'Single-slide, multi-channel fluorescence scanning' },
      ],
    },
  ],
};

const SpecificationsSection: React.FC<SpecificationsSectionProps> = ({ activeVariant = 'VX1' }) => {
  const imageConfig = variantImageMap[activeVariant] ?? variantImageMap.VX1;
  const dimensions = variantFeetDimensions[activeVariant] ?? variantFeetDimensions.VX1;
  const variantSpecs = specificationsByVariant[activeVariant] ?? specificationsByVariant.VX1;
  const firstCategory = variantSpecs[0];
  const remainingCategories = variantSpecs.slice(1);

  return (
    <section className="w-full bg-white px-4 md:px-6 py-20 mx-auto w-full max-w-[1520px] animate-in fade-in duration-700">
      {/* Top Heading */}
      <div className="mb-20">
        <h2 className="text-[28px] md:text-[34px] lg:text-[40px] font-extrabold leading-[1.2] text-[#111827] tracking-[-0.015em] max-w-[1000px]">
          VisionX whole slide scanners deliver fast, high-quality digital pathology imaging with onboard AI.
        </h2>
      </div>

      {/* Primary Category with Image */}
      <div className="flex flex-col md:flex-row mb-24 gap-8">
        <SectionHeader title={firstCategory.title} />
        <div className="flex-1 flex flex-col items-center">
          {/* Device Diagram Placeholder */}
          <div className="relative mb-12 flex justify-center">
            <div className="relative inline-flex border border-gray-200 rounded-lg p-4 md:p-5 bg-gray-50/30">
               <img 
                src={imageConfig.src}
                alt={`VisionX ${activeVariant} Device Diagram`}
                className={`block h-auto w-auto max-w-[280px] sm:max-w-[360px] md:max-w-[420px] lg:max-w-[460px] opacity-90 ${imageConfig.softenBackground ? 'mix-blend-multiply' : ''}`}
              />
              {/* Dimension indicators */}
              <div className="absolute left-full top-1/2 -translate-y-1/2 ml-4 flex flex-col items-center">
                <div className="relative h-44 w-3 md:h-52">
                  <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gray-400" />
                  <div className="absolute -top-[1px] left-1/2 h-0 w-0 -translate-x-1/2 border-x-[3px] border-b-[6px] border-x-transparent border-b-gray-400" />
                  <div className="absolute -bottom-[1px] left-1/2 h-0 w-0 -translate-x-1/2 border-x-[3px] border-t-[6px] border-x-transparent border-t-gray-400" />
                </div>
                <span className="mt-2 inline-block whitespace-nowrap text-[12px] leading-none text-gray-400 [writing-mode:vertical-rl]">
                  {dimensions.height}
                </span>
              </div>
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 flex flex-row items-center">
                 <div className="relative h-3 w-44 md:w-52">
                  <div className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-gray-400" />
                  <div className="absolute left-0 top-1/2 h-0 w-0 -translate-y-1/2 border-y-[3px] border-r-[6px] border-y-transparent border-r-gray-400" />
                  <div className="absolute right-0 top-1/2 h-0 w-0 -translate-y-1/2 border-y-[3px] border-l-[6px] border-y-transparent border-l-gray-400" />
                </div>
                <span className="text-[12px] text-gray-400 ml-2 whitespace-nowrap">{dimensions.width}</span>
              </div>
            </div>
          </div>

          <div className="w-full">
            {firstCategory.rows.map((row) => (
              <SpecRow key={row.label} label={row.label} value={row.value} />
            ))}
            <div className="border-t border-gray-200"></div>
          </div>
        </div>
      </div>

      {remainingCategories.map((category, index) => (
        <div
          key={category.title}
          className={`flex flex-col md:flex-row gap-8 ${index === remainingCategories.length - 1 ? '' : 'mb-24'}`}
        >
          <SectionHeader title={category.title} />
          <div className="flex-1">
            {category.rows.map((row) => (
              <SpecRow key={row.label} label={row.label} value={row.value} />
            ))}
            <div className="border-t border-gray-200"></div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default SpecificationsSection;
