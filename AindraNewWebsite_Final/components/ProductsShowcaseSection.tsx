
import React, { useState, useEffect, useRef } from 'react';
import intellistainImage from '../assets/ProductImages/IS-15.png';
import visionXImage from '../assets/ProductImages/VisionX2 (1).png';
import astraImage from '../assets/ProductImages/Astra.png';
import clustrImage from '../assets/ProductImages/ClustrHomePage.png';
import { SectionEyebrow } from './SectionEyebrow';
import { sectionContainer, sectionShell } from './layout';

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
  const containerRef = useRef<HTMLDivElement>(null);

  const products: ProductData[] = [
    {
      id: '01',
      title: 'Automated Staining',
      name: 'Intellistain',
      description: 'Automates the staining process with 100% consistency, reducing manual lab labor by 40% and ensuring high-quality slides for digital analysis.',
      image: intellistainImage,
      href: '#/intellistain',
      imageClass: 'scale-[1.24]',
    },
    {
      id: '02',
      title: 'WSI Scanning',
      name: 'VisionX',
      description: 'High-resolution Brightfield whole slide scanner. Captures digital slides in under 60 seconds with sub-micron precision for seamless remote diagnostics.',
      image: visionXImage,
      href: '#/visionx',
      imageClass: 'scale-[1.18]',
    },
    {
      id: '03',
      title: 'AI Analysis Engine',
      name: 'Astra',
      description: 'Deep learning engine that automatically screens and flags suspicious morphological features, reducing primary screening time by 70% with 99% accuracy.',
      image: astraImage,
      href: '#/astra',
      imageClass: 'scale-[1.08]',
    },
    {
      id: '04',
      title: 'Reporting Hub',
      name: 'Clustr',
      description: 'Centralized collaboration and reporting platform. Enables instant Bethesda & CAP guidelines standardized reports and remote case review from anywhere in the world.',
      image: clustrImage,
      href: '#/clustr',
      imageClass: 'scale-[1.1]',
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

  // Map 0-1 progress to a "staircase" index for clean state transitions
  const activeIndex = Math.min(products.length - 1, Math.floor(scrollProgress * products.length));
  const progressPerItem = 1 / products.length;

  // Fixed height for each stepper item to ensure perfect bar alignment
  const STEPPER_ITEM_HEIGHT = 80;

  return (
    <>
    <section className={`lg:hidden w-full ${sectionShell} py-12 sm:py-14 md:py-16 bg-white`}>
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

    <div ref={containerRef} className="relative hidden lg:block h-[600vh] bg-white">
      {/* Sticky Content Frame */}
      <section className={`sticky top-0 h-screen w-full overflow-hidden flex flex-col pt-32 pb-24 ${sectionShell}`}>
        <div className={sectionContainer}>
        
        {/* PERSISTENT HEADER */}
        <div className="relative z-20 grid grid-cols-12 gap-8 mb-8 lg:mb-12">
          <div className="col-span-12 lg:col-span-3">
            <SectionEyebrow label="Our Products" />
          </div>
          <div className="col-span-12 lg:col-span-9">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-medium text-slate-900 leading-[1.1] max-w-4xl">
              A Unified Ecosystem for Computational Pathology.
            </h2>
          </div>
        </div>

        {/* DYNAMIC CONTENT AREA */}
        <div className="relative z-10 grid grid-cols-12 gap-8 flex-1 items-center h-full">
          
          {/* Left Side: Vertical Stepper - Refined for Perfect Alignment */}
          <div className="col-span-12 lg:col-span-3 h-full flex items-center pr-4">
            <div className="relative w-full" style={{ height: `${products.length * STEPPER_ITEM_HEIGHT}px` }}>
              
              {/* Vertical Scroll Bar (Indicator) */}
              <div 
                className="absolute right-0 w-[4px] bg-[#00a3ff] hidden lg:block transition-all duration-700 cubic-bezier(0.23, 1, 0.32, 1) rounded-full shadow-[0_0_12px_rgba(0,163,255,0.4)]"
                style={{ 
                  top: `${activeIndex * STEPPER_ITEM_HEIGHT}px`, 
                  height: `${STEPPER_ITEM_HEIGHT - 10}px` 
                }}
              ></div>
              
              {products.map((p, idx) => (
                <div 
                  key={p.id} 
                  className={`flex flex-col justify-center text-right pr-8 lg:pr-12 transition-all duration-700 ease-in-out ${idx === activeIndex ? 'opacity-100 scale-105 origin-right' : 'opacity-10 scale-95 origin-right'}`}
                  style={{ height: `${STEPPER_ITEM_HEIGHT}px` }}
                >
                  <span className={`block text-lg font-black tracking-tighter mb-0.5 transition-colors duration-500 ${idx === activeIndex ? 'text-[#00a3ff]' : 'text-slate-400'}`}>
                    {p.id}
                  </span>
                  <span className={`text-sm lg:text-[15px] font-black uppercase tracking-tight block leading-[1.2] transition-colors duration-500 ${idx === activeIndex ? 'text-slate-900' : 'text-slate-300'}`}>
                    {p.title}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Center: Dynamic Image Transition Area */}
          <div className="col-span-12 lg:col-span-5 flex justify-center h-full items-center relative">
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
                      <div className="relative w-full max-w-[520px] lg:max-w-[620px] px-2">
                        <div className="absolute inset-0 bg-blue-50 blur-[100px] rounded-full opacity-60"></div>
                        <img 
                          src={p.image} 
                          alt={p.name} 
                          className={`relative z-10 w-full h-auto max-h-[52vh] lg:max-h-[60vh] object-contain drop-shadow-[0_40px_80px_rgba(0,0,0,0.1)] ${p.imageClass ?? ''}`}
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
          <div className="col-span-12 lg:col-span-4 pl-0 lg:pl-16 h-full flex items-center relative">
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
                  className="absolute inset-x-0 lg:left-16 space-y-6 lg:space-y-8 transition-all duration-300 ease-out"
                  style={{ 
                    opacity: Math.max(0, resolvedOpacity),
                    transform: `translateY(${translateY}px)`,
                    visibility: isActive || resolvedOpacity > 0.02 ? 'visible' : 'hidden',
                  }}
                 >
                   <div className="space-y-4 lg:space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-8 h-8 lg:w-10 lg:h-10 bg-[#00a3ff] rounded-md flex items-center justify-center text-sm font-black text-white shadow-xl shadow-blue-200">
                        {p.id}
                      </div>
                      <h3 className="text-4xl lg:text-6xl font-bold text-slate-900 tracking-tighter border-b-[4px] border-[#00a3ff]/20 inline-block pb-2 lg:pb-3">
                        {p.name}
                      </h3>
                    </div>
                    <p className="text-base lg:text-lg text-slate-500 leading-relaxed font-light max-w-sm">
                      {p.description}
                    </p>
                  </div>
                  
                  <div className="pt-2 lg:pt-4">
                    <a href={p.href} className="group inline-flex items-center space-x-4 px-8 lg:px-10 py-3 lg:py-4 bg-slate-900 text-white rounded-full font-bold text-[11px] lg:text-[12px] tracking-widest uppercase hover:bg-[#00a3ff] transition-all shadow-xl shadow-slate-200 active:scale-95">
                      <span>Explore {p.name}</span>
                      <svg className="w-4 h-4 lg:w-5 lg:h-5 transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
