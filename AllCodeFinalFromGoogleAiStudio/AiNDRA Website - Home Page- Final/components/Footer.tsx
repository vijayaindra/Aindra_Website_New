
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#ecf1f4] px-6 md:px-12 lg:px-24 py-12 md:py-24 border-t border-slate-200">
      <div className="max-w-7xl mx-auto">
        
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row border-b border-slate-300 pb-12 md:pb-16">
          
          {/* Left Side: Large Logo */}
          <div className="flex-1 flex items-center justify-center md:justify-start pb-10 md:pb-0">
            <div className="flex items-center">
              <span className="text-6xl sm:text-7xl lg:text-[100px] font-extrabold tracking-tighter text-[#00a3ff] select-none">
                AiNDRA
              </span>
            </div>
          </div>

          {/* Vertical Divider (Hidden on Mobile) */}
          <div className="hidden md:block w-px bg-slate-300 mx-8 lg:mx-12"></div>

          {/* Right Side: Links and Social */}
          <div className="flex-[1.2] flex flex-col sm:flex-row justify-between pt-8 md:pt-0 gap-8">
            
            {/* Nav Column 1 */}
            <div className="space-y-4 md:space-y-6">
              <a href="#" className="block text-base md:text-lg font-medium text-slate-900 hover:text-[#00a3ff] transition-colors">Home</a>
              <a href="#" className="block text-base md:text-lg font-medium text-slate-900 hover:text-[#00a3ff] transition-colors">Solutions</a>
              <a href="#" className="block text-base md:text-lg font-medium text-slate-900 hover:text-[#00a3ff] transition-colors">About</a>
              <a href="#" className="block text-base md:text-lg font-medium text-slate-900 hover:text-[#00a3ff] transition-colors">Credibility</a>
            </div>

            {/* Nav Column 2: Products */}
            <div className="space-y-4 md:space-y-6">
              <span className="block text-base md:text-lg font-medium text-slate-900">Products</span>
              <div className="space-y-3 md:space-y-4">
                <a href="#" className="block text-base md:text-lg font-normal text-slate-400 hover:text-[#00a3ff] transition-colors">Intellistain</a>
                <a href="#" className="block text-base md:text-lg font-normal text-slate-400 hover:text-[#00a3ff] transition-colors">VisionX</a>
                <a href="#" className="block text-base md:text-lg font-normal text-slate-400 hover:text-[#00a3ff] transition-colors">Astra</a>
                <a href="#" className="block text-base md:text-lg font-normal text-slate-400 hover:text-[#00a3ff] transition-colors">Clustr</a>
              </div>
            </div>

            {/* Social Icon */}
            <div className="flex items-start">
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-slate-900 flex items-center justify-center hover:bg-slate-900 hover:text-white transition-all group"
              >
                <span className="text-lg md:text-xl font-bold tracking-tight">in</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright and Legal */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] md:text-sm text-slate-500 font-light text-center md:text-left">
          <div className="mb-4 md:mb-0">
            @2026 Aindra Systems. All rights reserved
          </div>
          <div className="flex items-center space-x-6 md:space-x-12">
            <a href="#" className="hover:text-slate-900 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-900 transition-colors">Terms and Conditions</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
