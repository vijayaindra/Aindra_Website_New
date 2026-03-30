
import React from 'react';

export const WorkflowSection: React.FC = () => {
  return (
    <section className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden bg-white">
      {/* Background with Medical Aesthetics */}
      <div className="absolute inset-0 z-0 bg-[#f8fbff]">
        <img 
          src="https://images.unsplash.com/photo-1631553127988-3475968f583f?q=80&w=2400&auto=format&fit=crop" 
          alt="H&E Stained Tissue Slide Background" 
          className="w-full h-full object-cover filter saturate-[1.2] contrast-[1.05] brightness-[0.2]"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-slate-900/60 to-transparent"></div>
      </div>

      {/* Narrative Intro Content */}
      <div className="relative z-10 px-6 md:px-12 max-w-6xl text-center">
        <p className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium leading-tight text-white/90">
          We’ve condensed the entire pathology lab from <span className="text-[#00a3ff] font-bold">staining</span> to <span className="text-[#00a3ff] font-bold">screening</span> into a unified digital workflow in 4 steps. No more fragmented tools or data silos. Just a seamless journey from physical glass to clinical insight.
        </p>
      </div>

      {/* Scroll Indicator Down */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-4 animate-bounce">
        <span className="text-[10px] font-bold text-white/40 uppercase tracking-[0.3em]">Explore Workflow</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/60 to-transparent"></div>
      </div>
    </section>
  );
};
