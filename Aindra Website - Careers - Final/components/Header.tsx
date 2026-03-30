
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="w-full px-6 py-5 flex items-center justify-between bg-white border-b border-gray-50">
      <div className="flex items-center">
        <span className="text-2xl font-bold tracking-tight text-[#00AEEF]">AiNDRA</span>
      </div>
      
      <div className="flex items-center space-x-3">
        <button className="w-10 h-10 flex items-center justify-center rounded-full bg-[#00AEEF] text-white hover:bg-[#0096ce] transition-colors">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <button className="px-6 py-2.5 bg-[#00AEEF] text-white text-sm font-bold rounded-full hover:bg-[#0096ce] transition-shadow shadow-sm">
          Contact us
        </button>
      </div>
    </header>
  );
};

export default Header;
