
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#f1f3f5] pt-24 pb-12 px-6 md:px-12 border-t border-gray-200">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 pb-20">
          <div className="flex items-center justify-center lg:justify-start">
            <div className="text-[64px] md:text-[84px] font-bold tracking-[-0.03em] text-[#00AEEF] flex items-baseline">
              Ai<span className="relative">NDRA</span>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-12 lg:gap-24 relative">
            <div className="hidden lg:block absolute left-[-40px] top-[-40px] bottom-[-40px] w-[1px] bg-gray-300"></div>
            <div className="flex flex-col space-y-4">
              <a href="#" className="text-[16px] font-bold text-gray-800 hover:text-[#00AEEF] transition-colors">Home</a>
              <a href="#" className="text-[16px] font-bold text-gray-800 hover:text-[#00AEEF] transition-colors">Solutions</a>
              <a href="#" className="text-[16px] font-bold text-gray-800 hover:text-[#00AEEF] transition-colors">About</a>
              <a href="#" className="text-[16px] font-bold text-gray-800 hover:text-[#00AEEF] transition-colors">Credibility</a>
            </div>
            <div className="flex flex-col space-y-4">
              <span className="text-[16px] font-bold text-gray-800">Products</span>
              <div className="flex flex-col space-y-3 pt-1">
                <a href="#" className="text-[15px] font-medium text-gray-400 hover:text-gray-900 transition-colors">Intellistain</a>
                <a href="#" className="text-[15px] font-medium text-gray-400 hover:text-gray-900 transition-colors">Astra</a>
                <a href="#" className="text-[15px] font-medium text-gray-400 hover:text-gray-900 transition-colors">Clustr</a>
              </div>
            </div>
            <div className="flex-1 flex justify-start md:justify-end items-start">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border-2 border-black flex items-center justify-center hover:bg-black hover:text-white transition-all group">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="pt-10 border-t border-gray-300 flex flex-col md:flex-row items-center justify-between gap-6 text-[13px] font-medium text-gray-500">
          <div>@2026 Aindra Systems. All rights reserved</div>
          <div className="flex items-center space-x-12">
            <a href="#" className="hover:text-gray-900 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gray-900 transition-colors">Terms and Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
