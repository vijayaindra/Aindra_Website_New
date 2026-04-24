
import React, { useState, useEffect, useRef } from 'react';
import samplePreparationImage from '../assets/ProductImages/Sample Preparation.png';
import digitizationSlideImage from '../assets/ProductImages/Digitization of Slide.png';
import aiImageAnalysisImage from '../assets/ProductImages/AI Based Image Analysis.png';
import reviewReportingImage from '../assets/ProductImages/Review and Reporting.png';
import backgroundImage from '../assets/ProductImages/Background Image.png';

interface WorkflowStep {
  id: string;
  title: string;
  caption: string;
  imageSrc: string;
}

export const UnifiedWorkflowSection: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const steps: WorkflowStep[] = [
    {
      id: '01',
      title: 'Sample Preparation',
      caption: 'It has survived not only five centuries, but also the leap into electronic typesetting.',
      imageSrc: samplePreparationImage,
    },
    {
      id: '02',
      title: 'Digitization of Slide',
      caption: 'It has survived not only five centuries, but also the leap into electronic typesetting.',
      imageSrc: digitizationSlideImage,
    },
    {
      id: '03',
      title: 'AI Based Image Analysis',
      caption: 'It has survived not only five centuries, but also the leap into electronic typesetting.',
      imageSrc: aiImageAnalysisImage,
    },
    {
      id: '04',
      title: 'Review and Reporting',
      caption: 'It has survived not only five centuries, but also the leap into electronic typesetting.',
      imageSrc: reviewReportingImage,
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

  const totalSlides = steps.length + 1; 
  const currentSlideProgress = scrollProgress * (totalSlides - 1);
  const introX = (0 - currentSlideProgress) * 100;
  const introOpacity = 1 - Math.abs(currentSlideProgress) * 1.5;
  const stepperOpacity = Math.max(0, Math.min(1, (currentSlideProgress - 0.2) * 2));
  const activeStepIdx = Math.round(Math.max(0, currentSlideProgress - 1));

  return (
    <>
    <section className="lg:hidden w-full bg-white px-4 sm:px-6 md:px-8 py-12 sm:py-14 md:py-16">
      <div className="mx-auto w-full max-w-[1400px]">
        <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
          We’ve condensed the pathology workflow from staining to screening into four steps.
        </p>
        <div className="mt-6 space-y-4">
          {steps.map((step) => (
            <article key={step.id} className="rounded-2xl border border-slate-200 p-4">
              <div className="text-3xl font-bold text-[#00a3ff]">{step.id}</div>
              <h3 className="mt-1 text-xl font-semibold text-slate-900">{step.title}</h3>
              <div className="mt-3 overflow-hidden rounded-xl border border-slate-100 bg-slate-50">
                <img
                  src={step.imageSrc}
                  alt={step.title}
                  className="w-full aspect-[1590/559] object-contain object-center"
                  loading="lazy"
                />
              </div>
              <p className="mt-2 text-sm text-slate-600">{step.caption}</p>
            </article>
          ))}
        </div>
      </div>
    </section>

    <div ref={containerRef} className="relative hidden lg:block h-[900vh] bg-white">
      <section className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden">
        
        {/* Persistent Background */}
        <div
          className="absolute inset-0 z-0 pointer-events-none transition-opacity duration-300"
          style={{
            opacity: Math.max(0.16, Math.min(0.58, introOpacity * 0.58)),
          }}
        >
          <img 
            src={backgroundImage}
            alt="" aria-hidden="true" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-white/24"></div>
        </div>

        {/* Narrative Intro Content - Now a Sliding Page */}
        <div 
          className="absolute inset-0 z-20 flex items-center justify-center px-6 md:px-12 lg:px-24 pointer-events-none transition-transform duration-75 ease-out"
          style={{ 
            opacity: Math.max(0, introOpacity),
            transform: `translateX(${introX}%)`,
            visibility: introOpacity > 0 ? 'visible' : 'hidden',
          }}
        >
          <div className="max-w-5xl text-center">
            <p className="text-xl md:text-3xl lg:text-4xl xl:text-5xl font-medium leading-tight text-slate-900 text-balance px-4">
              We’ve condensed the entire pathology lab from <span className="text-[#00a3ff] font-bold">staining</span> to <span className="text-[#00a3ff] font-bold">screening</span> into a unified digital workflow in 4 steps. No more fragmented tools or data silos. Just a seamless journey from physical glass to clinical insight.
            </p>
          </div>
        </div>

        {/* Horizontal Workflow Experience */}
        <div className="absolute inset-0 z-10 flex items-center justify-center">
          
          {/* Custom Stepper - Fades in */}
          <div 
            className="absolute top-24 md:top-32 w-full flex justify-center z-50 transition-opacity duration-500 px-6"
            style={{ opacity: stepperOpacity }}
          >
            <div className="relative flex items-center w-full max-w-[340px] h-12">
              <div className="absolute top-1/2 left-[3%] right-[3%] h-[3px] bg-[#d1d5db] -translate-y-1/2"></div>
              <div className="flex justify-between w-full relative">
                {steps.map((_, idx) => (
                  <div 
                    key={idx}
                    className={`w-5 h-5 md:w-6 md:h-6 rounded-full border-[3px] bg-white transition-all duration-500 z-10 flex items-center justify-center
                      ${idx === activeStepIdx 
                        ? 'border-[#00a3ff] scale-110 shadow-[0_0_15px_rgba(0,163,255,0.4)]' 
                        : 'border-[#9ca3af]'}`}
                  >
                     {idx === activeStepIdx && (
                       <div className="w-2 md:w-2.5 h-2 md:h-2.5 bg-[#00a3ff] rounded-full animate-pulse"></div>
                     )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Slides Viewport */}
          <div className="relative w-full max-w-6xl px-6 md:px-12 h-[80vh] flex flex-col justify-center">
            {steps.map((step, idx) => {
              const xPos = (idx + 1 - currentSlideProgress) * 100;
              const opacity = 1 - Math.abs(idx + 1 - currentSlideProgress) * 1.2;

              return (
                <div 
                  key={step.id}
                  className="absolute inset-0 flex flex-col items-start justify-center transition-transform duration-75 ease-out"
                  style={{ 
                    transform: `translateX(${xPos}%)`,
                    opacity: Math.max(0, opacity),
                    pointerEvents: Math.abs(idx + 1 - currentSlideProgress) < 0.5 ? 'auto' : 'none',
                    visibility: opacity > 0 ? 'visible' : 'hidden',
                  }}
                >
                  <div className="w-full flex flex-col">
                    <div className="text-7xl md:text-[140px] font-bold text-[#00a3ff] leading-[0.8] tracking-tight mb-2 opacity-90 select-none">
                      {step.id}
                    </div>
                    
                    <h3 className="text-xl md:text-4xl font-medium text-slate-900 mb-4 md:mb-6">
                      {step.title}
                    </h3>

                    <div className="relative w-full max-w-5xl aspect-[1590/559] overflow-hidden flex items-center justify-center">
                      <img
                        src={step.imageSrc}
                        alt={step.title}
                        className="w-full h-full object-contain object-center"
                        loading="lazy"
                      />
                      <div className="absolute right-0 top-1/2 w-screen h-[1px] bg-slate-100 translate-x-full"></div>
                    </div>

                    <p className="mt-6 md:mt-8 text-slate-700 text-sm md:text-lg font-light leading-relaxed max-w-2xl px-1">
                      {step.caption}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </section>
    </div>
    </>
  );
};
