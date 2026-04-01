
import React from 'react';

export const AstraSection: React.FC = () => {
  const products = [
    { id: '01', title: 'Sample Preparation', active: false },
    { id: '02', title: 'Sample Scanning', active: false },
    { id: '03', title: 'Sample Analysis', active: true },
    { id: '04', title: 'Sample Reporting', active: false },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(`section-${id}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-white min-h-screen flex flex-col justify-center border-t border-slate-50">
      {/* Main Showcase Area */}
      <div className="grid grid-cols-12 gap-8 items-center">
        {/* Left Side: Stepper */}
        <div className="col-span-12 lg:col-span-2 space-y-12">
          <div className="flex flex-col space-y-8 relative">
            {/* Vertical Line Container */}
            <div className="absolute left-[152px] top-0 h-full w-px bg-slate-100 hidden lg:block"></div>
            
            {products.map((p) => (
              <div 
                key={p.id} 
                onClick={() => scrollToSection(p.id)}
                className="flex items-center justify-between group cursor-pointer"
              >
                <div className={`transition-all duration-300 ${p.active ? 'opacity-100' : 'opacity-30 group-hover:opacity-60'}`}>
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

        {/* Center: Image (Pathology Slide) */}
        <div className="col-span-12 lg:col-span-6 flex justify-center relative">
          <div className="relative group">
            {/* Background shadow glow */}
            <div className="absolute inset-0 bg-purple-100 blur-3xl rounded-full opacity-20 scale-110"></div>
            <div className="rounded-2xl overflow-hidden shadow-2xl transition-transform duration-700 hover:scale-105 border border-slate-100">
                <img 
                src="https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=1000&auto=format&fit=crop" 
                alt="Astra Analysis Slide" 
                className="w-full max-w-lg mx-auto h-auto filter saturate-150 contrast-125 brightness-90"
                />
            </div>
          </div>
        </div>

        {/* Right Side: Product Description */}
        <div className="col-span-12 lg:col-span-4 space-y-8">
          <h3 className="text-6xl font-bold text-slate-900 tracking-tight">
            Astra
          </h3>
          <p className="text-lg text-slate-500 leading-relaxed font-light">
            Aindra builts purpose designed technology that supports every stage of this workflow, Aindra builts purpose designed technology that supports every stage of this workflow
          </p>
          <div className="pt-4">
            <button className="px-8 py-3 bg-[#1DA1F2] text-white rounded-full font-bold text-sm tracking-widest uppercase hover:bg-blue-600 transition-all shadow-lg shadow-blue-100 active:scale-95">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
