
import React from 'react';

export const VisionXSection: React.FC = () => {
  const products = [
    { id: '01', title: 'Sample Preparation', active: false },
    { id: '02', title: 'Sample Scanning', active: true },
    { id: '03', title: 'Sample Analysis', active: false },
    { id: '04', title: 'Sample Reporting', active: false },
  ];

  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-white min-h-screen flex flex-col justify-center border-t border-slate-50">
      <div className="mb-12">
        <span className="text-[10px] font-bold tracking-[0.2em] text-[#00a3ff] uppercase">Our Products</span>
      </div>
      
      {/* Main Showcase Area */}
      <div className="grid grid-cols-12 gap-8 items-center">
        {/* Left Side: Stepper */}
        <div className="col-span-12 lg:col-span-2 space-y-12">
          <div className="flex flex-col space-y-8 relative">
            <div className="absolute left-[152px] top-0 h-full w-px bg-slate-100 hidden lg:block"></div>
            
            {products.map((p) => (
              <div key={p.id} className="flex items-center justify-between group">
                <div className={`transition-all duration-300 ${p.active ? 'opacity-100' : 'opacity-30'}`}>
                  <span className="block text-[10px] font-bold text-slate-900 mb-1">{p.id}</span>
                  <span className={`text-sm font-bold block max-w-[80px] leading-tight ${p.active ? 'text-slate-900' : 'text-slate-400'}`}>
                    {p.title}
                  </span>
                </div>
                {p.active && (
                  <div className="hidden lg:block w-1 h-16 bg-slate-900 absolute left-[150px] transition-all duration-500"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Center: Product Image */}
        <div className="col-span-12 lg:col-span-6 flex justify-center relative">
          <div className="relative group">
            <div className="absolute inset-0 bg-blue-100 blur-3xl rounded-full opacity-30 scale-110"></div>
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1000&auto=format&fit=crop" 
              alt="VisionX Device" 
              className="relative z-10 w-full max-w-lg mx-auto drop-shadow-[0_45px_45px_rgba(0,0,0,0.12)] transition-transform duration-700"
            />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 h-4/5 border-[16px] border-cyan-500/10 rounded-3xl blur-xl pointer-events-none"></div>
          </div>
        </div>

        {/* Right Side: Product Description */}
        <div className="col-span-12 lg:col-span-4 space-y-8">
          <h3 className="text-6xl font-bold text-slate-900 tracking-tight">
            VisionX
          </h3>
          <p className="text-lg text-slate-500 leading-relaxed font-light">
            Aindra's VisionX is a Brightfield whole slide image scanner used for high-resolution scanning of pathology samples. It supports high-throughput digital pathology with seamless integration.
          </p>
          <div className="pt-4">
            <button className="px-8 py-3 bg-[#00a3ff] text-white rounded-full font-bold text-sm tracking-widest uppercase hover:bg-blue-600 transition-all shadow-lg shadow-blue-100">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
