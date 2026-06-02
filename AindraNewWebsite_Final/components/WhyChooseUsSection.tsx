import React, { useEffect, useRef, useState } from 'react';
import hospitalImage from '../assets/Why_choose_us/Hospital.png';
import diagnosticLabImage from '../assets/Why_choose_us/Diagnostic Lab.png';
import clinicsImage from '../assets/Why_choose_us/Clinics.png';
import medEdImage from '../assets/Why_choose_us/Med Ed.png';
import { SectionEyebrow } from './SectionEyebrow';
import { sectionContainer, sectionShell } from './layout';
import {
  homeResponsiveConfig,
  resolveHomeResponsiveValue,
  useHomeResponsive,
} from './responsive/homeResponsive';

export const WhyChooseUsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const responsive = useHomeResponsive();
  const config = homeResponsiveConfig.whyChooseUs;

  const tabs = ['Hospitals', 'Diagnostic Labs', 'Clinics', 'MedEd'];
  const tabImages: Record<string, string> = {
    Hospitals: hospitalImage,
    'Diagnostic Labs': diagnosticLabImage,
    Clinics: clinicsImage,
    MedEd: medEdImage,
  };

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const { top, height } = containerRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const scrollProgress = -top / (height - viewportHeight);
      const index = Math.min(
        tabs.length - 1,
        Math.max(0, Math.floor(scrollProgress * tabs.length))
      );
      setActiveIndex(index);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [tabs.length]);

  const scrollToTab = (index: number) => {
    if (!containerRef.current) return;
    const { top } = containerRef.current.getBoundingClientRect();
    const targetScroll = window.scrollY + top + (index * window.innerHeight);
    window.scrollTo({ top: targetScroll, behavior: 'smooth' });
  };

  const activeTab = tabs[activeIndex];
  const sceneHeightVh = resolveHomeResponsiveValue(responsive, config.sceneHeightVh);
  const stickyClass = resolveHomeResponsiveValue(responsive, config.stickyClass);
  const containerClass = resolveHomeResponsiveValue(responsive, config.containerClass);
  const headerGapClass = resolveHomeResponsiveValue(responsive, config.headerGapClass);
  const contentGapClass = resolveHomeResponsiveValue(responsive, config.contentGapClass);
  const headingClass = resolveHomeResponsiveValue(responsive, config.headingClass);
  const tabRowClass = resolveHomeResponsiveValue(responsive, config.tabRowClass);
  const tabLabelClass = resolveHomeResponsiveValue(responsive, config.tabLabelClass);
  const visualClass = resolveHomeResponsiveValue(responsive, config.visualClass);
  const leftColumnClass = resolveHomeResponsiveValue(responsive, config.leftColumnClass);
  const rightColumnClass = resolveHomeResponsiveValue(responsive, config.rightColumnClass);

  return (
    <>
      <section className={`lg:hidden relative py-10 md:py-12 ${sectionShell} bg-white overflow-hidden`} style={{ backgroundColor: '#ffffff' }}>
        <div className={sectionContainer}>
          <div className="grid grid-cols-12 gap-6 md:gap-8 items-start mb-8 md:mb-10">
            <div className="col-span-12 lg:col-span-3 pt-2">
              <SectionEyebrow label="Why Choose Us" />
            </div>
            <div className="col-span-12 lg:col-span-9">
              <h2 className="text-3xl md:text-5xl lg:text-6xl max-[1365px]:text-[clamp(2.7rem,4.3vw,3.5rem)] font-medium text-slate-900 leading-[1.15] md:leading-[1.1] max-w-4xl max-[1365px]:max-w-3xl tracking-tight text-balance">
                Intelligent diagnostic screening designed for faster, more accurate clinical outcomes.
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-12 gap-8 items-center">
            <div className="col-span-12 lg:col-span-5 flex flex-col justify-center h-full order-2 lg:order-1">
              <div className="flex flex-col w-full">
                {tabs.map((tab, index) => (
                  <button
                    key={tab}
                    onClick={() => setActiveIndex(index)}
                    className="group relative flex items-center justify-between w-full py-4 md:py-6 border-b border-slate-200 transition-all duration-300 text-left"
                  >
                    <span className={`text-xl md:text-2xl font-semibold transition-all duration-300 ${activeIndex === index ? 'text-[#00a3ff]' : 'text-slate-300 group-hover:text-slate-500'}`}>
                      {tab}
                    </span>
                    <div className={`flex items-center justify-center w-8 h-8 rounded-full transition-all duration-300 ${activeIndex === index ? 'bg-[#00a3ff] text-white' : 'bg-slate-200 text-white group-hover:bg-slate-300'}`}>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div className="col-span-12 lg:col-span-7 flex items-center justify-center lg:justify-end py-2 md:py-4 order-1 lg:order-2">
              <div className="w-full max-w-[560px] xl:max-w-[580px] aspect-square bg-white overflow-hidden flex items-center justify-center">
                <img
                  src={tabImages[activeTab]}
                  alt={`${activeTab} visual`}
                  className="w-full h-full object-contain object-center bg-white"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div ref={containerRef} className="relative z-10 hidden lg:block bg-white" style={{ height: `${sceneHeightVh}vh` }}>
        <section className={`sticky ${stickyClass} ${sectionShell}`}>
          <div className={`${sectionContainer} ${containerClass}`}>
            <div className={`grid grid-cols-12 gap-6 md:gap-8 items-start ${headerGapClass}`}>
              <div className="col-span-12 lg:col-span-3 pt-2">
                <SectionEyebrow label="Why Choose Us" />
              </div>
              <div className="col-span-12 lg:col-span-9">
                <h2 className={headingClass}>
                  Intelligent diagnostic screening designed for faster, more accurate clinical outcomes.
                </h2>
              </div>
            </div>

            <div className={`grid grid-cols-12 ${contentGapClass}`}>
              <div className={`col-span-12 lg:col-span-5 max-[1365px]:lg:col-span-6 flex flex-col h-full order-2 lg:order-1 ${leftColumnClass}`}>
                <div className="flex flex-col w-full">
                  {tabs.map((tab, index) => (
                    <button
                      key={tab}
                      onClick={() => scrollToTab(index)}
                      className={`group relative flex items-center justify-between w-full border-b border-slate-200 transition-all duration-500 text-left ${tabRowClass}`}
                    >
                      <span className={`${tabLabelClass} ${activeIndex === index ? 'text-[#00a3ff]' : 'text-slate-300 group-hover:text-slate-500'}`}>
                        {tab}
                      </span>

                      <div className={`flex items-center justify-center w-8 h-8 rounded-full transition-all duration-500 ${activeIndex === index ? 'bg-[#00a3ff] text-white' : 'bg-slate-200 text-white group-hover:bg-slate-300'}`}>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              <div className={`col-span-12 lg:col-span-7 max-[1365px]:lg:col-span-6 flex order-1 lg:order-2 ${rightColumnClass}`}>
                <div className={visualClass}>
                  {tabs.map((tab, index) => (
                    <div
                      key={tab}
                      className={`absolute inset-0 flex items-center justify-center transition-all duration-700 ease-in-out ${activeIndex === index ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}
                    >
                      <img
                        src={tabImages[tab]}
                        alt={`${tab} visual`}
                        className="w-full h-full object-contain object-center bg-white"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
