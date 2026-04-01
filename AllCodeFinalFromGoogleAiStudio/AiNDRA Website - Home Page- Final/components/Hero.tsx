
import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative min-h-[60vh] py-8 md:py-12">
      {/* Left Content: Large Heading */}
      <div className="lg:col-span-7 z-20">
        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-[5.5rem] font-bold leading-[1.1] md:leading-[1.05] tracking-tight text-slate-900 text-balance">
          AI-Powered Cancer Detection at the Point of Care
        </h1>
      </div>

      {/* Right Content: Circular Image & Mission Statement */}
      <div className="lg:col-span-5 flex flex-col items-center lg:items-end justify-center relative mt-8 lg:mt-0">
        <div className="relative w-full max-w-[320px] sm:max-w-[420px] lg:max-w-[580px] aspect-square flex items-center justify-center">
          {/* Main Hero Image in a large circular frame */}
          <div className="absolute inset-0 rounded-full overflow-hidden shadow-[0_40px_80px_-15px_rgba(0,0,0,0.15)] ring-1 ring-slate-100 z-10 bg-slate-50">
            <img 
              src="https://images.unsplash.com/photo-1559757175-5700dde675bc?q=80&w=1600&auto=format&fit=crop" 
              alt="Cytology Pathology Slide" 
              className="w-full h-full object-cover filter saturate-[1.1] contrast-[1.02] scale-110"
            />
          </div>
          
          {/* Decorative Ring (Bezel) */}
          <div className="absolute -inset-2 rounded-full border border-slate-100 z-0"></div>
          <div className="absolute -inset-6 rounded-full border border-slate-50 z-0 opacity-40"></div>
        </div>

        {/* Mission Text: Positioned below the circle, right-aligned */}
        <div className="mt-8 md:mt-12 lg:max-w-[420px] text-center lg:text-right z-20">
          <p className="text-lg md:text-2xl text-slate-500 font-light leading-snug">
            At Aindra, we are building a world where Clinical Pathology is <span className="text-slate-900 font-semibold">Data driven</span>, <span className="text-slate-900 font-semibold">Fast</span> and <span className="text-slate-900 font-semibold">Patient focused</span>.
          </p>
        </div>
      </div>
    </section>
  );
};
