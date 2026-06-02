
import React from 'react';
import backgroundImage from '../assets/ProductImages/Background Image.png';

export const Hero: React.FC = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 max-h-[800px]:gap-6 max-h-[750px]:gap-4 items-center relative min-h-[clamp(420px,60vh,760px)] max-h-[800px]:min-h-[500px] max-h-[750px]:min-h-[460px] max-h-[700px]:min-h-[430px] max-[900px]:min-h-[520px] py-4 md:py-8 max-h-[800px]:py-2 max-h-[750px]:py-1.5 max-[900px]:py-3">
      {/* Left Content: Large Heading */}
      <div className="lg:col-span-7 z-20">
        <h1 className="text-[clamp(2rem,6vw,4.1rem)] max-h-[800px]:text-[clamp(2.5rem,4.7vw,3.75rem)] max-h-[800px]:leading-[1.02] max-h-[750px]:text-[clamp(2.25rem,4.35vw,3.35rem)] max-h-[700px]:text-[clamp(2.05rem,3.95vw,3rem)] font-bold leading-[1.1] tracking-tight text-[#111d3a] text-balance max-w-4xl max-h-[800px]:max-w-[38rem] max-h-[750px]:max-w-[34rem]">
          Reducing Screening Time by 60% with Unified Ecosystem for Computational Pathology.
        </h1>
        <p className="mt-6 md:mt-8 max-h-[800px]:mt-4 max-h-[750px]:mt-3 max-[900px]:mt-5 text-[clamp(1rem,2.3vw,2rem)] max-h-[800px]:text-[clamp(0.95rem,1.7vw,1.35rem)] max-h-[750px]:text-[clamp(0.92rem,1.55vw,1.2rem)] text-[#6f8098] max-w-3xl max-h-[800px]:max-w-[30rem] leading-relaxed">
          Empowering pathologists with 99% diagnostic consistency and point-of-care AI-assisted detection.
        </p>
      </div>

      {/* Right Content: Circular Image & Mission Statement */}
      <div className="lg:col-span-5 flex flex-col items-center lg:items-end justify-center relative mt-8 lg:mt-0">
        <div className="relative w-full max-w-[280px] sm:max-w-[360px] md:max-w-[420px] lg:max-w-[560px] max-h-[800px]:lg:max-w-[450px] max-h-[750px]:lg:max-w-[400px] max-h-[700px]:lg:max-w-[360px] max-[900px]:max-w-[460px] aspect-square flex items-center justify-center">
          {/* Main Hero Image in a large circular frame */}
          <div className="absolute inset-0 rounded-full overflow-hidden shadow-[0_40px_80px_-15px_rgba(0,0,0,0.15)] ring-1 ring-[#e9edf3] z-10 bg-[#f7f9fc]">
            <img 
              src={backgroundImage}
              alt="Cytology Pathology Slide" 
              className="w-full h-full object-cover filter saturate-[1.1] contrast-[1.02] scale-110"
            />
          </div>
          
          {/* Decorative Ring (Bezel) */}
          <div className="absolute -inset-2 rounded-full border border-[#e6ebf2] z-0"></div>
          <div className="absolute -inset-6 rounded-full border border-[#f0f3f7] z-0 opacity-40"></div>
        </div>

        {/* Mission Text: Positioned below the circle, right-aligned */}
        <div className="mt-6 md:mt-10 max-h-[800px]:mt-4 max-h-[750px]:mt-3 lg:max-w-[420px] max-h-[800px]:lg:max-w-[320px] max-h-[750px]:lg:max-w-[280px] text-center lg:text-right z-20">
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl max-h-[800px]:lg:text-[1.15rem] max-h-[750px]:lg:text-[1rem] text-[#7b8ca2] font-light leading-snug">
            At Aindra, we are building a world where Clinical Pathology is <span className="text-[#1b2742] font-semibold">Data driven</span>, <span className="text-[#1b2742] font-semibold">Fast</span> and <span className="text-[#1b2742] font-semibold">Patient focused</span>.
          </p>
        </div>
      </div>
    </section>
  );
};
