
import React from 'react';

export const ClustrSection: React.FC = () => {
  const products = [
    { id: '01', title: 'Sample Preparation', active: false },
    { id: '02', title: 'Sample Scanning', active: false },
    { id: '03', title: 'Sample Analysis', active: false },
    { id: '04', title: 'Sample Reporting', active: true },
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

        {/* Center: Desktop Monitor UI (Clustr Platform) */}
        <div className="col-span-12 lg:col-span-6 flex justify-center relative">
          <div className="relative w-full max-w-2xl transform transition-transform duration-700 hover:scale-[1.02]">
            {/* Monitor Frame */}
            <div className="relative bg-black rounded-t-xl p-2 pb-0 shadow-[0_20px_50px_rgba(0,0,0,0.2)] border-x-4 border-t-4 border-slate-800">
              <div className="bg-white rounded-t-lg overflow-hidden h-[340px] flex flex-col">
                {/* Mock UI Header */}
                <header className="px-4 py-2 border-b border-slate-100 flex items-center justify-between bg-white">
                   <span className="text-[10px] font-extrabold tracking-tighter text-cyan-500">AiNDRA</span>
                   <button className="bg-blue-600 text-[8px] text-white px-3 py-1 rounded font-bold uppercase tracking-wider">Contact / Book Demo</button>
                </header>
                
                {/* Mock UI Content */}
                <div className="flex-1 p-6 bg-[#f8fbff] grid grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <h4 className="text-xl font-bold text-slate-900 leading-tight">
                      Aindra's VisionX is a Brightfield whole slides image scanner used for scanning of pathology samples slides.
                    </h4>
                    <p className="text-[8px] text-slate-400 max-w-[200px]">
                      Advanced digital pathology solutions for accurate diagnosis and seamless workflow integration.
                    </p>
                  </div>
                  <div className="flex items-center justify-center">
                    {/* Interior Mock Monitor/Tablet */}
                    <div className="w-full aspect-video bg-slate-900 rounded-lg p-1 shadow-inner relative overflow-hidden border border-slate-700">
                       <div className="w-full h-full bg-slate-50 rounded flex items-center justify-center p-4">
                          <img src="https://picsum.photos/id/1067/200/200" className="w-16 h-16 rounded-full opacity-60 mix-blend-multiply" alt="cell mock" />
                       </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Card Mockups */}
                <div className="px-6 pb-6 grid grid-cols-3 gap-3 bg-[#f8fbff]">
                  {['Cytology', 'Histology', 'Hematology'].map((title, i) => (
                    <div key={i} className="bg-white rounded p-3 border border-slate-100 shadow-sm flex flex-col space-y-1">
                      <div className="w-6 h-6 bg-slate-100 rounded mb-1"></div>
                      <span className="text-[9px] font-bold text-slate-900">{title}</span>
                      <div className="space-y-1">
                        <div className="h-[3px] w-full bg-slate-100 rounded"></div>
                        <div className="h-[3px] w-3/4 bg-slate-100 rounded"></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* Monitor Stand */}
            <div className="w-full flex flex-col items-center">
               <div className="w-24 h-20 bg-gradient-to-b from-slate-400 to-slate-200"></div>
               <div className="w-32 h-2 bg-slate-300 rounded-b-xl shadow-md"></div>
            </div>
          </div>
        </div>

        {/* Right Side: Product Description */}
        <div className="col-span-12 lg:col-span-4 space-y-8">
          <h3 className="text-6xl font-bold text-slate-900 tracking-tight">
            Clustr
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
