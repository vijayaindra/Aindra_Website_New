
import React from 'react';

export const AnalysisSection: React.FC = () => {
  return (
    <section className="relative min-h-screen bg-slate-900 overflow-hidden py-24 px-6 md:px-12 lg:px-24 flex items-center">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-600/10 to-transparent pointer-events-none"></div>
      
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        
        {/* Left Side: AI Visualization */}
        <div className="col-span-12 lg:col-span-7 relative order-2 lg:order-1">
          <div className="relative aspect-video rounded-2xl overflow-hidden border border-slate-700 shadow-2xl bg-slate-800 group">
            {/* The "Microscope View" */}
            <img 
              src="https://picsum.photos/id/1067/1200/800" 
              alt="AI Cell Detection" 
              className="w-full h-full object-cover opacity-60 filter saturate-150 contrast-125"
            />
            
            {/* AI Bounding Boxes Overlay */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-1/4 left-1/3 w-20 h-20 border-2 border-cyan-400 rounded-sm animate-pulse">
                <span className="absolute -top-6 left-0 text-[10px] font-mono text-cyan-400 bg-slate-900/80 px-1">MALIGNANT 98.4%</span>
              </div>
              <div className="absolute top-1/2 left-1/2 w-16 h-16 border-2 border-cyan-400/50 rounded-sm">
                 <span className="absolute -top-6 left-0 text-[10px] font-mono text-cyan-400/80 bg-slate-900/80 px-1">MALIGNANT 92.1%</span>
              </div>
              <div className="absolute bottom-1/4 right-1/4 w-24 h-24 border-2 border-slate-400/30 rounded-sm">
                 <span className="absolute -top-6 left-0 text-[10px] font-mono text-slate-400 bg-slate-900/80 px-1">BENIGN 84.2%</span>
              </div>
            </div>

            {/* Scanning Line Animation */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_15px_rgba(34,211,238,0.8)] animate-[scan_4s_ease-in-out_infinite]"></div>
          </div>
          
          {/* Data Tag */}
          <div className="absolute -bottom-6 -right-6 bg-slate-950 border border-slate-700 p-6 rounded-xl shadow-2xl hidden md:block">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-cyan-500/20 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">Processing Speed</p>
                <p className="text-2xl font-bold text-white">0.4s / slide</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Description */}
        <div className="col-span-12 lg:col-span-5 space-y-8 order-1 lg:order-2">
          <div className="space-y-4">
            <span className="text-[10px] font-bold tracking-[0.2em] text-cyan-400 uppercase">
              Step 02: Digital Insight
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Astra Cloud Analysis
            </h2>
          </div>
          
          <p className="text-lg text-slate-400 leading-relaxed font-light">
            Once digitized, our proprietary AI algorithms analyze thousands of cells in seconds. Astra provides oncologists with deep morphological insights, heatmaps of suspicious regions, and standardized reporting accessible from any device.
          </p>

          <ul className="space-y-4 pt-4">
            {[
              "Automated pre-screening of high-risk cases",
              "Real-time tele-pathology collaboration",
              "Standardized diagnostic workflows",
              "HIPAA-compliant cloud storage"
            ].map((item, i) => (
              <li key={i} className="flex items-center space-x-3 text-slate-300">
                <svg className="w-5 h-5 text-cyan-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm font-medium">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <style>{`
        @keyframes scan {
          0%, 100% { transform: translateY(0); opacity: 0; }
          5% { opacity: 1; }
          95% { opacity: 1; }
          100% { transform: translateY(450px); opacity: 0; }
        }
      `}</style>
    </section>
  );
};
