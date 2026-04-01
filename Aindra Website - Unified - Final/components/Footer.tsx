import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#ecf1f4] px-6 md:px-12 lg:px-24 py-12 md:py-24 border-t border-slate-200">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row border-b border-slate-300 pb-12 md:pb-16">
          <div className="flex-1 flex items-center justify-center md:justify-start pb-10 md:pb-0">
            <div className="flex items-center">
              <span className="text-6xl sm:text-7xl lg:text-[100px] font-extrabold tracking-tighter text-[#00a3ff] select-none">
                AiNDRA
              </span>
            </div>
          </div>

          <div className="hidden md:block w-px bg-slate-300 mx-8 lg:mx-12"></div>

          <div className="flex-[1.2] flex flex-col sm:flex-row justify-between pt-8 md:pt-0 gap-8">
            <div className="space-y-4 md:space-y-6">
              <a href="#/" className="block text-base md:text-lg font-medium text-slate-900 hover:text-[#00a3ff] transition-colors">Home</a>
              <a href="#" className="block text-base md:text-lg font-medium text-slate-900 hover:text-[#00a3ff] transition-colors">Clinical Validation</a>
              <a href="#" className="block text-base md:text-lg font-medium text-slate-900 hover:text-[#00a3ff] transition-colors">Case Studies</a>
              <a href="#" className="block text-base md:text-lg font-medium text-slate-900 hover:text-[#00a3ff] transition-colors">Regulatory</a>
            </div>

            <div className="space-y-4 md:space-y-6">
              <span className="block text-base md:text-lg font-medium text-slate-900">Solutions</span>
              <div className="space-y-3 md:space-y-4">
                <a href="#/astra" className="block text-base md:text-lg font-normal text-slate-400 hover:text-[#00a3ff] transition-colors">CervAstra</a>
                <a href="#/astra" className="block text-base md:text-lg font-normal text-slate-400 hover:text-[#00a3ff] transition-colors">LungAstra</a>
                <a href="#/astra" className="block text-base md:text-lg font-normal text-slate-400 hover:text-[#00a3ff] transition-colors">ThyroAstra</a>
                <a href="#/astra" className="block text-base md:text-lg font-normal text-slate-400 hover:text-[#00a3ff] transition-colors">ProsAstra</a>
              </div>
            </div>

            <div className="flex flex-col items-start gap-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-slate-900 flex items-center justify-center hover:bg-slate-900 hover:text-white transition-all group"
              >
                <span className="text-lg md:text-xl font-bold tracking-tight">in</span>
              </a>
              <div>
                <div className="text-[10px] font-bold tracking-[0.16em] text-slate-400 uppercase mb-2">Certifications</div>
                <div className="flex gap-2">
                  <span className="px-2 py-1 border border-slate-300 text-[9px] text-slate-500 font-bold">CDSCO</span>
                  <span className="px-2 py-1 border border-slate-300 text-[9px] text-slate-500 font-bold">CE-IVD</span>
                  <span className="px-2 py-1 border border-slate-300 text-[9px] text-slate-500 font-bold">ISO 13485</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] md:text-sm text-slate-500 font-light text-center md:text-left">
          <div className="mb-4 md:mb-0">@2026 Aindra Systems. All rights reserved</div>
          <div className="flex items-center space-x-6 md:space-x-12">
            <a href="#" className="hover:text-slate-900 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-900 transition-colors">Terms and Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
