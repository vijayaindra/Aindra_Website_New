import React from 'react';
import cytologyPapImage from '../../../assets/ProductImages/Cytology-PAP.png';
import hematologyGemisaImage from '../../../assets/ProductImages/Hematology-Gemisa.png';
import histologyHeImage from '../../../assets/ProductImages/Histology-H&E.png';

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

const ImageQualitySection: React.FC = () => {
  const commonDescription = "Geography is no longer a barrier. Slides are reviewed remotely, and Bethesda-format reports are generated instantly, bridging the gap between rural clinics and expert pathologists.";

  return (
    <section className="w-full bg-white px-4 md:px-6 lg:px-8 py-20 max-w-[1400px] mx-auto animate-in fade-in duration-700">
      <div className="mb-20">
        <h2 className="text-[28px] md:text-[34px] lg:text-[40px] font-extrabold leading-[1.2] text-[#111827] tracking-[-0.015em] max-w-[1000px]">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.
        </h2>
      </div>

      <div className="flex flex-col">
        <QualityRow 
          title="Cytology"
          description={commonDescription}
          imageUrl={cytologyPapImage}
        />
        <QualityRow 
          title="Histology"
          description={commonDescription}
          imageUrl={histologyHeImage}
        />
        <QualityRow 
          title="Hematology"
          description={commonDescription}
          imageUrl={hematologyGemisaImage}
        />
        <div className="border-t border-gray-200 w-full"></div>
      </div>
    </section>
  );
};

export default ImageQualitySection;
