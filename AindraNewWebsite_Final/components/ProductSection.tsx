
import React, { useState, useEffect, useRef } from 'react';

interface WorkflowStep {
  id: string;
  title: string;
  caption: string;
  illustration: React.ReactNode;
}

export const ProductSection: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const steps: WorkflowStep[] = [
    {
      id: '01',
      title: 'Sample Preparation & Staining',
      caption: 'It has survived not only five centuries, but also the leap into electronic typesetting.',
      illustration: (
        <svg viewBox="0 0 1000 400" className="w-full h-full text-[#00a3ff]" fill="none" stroke="currentColor" strokeWidth="1">
          {/* Slides in perspective */}
          <path d="M350 280 L500 280 L540 240 L390 240 Z" className="fill-blue-50/20" />
          <path d="M420 260 L570 260 L610 220 L460 220 Z" className="fill-blue-50/20" />
          <path d="M490 240 L640 240 L680 200 L530 200 Z" className="fill-blue-50/20" />
          <path d="M560 220 L710 220 L750 180 L600 180 Z" className="fill-blue-50/20" />
          
          {/* Drops falling */}
          <path d="M440 80 Q450 120 440 150" strokeDasharray="3 3" />
          <path d="M440 40 Q455 50 440 65 Q425 50 440 40" />
          
          <path d="M510 60 Q520 100 510 130" strokeDasharray="3 3" />
          <path d="M510 20 Q525 30 510 45 Q495 30 510 20" />

          <path d="M580 40 Q590 80 580 110" strokeDasharray="3 3" />
          <path d="M580 0 Q595 10 580 25 Q565 10 580 0" />
          
          <path d="M650 20 Q660 60 650 90" strokeDasharray="3 3" />
          <path d="M650 -20 Q665 -10 650 5 Q635 -10 650 -20" />

          {/* Cells on the left */}
          <path d="M120 200 Q150 160 180 200 T240 190" strokeWidth="0.5" />
          <circle cx="150" cy="210" r="25" className="opacity-10" />
          <circle cx="200" cy="180" r="20" className="opacity-10" />
          <circle cx="180" cy="240" r="15" className="opacity-10" />
        </svg>
      ),
    },
    {
      id: '02',
      title: 'Digitization of Slides',
      caption: 'It has survived not only five centuries, but also the leap into electronic typesetting.',
      illustration: (
        <svg viewBox="0 0 1000 400" className="w-full h-full text-[#00a3ff]" fill="none" stroke="currentColor" strokeWidth="1">
          {/* Scanning Arm */}
          <path d="M350 100 H750" strokeWidth="2" />
          <path d="M390 100 V160" strokeWidth="2" />
          {/* Digital scan grid / pixels */}
          <rect x="580" y="120" width="12" height="12" className="fill-current" />
          <rect x="600" y="130" width="10" height="10" className="fill-current opacity-70" />
          <rect x="590" y="150" width="14" height="14" className="fill-current opacity-40" />
          <rect x="620" y="140" width="8" height="8" className="fill-current opacity-90" />
          <rect x="630" y="160" width="10" height="10" className="fill-current opacity-30" />
          <path d="M570 110 H680 V180 H570 Z" strokeDasharray="2 2" />
          {/* Slides moving under sensor */}
          <path d="M150 240 L330 240 L370 200 L190 200 Z" className="fill-blue-50/20" />
          <path d="M280 240 L460 240 L500 200 L320 200 Z" className="fill-blue-50/20" />
          <path d="M410 240 L590 240 L630 200 L450 200 Z" className="fill-blue-50/20" />
          <path d="M540 240 L720 240 L760 200 L580 200 Z" className="fill-blue-50/20" />
        </svg>
      ),
    },
    {
      id: '03',
      title: 'AI-Based Image Analysis',
      caption: 'It has survived not only five centuries, but also the leap into electronic typesetting.',
      illustration: (
        <svg viewBox="0 0 1000 400" className="w-full h-full text-[#00a3ff]" fill="none" stroke="currentColor" strokeWidth="1">
          {/* Neural nodes and connections */}
          <circle cx="450" cy="150" r="30" className="fill-blue-50/20" />
          <path d="M450 180 V320" strokeDasharray="2 2" />
          <path d="M450 150 L580 90" />
          <path d="M450 150 L580 210" />
          <path d="M450 150 L400 120" />
          <path d="M450 150 L400 180" />
          {/* Analysis monitors */}
          <rect x="580" y="60" width="200" height="120" rx="4" />
          <rect x="580" y="200" width="200" height="120" rx="4" />
          {/* Interior slide view */}
          <circle cx="680" cy="120" r="30" strokeDasharray="2 2" />
          <rect x="650" y="240" width="60" height="40" strokeDasharray="1 1" />
          {/* Slides on left */}
          <path d="M180 220 L280 220 L310 200 L210 200 Z" className="opacity-30" />
          <path d="M220 220 L320 220 L350 200 L250 200 Z" className="opacity-30" />
          <path d="M260 220 L360 220 L390 200 L290 200 Z" className="opacity-30" />
        </svg>
      ),
    },
    {
      id: '04',
      title: 'Review & Reporting',
      caption: 'It has survived not only five centuries, but also the leap into electronic typesetting.',
      illustration: (
        <svg viewBox="0 0 1000 400" className="w-full h-full text-[#00a3ff]" fill="none" stroke="currentColor" strokeWidth="1">
          {/* Central Diagnostic Platform */}
          <rect x="350" y="120" width="220" height="140" rx="2" />
          <path d="M360 140 H560" strokeWidth="0.5" />
          <rect x="370" y="160" width="40" height="40" className="fill-blue-50/20" />
          <rect x="420" y="160" width="40" height="40" className="fill-blue-50/20" />
          
          {/* Connected User Icons */}
          <g transform="translate(280, 240)">
            <circle cx="0" cy="0" r="35" />
            <path d="M-20 15 Q0 0 20 15 Q0 10 -20 15" />
          </g>
          <g transform="translate(580, 120)">
            <circle cx="0" cy="0" r="35" />
            <path d="M-20 15 Q0 0 20 15 Q0 10 -20 15" />
          </g>
          <g transform="translate(620, 280)">
            <circle cx="0" cy="0" r="35" />
            <path d="M-20 15 Q0 0 20 15 Q0 10 -20 15" />
          </g>
          
          {/* Connection dash lines */}
          <path d="M350 190 L315 240" strokeDasharray="3 3" />
          <path d="M570 150 L580 120" strokeDasharray="3 3" />
          <path d="M570 230 L620 280" strokeDasharray="3 3" />
        </svg>
      ),
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const { top, height } = sectionRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const progress = -top / (height - viewportHeight);
      setScrollProgress(Math.min(1, Math.max(0, progress)));
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const activeIndex = Math.min(steps.length - 1, Math.floor(scrollProgress * (steps.length + 0.1)));

  return (
    <div ref={sectionRef} className="relative h-[500vh] bg-white">
      {/* Sticky Frame */}
      <section className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden">
        
        {/* Persistent Background (The Tissue Slide) */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1631553127988-3475968f583f?q=80&w=2400&auto=format&fit=crop" 
            alt="Continuous Workflow Background" 
            className="w-full h-full object-cover filter saturate-[0.8] contrast-[1.02] brightness-[0.97] opacity-10"
          />
          {/* Subtle horizontal connecting line extension as seen in screenshots */}
          <div className="absolute top-1/2 right-0 w-1/2 h-[1px] bg-slate-200"></div>
        </div>

        {/* Top Centered Horizontal Stepper */}
        <div className="absolute top-16 w-full flex justify-center z-50">
          <div className="relative flex items-center w-64">
            <div className="absolute top-1/2 left-0 w-full h-[1px] bg-slate-200 -translate-y-1/2"></div>
            <div className="flex justify-between w-full relative">
              {steps.map((_, idx) => (
                <div 
                  key={idx}
                  className={`w-3 h-3 rounded-full border border-slate-300 bg-white transition-all duration-300
                    ${idx === activeIndex ? 'border-[#00a3ff] ring-2 ring-blue-100' : 'scale-75 opacity-50'}`}
                >
                  {idx === activeIndex && <div className="w-1.5 h-1.5 bg-[#00a3ff] rounded-full m-auto mt-[0.125rem]"></div>}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Content Viewport: Horizontal Movement Area */}
        <div className="relative w-full max-w-7xl px-6 md:px-12 lg:px-24 h-[60vh]">
          {steps.map((step, idx) => {
            // Horizontal shift: Current step is at 0, prev is -100%, next is 100%
            const xPos = (idx - scrollProgress * (steps.length)) * 100;
            const opacity = 1 - Math.abs(idx - scrollProgress * (steps.length)) * 2;

            return (
              <div 
                key={step.id}
                className="absolute inset-0 flex flex-col items-start justify-center transition-all duration-75"
                style={{ 
                  transform: `translateX(${xPos}%)`,
                  opacity: Math.max(0, opacity),
                  pointerEvents: idx === activeIndex ? 'auto' : 'none'
                }}
              >
                <div className="w-full">
                  {/* ID Indicator */}
                  <div className="text-[140px] md:text-[200px] font-bold text-[#00a3ff] leading-none tracking-tight -mb-6 opacity-80">
                    {step.id}
                  </div>
                  
                  {/* Step Title */}
                  <h3 className="text-3xl md:text-5xl font-medium text-slate-900 mb-12">
                    {step.title}
                  </h3>

                  {/* Illustration Frame - Blueprint Style as per Screenshots */}
                  <div className="relative w-full max-w-5xl aspect-[2.6/1] border border-slate-200 bg-white/40 backdrop-blur-sm shadow-sm overflow-hidden flex items-center justify-center">
                    <div className="w-full h-full flex items-center justify-center">
                      {step.illustration}
                    </div>
                  </div>

                  {/* Bottom Caption (Matches screenshots) */}
                  <p className="mt-12 text-slate-800 text-lg md:text-xl font-light leading-relaxed max-w-3xl">
                    {step.caption}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </section>
    </div>
  );
};
