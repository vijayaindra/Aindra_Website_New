
import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative min-h-[60vh] py-4 md:py-8">
      {/* Left Content: Large Heading */}
      <div className="lg:col-span-7 z-20">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[4.1rem] font-bold leading-[1.1] tracking-tight text-[#111d3a] text-balance max-w-4xl">
          Reducing Screening Time by 60% with Unified Ecosystem for Computational Pathology.
        </h1>
        <p className="mt-6 md:mt-8 text-base sm:text-lg md:text-2xl lg:text-3xl text-[#6f8098] max-w-3xl leading-relaxed">
          Empowering pathologists with 99% diagnostic consistency and point-of-care AI-assisted detection.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-4">
          <a
            href="#/contact"
            className="inline-flex min-h-11 items-center justify-center px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-[#12a8ea] text-white font-semibold tracking-wide uppercase text-xs sm:text-sm hover:bg-[#0f9ddd] transition-colors"
          >
            Request a demo
          </a>
          <a
            href="#/contact"
            className="inline-flex min-h-11 items-center justify-center px-6 sm:px-8 py-3 sm:py-4 rounded-full border border-[#d8e0ea] text-[#2f3e59] font-semibold tracking-wide uppercase text-xs sm:text-sm hover:bg-[#f6f8fb] transition-colors"
          >
            Talk to a clinical expert
          </a>
        </div>
      </div>

      {/* Right Content: Circular Image & Mission Statement */}
      <div className="lg:col-span-5 flex flex-col items-center lg:items-end justify-center relative mt-8 lg:mt-0">
        <div className="relative w-full max-w-[280px] sm:max-w-[360px] md:max-w-[420px] lg:max-w-[560px] aspect-square flex items-center justify-center">
          {/* Main Hero Image in a large circular frame */}
          <div className="absolute inset-0 rounded-full overflow-hidden shadow-[0_40px_80px_-15px_rgba(0,0,0,0.15)] ring-1 ring-[#e9edf3] z-10 bg-[#f7f9fc]">
            <img 
              src="https://images.unsplash.com/photo-1559757175-5700dde675bc?q=80&w=1600&auto=format&fit=crop" 
              alt="Cytology Pathology Slide" 
              className="w-full h-full object-cover filter saturate-[1.1] contrast-[1.02] scale-110"
            />
          </div>
          
          {/* Decorative Ring (Bezel) */}
          <div className="absolute -inset-2 rounded-full border border-[#e6ebf2] z-0"></div>
          <div className="absolute -inset-6 rounded-full border border-[#f0f3f7] z-0 opacity-40"></div>
        </div>

        {/* Mission Text: Positioned below the circle, right-aligned */}
        <div className="mt-6 md:mt-10 lg:max-w-[420px] text-center lg:text-right z-20">
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#7b8ca2] font-light leading-snug">
            At Aindra, we are building a world where Clinical Pathology is <span className="text-[#1b2742] font-semibold">Data driven</span>, <span className="text-[#1b2742] font-semibold">Fast</span> and <span className="text-[#1b2742] font-semibold">Patient focused</span>.
          </p>
        </div>
      </div>
    </section>
  );
};
