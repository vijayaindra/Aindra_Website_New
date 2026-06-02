
import React, { useState, useEffect, useRef } from 'react';
import intellistainImage from '../assets/ProductImages/IS-15.png';
import visionXImage from '../assets/ProductImages/VisionX2 (1).png';
import astraImage from '../assets/ProductImages/After.png';
import clustrImage from '../assets/ProductImages/ClustrHomePage.png';
import { SectionEyebrow } from './SectionEyebrow';
import { sectionContainer, sectionShell, sectionY } from './layout';

interface ProductData {
  id: string;
  title: string;
  name: string;
  description: string;
  image: string;
  href: string;
  isCustomUI?: boolean;
  imageClass?: string;
}

export const ProductsShowcaseSection: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isCompactHeight, setIsCompactHeight] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const products: ProductData[] = [
    {
      id: '01',
      title: 'Automated Staining',
      name: 'Intellistain',
      description: 'Automates the staining process with 100% consistency, reducing manual lab labor by 40% and ensuring high-quality slides for digital analysis.',
      image: intellistainImage,
      href: '#/intellistain',
      imageClass: 'scale-[1.08] xl:scale-[1.12]',
    },
    {
      id: '02',
      title: 'WSI Scanning',
      name: 'VisionX',
      description: 'High-resolution Brightfield whole slide scanner. Captures digital slides in under 60 seconds with sub-micron precision for seamless remote diagnostics.',
      image: visionXImage,
      href: '#/visionx',
      imageClass: 'scale-[1.04] xl:scale-[1.08]',
    },
    {
      id: '03',
      title: 'AI Analysis Engine',
      name: 'Astra',
      description: 'Deep learning engine that automatically screens and flags suspicious morphological features, reducing primary screening time by 70% with 99% accuracy.',
      image: astraImage,
      href: '#/astra',
      imageClass: 'scale-[1.02] xl:scale-[1.05]',
    },
    {
      id: '04',
      title: 'Reporting Hub',
      name: 'Clustr',
      description: 'Centralized collaboration and reporting platform. Enables instant Bethesda & CAP guidelines standardized reports and remote case review from anywhere in the world.',
      image: clustrImage,
      href: '#/clustr',
      imageClass: 'scale-[1.03] xl:scale-[1.06]',
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const { top, height } = containerRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const progress = -top / (height - viewportHeight);
      setScrollProgress(Math.min(1, Math.max(0, progress)));
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsCompactHeight(window.innerHeight <= 780);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Map 0-1 progress to a "staircase" index for clean state transitions
  const activeIndex = Math.min(products.length - 1, Math.floor(scrollProgress * products.length));
  const progressPerItem = 1 / products.length;
  const STEPPER_ITEM_HEIGHT = isCompactHeight ? 62 : 80;

  const scrollToProduct = (index: number) => {
    if (!containerRef.current) return;
    const { top } = containerRef.current.getBoundingClientRect();
    const targetScroll = window.scrollY + top + (index * window.innerHeight);
    window.scrollTo({ top: targetScroll, behavior: 'smooth' });
  };

  return (
    <>
    <section className={`lg:hidden w-full ${sectionShell} ${sectionY} bg-white`}>
      <div className={sectionContainer}>
        <div className="mb-8">
          <SectionEyebrow label="Our Products" />
          <h2 className="mt-3 text-2xl sm:text-3xl font-medium text-slate-900 leading-[1.15] max-w-3xl">
            A Unified Ecosystem for Computational Pathology.
          </h2>
        </div>
        <div className="space-y-6">
          {products.map((p) => (
            <article key={p.id} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-md bg-[#00a3ff] text-xs font-black text-white">{p.id}</div>
                <h3 className="text-2xl font-bold text-slate-900 tracking-tight">{p.name}</h3>
              </div>
              <div className="mb-4 overflow-hidden rounded-xl border border-slate-100 bg-slate-50">
                {p.isCustomUI ? (
                  <div className="h-40 w-full bg-gradient-to-br from-slate-100 to-slate-200" />
                ) : (
                  <img
                    src={p.image}
                    alt={p.name}
                    className="h-44 w-full object-contain p-3"
                    onError={(e) => {
                      e.currentTarget.src = "https://images.unsplash.com/photo-1579165466541-71835479444a?q=80&w=800&auto=format&fit=crop";
                    }}
                  />
                )}
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">{p.description}</p>
              <a href={p.href} className="mt-4 inline-flex min-h-11 items-center rounded-full bg-slate-900 px-5 py-2 text-xs font-bold tracking-wider uppercase text-white hover:bg-[#00a3ff] transition-colors">
                Explore {p.name}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>

    <div ref={containerRef} className={`relative z-10 hidden lg:block ${isCompactHeight ? 'h-[410vh] max-h-[900px]:h-[390vh] max-h-[820px]:h-[370vh] max-h-[800px]:h-[345vh] max-h-[750px]:h-[320vh] max-h-[700px]:h-[300vh]' : 'h-[400vh] max-h-[800px]:h-[345vh] max-h-[750px]:h-[320vh] max-h-[700px]:h-[300vh]'} bg-white`}>
      {/* Sticky Content Frame */}
      <section className={`sticky ${isCompactHeight ? 'top-20 sm:top-24 h-[calc(100svh-5rem)] sm:h-[calc(100svh-6rem)] py-3 min-h-0' : 'top-20 sm:top-24 h-[calc(100svh-5rem)] sm:h-[calc(100svh-6rem)]'} ${isCompactHeight ? '' : `min-h-[620px] xl:min-h-[660px] 2xl:min-h-[740px] ${sectionY}`} max-h-[900px]:h-[calc(100svh-5rem)] sm:max-h-[900px]:h-[calc(100svh-6rem)] max-h-[900px]:py-3 max-h-[820px]:h-[calc(100svh-5rem)] sm:max-h-[820px]:h-[calc(100svh-6rem)] max-h-[800px]:h-[calc(100svh-5rem)] sm:max-h-[800px]:h-[calc(100svh-6rem)] max-h-[800px]:py-2.5 max-h-[800px]:items-start max-h-[800px]:justify-start max-h-[750px]:h-[calc(100svh-5rem)] sm:max-h-[750px]:h-[calc(100svh-6rem)] max-h-[750px]:py-2 max-h-[750px]:items-start max-h-[750px]:justify-start max-h-[700px]:h-[calc(100svh-5rem)] sm:max-h-[700px]:h-[calc(100svh-6rem)] max-h-[700px]:items-start max-h-[700px]:justify-start w-full overflow-visible lg:overflow-hidden flex flex-col bg-white isolate ${sectionShell}`}>
        <div className={`${sectionContainer} max-h-[800px]:pt-6 max-h-[750px]:pt-5 max-h-[700px]:pt-4`}>
        
        {/* PERSISTENT HEADER */}
        <div className={`relative z-20 grid grid-cols-12 gap-5 xl:gap-6 2xl:gap-8 ${isCompactHeight ? 'mb-3' : 'mb-5 xl:mb-7 2xl:mb-14'} max-h-[900px]:mb-3 max-h-[820px]:mb-2 max-h-[800px]:mb-2.5 max-h-[750px]:mb-2 max-[900px]:mb-2`}>
          <div className="col-span-12 lg:col-span-3">
            <SectionEyebrow label="Our Products" />
          </div>
          <div className="col-span-12 lg:col-span-9">
            <h2 className={`${isCompactHeight ? 'text-[clamp(1.9rem,2.7vw,2.35rem)] md:text-[clamp(2rem,2.9vw,2.45rem)]' : 'text-3xl md:text-5xl xl:text-[56px] 2xl:text-6xl'} max-h-[900px]:text-[clamp(2.2rem,3.2vw,2.9rem)] max-h-[900px]:leading-[1.05] max-h-[820px]:text-[clamp(2rem,3vw,2.6rem)] max-h-[800px]:text-[clamp(2.2rem,3.65vw,3rem)] max-h-[800px]:max-w-[56rem] max-h-[750px]:text-[clamp(2rem,3.35vw,2.65rem)] max-h-[750px]:max-w-[50rem] max-h-[700px]:text-[clamp(1.85rem,3vw,2.4rem)] max-h-[700px]:max-w-[46rem] max-[900px]:text-[34px] max-[900px]:leading-[1.04] font-medium text-slate-900 leading-[1.08] max-w-4xl`}>
              A Unified Ecosystem for Computational Pathology.
            </h2>
          </div>
        </div>

        {/* DYNAMIC CONTENT AREA */}
        <div className={`relative z-10 grid grid-cols-12 ${isCompactHeight ? 'gap-3' : 'gap-4 xl:gap-6 2xl:gap-10'} max-[900px]:gap-3 max-h-[800px]:gap-2.5 max-h-[750px]:gap-2 flex-1 items-center h-full`}>
          
          {/* Left Side: Original visual style, now clickable */}
          <div className="col-span-12 lg:col-span-3 h-full flex items-center pr-2">
            <div className="relative w-full" style={{ height: `${products.length * STEPPER_ITEM_HEIGHT}px` }}>
              <div 
                className="absolute right-0 w-[4px] bg-[#00a3ff] hidden xl:block transition-all duration-700 cubic-bezier(0.23, 1, 0.32, 1) rounded-full shadow-[0_0_12px_rgba(0,163,255,0.4)]"
                style={{ 
                  top: `${activeIndex * STEPPER_ITEM_HEIGHT}px`, 
                  height: `${STEPPER_ITEM_HEIGHT - 10}px` 
                }}
              ></div>

              {products.map((p, idx) => (
                <button
                  key={p.id}
                  onClick={() => scrollToProduct(idx)}
                  className={`w-full flex flex-col justify-center text-right pr-8 lg:pr-12 transition-all duration-700 ease-in-out ${idx === activeIndex ? 'opacity-100 scale-105 origin-right' : 'opacity-50 scale-95 origin-right hover:opacity-80'}`}
                  style={{ height: `${STEPPER_ITEM_HEIGHT}px` }}
                >
                  <span className={`block text-lg max-h-[800px]:text-[15px] max-h-[750px]:text-[14px] font-black tracking-tighter mb-0.5 transition-colors duration-500 ${idx === activeIndex ? 'text-[#00a3ff]' : 'text-slate-400'}`}>
                    {p.id}
                  </span>
                  <span className={`text-sm lg:text-[15px] max-[900px]:text-[13px] max-h-[800px]:lg:text-[13px] max-h-[750px]:lg:text-[12px] font-black uppercase tracking-tight block leading-[1.2] transition-colors duration-500 ${idx === activeIndex ? 'text-slate-900' : 'text-slate-300 group-hover:text-slate-500'}`}>
                    {p.title}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Center: Dynamic Image Transition Area */}
          <div className="col-span-12 lg:col-span-5 2xl:col-span-6 flex justify-center h-full items-center relative">
             {products.map((p, idx) => {
               const start = idx * progressPerItem;
               const end = (idx + 1) * progressPerItem;
               const relativeProgress = (scrollProgress - start) / (end - start);
               const isActive = idx === activeIndex;
               
               let opacity = 0;
               if (relativeProgress >= 0 && relativeProgress <= 1) {
                  if (relativeProgress < 0.15) opacity = relativeProgress / 0.15;
                  else if (relativeProgress > 0.85) opacity = 1 - (relativeProgress - 0.85) / 0.15;
                  else opacity = 1;
               }

               const resolvedOpacity = isActive ? Math.max(opacity, 0.98) : opacity;
               const scale = isActive ? 1 : 0.9 + resolvedOpacity * 0.1;
               const blur = isActive ? 0 : (1 - resolvedOpacity) * 6;

               return (
                 <div 
                  key={p.id}
                  className="absolute inset-0 flex items-center justify-center pointer-events-none transition-all duration-300 ease-out"
                  style={{ 
                    opacity: Math.max(0, resolvedOpacity),
                    transform: `scale(${scale}) translateY(${isActive ? 0 : (1 - resolvedOpacity) * 30}px)`,
                    filter: `blur(${blur}px)`,
                    visibility: isActive || resolvedOpacity > 0.02 ? 'visible' : 'hidden',
                  }}
                 >
                    {p.isCustomUI ? (
                      <div className="relative w-full max-w-xl">
                        <div className="bg-black rounded-t-xl p-2 pb-0 shadow-2xl border-x-4 border-t-4 border-slate-800">
                          <div className="bg-white rounded-t-lg overflow-hidden h-[180px] lg:h-[220px] flex flex-col">
                            <div className="px-4 py-2 border-b border-slate-100 flex items-center justify-between bg-white">
                               <span className="text-[10px] font-extrabold tracking-tighter text-cyan-500">AiNDRA</span>
                               <div className="flex space-x-1">
                                 <div className="w-1 h-1 rounded-full bg-slate-200"></div>
                                 <div className="w-1 h-1 rounded-full bg-slate-200"></div>
                               </div>
                            </div>
                            <div className="flex-1 p-4 bg-[#f8fbff] grid grid-cols-2 gap-4">
                              <div className="space-y-2">
                                <div className="h-4 w-3/4 bg-slate-200 rounded"></div>
                                <div className="h-3 w-1/2 bg-slate-100 rounded"></div>
                              </div>
                              <div className="bg-slate-900 rounded-lg h-20 overflow-hidden flex items-center justify-center">
                                <div className="w-6 h-6 rounded-full border border-cyan-500/30 animate-ping"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="w-full flex flex-col items-center">
                          <div className="w-14 h-6 lg:h-10 bg-slate-300"></div>
                          <div className="w-20 h-2 bg-slate-400 rounded-b-xl"></div>
                        </div>
                      </div>
                    ) : (
                      <div className="relative w-full max-w-[700px] xl:max-w-[760px] 2xl:max-w-[860px] max-h-[800px]:max-w-[660px] max-h-[750px]:max-w-[600px] max-h-[700px]:max-w-[540px]">
                        <div className="absolute inset-0 bg-blue-50 blur-[100px] rounded-full opacity-60"></div>
                        <img 
                          src={p.image} 
                          alt={p.name} 
                          className={`relative z-10 w-full h-auto max-h-[40vh] xl:max-h-[46vh] 2xl:max-h-[56vh] max-h-[900px]:max-h-[34vh] max-h-[820px]:max-h-[30vh] max-h-[800px]:max-h-[36vh] max-h-[750px]:max-h-[33vh] max-h-[700px]:max-h-[29vh] max-[900px]:max-h-[32vh] max-[820px]:max-h-[29vh] object-contain drop-shadow-[0_40px_80px_rgba(0,0,0,0.1)] ${p.imageClass ?? ''}`}
                          onError={(e) => {
                            e.currentTarget.src = "https://images.unsplash.com/photo-1579165466541-71835479444a?q=80&w=800&auto=format&fit=crop";
                          }}
                        />
                      </div>
                    )}
                 </div>
               );
             })}
          </div>

          {/* Right Side: Product Details */}
          <div className="col-span-12 lg:col-span-4 2xl:col-span-3 pl-0 xl:pl-2 2xl:pl-6 h-full flex items-center relative">
            {products.map((p, idx) => {
               const start = idx * progressPerItem;
               const end = (idx + 1) * progressPerItem;
               const relativeProgress = (scrollProgress - start) / (end - start);
               const isActive = idx === activeIndex;
               
               let opacity = 0;
               if (relativeProgress >= 0 && relativeProgress <= 1) {
                  if (relativeProgress < 0.2) opacity = relativeProgress / 0.2;
                  else if (relativeProgress > 0.8) opacity = 1 - (relativeProgress - 0.8) / 0.2;
                  else opacity = 1;
               }

               const resolvedOpacity = isActive ? Math.max(opacity, 0.98) : opacity;
               const translateY = isActive ? 0 : (1 - resolvedOpacity) * 40;

               return (
                 <div 
                  key={p.id}
                  className="absolute inset-x-0 xl:left-2 2xl:left-8 space-y-4 xl:space-y-5 2xl:space-y-9 max-[900px]:space-y-3 transition-all duration-300 ease-out"
                  style={{ 
                    opacity: Math.max(0, resolvedOpacity),
                    transform: `translateY(${translateY}px)`,
                    visibility: isActive || resolvedOpacity > 0.02 ? 'visible' : 'hidden',
                  }}
                 >
                   <div className="space-y-4 xl:space-y-5 2xl:space-y-7">
                    <div className="flex items-center space-x-3 xl:space-x-4">
                      <div className="w-7 h-7 xl:w-8 xl:h-8 2xl:w-10 2xl:h-10 bg-[#00a3ff] rounded-md flex items-center justify-center text-xs xl:text-sm font-black text-white shadow-xl shadow-blue-200">
                        {p.id}
                      </div>
                      <h3 className={`${isCompactHeight ? 'text-[40px] xl:text-[44px] max-[900px]:text-[36px] max-[820px]:text-[33px]' : 'text-[50px] xl:text-[56px] 2xl:text-6xl max-[900px]:text-[44px] max-[820px]:text-[40px]'} max-h-[800px]:text-[42px] max-h-[750px]:text-[38px] max-h-[700px]:text-[33px] font-bold text-slate-900 tracking-tighter border-b-[4px] border-[#00a3ff]/20 inline-block pb-1.5 xl:pb-3`}>
                        {p.name}
                      </h3>
                    </div>
                    <p className="text-base xl:text-lg 2xl:text-xl max-[900px]:text-[15px] max-[900px]:leading-[1.35] max-h-[800px]:text-[15px] max-h-[750px]:text-[14px] max-h-[700px]:text-[13px] text-slate-500 leading-[1.35] font-light max-w-md">
                      {p.description}
                    </p>
                  </div>
                  
                  <div className="pt-1 xl:pt-2 2xl:pt-4 max-h-[800px]:pt-1 max-h-[750px]:pt-0.5">
                    <a href={p.href} className="group inline-flex items-center space-x-4 px-7 xl:px-9 2xl:px-12 max-[900px]:px-7 py-3 xl:py-3.5 2xl:py-4 max-[900px]:py-2.5 max-h-[800px]:px-6 max-h-[800px]:py-2.5 max-h-[750px]:px-5 max-h-[750px]:py-2 bg-slate-900 text-white rounded-full font-bold text-[11px] xl:text-[12px] 2xl:text-[13px] max-h-[800px]:text-[10px] tracking-widest uppercase hover:bg-[#00a3ff] transition-all shadow-xl shadow-slate-200 active:scale-95">
                      <span>Explore {p.name}</span>
                      <svg className="w-4 h-4 xl:w-4 xl:h-4 2xl:w-5 2xl:h-5 transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </a>
                  </div>
                 </div>
               );
            })}
          </div>

        </div>
        </div>
      </section>
    </div>
    </>
  );
};
