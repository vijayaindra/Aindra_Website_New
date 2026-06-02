
import React, { useState, useEffect, useRef } from 'react';
import cervAstraImage from '../assets/ProductImages/CervAstra.png';
import lungAstraImage from '../assets/ProductImages/LungAstra.png';
import proAstraImage from '../assets/ProductImages/ProAstra.png';
import thyroAstraImage from '../assets/ProductImages/ThyroAstra.png';
import mammoAstraImage from '../assets/ProductImages/MammoAstra.png';
import renoAstraImage from '../assets/ProductImages/RenoAstra.png';
import { SectionEyebrow } from './SectionEyebrow';
import { sectionContainer, sectionShell, sectionY } from './layout';
import {
  homeResponsiveConfig,
  resolveHomeResponsiveValue,
  useHomeResponsive,
} from './responsive/homeResponsive';

interface Solution {
  id: string;
  name: string;
  description: string;
  image: string;
}

export const SolutionsShowcase: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const responsive = useHomeResponsive();
  const config = homeResponsiveConfig.solutionsShowcase;

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
    },
    {
      id: '05',
      name: 'MammoAstra',
      description: 'MammoAstra brings deep learning to breast histopathology, assisting in the evaluation of H&E tissue samples with high accuracy and faster diagnostic support.',
      image: mammoAstraImage,
    },
    {
      id: '06',
      name: 'RenoAstra',
      description: 'RenoAstra applies deep learning to renal histopathology, supporting the evaluation of kidney tissue samples with accurate detection of abnormal regions.',
      image: renoAstraImage,
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const { top, height } = containerRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      const scrollSpan = Math.max(1, height - viewportHeight);
      const scrollProgress = Math.min(1, Math.max(0, -top / scrollSpan));
      const index = Math.min(
        solutions.length - 1,
        Math.max(0, Math.floor(scrollProgress * solutions.length))
      );
      
      setScrollProgress(scrollProgress);
      setActiveIndex(index);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [solutions.length]);

  const scrollToSolution = (index: number) => {
    if (!containerRef.current) return;
    const { top, height } = containerRef.current.getBoundingClientRect();
    const viewportHeight = window.innerHeight;
    const scrollStart = window.scrollY + top;
    const scrollSpan = Math.max(0, height - viewportHeight);
    const step = solutions.length > 1 ? scrollSpan / (solutions.length - 1) : 0;
    const targetScroll = scrollStart + (index * step);
    window.scrollTo({ top: targetScroll, behavior: 'smooth' });
  };

  const stepCount = Math.max(1, solutions.length - 1);
  const segmentIndex = Math.max(0, Math.min(stepCount - 1, activeIndex - 1));
  const segmentFill = activeIndex > 0 ? 1 : 0;
  const sceneHeightVh = resolveHomeResponsiveValue(responsive, config.sceneHeightVh);
  const stickyClass = resolveHomeResponsiveValue(responsive, config.stickyClass);
  const containerClass = resolveHomeResponsiveValue(responsive, config.containerClass);
  const headerGapClass = resolveHomeResponsiveValue(responsive, config.headerGapClass);
  const contentGapClass = resolveHomeResponsiveValue(responsive, config.contentGapClass);
  const timelineHeightClass = resolveHomeResponsiveValue(responsive, config.timelineHeightClass);
  const timelineSpacingClass = resolveHomeResponsiveValue(responsive, config.timelineSpacingClass);
  const solutionNameClass = resolveHomeResponsiveValue(responsive, config.solutionNameClass);
  const descriptionMinHeightClass = resolveHomeResponsiveValue(responsive, config.descriptionMinHeightClass);
  const descriptionTextClass = resolveHomeResponsiveValue(responsive, config.descriptionTextClass);
  const visualClass = resolveHomeResponsiveValue(responsive, config.visualClass);
  const headingClass = resolveHomeResponsiveValue(responsive, config.headingClass);
  const leftColumnClass = resolveHomeResponsiveValue(responsive, config.leftColumnClass);
  const visualColumnClass = resolveHomeResponsiveValue(responsive, config.visualColumnClass);

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

    <div
      ref={containerRef}
      className="relative z-10 hidden lg:block bg-[#f8fbff]"
      style={{ height: `${sceneHeightVh}vh` }}
    >
      {/* Sticky Frame */}
      <section className={`sticky ${stickyClass} ${!responsive.isShortDesktop ? sectionY : ''} ${sectionShell}`}>
        
        <div className={`${sectionContainer} ${containerClass}`}>
          {/* Section Header */}
          <div className={`relative z-20 grid grid-cols-12 gap-8 max-[1365px]:gap-6 ${headerGapClass}`}>
            <div className="col-span-12 lg:col-span-3">
              <SectionEyebrow label="Our Solutions" />
            </div>
            <div className="col-span-12 lg:col-span-9 lg:translate-x-10 max-[1365px]:translate-x-0 xl:translate-x-24 2xl:translate-x-32">
              <h2 className={headingClass}>
                AI modules for every stage of clinical pathology.
              </h2>
            </div>
          </div>

          <div className={`grid grid-cols-12 items-center ${contentGapClass} max-[1365px]:gap-6`}>
            
            {/* Left side: Timeline Nav + Description */}
            <div className={`col-span-12 lg:col-span-3 relative flex flex-col order-2 lg:order-1 ${timelineHeightClass} ${leftColumnClass}`}>
              
              {/* The Connecting Line & Names */}
              <div className={`relative ${responsive.isShortDesktop ? 'mb-7' : 'mb-12'}`}>
                {/* Background Line */}
                <div className="absolute left-[3px] top-4 bottom-4 w-[2px] bg-slate-100 rounded-full"></div>
                
                {/* Active Line Segment */}
                <div 
                  className="absolute left-[3px] w-[2px] bg-cyan-500 transition-all duration-700 rounded-full"
                  style={{ 
                    top: `calc(16px + ((100% - 32px) / ${stepCount}) * ${segmentIndex})`,
                    height: `calc(((100% - 32px) / ${stepCount}) * ${segmentFill})`
                  }}
                ></div>

                <div className={`flex flex-col ${timelineSpacingClass}`}>
                  {solutions.map((s, idx) => (
                    <button 
                      key={s.id}
                      onClick={() => scrollToSolution(idx)}
                      className={`flex items-center space-x-6 group transition-all duration-500 text-left`}
                    >
                      <div className={`relative w-2 h-2 rounded-full border-2 transition-all duration-500 z-10
                        ${idx === activeIndex ? 'bg-cyan-500 border-cyan-500 scale-125' : 'bg-white border-slate-200 group-hover:border-slate-400'}`}
                      />
                  <span className={`${solutionNameClass}
                        ${idx === activeIndex ? 'text-[#00A0E9] translate-x-1' : 'text-slate-300 group-hover:text-slate-500'}`}>
                        {s.name}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Description swapping */}
              <div className={`relative ${descriptionMinHeightClass}`}>
                {solutions.map((s, idx) => (
                  <div 
                    key={s.id}
                    className={`absolute inset-0 transition-all duration-700 ease-in-out
                      ${idx === activeIndex ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 pointer-events-none'}`}
                  >
                    <p className={descriptionTextClass}>
                      {s.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right side: Medical Illustration swapping with glows */}
          <div className={`col-span-12 lg:col-span-9 order-1 lg:order-2 max-[1365px]:translate-x-0 flex ${visualColumnClass} ${visualClass}`}>
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
                      className="w-full h-full object-cover object-center"
                    />

                    {/* Scanning UI Element overlay */}
                    <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/10 to-transparent pointer-events-none"></div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>

      </section>
    </div>
    </>
  );
};
