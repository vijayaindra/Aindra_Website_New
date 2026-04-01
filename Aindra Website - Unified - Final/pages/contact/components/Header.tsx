
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="w-full px-6 py-4 flex items-center justify-between bg-white border-b border-gray-50">
      <div className="flex items-center space-x-2">
        <a href="#/" className="text-2xl font-bold tracking-tight text-[#00AEEF] flex items-center">
          Ai<span className="font-extrabold">NDRA</span>
        </a>
      </div>
      
      <div className="flex items-center space-x-3">
        <button className="w-10 h-10 rounded-full bg-[#00AEEF] text-white flex items-center justify-center hover:bg-blue-600 transition-colors">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-16 6h16" />
          </svg>
        </button>
        <a href="#/contact" className="px-6 py-2.5 bg-[#00AEEF] text-white font-bold text-sm rounded-full hover:bg-blue-600 transition-shadow shadow-md">
          Contact us
        </a>
      </div>
    </header>
  );
};

export default Header;
