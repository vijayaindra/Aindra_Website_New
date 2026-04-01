
import React from 'react';

export const CervAstraSection: React.FC = () => {
  return (
    <section className="py-32 px-6 md:px-12 lg:px-24 bg-[#f1f5f9] min-h-screen flex flex-col justify-center">
      <div className="max-w-7xl mx-auto w-full space-y-24">
        
        {/* Top Header Row */}
        <div className="grid grid-cols-12 gap-8 items-start">
          <div className="col-span-12 lg:col-span-3">
            <span className="text-[10px] font-bold tracking-[0.2em] text-[#00a3ff] uppercase">
              Our Solutions
            </span>
          </div>
          <div className="col-span-12 lg:col-span-9">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-[1.15] tracking-tight">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </h2>
          </div>
        </div>

        {/* Bottom Content Row */}
        <div className="grid grid-cols-12 gap-12 lg:gap-24 items-center">
          {/* Left: Medical Illustration */}
          <div className="col-span-12 lg:col-span-7">
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-xl bg-white">
              <img 
                src="https://images.unsplash.com/photo-1559757175-5700dde675bc?q=80&w=1600&auto=format&fit=crop" 
                alt="Cervical Health Visualization" 
                className="w-full h-auto object-cover filter saturate-125 contrast-110 brightness-105 transition-transform duration-1000 hover:scale-105"
              />
              {/* Subtle highlight overlay to match the red glow in screenshot */}
              <div className="absolute top-1/2 left-[45%] w-24 h-24 bg-red-500/20 blur-3xl rounded-full"></div>
            </div>
          </div>

          {/* Right: Solution Description */}
          <div className="col-span-12 lg:col-span-5 space-y-8">
            <h3 className="text-5xl font-bold text-slate-900 tracking-tight">
              CervAstra
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
