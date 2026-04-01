
import React from 'react';

export const TrustAndMarketingSection: React.FC = () => {
  return (
    <section className="relative w-full overflow-hidden flex flex-col md:flex-row min-h-[600px]">
      
      {/* Left Column: Why Trust Us */}
      <div className="relative w-full md:w-[60%] flex flex-col justify-center p-12 md:p-20 lg:p-32 overflow-hidden">
        {/* Blurry Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1559757175-5700dde675bc?q=80&w=2000&auto=format&fit=crop" 
            alt="Medical Background" 
            className="w-full h-full object-cover scale-110 blur-[40px] opacity-70"
          />
          {/* Overlay Gradient for Readability */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 to-slate-900/60"></div>
        </div>

        <div className="relative z-10 space-y-8">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-white tracking-tight leading-tight max-w-2xl">
            Rigorous enough for the lab. Ready for the world.
          </h2>
          <p className="text-white/80 text-lg md:text-xl font-light leading-relaxed max-w-xl">
            We are building the new standard for computational pathology. See why leading institutions choose Aindra for precision, speed, and reliability.
          </p>
          <div className="pt-4">
            <button className="px-10 py-4 bg-white text-slate-900 rounded-full font-bold text-sm tracking-widest uppercase hover:bg-[#00a3ff] hover:text-white transition-all shadow-xl">
              Why Trust Us
            </button>
          </div>
        </div>
      </div>

      {/* Right Column: Clustr Marketing */}
      <div className="w-full md:w-[40%] bg-white flex flex-col justify-center p-12 md:p-20 lg:p-24 border-l border-slate-100">
        <div className="space-y-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-slate-900 tracking-tighter leading-tight">
            &lt; Clustr marketing website &gt;
          </h2>
          <div className="pt-8">
            <button className="px-12 py-4 border border-slate-900 rounded-full font-bold text-sm tracking-widest uppercase hover:bg-slate-900 hover:text-white transition-all">
              Visit
            </button>
          </div>
        </div>
      </div>

    </section>
  );
};
