
import React, { useState, useEffect, useRef } from 'react';
import cervAstraImage from '../assets/ProductImages/CervAstra.png';
import lungAstraImage from '../assets/ProductImages/LungAstra.png';
import proAstraImage from '../assets/ProductImages/ProAstra.png';
import thyroAstraImage from '../assets/ProductImages/ThyroAstra.png';
import { SectionEyebrow } from './SectionEyebrow';
import { ScrollSectionLeftNav } from './ScrollSectionLeftNav';
import { sectionContainer, sectionShell, sectionY } from './layout';

interface Solution {
  id: string;
  name: string;
  description: string;
  image: string;
}

export const SolutionsShowcase: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isCompactHeight, setIsCompactHeight] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const solutions: Solution[] = [
    {
      id: '01',
      name: 'CervAstra',
      description: 'Geography is no longer a barrier. Slides are reviewed remotely, and Bethesda-format reports are generated instantly, bridging the gap between rural clinics and expert pathologists.',
      image: cervAstraImage,
    },
    {
      id: '02',
      name: 'LungAstra',
      description: 'Advanced AI detection for pulmonary and thoracic cytology. LungAstra identifies malignant morphological features in seconds, streamlining clinical workflows.',
      image: lungAstraImage,
    },
    {
      id: '03',
      name: 'ProsAstra',
      description: 'Standardizing prostate pathology. Our AI models assist in the precise identification and grading of prostate malignancies, ensuring reproducible diagnostic results.',
      image: proAstraImage,
    },
    {
      id: '04',
      name: 'ThyroAstra',
      description: 'ThyroAstra brings deep learning to thyroid cytopathology, assisting in the evaluation of fine needle aspiration samples with unparalleled accuracy.',
      image: thyroAstraImage,
    }
  ];

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
      
      // Calculate progress (0 to 1)
      const scrollProgress = -top / (height - viewportHeight);
      const index = Math.min(
        solutions.length - 1,
        Math.max(0, Math.floor(scrollProgress * solutions.length))
      );
      
      setActiveIndex(index);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [solutions.length]);

  const scrollToSolution = (index: number) => {
    if (!containerRef.current) return;
    const { top } = containerRef.current.getBoundingClientRect();
    const targetScroll = window.scrollY + top + (index * window.innerHeight);
    window.scrollTo({ top: targetScroll, behavior: 'smooth' });
  };

  return (
    <>
    <section className={`lg:hidden w-full bg-[#f8fbff] ${sectionShell} ${sectionY}`}>
      <div className={sectionContainer}>
        <SectionEyebrow label="Our Solutions" />
        <h2 className="mt-3 text-2xl sm:text-3xl font-medium text-slate-900 tracking-tight max-w-3xl">
          AI modules for every stage of clinical pathology.
        </h2>
        <div className="mt-6 space-y-6">
          {solutions.map((s) => (
            <article key={s.id} className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
              <div className="aspect-[4/3] bg-slate-100">
                <img src={s.image} alt={s.name} className="h-full w-full object-cover" />
              </div>
              <div className="p-4">
                <div className="text-xs font-bold tracking-wider text-[#00a3ff]">{s.id}</div>
                <h3 className="mt-1 text-xl font-bold text-slate-900">{s.name}</h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">{s.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>

    <div ref={containerRef} className={`relative z-10 hidden lg:block ${isCompactHeight ? 'h-[430vh]' : 'h-[400vh]'} bg-[#f8fbff]`}>
      {/* Sticky Frame */}
      <section className={`sticky ${isCompactHeight ? 'top-16 h-[calc(100svh-4rem)] py-3 min-h-0' : 'top-20 sm:top-24 h-[calc(100svh-5rem)] sm:h-[calc(100svh-6rem)]'} ${isCompactHeight ? '' : `min-h-[700px] xl:min-h-[740px] ${sectionY}`} max-h-[900px]:top-16 max-h-[900px]:h-[calc(100svh-4rem)] max-h-[900px]:min-h-0 max-h-[900px]:py-3 max-h-[820px]:h-[calc(100svh-3.5rem)] max-[900px]:top-14 max-[900px]:h-[calc(100svh-3.5rem)] max-[900px]:py-3 max-[900px]:min-h-0 max-[820px]:h-[calc(100svh-3.25rem)] w-full flex items-center justify-center overflow-visible lg:overflow-hidden ${sectionShell}`}>
        
        <div className={sectionContainer}>
          {/* Section Header */}
          <div className={`relative z-20 grid grid-cols-12 gap-8 ${isCompactHeight ? 'mb-4' : 'mb-8 lg:mb-14'} max-h-[900px]:mb-4 max-h-[820px]:mb-3`}>
            <div className="col-span-12 lg:col-span-3">
              <SectionEyebrow label="Our Solutions" />
            </div>
            <div className="col-span-12 lg:col-span-9">
              <h2 className={`${isCompactHeight ? 'text-[clamp(1.9rem,2.7vw,2.3rem)] md:text-[clamp(2rem,2.85vw,2.4rem)]' : 'text-3xl md:text-5xl lg:text-6xl'} max-h-[900px]:text-[clamp(2.2rem,3.2vw,2.9rem)] max-h-[900px]:leading-[1.05] max-h-[820px]:text-[clamp(2rem,3vw,2.6rem)] font-medium text-slate-900 leading-[1.1] max-w-4xl`}>
                AI modules for every stage of clinical pathology.
              </h2>
            </div>
          </div>

          <div className={`grid grid-cols-12 items-center ${isCompactHeight ? 'gap-6' : 'gap-10'}`}>
            
            {/* Left side: Timeline Nav + Description */}
            <div className={`col-span-12 lg:col-span-3 relative flex flex-col justify-center order-2 lg:order-1 ${isCompactHeight ? 'h-[320px]' : 'h-[500px]'}`}>
              
              <ScrollSectionLeftNav
                items={solutions.map((s) => s.name)}
                activeIndex={activeIndex}
                onSelect={scrollToSolution}
                isCompactHeight={isCompactHeight}
              />

              {/* Description swapping */}
              <div className={`relative ${isCompactHeight ? 'h-28' : 'h-44'}`}>
                {solutions.map((s, idx) => (
                  <div 
                    key={s.id}
                    className={`absolute inset-0 transition-all duration-700 ease-in-out
                      ${idx === activeIndex ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 pointer-events-none'}`}
                  >
                    <p className={`${isCompactHeight ? 'text-base lg:text-lg' : 'text-xl lg:text-2xl'} text-slate-500 leading-relaxed font-light max-w-md`}>
                      {s.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right side: Medical Illustration swapping with glows */}
            <div className={`col-span-12 lg:col-span-9 relative order-1 lg:order-2 ${isCompactHeight ? 'aspect-[11/6] max-h-[42vh]' : 'aspect-[11/6]'} max-h-[900px]:max-h-[40vh] max-h-[820px]:max-h-[37vh]`}>
              {solutions.map((s, idx) => (
                <div 
                  key={idx}
                  className={`absolute inset-0 flex items-center justify-center transition-all duration-1000 ease-in-out
                    ${idx === activeIndex ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-95 rotate-1 pointer-events-none'}`}
                >
                  <div className="relative w-full h-full rounded-[3rem] overflow-hidden shadow-2xl bg-white group">
                    <img 
                      src={s.image} 
                      alt={s.name} 
                      className="w-full h-full object-contain"
                    />

                    {/* Scanning UI Element overlay */}
                    <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/10 to-transparent pointer-events-none"></div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* Vertical Pagination Indicator (Far Right) */}
        <div className="absolute right-12 top-1/2 -translate-y-1/2 hidden xl:flex flex-col space-y-4">
          {solutions.map((_, idx) => (
            <div 
              key={idx}
              className={`w-1 rounded-full transition-all duration-700 ${idx === activeIndex ? 'bg-cyan-500 h-8' : 'bg-slate-200 h-2'}`}
            />
          ))}
        </div>
      </section>
    </div>
    </>
  );
};
