
import React from 'react';
import backgroundImage from '../assets/ProductImages/Background Image.png';

export const WorkflowSection: React.FC = () => {
  return (
    <section className="relative w-full min-h-[90vh] max-h-[800px]:min-h-[78vh] max-h-[750px]:min-h-[72vh] max-h-[700px]:min-h-[68vh] flex items-center justify-center overflow-hidden bg-white">
      {/* Background with Medical Aesthetics */}
      <div className="absolute inset-0 z-0 bg-[#f8fbff]">
        <img 
          src={backgroundImage}
          alt="H&E Stained Tissue Slide Background" 
          className="w-full h-full object-cover filter saturate-[1.2] contrast-[1.05] brightness-[0.2]"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-slate-900/60 to-transparent"></div>
      </div>

      {/* Narrative Intro Content */}
      <div className="relative z-10 px-6 md:px-12 max-w-6xl max-h-[800px]:max-w-5xl max-h-[750px]:max-w-4xl text-center">
        <p className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl max-h-[800px]:text-[clamp(2.1rem,3.5vw,3rem)] max-h-[800px]:leading-[1.12] max-h-[750px]:text-[clamp(1.9rem,3.1vw,2.6rem)] max-h-[700px]:text-[clamp(1.7rem,2.85vw,2.3rem)] font-medium leading-tight text-white/90">
          We’ve condensed the entire pathology lab from <span className="text-[#00a3ff] font-bold">staining</span> to <span className="text-[#00a3ff] font-bold">screening</span> into a unified digital workflow in 4 steps. No more fragmented tools or data silos. Just a seamless journey from physical glass to clinical insight.
        </p>
      </div>

      {/* Scroll Indicator Down */}
      <div className="absolute bottom-12 max-h-[800px]:bottom-8 max-h-[750px]:bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-4 max-h-[750px]:space-y-2.5 animate-bounce">
        <span className="text-[10px] font-bold text-white/40 uppercase tracking-[0.3em]">Explore Workflow</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/60 to-transparent"></div>
      </div>
    </section>
  );
};
