import React, { useEffect, useRef, useState } from 'react';
import hospitalImage from '../assets/Why_choose_us/Hospital.png';
import diagnosticLabImage from '../assets/Why_choose_us/Diagnostic Lab.png';
import clinicsImage from '../assets/Why_choose_us/Clinics.png';
import medEdImage from '../assets/Why_choose_us/Med Ed.png';
import { SectionEyebrow } from './SectionEyebrow';
import { sectionContainer, sectionShell } from './layout';

export const WhyChooseUsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isCompactHeight, setIsCompactHeight] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const tabs = ['Hospitals', 'Diagnostic Labs', 'Clinics', 'MedEd'];
  const tabImages: Record<string, string> = {
    Hospitals: hospitalImage,
    'Diagnostic Labs': diagnosticLabImage,
    Clinics: clinicsImage,
    MedEd: medEdImage,
  };

  useEffect(() => {
    const handleResize = () => {
      setIsCompactHeight(window.innerHeight <= 780);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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

      <div ref={containerRef} className={`relative z-10 hidden lg:block ${isCompactHeight ? 'h-[300vh] max-h-[900px]:h-[285vh] max-h-[820px]:h-[270vh] max-h-[800px]:h-[255vh] max-h-[750px]:h-[240vh] max-h-[700px]:h-[225vh]' : 'h-[280vh] max-h-[800px]:h-[255vh] max-h-[750px]:h-[240vh] max-h-[700px]:h-[225vh]'} bg-white`}>
        <section className={`sticky ${isCompactHeight ? 'top-20 sm:top-24 h-[calc(100svh-5rem)] sm:h-[calc(100svh-6rem)] py-3 min-h-0' : 'top-20 sm:top-24 h-[calc(100svh-5rem)] sm:h-[calc(100svh-6rem)] min-h-[700px] xl:min-h-[740px] max-[1535px]:min-h-[700px] xl:max-[1365px]:min-h-[680px] xl:max-[1365px]:h-[calc(100svh-6.5rem)]'} max-h-[900px]:h-[calc(100svh-5rem)] sm:max-h-[900px]:h-[calc(100svh-6rem)] max-h-[900px]:py-3 max-h-[820px]:h-[calc(100svh-5rem)] sm:max-h-[820px]:h-[calc(100svh-6rem)] max-h-[800px]:h-[calc(100svh-5rem)] sm:max-h-[800px]:h-[calc(100svh-6rem)] max-h-[800px]:py-2.5 max-h-[800px]:items-start max-h-[800px]:justify-start max-h-[750px]:h-[calc(100svh-5rem)] sm:max-h-[750px]:h-[calc(100svh-6rem)] max-h-[750px]:py-2 max-h-[700px]:h-[calc(100svh-5rem)] sm:max-h-[700px]:h-[calc(100svh-6rem)] w-full flex items-center justify-center overflow-visible lg:overflow-hidden ${sectionShell}`}>
          <div className={`${sectionContainer} ${isCompactHeight ? 'pt-8' : 'pt-10 xl:pt-12 max-[1535px]:pt-8 xl:max-[1365px]:pt-6'} max-[1365px]:pt-7 max-h-[900px]:pt-8 max-h-[820px]:pt-8 max-h-[800px]:pt-8 max-h-[750px]:pt-7 max-h-[700px]:pt-6 max-h-[800px]:scale-[0.9] max-h-[800px]:origin-top max-h-[750px]:scale-[0.84] max-h-[700px]:scale-[0.79]`}>
            <div className="grid grid-cols-12 gap-6 md:gap-8 items-start mb-8 md:mb-12 max-[1535px]:mb-8 max-[1365px]:mb-6 max-h-[800px]:mb-5 max-h-[750px]:mb-4">
              <div className="col-span-12 lg:col-span-3 pt-2">
                <SectionEyebrow label="Why Choose Us" />
              </div>
              <div className="col-span-12 lg:col-span-9">
                <h2 className="text-3xl md:text-5xl lg:text-6xl max-[1535px]:text-[clamp(2.2rem,3.15vw,2.8rem)] max-[1365px]:text-[clamp(2.45rem,4vw,3.1rem)] xl:max-[1365px]:text-[clamp(2.2rem,3.5vw,2.8rem)] max-h-[800px]:text-[clamp(2.35rem,3.8vw,3rem)] max-h-[800px]:leading-[1.03] max-h-[800px]:max-w-[56rem] max-h-[750px]:text-[clamp(2.15rem,3.55vw,2.75rem)] max-h-[750px]:max-w-[52rem] max-h-[700px]:text-[clamp(1.95rem,3.2vw,2.45rem)] max-h-[700px]:max-w-[48rem] font-medium text-slate-900 leading-[1.15] md:leading-[1.1] max-w-4xl max-[1535px]:max-w-[60rem] max-[1365px]:max-w-3xl tracking-tight text-balance">
                  Intelligent diagnostic screening designed for faster, more accurate clinical outcomes.
                </h2>
              </div>
            </div>

            <div className="grid grid-cols-12 gap-8 lg:gap-16 max-[1535px]:lg:gap-12 max-[1365px]:lg:gap-10 xl:gap-24 xl:max-[1365px]:gap-8 max-h-[800px]:lg:gap-10 max-h-[750px]:lg:gap-8 items-center max-h-[800px]:items-start">
              <div className="col-span-12 lg:col-span-5 max-[1365px]:lg:col-span-6 flex flex-col justify-center max-h-[800px]:justify-start h-full order-2 lg:order-1">
                <div className="flex flex-col w-full">
                  {tabs.map((tab, index) => (
                    <button
                      key={tab}
                      onClick={() => scrollToTab(index)}
                      className="group relative flex items-center justify-between w-full py-4 md:py-6 xl:max-[1365px]:py-4 max-h-[800px]:py-3 max-h-[750px]:py-2.5 border-b border-slate-200 transition-all duration-500 text-left"
                    >
                      <span className={`text-xl md:text-2xl max-h-[800px]:md:text-[1.45rem] max-h-[750px]:md:text-[1.3rem] max-h-[700px]:md:text-[1.15rem] font-semibold transition-all duration-500 ${activeIndex === index ? 'text-[#00a3ff]' : 'text-slate-300 group-hover:text-slate-500'}`}>
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

              <div className="col-span-12 lg:col-span-7 max-[1365px]:lg:col-span-6 flex items-center justify-center lg:justify-end py-2 md:py-4 max-h-[800px]:py-1 order-1 lg:order-2">
                <div className="relative w-full max-w-[560px] max-[1535px]:max-w-[500px] max-[1365px]:max-w-[450px] xl:max-w-[580px] xl:max-[1365px]:max-w-[420px] aspect-square bg-white overflow-hidden flex items-center justify-center max-h-[58vh] max-[1535px]:max-h-[50vh] max-[1365px]:max-h-[46vh] xl:max-[1365px]:max-h-[42vh] max-h-[900px]:max-h-[50vh] max-h-[820px]:max-h-[46vh] max-h-[800px]:max-h-[40vh] max-h-[750px]:max-h-[37vh] max-h-[700px]:max-h-[34vh]">
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
