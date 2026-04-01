
import React from 'react';

export const IntellistainSection: React.FC = () => {
  const steps = [
    { id: '01', title: 'Sample Preparation', active: true },
    { id: '02', title: 'Sample Preparation', active: false },
    { id: '03', title: 'Sample Preparation', active: false },
    { id: '04', title: 'Sample Preparation', active: false },
  ];

  return (
    <section className="relative min-h-screen bg-white overflow-hidden flex flex-col pt-32 pb-24 px-6 md:px-12 lg:px-24 border-t border-slate-100">
      {/* Background Grid Lines */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-[20%] top-0 bottom-0 w-px bg-slate-100"></div>
        <div className="absolute left-[66%] top-0 bottom-0 w-px bg-slate-100"></div>
        <div className="absolute top-[57%] left-0 right-0 h-px bg-slate-100"></div>
      </div>

      {/* Top Header Row */}
      <div className="relative z-10 grid grid-cols-12 gap-8 mb-16">
        <div className="col-span-12 lg:col-span-2">
          <div className="flex items-center space-x-2">
             <span className="text-[10px] font-bold tracking-[0.2em] text-[#00a3ff] uppercase">Our Products</span>
             <div className="flex items-center">
                <div className="w-16 h-px bg-[#00a3ff]/30"></div>
                <div className="w-1.5 h-1.5 rounded-full border border-[#00a3ff]/50"></div>
             </div>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-10">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-slate-900 leading-[1.1] max-w-4xl">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </h2>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 grid grid-cols-12 gap-8 flex-1 items-center">
        
        {/* Left Side: Vertical Stepper */}
        <div className="col-span-12 lg:col-span-2">
          <div className="flex flex-col space-y-10 relative">
            {/* Active indicator line */}
            <div className="absolute left-[150px] top-0 h-16 w-[2px] bg-slate-900 hidden lg:block"></div>
            
            {steps.map((step) => (
              <div key={step.id} className={`transition-all duration-500 ${step.active ? 'opacity-100' : 'opacity-20'}`}>
                <span className="block text-[10px] font-bold text-slate-900 mb-1">{step.id}</span>
                <span className={`text-sm font-bold block max-w-[80px] leading-tight ${step.active ? 'text-slate-900' : 'text-slate-400'}`}>
                  {step.title}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Center: Large Product Image */}
        <div className="col-span-12 lg:col-span-6 flex justify-center py-12">
          <div className="relative w-full max-w-lg">
            {/* Subtle glow behind product */}
            <div className="absolute inset-0 bg-blue-50 blur-[100px] rounded-full opacity-60"></div>
            <img 
              src="https://www.aindra.in/wp-content/uploads/2018/10/Intellistain.png" 
              alt="Intellistain Device" 
              className="relative z-10 w-full h-auto object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.08)] transition-transform duration-700 hover:scale-[1.02]"
              onError={(e) => {
                // Fallback image if the Aindra official image doesn't load
                e.currentTarget.src = "https://images.unsplash.com/photo-1579165466541-71835479444a?q=80&w=800&auto=format&fit=crop";
              }}
            />
          </div>
        </div>

        {/* Right Side: Product Details */}
        <div className="col-span-12 lg:col-span-4 pl-0 lg:pl-12 space-y-6">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-6 h-6 bg-[#00a3ff] rounded-sm flex items-center justify-center text-[10px] font-bold text-white">T</div>
              <h3 className="text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight border-b border-blue-400/30 inline-block pb-2">
                Intellistain
              </h3>
            </div>
            <p className="text-base text-slate-500 leading-relaxed font-light max-w-sm">
              Aindra builts purpose designed technology that supports every stage of this workflow, Aindra builts purpose designed technology that supports every stage of this workflow
            </p>
          </div>
          
          <div className="pt-4">
            <button className="px-8 py-2.5 bg-[#00a3ff] text-white rounded-full font-bold text-[11px] tracking-widest uppercase hover:bg-blue-600 transition-all shadow-lg shadow-blue-100 active:scale-95">
              Learn More
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
