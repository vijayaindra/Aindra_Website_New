import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#f1f3f5] pt-14 md:pt-16 lg:pt-20 pb-10 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 border-t border-gray-200">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 pb-12 md:pb-14">
          <div className="flex items-center justify-center lg:justify-start">
            <div className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-[-0.03em] text-[#00AEEF] flex items-baseline">
              Ai<span className="relative">NDRA</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-10 lg:gap-16 relative">
            <div className="flex flex-col space-y-3">
              <a href="#/" className="text-[16px] font-bold text-gray-800 hover:text-[#00AEEF] transition-colors">Home</a>
              <a href="#/astra" className="text-[16px] font-bold text-gray-800 hover:text-[#00AEEF] transition-colors">Solutions</a>
              <a href="#/about" className="text-[16px] font-bold text-gray-800 hover:text-[#00AEEF] transition-colors">About</a>
              <a href="#/clustr" className="text-[16px] font-bold text-gray-800 hover:text-[#00AEEF] transition-colors">Credibility</a>
            </div>
            <div className="flex flex-col space-y-3">
              <span className="text-[16px] font-bold text-gray-800">Products</span>
              <div className="flex flex-col space-y-2 pt-1">
                <a href="#/intellistain" className="text-[15px] font-medium text-gray-500 hover:text-gray-900 transition-colors">Intellistain</a>
                <a href="#/visionx" className="text-[15px] font-medium text-gray-500 hover:text-gray-900 transition-colors">VisionX</a>
                <a href="#/astra" className="text-[15px] font-medium text-gray-500 hover:text-gray-900 transition-colors">Astra</a>
                <a href="#/clustr" className="text-[15px] font-medium text-gray-500 hover:text-gray-900 transition-colors">Clustr</a>
              </div>
            </div>
            <div className="sm:ml-auto">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-full border-2 border-black flex items-center justify-center hover:bg-black hover:text-white transition-all group">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-300 flex flex-col md:flex-row items-center justify-between gap-4 text-[12px] md:text-[13px] font-medium text-gray-500 text-center md:text-left">
          <div>@2026 Aindra Systems. All rights reserved</div>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
            <a href="#" className="hover:text-gray-900 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gray-900 transition-colors">Terms and Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
