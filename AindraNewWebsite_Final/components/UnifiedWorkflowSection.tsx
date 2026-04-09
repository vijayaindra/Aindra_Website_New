
import React, { useState, useEffect, useRef } from 'react';

interface WorkflowStep {
  id: string;
  title: string;
  caption: string;
  illustration: React.ReactNode;
}

export const UnifiedWorkflowSection: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const steps: WorkflowStep[] = [
    {
      id: '01',
      title: 'Sample Preparation',
      caption: 'It has survived not only five centuries, but also the leap into electronic typesetting.',
      illustration: (
        <svg viewBox="0 0 1000 300" className="w-full h-full text-[#00a3ff]" fill="none" stroke="currentColor" strokeWidth="1">
          <path d="M350 250 L500 250 L540 210 L390 210 Z" className="fill-blue-50/20" />
          <path d="M420 230 L570 230 L610 190 L460 190 Z" className="fill-blue-50/20" />
          <path d="M490 210 L640 210 L680 170 L530 170 Z" className="fill-blue-50/20" />
          <path d="M560 190 L710 190 L750 150 L600 150 Z" className="fill-blue-50/20" />
          <path d="M440 80 Q450 120 440 150" strokeDasharray="3 3" />
          <path d="M440 40 Q455 50 440 65 Q425 50 440 40" />
          <path d="M510 60 Q520 100 510 130" strokeDasharray="3 3" />
          <path d="M510 20 Q525 30 510 45 Q495 30 510 20" />
          <path d="M120 180 Q150 140 180 180 T240 170" strokeWidth="0.5" />
          <circle cx="150" cy="190" r="25" className="opacity-10" />
        </svg>
      ),
    },
    {
      id: '02',
      title: 'Digitization of Slide',
      caption: 'It has survived not only five centuries, but also the leap into electronic typesetting.',
      illustration: (
        <svg viewBox="0 0 1000 300" className="w-full h-full text-[#00a3ff]" fill="none" stroke="currentColor" strokeWidth="1">
          <path d="M350 100 H750" strokeWidth="2" />
          <path d="M390 100 V160" strokeWidth="2" />
          <rect x="580" y="120" width="12" height="12" className="fill-current" />
          <rect x="600" y="130" width="10" height="10" className="fill-current opacity-70" />
          <path d="M150 220 L330 220 L370 180 L190 180 Z" className="fill-blue-50/20" />
          <path d="M280 220 L460 220 L500 180 L320 180 Z" className="fill-blue-50/20" />
          <path d="M410 220 L590 220 L630 180 L450 180 Z" className="fill-blue-50/20" />
        </svg>
      ),
    },
    {
      id: '03',
      title: 'AI Based Image Analysis',
      caption: 'It has survived not only five centuries, but also the leap into electronic typesetting.',
      illustration: (
        <svg viewBox="0 0 1000 300" className="w-full h-full text-[#00a3ff]" fill="none" stroke="currentColor" strokeWidth="1">
          <circle cx="450" cy="130" r="30" className="fill-blue-50/20" />
          <path d="M450 130 L580 70" />
          <path d="M450 130 L580 190" />
          <rect x="580" y="40" width="200" height="100" rx="4" />
          <rect x="580" y="160" width="200" height="100" rx="4" />
          <path d="M180 200 L280 200 L310 180 L210 180 Z" className="opacity-30" />
        </svg>
      ),
    },
    {
      id: '04',
      title: 'Review and Reporting',
      caption: 'It has survived not only five centuries, but also the leap into electronic typesetting.',
      illustration: (
        <svg viewBox="0 0 1000 300" className="w-full h-full text-[#00a3ff]" fill="none" stroke="currentColor" strokeWidth="1">
          <rect x="350" y="100" width="220" height="120" rx="2" />
          <path d="M360 120 H560" strokeWidth="0.5" />
          <g transform="translate(280, 200)"><circle cx="0" cy="0" r="30" /><path d="M-15 10 Q0 0 15 10" /></g>
          <g transform="translate(580, 100)"><circle cx="0" cy="0" r="30" /><path d="M-15 10 Q0 0 15 10" /></g>
          <g transform="translate(620, 240)"><circle cx="0" cy="0" r="30" /><path d="M-15 10 Q0 0 15 10" /></g>
          <path d="M350 160 L315 200" strokeDasharray="3 3" />
          <path d="M570 130 L580 100" strokeDasharray="3 3" />
        </svg>
      ),
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
      <div className="mx-auto w-full max-w-[1280px]">
        <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
          We’ve condensed the pathology workflow from staining to screening into four steps.
        </p>
        <div className="mt-6 space-y-4">
          {steps.map((step) => (
            <article key={step.id} className="rounded-2xl border border-slate-200 p-4">
              <div className="text-3xl font-bold text-[#00a3ff]">{step.id}</div>
              <h3 className="mt-1 text-xl font-semibold text-slate-900">{step.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{step.caption}</p>
            </article>
          ))}
        </div>
      </div>
    </section>

    <div ref={containerRef} className="relative hidden lg:block h-[900vh] bg-white">
      <section className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden">
        
        {/* Persistent Background */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1631553127988-3475968f583f?q=80&w=2400&auto=format&fit=crop" 
            alt="Continuous Workflow Background" 
            className="w-full h-full object-cover filter saturate-[0.8] contrast-[1.02] brightness-[0.97] opacity-[0.06]"
          />
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

                    <div className="relative w-full max-w-4xl aspect-[2/1] md:aspect-[2.8/1] max-h-[30vh] md:max-h-[35vh] border border-slate-200 bg-white/60 backdrop-blur-sm shadow-sm overflow-hidden flex items-center justify-center">
                      <div className="w-full h-full flex items-center justify-center p-4">
                        {step.illustration}
                      </div>
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
