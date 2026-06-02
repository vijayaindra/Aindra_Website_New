
import React from 'react';
import backgroundImage from '../assets/ProductImages/Background Image.png';
import {
  homeResponsiveConfig,
  resolveHomeResponsiveValue,
  useHomeResponsive,
} from './responsive/homeResponsive';

export const Hero: React.FC = () => {
  const responsive = useHomeResponsive();
  const config = homeResponsiveConfig.hero;

  const sectionClass = resolveHomeResponsiveValue(responsive, config.sectionClass);
  const headingClass = resolveHomeResponsiveValue(responsive, config.headingClass);
  const bodyClass = resolveHomeResponsiveValue(responsive, config.bodyClass);
  const imageWrapClass = resolveHomeResponsiveValue(responsive, config.imageWrapClass);
  const missionWrapClass = resolveHomeResponsiveValue(responsive, config.missionWrapClass);
  const missionTextClass = resolveHomeResponsiveValue(responsive, config.missionTextClass);

  return (
    <section className={sectionClass}>
      {/* Left Content: Large Heading */}
      <div className="lg:col-span-7 z-20">
        <h1 className={headingClass}>
          Reducing Screening Time by 60% with Unified Ecosystem for Computational Pathology.
        </h1>
        <p className={bodyClass}>
          Empowering pathologists with 99% diagnostic consistency and point-of-care AI-assisted detection.
        </p>
      </div>

      {/* Right Content: Circular Image & Mission Statement */}
      <div className="lg:col-span-5 flex flex-col items-center lg:items-end justify-center relative mt-8 lg:mt-0">
        <div className={imageWrapClass}>
          {/* Main Hero Image in a large circular frame */}
          <div className="absolute inset-0 rounded-full overflow-hidden shadow-[0_40px_80px_-15px_rgba(0,0,0,0.15)] ring-1 ring-[#e9edf3] z-10 bg-[#f7f9fc]">
            <img 
              src={backgroundImage}
              alt="Cytology Pathology Slide" 
              className="w-full h-full object-cover filter saturate-[1.1] contrast-[1.02] scale-110"
            />
          </div>
          
          {/* Decorative Ring (Bezel) */}
          <div className="absolute -inset-2 rounded-full border border-[#e6ebf2] z-0"></div>
          <div className="absolute -inset-6 rounded-full border border-[#f0f3f7] z-0 opacity-40"></div>
        </div>

        {/* Mission Text: Positioned below the circle, right-aligned */}
        <div className={missionWrapClass}>
          <p className={missionTextClass}>
            At Aindra, we are building a world where Clinical Pathology is <span className="text-[#1b2742] font-semibold">Data driven</span>, <span className="text-[#1b2742] font-semibold">Fast</span> and <span className="text-[#1b2742] font-semibold">Patient focused</span>.
          </p>
        </div>
      </div>
    </section>
  );
};
