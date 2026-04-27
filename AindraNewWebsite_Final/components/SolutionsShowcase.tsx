
import React, { useState, useEffect, useRef } from 'react';
import cervAstraImage from '../assets/ProductImages/CervAstra.png';
import lungAstraImage from '../assets/ProductImages/LungAstra.png';
import proAstraImage from '../assets/ProductImages/ProAstra.png';
import thyroAstraImage from '../assets/ProductImages/ThyroAstra.png';
import { SectionEyebrow } from './SectionEyebrow';
import { sectionContainer, sectionShell, sectionY } from './layout';

interface Solution {
  id: string;
  name: string;
  description: string;
  image: string;
}

export const SolutionsShowcase: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
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

    <div ref={containerRef} className="relative hidden lg:block h-[400vh] bg-[#f8fbff]">
      {/* Sticky Frame */}
      <section className={`sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden ${sectionShell} ${sectionY}`}>
        
        <div className={sectionContainer}>
          {/* Section Header */}
          <div className="relative z-20 grid grid-cols-12 gap-8 mb-10 lg:mb-14">
            <div className="col-span-12 lg:col-span-3">
              <SectionEyebrow label="Our Solutions" />
            </div>
            <div className="col-span-12 lg:col-span-9">
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-medium text-slate-900 leading-[1.1] max-w-4xl">
                AI modules for every stage of clinical pathology.
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-12 gap-10 items-center">
            
            {/* Left side: Timeline Nav + Description */}
            <div className="col-span-12 lg:col-span-3 relative flex flex-col justify-center order-2 lg:order-1 h-[500px]">
              
              {/* The Connecting Line & Names */}
              <div className="relative mb-12">
                {/* Background Line */}
                <div className="absolute left-[3px] top-4 bottom-4 w-[2px] bg-slate-100 rounded-full"></div>
                
                {/* Active Line Segment */}
                <div 
                  className="absolute left-[3px] w-[2px] bg-cyan-500 transition-all duration-700 rounded-full"
                  style={{ 
                    top: `${activeIndex * 25}%`, 
                    height: '25%',
                    marginTop: '16px'
                  }}
                ></div>

                <div className="flex flex-col space-y-7">
                  {solutions.map((s, idx) => (
                    <button 
                      key={s.id}
                      onClick={() => scrollToSolution(idx)}
                      className={`flex items-center space-x-6 group transition-all duration-500 text-left`}
                    >
                      <div className={`relative w-2 h-2 rounded-full border-2 transition-all duration-500 z-10
                        ${idx === activeIndex ? 'bg-cyan-500 border-cyan-500 scale-125' : 'bg-white border-slate-200 group-hover:border-slate-400'}`}
                      />
                      <span className={`text-2xl lg:text-3xl font-bold tracking-tight transition-all duration-500
                        ${idx === activeIndex ? 'text-slate-900 translate-x-1' : 'text-slate-300 group-hover:text-slate-500'}`}>
                        {s.name}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Description swapping */}
              <div className="relative h-44">
                {solutions.map((s, idx) => (
                  <div 
                    key={s.id}
                    className={`absolute inset-0 transition-all duration-700 ease-in-out
                      ${idx === activeIndex ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 pointer-events-none'}`}
                  >
                    <p className="text-xl lg:text-2xl text-slate-500 leading-relaxed font-light max-w-md">
                      {s.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right side: Medical Illustration swapping with glows */}
            <div className="col-span-12 lg:col-span-9 relative aspect-[11/6] order-1 lg:order-2">
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
        <div className="absolute right-12 top-1/2 -translate-y-1/2 hidden lg:flex flex-col space-y-4">
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
