import React from 'react';
import type { VisionXVariant } from './Hero';
import cytologyImage from '../../../assets/ProductImages/Cytology.png';
import frozenSectionImage from '../../../assets/ProductImages/Frozen Section.png';
import hematologyImage from '../../../assets/ProductImages/Hematology.png';
import histologyImage from '../../../assets/ProductImages/Histology.png';
import ihcImage from '../../../assets/ProductImages/IHC.png';
import dapiVxfImage from '../../../assets/ProductImages/DAPI-VXF.png';
import fitciVxfImage from '../../../assets/ProductImages/FITCI-VXF.png';
import tritcVxfImage from '../../../assets/ProductImages/TRITC-VXF.png';

const QualityRow = ({ title, description, imageUrl }: { title: string; description: string; imageUrl: string }) => (
  <div className="py-16 border-t border-gray-200 flex flex-col md:flex-row gap-12 items-start">
    <div className="w-full md:w-1/3">
      <h3 className="text-2xl font-semibold text-gray-900 mb-6">{title}</h3>
      <p className="text-[15px] leading-relaxed text-gray-500 font-normal">
        {description}
      </p>
    </div>
    <div className="w-full md:w-2/3">
      <div className="rounded-[24px] overflow-hidden shadow-sm border border-gray-100 aspect-[16/9] bg-gray-50">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
        />
      </div>
    </div>
  </div>
);

const ImageQualitySection: React.FC<{ activeVariant?: VisionXVariant }> = ({ activeVariant = 'VX1' }) => {
  const commonDescription = "Geography is no longer a barrier. Slides are reviewed remotely, and Bethesda-format reports are generated instantly, bridging the gap between rural clinics and expert pathologists.";
  const vxfDescription =
    'Fluorescence channels are captured with high sensitivity and clarity, supporting precise marker-based analysis workflows.';
  const isVxf = activeVariant === 'VXF';

  return (
    <section className="w-full bg-white px-4 md:px-6 py-20 mx-auto w-full max-w-[1520px] animate-in fade-in duration-700">
      <div className="mb-20">
        <h2 className="text-[28px] md:text-[34px] lg:text-[40px] font-extrabold leading-[1.2] text-[#111827] tracking-[-0.015em] max-w-[1000px]">
          VisionX whole slide scanners deliver fast, high-quality digital pathology imaging with onboard AI.
        </h2>
      </div>

      <div className="flex flex-col">
        {isVxf ? (
          <>
            <QualityRow
              title="DAPI"
              description={vxfDescription}
              imageUrl={dapiVxfImage}
            />
            <QualityRow
              title="FITCI"
              description={vxfDescription}
              imageUrl={fitciVxfImage}
            />
            <QualityRow
              title="TRITC"
              description={vxfDescription}
              imageUrl={tritcVxfImage}
            />
          </>
        ) : (
          <>
            <QualityRow 
              title="Cytology"
              description={commonDescription}
              imageUrl={cytologyImage}
            />
            <QualityRow 
              title="Histology"
              description={commonDescription}
              imageUrl={histologyImage}
            />
            <QualityRow 
              title="IHC"
              description={commonDescription}
              imageUrl={ihcImage}
            />
            <QualityRow 
              title="Hematology"
              description={commonDescription}
              imageUrl={hematologyImage}
            />
            <QualityRow 
              title="Frozen Section"
              description={commonDescription}
              imageUrl={frozenSectionImage}
            />
          </>
        )}
        <div className="border-t border-gray-200 w-full"></div>
      </div>
    </section>
  );
};

export default ImageQualitySection;
