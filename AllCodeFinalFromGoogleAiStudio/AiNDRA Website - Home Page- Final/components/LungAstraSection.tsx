
import React from 'react';

export const LungAstraSection: React.FC = () => {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-[#f1f5f9] flex flex-col justify-center">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-12 gap-12 lg:gap-24 items-center">
          
          {/* Left: Solution Description */}
          <div className="col-span-12 lg:col-span-5 space-y-8 order-2 lg:order-1">
            <h3 className="text-5xl font-bold text-slate-900 tracking-tight">
              LungAstra
            </h3>
            <p className="text-xl text-slate-600 leading-relaxed font-normal">
              Geography is no longer a barrier. Slides are reviewed remotely, and Bethesda-format reports are generated instantly, bridging the gap between rural clinics and expert pathologists.
            </p>
          </div>

          {/* Right: Medical Illustration */}
          <div className="col-span-12 lg:col-span-7 order-1 lg:order-2">
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-xl bg-white aspect-[4/3] lg:aspect-auto">
              <img 
                src="https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=1600&auto=format&fit=crop" 
                alt="Lung & Throat Health Visualization" 
                className="w-full h-full object-cover filter saturate-150 contrast-125 brightness-105 transition-transform duration-1000 hover:scale-105"
              />
              
              {/* Highlight Overlay (Simulating the glowing tumor in screenshot) */}
              <div className="absolute top-[55%] left-[58%] w-16 h-16 bg-orange-400/40 blur-2xl rounded-full animate-pulse"></div>
              <div className="absolute top-[58%] left-[61%] w-6 h-6 bg-orange-300 rounded-full shadow-[0_0_20px_rgba(251,146,60,0.8)] border border-white/20"></div>

              {/* Decorative Sparkle (as seen in screenshot bottom right) */}
              <div className="absolute bottom-8 right-8 text-white/40">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z" />
                </svg>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
