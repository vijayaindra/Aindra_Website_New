import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 py-3 sm:py-4 flex items-center justify-between bg-white border-b border-gray-100 relative z-50">
      <div className="flex items-center">
        <a href="#/" className="text-xl sm:text-2xl font-semibold tracking-tight text-[#00AEEF]">AiNDRA</a>
      </div>

      <div className="flex items-center gap-2 sm:gap-3">
        <button className="w-11 h-11 flex items-center justify-center rounded-full bg-[#00AEEF] text-white hover:bg-[#0096ce] transition-colors" aria-label="Open menu">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <a href="#/contact" className="inline-flex h-11 items-center justify-center px-4 sm:px-6 bg-[#00AEEF] text-white font-semibold rounded-full hover:bg-[#0096ce] transition-shadow shadow-sm text-sm">
          Contact us
        </a>
      </div>
    </header>
  );
};

export default Header;
