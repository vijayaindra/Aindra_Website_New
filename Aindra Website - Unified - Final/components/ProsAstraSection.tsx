
import React from 'react';

export const ProsAstraSection: React.FC = () => {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-[#f1f5f9] flex flex-col justify-center">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-12 gap-12 lg:gap-24 items-center">
          
          {/* Left: Medical Illustration */}
          <div className="col-span-12 lg:col-span-7">
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-xl bg-white aspect-[4/3] lg:aspect-auto">
              <img 
                src="https://images.unsplash.com/photo-1559757175-5700dde675bc?q=80&w=1600&auto=format&fit=crop" 
                alt="Prostate Health Visualization" 
                className="w-full h-full object-cover filter saturate-125 contrast-110 brightness-105 transition-transform duration-1000 hover:scale-105"
              />
              
              {/* Highlight Overlay (Simulating the glowing orange tumor/lesion in screenshot) */}
              <div className="absolute top-[45%] left-[40%] w-32 h-32 bg-orange-500/20 blur-3xl rounded-full"></div>
              <div className="absolute top-[52%] left-[44%] w-10 h-10 bg-orange-400/80 rounded-full blur-[8px] animate-pulse"></div>
              <div className="absolute top-[53%] left-[45%] w-6 h-6 bg-orange-200 rounded-full shadow-[0_0_20px_rgba(251,146,60,1)] border border-white/40"></div>
            </div>
          </div>

          {/* Right: Solution Description */}
          <div className="col-span-12 lg:col-span-5 space-y-8">
            <h3 className="text-5xl font-bold text-slate-900 tracking-tight">
              ProsAstra
            </h3>
            <p className="text-xl text-slate-600 leading-relaxed font-normal">
              Geography is no longer a barrier. Slides are reviewed remotely, and Bethesda-format reports are generated instantly, bridging the gap between rural clinics and expert pathologists.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};
